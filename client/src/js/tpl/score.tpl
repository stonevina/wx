<div id="score">
  <div class="header">
    <div class="avatar">
      <img src="<%=user.headimgurl%>" alt="">
    </div>
    <div class="tip">
      <span><%=user.nickname%>，恭喜你获得新称号</span>
    </div>
  </div>
  <div class="content">
    <div class="grade" id="J-level">
      <div class="grade-title"></div>
      <div class="grade-body"></div>
    </div>
    <p class="defeater">打败全校<span class="percent" id="J-percent"></span>的人！</p>
    <p class="result">您的最佳耗时<span class="time" id="J-time"></span>秒，目前排名<span class="rank" id="J-rank"></span></p>
    <p class="info" id="J-info">坚持到最后，就会获奖！</p>
    <p class="goal" id="J-goal">距离获奖，只差<span class="time" id="J-differ"></span>秒！</p>
  </div>
  <div class="footer">
    <div class="action">
      <a href="javascript:;" id="J-share">炫耀一把</a>
    </div>
    <div class="action other">
      <a href="/quiz/portal">再次挑战</a>
    </div>
    <div class="link">
      <a class="item" href="/quiz/portal#rank">查看总榜</a>
      <a class="item" href="/quiz/portal#analysis">错题解析</a>
    </div>
    <div class="qrcode" id="J-code">
      <div class="header-title"></div>
      <i class="close-icon" id="J-close"></i>
      <img src="/img/qrcode@2x.png" alt="">
    </div>
    <div class="guide" id="J-guide"><img src="/img/guide.png"></div>
    <div class="conduct">
      <span>本活动由四川大学点鲸财商俱乐部举办</span>
    </div>
  </div>
</div>