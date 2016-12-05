/**
 * @description user client model
 * @author shijianguo
 * @time 2016.12.1 16:30
 */

'use strict';

var userModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //微信用户openid
      openid: '',
      //微信用户头像地址
      headimgurl: '',
      //微信用户unionid
      unionid: '',
      //微信用户昵称
      nickname: ''
    }
  },
  url: '/quiz/v1/api/users'
});

module.exports = userModel;