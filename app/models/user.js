/**
 * @description User Model
 * @author shijianguo
 * @time 2016.12.1 16:25
 */

'use strict';

var db = require('../libs/db.js');
var tclog = require('../libs/tclog.js');
var genLogid = require('../libs/logid').genLogid;

//创建用户
exports.newAndSave = function(user) {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) {
        var logid = genLogid();
        tclog.error({logid: logid, err: err});
        return;
      }

      var query = connection.query('INSERT INTO TB_USER SET ?', user, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err, sql: query.sql});
            return reject(err);
          }

          resolve(result);

          var logid = genLogid();
          tclog.notice({logid: logid, action: 'newAndSave', user: user, sql: query.sql});
      });
    });
  });
};