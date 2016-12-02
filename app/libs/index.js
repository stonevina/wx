/**
 *@description: 数字签名
 *@author: shijianguo
 *@time: 2016.5.31
 */

'use strict';

var rp = require('request-promise');

var sign = require('./sign');
var cache = require('./cache');

var factory = {
  //常量
  'TOKEN_KEY': 'wx_token',
  'TICKET_KEY': 'wx_ticket',
  'NX_TOKEN_KEY': 'h5:wx:calcToken',
  'NX_TICKET_KEY': 'h5:wx:calcTicket',
  'EXPIRE_TIME': 5,
  //理财课代表服务号
  'APPID': config.wx_account.server.APPID,
  'SECRET': config.wx_account.server.SECRET,
  init: function() {
    cache.init();
    cache.del(this.NX_TOKEN_KEY);
    cache.del(this.NX_TICKET_KEY);
  },
  //计算签名
  calcSignature: function(url, onSuccess) {
    var ticketPromise = cache.get(this.TICKET_KEY);

    ticketPromise.then(function(ticket) {

      //未缓存ticket
      if (!ticket) {
        return this.calcTicket(this.calcSignature(url, onSuccess));
      }

      //生成签名
      return onSuccess(sign(ticket, url, this.APPID));
    }.bind(this))
    .catch(function(error) {
      //redis error
      if (error) {
        return console.error('获取微信ticket失败:', error);
      }
    });
    
  },
  //计算token，由于微信设置接口访问次数，需缓存token，默认失效时间为接口返回的过期时间
  calcToken: function(onSuccess) {
    var url = ['https://api.weixin.qq.com/cgi-bin/token?'
      ,'grant_type=client_credential'
      ,'&appid=' + this.APPID
      ,'&secret=' + this.SECRET].join('');

    onSuccess = onSuccess || function() {};

    cache.setNx(this.NX_TOKEN_KEY, this.EXPIRE_TIME, true).then(function(result) {
      if (result == 1) {
        rp(url)
        .then(function(result) {

          result = JSON.parse(result);

          if (result.access_token) {
            return cache.setEx(this.TOKEN_KEY, result.expires_in, result.access_token, function() {
              onSuccess.call(this);
              // cache.del(tokenKey);
            }.bind(this));
          } else {
            // logger.error('接口未返回微信token内容:', result);
          }
        }.bind(this))
        .catch(function(error) {
          // logger.error('生成微信token失败:', error);
        });
      } else {
        return onSuccess.call(this);
      }
    }.bind(this),
    function(error) {
      // logger.error('生成微信token失败:', error);
      cache.del(this.NX_TOKEN_KEY);
    }.bind(this));

  },
  //计算ticket，由于微信设置接口访问次数，需缓存ticket，默认失效时间为接口返回的过期时间
  calcTicket: function(onSuccess) {
    var tokenPromise = cache.get(this.TOKEN_KEY);

    onSuccess = onSuccess || function() {};

    tokenPromise.then(function(token) {

      //未缓存token
      if (!token) {
        return this.calcToken(this.calcTicket.bind(this));
      }

      //取缓存
      var url = ['https://api.weixin.qq.com/cgi-bin/ticket/getticket?'
        ,'access_token=' + token
        ,'&type=jsapi'].join('');

      cache.setNx(this.NX_TICKET_KEY, this.EXPIRE_TIME, true).then(function(result) {
        if (result == 1) {
          rp(url)
          .then(function(result) {

            result = JSON.parse(result);

            if (result.ticket) {
              return cache.setEx(this.TICKET_KEY, result.expires_in, result.ticket, function() {
                onSuccess.call(this);
                // cache.del(ticketKey);
              }.bind(this));
            } else {
              console.error('接口未返回微信ticket内容:', result);
            }
          }.bind(this))
          .catch(function(error) {
            console.error('生成微信ticket失败:', error);
          });
        } else {
          return onSuccess.call(this);
        }
      }.bind(this),
      function(error) {
        // logger.error('生成微信ticket失败:', error);
        cache.del(this.NX_TICKET_KEY);
      }.bind(this));

    }.bind(this));
  },
  //获取token
  getToken: function(onSuccess) {
    var tokenPromise = cache.get(this.TOKEN_KEY);

    onSuccess = onSuccess || function() {};

    return tokenPromise.then(function(token) {

      //未缓存token
      if (!token) {
        return this.calcToken(this.getToken.bind(this, onSuccess));
      }

      return onSuccess(token);
    }.bind(this))
    .catch(function(error) {
      if (error) {
        // logger.error('getToken获取token失败', error);
      }
    });
  }
};

factory.init();

module.exports = factory;