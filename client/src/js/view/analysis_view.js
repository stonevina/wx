/**
 * @description 错题解析
 * @time 2016.11.29 14:08
 */

var analysisTpl = require('../tpl/analysis.tpl');
var CorrectionModel = require('../model/correction_model.js');

var analysisView = Backbone.View.extend({
  el: '#container',
  events: {
    
  },
  template: analysisTpl,
  initialize: function() {
    this.model = new CorrectionModel;
  },
  render: function() {
    this.model.fetch({
      url: '/quiz/v1/api/corrections/' + user.unionid
    })
    .then(function(result) {
      var tpl = _.template(this.template)({corrections: result});
      this.$el.html(tpl);
    }.bind(this));
  }
});

module.exports = analysisView;