/**
 * @description 错题解析
 * @time 2016.11.29 14:08
 */

var analysisTpl = require('../tpl/analysis.tpl');

var analysisView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: analysisTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = analysisView;