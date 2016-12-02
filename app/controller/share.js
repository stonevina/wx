/**
 *@description 微信分享模块
 *@author shijianguo
 *@time 2016.12.1 18:49
 */

'use strict';

var base = require('../libs/index');

//获取签名
exports.getSignature = function *(next) {
  var self = this;
  var calcSignature = function *() {
    return new Promise((resolve, reject) => {
      base.calcSignature(self.query.url, (result) => {
        delete result.jsapi_ticket;
        resolve(result);
      });
    });
  }
  var signature = yield calcSignature();
  yield this.api(signature);
};