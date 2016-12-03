<div id="analysis">
  <div class="header">错题解析</div>
  <div class="question-list">
    <% corrections.forEach(function(correction, index) { %>    
      <div class="list-item">
        <div class="question-num"><i class="triangle-icon"></i>错题<%=index + 1%></div>
        <div class="question-title">
          <div class="content">
            <%=correction.title%>
          </div>
        </div>
        <div class="choice">
          <% var choices = correction.content.split('；') %>
          <% choices.forEach(function(choice, index) { %>
            <%var choiceIndex = choice.match(/^\s*[A-Z]/)%>
            <% if (choiceIndex) { %>
              <div class="choice-item">
                <i class="choice-icon" title="<%=$.trim(choiceIndex[0])%>"></i>
                <span><%=choice.slice(2)%></span>
              </div>
            <% } %>
          <% }) %>
        </div>
        <div class="answer">
          <span class="fore1">正确答案：</span>
          <span class="content"><%=correction.answer%></span>
        </div>
      </div>
    <% }) %>
  </div>
  <div class="footer">
    <div class="action">
      <a href="#portal">再次挑战</a>
    </div>
  </div>
</div>