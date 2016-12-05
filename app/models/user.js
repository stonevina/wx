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

        //释放连接
        connection.release();
        
        return;
      }

      //查询是否存在
      var querySQL = `
        SELECT * FROM TB_USER tu WHERE tu.unionid = ?
      `;

      //对于已存在的用户，更新信息
      var updateSQL = `
        UPDATE TB_USER SET headimgurl = ?, nickname = ? WHERE unionid = ?
      `;

      //新增用户
      var insertSQL = `
        INSERT INTO TB_USER SET ?
      `;

      var query = connection.query(querySQL, user.unionid, 
        function(err, result) {
          if (err) {
            var logid = genLogid();
            tclog.error({logid: logid, err: err, sql: query.sql});
            
            //释放连接
            connection.release();
            
            return reject(err);
          }

          var logid = genLogid();
          tclog.notice({logid: logid, action: 'newAndSave query', user: user, sql: query.sql});

          //已经存在
          if (result.length) {
            var update = connection.query(updateSQL, [user.headimgurl, user.nickname, user.unionid],
              function(err, result) {
              if (err) {
                var logid = genLogid();
                tclog.error({logid: logid, err: err, sql: update.sql});
                
                //释放连接
                connection.release();
                
                return reject(err);
              }

              resolve(result);

              //释放连接
              connection.release();

              var logid = genLogid();
              tclog.notice({logid: logid, action: 'newAndSave update', user: user, sql: update.sql});
            })
          } else {
            //不存在
            var insert = connection.query(insertSQL, user, 
              function(err, result) {
                if (err) {
                  var logid = genLogid();
                  tclog.error({logid: logid, err: err, sql: insert.sql});
                  
                  //释放连接
                  connection.release();
                  
                  return reject(err);
                }

                resolve(result);

                //释放连接
                connection.release();

                var logid = genLogid();
                tclog.notice({logid: logid, action: 'newAndSave insert', user: user, sql: insert.sql});
            });
          }
      });
    });
  });
};

//查找user
exports.query = function(unionid) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        var logid = genLogid();
        tclog.error({logid: logid, err: err});

        //释放连接
        connection.release();
        
        return;
      }

      var querySQL = `
        SELECT * FROM TB_USER tu WHERE tu.unionid = ?
      `;

      var query = connection.query(querySQL, unionid, function(err, result) {
        if (result.length) {
          resolve(true);
        } else {
          resolve(false);
        }

        //释放连接
        connection.release();
      });
    });
  });
};