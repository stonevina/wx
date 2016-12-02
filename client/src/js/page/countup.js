/**
 * @description: 正计时
 * @version: 1.0.0
 * @author: shijianguo
 * @time: 2016.12.1 13:25
 */

//补充文本，例如补零操作
var paddingTxt = function (direction, origin, txt, num, isPadding) {
      
  if (!isPadding) {return origin;}

  var origin = typeof origin == 'string' ? origin : '' + origin;
    
  while(origin.length < num) {
    //0是头部，1是尾部
    origin = direction == 0 ? txt + origin : origin + txt;
  }
  
  return origin;
};

var CountUp = function(opts) {
  this.init(opts);
};

CountUp.prototype = {
  constructor: CountUp,
  init: function (opts) {
      var defaults = {
        //开始时间
        beginTime: '',
        //截止时间
        endTime: '',
        //持续时间，单位s
        duration: '',
        //间隔精度
        precision: 1000,
        //是否保留两位
        isTwoDigital: true,
        //正计时过程中的回调
        onchange: $.noop,
        //正计时结束时的回调
        onEnd: $.noop
      },
      settings = $.extend({}, defaults, opts);
      $.extend(this, settings);
      
      // this.beginTime = (this.beginTime ? new Date(this.beginTime) : new Date()).getTime();
      this.endTime = this.endTime && new Date(this.endTime).getTime() || null;
      
      // this.start();
    },
    //获取持续时间
    getLastTime: function () {
      var now = new Date().getTime();
      var originTime = now - this.beginTime;
      var during = originTime / 1000;
      var lastTime = this.duration ? Math.min(during, this.duration) : during;
      
      this.lastTimeObj = {
        day: paddingTxt(0, Math.floor(lastTime / 24 / 60 / 60), 0, 2, this.isTwoDigital),
        hour: paddingTxt(0, Math.floor(lastTime / (60 * 60)) % 24, 0, 2, this.isTwoDigital),
        minute: paddingTxt(0, Math.floor(lastTime / 60) % 60, 0, 2, this.isTwoDigital),
        second: paddingTxt(0, Math.floor(lastTime % 60), 0, 2, this.isTwoDigital),
        //millisecond:  paddingTxt(0, Math.floor(lastTime * milliPrecision % milliPrecision), 0, Math.log(1000) / Math.log(milliPrecision), this.isTwoDigital)
        millisecond: paddingTxt(0, Math.floor(lastTime * 1000 % 1000), 0, 3, true)
      };
      
      this.onchange.call(this, this.lastTimeObj, originTime);
      this.timer = setTimeout(this.getLastTime.bind(this), this.precision);
      
      if (this.endTime && this.endTime == now || (this.duration && this.duration == Math.floor(lastTime % 60))) {
        this.stop.call(this);
        return;
      }
    },
    //增加时间
    addTime: function(time) {
      this.beginTime -= time;
    },
    //当小于1s的时候，chrome浏览器会做优化，当前的标签隐藏时，js将停止执行，使用setTimeout代替setInterval
    start: function () {
      this.beginTime = (this.beginTime ? new Date(this.beginTime) : new Date()).getTime();
      //this.timer = setInterval($.proxy(this.getLastTime, this), this.precision);
      this.getLastTime();
    },
    stop: function () {
      clearInterval(this.timer);
      this.timer = null;
      this.beginTime = null;
      this.onEnd.call(this);
    }
};

module.exports = CountUp;