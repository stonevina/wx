/**
 * @description 微信接口调用
 * @time 2016.3
 * @author shijianguo
 */
module.exports = function(onReady) {

  Backbone.ajax({
    url: '/quiz/v1/api/signature',
    data: {
      url: location.href
    }
  }).then(function(result) {
    //注入微信权限验证配置
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: result.appId, // 必填，公众号的唯一标识
      timestamp: result.timestamp, // 必填，生成签名的时间戳
      nonceStr: result.nonceStr, // 必填，生成签名的随机串
      signature: result.signature,// 必填，签名，见附录1
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'checkJsApi',
        'openLocation',
        'getLocation',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQZone',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideAllNonBaseMenuItem',
        'hideMenuItems'
      ]
    });

    //接口处理失败验证
    wx.error(function(res) {
      console.error(res);
    });

    //微信所有接口需在ready后调用
    wx.ready(onReady);
  });
}