/**
 * @description 添加任务
 * @time 2016.10.26 11:34
 */

var addTaskTpl = require('../tpl/add-task.tpl');
var taskItemTpl = require('../tpl/task_item.tpl');

var dpContainerView = require('./dp_container_view.js');
var drapAndDropView = require('./drap_and_drop_view.js');

var TaskCollection = require('../collection/task_collection.js');

var TaskList = new TaskCollection;

var addTaskView = Backbone.View.extend({
  el: '#editor',
  state: {
    being: false
  },
  initialize: function() {
    this.listenTo(TaskList, 'add', this.addOne);
    this.listenTo(TaskList, 'reset', this.addAll);
    this.listenTo(TaskList, 'all', this.render);
    TaskList.fetch();
  },
  events: {
    'click .cancel': 'destroy',
    'click .submit_btn': 'addTask',
    'click #J-addTask': 'addTask',
    'click .input_due_date': 'showDpView',
    'mouseover .manager': 'showDrapView',
    'mouseover .task_item': 'showDrapView',
    // 'mouseout .task_item': 'hideDrapView'
  },
  template: addTaskTpl,
  initialize: function() {
    //任务编辑器选择器
    this.editorSelector = '.manager';
    //存放编辑器的容器
    this.targetContainer = '#J-taskItem';
    //根节点样式
    this.rootClass = 'indent_1';
    //日期选择
    this.dpContainerView = new dpContainerView;
    //拖拽组件
    this.drapAndDropView = new drapAndDropView;
  },
  //日期选择面板
  showDpView: function(e) {
    var $target = $(e.target);
    var offset = $target.offset();
    this.dpContainerView.render({
      dp_container_style: 'top: {top}px; left: {left}px; z-index: 5000'.replace(/{top}/g, offset.top + 36).replace(/{left}/g, 1000),
      arrow_top_style: 'left: {left}; z-index: 5100'.replace(/{left}/g, '50%'),
    });
  },
  //显示拖拽组件
  showDrapView: function(e) {
    var $target = $(e.currentTarget);
    this.drapAndDropView.render($target);
  },
  hideDrapView: function(e) {
    var $currentTarget = $(e.currentTarget);
    var $target = $(e.target);
    
    clearTimeout(this.dragTimer);
    this.dragTimer = setTimeout(function() {
      if ($target.parents('.task_item').length) {
        this.drapAndDropView.destroy($currentTarget);
        this.dragTimer = null;
      }
    }.bind(this), 200);
  },
  //添加单项任务
  addTask: function(e) {
    var $editorInput = $('#J-richtext_editor');
    var content = $editorInput.text();
    var $target = $(e.currentTarget);

    //编辑器前面的节点
    var $prevEle = null;
    var $editor = null;

    //编辑器渲染后$container不为空
    if (this.$container) {
      $editor = this.$container.find(this.editorSelector);
      $prevEle = $editor.prev();
    }

    //是否是编辑器的添加任务按钮
    var isEditorSubmit = $target.hasClass('submit_btn');

    //还未创建编辑器
    if (!$editorInput.length) {
      return this.render(this.targetContainer, true);
    }

    //还没输入任务内容
    if (!$.trim(content).length) {

      //点击编辑器的添加任务
      if (isEditorSubmit) {
        return;
      }

      //点击列表中的添加任务，重新创建
      return this.render(this.targetContainer, true);
    }

    this.indentClass = this.getIndentClass();
    this.indent = /\d+/.exec(this.indentClass)[0];
    this.content = content;
    this.priority = 1;

    if ($prevEle) {
      var keys = [];
      var self = this;
      this.parent = $prevEle.data('key');
      this.item_order = this.$el.find('li.task_item').length;
      $editor.prevAll().each(function(k, v) {
        //过滤掉其他根节点
        if ($(this).hasClass(self.rootClass) && $(this).next().hasClass(self.rootClass)) {
          return false;
        }

        //过滤兄弟节点
        if (!$(this).hasClass(self.indentClass)) {
          var key = $(this).data('key');

          if (key) {
            keys.push(key);
          }
        }
      });
      this.ancestors = this.parent ? keys : [];
    }

    this.create();
  },
  addOne: function(task) {
    console.log(task);
  },
  create: function() {
    TaskList.create({
      level: /\d+/.exec(this.indent)[0],
      content: this.content,
      priority: this.priority,
      parent: this.parent,
      ancestors: this.ancestors,
      item_order: this.item_order
    });
  },
  //使用indent + item_order更新任务列表，保留节点顺序
  saveOrder: function() {
    var order = 0;
    var result = [];
    
    this.$el.find('li.task_item').each(function() {
      var id = $(this).data('key');
      var indent = $(this).get(0).className.match(/indent_(\d+)/)[1];
      result[id] = [++order, indent];
    });
    
    return task.update(result);
  },
  //销毁添加任务编辑器
  destroy: function(e) {
    var $ele = $(e.target);
    this.drapAndDropView.destroy($(this.editorSelector));
    $ele.parents(this.editorSelector).remove();
    this.state.being = false;
  },
  //添加任务编辑器
  render: function(selector, isForcedRender) {
    var editorTpl = _.template(this.template)();

    this.$container = selector ? $(selector) : this.$container;
    this.$el.find(this.editorSelector).remove();
    this.drapAndDropView.setState({being: false});
    this.$container.append(editorTpl);

    return this;
  },
  //更新任务编辑器
  replace: function() {
    var tpl = _.template(this.template)();
    this.drapAndDropView.destroy($(this.editorSelector));
    this.$el.find(this.editorSelector).remove();

    var $newTaskItem = this.$el.find('#item_' + this.$id);
    var $placeholder = $(tpl);
    
    $placeholder.removeClass(function() {
      return this.className.match(/(indent_\d+)/g)[0];
    }).addClass(this.indentClass);

    $newTaskItem.after($placeholder);

    this.$id = null;
    this.indentClass = null;
  },
  //获取缩进
  getIndentClass: function() {
    return $(this.editorSelector)[0].className.match(/(indent_\d+)/)[1];
  }
});

module.exports = addTaskView;