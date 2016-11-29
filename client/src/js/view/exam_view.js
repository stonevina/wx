/**
 * @description 答题
 * @time 2016.11.29 12:58
 */

var examTpl = require('../tpl/exam.tpl');

var examView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: examTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = examView;