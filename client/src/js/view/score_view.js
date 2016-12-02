/**
 * @description 答题结果页
 * @time 2016.11.29 15:08
 */

var scoreTpl = require('../tpl/score.tpl');
var ScoreModel = require('../model/score_model.js');
var share = require('../page/share.js');

var scoreView = Backbone.View.extend({
  el: '#container',
  events: {
    'click #J-share': 'showGuide',
    'click #J-guide': 'hideGuide'
  },
  template: scoreTpl,
  initialize: function() {
    
  },
  showGuide: function() {
    $('#J-guide').show();
  },
  hideGuide: function() {
    $('#J-guide').hide();
  },
  getScore: function() {
    var model = new ScoreModel;
    model.fetch({
      url: '/quiz/v1/api/scores/' + user.unionid
    })
    .then(function(results) {
      results.forEach(function(result, index) {
        $('#J-time').text((result.expended_time / 1000).toFixed(2));
        $('#J-rank').text(result.rank);
        $('#J-percent').text(Math.ceil((result.total - (result.rank - 1)) / result.total * 100) + '%');
        
        //前20名
        if (result.rank <= 20) {
          $('#J-info').show();
        } else {
          $('#J-goal').show();
        }
      })
    });
  },
  create: function(props) {
    this.model = new ScoreModel({
      //答题时间
      expended_time: props.time,
      //对题的数量
      right_count: props.count,
      //用户id
      userid: props.userid
    });
    return this.model.save();
  },
  render: function() {
    var tpl = _.template(this.template)({user: user});
    this.$el.html(tpl);

    this.getScore();
  }
});

window.onload = function() {
  share.setShareLink({
    shareLink: location.pathname,
    title: '你能识别谎言吗？',
    desc: '我正在“识别谎言”，我是青涩de高中僧，超过了全校90%的人，快来挑战我吧！'
  });
};

module.exports = scoreView;