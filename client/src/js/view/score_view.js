/**
 * @description 答题结果页
 * @time 2016.11.29 15:08
 */

var scoreTpl = require('../tpl/score.tpl');

var scoreView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: scoreTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = scoreView;