/**
 * @description count client model
 * @author shijianguo
 * @time 2016.12.3 18:21
 */

'use strict';

var countModel = Backbone.Model.extend({
  url: '/quiz/v1/api/questions/add'
});

module.exports = countModel;