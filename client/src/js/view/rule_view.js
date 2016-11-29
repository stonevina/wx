/**
 * @description 活动规则
 * @time 2016.11.28 20.02
 */

var ruleTpl = require('../tpl/rule.tpl');

var ruleView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: ruleTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = ruleView;