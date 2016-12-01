/**
 * @description Score Model
 * @author shijianguo
 * @time 2016.12.1 14:22
 */

'use strict';

var async = require('async');

var db = require('../libs/db.js');
var tclog = require('../libs/tclog.js');
var genLogid = require('../libs/logid').genLogid;

//创建并保存一个成绩
exports.newAndSave = function(score) {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) {
        var logid = genLogid();
        tclog.error({logid: logid, err: err});
        return;
      }

      var query = connection.query('INSERT INTO TB_SCORE SET ?', score, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err});
            return reject(err);
          }

          resolve(result);

          var logid = genLogid();
          tclog.notice({logid: logid, action: 'newAndSave', score: score, sql: query.sql});
      });
    });
  });
};

//随机的20道题
exports.showList = function(limit) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query('SELECT * FROM TB_SCORE ORDER BY rand() LIMIT ?', limit, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err});
            cb(err);
            return reject(err);
          }

          resolve(result);
      });
    });
  });
};