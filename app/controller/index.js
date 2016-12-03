/**
 * @file index.js
 * @desc 控制器
 * @author shijianguo
 * @date 2016.11.28 11:39
 */
var Wechat_OAuth = require('wechat-oauth');
var oauth = require('../libs/oauth.js');
var cache = require('../libs/cache.js');

var tclog = require('../libs/tclog.js');
var genLogid = require('../libs/logid').genLogid;

var userModel = require('../models/user.js');
var moment = require('moment');

//授权客户端
var client = new Wechat_OAuth(oauth.APPID, oauth.SECRET, function(openid, callback) {
  cache.get('wx:' + openid + ':access_token').then(function(token) {
    callback(null, JSON.parse(token));
  }, function(err) {
    if (err) {
      var logid = genLogid();
      tclog.error({logid: logid, des: 'get wx:' + openid + ':access_token', err: err});
      return callback(err);
    }
  });
}, function(openid, token, callback) {
  cache.set('wx:' + openid + ':access_token', JSON.stringify(token), function() {
    callback();
  });
});

module.exports = {
  dispatch: function *() {
    // var page = this.params
  },
  //页面入口，授权后跳转至首页
  redirect: function *() {
    var isAuth = this.cookies.get('oauth');
    //回调地址
    // var returl = this.query.returl || '';
    var hash = this.query.hash || '';
    //首次授权弹窗显示，之后采用静默方式
    var scope = isAuth ? 'snsapi_base' : 'snsapi_userinfo';
    var url = client.getAuthorizeURL('https://wx.itiancai.com/quiz/blank', hash, scope);
    this.redirect(url);
  },
  //跳转过渡页
  blank: function *() {
    var code = this.query.code;
    var hash = this.query.state;

    //默认保存一天，一天之内不会再显示授权页面
    this.cookies.set('oauth', true, {
      maxAge: 24 * 60 * 60 * 1000
    });

    //返回微信用户信息
    var getWxUser = function *() {
      return new Promise(function(resolve, reject) {   
        client.getAccessToken(code, function(err, result) {
          try {
            var accessToken = result.data.access_token;
            var openid = result.data.openid;

            client.getUser(openid, function(err, wxUserInfo) {
              resolve(wxUserInfo);
            });
          } catch(e) {
            reject(e);
          }
        });
      });
    };

    var user = yield getWxUser();
    this.session.user = user;

    //用户信息
    var userProxy = {
      openid: user.openid,
      headimgurl: user.headimgurl,
      unionid: user.unionid,
      nickname: user.nickname,
      c_time: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };
    yield userModel.newAndSave(userProxy);
    this.redirect('/quiz/portal#' + hash);
  },
  //得分页面
  showScore: function *() {
    yield this.render('score', {
      userInfo: this.session.user,
      noWrap: true
    });
  },
  //首页
  show: function *() {
    var hash = this.params.hash || '';
    var returl = this.originalUrl;

    if (hash) {
      returl = returl.split(hash)[0];
    }

    if (!this.session.user) {
      return this.redirect('/quiz?returl=' + returl + '&hash=' + hash);
    }

    yield this.render('index', {
      userInfo: this.session.user,
      noWrap: true
    });
  }
};