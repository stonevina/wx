<div id="exam">
  <div class="header"></div>
  <div class="title">
    <span class="content"><%=title%></span>
  </div>
  <div class="choice" data-key="<%=answer%>" data-id="<%=id%>">
    <% var choices = content.split('；') %>
    <% choices.forEach(function(choice, index) { %>
      <%var choiceIndex = choice.slice(0, 1)%>
      <% if ($.trim(choiceIndex)) { %>
        <div class="choice-item" data-key="<%=choiceIndex%>">
          <span class="content"><%=choice%></span>
          <img class='wrongImg' src='/img/wrong.png'>
          <img class='rightImg' src='/img/right.png'>
        </div>
      <% } %>
    <% }) %>
  </div>
  <div class="expended-time"></div>
</div>