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
  // var querySql = `
  //   SELECT
  //     min(s1.expended_time),
  //     s1.`right_count`,
  //     s1.userid
  //   FROM
  //     TB_SCORE s1,
  //     (
  //       SELECT
  //         max(right_count) count,
  //         userid
  //       FROM
  //         `TB_SCORE`
  //       GROUP BY
  //         userid
  //     ) s2
  //   WHERE
  //     s1.userid = s2.userid
  //   AND s1.`right_count` = s2.count
  //   GROUP BY
  //     s1.userid,
  //     s1.right_count
  //   ORDER BY
  //     2 DESC,
  //     1 ASC;
  // `;

  // var querySql = `
  //   SELECT ts.*
  //   FROM TB_SCORE ts,

  //     (SELECT max(m.row_num) AS paixu,
  //             m.`id`
  //      FROM
  //        (SELECT @r:=@r+1 AS row_num,
  //                     t.*
  //         FROM TB_SCORE t,

  //           (SELECT @r:=0) b
  //         ORDER BY t.`right_count` DESC,t.`expended_time`) m
  //      GROUP BY m.`userid`) tf
  //   WHERE ts.`id`=tf.id
  //   ORDER BY tf.paixu;
  // `;

  var querySql = `
    SELECT
      ts.expended_time,
      ts.userid,
      ts.right_count,
      tu.nickname
    FROM
      TB_SCORE ts,
      (
        SELECT
          max(m.row_num) AS paixu,
          m.id
        FROM
          (
            SELECT
              @r :=@r + 1 AS row_num,
              t.*
            FROM
              TB_SCORE t,
              (SELECT @r := 0) b
            ORDER BY
              t.right_count DESC,
              t.expended_time
          ) m
        GROUP BY
          m.userid
      ) tf,
      TB_USER tu
    WHERE
      ts.id = tf.id
    AND
      ts.userid = tu.unionid
    ORDER BY
      tf.paixu;
  `;

  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query(querySql, 
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

//获取自己的排名
exports.getScore = function(userid) {

  //汇总sql
  var querySql = `
    SELECT
      a.userid,
      a.expended_time,
      a.right_count,
      count(*) + 1 AS rank,
      c.total AS total
    FROM
      (
        SELECT
          DISTINCT userid,
          expended_time,
          right_count
        FROM
          TB_SCORE
        WHERE
          userid = ?
        ORDER BY 
          right_count DESC
        LIMIT 1
      ) a,
      TB_SCORE b,
      (
        SELECT
          count(*) AS total
        FROM
          TB_SCORE
      ) c
    WHERE
      a.right_count < b.right_count
    OR (
      a.right_count <= b.right_count
      AND a.expended_time > b.expended_time
    )
  `;

  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      var query = connection.query(querySql, userid, 
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