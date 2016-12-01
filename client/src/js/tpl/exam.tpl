<div id="exam">
  <div class="header">
    <span class="progress">1</span>/20
  </div>
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
        </div>
      <% } %>
    <% }) %>
  </div>
  <div class="expended-time"></div>
</div>