/**
 * @description 答题
 * @time 2016.11.29 12:58
 */

var examTpl = require('../tpl/exam.tpl');
var ExamModel = require('../model/exam_model.js');
var CorrectionModel = require('../model/correction_model.js');
var CountUp = require('../page/countup.js');

var ScoreView = require('../view/score_view.js');

var examView = Backbone.View.extend({
  el: '#container',
  events: {
    'click .choice-item': 'judgeAction'
  },
  template: examTpl,
  //正计计时模板
  countupTpl: '<div class="expended-time">\
                <span class="minute">{minute}</span>\
                <span>:</span>\
                <span class="second">{second}</span>\
                <span>:</span>\
                <span class="msec">{millisecond}</span>\
              </div>\
            ',
  //当前答题的位置
  examIndexTpl: '<span class="progress">{index}</span>/{limit}',
  initialize: function() {
    this.examModel = new ExamModel;
    this.questionIndex = 0;
    //答题数量
    this.limit = 10;
    //时间增加值
    this.step = 5 * 1000;

    this.scoreView = new ScoreView();

    this.countup = new CountUp({
      precision: 10,
      onchange: function(time, timeStamp) {
        var tpl = this.getTimeTpl(time);
        $('.expended-time').html(tpl);
        this.expendedTime = timeStamp;
      }.bind(this)
    });

    //错题
    this.corrections = [];
  },
  getTimeTpl: function(time) {
    var ms = Math.floor(time.millisecond / 10);
    var timeTpl = this.countupTpl
      .replace(/{minute}/g, time.minute)
      .replace(/{second}/g, time.second)
      .replace(/{millisecond}/g, ms < 10 ? '0' + ms : ms);
    
    return timeTpl;
  },
  //判断是否正确
  judgeAction: function(e) {
    var $target = $(e.currentTarget);
    var $parent = $target.parent();
    var selected = $target.data('key');
    var answer = $parent.data('key');
    //question id
    var qsid = $parent.data('id');

    if (selected == answer) {
      $target.addClass('right');
      $target.find('.rightImg').show()
    } else {
      this.countup.addTime(this.step);
      this.corrections.push(qsid);
      $target.addClass('wrong');
      $target.find('.wrongImg').show()
    }

    this.questionIndex++;
    this.timer = setTimeout(function() {
      if (this.questionIndex == this.limit) {
        clearTimeout(this.timer);
        this.questionIndex = 0;
        this.uploadWrong().then(function() {
          //上报成绩
          this.scoreView.create({
            count: this.limit - this.corrections.length,
            time: this.expendedTime,
            userid:  user.unionid
          })
          .then(function() {
            //时间
            var tpl = this.getTimeTpl({minute: '00', second: '00', millisecond: '00'});
            //停止计时
            this.countup.stop();
            //重置显示时间
            $('.expended-time').html(tpl);
            router.navigate('/score', {trigger: true});
          }.bind(this));
        }.bind(this))
      } else {
        this.next();
      }
    }.bind(this), 1000);
  },
  //上报错题
  uploadWrong: function() {
    this.model = new CorrectionModel({
      questions: this.corrections,
      userid:  user.unionid
    });
    return this.model.save();
  },
  //显示下一题
  next: function() {
    var tpl = _.template(this.template)(this.data[this.questionIndex]);
    this.$el.html(tpl);
    this.setIndexTpl();
  },
  setIndexTpl: function() {
    var indexTpl = this.examIndexTpl
      .replace(/{index}/g, this.questionIndex + 1)
      .replace(/{limit}/g, this.limit);

    $('.header').html(indexTpl);
  },
  render: function() {
    this.examModel.fetch({
      url: '/quiz/v1/api/questions/' + user.unionid
    })
    .then(function(result) {
      this.data = result;
      var tpl = _.template(this.template)(result[this.questionIndex]);
      this.$el.html(tpl);
      this.setIndexTpl();
      this.countup.start();
    }.bind(this), function(err) {
      console.log(err);
    });
  }
});

module.exports = examView;