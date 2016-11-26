/**
 * @description create db connection pool
 * @author shijianguo
 * @time 2016.11.26 2:10
 */

'use strict';

var mysql = require('mysql');

var tclog = require('./tclog.js');
var genLogid = require('./logid').genLogid;
var config = require('../../conf/');

var pool = mysql.createPool(config.db);

pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
});

pool.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});

// pool.end(function (err) {
//   // all connections in the pool have ended
// });

pool.on('error', function(err) {
  var logid = genLogid();
  tclog.error({logid: logid, err: err});
  process.exit(1);
});

module.exports = pool;