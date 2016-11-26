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

//新增任务
exports.add = function *(next) {
  var question = this.request.body;
  question = _.pick(question, ['title', 'content', 'answer', 'note']);
  var result = yield questionModel.newAndSave(question);
  yield this.api(result);
};