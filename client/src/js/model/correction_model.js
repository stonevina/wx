/**
 * @description correction client model
 * @author shijianguo
 * @time 2016.12.1 11:51
 */

'use strict';

var correctionModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //题目id
      questions: [],
      //用户id
      userid: ''
    }
  },
  url: '/quiz/v1/api/corrections'
});

module.exports = correctionModel;