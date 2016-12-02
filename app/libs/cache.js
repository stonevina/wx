/**
 *@description: 简易缓存
 *@author: shijianguo
 *@time: 2016.6.1
 */

'use strict';

var config = require('../../conf');

// var Promise = require('bluebird');

module.exports = {
  noop: function() {},
  init: function() {
    this.createConnection();
  },
  set: function(key, value, onSuccess, onFail) {
    return this.redisClient.set(key, value)
    .then(onSuccess || this.noop, onFail || this.noop)
    .catch(this.createConnection.bind(this));
  },
  //time单位s
  setEx: function(key, time, value, onSuccess, onFail) {
    return this.redisClient.setex(key, time, value)
    .then(onSuccess || this.noop, onFail || this.noop)
    .catch(this.createConnection.bind(this));
  },
  //promise版的setex
  pro_setEx: function(key, time, value) {
    return new Promise((resolve, reject) => {
      this.redisClient.setex(key, time, value)
      .then(function(result) {
        resolve(result);
      }, function(err) {
        reject(err);
      })
    });
  },
  //SET if Not eXists 
  //1 如果key被设置了
  //0 如果key没有被设置
  setNx: function(key, time, value) {
    return new Promise(function(resolve, reject) {
      this.redisClient.setnx(key, value).then(
        function(result) {
          this.redisClient.expire(key, time);
          resolve(result);
        }.bind(this), 
        function(error) {
          this.del(key);
          reject(error);
      }.bind(this));
    }.bind(this));
  },
  get: function(key) {
    return new Promise(function(resolve, reject) {
      this.redisClient.get(key, function(error, result) {
        
        if (error) {
          this.createConnection();
          return reject(error);
        }

        resolve(result);
      })
    }.bind(this));
  },
  del: function(key) {
    this.redisClient.del(key);
  },
  closeConnection: function() {
    if (this.redisClient) {
      this.redisClient.disconnect();
    }
  },
  createConnection: function() {
    this.closeConnection();
    this.redisClient = new require('ioredis')(config.redis);
  }
};