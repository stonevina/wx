/**
 *@description 错题库
 *@author shijianguo
 *@time 2016.12.1 11:55
 */

'use strict';

var _ = require('lodash');
var moment = require('moment');

var correctionModel = require('../models/correction');

//新增错题
exports.add = function *(next) {
  var body = this.request.body;
  var questions = body.questions;
  var userid = body.userid;
  var processResult = null;

  processResult = questions.map(function(id, index) {
    var obj = {};
    obj.userid = userid;
    obj.qsid = id;
    obj.c_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    return obj;
  });

  var result = yield correctionModel.newAndSave(processResult);
  yield this.api(result);
};

//显示错题
exports.showList = function *(next) {
  var userid = this.params.userid;
  var result = yield correctionModel.showList(userid);
  yield this.api(result);
};