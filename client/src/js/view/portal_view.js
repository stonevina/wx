/**
 * @description 首页
 * @time 2016.11.28 20.02
 */

var portalTpl = require('../tpl/portal.tpl');

var portalView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: portalTpl,
  initialize: function() {
    
  },
  render: function() {
    var tpl = _.template(this.template)();
    this.$el.html(tpl);
  }
});

module.exports = portalView;