/**
 * @description 前端route
 * @time 2016.10.26 16:54
 */
var Backbone = require('backbone');

var portalView = require('../view/portal_view.js');
var rankView = require('../view/rank_view.js');
var ruleView = require('../view/rule_view.js');
var examView = require('../view/exam_view.js');
var analysisView = require('../view/analysis_view.js');
// var scoreView = require('../view/score_view.js');

var router = Backbone.Router.extend({
  routes: {
    'portal': 'showPortal',
    'exam': 'startExam',
    'rank': 'showRank',
    'rule': 'showRule',
    'analysis': 'showAnalysis',
    // 'score': 'showScore'
  },
  initialize: function() {
    this.portalInstanceView = new portalView();
    this.rankInstanceView = new rankView();
    this.ruleInstanceView = new ruleView();
    this.examInstanceView = new examView();
    this.analysisInstanceView = new analysisView();
    // this.scoreInstanceView = new scoreView();
  },
  //显示首页
  showPortal: function() {
    this.portalInstanceView.render();
  },
  //显示答题结果页面
  showScore: function() {
    this.scoreInstanceView.render();
  },
  //开始答题
  startExam: function() {
    this.examInstanceView.render();
  },
  //查看错题解析
  showAnalysis: function() {
    this.analysisInstanceView.render();
  },
  //排行榜
  showRank: function() {
    this.rankInstanceView.render();
  },
  //活动规则
  showRule: function() {
    this.ruleInstanceView.render();
  }
});

module.exports = router;