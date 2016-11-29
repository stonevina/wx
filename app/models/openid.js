/**
 *@description 微信用户信息
 *@author shijianguo
 *@time 2016.11.28 10:00 
 */

'use strict';

var createClient = require('./db');

var logger = require('log4js_tc').getLogger('cc:h5:account');

var getDb = function(callback) {
  createClient().then(function(client) {
    callback(client);
  }, function(err) {
    logger.error('mongo reconnect is failed', err);
  });
};

module.exports = WxOpenid;

function WxOpenid(openid) {
  this.openid = openid;
  this.unionid = null;
  this.subscribe = 0; // 0为未关注，1为关注
};

//保存记录
WxOpenid.prototype.save = function(recordArray, callback) {

  getDb(function(db) {

    //读取 wxOpenids 集合
    db.collection('wxOpenids', function(err, collection) {
      if (err) {
        logger.error('wxOpenids save has error ', err);
        db.close();
        return callback(err);
      }

      collection.insertMany(recordArray, function(err, result) {

        if (err) {
          logger.error('wxOpenids save has error ', err);
        }

        callback(err, result);
        db.close();
      })
    });
    
  });
};

//新增或者更新记录
WxOpenid.prototype.updateOrAdd = function(openid, data, callback) {

  getDb(function(db) {

    //读取 wxOpenids 集合
    db.collection('wxOpenids', function(err, collection) {
      if (err) {
        logger.error('wxOpenids updateOrAdd has error ', err);
        db.close();
        return callback(err);
      }

      collection.find({openid: openid}).toArray(function(err, result) {
        if (err) {
          logger.error('wxOpenids updateOrAdd has error ', err);
          db.close();
          return callback(err);
        }

        //已经存在记录
        if (result.length) {

          //取消关注
          if (data.subscribe == 0) {
            collection.updateOne(
              { openid : openid }
              , { $set: {subscribe: 0} }, function(err, result) {
              
              if (err) {
                logger.error('wxOpenids updateOrAdd has error ', err);
              }

              callback(err, result);
              db.close();
            });
          } else {
            //之前关注过
            collection.updateOne(
              { openid : openid }
              , { $set: {subscribe: 1} }, function(err, result) {

              if (err) {
                logger.error('wxOpenids updateOrAdd has error ', err);
              }

              callback(err, result);
              db.close();
            });
          }
        } else {
          //之前从未关注过 新增记录
          collection.insert(data, function(err, result) {

            if (err) {
              logger.error('wxOpenids updateOrAdd has error ', err);
            }

            callback(null, result);
            db.close();
          });
        }
      });
    });
    
  });
};

//更新记录
WxOpenid.prototype.updateOne = function(openid, data, callback) {

  var action = function(db) {
    //读取 wxOpenids 集合
    db.collection('wxOpenids', function(err, collection) {
      if (err) {
        logger.error('wxOpenids updateOne has error ', err);
        db.close();
        return callback(err);
      }

      collection.updateOne(
        { openid : openid }
        , { $set: data }, function(err, result) {

        if (err) {
          logger.error('wxOpenids updateOne has error ', err);
        }

        callback(err, result);
        // db.close();
      });
    });
  };

  if (this.db) {
    var db = this.db;
    action(db);
  } else {
    getDb(function(db) {
      this.db = db;
      action(db);
    }.bind(this));
  }

};

//条件查询
WxOpenid.prototype.query = function(condition, callback, opts) {

  getDb(function(db) {

    //读取 wxOpenids 集合
    db.collection('wxOpenids', function(err, collection) {
      if (err) {
        logger.error('wxOpenids find has error ', err);
        db.close();
        return callback(err);
      }

      collection.find(condition, opts || {}).toArray(function(err, result) {
        if (err) {
          logger.error('wxOpenids find has error ', err);
        }
        // logger.info('wxOpenids find result ', result);
        callback(null, result);
        db.close();
      });
    });
    
  });
};

//用于查询投票人和被投票人是否存在
WxOpenid.prototype.findIsExist = function(unionidList, callback) {

  getDb(function(db) {

    //读取 wxOpenids 集合
    db.collection('wxOpenids', function(err, collection) {
      if (err) {
        logger.error('wxOpenids findIsExist has error ', err);
        db.close();
        return callback(err);
      }

      collection.find({'unionid': {'$in': unionidList}}).toArray(function(err, result) {
        
        if (err) {
          logger.error('wxOpenids findIsExist has error ', err);
        }

        callback(null, result);
        db.close();
      });
    });
    
  });
};