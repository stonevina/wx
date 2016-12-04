/**
 * @description 答题结果页
 * @time 2016.11.29 15:08
 */

var scoreTpl = require('../tpl/score.tpl');
var ScoreModel = require('../model/score_model.js');
// var CountModel = require('../model/count_model.js');
var share = require('../page/share.js');
//等级与称号对应关系
var level2Title = ['学前班童僧', '幼稚de小学僧', '天真de初中僧', '青涩de高中僧', '成熟de大学僧'];
//self level
var level = null;

var scoreView = Backbone.View.extend({
  el: '#container',
  events: {
    'click #J-share': 'showGuide',
    'click #J-guide': 'hideGuide',
    'click #J-close': 'hideQrcode'
  },
  template: scoreTpl,
  initialize: function() {
    
  },
  showGuide: function() {
    $('#J-guide').show();
  },
  hideGuide: function() {
    $('#J-guide').hide();
  },
  hideQrcode: function() {
    $('#J-code').removeClass('show');
  },
  //返回等级
  getLevel: function(score) {
    var percent = +(score.rank / score.total).toFixed(2);
    var rank = score.rank;

    //总数不足10人
    if (score.total <= 10) {
      if (rank <= 1) {
        return 5;
      }

      if (rank > 1 && rank <= 3) {
        return 4;
      }

      if (rank > 3 && rank <= 5) {
        return 3;
      }

      if (rank > 5 && rank <= 7) {
        return 2;
      }

      if (rank > 7) {
        return 1;
      }
    }

    //总数超过10人处理
    if (percent <= 0.1) {
      return 5;
    }

    if (percent > 0.1 && percent <= 0.3) {
      return 4;
    }

    if (percent > 0.3 && percent <= 0.5) {
      return 3;
    }

    if (percent > 0.5 && percent <= 0.7) {
      return 2;
    }

    if (percent > 0.7) {
      return 1;
    }

    // switch(percent) {
    //   case percent <= 0.1: 
    //     level = 1;
    //     break;
    //   case percent > 0.1 && percent <= 0.3:
    //     level = 2;
    //     break;
    //   case percent > 0.3 && percent <= 0.5:
    //     level = 3;
    //     break;
    //   case percent > 0.5 && percent <= 0.7:
    //     level = 4;
    //     break;
    //   case percent > 0.7:
    //     level = 5;
    //     break;
    //   default:
    //     level = 5;
    // }
    // return level;
  },
  getScore: function() {
    var model = new ScoreModel;
    model.fetch({
      url: '/quiz/v1/api/scores/' + user.unionid
    })
    .then(function(result) {
      
      if (_.isEmpty(result)) {
        return;
      }

      level = this.getLevel(result);
      var levelClassName = 'lv' + level;
      var percent = result.rank == 1 ? 100 : Math.ceil((result.total - result.rank) / result.total * 100);

      $('#J-time').text((result.expended_time / 1000).toFixed(2));
      $('#J-rank').text(result.rank);
      $('#J-percent').text(percent + '%');
      $('#J-level').addClass(levelClassName);

      //前20名
      if (result.rank <= 20) {
        $('#J-info').show();
      } else {
        $('#J-goal').show();
      }
    }.bind(this));
  },
  create: function(props) {
    this.model = new ScoreModel({
      //答题时间
      expended_time: props.time,
      //对题的数量
      right_count: props.count,
      //用户id
      userid: props.userid
    });
    return this.model.save();
  },
  render: function() {
    var tpl = _.template(this.template)({user: user});
    this.$el.html(tpl);

    this.getScore();
    // setTimeout(this.ready, 1500);
  },
  ready: function() {
    
  }
});

if (/\/score#*/.test(location.pathname)) {
  window.onload = function() {
    var percent = $('#J-percent').text();
    share.setShareLink({
      link: location.origin + '/quiz',
      title: '你能识别谎言吗？',
      desc: '我正在“识别谎言”，我获得称号' + level2Title[level - 1] + '，超过了全校' + percent + '的人，快来挑战我吧！',
      onSuccess: function() {
        $('#J-code').addClass('show');
        $('#J-guide').hide();

        //增加测试次数
        Backbone.ajax({
          url: '/quiz/v1/api/questions/add/' + user.unionid,
          method: 'put'
        })
        .then(function(result) {
          console.log(result);
        }, function(err) {
          console.log(err);
        });
      },
      onCancel: function() {
        // $('#J-score').show();
      },
      onFail: function() {
        // $('#J-score').show();
      }
    });
  };
}

module.exports = scoreView;