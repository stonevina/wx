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
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = scoreView;