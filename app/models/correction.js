/**
 * @description Correction Model
 * @author shijianguo
 * @time 2016.12.1 11:54
 */

'use strict';

var async = require('async');

var db = require('../libs/db.js');
var tclog = require('../libs/tclog.js');
var genLogid = require('../libs/logid').genLogid;

//创建并保存一个错题
exports.newAndSave = function(questions) {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) {
        var logid = genLogid();
        tclog.error({logid: logid, err: err});
        return;
      }

      async.map(questions, function(question, cb) {
        return new Promise(function(resolve, reject) {
          var query = connection.query('INSERT INTO TB_CORRECTION_ITEM SET ?', question, 
            function(err, result) {
              if (err) {
                var logid = genLogid();
                tclog.error({logid: logid, err: err});
                cb(err);
                return reject(err);
              }

              resolve(result);
              cb(null, result);
          });
          var logid = genLogid();
          tclog.notice({logid: logid, action: 'newAndSave', question: question, sql: query.sql});
        });
        
      }, function(err, results) {

        //释放连接
        connection.release();

        if (err) {
          var logid = genLogid();
          tclog.error({logid: logid, err: err});
          return reject(err);
        }

        resolve(results);
      });

    });
  });
};

//显示错题
exports.showList = function(userid) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query('SELECT tb2.* FROM TB_CORRECTION_ITEM tb1, TB_QUESTION tb2 WHERE tb1.qsid = tb2.id AND tb1.userid = ?', userid,
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