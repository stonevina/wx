'use strict';

var async = require('async');
var rp = require('request-promise');

var WxOpenid = require('../../models/WxOpenid');
var base = require('./index');
var oauth = require('./oauth');
var cache = require('./cache');

var logger = require('log4js_tc').getLogger('cc:h5:account');

var syncUserInfo = require('./syncUserInfo');
var allOpenid = [];
var diff = [];

var _lastAllOpenidArray = [];
var currentAllOpenidArray = [];

//所有的openid key
var allOpenidKEY = 'h5:wx:openid';

//同步订阅号用户openid
var syncWxOpenid = function(next_openid) {
  var count = 0;
  oauth.getUserlist(next_openid).then(function(result) {
    result = JSON.parse(result);
    var openidObj = result.data;
    logger.info('syncWxOpenid openidObj ', openidObj);
    if (openidObj) {
      currentAllOpenidArray = currentAllOpenidArray.concat(openidObj.openid);
      addWxOpenidList(openidObj.openid, result.next_openid);
    } else {
      var startTime = Date.now();
      logger.info('syncUserInfo start...');

      //设置50个并发同时更新数据
      var q = async.queue(function(item, callback) {
        syncUserInfo(item, callback);
      }, 50);

      q.push(diff || allOpenid, function(err) {
        logger.info('syncUserInfo %d spend %d ms', ++count, Date.now() - startTime);
      });

      q.drain = function() {
        logger.info('syncUserInfo end total spend %d ms', Date.now() - startTime);

        //合并
        allOpenid = concat(allOpenid, diff);

        filterUnsubscribe();
        
        //设置所有的openid缓存时间为30天，如果失效则重新全量存储
        cache.setEx(allOpenidKEY, 30 * 24 * 3600, JSON.stringify(allOpenid), function() {
          //重置
          diff = [];
          allOpenid = [];
          currentAllOpenidArray = [];
          _lastAllOpenidArray = [];
          logger.info('cache set h5:wx:openid is ok');
        }, function(err) {
          //重置
          diff = [];
          allOpenid = [];
          currentAllOpenidArray = [];
          _lastAllOpenidArray = [];
          logger.error('cache set h5:wx:openid has error:', err);
        })
      };
    }
  }, function(err) {
    logger.error('syncWxOpenid getUserlist has error ', err);
  });

};

//从缓存同步
var syncWxOpenidByCache = function(allCacheOpenid) {
  allCacheOpenid = JSON.parse(allCacheOpenid);
  async.concatSeries(allCacheOpenid, function(item, callback) {
    syncUserInfo(item, callback);
  }, function(err, results) {
    if (err) {
      logger.error('syncWxOpenidByCache has error ', err);
    }
  });
};

var concat = function(array, val) {
  if (typeof val.map !== 'function' && val.constructor !== Array) {
    return array.push(val);
  }

  val.forEach(function(item, index) {
    array.push(item);
  });

  return array;
};

//同步到数据库
var addWxOpenidList = function(openidArray, next_openid) {
  var wxo = new WxOpenid();
  var recordArray = [];

  //组装新的wxopenid存入数据库
  var compose = function(list) {
    list.forEach(function(openid, index) {
      var record = {};
      record.subscribe = 1;
      record.openid = openid;
      record.unionid = null;
      recordArray.push(record);
      allOpenid.push(openid);
    });
  };

  cache.get(allOpenidKEY).then(function(lastAllOpenidArray) {

    //增量比较
    if (lastAllOpenidArray) {

      lastAllOpenidArray = JSON.parse(lastAllOpenidArray);
      allOpenid = lastAllOpenidArray;

      _lastAllOpenidArray = lastAllOpenidArray;

      //获取新增openid
      var changer = _.difference(openidArray, lastAllOpenidArray);

      diff = concat(diff, changer);

      compose(changer);

    } else {
      //首次全量
      compose(openidArray);
    }

    wxo.save(recordArray, function(err, openid) {

      if (err) {
        logger.error('addWxOpenidList wxo save has error ', err);
      }

      if (next_openid !== null && next_openid !== '') {
        return syncWxOpenid(next_openid);
      }
    });

  }, function(err) {
    logger.error('addWxOpenidList has error ', err);
  });
};

//更新表中现未关注的用户
var filterUnsubscribe = function() {
  //表中现有已不关注的用户
  var unsubscribeArray = _.difference(_lastAllOpenidArray, currentAllOpenidArray);

  var wxo = new WxOpenid();

  logger.info('unsubscribeArray: ', unsubscribeArray);

  unsubscribeArray.forEach(function(openid) {
    logger.info('filterUnsubscribe openid: ', openid);
    wxo.updateOrAdd(openid, {subscribe: 0}, function(err, result) {
      if (err) {
        logger.error('filterUnsubscribe wx:unsubscribe', err);
      }
      logger.info('filterUnsubscribe openid result: ', result);
    });
  });

};

exports = module.exports = syncWxOpenid;