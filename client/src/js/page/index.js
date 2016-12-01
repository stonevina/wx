/**
 * @description 入口文件
 * @time 2016.10.26 10:56
 */

window.Backbone = require('backbone');
window._ = require('backbone/node_modules/underscore');

require('zepto/src/zepto.js');

var portalView = require('../view/portal_view.js');

var Router = require('../route/index.js');

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

    // router.navigate('/portal', {trigger: true});
  },
  render: function() {
    this.portalView.render();
  }
});

var App = new AppView;

//百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?34d6f1428dd271b0ba162cf29fe06e94";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();