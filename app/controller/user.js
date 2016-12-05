/**
 *@description 用户模块
 *@author shijianguo
 *@time 2016.12.1 16:27
 */

'use strict';

var _ = require('lodash');
var moment = require('moment');

var userModel = require('../models/user');

//新增用户
exports.add = function *(next) {
  var body = this.request.body;
  var openid = body.openid;
  var headimgurl = body.headimgurl;
  var unionid = body.unionid;
  var nickname = body.nickname;

  //用户信息
  var user = {
    openid: openid,
    headimgurl: headimgurl,
    unionid: unionid,
    nickname: nickname,
    c_time: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  };

  var result = yield userModel.newAndSave(user);
  yield this.api(result);
};