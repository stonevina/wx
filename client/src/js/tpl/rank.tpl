<div id="rank">
  <div class="header">
    <div class="avatar">
      <img src="<%=self.headimgurl%>" alt="">
    </div>
    <div class="grade">
      <span class="item" id="J-selfRank"></span>
      <span class="item" id="J-selfScore"></span>
    </div>
  </div>
  <div class="content">
    <div class="tb-header">
      <span class="fore1">名次</span>
      <span class="fore2">名字</span>
      <span class="fore3">用时</span>
    </div>
    <div class="tb-body">
      <ul>
        <% users.forEach(function(person, i) { %>
          <li class="item">
            <% if (i == 0) { %>
              <span class="fore1 first"><%=i + 1%></span>
            <% } else if (i == 1) { %>
              <span class="fore1 second"><%=i + 1%></span>
            <% } else if (i == 2) { %>
              <span class="fore1 third"><%=i + 1%></span>
            <% } else { %>
              <span class="fore1"><%=i + 1%></span>
            <% } %>
            <span class="fore2"><%=person.nickname || '&nbsp;'%></span>
            <span class="fore3"><%=formatTime(person.expended_time)%></span>
          </li>
        <% }) %>
      </ul>
    </div>
  </div>
  <div class="footer">
    <div class="action">
      <a href="/quiz/portal">立刻去挑战</a>
    </div>
  </div>
</div>