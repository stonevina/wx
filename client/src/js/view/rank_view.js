/**
 * @description 排行榜
 * @time 2016.11.28 20.02
 */

var rankTpl = require('../tpl/rank.tpl');

var rankView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: rankTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = rankView;