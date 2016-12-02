/**
 * @description 答题结果页
 * @time 2016.11.29 15:08
 */

var scoreTpl = require('../tpl/score.tpl');
var ScoreModel = require('../model/score_model.js');

var scoreView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: scoreTpl,
  initialize: function() {
    // this.user = $('#J-userinfo').data('user');
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

module.exports = scoreView;