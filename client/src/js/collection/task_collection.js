/**
 *@description tasklist
 *@author shijianguo
 *@time 2016.11.23 17:55 
 */

'use strict';

var TaskModel = require('../model/task_model.js');

var TaskCollection = Backbone.Collection.extend({
  model: TaskModel,
  done: function() {
    return this.where({done: true});
  },
  remaining: function() {
    return this.where({done: false});
  },
  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },
  comparator: 'order'
});

module.exports = TaskCollection;