/**
 * @description score client model
 * @author shijianguo
 * @time 2016.12.1 14:38
 */

'use strict';

var scoreModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //答题时间
      expended_time: '',
      //对题的数量
      right_count: 0,
      //用户id
      userid: ''
    }
  },
  url: '/quiz/v1/api/scores'
});

module.exports = scoreModel;