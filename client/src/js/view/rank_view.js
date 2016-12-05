/**
 * @description 排行榜
 * @time 2016.11.28 20.02
 */

var rankTpl = require('../tpl/rank.tpl');
var ScoreModel = require('../model/score_model.js');

var rankView = Backbone.View.extend({
  el: '#container',
  events: {
    'click #J-showTip': 'showTip',
    'click #J-close': 'hideQrcode'
  },
  template: rankTpl,
  initialize: function() {
    // this.user = $('#J-userinfo').data('user');
    this.model = new ScoreModel;
  },
  hideQrcode: function() {
    $('#J-code').removeClass('show');
  },
  //获取自己的分数
  getSelfScore: function() {
    this.model.fetch({
      url: '/quiz/v1/api/scores/' + user.unionid
    })
    .then(function(result) {
      
      if (_.isEmpty(result)) {
        return;
      }

      $('#J-selfRank').text(result.rank);
      $('#J-selfScore').text(formatTime(result.expended_time));
    })
  },
  showTip: function() {
    $('#J-code').addClass('show');
  },
  render: function() {
    this.model.fetch()
    .then(function(result) {
      var tpl = _.template(this.template)({
        users: result,
        self: user
      });
      this.$el.html(tpl);
      this.getSelfScore();
    }.bind(this));
  }
});

module.exports = rankView;