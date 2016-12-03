/**
 * @description 入口文件
 * @time 2016.10.26 10:56
 */

window.Backbone = require('backbone');
window._ = require('backbone/node_modules/underscore');

require('zepto/src/zepto.js');

var portalView = require('../view/portal_view.js');

var Router = require('../route/index.js');

var share = require('./share.js');

var AppView = Backbone.View.extend({
  el: 'body',
  events: {
    // 'click #filter_inbox': 'showProjectInstance',
    // 'click #filter_today': 'showTodayInstance',
    // 'click #filter_later': 'showLaterInstance'
  },
  initialize: function() {
    this.portalView = new portalView();

    this.render();

    window.router = new Router();
    Backbone.history.start();

    if (!location.hash && !/\/score$/.test(location.pathname)) {
      router.navigate('/portal', {trigger: true});
    }
  },
  render: function() {
    this.portalView.render();
  }
});

//格式化时间
window.formatTime = function(time, tpl) {
  tpl = tpl || '{minute}分{second}秒{ms}';

  var timeObj = {
    minute: Math.floor(time / 1000 / 60),
    second: Math.floor(time / 1000 % 60),
    ms: Math.floor(time % 1000)
  };

  return tpl.replace(/{minute}/g, timeObj.minute)
    .replace(/{second}/g, timeObj.second)
    .replace(/{ms}/g, timeObj.ms)
};

//用户信息
window.user = $('#J-userinfo').data('user');

var App = new AppView;

//百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?34d6f1428dd271b0ba162cf29fe06e94";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


if (!/\/score$/.test(location.pathname)) {
  window.onload = function() {
    //微信相关内容onload之后执行
    share.setShareLink({
      link: location.origin + '/quiz/portal',
      title: '你能识别谎言吗？',
      desc: '我正在“识别谎言”，快来挑战我吧！',
      onSuccess: function() {
        //增加测试次数
        Backbone.ajax({
          url: '/quiz/v1/api/questions/add/' + user.unionid,
          method: 'put'
        })
        .then(function(result) {
          location.reload();
        }, function(err) {
          console.log(err);
        });
      }
    });
  };
}