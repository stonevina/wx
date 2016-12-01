/**
 * @description exam client model
 * @author shijianguo
 * @time 2016.12.1 10:23
 */

'use strict';

var examModel = Backbone.Model.extend({
  defaults: function() {
    return {
      
    }
  },
  url: '/quiz/v1/api/questions'
});

module.exports = examModel;