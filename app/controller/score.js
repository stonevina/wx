/**
 *@description 成绩模块
 *@author shijianguo
 *@time 2016.12.1 14:27
 */

'use strict';

var _ = require('lodash');
var moment = require('moment');

var scoreModel = require('../models/score');

//新增成绩
exports.add = function *(next) {
  var body = this.request.body;
  var userid = body.userid;
  var expended_time = body.expended_time;
  var right_count = body.right_count;

  //成绩
  var scoreProxy = {
    userid: userid,
    expended_time: expended_time,
    right_count: right_count,
    c_time: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  };

  var result = yield scoreModel.newAndSave(scoreProxy);
  yield this.api(result);
};

//显示成绩排行榜
exports.showRanks = function *(next) {
  var result = yield scoreModel.showList();
  yield this.api(result);
};

//获取成绩
exports.getScore = function *(next) {
  var userid = this.params.userid;
  var result = yield scoreModel.getScore(userid);

  var rank = _.findIndex(result, function(o) {
    return o.userid == userid;
  });
  var self = _.find(result, function(o) {
    return o.userid == userid;
  });

  if (self) {
    self.rank = rank + 1;
    self.total = result.length;
    yield this.api(self);
  } else {
    yield this.api({});
  }

};