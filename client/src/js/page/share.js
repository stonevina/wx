'use strict';

var wxShare = require('../libs/ready.js');

var share = {
  init: function() {
    wxShare(this.ready.bind(this));
  },
  setShareLink: function(opts) {
    this.shareLink = opts.link;
    this.desc = opts.desc || '我报名观看11月27日江苏苏宁与广州恒大的比赛， 请投票支持我免费现场助威';
    this.title = opts.title;
    this.init();
  },
  //微信相关设置、初始化
  ready: function() {
    var shareData = {
      // 分享链接
      link: this.shareLink,
      // 分享图标
      //imgUrl: location.origin + '/assets/img/inviter/shareIcon.jpg',
      //Android 下https icon出不来，使用http方式
      imgUrl: 'http://o86ysntn1.qnssl.com/CHANNEL/7f22803139f863281620e6648573d7b6',
    };

    // 分享给朋友
    wx.onMenuShareAppMessage($.extend({}, shareData, {
      // 分享标题
      title: this.title,
      // 分享描述
      desc: this.desc
    }));

    // 分享到朋友圈
    wx.onMenuShareTimeline($.extend({}, shareData, {
      title: this.desc
    }));

    //批量隐藏菜单
    wx.hideMenuItems({
      menuList: ['menuItem:share:qq', 'menuItem:share:QZone', 'menuItem:share:weiboApp']
    });
  }
};

// share.init();

module.exports = share;