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

//排行榜
exports.showList = function() {
  
  //汇总sql
  var querySql = `
    SELECT
      s1.expended_time,
      s1.right_count,
      s1.userid,
      tu.nickname
    FROM
      TB_SCORE s1,
      (
        SELECT
          min(expended_time) expended_time,
          userid,
          c_time
        FROM
          TB_SCORE
        GROUP BY
          userid
      ) s2,
      TB_USER tu
    WHERE
      s1.userid = s2.userid
    AND s1.expended_time = s2.expended_time
    AND tu.unionid = s1.userid
    AND
      s2.c_time between '${config.ActivityTime[0]}' and '${config.ActivityTime[1]}'
    GROUP BY
      s1.userid,
      s1.expended_time
    ORDER BY
      1 ASC,
      2 DESC;
  `;

  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query(querySql, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err});
            return reject(err);
          }

          resolve(result);
      });
    });
  });
};

//获取自己的排名
exports.getScore = function(userid) {

  var querySql = `
    SELECT DISTINCT
      ts.userid,
      min(ts.expended_time) expended_time,
      tu.nickname,
      ts.right_count,
      count(*) AS total
    FROM
      TB_SCORE ts,
      TB_USER tu
    WHERE
      ts.userid = tu.unionid
    AND
      ts.c_time between '${config.ActivityTime[0]}' and '${config.ActivityTime[1]}'
    GROUP BY
      ts.userid
    ORDER BY
      expended_time ASC
  `;

  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query(querySql, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err});
            return reject(err);
          }

          resolve(result);
      });
    });
  });
};