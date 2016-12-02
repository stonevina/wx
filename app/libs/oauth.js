/**
 * @description 微信oauth授权
 * @time 2016.7.4
 * @author shijianguo
 * @refer https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842&token=&lang=zh_CN
 */

'use strict';

var rp = require('request-promise');
var base = require('./index');

module.exports = {
  // 测试号
  'APPID': config.wx_account.server.APPID,
  'SECRET': config.wx_account.server.SECRET,
  //用户同意授权，获取code
  authorize: function(redirect_uri, opt) {
    var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?', opt = opt || {};
    var param = ['appid=', this.APPID, '&redirect_uri=', redirect_uri, '&response_type=code', '&scope=', (opt.scope || 'snsapi_userinfo'), '&state=1#wechat_redirect'];
    
    return (url + param.join(''));
  },
  //通过code换取网页授权access_token
  getAccessToken: function(code) {
    var url = 'https://api.weixin.qq.com/sns/oauth2/access_token?';
    var param = ['appid=', this.APPID, '&secret=', this.SECRET, '&code=', code, '&grant_type=authorization_code'];

    return rp(url + param.join(''));
  },
  //刷新access_token（如果需要）
  refreshToken: function() {
    
  },
  //拉取用户信息(需scope为 snsapi_userinfo)
  getUserInfo: function(token, openid) {
    var url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' + token + '&openid=' + openid + '&lang=zh_CN';
    return rp(url);
  },
  //拉取订阅号用户基本信息(包括subscribe)
  getUserBaseInfo: function(openid) {
    return base.getToken(function(token) {
      var url = 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=' + token + '&openid=' + openid;
      return rp(url);
    });
  },
  //拉取关注订阅号的用户
  getUserlist: function(next_openid) {
    return base.getToken(function(token) {
      var url = 'https://api.weixin.qq.com/cgi-bin/user/get?access_token=' + token;

      if (next_openid) {
        url += '&next_openid=' + next_openid;
      }
      
      return rp(url);
    });
  },
  //检验授权凭证（access_token）是否有效
  auth: function() {

  }
};