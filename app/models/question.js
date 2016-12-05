/**
 * @description Question Model
 * @author shijianguo
 * @time 2016.11.26 4:08
 */

'use strict';

var async = require('async');

var db = require('../libs/db.js');
var tclog = require('../libs/tclog.js');
var genLogid = require('../libs/logid').genLogid;

//创建并保存一个任务
exports.newAndSave = function(questions) {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) {
        var logid = genLogid();
        tclog.error({logid: logid, err: err});
        //释放连接
        connection.release();
        return;
      }

      async.map(questions, function(question, cb) {
        return new Promise(function(resolve, reject) {
          var query = connection.query('INSERT INTO TB_QUESTION SET ?', question, 
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
          
          //释放连接
          connection.release();

          return reject(err);
        }

        resolve(results);
      });

    });
  });
};

// SELECT
//   *
// FROM
//   TB_QUESTION AS r1
// JOIN (
//   SELECT
//     ROUND(
//       RAND() * (
//         SELECT
//           MAX(id)
//         FROM
//           TB_QUESTION
//       )
//     ) AS id
// ) AS r2
// WHERE
//   r1.id >= r2.id
// ORDER BY
//   r1.id ASC
// LIMIT 20;

//随机的20道题
exports.showList = function(limit) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query('SELECT * FROM TB_QUESTION ORDER BY rand() LIMIT ?', limit, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err});
            cb(err);
            
            //释放连接
            connection.release();
            
            return reject(err);
          }

          resolve(result);

          //释放连接
          connection.release();
      });
    });
  });
};