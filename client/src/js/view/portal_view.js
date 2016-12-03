/**
 * @description 首页
 * @time 2016.11.28 20.02
 */

var portalTpl = require('../tpl/portal.tpl');
var share = require('../page/share.js');

var portalView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: portalTpl,
  initialize: function() {
    
  },
  check: function() {
    //增加测试次数
    Backbone.ajax({
      url: '/quiz/v1/api/questions/checkExamable/' + user.unionid,
      method: 'get'
    })
    .then(function(result) {
      if (!result.success) {
        $('.limit-tip').show();
        $('.action').hide();
      }
    }, function(err) {
      $('.limit-tip').show();
      $('.action').hide();
    });
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
    this.check();
  }
});

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

module.exports = portalView;