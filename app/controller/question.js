/**
 *@description 测试题目模块
 *@author shijianguo
 *@time 2016.11.26 4:19 
 */

'use strict';

var fs = require('fs');
var xlsx = require('node-xlsx');
var moment = require('moment');
var _ = require('lodash');

var questionModel = require('../models/question');
var userModel = require('../models/user');

var cache = require('../libs/cache.js');

//将excel中的题目入库
exports.excelToDb = function *(next) {
  const buffer = fs.readFileSync(`f:\/q.xlsx`);
  const result = JSON.parse(JSON.stringify(xlsx.parse(buffer)));

  const data = result[0].data;
  const name = data[0];

  var processResult = null;

  processResult = data.slice(1).map(function(o, index) {
    var obj = {};
    o.forEach(function(item, i) {
      obj[name[i]] = item;
    });
    obj.c_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    return obj;
  });

  var res = yield questionModel.newAndSave(processResult);

  yield this.api(res);
};

//显示随机的20道题
exports.showRandomList = function *(next) {
  var limit = config.limit || 15;
  var userid = this.params.userid;
  var key = 'quiz:' + userid + ':getQuestions';

  var isExist = yield userModel.query(userid);

  var count = yield cache.get(key);
  count = count || 0;

  if (count < config.ExamCount) {
    var now = new Date();
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    var end = new Date((today / 1000 + 86400) * 1000);
    var expire = (end.getTime() - now.getTime()) / 1000;
    yield cache.pro_setEx(key, expire, ++count);
  } else {
    this.status = 403;
    yield this.api([{
      success: false,
      err: 'Limit'
    }]);
    return;
  }

  if (isExist) {
    var result = yield questionModel.showList(limit);
    yield this.api(result);
  } else {
    this.status = 403;
    yield this.api([{
      success: false,
      err: 'Not Found userid'
    }])
  }
};

//微信分享增加答题次数
exports.addCount = function *() {
  var userid = this.params.userid;
  var key = 'quiz:' + userid + ':getQuestions';
  var addKey = 'quiz:' + userid + ':addCount';

  var count = yield cache.get(key);
  count = count || 0;

  var addCount = yield cache.get(addKey);
  addCount = addCount || 0;

  //分享增加挑战次数的上限
  if (addCount >= 1) {
    this.status = 403;
    yield this.api([{
      success: false,
      err: 'Wx share count is Limited'
    }]);
  } else {
    var now = new Date();
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    var end = new Date((today / 1000 + 86400) * 1000);
    var expire = (end.getTime() - now.getTime()) / 1000;

    yield cache.pro_setEx(addKey, expire, ++addCount);
    var result = yield cache.pro_setEx(key, expire, --count);
    yield this.api(result);
  }

};

//查看是否可以继续参与比赛
exports.checkExamable = function *() {
  var userid = this.params.userid;
  var key = 'quiz:' + userid + ':getQuestions';

  var count = yield cache.get(key);
  count = count || 0;

  if (count < config.ExamCount) {
    yield this.api({
      success: true,
      err: ''
    });
  } else {
    this.status = 403;
    yield this.api({
      success: false,
      err: 'Join exam count is Limited'
    })
  }
};