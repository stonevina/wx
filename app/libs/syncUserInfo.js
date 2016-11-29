'use strict';

var WxOpenid = require('../../models/WxOpenid');
var base = require('./index');
var oauth = require('./oauth');
var json2 = require('./json2');

var logger = require('log4js_tc').getLogger('cc:h5:account');

var wxo = new WxOpenid();

//同步订阅号用户信息
var syncUserInfo = function(openid, callback) {
  oauth.getUserBaseInfo(openid).then(function(userinfo) {
    logger.info('syncUserInfo:%s', userinfo);
    userinfo = json2.parse(userinfo);
    addNewWxOpenidOrUpdate(openid, userinfo, callback);
  });
};

//同步到数据库
var addNewWxOpenidOrUpdate = function(openid, data, callback) {
  wxo.updateOne(openid, data, function(err, result) {
    callback(err, result);
  });
};

module.exports = syncUserInfo;