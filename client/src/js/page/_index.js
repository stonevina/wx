!function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var c = "function" == typeof require && require;
        if (!a && c)
          return c(s, !0);
        if (i)
          return i(s, !0);
        var d = new Error("Cannot find module '" + s + "'");
        throw d.code = "MODULE_NOT_FOUND",
        d
      }
      var l = n[s] = {
        exports: {}
      };
      t[s][0].call(l.exports, function(e) {
        var n = t[s][1][e];
        return o(n ? n : e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }
  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)
    o(r[s]);
  return o
}({
  1: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, A, S, C, T, k, D, E, x, P, M, N, L, R, U, O, V, B, H, F, G, q, z, Y, W, Q, K, J, X, Z, ee, te, ne, re, oe, ie, se, ae, ce, de, le;
    e("babel-polyfill"),
    Y = e("react"),
    W = e("react-dom"),
    e("../../karma/.coffee.karma_utils.js"),
    s = window.AmiTooltip,
    i = window.AmiComplete,
    N = window.MiniCal,
    K = window.Signals,
    h = window.FilesManager,
    ce = e("../components/misc/Util.js").postMessageToWindow,
    A = e("../models/.coffee.LoadEngine.js"),
    y = e("../models/.coffee.ItemsModel.js"),
    q = e("../models/.coffee.ProjectsModel.js"),
    m = e("../models/.coffee.InitModels.js"),
    X = e("../models/.coffee.Storage.js").GlobalStorage,
    M = e("../mini/.coffee.MessageHandler.js"),
    d = e("../mini/.coffee.DimensionCalculator.js"),
    V = e("../mini/PluginVersion.js"),
    O = e("../external_services/OutlookIntegration.js"),
    p = e("../components/generic_manager/GenericManager.js"),
    k = e("../components/location_manager/LocationManager.js"),
    se = e("../components/opener/WindowOpener.js"),
    ee = e("../components/timezone_checker/.coffee.TimezoneChecker.js"),
    U = e("../components/notifier/Notifier.js"),
    o = e("../components/agenda/Agenda.js"),
    a = e("../components/comet/.coffee.Comet.js"),
    S = e("../components/loading/Loading.js"),
    ne = e("../components/left_menu/.coffee.TopFilters.js"),
    I = e("../components/left_menu/.coffee.LeftMenuTabs.js"),
    b = e("../components/left_menu/.coffee.LeftMenu.js"),
    re = e("../components/top_icons/.coffee.TopIcons.js"),
    z = e("../components/quick_find/.coffee.QuickFind.js"),
    v = e("../components/labels/Labels.js"),
    L = e("../components/notes/Notes.js"),
    R = e("../components/notes/.coffee.NotesBuffer.js"),
    g = e("../components/item_selecter/ItemSelecter.js"),
    w = e("../components/keyboard_shortcuts/KeyboardShortcuts.js"),
    F = e("../components/project_list/.coffee.ProjectList.js"),
    G = e("../components/project_list/.coffee.ProjectArchive.js"),
    f = e("../components/filters_list/.coffee.FiltersList.js"),
    j = e("../components/labels_list/.coffee.LabelsList.js"),
    H = e("../components/project_editor/ProjectEditor.js").ProjectEditorGeneric,
    c = e("../components/completed_history/.coffee.CompletedHistory.js"),
    ie = e("../components/viral_spread/.coffee.ViralSpread.js"),
    J = e("../components/start_page/StartPage.js"),
    B = e("../components/premium_promotion/.coffee.PremiumPromotion.js"),
    Z = e("../components/themes/.coffee.Themes.js"),
    oe = e("../components/undo/.es6.UndoToasts.js"),
    E = e("../menus/MenuAgendaEdit.js"),
    P = e("../menus/MenuUser.js"),
    x = e("../menus/.coffee.MenuItemEditMore.js"),
    Q = e("./.coffee.ResolveDeps.js"),
    D = e("../external_services/.coffee.MacAppBridge.js"),
    C = e("../components/local_notifications/.coffee.LocalNotifications.js"),
    T = e("../components/local_reminders/.coffee.LocalReminders.js"),
    u = e("./DummyStrings.js"),
    l = e("../dispatcher/Dispatcher.js"),
    r = e("../actions/.es6.ActionTypes.js"),
    te = e("../react_components/.es6.TodoistApp.js").default,
    e("../components/refresh_interface/.coffee.RefreshInterface.js"),
    window.initTodoist = function(e) {
      var t;
      return t = document.getElementById("todoist_app"),
      W.render(Y.createElement(te, null ), t),
      ICE.annotateAjaxData.push(function(e) {
        if (window.CLIENT_ID && e)
          return e._client_id = window.CLIENT_ID
      }),
      a.init(),
      M.init(),
      m.init(),
      Q.resolve(),
      A.loadData(!1, function() {
        if (ae(),
        l.dispatch({
          actionType: r.LOAD_CACHED_DATA
        }),
        $isFunction(e))
          return e()
      }),
      ce(top, "TODOIST_INITED:true")
    }
    ,
    ae = function() {
      var e, t, n;
      return $hide($("all_holder"), $("left_menu"), $("content")),
      (ICE.$hasTouchEnabled() || ICE.$isEdge()) && $addClass($body(), "has_touch_enabled"),
      ICE.$isTouchDeviceOnly() && $addClass($body(), "touch_device_only"),
      b.render(),
      n = window.User,
      e = n ? window.User.is_premium = n.is_premium : window.User.is_premium = !1,
      n && !e && n.karma > 530 && $show($("premium_promotion")),
      re.render(),
      z.render(),
      v.init(),
      se.init(),
      s.init(),
      g.init(),
      k.init(),
      V.init(),
      w.init(),
      N.init({
        startDay: window.Settings && window.Settings.START_DAY || 1
      }),
      k.init(),
      L.init(),
      F.initWithData(),
      j.initWithData(),
      f.initWithData(),
      H.init(),
      o.init(),
      Z.switchThemes(n.theme || 0),
      c.updateCount(n.completed_count),
      F.render(),
      j.render(),
      f.render(),
      G.render(),
      E.init(o.get()),
      P.init(),
      x.init(),
      t = $("top_section"),
      $add(t, ne.render()),
      F.current_list = $("project_list"),
      j.current_list = $("labels_list"),
      f.current_list = $("filters_list"),
      $add(t, I.render()),
      I.showDefault(),
      $AEV(window, "load", function() {
        return F.arrows.updateArrows()
      }),
      setTimeout(le, 10),
      ee.checkTimezone(),
      ie.countAndShowIfNeeded(),
      K.sendSignal("data_fully_loaded")
    }
    ,
    le = function() {
      return de(),
      i.init(),
      U.init(),
      J.show(),
      $AEV([$("editor")], "contextmenu", function(e) {
        var t, n;
        return t = $eventElm(e),
        !(!t || "textarea" !== (n = $nodeName(t)) && "input" !== n) || !e.ctrl
      }),
      $AEV($("left_menu"), "scroll", function() {
        var e;
        return e = $("left_menu").scrollTop,
        e !== window.LEFT_MENU_ST && K.sendSignal("hide_menus"),
        window.LEFT_MENU_ST = e
      }),
      B.checkEmpty(),
      $show($("all_holder"), $("top_bar"), $("left_menu"), $("content")),
      d.init(),
      d.recalculate(),
      o.get().updateCounters()
    }
    ,
    window !== top && top.postMessage && setInterval(function() {
      return ce(top, window.location.toString())
    }, 200),
    window.onbeforeunload = function() {
      var e, t, n, r, o, i;
      if (X._commitAll(),
      t = R.getNoteUploads(),
      t.length > 0)
        return t[0].item_id ? L.showItemNotes(t[0].item_id) : L.showProjectNotes(t[0].project_id),
        _("You have uploads that are not completed.");
      for (n = [q.project_order_indent_syncer, y.item_order_indent_syncer, y.dayorder_syncer],
      e = !1,
      o = 0,
      i = n.length; o < i; o++)
        r = n[o],
        r.hasUnfinished() && (r.commit(),
        e = !0);
      return e ? _("You have some updates pending, please wait...") : void 0
    }
    ,
    de = function() {
      var e;
      if (window.location.host.match(/firefox|gmail/))
        return e = function() {
          return !1
        }
        ,
        h.isDropboxEnabled = e,
        h.isDriveEnabled = e,
        h.isSelectFilesEnabled = e
    }
    ,
    window.CURRENT_DAY = (new Date).getDate(),
    setInterval(function() {
      var e;
      if (e = (new Date).getDate(),
      e !== window.CURRENT_DAY)
        return o.get().updateCounters(),
        K.sendSignal("refresh_interface"),
        window.CURRENT_DAY = e
    }, 3e4)
  }
  , {
    "../../karma/.coffee.karma_utils.js": 186,
    "../actions/.es6.ActionTypes.js": 2,
    "../components/agenda/Agenda.js": 19,
    "../components/comet/.coffee.Comet.js": 22,
    "../components/completed_history/.coffee.CompletedHistory.js": 23,
    "../components/filters_list/.coffee.FiltersList.js": 36,
    "../components/generic_manager/GenericManager.js": 41,
    "../components/item_selecter/ItemSelecter.js": 43,
    "../components/keyboard_shortcuts/KeyboardShortcuts.js": 52,
    "../components/labels/Labels.js": 54,
    "../components/labels_list/.coffee.LabelsList.js": 55,
    "../components/left_menu/.coffee.LeftMenu.js": 56,
    "../components/left_menu/.coffee.LeftMenuTabs.js": 57,
    "../components/left_menu/.coffee.TopFilters.js": 58,
    "../components/loading/Loading.js": 59,
    "../components/local_notifications/.coffee.LocalNotifications.js": 60,
    "../components/local_reminders/.coffee.LocalReminders.js": 61,
    "../components/location_manager/LocationManager.js": 62,
    "../components/misc/Util.js": 65,
    "../components/notes/.coffee.NotesBuffer.js": 68,
    "../components/notes/Notes.js": 71,
    "../components/notifier/Notifier.js": 73,
    "../components/opener/WindowOpener.js": 74,
    "../components/premium_promotion/.coffee.PremiumPromotion.js": 78,
    "../components/project_editor/ProjectEditor.js": 83,
    "../components/project_list/.coffee.ProjectArchive.js": 84,
    "../components/project_list/.coffee.ProjectList.js": 86,
    "../components/quick_find/.coffee.QuickFind.js": 94,
    "../components/refresh_interface/.coffee.RefreshInterface.js": 95,
    "../components/start_page/StartPage.js": 109,
    "../components/themes/.coffee.Themes.js": 113,
    "../components/timezone_checker/.coffee.TimezoneChecker.js": 114,
    "../components/top_icons/.coffee.TopIcons.js": 115,
    "../components/undo/.es6.UndoToasts.js": 116,
    "../components/viral_spread/.coffee.ViralSpread.js": 117,
    "../dispatcher/Dispatcher.js": 118,
    "../external_services/.coffee.MacAppBridge.js": 119,
    "../external_services/OutlookIntegration.js": 120,
    "../menus/.coffee.MenuItemEditMore.js": 124,
    "../menus/MenuAgendaEdit.js": 133,
    "../menus/MenuUser.js": 139,
    "../mini/.coffee.DimensionCalculator.js": 141,
    "../mini/.coffee.MessageHandler.js": 142,
    "../mini/PluginVersion.js": 145,
    "../models/.coffee.InitModels.js": 152,
    "../models/.coffee.ItemsModel.js": 153,
    "../models/.coffee.LoadEngine.js": 155,
    "../models/.coffee.ProjectsModel.js": 159,
    "../models/.coffee.Storage.js": 165,
    "../react_components/.es6.TodoistApp.js": 180,
    "./.coffee.ResolveDeps.js": 121,
    "./DummyStrings.js": 122,
    "babel-polyfill": "babel-polyfill",
    react: "react",
    "react-dom": "react-dom"
  }],
  2: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    n.UNDO = Symbol("UNDO"),
    n.SYNC_UPDATE = Symbol("SYNC_UPDATE"),
    n.UPDATE_ITEMS_DATE = Symbol("UPDATE_ITEMS_DATE"),
    n.LOAD_CACHED_DATA = Symbol("LOAD_CACHED_DATA"),
    n.FEATURE_TIP_MARK_AS_SEEN = Symbol("FEATURE_TIP_MARK_AS_SEEN")
  }
  , {}],
  3: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      a.default.dispatch({
        actionType: d.FEATURE_TIP_MARK_AS_SEEN,
        featureName: e
      })
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.markAsSeen = i;
    var s = e("../dispatcher/Dispatcher")
      , a = o(s)
      , c = e("../actions/.es6.ActionTypes.js")
      , d = r(c)
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../dispatcher/Dispatcher": 118
  }],
  4: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e, t, n) {
      a.default.dispatch({
        actionType: d.UPDATE_ITEMS_DATE,
        items: e,
        dates: t,
        origin: n
      })
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.ORIGIN_UNDO = n.ORIGIN_SMART_SCHEDULE = void 0,
    n.updateDate = i;
    var s = e("../dispatcher/Dispatcher")
      , a = o(s)
      , c = e("./.es6.ActionTypes.js")
      , d = r(c);
    n.ORIGIN_SMART_SCHEDULE = Symbol("ORIGIN_SMART_SCHEDULE"),
    n.ORIGIN_UNDO = Symbol("ORIGIN_UNDO")
  }
  , {
    "../dispatcher/Dispatcher": 118,
    "./.es6.ActionTypes.js": 2
  }],
  5: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      a.default.dispatch({
        actionType: d.SYNC_UPDATE,
        syncDataDict: e
      })
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.receiveSyncUpdate = i;
    var s = e("../dispatcher/Dispatcher")
      , a = o(s)
      , c = e("./.es6.ActionTypes.js")
      , d = r(c)
  }
  , {
    "../dispatcher/Dispatcher": 118,
    "./.es6.ActionTypes.js": 2
  }],
  6: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      a.default.dispatch({
        actionType: d.UNDO,
        checkpoint: e
      })
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.undo = i;
    var s = e("../dispatcher/Dispatcher")
      , a = o(s)
      , c = e("../actions/.es6.ActionTypes.js")
      , d = r(c)
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../dispatcher/Dispatcher": 118
  }],
  7: [function(e, t, n) {
    var r, o, i;
    o = window.AmiTooltip,
    r = window.AmiComplete,
    i = window.Signals,
    window.CURRENT_ACTION_PERFOMED = null ,
    n.get = function() {
      return window.CURRENT_ACTION_PERFOMED
    }
    ,
    n.mark = function(e) {
      return window.CURRENT_ACTION_PERFOMED = e,
      i.sendSignal("action_performed"),
      o.hide(),
      r.hide(),
      window.CURRENT_ACTION_PERFOMED = null
    }
  }
  , {}],
  8: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.GB_hide,
    r = window.AmiCompleteSelect,
    o = window.AmiTooltip,
    a = window.imageSprite,
    i = function() {
      function e() {
        this.getDescription = c(this.getDescription, this),
        this.showTooltip = c(this.showTooltip, this),
        this.render = c(this.render, this)
      }
      return e.prototype.render = function(e, t, n, r) {
        var i, s, c, d, l;
        return s = n[e] ? a(n[e] + " event_icon", 15, 15) : "",
        i = SPAN({
          c: "truncated e_name"
        }, this.getDescription(e, t)),
        d = a("cmp_arrow_down", 7, 4),
        c = A({
          href: "#",
          c: "event_select_item"
        }, s, i, d),
        r.fixed_pos && $addClass(c, "fixed_pos"),
        l = r.tooltip_txt || _("Filter by activity"),
        e && (l = r.tooltip_txt_selected || _("Filtering by"),
        l += " " + this.getDescription(e, t).toLowerCase()),
        o.showSimpleText(c, l),
        c.showTooltip = $p(this.showTooltip, c, d, e, t, n, r),
        $AEV(c, "click", c.showTooltip),
        c
      }
      ,
      e.prototype.showTooltip = function(e, t, n, o, i, c) {
        var d, l, u, h;
        return u = c.selectedItem,
        l = {
          selectedItem: u,
          collection: function() {
            return o
          },
          filterItem: function(e) {
            var t, n;
            if (e)
              return n = SPAN({
                c: "truncated e_name"
              }, e.name),
              t = null != i[e.value] ? a(i[e.value] + " event_icon", 15, 15) : SPAN({
                c: "blank_icon"
              }),
              DIV({
                c: "amicomplete_entry"
              }, t || "", n)
          },
          onSelect: function(t) {
            return function(n) {
              if (s(),
              e.showTooltip = null ,
              $swap(e, e = t.render(n.value, o, i, c)),
              $isFunction(c.onSelect))
                return c.onSelect(n.value)
            }
          }(this),
          wildcard_match: !0,
          placeholder: "Search"
        },
        d = new r(l),
        h = d.showTooltip({
          title: _("Filter by activity"),
          icon: t,
          top_offset: c.top_offset || 25,
          left_offset: c.left_offset || 205,
          fn_on_hide: function() {
            return d = null
          }
        }),
        !1
      }
      ,
      e.prototype.getDescription = function(e, t) {
        var n, r, o;
        for (r = 0,
        o = t.length; r < o; r++)
          if (n = t[r],
          n.value === e)
            return n.name
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {}],
  9: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C, T, k, D = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    C = window.Signals,
    c = window.DateUtils,
    i = window.Alerts,
    d = window.DateistDateHelpers,
    f = window.Indicator,
    k = window.imageSprite,
    r = window.$static_path,
    T = window.getOfflineMessage,
    S = e("../agenda/.coffee.RenderQueryDays.js"),
    u = e("../formatter/Formatter.js"),
    p = e("../items_utils/ItemDueDates.js"),
    m = e("../../models/.coffee.ItemsModel.js"),
    g = e("../items_utils/.coffee.ItemsRender.js"),
    I = e("../../models/.coffee.ProjectsModel.js"),
    j = e("../project_editor/.coffee.ProjectEditorUtils.js"),
    y = e("../../models/.coffee.NotesModel.js"),
    w = e("../notes/.coffee.NotesUtils.js"),
    a = e("../../models/.coffee.Collaborators.js"),
    s = e("../avatars/.coffee.Avatars.js"),
    b = e("../project_selecter/.coffee.ProjectSelecter.js"),
    v = e("../people_assigner/.coffee.PeopleAssigner.js"),
    o = e("./.coffee.ActivityEvents.js"),
    l = e("../format_html/.coffee.FormatHtml.js"),
    h = function() {
      function e() {
        this._processReqData = D(this._processReqData, this),
        this._renderBlankState = D(this._renderBlankState, this),
        this._prepareContent = D(this._prepareContent, this),
        this._renderEvent = D(this._renderEvent, this),
        this._renderLoadMore = D(this._renderLoadMore, this),
        this._renderEvents = D(this._renderEvents, this),
        this.renderEvents = D(this.renderEvents, this),
        this.changeLocation = D(this.changeLocation, this),
        this.showActivity = D(this.showActivity, this),
        this._resetState = D(this._resetState, this),
        this._resetState(),
        C.connect("activity_log.show", this.showActivity)
      }
      return e.prototype._resetState = function() {
        return this.project_by_id = {},
        this.item_by_id = {},
        this.current_offset = 0,
        this.event_icons = {
          "item:added": "cmp_activity_added_task",
          "item:updated": "cmp_activity_updated_task",
          "item:completed": "cmp_activity_completed_task",
          "item:uncompleted": "cmp_activity_uncompleted_task",
          "item:deleted": "cmp_activity_deleted_task",
          "note:added": "cmp_activity_added_comment"
        }
      }
      ,
      e.prototype.showActivity = function(e, t, n, r) {
        var i, s, a, c, d, l, h, f, p, g, y, w, j, A, S, T, k, D, E, x;
        return C.sendSignal("projects.reset"),
        this.current_offset = 0,
        null == t ? (f = _("Activity: "),
        A = {
          support_all: !0,
          placeholder_txt: "Search",
          selectedItem: function() {
            return I.get(e)
          },
          onSelect: function(e) {
            return 0 !== e.id ? C.sendSignal("activity_log.show", e.id, null , n) : C.sendSignal("activity_log.show", null , null , n)
          }
        },
        y = b.render(e || 0, A)) : (f = _("Activity: "),
        g = m.getById(parseInt(t)),
        k = u.format(g.content),
        k = k.replace(/^\*\s+/g, ""),
        y = $setHTML(SPAN({
          c: "truncated item_header"
        }), k)),
        d = "",
        null == t && (l = DIV({
          c: "filters"
        }),
        "undefined" == typeof r && (r = window.User.id),
        null != e ? (w = I.get(e),
        s = I.getChildren(w, E = !0),
        j = function() {
          var e, t, n;
          for (n = [],
          e = 0,
          t = s.length; e < t; e++)
            x = s[e],
            n.push(x.id);
          return n
        }()) : j = function() {
          var e, t, n, r;
          for (n = I.getAll(),
          r = [],
          e = 0,
          t = n.length; e < t; e++)
            x = n[e],
            r.push(x.id);
          return r
        }(),
        h = function(t) {
          return C.sendSignal("activity_log.show", e, null , n, t),
          null
        }
        ,
        D = {
          unassigned_txt: _("Everyone"),
          unassigned_icon_disable: !0,
          tooltip_txt: _("Filter by collaborator"),
          title_txt: _("Filter by collaborator"),
          tooltip_txt_selected: _("Filtering by collaborator"),
          show_name: !0,
          responsible_uid: r,
          fn_on_select: h,
          placeholder_txt: "Search",
          project_id: j,
          never_hide: !0
        },
        i = new v(D),
        T = SPAN({
          c: "select_user"
        }, i.render(D)),
        $add(l, T),
        c = [{
          value: null ,
          name: _("All actions")
        }, {
          value: "item:added",
          name: _("Added tasks")
        }, {
          value: "item:updated",
          name: _("Updated tasks")
        }, {
          value: "item:completed",
          name: _("Completed tasks")
        }, {
          value: "item:uncompleted",
          name: _("Uncompleted tasks")
        }, {
          value: "item:deleted",
          name: _("Deleted tasks")
        }, {
          value: "note:added",
          name: _("Added comments")
        }],
        null == n && (n = null ),
        a = {
          selectedItem: function() {
            return n
          },
          onSelect: function(t) {
            return C.sendSignal("activity_log.show", e, null , t, r)
          }
        },
        S = SPAN({
          c: "select_event"
        }, o.render(n, c, this.event_icons, a)),
        $add(l, S)),
        p = DIV({
          id: "activity_app"
        }, l, H2({
          c: "project_header section_header"
        }, f, y), DIV({
          id: "activity_show"
        })),
        $replace($("editor"), p),
        this.renderEvents(e, t, n, r),
        !1
      }
      ,
      e.prototype.changeLocation = function(e, t, n) {
        var r;
        return r = "activity",
        null == e && null == t && null == n || (null != e ? r += "/project/" + e : null != t ? r += "/task/" + t : null != n && (r += "/null/null"),
        null != n && (r += "/" + n)),
        C.sendSignal("change_location", r)
      }
      ,
      e.prototype.renderEvents = function(e, t, n, r) {
        var o, i, s, a;
        return this._resetState(),
        o = $("activity_show"),
        window.User.is_premium ? ($replace($("activity_show"), IMG({
          src: "https://d3ptyyxy2at9ui.cloudfront.net/fb947b5107ee9a4cbb1a7299459d46ae.gif"
        })),
        a = this._createReq(e, t, n, r),
        i = a[0],
        s = a[1],
        i.addCallback(function(i) {
          return function(a) {
            return i._processReqData(a),
            $replace(o, null ),
            i.changeLocation(e, t, n, r),
            0 !== $values(s).length && 0 === a.length ? $replace(o, DIV({
              c: "activity_error"
            }, k("cmp_activity_empty", 15, 15), SPAN({
              c: "error_message"
            }, _("No events match your filter.")))) : 0 === a.length ? $replace(o, i._renderBlankState(a.length)) : i._renderEvents(o, a, e, t, n, r)
          }
        }(this)),
        i.addErrback(function(e, t) {
          return $replace($("activity_app"), T(t))
        }),
        i.sendReq(s)) : void $replace(o, this._renderBlankState(0))
      }
      ,
      e.prototype._renderEvents = function(e, t, n, r, o, i) {
        var s, a, c, l, u, h, f, _, p;
        for (_ = 0,
        p = t.length; _ < p; _++)
          u = t[_],
          "undefined" != typeof u.extra_data && ("undefined" == typeof u.extra_data.name && "undefined" == typeof u.extra_data.content || (s = u.event_date,
          s = d.date_max(s),
          l = "" + s.getFullYear() + "-" + s.getMonth() + "-" + s.getDate(),
          a = "day_header_" + l,
          c = "day_ul_" + l,
          h = $(a),
          h || (h = S._renderDayHeader(s, !1),
          h.id = a,
          $add(e, h)),
          f = $(c),
          f || (f = UL({
            c: "items",
            id: c
          }),
          $add(e, f)),
          this._renderEvent(e, f, u)));
        if (t.length > 0)
          return this._renderLoadMore(e, n, r, o, i)
      }
      ,
      e.prototype._renderLoadMore = function(e, t, n, r, o) {
        var i, s;
        return s = _("Load more history") + "...",
        $add(e, i = A({
          c: "load_more",
          href: "#"
        }, s)),
        $AEV(i, "click", function(a) {
          return function() {
            var c, d, l;
            return !i.loading && (i.loading = !0,
            $replace(i, f.imgSmall()),
            l = a._createReq(t, n, r, o),
            c = l[0],
            d = l[1],
            c.addCallback(function(s) {
              return a._processReqData(s),
              0 === s.length ? ($addClass(i, "load_more_none"),
              $replace(i, _("No more events to show.")),
              $fx.fadeOut(i, {
                duration: 3e3,
                onComplete: function() {
                  return $remove(i)
                }
              })) : $remove(i),
              a._renderEvents(e, s, t, n, r, o)
            }),
            c.addErrback(function(e, t) {
              return alert(T(t)),
              i.loading = !1,
              $replace(i, s)
            }),
            c.sendReq(d),
            !1)
          }
        }(this))
      }
      ,
      e.prototype._renderEvent = function(e, t, n) {
        var r, o, i, d, l, u, h, f, _, p, m;
        if (o = this._prepareContent(n),
        null != o)
          return m = window.User,
          null !== n.initiator_id && n.initiator_id !== m.id && (d = a.getUserById(n.initiator_id),
          null != d && (m = d)),
          null !== n.initiator_id && n.initiator_id !== m.id && null == d ? (r = DIV({
            c: "blank_avatar"
          }),
          i = SPAN()) : (r = s.renderAvatar(m, "medium"),
          i = k(this.event_icons[n.object_type + ":" + n.event_type], 15, 15)),
          p = SPAN({
            c: "activity_time"
          }, c.getHourAndMin(n.event_date)),
          _ = null ,
          "project" === n.object_type ? h = n.object_id : "item" !== n.object_type && "note" !== n.object_type || (h = n.parent_project_id),
          null != h && (u = this.project_by_id[h] || I.get(h),
          u && (this.project_by_id[h] || (this.project_by_id[h] = u),
          _ = g.createProjectItem({
            project_id: u.id
          }, u))),
          l = LI({
            c: "event"
          }, DIV({
            c: "avatar"
          }, r), DIV({
            c: "avatar_event_icon"
          }, i), DIV({
            c: "text"
          }, o, p, DIV({
            c: "project"
          }, _))),
          f = function(e, t) {
            return $setVisibility(e, t)
          }
          ,
          $add(t, l)
      }
      ,
      e.prototype._prepareContent = function(e) {
        var t, n, r, o, i, s, c, d, h, f, g, v, j, b, $;
        return d = {
          added_task: {
            you: _("%you% added a task: %task%"),
            user: _("%user% added a task: %task%"),
            someone: _("%someone% added a task: %task%")
          },
          deleted_task: {
            you: _("%you% deleted a task: %task%"),
            user: _("%user% deleted a task: %task%"),
            someone: _("%someone% deleted a task: %task%")
          },
          completed_task: {
            you: _("%you% completed a task: %task%"),
            user: _("%user% completed a task: %task%"),
            someone: _("%someone% completed a task: %task%")
          },
          uncompleted_task: {
            you: _("%you% uncompleted a task: %task%"),
            user: _("%user% uncompleted a task: %task%"),
            someone: _("%someone% uncompleted a task: %task%")
          },
          renamed_task: {
            you: _("%you% changed the name of %old% to %task%"),
            user: _("%user% changed the name of %old% to %task"),
            someone: _("%someone% changed the name of %old% to %task")
          },
          set_task_due_date: {
            you: _("%you% set the due date of %task% to %due_date%"),
            user: _("%user% set the due date of %task% to %due_date%"),
            someone: _("%someone% set the due date of %task% to %due_date%")
          },
          removed_task_due_date: {
            you: _("%you% removed the due date of %task%"),
            user: _("%user% removed the due date of %task%"),
            someone: _("%someone% removed the due date of %task%")
          },
          changed_task_due_date: {
            you: _("%you% changed the due date of %task% to %due_date%"),
            user: _("%user% changed the due date of %task% to %due_date%"),
            someone: _("%someone% changed the due date of %task% to %due_date%")
          },
          assigned_task: {
            you: {
              to_you: _("%you% assigned %task% to %to_yourself%"),
              to_user: _("%you% assigned %task% to %to_user%"),
              to_someone: _("%you% assigned %task% to %to_someone%")
            },
            user: {
              to_you: _("%user% assigned %task% to %to_you%"),
              to_user: _("%user% assigned %task% to %to_user%"),
              to_someone: _("%user% assigned %task% to %to_someone%")
            },
            someone: {
              to_you: _("%someone% assigned %task% to %to_you%"),
              to_user: _("%someone% assigned %task% to %to_user%"),
              to_someone: _("%someone% assigned %task% to %to_someone_else%")
            }
          },
          reassigned_task: {
            you: {
              to_you: _("%you% re-assigned %task% to %to_yourself%"),
              to_user: _("%you% re-assigned %task% to %to_user%"),
              to_someone: _("%you% re-assigned %task% to %to_someone%")
            },
            user: {
              to_you: _("%user% re-assigned %task% to %to_you%"),
              to_user: _("%user% re-assigned %task% to %to_user%"),
              to_someone: _("%user% re-assigned %task% to %to_someone%")
            },
            someone: {
              to_you: _("%someone% re-assigned %task% to %to_you%"),
              to_user: _("%someone% re-assigned %task% to %to_user%"),
              to_someone: _("%someone% re-assigned %task% to %to_someone_else%")
            }
          },
          unassigned_task: {
            you: _("%you% unnassigned %task%"),
            user: _("%user% unassigned %task%"),
            someone: _("%someone% unassigned %task%")
          },
          added_comment_to: {
            you: _("%you% added a comment to %task%: %comment%"),
            user: _("%user% added a comment to %task%: %comment%"),
            someone: _("%someone% added a comment to %task%: %comment%")
          },
          added_comment: {
            you: _("%you% added a comment: %comment%"),
            user: _("%user% added a comment: %comment%"),
            someone: _("%someone% added a comment: %comment%")
          },
          added_project_comment_to: {
            you: _("%you% added a project comment to %project%: %comment%"),
            user: _("%user% added a project comment to %project%: %comment%"),
            someone: _("%someone% added a project comment to %project%: %comment%")
          },
          added_project_comment: {
            you: _("%you% added a project comment: %comment%"),
            user: _("%user% added a project comment: %comment%"),
            someone: _("%someone% added a project comment: %comment%")
          }
        },
        c = null ,
        $ = {},
        b = "you",
        $.you = SPAN({
          c: "user"
        }, _("You")),
        null !== e.initiator_id && e.initiator_id !== window.User.id && (j = a.getUserById(e.initiator_id),
        null != j ? (b = "user",
        $.user = SPAN({
          c: "user"
        }, u.format(j.full_name.split(" ")[0]))) : (b = "someone",
        $.someone = SPAN({
          c: "user"
        }, _("Someone")))),
        "item" === e.object_type ? (null != e.extra_data.content && (g = u.format(e.extra_data.content),
        g = g.replace(/^\*\s+/g, ""),
        $.task = $setHTML(SPAN({
          c: "object"
        }), g)),
        "added" === e.event_type ? c = d.added_task[b] : "deleted" === e.event_type ? ($setClass($.task, "through"),
        c = d.deleted_task[b]) : "completed" === e.event_type ? ($setClass($.task, "through"),
        c = d.completed_task[b]) : "uncompleted" === e.event_type ? c = d.uncompleted_task[b] : "updated" === e.event_type && ("undefined" != typeof e.extra_data.last_content ? (g = u.format(e.extra_data.last_content),
        g = g.replace(/^\*\s+/g, ""),
        $.old = $setHTML(SPAN({
          c: "through"
        }), g),
        c = d.renamed_task[b]) : "undefined" != typeof e.extra_data.due_date ? null === e.extra_data.due_date ? c = d.removed_task_due_date[b] : (e.extra_data.date_string = e.extra_data.due_date,
        m.convertToDateObject(e.extra_data),
        $.due_date = p.create(e.extra_data, !0),
        $setClass($.due_date, "bold"),
        c = null === e.extra_data.last_due_date ? d.set_task_due_date[b] : d.changed_task_due_date[b]) : "undefined" != typeof e.extra_data.responsible_uid && (null === e.extra_data.responsible_uid ? c = d.unassigned_task[b] : (t = a.getUserById(e.extra_data.responsible_uid),
        null != t ? window.User.id === t.id ? (v = "to_you",
        "you" === b ? $.to_yourself = SPAN({
          c: "user"
        }, _("yourself")) : $.to_you = SPAN({
          c: "user"
        }, _("you"))) : (v = "to_user",
        $.to_user = SPAN({
          c: "bold"
        }, u.format(t.full_name.split(" ")[0]))) : (v = "to_someone",
        "someone" === b ? $.to_someone_else = SPAN({
          c: "user"
        }, _("someone else")) : $.to_someone = SPAN({
          c: "user"
        }, _("someone"))),
        c = null === e.extra_data.last_responsible_uid ? d.assigned_task[b][v] : d.reassigned_task[b][v])))) : "note" === e.object_type && (null != e.extra_data.content && (g = u.format('"' + $trim(e.extra_data.content, 160) + '"'),
        g = g.replace(/^\*\s+/g, ""),
        $.comment = $setHTML(DIV({
          c: "object"
        }), g)),
        "added" === e.event_type && (null != e.parent_item_id ? (i = e.parent_item_id,
        o = this.item_by_id[i] || m.getById(i),
        o && (this.item_by_id[i] || (this.item_by_id[i] = o),
        g = u.format(o.content),
        g = g.replace(/^\*\s+/g, ""),
        $.task = $setHTML(SPAN({
          c: "object"
        }), g)),
        null != $.task ? ($AEV($.comment, ["click", "touchend"], $p(w.Deps.Notes.showItemNotes, e.parent_item_id, null , null )),
        $.comment = A({
          href: "#"
        }, $.comment),
        c = d.added_comment_to[b]) : c = d.added_comment[b]) : null != e.parent_project_id && (f = e.parent_project_id,
        h = this.project_by_id[f] || I.get(f),
        h && (this.project_by_id[f] || (this.project_by_id[f] = h),
        g = u.format(h.name),
        g = g.replace(/^\*\s+/g, ""),
        $.project = $setHTML(SPAN({
          c: "object"
        }), g)),
        null != $.project ? ($AEV($.comment, ["click", "touchend"], $p(w.Deps.Notes.showProjectNotes, e.parent_project_id, null , null )),
        $.comment = A({
          href: "#"
        }, $.comment),
        c = d.added_project_comment_to[b]) : c = d.added_project_comment[b]))),
        r = l.format(c, $),
        null == r ? null : (n = DIV(),
        $add(n, r),
        "item" === e.object_type && (s = w.renderIcon({
          id: e.object_id
        }, y.TYPE_ITEM_NOTE, e.extra_data.note_count),
        $add(n, s)),
        n)
      }
      ,
      e.prototype._renderBlankState = function() {
        var e, t;
        return t = window.User.is_premium ? _("You don't have any events") : _("The activity log is a premium feature"),
        e = DIV({
          c: "blank_state_text blank_state_activity"
        }, B(t), DIV(_("The activity log makes it possible to see what you have done in the past."))),
        window.User.is_premium || $add(e, DIV({
          c: "text"
        }, $setHTML(SPAN(), _("<a>Upgrade to Todoist Premium</a> for instant access to this and a lot of other features.").replace("<a>", '<a href="/premium" target="_blank">')))),
        e
      }
      ,
      e.prototype._createReq = function(e, t, n, r) {
        var o, i;
        return o = $requestJSON("/API/v7/activity/get"),
        o.offline_message = !0,
        i = {
          token: window.User.token,
          limit: 30,
          annotate_notes: !0
        },
        null != r && (i.initiator_id = r,
        r === window.User.id && (i.initiator_id_null = !0)),
        null != n ? i.object_event_types = '["' + n + '"]' : i.object_event_types = '["item:", "note:added"]',
        null != e ? (i.parent_project_id = e,
        i.include_child_objects = !0) : null != t && (i.parent_item_id = t,
        i.include_parent_object = !0),
        0 !== this.current_offset && (i.offset = this.current_offset),
        [o, i]
      }
      ,
      e.prototype._processReqData = function(e) {
        var t, n, r;
        for (n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          $isString(t.event_date) && (t.event_date = new Date(t.event_date));
        return this.current_offset += e.length
      }
      ,
      e
    }(),
    t.exports = new h
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.NotesModel.js": 157,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../agenda/.coffee.RenderQueryDays.js": 15,
    "../avatars/.coffee.Avatars.js": 21,
    "../format_html/.coffee.FormatHtml.js": 37,
    "../formatter/Formatter.js": 38,
    "../items_utils/.coffee.ItemsRender.js": 47,
    "../items_utils/ItemDueDates.js": 48,
    "../notes/.coffee.NotesUtils.js": 69,
    "../people_assigner/.coffee.PeopleAssigner.js": 75,
    "../project_editor/.coffee.ProjectEditorUtils.js": 81,
    "../project_selecter/.coffee.ProjectSelecter.js": 88,
    "./.coffee.ActivityEvents.js": 8
  }],
  10: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.DateistDateHelpers,
    r = window.DateUtils,
    i = function() {
      function e() {
        this.getNonOverdue = s(this.getNonOverdue, this),
        this.isAdded = s(this.isAdded, this),
        this.add = s(this.add, this),
        this.reset = s(this.reset, this)
      }
      return e.prototype.current_dates = {},
      e.prototype.current_dates_list = [],
      e.prototype.reset = function() {
        return this.current_dates = {},
        this.current_dates_list = []
      }
      ,
      e.prototype.add = function(e) {
        var t;
        return e = o.date_max(e),
        t = r.formatView(e),
        this.current_dates[t] = e,
        this.current_dates_list.push(e)
      }
      ,
      e.prototype.isAdded = function(e) {
        var t;
        return e = o.date_max(e),
        t = r.formatView(e),
        this.current_dates[t]
      }
      ,
      e.prototype.getNonOverdue = function() {
        var e, t, n, r, i, s;
        for (n = o.date_min(new Date),
        t = [],
        s = this.current_dates_list,
        r = 0,
        i = s.length; r < i; r++)
          e = s[r],
          o.is_overdue(n, e) || t.push(e);
        return t
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {}],
  11: [function(e, t, n) {
    var r, o, i, s, a, c, d;
    r = e("../../models/.coffee.ProjectsModel.js"),
    a = e("./.coffee.RenderQueryLabelPriority.js"),
    s = e("./.coffee.RenderQueryDays.js"),
    d = e("./.coffee.RenderQueryViewAll.js"),
    c = e("./.coffee.RenderQuerySearch.js"),
    o = e("./RenderDateItems.js"),
    i = e("./.coffee.RenderOverdue.js"),
    n.renderSection = function(e, t, n, l) {
      var u, h;
      if (u = !0,
      n.is_filtered && (u = !1),
      "flat_view" === n.view ? a.render(e, t, n.items, n.name) : "day_view_span" === n.view ? o.displayItems(e, t, n.items, null , !1, u) : "day_view_fixed" === n.view ? s.render(e, t, n.day_date, n.items, u) : "view_all" === n.view ? (d.render(e, t, r.getAll()),
      h = !0) : "search" === n.view && c.render(e, t, n),
      "overdue" === n.view)
        return i.render(e, t, n.items, l)
    }
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "./.coffee.RenderOverdue.js": 14,
    "./.coffee.RenderQueryDays.js": 15,
    "./.coffee.RenderQueryLabelPriority.js": 16,
    "./.coffee.RenderQuerySearch.js": 17,
    "./.coffee.RenderQueryViewAll.js": 18,
    "./RenderDateItems.js": 20
  }],
  12: [function(e, t, n) {
    var r, o, i, s;
    o = window.ElementStore,
    i = e("../../models/.coffee.ItemsModel.js"),
    s = e("../../models/.coffee.ProjectsModel.js"),
    n.Deps = r = {
      Agenda: null
    },
    n.query = function(e, t, n) {
      return null == t && (t = !0),
      null == n && (n = !0),
      r.Agenda.get().query(e, t, n)
    }
    ,
    n.blur = function() {
      return r.Agenda.get().blur()
    }
    ,
    n.reset = function() {
      return r.Agenda.get().reset()
    }
    ,
    n.refresh = function() {
      return r.Agenda.get().refresh()
    }
    ,
    n.getQuery = function() {
      return r.Agenda.get().current_query
    }
    ,
    n.renderItem = function(e, t) {
      return r.Agenda.get().renderItem(e, t)
    }
    ,
    n.showAddItem = function(e) {
      return r.Agenda.get().showAddItem(e)
    }
    ,
    n.fetchChildren = function(e) {
      var t, n, s, a, c, d, l, u, h;
      for (e.fetched = !0,
      e._collapsed = !1,
      c = {},
      e.render_opts && $update(c, e.render_opts),
      c.no_indent = !1,
      c.no_drag_and_drop = !0,
      s = e,
      n = [],
      h = i.getChildren(e.json),
      l = 0,
      u = h.length; l < u; l++)
        t = h[l],
        a = {},
        $update(a, t),
        a.agenda_child_view = !0,
        a.dont_show_arrow = !0,
        a.collapsed = !1,
        e.json.indent > 1 && (a.indent = a.indent - e.json.indent + 1),
        t.in_history && t.indent > 1 && (c.no_checkbox = !0),
        d = r.Agenda.get().renderItem(a, c),
        $addClass(d, "agenda_child_expanded"),
        $removeClass(d, "indent_1"),
        d.fetched = !0,
        $addAfter(d, s),
        s = d,
        n.push(d);
      return o.set(e, "children", n),
      !1
    }
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159
  }],
  13: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b;
    a = window.Indicator,
    c = window.OBJECT,
    y = window.imageSprite,
    o = window.$static_path,
    i = window.$supportsSVG,
    r = window.$isHighDensity,
    p = e("../themes/.coffee.Themes.js"),
    s = e("../completed_history/.coffee.CompletedQuickVisualize.js"),
    u = {},
    h = _("Today you completed %s tasks and reached #TodoistZero!"),
    j = function() {
      return u.karma && (u.karma.reuseable = !1),
      u.tweet && (u.tweet.reuseable = !1),
      $remove($("completed_checkmarks")),
      u = {}
    }
    ,
    d = {
      noir_morning: "https://d3ptyyxy2at9ui.cloudfront.net/591043b85c121a366f0a09139b58a296.png",
      noir_night: "https://d3ptyyxy2at9ui.cloudfront.net/886783b92c47986ff270c4ab05160477.png",
      neutral_morning: "https://d3ptyyxy2at9ui.cloudfront.net/ac4da96df11263faf25e6095ce699f42.png",
      neutral_night: "https://d3ptyyxy2at9ui.cloudfront.net/85b143d9a241f3f26f62d3d8f8f6a95f.png",
      tangerine_morning: "https://d3ptyyxy2at9ui.cloudfront.net/8d0d6b495a0f3d4fcbf81d774ca6d6b8.png",
      tangerine_night: "https://d3ptyyxy2at9ui.cloudfront.net/b8283c76a74ac58cc9d19dbc0874c3bc.png",
      sunflower_morning: "https://d3ptyyxy2at9ui.cloudfront.net/c46ca84e748d578fedc63b3854812b94.png",
      sunflower_night: "https://d3ptyyxy2at9ui.cloudfront.net/a3eaa47595eac316760e0555f2303da6.png",
      clover_morning: "https://d3ptyyxy2at9ui.cloudfront.net/173de3398c1ffbed877177bc405b100a.png",
      clover_night: "https://d3ptyyxy2at9ui.cloudfront.net/a3316c5a65ed661cddd3651bcc92ad3a.png",
      blueberry_morning: "https://d3ptyyxy2at9ui.cloudfront.net/8d79cedcee68fa7cb51d9073e092f61d.png",
      blueberry_night: "https://d3ptyyxy2at9ui.cloudfront.net/6b4a841399e78eac3eb14b17253c48a4.png",
      sky_morning: "https://d3ptyyxy2at9ui.cloudfront.net/45f74436bd67244a4476c63c557a2de3.png",
      sky_night: "https://d3ptyyxy2at9ui.cloudfront.net/541cbc91efa5326b39399b1d909b4908.png",
      amethyst_morning: "https://d3ptyyxy2at9ui.cloudfront.net/0eda391a75a0f6b9ce69a2a1cf76a376.png",
      amethyst_night: "https://d3ptyyxy2at9ui.cloudfront.net/44cabbbf6235638bb5f3d9c531ed1abb.png",
      graphite_morning: "https://d3ptyyxy2at9ui.cloudfront.net/2d4a1b447f60ea50330bfdf02da3516b.png",
      graphite_night: "https://d3ptyyxy2at9ui.cloudfront.net/e4e5f428398a9f4cb2530b8b78255f23.png",
      todoist_morning: "https://d3ptyyxy2at9ui.cloudfront.net/26fd30f763e3bb7896449bd13b8fb361.png",
      todoist_night: "https://d3ptyyxy2at9ui.cloudfront.net/0d61bca511a19be2d9fa93e5f374442d.png"
    },
    l = {
      noir_morning: "https://d3ptyyxy2at9ui.cloudfront.net/6bf602af3977690d868d4723d68bb358.png",
      noir_night: "https://d3ptyyxy2at9ui.cloudfront.net/abb34ba1b7d4473528f138da83b6a31b.png",
      neutral_morning: "https://d3ptyyxy2at9ui.cloudfront.net/f70a1d3561136980b37de418ba13a8aa.png",
      neutral_night: "https://d3ptyyxy2at9ui.cloudfront.net/ab057d764099f4d1a3ed782069ec720b.png",
      tangerine_morning: "https://d3ptyyxy2at9ui.cloudfront.net/a279da898a147f08fe7e67f5c56b9316.png",
      tangerine_night: "https://d3ptyyxy2at9ui.cloudfront.net/dcc6718ee0e1d08dc50a47d997327e2a.png",
      sunflower_morning: "https://d3ptyyxy2at9ui.cloudfront.net/5f62a2df019901f7a3bbc9f5581b8fc6.png",
      sunflower_night: "https://d3ptyyxy2at9ui.cloudfront.net/19c3a0a61370819931d6eed2b63f162a.png",
      clover_morning: "https://d3ptyyxy2at9ui.cloudfront.net/a981da325d12f3b6119e829ccc273ed2.png",
      clover_night: "https://d3ptyyxy2at9ui.cloudfront.net/8d7fc4218256b73cf958f5bf12a8c742.png",
      blueberry_morning: "https://d3ptyyxy2at9ui.cloudfront.net/35491450657fee4e1b2911282ed72a3b.png",
      blueberry_night: "https://d3ptyyxy2at9ui.cloudfront.net/31f94428053e12205f7fb1d83eefbfc0.png",
      sky_morning: "https://d3ptyyxy2at9ui.cloudfront.net/59d096ed2b887159e785ff69da19819e.png",
      sky_night: "https://d3ptyyxy2at9ui.cloudfront.net/43bd9107a58979124051c9e3bbe7440c.png",
      amethyst_morning: "https://d3ptyyxy2at9ui.cloudfront.net/d07e02b336fa6e5b6db474be01cb4190.png",
      amethyst_night: "https://d3ptyyxy2at9ui.cloudfront.net/ee5562846456e8acb21cb1a05b6de41f.png",
      graphite_morning: "https://d3ptyyxy2at9ui.cloudfront.net/f872b7337c72f15bfd0d3d249959dc43.png",
      graphite_night: "https://d3ptyyxy2at9ui.cloudfront.net/62dfa8267d25fe2c3af225c108669445.png",
      todoist_morning: "https://d3ptyyxy2at9ui.cloudfront.net/b7483bff96b34e90e17b6dc79c09cc2f.png",
      todoist_night: "https://d3ptyyxy2at9ui.cloudfront.net/cd397ac432e42c370e6b1830599b2329.png"
    },
    b = function(e) {
      return "initial" === window.TODAY_ANIMATION ? ($addClass(e, "todoist_zero_animated"),
      window.TODAY_ANIMATION = "running",
      setTimeout(function() {
        return window.TODAY_ANIMATION = "already_run"
      }, 2e3)) : $removeClass(e, "todoist_zero_animated")
    }
    ,
    w = function() {
      return "running" === window.TODAY_ANIMATION
    }
    ,
    g = function() {
      return window.TODAY_ANIMATION = "initial"
    }
    ,
    m = function() {
      return window.TODAY_ANIMATION = "disabled"
    }
    ,
    v = function() {
      var e, t, n, o, a, c, m, g, w, v, j, I, S, C;
      return t = window.User.completed_today,
      u.completed ? (i() && ($setHTML(u.karma_div, h.replace("%s", t)),
      a = $gc(u.completed, "div", "todoist_zero_holder"),
      b(a)),
      u.completed) : (n = new Date,
      c = n.getHours(),
      c >= 5 && c <= 15 ? (S = _("Enjoy your day."),
      v = "morning",
      j = 0) : c >= 16 && c <= 19 ? (S = _("Enjoy your afternoon."),
      v = "morning",
      j = 0) : (S = _("Enjoy your night."),
      v = "night",
      j = 1),
      c >= 15 && 5 === n.getDay() && (S = _("Enjoy your weekend!")),
      i() ? (m = DIV({
        c: "todoist_zero_holder"
      }),
      $setHTML(m, f[v]),
      $addClass(m, p.theme_name),
      b(m)) : (g = r() ? d["" + p.theme_name + "_" + v] : l["" + p.theme_name + "_" + v],
      m = IMG({
        src: g,
        width: 305,
        height: 305,
        c: "illustration"
      })),
      o = null ,
      I = null ,
      t >= 5 ? (o = DIV({
        c: "heading"
      }, S),
      I = null ) : (o = 0 === t ? DIV({
        c: "heading"
      }, _("No tasks for today.")) : DIV({
        c: "heading"
      }, _("No more tasks for today.")),
      I = DIV({
        c: "text"
      }, S)),
      e = DIV({
        id: "completed_checkmarks"
      }, m, o, I),
      t >= 5 && ($add(e, DIV(w = A({
        href: "#"
      }, h.replace("%s", t))), DIV(C = A({
        href: "#s"
      }, y("cmp_twitter", 26, 16), _("Tweet")))),
      u.karma_div = w,
      w.reuseable = !0,
      C.reuseable = !0,
      u.karma = w,
      u.tweet = C,
      $AEV(w, "click", function() {
        return s.show($("completed_items")),
        !1
      }),
      $AEV(C, "click", function() {
        var e, t;
        return e = "https://todoist.com/todoist/zero/" + p.theme_number + "/" + j,
        t = _("Done for today! Completed %s tasks! #TodoistZero").replace("%s", window.User.completed_today) + " " + e,
        t = $urlencode(t),
        t = "https://twitter.com/home?status=" + t,
        window.open(t),
        !1
      })),
      $setOpacity(e, 0),
      setTimeout(function() {
        return $setOpacity(e, 1)
      }, 50),
      u.completed = e,
      e)
    }
    ,
    f = {
      morning: '<svg class="todoist_zero_day" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="220" height="220" viewBox="0 0 220 220"> <title>TD Zero Day</title> <defs> <path id="a" d="M110 220c60.75 0 110-49.25 110-110S170.75 0 110 0 0 49.25 0 110s49.25 110 110 110z" /> <linearGradient x1="24.601%" y1="1.766%" x2="73.478%" y2="100%" id="c"> <stop stop-opacity=".06" offset="0%" /> <stop stop-color="#DB4C3F" stop-opacity="0" offset="100%" /> </linearGradient> </defs> <g fill="none" fill-rule="evenodd"> <mask id="b" fill="#fff"> <use xlink:href="#a" /> </mask> <use class="big-circle" fill="#E9584D" xlink:href="#a" /> <circle class="middle-circle" xmlns="http://www.w3.org/2000/svg" fill="#F76C62" mask="url(#b)" cx="110" cy="112" r="89"/> <path class="white-circle" xmlns="http://www.w3.org/2000/svg" d="M169.947 115c.035-.83.053-1.665.053-2.504C170 78.863 143.137 52 110 52s-60 26.863-60 60.496c0 .84.018 1.673.053 2.504h119.894z" fill="#FFFFFF" mask="url(#b)"/> <path class="bottom-circle" d="M219.888 115C217.274 173.43 169.076 220 110 220 50.924 220 2.726 173.43.112 115h219.776z" fill="#DB4C3F" mask="url(#b)" /> <path class="shadow" d="M54 122l-3 2 92.282 96H220v-44l-52-54H54z" opacity=".7" fill="url(#c)" mask="url(#b)" /> <rect class="first-line" fill="#F76C62" mask="url(#b)" x="51" y="122" width="118" height="3" rx=".764" /> <g class="second-line"> <rect class="left" fill="#F76C62" mask="url(#b)" x="61" y="131" width="57" height="3" rx=".764" /> <rect class="right" fill="#F76C62" mask="url(#b)" x="128" y="131" width="29" height="3" rx=".764" /> </g> <g class="third-line"> <rect class="left" fill="#F76C62" mask="url(#b)" x="71" y="141" width="20" height="3" rx=".764" /> <rect class="right" fill="#F76C62" mask="url(#b)" x="102" y="141" width="45" height="3" rx=".764" /> </g> <rect class="fourth-line" fill="#F76C62" mask="url(#b)" x="86" y="151" width="47" height="3" rx=".756" /> </g> </svg>',
      night: '<svg class="todoist_zero_night" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="220" height="220" viewBox="0 0 220 220"> <title>TD Zero Night</title> <defs> <circle id="a" cx="110" cy="110" r="110" /> <circle id="c" cx="110.688" cy="110.25" r="110" /> <path id="d" d="M5.295 137.82L34.798 91l37.068 46.066 16.643-18.88 13.616 19.635 21.938-28.696 25.124 31.626 31-27 38.437 45.216L198.2 200.5l-90.022 36.25-93.805-40.78L0 152.925l5.295-15.104z" /> <path d="M101.823.822c31.046 12.658 52.927 43.144 52.927 78.74 0 46.945-38.056 85-85 85-28.806 0-54.265-14.33-69.64-36.248 6.478 1.47 13.218 2.25 20.14 2.25 49.982 0 90.5-40.52 90.5-90.5 0-14.06-3.206-27.372-8.927-39.242z" id="f" /> <mask id="cut-off-bottom"> <rect width="100%" height="100%" fill="white"/> <circle class="circle-shadow" fill="#F2F2F2" r="90" cx="72" cy="80" /> <circle class="circle-cut" r="90" cx="62" cy="75" /> </mask> </defs> <g fill="none" fill-rule="evenodd"> <mask id="b" fill="#fff"> <use xlink:href="#a" /> </mask> <use class="big-circle" fill="#E9584D" xlink:href="#a" /> <g class="mountain-group" transform="translate(-.688 -.25)" mask="url(#b)"> <mask id="e" fill="#fff"> <use xlink:href="#d" /> </mask> <path class="mountains" d="M4.44 138.825L34.487 91.25l37.068 46.066 16.643-18.88 13.616 19.635 21.94-28.696L148.874 141l31-27 32.512 38.23h-.003c-16.49 39.926-55.812 68.02-101.696 68.02-50.868 0-93.67-34.528-106.252-81.425z" fill="#DB4C3F" mask="url(#e)" /> <path class="mountains-brightness" d="M34.798 91.002l27.99 56.637 9.078-10.574-37.068-46.064zM88.51 118.187l9.077 24.92 4.54-5.286-13.618-19.633zM124.064 109.124l15.133 40.842 9.992-9.216-25.126-31.626z" fill="#F76C62" mask="url(#e)" /> </g> <g xmlns="http://www.w3.org/2000/svg" transform="translate(6 19)"> <path class="stars" fill="#F76C62" class="star_brightness_g2" d="M102.366 40.603l-3.11 1.635.593-3.463-2.517-2.453 3.478-.506 1.556-3.15 1.555 3.15 3.48.506-2.517 2.453.594 3.463M85.356 70.277l-3.778 1.985.722-4.206-3.056-2.978 4.223-.614 1.89-3.827 1.887 3.827 4.223.614-3.056 2.978.723 4.206M58.517 45.895L51.852 49.4l1.273-7.423-5.393-5.256 7.452-1.082 3.333-6.753 3.333 6.753 7.452 1.083-5.392 5.257 1.273 7.423" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="47" cy="16" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g" cx="19" cy="53" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g" cx="7" cy="74" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g" cx="48" cy="70" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="94" cy="87" r="1.6" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="123" cy="78" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="197" cy="68" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="134" cy="50" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g" cx="122" cy="2" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="84" cy="2" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="161" cy="13" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="185" cy="38" r="1.8" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="1" cy="97" r="1" /> <circle class="stars" fill="#F76C62" class="star_brightness_g2" cx="63" cy="97" r="1" /> <circle class="stars" fill="#F76C62" class="star_brightness_g" cx="200" cy="93" r="1" /> </g> <g> <circle class="moon-circle" fill="#FFFFFF" cx="112" cy="115" r="85" mask="url(#cut-off-bottom)" /> </g> </g> </svg>'
    },
    n.render = v,
    n.reset = j,
    n.isAnimationRunning = w,
    n.enableAnimation = g,
    n.disableAnimation = m
  }
  , {
    "../completed_history/.coffee.CompletedQuickVisualize.js": 24,
    "../themes/.coffee.Themes.js": 113
  }],
  14: [function(e, t, n) {
    var r, o, i, s, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = e("../../react_components/.es6.SmartSchedule.js"),
    o = window.DateistDateHelpers,
    r = window.DateUtils,
    i = function() {
      function e() {
        this.sort = a(this.sort, this),
        this._idComparator = a(this._idComparator, this),
        this._dueDateComparator = a(this._dueDateComparator, this),
        this.render = a(this.render, this)
      }
      return e.prototype.render = function(e, t, n, r) {
        var o, i, a, c, d, l, u, h;
        if (c = DIV({
          c: "section_overdue"
        }, o = H2({
          c: "section_header warning"
        }, _("Overdue"))),
        n.length > 0 && r && (d = A({
          c: "smart_schedule_link"
        }, _("Reschedule overdue"), imageSprite("cmp_thunder")),
        $AEV(d, "click", function() {
          return s.openSmartSchedule(n)
        }),
        $add(o, d)),
        l = UL({
          class: "items priority_list",
          style: "margin-bottom: 9px;"
        }),
        0 === n.length)
          $add(l, LI({
            c: "no_tasks"
          }, _("No tasks match your query")));
        else
          for (e.display_date = !1,
          n.sort(this.sort),
          u = 0,
          h = n.length; u < h; u++)
            i = n[u],
            a = e.renderItem(i, {
              with_due_date: !0,
              with_time: !1,
              with_project: !0,
              no_indent: !0,
              no_drag_and_drop: !1
            }),
            $add(l, a),
            e.displayArrows(i, a);
        return $add(c, l),
        $add(t, c)
      }
      ,
      e.prototype._dueDateComparator = function(e, t) {
        var n, r;
        return o.is_same_date(e.due_date, t.due_date) ? (n = o.has_time(e.due_date),
        r = o.has_time(t.due_date),
        n && r ? e.due_date.getTime() - t.due_date.getTime() : n && !r ? -1 : !n && r ? 1 : n || r ? void 0 : 0) : e.due_date.getTime() - t.due_date.getTime()
      }
      ,
      e.prototype._idComparator = function(e, t) {
        return "number" == typeof e && "number" == typeof t ? e - t : "number" == typeof e && "string" == typeof t ? e : "string" == typeof e && "number" == typeof t ? t : "string" == typeof e && "string" == typeof t ? e.localeCompare(t) : 0
      }
      ,
      e.prototype.sort = function(e, t) {
        var n, r, o;
        return n = this._dueDateComparator(e, t),
        r = t.priority - e.priority,
        o = this._idComparator(e.project_id, t.project_id),
        0 !== n ? n : 0 !== r ? r : 0 !== o ? o : this._idComparator(e.id, t.id)
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../react_components/.es6.SmartSchedule.js": 177
  }],
  15: [function(e, t, n) {
    var r, o, i, s, a, c, d, l = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.DateistDateHelpers,
    i = window.DateUtils,
    d = e("../../models/.coffee.UtilModels.js"),
    r = e("./.coffee.AgendaCurrentDays.js"),
    a = e("../../models/.coffee.DayOrders.js"),
    o = e("./.coffee.AgendaUtils.js"),
    c = function() {
      function e() {
        this.render = l(this.render, this)
      }
      return e.prototype.getDefaultOpts = function(e) {
        var t, n, r, o;
        return o = new Date,
        t = s.date_max(o),
        r = e.getTime() < t.getTime(),
        n = Math.abs(s.day_diff(o, e)),
        {
          day_diff: n,
          cur_date: t,
          is_overdue: r
        }
      }
      ,
      e.prototype.render = function(e, t, n, i, c) {
        var l, u, h, f, p, m, g, y, w, v, j, b, I, $, S, C, T;
        for (null == c && (c = !0),
        r.add(n),
        i = c ? a.annotate(i) : i.sort(d.daySort),
        e.display_date = !0,
        f = DIV(),
        y = this.getDefaultOpts(n),
        $add(f, this._renderDayHeader(s.date_max(n), !0, y)),
        $add(f, j = UL({
          class: "items day_list"
        })),
        0 === y.day_diff && $addClass(j, "ul_today"),
        c || $addClass(j, "is_filtered"),
        j.day_date = n,
        m = [],
        p = [],
        b = 0,
        S = i.length; b < S; b++)
          h = i[b],
          s.has_time(h.due_date) ? p.push(h) : m.push(h);
        for (p.sort(function(e, t) {
          return e.time === t.time ? d.sortByPriority(e, t) : e.time - t.time
        }),
        w = {},
        c || (w.no_day_ordering = !0),
        I = 0,
        C = p.length; I < C; I++)
          h = p[I],
          $add(j, g = e.renderItem(h, w)),
          e.displayArrows(h, g);
        for (v = LI({
          c: "agenda_item reorder_item",
          s: "font-size: 0; height: 0px; padding: 0;"
        }),
        $add(j, v),
        v.json = {
          due_date: n
        },
        $ = 0,
        T = m.length; $ < T; $++)
          h = m[$],
          $add(j, g = e.renderItem(h, w)),
          e.displayArrows(g.json, g);
        if ($add(t, u = DIV({
          c: "day_holder"
        }, f, j)),
        0 === y.day_diff || !y.is_overdue)
          return $add(j, LI({
            c: "add_task"
          }, l = A({
            href: "#",
            c: "action"
          }, SPAN({
            c: "icon icon-add"
          }), _("Add Task")))),
          l.onclick = $p(o.showAddItem, l)
      }
      ,
      e.prototype._renderDayHeader = function(e, t, n) {
        var r, a, c, d;
        return n || (n = this.getDefaultOpts(e)),
        a = s.is_same_date(e, n.cur_date),
        r = function(t) {
          var n;
          return n = A({
            href: "#"
          }, t),
          $AEV(n, "click", function() {
            return o.query(i.format(e, !0)),
            !1
          }),
          n
        }
        ,
        n.is_overdue && !a ? (d = H2({
          c: "section_header"
        }),
        1 === n.day_diff ? ($add(d, r(_("Yesterday"))),
        $add(d, SPAN({
          class: "h2_date"
        }, i.formatView(e, !0)))) : ($add(d, r(_("%s days ago").replace("%s", Math.abs(n.day_diff)))),
        $add(d, SPAN({
          class: "h2_date"
        }, i.formatView(e, !0)))),
        $addClass(d, "overdue")) : (0 === n.day_diff ? (d = H2(r(_("Today"))),
        c = !0) : 1 === n.day_diff ? (d = H2(r(_("Tomorrow"))),
        c = !0) : (d = H2(r(i.getWeekDay(e.getDay()))),
        c = !1),
        $addClass(d, "section_header"),
        $add(d, SPAN({
          class: "h2_date"
        }, i.formatView(e, c)))),
        d
      }
      ,
      e
    }(),
    t.exports = new c
  }
  , {
    "../../models/.coffee.DayOrders.js": 147,
    "../../models/.coffee.UtilModels.js": 172,
    "./.coffee.AgendaCurrentDays.js": 10,
    "./.coffee.AgendaUtils.js": 12
  }],
  16: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.DateistDateHelpers,
    r = window.DateUtils,
    i = function() {
      function e() {
        this.labelPrioritySort = s(this.labelPrioritySort, this),
        this.render = s(this.render, this)
      }
      return e.prototype.render = function(e, t, n, r, o) {
        var i, s, a, c, d;
        if (null == o && (o = !0),
        $add(t, DIV(H2({
          c: "section_header"
        }, r))),
        a = UL({
          class: "items priority_list",
          style: "margin-bottom: 9px;"
        }),
        0 === n.length)
          $add(a, LI({
            c: "no_tasks"
          }, _("No tasks match your query")));
        else
          for (e.display_date = !1,
          n.sort($p(this.labelPrioritySort, o)),
          c = 0,
          d = n.length; c < d; c++)
            i = n[c],
            s = e.renderItem(i, {
              with_due_date: !0,
              with_time: !1,
              with_project: !0,
              no_indent: !0,
              no_drag_and_drop: !0
            }),
            $add(a, s),
            e.displayArrows(i, s);
        return $add(t, a)
      }
      ,
      e.prototype.labelPrioritySort = function(e, t, n) {
        var r, i;
        if (e) {
          if (t.priority > n.priority)
            return -1;
          if (t.priority < n.priority)
            return 1
        }
        return o.is_same_date(t.due_date, n.due_date) ? (r = o.has_time(t.due_date),
        i = o.has_time(n.due_date),
        r && i ? t.due_date > n.due_date ? 1 : -1 : r && !i ? -1 : !r && i ? 1 : t.project_id === n.project_id ? t.item_order > n.item_order : t.project_id > n.project_id) : t.due_date && !n.due_date ? -1 : !t.due_date && n.due_date ? 1 : t.due_date === n.due_date ? 0 : t.due_date > n.due_date ? 1 : t.due_date < n.due_date ? -1 : n.id - t.id
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {}],
  17: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Indicator,
    s = e("../project_editor/.coffee.ProjectEditorUtils.js"),
    i = e("../../models/.coffee.ItemsModel.js"),
    a = e("../../models/.coffee.ProjectsModel.js"),
    c = e("./.coffee.RenderQueryLabelPriority.js"),
    r = function() {
      function e() {
        this.renderItem = d(this.renderItem, this),
        this.renderItems = d(this.renderItems, this),
        this.fetchFromServer = d(this.fetchFromServer, this),
        this.render = d(this.render, this)
      }
      return e.prototype.render = function(e, t, n) {
        var r, o, i, s, a, c, d, l;
        for (a = DIV({
          c: "search_holder"
        }),
        $add(a, H2({
          c: "section_header"
        }, n.name)),
        r = [],
        o = [],
        l = n.items,
        c = 0,
        d = l.length; c < d; c++)
          i = l[c],
          i.in_history || i.checked ? o.push(i) : r.push(i);
        return this.renderItems(e, a, r, !0, !0),
        o.length > 0 && ($add(a, DIV({
          s: "padding-top: 10px"
        })),
        this.renderItems(e, a, o, !1)),
        n.is_filtered || ($add(a, s = A({
          href: "#",
          c: "action search_completed"
        }, _("Search completed tasks..."))),
        $AEV(s, "click", $p(this.fetchFromServer, e, a, s, n.query))),
        $add(t, a)
      }
      ,
      e.prototype.fetchFromServer = function(e, t, n, r) {
        var i, s;
        return window.User.is_premium ? ($remove(n),
        s = DIV(o.cssSpinner()),
        $add(t, s),
        i = $requestJSON("/API/v7/search"),
        i.offline_message = !0,
        i.addCallback(function(t) {
          return function(n) {
            var r;
            return n.projects && $map($values(n.projects), function(e) {
              return a.temporary_projects[e.id] = e
            }),
            $add(s, r = UL({
              class: "items",
              style: "margin-bottom: 9px;"
            })),
            $replace(s, null ),
            t.renderItems(e, s, n.history, !1)
          }
        }(this)),
        i.sendReq({
          query: r,
          only_history: 1,
          token: window.User.token
        }),
        !1) : (alert(_("Full text search is only available for premium users.")),
        !1)
      }
      ,
      e.prototype.renderItems = function(e, t, n, r, o) {
        var d, l, u, h, f, p, m, g, y, w, v, j, b, I, $, A, S, C, T;
        if (null == o && (o = !1),
        0 === n.length)
          return $add(g, LI({
            c: "no_tasks"
          }, _("No tasks match your query"), "."));
        for (y = 0,
        b = n.length; y < b; y++)
          l = n[y],
          i.convertToDateObject(l);
        if (n.sort($p(c.labelPrioritySort, !0)),
        o) {
          for (f = [],
          u = {},
          w = 0,
          I = n.length; w < I; w++)
            l = n[w],
            d = u[l.project_id],
            d || (d = u[l.project_id] = [],
            f.push(l.project_id)),
            d.push(l);
          for (T = [],
          v = 0,
          $ = f.length; v < $; v++)
            if (h = f[v],
            g = UL({
              class: "items",
              style: "margin-bottom: 9px;"
            }),
            p = u[h],
            m = a.get(parseInt(h)),
            m && 0 !== p.length) {
              for ($add(t, H2({
                c: "project_header section_header project_header_mini"
              }, s.generateLink(m))),
              j = 0,
              A = p.length; j < A; j++)
                l = p[j],
                this.renderItem(e, g, l, r, !1);
              T.push($add(t, g))
            }
          return T
        }
        for (g = UL({
          class: "items",
          style: "margin-bottom: 9px;"
        }),
        C = 0,
        S = n.length; C < S; C++)
          l = n[C],
          this.renderItem(e, g, l, r);
        return $add(t, g)
      }
      ,
      e.prototype.renderItem = function(e, t, n, r, o) {
        var s, c;
        if (null == r && (r = !1),
        null == o && (o = !0),
        n = i.getById(n.id) || n,
        n && (c = a.get(n.project_id)))
          return n.due_date && (n.due_date = new Date(n.due_date)),
          s = e.renderItem(n, {
            with_due_date: !0,
            with_time: !0,
            with_project: o,
            no_indent: !0,
            no_drag_and_drop: !0,
            not_editable: !r
          }),
          $add(t, s),
          e.displayArrows(n, s)
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../project_editor/.coffee.ProjectEditorUtils.js": 81,
    "./.coffee.RenderQueryLabelPriority.js": 16
  }],
  18: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = e("../project_editor/.coffee.ProjectEditorManager.js"),
    r = function() {
      function e() {
        this.render = i(this.render, this)
      }
      return e.prototype.render = function(e, t, n) {
        var r, i, s, a;
        for (r = [],
        s = 0,
        a = n.length; s < a; s++)
          i = n[s],
          r.push(i.id);
        return o.showProjects(r, null , {
          holder: t,
          update_location: !1,
          dont_replace_holder: !0
        })
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "../project_editor/.coffee.ProjectEditorManager.js": 80
  }],
  19: [function(e, t, n) {
    var r, o = window.Signals, i = window.DateistDateHelpers, s = window.AmiComplete, a = window.ElementStore, c = (window.track,
    e("../action_perfomed/.coffee.ActionPerformed.js")), d = e("../misc/Util.js").postMessageToWindow, l = e("../items_utils/.coffee.ItemAddEditForm.js"), u = e("../items_utils/.coffee.ItemCommonEdits.js"), h = e("../items_utils/.coffee.ItemsRender.js"), f = e("../items_utils/.coffee.ItemCheckbox.js"), p = e("../generic_manager/GenericManagerUtils.js"), m = e("../generic_manager/GenericArrows.js"), g = e("../../menus/MenuAgendaEdit.js"), y = e("../left_menu/.coffee.LeftMenu.js"), w = e("../project_editor/.coffee.ProjectEditorManager.js"), v = e("../promotion_overlay/.coffee.PromotionOverlay.js"), j = (e("../labels_list/.coffee.LabelsList.js"),
    e("../quick_find/.coffee.QuickFind.js")), b = e("./.coffee.AgendaUtils.js"), I = e("./.coffee.AgendaRenderUtils.js"), S = e("./.coffee.AgendaCurrentDays.js"), C = e("./.coffee.CompletedToday.js"), T = e("../../models/.coffee.QueriesItems.js"), k = (e("../../models/.coffee.LabelsModel.js"),
    e("../../models/.coffee.ItemsModel.js")), D = (e("../../models/.coffee.ProjectsModel.js"),
    e("../../models/.coffee.Reminders.js").BufferedRemindersModel), E = e("../filterist/.es6.engine"), x = e("../filterist/.es6.errors"), M = e("../filterist/.es6.section"), N = e("../../stores/.es6.AgendaStore.js");
    n.get = function() {
      return r
    }
    ,
    n.init = function() {
      window.AgendaInstance = r = new U
    }
    ;
    var L = "overdue, today"
      , R = "overdue, 7 days"
      , U = Class({
      name: "Agenda",
      init: function() {
        $bindMethods(this),
        this.saved_collapse_state = {},
        this.current_query = "",
        this.genereateAgendaArrows(),
        S.reset(),
        o.connect("update_counters", this.updateCounters),
        o.connect("theme_changed", function() {
          C.reset()
        });
        var e = this;
        o.connect("natural_language_project_updated", function(t) {
          e.current_form && e.current_form[1] && e.current_form[1].people_assigner.onProjectUpdated(t)
        }),
        N.addStateUpdateListener(function(t) {
          t.highlightedItemIds && (e.highlight_item_ids = t.highlightedItemIds),
          t.query && (e.current_query = t.query),
          e.refresh()
        })
      },
      query: function(e, t, n) {
        return c.mark("Agenda/query"),
        window.AGENDA_LAST_SHOWN = null ,
        t = "undefined" == typeof t || t,
        n = "undefined" == typeof n || n,
        C.disableAnimation(),
        o.sendSignal("agenda_query", e),
        this.current_query = e,
        this.current_query == L || this.current_query == R ? j.setPlaceholder(this.current_query) : j.setPlaceholder(""),
        0 != n && j.setValue(""),
        document.title = "Todoist",
        y.hide(),
        this._runQuery(t),
        !1
      },
      reset: function() {
        j.setValue(""),
        j.setPlaceholder(null ),
        this.current_query = "",
        this.saved_collapse_state = {},
        S.reset(),
        s.hide(),
        C.reset()
      },
      saveCurrentCollapseState: function() {
        this.saved_collapse_state = {};
        var e = this.saved_collapse_state;
        $map($all("li", "task_item"), function(t) {
          t.json && (e[t.json.id] = t._collapsed)
        })
      },
      refresh: function(e, t) {
        if (this.current_form)
          return void setTimeout(this.refresh, 300);
        if (this.current_query.length) {
          if (e && t && i.is_same_date(e.due_date, t.due_date) && e.priority == t.priority)
            return !1;
          this.saveCurrentCollapseState(),
          this._runQuery(),
          this.flashItem()
        }
      },
      blur: function() {
        j.blur()
      },
      showError: function(e, t, n) {
        if ("premium" == n) {
          var r = v.renderHolder(e);
          $replace(t, r)
        } else {
          t = t || $("editor");
          var o = A({
            href: "/Help/Filtering",
            c: "action",
            target: "_blank"
          }, _("Show examples"));
          $replace(t, DIV({
            c: "no_matches"
          }, SPAN(e), o))
        }
      },
      showUnrecognizedSymbolError: function(e) {
        var t = A({
          href: "/Help/Filtering",
          c: "action",
          target: "_blank"
        }, _("Show examples"))
          , n = SPAN({
          c: "error_symbol"
        }, e.badSymbol)
          , r = P({}, _("Unrecognized query: "), e.queryString.slice(0, e.index), n, e.queryString.slice(e.index + e.badSymbol.length));
        $replace($("editor"), DIV({
          c: "filter_error"
        }, r, t))
      },
      _runQuery: function(e) {
        var t = (new Date).getTime()
          , n = window.AGENDA_LAST_SHOWN;
        if (!(n && t - n <= 300)) {
          window.AGENDA_LAST_SHOWN = t,
          w.reset();
          var r = this;
          c.mark("Agenda/_runQuery"),
          this.current_form = null ;
          var i = window.User.is_premium;
          if ("" === this.current_query)
            return !1;
          if (!i && (this.current_query.indexOf("&") != -1 || this.current_query.indexOf("|") != -1))
            return this.showError(_("Boolean operators are only available for premium users."), $("editor"), !0);
          o.sendSignal("change_location", "agenda/" + this.current_query);
          var s;
          try {
            s = E.filter(this.current_query)
          } catch (t) {
            if (!(t instanceof x.UnrecognizedSymbolError)) {
              if (t instanceof x.GrammarError)
                return this.showError(_("Incorrect query grammar"));
              console.log(t);
              var a = t && t.message || "" + t;
              return this.showError(a)
            }
            if (!e)
              return this.showUnrecognizedSymbolError(t);
            var d = "q:" + this.current_query;
            try {
              s = E.filter(d),
              this.current_query = d
            } catch (e) {
              var a = e && e.message || "" + e;
              return this.showError(a)
            }
          }
          S.reset();
          var l = DIV({
            id: "agenda_view"
          });
          s.length > 1 && (s = s.filter(function(e) {
            var t = e.view === M.VIEW_TYPE_OVERDUE && 0 == e.items.length;
            return !t
          }));
          var u = this.current_query == L || this.current_query == R;
          if ($map(s, function(e) {
            I.renderSection(r, l, e, u)
          }),
          (this.current_query == L || this.current_query == R) && s.length > 1) {
            var h;
            h = this.current_query == L ? H2({
              c: "view_header"
            }, _("Today")) : H2({
              c: "view_header"
            }, _("Next 7 days")),
            $addToTop(l, h),
            $all("h2", "section_header", l).forEach(function(e) {
              $replaceClass(e, "section_header", "subsection_header")
            })
          }
          this.cur_div = l,
          $replace($("editor"), l);
          var f = $child($("editor"), "h2") || $child($("editor"), "div", "premium_only");
          f || this.current_query.indexOf("q:") != -1 || this.showError(SPAN(_("No tasks match your query"), " `", B(this.current_query), "`."), l, "no_match"),
          o.sendSignal("rendered.queries"),
          this.flashItem(),
          this.highlightItems(),
          this.renderInspirationalIfNeeded()
        }
      },
      flashItem: function() {
        if (this.flash_item) {
          var e = $("item_" + this.flash_item);
          e && ($addClass(e, "item_flash"),
          window.scrollTo(0, $position(e).y - 200)),
          this.flash_item = null
        }
      },
      highlightItems: function() {
        this.highlight_item_ids && (this.highlight_item_ids.forEach(function(e) {
          var t = $("item_" + e);
          t && $addClass(t, "item_hightlight_flash")
        }),
        this.highlight_item_ids = null )
      },
      showAddItem: function(e) {
        var t = this;
        return this.saveCurrentItem(function() {
          var n = $parent(e, "li")
            , r = $parent(e, "ul");
          $remove($child(r, "li", "inspiration"));
          var o = function() {
            return $show(n),
            t.current_form_edit = null ,
            l.genericCancelEdit(),
            t.renderInspirationalIfNeeded(),
            !1
          }
            , i = DateUtils.dateistResultFromDate(r.day_date)
            , s = {
            cancel: p.genCancel("li", o, t),
            action: function(n) {
              var r = t._onAdd(n);
              r && t.showAddItem(e)
            },
            submit_val: _("Add Task"),
            name_val: "",
            due_date: i.due_date,
            date_string: i.date_string,
            no_indent: !0
          }
            , a = l.generateForm(s);
          t.current_form = ["add", a.form],
          $hide(n),
          $addBefore(a.li_item, n),
          a.textarea.proxyPlaceCursor()
        }),
        !1
      },
      _onAdd: function(e, t) {
        var n = $parent(e, "ul")
          , r = this
          , o = $parent(e, "li")
          , s = l.parseFormData(e);
        if (!s)
          return !1;
        if ("" == s.content)
          return $child(e, "a", "cancel").onclick(),
          $isFunction(t) && t(),
          !1;
        var a = 1
          , c = o.previousSibling;
        c && c.json && c.json.day_order && (a = c.json.day_order + 1),
        s.day_order = a,
        l.genericAddItem(e, s),
        s.item_order = null ;
        var d = k.add(s);
        if (D.reminders.length > 0 && D.commitBuffered(d),
        i.is_same_date(d.due_date, n.day_date)) {
          var h = r.renderItem(d);
          $swap(o, h),
          this.displayArrows(h.json, h)
        } else
          $remove(o),
          u.notifyAddedTo(d);
        return this.updateCounters(),
        this.current_form = null ,
        $show($child(n, "li", "add_task")),
        $isFunction(t) && t(),
        !0
      },
      saveCurrentItem: function(e) {
        if (this.current_form) {
          var t;
          t = "edit" == this.current_form[0] ? this._onSave : this._onAdd,
          t(this.current_form[1], e)
        } else
          e()
      },
      editCurrentItem: function(e) {
        var t = $parent($eventElm(e), "li");
        if (this.isClickAble(t)) {
          var n = $p(this._initForm, t);
          return this.saveCurrentItem(n),
          !1
        }
      },
      _initForm: function(e) {
        var t = this
          , n = function() {
          return $show(e),
          t.current_form = null ,
          l.genericCancelEdit(),
          !1
        }
          , r = {
          cancel: p.genCancel("li", n, this),
          action: t._onSave,
          submit_val: _("Save"),
          name_val: e.json.content,
          due_date: e.json.due_date,
          date_string: e.json.date_string,
          current_item: e,
          priority: e.json.priority,
          responsible_uid: e.json.responsible_uid,
          no_indent: !0
        };
        r.onKeyPress = function(n) {
          if (13 == n.keyAscii)
            return !s.shown() && (t.saveCurrentItem(),
            !1);
          if (n.ctrl && 38 == n.keyAscii) {
            var r = t.getPElement(e);
            if (r)
              return t.saveCurrentItem(function() {
                t._initForm(r)
              }),
              !1
          }
          if (n.ctrl && 40 == n.keyAscii) {
            var o = t.getNElement(e);
            return !!o && (t.saveCurrentItem(function() {
              t._initForm(o)
            }),
            !1)
          }
          if (9 == n.keyAscii && $isSafari()) {
            if (s.shown())
              return !1;
            var i = $f(t.current_form[1], "due_date");
            if (i) {
              var a = $eventElm(n);
              a && !$hasClass(a, "due_date") && ($preventDefault(n),
              i.select())
            }
          }
        }
        ;
        var o = l.generateForm(r);
        return t.current_form = ["edit", o.form],
        $hide(e),
        $addAfter(o.li_item, e),
        o.textarea.proxyPlaceCursor(),
        !1
      },
      _onSave: function(e, t) {
        var n = this
          , r = $parent(e, "li")
          , o = r.previousSibling
          , i = $update({}, o.json)
          , s = l.genericSaveItem(o, e);
        if (s) {
          var a = n.renderItem(s.item, o.render_opts || null );
          return $swap(o, a),
          this.displayArrows(a.json, a),
          $map($all("li", "item_" + o.json.id), function(e) {
            if (e != a) {
              var t = n.renderItem(s.item, o.render_opts || null );
              $swap(e, t)
            }
          }),
          this.refresh(i, s.item),
          s.is_updated && this.updateCounters(),
          this.current_form = null ,
          $isFunction(t) && t(),
          !1
        }
      },
      renderItem: function(e, t) {
        var n;
        n || (n = {
          fn_toggle_menu: g.toggle,
          fn_complete_item: this.completeItem,
          fn_undo_complete_item: this.uncompleteItem,
          with_project: !0,
          with_time: !0,
          no_indent: !0
        }),
        t && $update(n, t);
        var r = h.renderItem(e, n);
        r.render_opts.renderCls = this,
        $addClass(r, "agenda_item"),
        $addClass(r, "indent_1"),
        this.saved_collapse_state[e.id] === !1 ? r._collapsed = -1 : r._collapsed = !0;
        var o = !0;
        return t && t.not_editable && (o = !1),
        o && (p.attachClick(r.td_time, this.editCurrentItem),
        p.attachClick(r.content, this.editCurrentItem)),
        r
      },
      completeItem: function(e, t) {
        var n = i.is_same_date(e.json.due_date, new Date);
        n && C.enableAnimation();
        var r = this;
        c.mark("Agenda/complete");
        var o = !1;
        t && t.shift && (o = !0);
        var s = k.complete(e.json, o)
          , a = !1
          , d = $first(s);
        d && d.in_history && (a = !0),
        $map(s, function(e) {
          var t = $("item_" + e.id);
          t && (!a && $hasClass(t, "agenda_child_expanded") ? f.update(t, 1, r.uncompleteItem, !1) : l.removeItemInList(t))
        }),
        r.arrows.updateArrows(),
        r.updateCounters(),
        Dateist.is_recurring(e.json.date_string, {
          lang: e.json.date_lang
        }) && r.refresh(),
        n && (C.reset(),
        setTimeout(r.renderInspirationalIfNeeded, 120))
      },
      uncompleteItem: function(e) {
        c.mark("Agenda/complete");
        var t = k.uncomplete(e.json);
        $update(e.json, t),
        f.update(e, 0, this.completeItem),
        this.arrows.updateArrows(),
        this.updateCounters(),
        this.renderInspirationalIfNeeded()
      },
      updateCounters: function() {
        var e = k.getAllOwn()
          , t = T.getCounts(e);
        d(top, "UPDATE_COUNT:" + $serialize(t)),
        o.sendSignal("countsUpdated", t)
      },
      getSortableItems: function() {
        return $all("li", "agenda_item").filter(function(e) {
          return !!$hasClass(e, "reorder_item") || !($isHidden(e) || $hasClass(e, "moved") || e.json.due_date < new Date)
        })
      },
      displayArrows: function(e, t) {
        var n = k.getChildren(e, !1);
        n.length > 0 && this.arrows.displayArrow(t, !0)
      },
      genereateAgendaArrows: function() {
        var e = this;
        this.arrows = new m,
        this.arrows.list = this,
        this.arrows.getChildren = p.getChildren,
        this.arrows._hasChildren = function(t) {
          return !(!t || !t.json) && (t._collapsed == -1 && (e.fetchChildren(t),
          t._collapsed = !1),
          k.getChildren(t.json, !1).length > 0)
        }
        ,
        this.arrows._getArrows = function(e) {
          return $all("div", "arrow", e)
        }
        ,
        this.arrows._switchState = function(t) {
          return r.saveCurrentItem(function() {
            var n = t.host_item;
            e.fetchChildren(n),
            $remove($all("div", "arrow", n)),
            e.arrows.displayArrow(n),
            e.saveCurrentCollapseState()
          }),
          !1
        }
      },
      fetchChildren: function(e) {
        var t = a.get(e, "children");
        e.fetched && t ? e._collapsed ? (e._collapsed = !1,
        $map(t, function(e) {
          $show(e)
        })) : (e._collapsed = !0,
        $map(t, function(e) {
          $hide(e)
        })) : b.fetchChildren(e)
      },
      getNElement: function(e) {
        for (var t = e.nextSibling; t; ) {
          if (!$isHidden(t) && !$hasClass(t, "manager"))
            return t;
          t = t.nextSibling
        }
      },
      getPElement: function(e) {
        for (var t = e.previousSibling; t; ) {
          if (!$isHidden(t) && !$hasClass(t, "manager"))
            return t;
          t = t.previousSibling
        }
      },
      renderInspirationalIfNeeded: function() {
        if (this.current_query && this.current_query.indexOf(":") == -1) {
          var e = T.getCounts()
            , t = e.today + e.overdue;
          $remove($all("li", "inspiration")),
          0 === t && $map($all("ul", "ul_today"), function(e) {
            $add(e, LI({
              c: "inspiration"
            }, C.render()))
          })
        }
      },
      isClickAble: function(e) {
        return e && !$isIn($nodeName(e), ["a", "img"]) && !$hasClass(e, "label") && !$hasClass(e, "menu")
      }
    })
  }
  , {
    "../../menus/MenuAgendaEdit.js": 133,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.QueriesItems.js": 161,
    "../../models/.coffee.Reminders.js": 162,
    "../../stores/.es6.AgendaStore.js": 182,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../filterist/.es6.engine": 28,
    "../filterist/.es6.errors": 29,
    "../filterist/.es6.section": 33,
    "../generic_manager/GenericArrows.js": 40,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../items_utils/.coffee.ItemAddEditForm.js": 44,
    "../items_utils/.coffee.ItemCheckbox.js": 45,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../items_utils/.coffee.ItemsRender.js": 47,
    "../labels_list/.coffee.LabelsList.js": 55,
    "../left_menu/.coffee.LeftMenu.js": 56,
    "../misc/Util.js": 65,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90,
    "../quick_find/.coffee.QuickFind.js": 94,
    "./.coffee.AgendaCurrentDays.js": 10,
    "./.coffee.AgendaRenderUtils.js": 11,
    "./.coffee.AgendaUtils.js": 12,
    "./.coffee.CompletedToday.js": 13
  }],
  20: [function(e, t, n) {
    var r = e("../../models/.coffee.UtilModels.js")
      , o = e("./.coffee.AgendaCurrentDays.js")
      , i = e("./.coffee.RenderQueryDays.js")
      , s = {
      displayItems: function(e, t, n, s, a, c) {
        n = n.sort(r.sortByDate),
        n.reverse();
        for (var d = [], l = 0; l < n.length; l++) {
          var u = n[l];
          d.push(u),
          this._isNextSameDate(n, u.due_date, l) || (s && !s(u) || (a && d.reverse(),
          o.add(u.due_date),
          i.render(e, t, u.due_date, d, c)),
          d = [])
        }
      },
      _isNextSameDate: function(e, t, n) {
        var r = e[n + 1];
        return !(!r || "overdue_end" == r) && this.isSameDay(t, r.due_date)
      },
      isSameDay: function(e, t) {
        return !(!e || !t) && (e.getDate() == t.getDate() && e.getMonth() == t.getMonth() && e.getYear() == t.getYear())
      }
    };
    t.exports = s
  }
  , {
    "../../models/.coffee.UtilModels.js": 172,
    "./.coffee.AgendaCurrentDays.js": 10,
    "./.coffee.RenderQueryDays.js": 15
  }],
  21: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = function() {
      function e() {
        this.renderAvatar = i(this.renderAvatar, this)
      }
      return e.prototype.base_url = "https://dcff1xvirvpfp.cloudfront.net/",
      e.prototype.renderAvatar = function(e, t) {
        var n, r, o, i;
        return e.image_id ? i = "" + this.base_url + e.image_id + "_" + t + ".jpg" : (r = 30,
        "small" === t && (r = 18),
        o = $encode({
          fullName: e.full_name || e.email.split("@")[0],
          email: e.email,
          size: 2 * r
        }),
        i = "https://avatars.doist.com/?" + o),
        n = IMG({
          src: i,
          c: "user_avatar " + t
        })
      }
      ,
      e
    }(),
    r = new o,
    window.Avatars = r,
    "undefined" != typeof t && null !== t && (t.exports = r)
  }
  , {}],
  22: [function(e, t, n) {
    var r, o;
    r = window.Signals,
    o = e("../../models/.coffee.SyncEngine.js"),
    n.init = function() {
      return window.COMET_TIMEOUT = null ,
      r.connect("comet_td_sync", function() {
        var e;
        return window.COMET_TIMEOUT && clearTimeout(window.COMET_TIMEOUT),
        e = function() {
          return o.sync(null , !0)
        }
        ,
        window.COMET_TIMEOUT = setTimeout(e, 200)
      })
    }
  }
  , {
    "../../models/.coffee.SyncEngine.js": 167
  }],
  23: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    w = window.Signals,
    s = window.DateUtils,
    o = window.Alerts,
    a = window.DateistDateHelpers,
    l = window.Indicator,
    S = window.imageSprite,
    r = window.$static_path,
    b = window.getKarmaImage,
    I = window.getOfflineMessage,
    y = e("../agenda/.coffee.RenderQueryDays.js"),
    h = e("../labels/Labels.js"),
    m = e("../notes/.coffee.NotesUtils.js"),
    v = e("../themes/.coffee.Themes.js"),
    c = e("../formatter/Formatter.js"),
    u = e("../items_utils/.coffee.ItemsRender.js"),
    g = e("../../models/.coffee.ProjectsModel.js"),
    p = e("../../models/.coffee.NotesModel.js"),
    f = e("../../models/.coffee.LabelsModel.js"),
    j = e("../../models/.coffee.UserModel.js"),
    i = e("./.coffee.CompletedUtils.js"),
    d = function() {
      function e() {
        this._processReqData = C(this._processReqData, this),
        this._renderBlankState = C(this._renderBlankState, this),
        this._renderItem = C(this._renderItem, this),
        this._renderLoadMore = C(this._renderLoadMore, this),
        this._renderItems = C(this._renderItems, this),
        this.renderItems = C(this.renderItems, this),
        this.showHistory = C(this.showHistory, this),
        this.renderKarma = C(this.renderKarma, this),
        this.updateCount = C(this.updateCount, this),
        this.karmaUpdated = C(this.karmaUpdated, this),
        this._resetState = C(this._resetState, this),
        this._resetState(),
        w.connect("karma_updated_forced", function(e) {
          return function() {
            return e.current_count = null ,
            e.current_karma = null ,
            e.karmaUpdated()
          }
        }(this)),
        w.connect("karma_updated", this.karmaUpdated),
        w.connect("user_updated", function(e) {
          return function(t, n) {
            return t.karma_disabled === n.karma_disabled && t.karma_vacation === n.karma_vacation || (e.current_count = null ,
            e.current_karma = null ),
            e.karmaUpdated()
          }
        }(this)),
        w.connect("theme_changed", function(e) {
          return function() {
            var t;
            if (t = $("s_completed_count"))
              return $replace(t, e.renderKarma())
          }
        }(this)),
        w.connect("completed_history.show", this.showHistory)
      }
      return e.prototype._resetState = function() {
        return this.project_by_id = {},
        this.current_offset = 0
      }
      ,
      e.prototype.current_karma = null ,
      e.prototype.karmaUpdated = function() {
        var e, t, n;
        if (e = $("s_completed_count"),
        n = window.User,
        e)
          if (window.User.karma_disabled) {
            if (this.current_count !== window.User.completed_count)
              return this.updateCount(),
              this.highlightCount()
          } else if (t = n.karma,
          this.current_karma !== t)
            return $replace(e, this.renderKarma()),
            this.highlightCount(),
            this.current_karma = t
      }
      ,
      e.prototype.updateCount = function() {
        var e, t, n;
        return e = window.User.completed_count,
        e || (e = 0),
        this.current_count = e,
        window.User.karma_disabled ? (t = $("s_completed_count").innerHTML,
        n = !0,
        "-" === t ? n = !1 : parseInt(t) === e && (n = !1),
        $replace($("s_completed_count"), "" + e),
        n ? this.highlightCount() : void 0) : void $replace($("s_completed_count"), this.renderKarma())
      }
      ,
      e.prototype.highlightCount = function() {
        return $fx.fadeIn($("completed_items"), {
          duration: 1e3
        })
      }
      ,
      e.prototype.renderKarma = function() {
        var e, t, n, r;
        return r = window.User,
        this.current_karma = r.karma,
        e = SPAN(),
        t = b(r),
        t.id = "karma_icon",
        $add(e, t),
        n = null ,
        "up" === r.karma_trend ? $add(e, n = S(v.getKarmaUpIcon(), 11, 9)) : "down" === r.karma_trend && $add(e, n = S(v.getKarmaDownIcon(), 11, 9)),
        n && $addClass(n, "karma_up_down"),
        $add(e, SPAN({
          c: "count"
        }, "" + r.karma)),
        e
      }
      ,
      e.prototype.showHistory = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h, p, m, y;
        for (w.sendSignal("projects.reset"),
        d = SELECT({
          id: "select_project"
        }, OPTION({
          value: ""
        }, _("Any project")), OPTION({
          disabled: "disabled"
        }, "---------")),
        m = g.getAll(),
        l = 0,
        h = m.length; l < h; l++)
          a = m[l],
          a.indent > 1 ? (r = function() {
            var e, t, n;
            for (n = [],
            i = e = 0,
            t = a.indent - 2; 0 <= t ? e <= t : e >= t; i = 0 <= t ? ++e : --e)
              n.push("\u2013");
            return n
          }(),
          r = r.join("") + " ") : r = "",
          s = OPTION({
            value: a.id
          }, r + a.name),
          e && a.id === e && (s.selected = !0),
          $add(d, s);
        for (c = SELECT({
          id: "select_label"
        }, OPTION({
          value: ""
        }, _("Any label")), OPTION({
          disabled: "disabled"
        }, "---------")),
        y = $values(f.getAll()),
        u = 0,
        p = y.length; u < p; u++)
          o = y[u],
          s = OPTION({
            value: o.name
          }, o.name),
          t && o.name === t && (s.selected = !0),
          $add(c, s);
        return $AEV([c, d], "change", this.renderItems),
        this.current_offset = 0,
        n = DIV({
          id: "completed_app"
        }, DIV({
          c: "filters"
        }, d, c), DIV({
          id: "completed_show"
        })),
        $replace($("editor"), n),
        this.renderItems(),
        !1
      }
      ,
      e.prototype.renderItems = function() {
        var e, t, n, r, o, i;
        return this._resetState(),
        o = this._getCurrentSelected(),
        t = "completed",
        (o.project_id || o.label) && (t += "/" + (o.project_id || null ),
        t += "/" + (o.label || null )),
        w.sendSignal("change_location", t),
        e = $("completed_show"),
        window.User.is_premium ? ($replace($("completed_show"), IMG({
          src: "https://d3ptyyxy2at9ui.cloudfront.net/fb947b5107ee9a4cbb1a7299459d46ae.gif"
        })),
        i = this._createReq(),
        n = i[0],
        r = i[1],
        n.addCallback(function(t) {
          return function(n) {
            return t._processReqData(n),
            $replace(e, null ),
            0 !== $values(r).length && 0 === n.items.length ? $replace(e, SPAN({
              c: "light_error"
            }, _("No completed tasks matches your filter."))) : 0 === n.items.length ? $replace(e, t._renderBlankState(n.items.length)) : t._renderItems(e, n.items)
          }
        }(this)),
        n.addErrback(function(e, t) {
          return $replace($("completed_app"), I(t))
        }),
        n.sendReq(r)) : void $replace(e, this._renderBlankState(0))
      }
      ,
      e.prototype._renderItems = function(e, t) {
        var n, r, o, i, s, c, d, l, u;
        for (l = 0,
        u = t.length; l < u; l++)
          c = t[l],
          n = c.completed_date,
          n = a.date_max(n),
          i = "" + n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate(),
          r = "day_header_" + i,
          o = "day_ul_" + i,
          s = $(r),
          s || (s = y._renderDayHeader(n, !1),
          s.id = r,
          $add(e, s)),
          d = $(o),
          d || (d = UL({
            c: "items",
            id: o
          }),
          $add(e, d)),
          this._renderItem(e, d, c);
        if (t.length > 0)
          return this._renderLoadMore(e)
      }
      ,
      e.prototype._renderLoadMore = function(e) {
        var t, n;
        return n = _("Load more history") + "...",
        $add(e, t = A({
          c: "load_more",
          href: "#"
        }, n)),
        $AEV(t, "click", function(r) {
          return function() {
            var o, i, s;
            return !t.loading && (t.loading = !0,
            $replace(t, l.imgSmall()),
            s = r._createReq(),
            o = s[0],
            i = s[1],
            o.addCallback(function(n) {
              return r._processReqData(n),
              0 === n.items.length ? ($addClass(t, "load_more_none"),
              $replace(t, _("No more tasks to show")),
              $fx.fadeOut(t, {
                duration: 3e3,
                onComplete: function() {
                  return $remove(t)
                }
              })) : $remove(t),
              r._renderItems(e, n.items)
            }),
            o.addErrback(function(e, r) {
              return alert(I(r)),
              t.loading = !1,
              $replace(t, n)
            }),
            o.sendReq(i),
            !1)
          }
        }(this))
      }
      ,
      e.prototype._renderItem = function(e, t, n) {
        var r, o, i, a, d, l, f, _, y, w;
        return w = SPAN({
          c: "complete_time"
        }, s.getHourAndMin(n.completed_date)),
        y = null ,
        f = g.get(n.project_id) || this.project_by_id[n.project_id],
        f && (y = u.createProjectItem({
          project_id: f.id
        }, f)),
        i = S("cmp_trash", 16, 16),
        $setVisibility(i, !1),
        d = LI({
          c: "task_item"
        }, w, y, i, r = SPAN()),
        _ = function(e, t) {
          return $setVisibility(e, t)
        }
        ,
        $AEV(i, "click", $p(this.deleteTask, d, n.id)),
        $AEV(d, "mouseover", $p(_, i, !0)),
        $AEV(d, "mouseout", $p(_, i, !1)),
        o = c.format(n.content, {
          pure_emoji: !0
        }),
        o = h.formatByContent(o),
        $setHTML(r, o),
        l = m.renderIcon(n, p.TYPE_ITEM_NOTE),
        a = $child(r, "div", "labels_holder"),
        a ? $addBefore(l, a) : $add(r, l),
        $add(t, d)
      }
      ,
      e.prototype._renderBlankState = function() {
        var e, t, n;
        return n = window.User.is_premium ? _("You don't have any completed tasks") : _("Completed view is a premium feature"),
        e = DIV({
          c: "blank_state_text blank_state_completed"
        }, B(n), DIV(_("Completed view makes it possible to see what you have done in the past."), " ", _("It's the perfect tool to review and improve your productivity."), " ", t = A({
          href: "/Help/viewTrackProducitivty",
          c: "action",
          target: "_blank"
        }, _("Read more") + "..."))),
        window.User.is_premium || $add(e, DIV({
          c: "text"
        }, $setHTML(SPAN(), _("<a>Upgrade to Todoist Premium</a> for instant access to this and a lot of other features.").replace("<a>", '<a href="/premium" target="_blank">')))),
        e
      }
      ,
      e.prototype.deleteTask = function(e, t) {
        var n;
        return n = function(n) {
          var r;
          if (n)
            return $hide(e),
            r = $request("/API/v7/completed/delete"),
            r.offline_message = !0,
            r.addCallback(function() {
              return $remove(e),
              w.sendSignal("update_counters")
            }),
            r.addErrback(function() {
              return $show(e)
            }),
            r.sendReq({
              task_id: t,
              token: window.User.token
            })
        }
        ,
        o.confirm(_("Are you sure you want to delete this completed task?"), n)
      }
      ,
      e.prototype._createReq = function() {
        var e, t, n;
        return e = $requestJSON("/API/v7/completed/get_all"),
        e.offline_message = !0,
        t = {
          token: window.User.token,
          annotate_notes: 1,
          limit: 50
        },
        t.known_projects = $serialize(g.getIds()),
        n = this._getCurrentSelected(),
        $update(t, n),
        0 !== this.current_offset && (t.offset = this.current_offset),
        [e, t]
      }
      ,
      e.prototype._getCurrentSelected = function() {
        var e, t;
        return t = {},
        e = function(e, n) {
          var r;
          if (r = $selectValue($(e)))
            return t[n] = r
        }
        ,
        e("select_project", "project_id"),
        e("select_label", "label"),
        t
      }
      ,
      e.prototype._processReqData = function(e) {
        var t, n, r, o;
        for (o = e.items,
        n = 0,
        r = o.length; n < r; n++)
          t = o[n],
          $isString(t.completed_date) && (t.completed_date = new Date(t.completed_date));
        return e.projects && $update(this.project_by_id, e.projects),
        this.current_offset += e.items.length
      }
      ,
      e
    }(),
    t.exports = new d
  }
  , {
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.NotesModel.js": 157,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.UserModel.js": 171,
    "../agenda/.coffee.RenderQueryDays.js": 15,
    "../formatter/Formatter.js": 38,
    "../items_utils/.coffee.ItemsRender.js": 47,
    "../labels/Labels.js": 54,
    "../notes/.coffee.NotesUtils.js": 69,
    "../themes/.coffee.Themes.js": 113,
    "./.coffee.CompletedUtils.js": 25
  }],
  24: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.GB_hide,
    s = window.GB_getLast,
    c = window.GB_show,
    m = window.TooptipWin,
    p = window.Signals,
    o = window.DateUtils,
    r = window.AmiTooltip,
    i = window.GAmiTooltip,
    l = window.Indicator,
    y = window.highDefCanvas,
    g = e("../opener/WindowOpener.js"),
    f = e("../../models/.coffee.ProjectsModel.js"),
    h = e("../project_list/.coffee.ProjectColors.js"),
    u = e("./.coffee.KarmaGraph.js"),
    d = function() {
      function e() {
        this.showDailyGoal = w(this.showDailyGoal, this),
        this.checkDailyGoal = w(this.checkDailyGoal, this),
        this._renderStreaks = w(this._renderStreaks, this),
        this._renderKarmaHelp = w(this._renderKarmaHelp, this),
        this.getProjectColor = w(this.getProjectColor, this),
        this._renderData = w(this._renderData, this),
        this._renderKarmaInfo = w(this._renderKarmaInfo, this),
        this._renderTotalStats = w(this._renderTotalStats, this),
        this.renderData = w(this.renderData, this),
        this.reRender = w(this.reRender, this),
        this.show = w(this.show, this),
        this.renderLink = w(this.renderLink, this),
        this.attach = w(this.attach, this),
        p.connect("model_item_completed", this.checkDailyGoal)
      }
      return e.prototype.full_width = 225,
      e.prototype.attach = function(e) {
        return $AEV(e, "click", function(t) {
          return function() {
            return t.goal_tooltip && (t.goal_tooltip.destory(),
            t.goal_tooltip = null ),
            t.show(e),
            !1
          }
        }(this))
      }
      ,
      e.prototype.hide = function() {
        if (this.cur_window)
          return a()
      }
      ,
      e.prototype.renderLink = function() {
        var e;
        return e = window.User.karma_disabled ? A({
          href: "#completed",
          c: "fixed_pos"
        }, SPAN({
          id: "s_completed_count"
        }, "-")) : A({
          href: "#completed",
          c: "fixed_pos"
        }, SPAN({
          id: "s_completed_count"
        }, "-")),
        this.attach(e),
        e
      }
      ,
      e.prototype.show = function() {
        var e, t, n;
        return $all("div", "completed_quick_viz").length > 0 ? this.hide() : (t = DIV({
          c: "completed_quick_viz"
        }),
        this.fetchData(t),
        n = {
          fn_left_offset: function(e, t) {
            var n;
            return n = $position($("karma_icon") || $("completed_items")).x,
            n -= 95,
            n - t.width / 2
          },
          fn_top_offset: function() {
            return window.FLUID_MINI ? 38 : 42
          },
          fn_arrow_left: function() {
            var e;
            return e = $position($("karma_icon") || $("completed_items")).x
          },
          fixed_pos: !0
        },
        m.show(_("Your Productivity"), t, 300, 315, n),
        $winSize().h < 780 ? (e = s().g_window,
        $addClass(e, "limit_karma_window"),
        $setHeight(e, $winSize().h - 75)) : void 0)
      }
      ,
      e.prototype.reRender = function() {
        var e;
        if (e = $all("div", "completed_quick_viz"),
        e.length > 0)
          return this.fetchData(e[0])
      }
      ,
      e.prototype.fetchData = function(e) {
        var t;
        return $replace(e, l.cssSpinner()),
        t = function(t) {
          return function() {
            var n, r;
            return r = window.User,
            n = $requestJSON("/API/v7/completed/get_stats"),
            n.addCallback(function(n) {
              return t.renderData(n, e),
              window.User.karma = n.karma,
              window.User.karma_trend = n.karma_trend,
              p.sendSignal("karma_updated")
            }),
            n.addErrback(t.hide),
            n.sendReq({
              token: window.User.token,
              as_karma_graph: 0
            })
          }
        }(this),
        setTimeout(t, 200)
      }
      ,
      e.prototype.renderData = function(e, t) {
        var n, r;
        return $replace(t, null ),
        this.data_project_colors = e.project_colors,
        $add(t, this._renderTotalStats(e)),
        $add(t, DIV({
          c: "separator"
        })),
        window.User.karma_disabled || ($add(t, this._renderKarmaInfo(e)),
        $add(t, DIV({
          c: "separator"
        }))),
        n = e.goals || {},
        r = {
          str_caption: _("Completed last %s days").replace("%s", "7")
        },
        this._renderData(e.days_items, t, r, n.daily_goal || 0),
        $add(t, DIV({
          c: "separator"
        })),
        r = {
          str_caption: _("Completed last %s weeks").replace("%s", "4"),
          check_premium: !0
        },
        this._renderData(e.week_items, t, r, n.weekly_goal || 0),
        $add(t, this._renderStreaks(e)),
        $add(t, this._renderKarmaHelp())
      }
      ,
      e.prototype._renderTotalStats = function(e) {
        var t, n, r;
        return t = DIV(),
        n = 1 === e.completed_count ? _("completed task") : _("completed tasks"),
        $add(t, DIV({
          c: "completed_history_holder"
        }, r = A({
          href: "#completed"
        }, _("View all completed tasks")), B(e.completed_count || "0"), " ", n)),
        $AEV(r, "click", function() {
          return a(),
          p.sendSignal("completed_history.show"),
          !1
        }),
        t
      }
      ,
      e.prototype._renderKarmaInfo = function(e) {
        var t, n, r, o, i, s;
        return i = null ,
        o = e.karma_last_update,
        void 0 !== o && (o > 0 ? (s = _("%s on last update!"),
        o = "+" + o) : s = o < 0 ? _("%s on last update!") : _("No change on last update!"),
        i = $setHTML(SPAN({
          c: "desc"
        }), s.replace("%s", "<b>" + o + "</b>"))),
        n = DIV(H2(i, _("Karma Trend"))),
        $add(n, t = DIV({
          s: "width: 255; height: 70"
        })),
        u.render(t, e.karma_graph_data, 285, 70),
        $add(n, DIV({
          c: "karma_updates"
        }, r = A({
          href: "#"
        }, _("Karma Updates")))),
        $AEV(r, "click", g.showKarmaInfo),
        n
      }
      ,
      e.prototype._renderData = function(e, t, n, r) {
        var i, s, a, c, d, l, u, h, p, m, g, y, w, v, j, b, I, $, S, C, T, k, D, E, x, P, M, N, L, R, U, O, V, H, F, G, q;
        if (null == r && (r = 0),
        c = DIV(H2(n.str_caption)),
        $add(c, T = UL()),
        n.check_premium && !window.User.is_premium)
          return $add(T, LI({
            c: "promo"
          }, _("Only available for premium."), A({
            href: "/premium",
            target: "_blank"
          }, _("Upgrade now")))),
          $add(t, c),
          !1;
        for (d = {},
        m = 0,
        k = 0,
        P = e.length; k < P; k++)
          l = e[k],
          m = Math.max(l.total_completed, m);
        for (m = Math.max(r, m),
        h = this.full_width / 100,
        g = 0,
        D = 0,
        M = e.length; D < M; D++)
          l = e[D],
          a = 0 === m ? d[l.date] = 0 : d[l.date] = h * (l.total_completed / m) * 100,
          a > g && (g = a);
        for (I = {},
        E = 0,
        N = e.length; E < N; E++)
          for (l = e[E],
          C = d[l.date],
          y = C / 100,
          G = l.items,
          x = 0,
          L = G.length; x < L; x++)
            w = G[x],
            p = "" + l.date + "-" + w.id,
            I[p] = y * (w.completed / l.total_completed) * 100;
        for (S = function(e) {
          return parseInt(e.replace(/^0/, ""))
        }
        ,
        u = function(e) {
          var t;
          return e = e.split("-"),
          t = new Date(S(e[0]),S(e[1]) - 1,S(e[2])),
          o.getWeekdayShort(t)
        }
        ,
        V = 0,
        R = e.length; V < R; V++) {
          for (l = e[V],
          $ = l.date.indexOf("/") === -1 ? SPAN({
            c: "short_date"
          }, u(l.date)) : null ,
          j = DIV({
            c: "project_colors"
          }),
          0 === l.items.length && $add(j, DIV({
            c: "project_viz",
            s: "width: 1px"
          })),
          s = [],
          q = l.items,
          H = 0,
          U = q.length; H < U; H++)
            w = q[H],
            w = f.get(w.id) || w,
            p = "" + l.date + "-" + w.id,
            b = I[p],
            b && (v = this.getProjectColor(w, b),
            s.push(v));
          for (s.sort(function(e, t) {
            return e.color - t.color
          }),
          F = 0,
          O = s.length; F < O; F++)
            i = s[F],
            $add(j, i);
          $add(T, LI(j, $, B("" + l.total_completed)))
        }
        return this._addGoalLine(r, c, e, g, m, h),
        $add(t, c)
      }
      ,
      e.prototype.getProjectColor = function(e, t) {
        var n, r;
        return null == t && (t = 5),
        r = DIV({
          c: "project_viz"
        }),
        n = e.color,
        void 0 === n && this.data_project_colors && (n = this.data_project_colors[e.id]),
        void 0 !== n ? $setStyle(r, {
          backgroundColor: h.getHexCode(e),
          width: t
        }) : $setStyle(r, {
          backgroundColor: "#dddddd",
          width: t
        }),
        r.color = n || 0,
        r
      }
      ,
      e.prototype._renderKarmaHelp = function() {
        var e, t;
        return e = DIV({
          c: "karma_help"
        }, DIV(t = A({
          href: "#"
        }, _("Karma Settings and Goals")))),
        $AEV(t, "click", function() {
          return g.showPrefs("karma", _("Karma Settings and Goals"))
        }),
        e
      }
      ,
      e.prototype._renderStreaks = function(e) {
        var t, n, r, i, s, a, c, d;
        return (s = e.goals) ? (r = function(e) {
          return 1 === e ? _("1 day") : _("%s days").replace("%s", e)
        }
        ,
        i = function(e) {
          return 1 === e ? _("1 week") : _("%s weeks").replace("%s", e)
        }
        ,
        n = function(e) {
          var t, n;
          return n = new Date(e.start),
          n.setSeconds(59),
          n = o.format(n, !1, {
            with_year: !1
          }),
          t = new Date(e.end),
          t.setSeconds(59),
          t = o.format(t, !1, {
            with_year: !1
          }),
          n + " - " + t
        }
        ,
        c = function(e, t, o, s) {
          var a, c;
          return a = "daily" === s ? r : i,
          c = "" === o.end && "daily" === s ? _("Complete your goals to increase your streaks") : "" === o.end ? _("Longest") + ": -" : SPAN(_("Longest"), ": ", a(o.count), BR(), n(o)),
          DIV({
            c: "streak " + s
          }, e, B(a(t.count)), SPAN({
            c: "longest"
          }, c))
        }
        ,
        t = c(_("Daily Streak"), s.current_daily_streak, s.max_daily_streak, "daily"),
        window.User.is_premium ? d = c(_("Weekly Streak"), s.current_weekly_streak, s.max_weekly_streak, "weekly") : (d = null ,
        $addClass(t, "single_tile")),
        a = DIV({
          c: "streaks"
        }, t, d)) : null
      }
      ,
      e.prototype._addGoalLine = function(e, t, n, o, i, s) {
        var a, c, d, l, u, h, f;
        if (0 !== e)
          return c = document.createElement("canvas"),
          d = c.getContext("2d"),
          y(c, d),
          a = 20 * n.length + 12,
          c.width = 250,
          c.height = a + 17,
          y(c, d),
          $addClass(c, "goal_line"),
          l = s * (e / i) * 100,
          u = a + 5,
          d.strokeStyle = "#555555",
          d.fillStyle = "#555555",
          d.lineWidth = 1.5,
          f = 7,
          d.beginPath(),
          d.moveTo(l, f),
          d.lineTo(l, u),
          d.stroke(),
          d.closePath(),
          d.beginPath(),
          d.arc(l, f, 2, 0, 2 * Math.PI, !1),
          d.fill(),
          d.closePath(),
          d.beginPath(),
          d.arc(l, u, 2, 0, 2 * Math.PI, !1),
          d.fill(),
          d.closePath(),
          h = 7 === n.length ? _("Daily Goal") + ": " + e : _("Weekly Goal") + ": " + e,
          d.fillStyle = "#111111",
          d.font = "11px Sans-serif",
          d.fillText(h, 0, c.height - 5),
          $addClass(t, "goal_holder fixed_pos"),
          t.on_amitooltip_locate = function(e, n) {
            var r;
            return r = $gp(t, "div", "GB_Window"),
            r && (e -= r.scrollTop),
            [e, n]
          }
          ,
          r.showSimpleText(t, h, null , f - 15, l - 4),
          $ATT(t, c)
      }
      ,
      e.prototype.checkDailyGoal = function() {
        var e;
        if (e = window.User,
        !this.goal_tooltip && e.daily_goal && e.completed_today)
          return e.completed_today === e.daily_goal ? this.showDailyGoal() : void 0
      }
      ,
      e.prototype.showDailyGoal = function() {
        var e, t, n, r;
        if (e = $("s_completed_count"))
          return this.goal_tooltip = new i,
          this.goal_tooltip.init(),
          t = $random(["\ud83c\udf1f", "\ud83e\udd84", "\ud83d\ude80", "\ud83d\udc4f", "\ud83c\udf89", "\ud83d\udcc8", "\ud83d\udc4c"]),
          r = DIV({
            c: "tooltip_cnt"
          }, _("Daily goal achieved!") + " " + t),
          this.goal_tooltip.show(e.parentNode, r, 5),
          n = setTimeout(function(e) {
            return function() {
              if (e.goal_tooltip)
                return e.goal_tooltip.destory(),
                e.goal_tooltip = null
            }
          }(this), 3e4),
          $AEV(this.goal_tooltip.holder, "click", function(e) {
            return function() {
              return n && clearTimeout(n),
              e.goal_tooltip.destory()
            }
          }(this))
      }
      ,
      e
    }(),
    window.CompletedQuickVisualize = new d,
    t.exports = window.CompletedQuickVisualize
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "../opener/WindowOpener.js": 74,
    "../project_list/.coffee.ProjectColors.js": 85,
    "./.coffee.KarmaGraph.js": 26
  }],
  25: [function(e, t, n) {
    n.splitIntoDays = function(e) {
      var t, n, r, o, i, s, a;
      for (r = function(t, n) {
        var r, o, i;
        return o = e[n + 1],
        !!o && (r = t,
        i = o.completed_date,
        r.getDate() === i.getDate() && r.getMonth() === i.getMonth() && r.getYear() === i.getYear())
      }
      ,
      i = [],
      t = [],
      n = s = 0,
      a = e.length; s < a; n = ++s)
        o = e[n],
        t.push(o),
        r(o.completed_date, n) || (i.push({
          items: t,
          date: o.completed_date
        }),
        t = []);
      return i
    }
  }
  , {}],
  26: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = window.AmiTooltip,
    o = window.DateUtils,
    a = window.highDefCanvas,
    s = e("../themes/.coffee.Themes.js"),
    i = function() {
      function e() {
        this.renderWeekdays = c(this.renderWeekdays, this),
        this.renderXaxis = c(this.renderXaxis, this),
        this.renderBg = c(this.renderBg, this),
        this.renderPoints = c(this.renderPoints, this),
        this.calculateYPos = c(this.calculateYPos, this),
        this.calculateXPos = c(this.calculateXPos, this),
        this.render = c(this.render, this)
      }
      return e.prototype.x_axis_font_height = 10,
      e.prototype.x_axis_start = 10,
      e.prototype.fill_start = 22,
      e.prototype.graph_starts = 11,
      e.prototype.x_diff = 4,
      e.prototype.y_diff = 7,
      e.prototype.render = function(e, t, n, r) {
        var o, i;
        return t || (t = []),
        "neutral" === s.theme_name ? this.graph_color = "#535a5b" : this.graph_color = s.getPrimaryColor(),
        o = document.createElement("canvas"),
        i = o.getContext("2d"),
        o.width = n,
        o.height = r,
        a(o, i),
        e.appendChild(o),
        i.fillStyle = "#eeeeee",
        i.font = "" + this.x_axis_font_height + "px Helvetica",
        this.calculateYPos(t, this.graph_starts, r - this.graph_starts),
        this.calculateXPos(t, 5, n - 5),
        this.renderPoints(e, i, t, n, r),
        this.renderBg(e, i, t, n, r),
        this.renderWeekdays(i, t, n, r),
        this.renderXaxis(i, t, n, r)
      }
      ,
      e.prototype.calculateXPos = function(e, t, n) {
        var r, o, i, s, a, c, d, l, u;
        for (a = function(e) {
          return parseInt(e.replace(/^0/, ""))
        }
        ,
        o = Math.ceil(n / e.length) + 3,
        c = t,
        i = [],
        u = [],
        d = 0,
        l = e.length; d < l; d++)
          r = e[d],
          s = r.date.split("-"),
          r.date = new Date(a(s[0]),a(s[1]) - 1,a(s[2])),
          r.x_pos = c,
          u.push(c += o);
        return u
      }
      ,
      e.prototype.calculateYPos = function(e, t, n) {
        var r, o, i, s, a, c, d, l, u, h, f;
        for (n -= t,
        i = 1e5,
        a = 0,
        l = e.length; a < l; a++)
          r = e[a],
          r.karma_avg < i && (i = r.karma_avg);
        for (o = 1,
        c = 0,
        u = e.length; c < u; c++)
          r = e[c],
          r.y_pos = r.karma_avg - i,
          r.y_pos > o && (o = r.y_pos);
        for (s = n / o,
        f = [],
        d = 0,
        h = e.length; d < h; d++)
          r = e[d],
          r.y_pos = r.y_pos * s,
          r.y_pos = n - r.y_pos,
          f.push(r.y_pos_org = n - r.y_pos);
        return f
      }
      ,
      e.prototype.renderPoints = function(e, t, n) {
        var o, i, s, a, c, d, l, u, h, f, _, p;
        for (a = this.x_diff,
        c = this.y_diff,
        t.beginPath(),
        s = n[0],
        t.moveTo(s.x_pos + a, s.y_pos + c),
        d = 0,
        h = n.length; d < h; d++)
          o = n[d],
          o !== s && t.lineTo(o.x_pos + a, o.y_pos + c);
        for (t.lineTo(o.x_pos + a, s.y_pos + c),
        t.lineTo(s.x_pos + a, s.y_pos + c),
        t.closePath(),
        l = 0,
        f = n.length; l < f; l++)
          o = n[l],
          t.beginPath(),
          t.fillStyle = this.graph_color,
          t.arc(o.x_pos + a, o.y_pos + c, 2, 0, 2 * Math.PI, !1),
          t.fill(),
          t.closePath(),
          $add(e, i = DIV({
            s: "position: absolute; width: 20px; height: 20px;",
            c: "fixed_pos"
          })),
          i.style.marginLeft = o.x_pos + "px",
          i.style.marginTop = -o.y_pos_org - this.graph_starts - 19 + "px",
          r.showSimpleText(i, o.karma_avg || "0", null , -5, -2);
        for (t.lineWidth = 2,
        t.strokeStyle = this.graph_color,
        s = n[0],
        p = [],
        u = 0,
        _ = n.length; u < _; u++)
          o = n[u],
          o !== s && (t.beginPath(),
          t.moveTo(s.x_pos + a, s.y_pos + c),
          t.lineTo(o.x_pos + a, o.y_pos + c),
          t.stroke(),
          t.closePath(),
          p.push(s = o));
        return p
      }
      ,
      e.prototype.renderBg = function(e, t, n, r, o) {
        var i, a, c, d, l, u, h, f, _;
        for (h = o - 5 - this.x_axis_start,
        d = n[0],
        a = $last(n),
        l = this.x_diff,
        u = this.y_diff,
        t.beginPath(),
        t.moveTo(d.x_pos + l, h),
        t.lineTo(a.x_pos + l, h),
        i = [].concat(n).reverse(),
        f = 0,
        _ = i.length; f < _; f++)
          c = i[f],
          t.lineTo(c.x_pos + l, c.y_pos + u);
        return "neutral" === s.theme_name ? t.fillStyle = "#ececec" : t.fillStyle = this.hexToRgb(this.graph_color, .1),
        t.fill(),
        t.closePath()
      }
      ,
      e.prototype.renderXaxis = function(e, t, n, r) {
        var o, i, s, a, c, d, l;
        for (a = r - 5 - this.x_axis_start,
        e.strokeStyle = "#999999",
        e.lineWidth = .2,
        i = this.x_diff,
        s = this.y_diff,
        l = [],
        c = 0,
        d = t.length; c < d; c++)
          o = t[c],
          e.beginPath(),
          e.moveTo(o.x_pos + i, a + s),
          e.lineTo(o.x_pos + i, o.y_pos + s),
          e.stroke(),
          l.push(e.closePath());
        return l
      }
      ,
      e.prototype.renderWeekdays = function(e, t, n, r) {
        var i, s, a, c, d, l;
        for (a = r - 2,
        e.fillStyle = "#999999",
        l = [],
        c = 0,
        d = t.length; c < d; c++)
          i = t[c],
          s = o.getWeekdayShort(i.date),
          l.push(e.fillText(s, i.x_pos + 1, a));
        return l
      }
      ,
      e.prototype.hexToRgb = function(e, t) {
        var n;
        return n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
        "rgba(" + parseInt(n[1], 16) + ", " + parseInt(n[2], 16) + ", " + parseInt(n[3], 16) + ", " + t + ")"
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../themes/.coffee.Themes.js": 113
  }],
  27: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    l = window.MouseHover,
    o = window.ElementStore,
    r = window.DateistDateHelpers,
    w = window.imageSprite,
    p = e("../../components/agenda/RenderDateItems.js"),
    h = e("../../components/project_editor/.coffee.ProjectEditorManager.js"),
    u = e("../postpone/.coffee.Postpone.js"),
    m = e("../sortable/Sortable.js"),
    a = e("../items_utils/.coffee.ItemCommonEdits.js"),
    s = e("../generic_manager/GenericManagerUtils.js"),
    c = e("../../models/.coffee.ItemsModel.js"),
    f = e("../../models/.coffee.ProjectsModel.js"),
    y = e("../../models/.coffee.UtilModels.js"),
    d = e("../../models/.coffee.ModelUndo.js"),
    g = e("../../models/.coffee.StateModel.js"),
    i = function() {
      function e() {
        this.scrollCustom = v(this.scrollCustom, this),
        this.showUndo = v(this.showUndo, this),
        this.autoFocusInput = v(this.autoFocusInput, this),
        this.onEndToProject = v(this.onEndToProject, this),
        this.onDragToProject = v(this.onDragToProject, this),
        this.agendaOnStart = v(this.agendaOnStart, this),
        this.agendaOnDrag = v(this.agendaOnDrag, this),
        this.agendaOnEnd = v(this.agendaOnEnd, this),
        this.genericMakeSortable = v(this.genericMakeSortable, this),
        this.genericOnEnd = v(this.genericOnEnd, this),
        this.genericMouseDown = v(this.genericMouseDown, this),
        this.labelsMakeSortable = v(this.labelsMakeSortable, this),
        this.filtersMakeSortable = v(this.filtersMakeSortable, this),
        this.projectListMakeSortable = v(this.projectListMakeSortable, this),
        this.projectEditorMakeSortable = v(this.projectEditorMakeSortable, this),
        this.agendaMakeSortable = v(this.agendaMakeSortable, this),
        this.attach = v(this.attach, this),
        this.attachHandler = v(this.attachHandler, this),
        this.handler = DIV({
          c: "drag_and_drop_handler"
        }, w("cmp_reorder_handler", 16, 23)),
        this.handler.onmousedown = this.genericMouseDown,
        this.handler.reuseable = !0,
        this.current_li = null ,
        g.set("drag_and_drop_mode", g.DragMode.waiting),
        this.undo_items = []
      }
      return e.prototype.DepAgenda = null ,
      e.prototype.DepProjectList = null ,
      e.prototype.DepFiltersList = null ,
      e.prototype.DepLabelsList = null ,
      e.prototype.DepLeftMenuTabs = null ,
      e.prototype.attachHandler = function(e) {
        return this.current_li = e,
        $child(e, "div", "arrow") ? $addClass(this.handler, "extra_arrow_marigin") : $removeClass(this.handler, "extra_arrow_marigin"),
        $ATT(e, this.handler)
      }
      ,
      e.prototype.attach = function(e, t) {
        var n, r;
        if (null == t && (t = {}),
        r = function(t) {
          return function() {
            return g.get("drag_and_drop_mode") !== g.DragMode.reordering && (l.clearCurrentTimeout(),
            t.attachHandler(e))
          }
        }(this),
        n = function(e) {
          return function() {
            return $remove(e.handler)
          }
        }(this),
        l.attach(e, "drag_and_drop_" + e.json.id, r, n, 100),
        t.trigger_mouse_over)
          return r()
      }
      ,
      e.prototype.agendaMakeSortable = function(e) {
        return this.genericMakeSortable(this.DepAgenda.get(), e)
      }
      ,
      e.prototype.projectEditorMakeSortable = function(e) {
        return this.current_editor = h.current_editor,
        this.genericMakeSortable(this.current_editor, e)
      }
      ,
      e.prototype.projectListMakeSortable = function(e) {
        return this.genericMakeSortable(this.DepProjectList, e)
      }
      ,
      e.prototype.filtersMakeSortable = function(e) {
        return this.genericMakeSortable(this.DepFiltersList, e)
      }
      ,
      e.prototype.labelsMakeSortable = function(e) {
        return this.genericMakeSortable(this.DepLabelsList, e)
      }
      ,
      e.prototype.genericMouseDown = function(e) {
        var t;
        return t = this.current_li.json.manager_type,
        $hasClass(this.current_li, "agenda_item") ? this.agendaMakeSortable(e) : $hasClass(this.current_li, "task_item") || "project_editor" === t ? this.projectEditorMakeSortable(e) : "filters" === this.DepLeftMenuTabs.getCurrentTab() ? this.filtersMakeSortable(e) : "labels" === this.DepLeftMenuTabs.getCurrentTab() ? this.labelsMakeSortable(e) : this.projectListMakeSortable(e)
      }
      ,
      e.prototype.genericOnEnd = function() {
        return g.set("drag_and_drop_mode", g.DragMode.waiting),
        this.current_editor = null ,
        this.sortable.onEnd(),
        this.autoFocusInput()
      }
      ,
      e.prototype.genericMakeSortable = function(e, t) {
        var n, r, o, i, a, c, l, u, h, _, p, y, w, v, j, b, I, A;
        if (e.save_indent = !1,
        this.handler.onmousedown = this.genericMouseDown,
        r = $parent(this.handler, "li"),
        "ProjectEditor" === e.list_class)
          for (_ = [],
          n = $all("li", "task_item"),
          A = $all("li", "task_item"),
          v = 0,
          b = A.length; v < b; v++)
            w = A[v],
            $hasClass(w, "history_item") || ($hasClass(w, "reorder_item") || w.json && !$isHidden(w)) && _.push(w);
        else
          _ = e === this.DepAgenda.get() ? e.getSortableItems() : e.getAllRenrededItems(!0);
        if (e.undo_reorder_intent) {
          for (a = [],
          j = 0,
          I = _.length; j < I; j++)
            i = _[j],
            i.json && a.push(i.json);
          this.undo_items = d.markCheckpoint(a, e.undo_reorder_intent).items
        }
        return this.sortable = y = new m(_,e),
        this.project_items = null ,
        c = !1,
        o = null ,
        l = y.onDrag,
        u = y.onEnd,
        h = y.onStart,
        p = !0,
        "ProjectEditor" === e.list_class ? (this.project_items = this.calculateProjectListXY(),
        this.list_class = e,
        l = this.onDragToProject,
        u = this.onEndToProject,
        c = !0) : e === this.DepProjectList || e === this.DepFiltersList || e === this.DepLabelsList ? (u = function(t) {
          return function() {
            var n;
            return n = t.sortable.cur_child,
            t.genericOnEnd(),
            e.saveOrder(),
            t.showUndo(e),
            e.arrows && e.arrows.updateArrows(),
            s.updateParentIds(r, f, n)
          }
        }(this),
        e === this.DepProjectList ? c = !0 : this.sortable.set_indent = !1,
        o = function(e, t, n) {
          return ICE.$setTop(e, n.y + $("left_menu").scrollTop - $scrollTop() - 20)
        }
        ) : e === this.DepAgenda.get() && (u = this.agendaOnEnd,
        h = this.agendaOnStart,
        l = this.agendaOnDrag,
        this.sortable.set_indent = !1),
        ICE.$dnd.dragAble(r, {
          handler: this.handler,
          move_x: c,
          on_start: h,
          on_drag: l,
          scroll_on_overflow: p,
          scroll_custom: this.scrollCustom,
          custom_set_y: o,
          on_end: u
        }),
        g.set("drag_and_drop_mode", g.DragMode.reordering),
        ICE.$dnd._start(this.handler, t),
        $preventDefault(t),
        !1
      }
      ,
      e.prototype.agendaOnEnd = function(e) {
        var t, n, o, i, s, d, l, h, f, m, g, y, w;
        if (t = ICE.$dnd.current_root,
        o = t.json,
        this.genericOnEnd(e),
        this.postpone_box && (m = $hasClass(this.postpone_box, "will_drop_bg"),
        $remove(this.postpone_box),
        m))
          return void u.postPoneUpdate([t], !0);
        for ($removeClass(t, "moved"),
        f = $parent(t, "ul"),
        i = $hasClass(f, "is_filtered"),
        l = {},
        h = 1,
        w = f.childNodes,
        g = 0,
        y = w.length; g < y; g++)
          s = w[g],
          $hasClass(s, "moved") || s.json && s.json.id && (l[s.json.id] = h++);
        return n = o.due_date,
        d = f.day_date,
        n && d && (p.isSameDay(n, d) || (a.markForUndo([o], "postpone", _("Date updated")),
        o = c.update(o.id, {
          due_date: r.inherit_date(d, n),
          day_order: l[o.id]
        }))),
        i || c.updateDayOrders(l),
        this.DepAgenda.get().refresh()
      }
      ,
      e.prototype.agendaOnDrag = function() {
        var e, t, n, r;
        if (this.sortable.onDrag(),
        this.postpone_box)
          return r = $position(this.postpone_box).y,
          t = ICE.$dnd.mouse_pos || $mousePos(),
          n = t.y,
          e = r - n,
          e < 14 && e > -60 ? $addClass(this.postpone_box, "will_drop_bg") : $removeClass(this.postpone_box, "will_drop_bg")
      }
      ,
      e.prototype.agendaOnStart = function() {
        var e, t, n, r, o, i, s, a;
        e = ICE.$dnd.current_root,
        r = e.json,
        s = $parent(e, "ul");
        try {
          a = y.getNewDate(r, !0),
          i = a[0],
          o = a[1],
          t = a[2],
          n = a[3]
        } catch (e) {
          t = ""
        }
        return this.postpone_box = DIV({
          id: "postpone_box"
        }, $setHTML(SPAN(), _("Drop to postpone: <b>%s</b>").replace("%s", t))),
        $setOpacity(this.postpone_box, 0),
        $addAfter(this.postpone_box, s),
        $fx.fadeIn(this.postpone_box),
        this.sortable.onStart()
      }
      ,
      e.prototype.calculateProjectListXY = function() {
        var e, t, n, r, o, i;
        for (r = [],
        t = this.DepProjectList.getAllRenrededItems(!0, !1),
        t.push($("filter_inbox")),
        t.push($("filter_team_inbox")),
        o = 0,
        i = t.length; o < i; o++)
          e = t[o],
          n = $position(e),
          n.x_max = n.x + e.offsetWidth,
          n.y_max = n.y + e.offsetHeight,
          n.project = e,
          r.push(n);
        return r
      }
      ,
      e.prototype.onDragToProject = function() {
        var e, t, n, r, o, i, s, a, c;
        if (this.sortable.onDrag(),
        !this.current_li.json.manager_type) {
          for (e = ICE.$dnd.mouse_pos || $mousePos(),
          t = e.x,
          n = e.y,
          n += $("left_menu").scrollTop - $scrollTop(),
          this.drop_to_project && ($removeClass(this.drop_to_project, "will_drop_bg"),
          this.drop_to_project = null ),
          a = this.project_items,
          c = [],
          i = 0,
          s = a.length; i < s; i++) {
            if (o = a[i],
            r = t >= o.x && t <= o.x_max,
            r = r && n >= o.y && n <= o.y_max) {
              $addClass(o.project, "will_drop_bg"),
              this.drop_to_project = o.project;
              break
            }
            c.push(void 0)
          }
          return c
        }
      }
      ,
      e.prototype.onEndToProject = function() {
        var e, t, n, r, i, d, u, h, f, _, p, m, y, w, v, j, b, I, $, A;
        for (g.set("drag_and_drop_mode", g.DragMode.waiting),
        A = this.project_items,
        m = 0,
        j = A.length; m < j; m++)
          _ = A[m],
          $removeClass(_.project, "will_drop_bg");
        if (u = ICE.$dnd.current_root,
        t = this.sortable.cur_child,
        n = this.sortable.cur_child,
        this.sortable.onEnd(),
        r = $parent(u, "div", "project_editor_instance"),
        r && (r = o.get(r, "editor")),
        this.drop_to_project) {
          for (d = [u],
          t && (d = d.concat(t)),
          p = {},
          f = p[u.json.project_id] = [u.json.id],
          y = 0,
          b = t.length; y < b; y++)
            e = t[y],
            f.push(e.json.id);
          for (a.moveItems(p, this.drop_to_project.json.id),
          w = 0,
          I = d.length; w < I; w++)
            i = d[w],
            $remove(i);
          this.drop_to_project = null ,
          this.DepAgenda.get().updateCounters()
        } else if (r && this.current_editor !== r) {
          for (c.update(u.json.id, {
            project_id: r.project_id
          }),
          h = r.renderItem(u.json),
          $swap(u, u = h),
          v = 0,
          $ = t.length; v < $; v++)
            e = t[v],
            $swap(e, r.renderItem(e.json));
          s.showHideChildren($AF(r.current_list.childNodes)),
          r.saveOrder(),
          this.current_editor.arrows.updateArrows(),
          r.arrows.updateArrows()
        } else
          this.current_editor.saveOrder(),
          this.showUndo(this.current_editor),
          this.current_editor.arrows.updateArrows(),
          s.updateParentIds(u, c, n);
        return this.autoFocusInput(),
        l.clearCurrentTimeout(),
        this.attachHandler(u)
      }
      ,
      e.prototype.autoFocusInput = function() {
        var e;
        if (this.current_li.json.manager_type && (e = $child(this.current_li, null , "richtext_editor")))
          return e.proxyFocus()
      }
      ,
      e.prototype.showUndo = function(e) {
        return e.undo_reorder_intent && a.markForUndo(this.undo_items, e.undo_reorder_intent, _("Order changed")),
        this.undo_items = []
      }
      ,
      e.prototype.updateDayStyles = function() {
        var e, t, n, r, o, i, s, a, c, d, l, u;
        for (d = $all("h2", "section_header"),
        u = [],
        i = 0,
        a = d.length; i < a; i++) {
          for (n = d[i],
          t = n.parentNode,
          o = t.nextSibling,
          e = 0,
          l = o.childNodes,
          s = 0,
          c = l.length; s < c; s++)
            r = l[s],
            r.json && r.json.id && (e += 1);
          0 === e ? $hasClass(n, "overdue") ? ($remove(t),
          u.push($remove(o))) : u.push(void 0) : u.push($removeClass(t, "no_tasks"))
        }
        return u
      }
      ,
      e.prototype.scrollCustom = function(e, t) {
        var n;
        return n = this.scrollObject(e),
        n.scrollBy ? n.scrollBy(0, t) : n.scrollTop += t
      }
      ,
      e.prototype.scrollObject = function(e) {
        var t, n;
        return t = $("left_menu"),
        n = $position(t),
        e.x >= n.x - 50 && e.x <= n.x + t.offsetWidth ? t : window
      }
      ,
      e
    }(),
    window.DragAndDrop = new i,
    t.exports = window.DragAndDrop
  }
  , {
    "../../components/agenda/RenderDateItems.js": 20,
    "../../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ModelUndo.js": 156,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.StateModel.js": 164,
    "../../models/.coffee.UtilModels.js": 172,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../postpone/.coffee.Postpone.js": 77,
    "../sortable/Sortable.js": 108
  }],
  28: [function(e, t, n) {
    (function(t) {
      "use strict";
      function r(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
      }
      function o() {
        for (var e = ["DateUtils", "Dateist", "DateistDateHelpers", "DateistUtils"], n = t ? t : window, r = e, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
          var s;
          if (o) {
            if (i >= r.length)
              break;
            s = r[i++]
          } else {
            if (i = r.next(),
            i.done)
              break;
            s = i.value
          }
          var a = s;
          void 0 === n[a] && console.log("[warning] Missing global dependency: " + a)
        }
        void 0 === n.todoist ? console.log("Programming error: filter lang file is not loaded properly") : void 0 === n.todoist.filteri18n && console.log("Programming error: filter lang file is not loaded properly")
      }
      function i(e) {
        b = e
      }
      function s(e) {
        o();
        var t = window.User.id
          , n = window.LANG ? window.LANG : "en";
        b || (b = new _.Lexer(n));
        for (var r = e.split(","), i = [], s = 0; s < r.length; s++) {
          var c = r[s]
            , d = b.tokenize(c)
            , l = d.filter(function(e) {
            return e instanceof y.UnrecognizedSymbol
          });
          if (l.length > 0) {
            var u = l[0]
              , h = r.map(function(e) {
              return e.length
            }).slice(0, s).reduce(function(e, t) {
              return e + t
            }, u.index);
            throw new j.UnrecognizedSymbolError(e,h,u.matchedStr)
          }
          var f = m.buildQueryTree(d)
            , p = a(f, t)
            , g = v.create(d, f, p, n);
          i = i.concat(g)
        }
        return i
      }
      function a(e, t) {
        var n = f.getAllOwn();
        d(e) && (n = l(e),
        e = u(e));
        var r = n.filter(function(n) {
          return e.eval(n, t)
        });
        return r
      }
      function c(e) {
        return e instanceof y.ToMe || e instanceof y.ToOthers || e instanceof y.AssignedTo || e instanceof y.AssignedBy || e instanceof y.Shared || e instanceof y.Assigned || e instanceof y.ViewAll || e instanceof y.Search || e instanceof y.All
      }
      function d(e) {
        return e.exist(function(e) {
          return c(e.token)
        })
      }
      function l(e) {
        var t = f.getAllOwn();
        return e.exist(function(e) {
          return e.token instanceof y.ToMe
        }) && (t = t.concat(f.getAssignedToMe())),
        e.exist(function(e) {
          return e.token instanceof y.ToOthers
        }) && (t = t.concat(f.getAssignedToOthers())),
        e.exist(function(e) {
          return e.token instanceof y.ViewAll || e.token instanceof y.Search || e.token instanceof y.AssignedTo || e.token instanceof y.AssignedBy || e.token instanceof y.Shared || e.token instanceof y.Assigned || e.token instanceof y.All
        }) && (t = t.concat(f.getAll())),
        e.exist(function(e) {
          return e.token instanceof y.Search
        }) && (t = t.concat(f.getAll(!1))),
        Array.from(new Set(t))
      }
      function u(e) {
        e = e.clone();
        for (var t = e.find(function(e) {
          return !c(e.token)
        }), n = t, r = Array.isArray(n), o = 0, n = r ? n : n[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (o >= n.length)
              break;
            i = n[o++]
          } else {
            if (o = n.next(),
            o.done)
              break;
            i = o.value
          }
          var s = i;
          s._mark = !0
        }
        for (var a = e.leafNodes(), d = Array.isArray(a), l = 0, a = d ? a : a[Symbol.iterator](); ; ) {
          var u;
          if (d) {
            if (l >= a.length)
              break;
            u = a[l++]
          } else {
            if (l = a.next(),
            l.done)
              break;
            u = l.value
          }
          var h = u;
          if (c(h.token) && h.parent && h.parent.token instanceof y.And)
            for (var f = h.parent.leafNodes(), _ = Array.isArray(f), p = 0, f = _ ? f : f[Symbol.iterator](); ; ) {
              var g;
              if (_) {
                if (p >= f.length)
                  break;
                g = f[p++]
              } else {
                if (p = f.next(),
                p.done)
                  break;
                g = p.value
              }
              var w = g;
              w._mark = !1
            }
        }
        for (var v = e.leafNodes(), j = Array.isArray(v), b = 0, v = j ? v : v[Symbol.iterator](); ; ) {
          var I;
          if (j) {
            if (b >= v.length)
              break;
            I = v[b++]
          } else {
            if (b = v.next(),
            b.done)
              break;
            I = b.value
          }
          var $ = I;
          if ($._mark) {
            var A = new m.QueryTree(new y.And);
            $.parent.left === $ ? $.parent.setLeft(A) : $.parent.setRight(A),
            A.setLeft($),
            A.setRight(new m.QueryTree(new y.FromDefaultSource))
          }
        }
        return e
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.setLexer = i,
      n.filter = s,
      n.requireDataSourceChange = d,
      n.addDefaultDatasourceCondition = u;
      var h = e("../../models/.coffee.ItemsModel.js")
        , f = r(h)
        , _ = e("./.es6.lexer")
        , p = e("./.es6.parser")
        , m = r(p)
        , g = e("./.es6.token")
        , y = r(g)
        , w = e("./.es6.section")
        , v = r(w)
        , j = e("./.es6.errors")
        , b = (e("es6-map"),
      void 0)
    }
    ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "./.es6.errors": 29,
    "./.es6.lexer": 31,
    "./.es6.parser": 32,
    "./.es6.section": 33,
    "./.es6.token": 34,
    "es6-map": "es6-map"
  }],
  29: [function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    n.ProgrammingError = function e(t) {
      r(this, e),
      this.messages = t,
      Error.call(this),
      Error.captureStackTrace && Error.captureStackTrace(this)
    }
    ,
    n.UnrecognizedSymbolError = function e(t, n, o) {
      r(this, e),
      Error.call(this),
      Error.captureStackTrace && Error.captureStackTrace(this),
      this.queryString = t,
      this.index = n,
      this.badSymbol = o,
      this.message = "UnrecognizedSymbolError: " + o
    }
    ,
    n.GrammarError = function e(t) {
      r(this, e),
      Error.call(this),
      Error.captureStackTrace && Error.captureStackTrace(this);
      var n = t.map(function(e) {
        return e.constructor.name + '("' + e.matchedStr + '")'
      }).join(" ");
      this.message = "GrammarError (tokens: " + n + ")"
    }
  }
  , {}],
  30: [function(e, t, n) {
    (function(t) {
      "use strict";
      function r(e) {
        var r = void 0;
        return r = "undefined" != typeof n && null !== n ? t.todoist.filteri18n : window.todoist.filteri18n,
        e = e ? e.toLowerCase() : "en",
        r[e] ? r[e] : (console.log('[warn] filterist.i18n cannot load pattern for lang "' + e + '". English is loaded instead.'),
        r.en)
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.load = r,
      e("./i18n/en")
    }
    ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }
  , {
    "./i18n/en": 35
  }],
  31: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.DateistMatcher = n.Lexer = n.DateRexMatcher = n.RexMatcher = void 0;
    var i = e("./.es6.token")
      , s = r(i)
      , a = e("./.es6.engine")
      , c = (r(a),
    e("./.es6.i18n"))
      , d = r(c)
      , l = e("../../models/.coffee.Collaborators.js")
      , u = (r(l),
    e("./.es6.errors"))
      , h = [!1, null , null ]
      , f = n.RexMatcher = function() {
      function e(t, n) {
        o(this, e),
        this.rex = t,
        this.tokenFn = n
      }
      return e.prototype.match = function(e, t) {
        var n = e.substring(t)
          , r = this.rex.exec(n);
        if (null === r)
          return h;
        if (0 !== r.index)
          throw new u.ProgrammingError("Programming Error: matcher should only match the beginning of string. (Rex: " + this.rex + ")");
        var o = r[0];
        t += o.length;
        var i = this.tokenFn(r);
        return [!0, i, t]
      }
      ,
      e
    }()
      , _ = n.DateRexMatcher = function() {
      function e(t, n, r, i) {
        o(this, e),
        this.rex = t,
        this.tokenFn = i,
        this.dateistLangs = n,
        this.dateistOpt = r
      }
      return e.prototype.match = function(e, t) {
        var n = e.substring(t)
          , r = this.rex.exec(n);
        if (null === r)
          return h;
        if (0 !== r.index)
          throw new u.ProgrammingError("Programming Error: matcher should only match the beginning of string. (Rex: " + this.rex + ")");
        var o = r[1]
          , i = void 0;
        try {
          var s = Dateist.parse_multiple(o, this.dateistLangs, this.dateistOpt);
          s.due_date && !s.is_recurring && (i = s.due_date)
        } catch (e) {}
        if (!i)
          return h;
        var a = r[0];
        return t += a.length,
        [!0, this.tokenFn(i), t]
      }
      ,
      e
    }()
      , p = (n.Lexer = function() {
      function e(t, n) {
        o(this, e),
        this.lang = t,
        this.opt = n ? n : {},
        this.initMatchers()
      }
      return e.prototype.tokenize = function(e) {
        for (var t = [], n = 0; n < e.length; ) {
          var r = this.nextToken(e, n)
            , o = r[0]
            , i = r[1];
          t.push(o),
          n = i
        }
        return t
      }
      ,
      e.prototype.nextToken = function(e, t) {
        for (var n = this.matchers, r = Array.isArray(n), o = 0, n = r ? n : n[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (o >= n.length)
              break;
            i = n[o++]
          } else {
            if (o = n.next(),
            o.done)
              break;
            i = o.value
          }
          var a = i
            , c = a.match(e, t)
            , d = c[0]
            , l = c[1]
            , u = c[2];
          if (d)
            return l.index = t,
            l.matchedStr = e.substring(t, u),
            [l, u]
        }
        var h = t;
        t += 1;
        e: for (; t < e.length; ) {
          for (var f = this.matchers, _ = Array.isArray(f), p = 0, f = _ ? f : f[Symbol.iterator](); ; ) {
            var m;
            if (_) {
              if (p >= f.length)
                break;
              m = f[p++]
            } else {
              if (p = f.next(),
              p.done)
                break;
              m = p.value
            }
            var g = m
              , y = g.match(e, t)
              , d = y[0];
            y[1],
            y[2];
            if (d)
              break e
          }
          t += 1
        }
        var w = e.substring(h, t)
          , v = new s.UnrecognizedSymbol(w);
        return v.index = h,
        v.matchedStr = w,
        [v, t]
      }
      ,
      e.prototype.initMatchers = function() {
        var e = d.load(this.lang).queryRex
          , t = void 0;
        t = window.DATEIST_LANG ? "en" == window.DATEIST_LANG ? ["en"] : [window.DATEIST_LANG, "en"] : "all_lang" === this.lang ? p : this.lang ? [this.lang.slice(0, 2), "en"] : ["en"];
        var n = {
          us_dates: DateUtils.isUsDates() ? 1 : 0,
          am_pm: DateUtils.isAmPm() ? 1 : 0
        };
        this.opt.now && (n.now_date = this.opt.now);
        var r = d.load(this.lang).specialCollaboratorVal
          , o = this;
        this.matchers = [].concat(e.LEFT.map(function(e) {
          return new f(e,function() {
            return new s.Left
          }
          )
        }), e.RIGHT.map(function(e) {
          return new f(e,function() {
            return new s.Right
          }
          )
        }), e.AND.map(function(e) {
          return new f(e,function() {
            return new s.And
          }
          )
        }), e.OR.map(function(e) {
          return new f(e,function() {
            return new s.Or
          }
          )
        }), e.NOT.map(function(e) {
          return new f(e,function() {
            return new s.Not
          }
          )
        }), e.VIEW_ALL.map(function(e) {
          return new f(e,function() {
            return new s.ViewAll
          }
          )
        }), e.NO_PRIORITY.map(function(e) {
          return new f(e,function() {
            return new s.NoPriority
          }
          )
        }), e.ALL.map(function(e) {
          return new f(e,function() {
            return new s.All
          }
          )
        }), e.TO_OTHERS.map(function(e) {
          return new f(e,function() {
            return new s.ToOthers
          }
          )
        }), e.TO_ME.map(function(e) {
          return new f(e,function() {
            return new s.ToMe
          }
          )
        }), e.NO_DUE_DATE.map(function(e) {
          return new f(e,function() {
            return new s.NoDueDate
          }
          )
        }), e.NO_LABELS.map(function(e) {
          return new f(e,function() {
            return new s.NoLabels
          }
          )
        }), e.ASSIGNED.map(function(e) {
          return new f(e,function() {
            return new s.Assigned
          }
          )
        }), e.SHARED.map(function(e) {
          return new f(e,function() {
            return new s.Shared
          }
          )
        }), e.DUE_RECURRING.map(function(e) {
          return new f(e,function() {
            return new s.DueRecurring
          }
          )
        }), e.LABEL.map(function(e) {
          return new f(e,function(e) {
            return new s.Label(e[1])
          }
          )
        }), e.OVERDUE.map(function(e) {
          return new f(e,function() {
            return o.opt.now ? new s.Overdue(o.opt.now) : new s.Overdue
          }
          )
        }), e.PROJECT.map(function(e) {
          return new f(e,function(e) {
            var t = e[1].trim();
            return new s.Project(t)
          }
          )
        }), e.PROJECT_SINGLE.map(function(e) {
          return new f(e,function(e) {
            var t = e[1].trim();
            return new s.ProjectSingle(t)
          }
          )
        }), e.SEARCH.map(function(e) {
          return new f(e,function(e) {
            var t = e[1].trim();
            return new s.Search(t)
          }
          )
        }), e.PRIORITY.map(function(e) {
          return new f(e,function(e) {
            var t = parseInt(e[1], 10);
            return new s.Priority(t)
          }
          )
        }), e.WITHIN_DAYS.map(function(e) {
          return new f(e,function(e) {
            var t = parseInt(e[1], 10);
            return o.opt.now ? new s.WithinDays(t,o.opt.now) : new s.WithinDays(t)
          }
          )
        }), e.ASSIGNED_TO.map(function(e) {
          return new f(e,function(e) {
            var t = e[1].trim().toLowerCase();
            return r.ME.indexOf(t) != -1 ? new s.AssignedTo(s.COLLABORATOR_ME) : r.OTHERS.indexOf(t) != -1 ? new s.AssignedTo(s.COLLABORATOR_OTHERS) : new s.AssignedTo(t)
          }
          )
        }), e.ASSIGNED_BY.map(function(e) {
          return new f(e,function(e) {
            var t = e[1].trim().toLowerCase();
            return r.ME.indexOf(t) != -1 ? new s.AssignedBy(s.COLLABORATOR_ME) : r.OTHERS.indexOf(t) != -1 ? new s.AssignedBy(s.COLLABORATOR_OTHERS) : new s.AssignedBy(t)
          }
          )
        }), e.CREATED.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.Created(e)
          }
          )
        }), e.CREATED_BEFORE.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.CreatedBefore(e)
          }
          )
        }), e.CREATED_AFTER.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.CreatedAfter(e)
          }
          )
        }), e.DUE.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.Due(e)
          }
          )
        }), e.DUE_BEFORE.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.DueBefore(e)
          }
          )
        }), e.DUE_AFTER.map(function(e) {
          return new _(e,t,n,function(e) {
            return new s.DueAfter(e)
          }
          )
        })),
        this.matchers.push(new m(t,n)),
        this.sortMatchers()
      }
      ,
      e.prototype.sortMatchers = function() {
        this.matchers.sort(function(e, t) {
          return e instanceof m ? 1 : t instanceof m ? -1 : t.rex.source.length - e.rex.source.length || t.rex.source - e.rex.source
        })
      }
      ,
      e
    }(),
    ["en", "da", "pl", "zh", "ko", "ja", "de", "pt", "it", "es", "nl", "ru", "sv", "fr"])
      , m = n.DateistMatcher = function() {
      function e(t, n) {
        o(this, e),
        this.dateistLangs = t,
        this.dateistOpt = n
      }
      return e.prototype.match = function(e, t) {
        for (var n = e.substring(t), r = void 0, o = void 0, i = 30, a = 1; a <= n.length && a < i && [",", ")", "|", "&"].indexOf(n[a - 1]) === -1; a++) {
          var c = n.slice(0, a);
          try {
            var d = Dateist.parse_multiple(c, this.dateistLangs, this.dateistOpt);
            d.due_date && !d.is_recurring && (r = d,
            o = a)
          } catch (e) {}
        }
        return r ? (t += o,
        [!0, new s.Due(r.due_date), t]) : h
      }
      ,
      e
    }()
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "./.es6.engine": 28,
    "./.es6.errors": 29,
    "./.es6.i18n": 30,
    "./.es6.token": 34
  }],
  32: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function i(e) {
      var t = new u(e);
      return t.buildQueryTree()
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.Parser = n.CURSOR_END = n.QueryTree = void 0,
    n.buildQueryTree = i;
    var s = e("./.es6.token")
      , a = r(s)
      , c = e("./.es6.errors")
      , d = n.QueryTree = function() {
      function e(t) {
        o(this, e),
        this.token = t
      }
      return e.prototype.setLeft = function(e) {
        if (this.token.type !== a.TOKEN_TYPE_BINARY_OPERATOR && this.token.type !== a.TOKEN_TYPE_UNARY_OPEATOR)
          throw new c.ProgrammingError("Cannot attach children for token (type: " + this.token.type + ")");
        this.left = e,
        this.left.parent = this
      }
      ,
      e.prototype.setRight = function(e) {
        if (this.token.type !== a.TOKEN_TYPE_BINARY_OPERATOR)
          throw new c.ProgrammingError("Cannot attach children for token (type: " + this.token.type + ")");
        this.right = e,
        this.right.parent = this
      }
      ,
      e.prototype.hasChild = function() {
        return "left"in this || "right"in this
      }
      ,
      e.prototype.isLeaf = function() {
        return !this.hasChild()
      }
      ,
      e.prototype.toString = function() {
        return this.hasChild() ? this.right ? "(" + this.left + " " + this.token + " " + this.right + ")" : this.token.toString() + "(" + this.left.toString() + ")" : this.token.toString()
      }
      ,
      e.prototype.eval = function(e, t) {
        if (!this.hasChild())
          return this.token.eval(e, t);
        if (this.token instanceof a.And)
          return this.left.eval(e, t) && this.right.eval(e, t);
        if (this.token instanceof a.Or)
          return this.right.eval(e, t) || this.left.eval(e, t);
        if (this.token instanceof a.Not)
          return !this.left.eval(e, t);
        throw new c.ProgrammingError("Unrecognized operand token type")
      }
      ,
      e.prototype.traverseUp = function(e) {
        this.parent && (e(this.parent),
        this.parent.traverseUp(e))
      }
      ,
      e.prototype.traverseLeafs = function(e) {
        return this.isLeaf() ? void e(this) : (this.left && this.left.traverseLeafs(e),
        void (this.right && this.right.traverseLeafs(e)))
      }
      ,
      e.prototype.leafNodes = function() {
        var e = [];
        return this.traverseLeafs(function(t) {
          return e.push(t)
        }),
        e
      }
      ,
      e.prototype.parentNodes = function() {
        var e = [];
        return this.traverseUp(function(t) {
          return e.push(t)
        }),
        e
      }
      ,
      e.prototype.find = function(e) {
        var t = [];
        return e(this) && t.push(this),
        this.left && (t = t.concat(this.left.find(e))),
        this.right && (t = t.concat(this.right.find(e))),
        t
      }
      ,
      e.prototype.exist = function(e) {
        var t = this.find(e);
        return t.length > 0
      }
      ,
      e.prototype.clone = function() {
        var t = new e(this.token);
        if (this.isLeaf())
          return t;
        if (this.left) {
          var n = this.left.clone();
          t.setLeft(n)
        }
        if (this.right) {
          var r = this.right.clone();
          t.setRight(r)
        }
        return t
      }
      ,
      e
    }()
      , l = n.CURSOR_END = null
      , u = n.Parser = function() {
      function e(t) {
        o(this, e),
        this.tokens = t,
        this.cursor = 0,
        this.root = null
      }
      return e.prototype.next = function() {
        if (this.cursor >= this.tokens.length)
          return l;
        var e = this.tokens[this.cursor];
        return this.cursor = this.cursor + 1,
        e
      }
      ,
      e.prototype.peak = function() {
        return this.cursor >= this.tokens.length ? l : this.tokens[this.cursor]
      }
      ,
      e.prototype.buildQueryTree = function() {
        var e = this.expr()
          , t = this.next();
        if (t !== l)
          throw new c.GrammarError(this.tokens);
        return e
      }
      ,
      e.prototype.expr = function() {
        return this.expr4()
      }
      ,
      e.prototype.expr4 = function() {
        var e = this.expr3()
          , t = this.peak();
        if (t instanceof a.Or) {
          t = this.next();
          var n = new d(t);
          return n.setLeft(e),
          n.setRight(this.expr4()),
          n
        }
        return e
      }
      ,
      e.prototype.expr3 = function() {
        var e = this.expr2()
          , t = this.peak();
        if (t instanceof a.And) {
          t = this.next();
          var n = new d(t);
          return n.setLeft(e),
          n.setRight(this.expr3()),
          n
        }
        return e
      }
      ,
      e.prototype.expr2 = function() {
        if (this.peak()instanceof a.Not) {
          var e = this.next()
            , t = new d(e);
          return t.setLeft(this.expr2()),
          t
        }
        return this.expr1()
      }
      ,
      e.prototype.expr1 = function() {
        var e = this.next();
        if (e === l)
          throw new c.GrammarError(this.tokens);
        if (e.type === a.TOKEN_TYPE_OPERAND)
          return new d(e);
        if (e instanceof a.Left) {
          var t = this.expr();
          if (e = this.next(),
          !(e instanceof a.Right))
            throw new c.GrammarError(this.tokens);
          return t
        }
        throw new c.GrammarError(this.tokens)
      }
      ,
      e
    }()
  }
  , {
    "./.es6.errors": 29,
    "./.es6.token": 34
  }],
  33: [function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function o(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
      return [e.filter(t), e.filter(function(e) {
        return !t(e)
      })]
    }
    function a(e, t, n, r) {
      var o = d(e, n, t)
        , i = o[0]
        , s = o[1];
      if (i)
        return s;
      if (l(t))
        return [new A(n,w)];
      var a = m.load(r).resultTitle
        , c = h(a, e);
      if (u(t)) {
        var f = e.filter(function(e) {
          return e instanceof _.Search
        })[0]
          , p = new A(n,b,c);
        return p.query = f.searchStr,
        [p]
      }
      return [new A(n,j,c)]
    }
    function c(e, t) {
      var n = t.find(function(t) {
        return t.token == e
      })[0]
        , r = n.parentNodes().filter(function(e) {
        return e.token instanceof _.Not
      });
      return r.length % 2 == 1
    }
    function d(e, t, n) {
      e = e.filter(function(e) {
        return n.exist(function(t) {
          return t.token == e
        })
      });
      var r = e.filter(function(e) {
        return e instanceof _.Overdue && !c(e, n)
      })
        , o = e.filter(function(e) {
        return e instanceof _.WithinDays && e.days <= 7 && !c(e, n)
      })
        , i = e.filter(function(e) {
        return e instanceof _.WithinDays && e.days > 7 && !c(e, n)
      })
        , a = e.filter(function(e) {
        return e instanceof _.Due && !c(e, n)
      });
      if (0 === r.length && 0 === o.length && 0 === i.length && 0 === a.length)
        return [!1, null ];
      o.length > 0 ? (o.sort(function(e, t) {
        return t.days - e.days
      }),
      o = o[0]) : o = null ;
      var d = t.slice()
        , l = [];
      if (r.length > 0) {
        var u = void 0
          , h = s(d, function(e) {
          return r[0].eval(e)
        });
        u = h[0],
        d = h[1],
        l.push(new A(u,v))
      }
      if (a.length > 0 || o) {
        var f = a.map(function(e) {
          return new A([],$,null ,e.dueDate)
        });
        if (o)
          for (var p = 0; p < o.days; p++) {
            var m = new Date;
            m.setDate(m.getDate() + p),
            f.push(new A([],$,null ,m))
          }
        for (var g = [], y = function(e) {
          var t = f[e];
          0 === g.filter(function(e) {
            return DateistDateHelpers.is_same_date(e.day_date, t.day_date)
          }).length && g.push(t)
        }
        , w = 0; w < f.length; w++)
          y(w);
        g.sort(function(e, t) {
          return e.day_date - t.day_date
        });
        for (var j = function() {
          if (S) {
            if (C >= b.length)
              return "break";
            T = b[C++]
          } else {
            if (C = b.next(),
            C.done)
              return "break";
            T = C.value
          }
          var e = T
            , t = void 0
            , n = s(d, function(t) {
            return DateistDateHelpers.is_same_date(t.due_date, e.day_date)
          });
          t = n[0],
          d = n[1],
          e.items = t
        }
        , b = g, S = Array.isArray(b), C = 0, b = S ? b : b[Symbol.iterator](); ; ) {
          var T, k = j();
          if ("break" === k)
            break
        }
        l = l.concat(g)
      }
      if (i.length > 0) {
        for (var D = new A([],I,null ), E = function() {
          if (P) {
            if (M >= x.length)
              return "break";
            N = x[M++]
          } else {
            if (M = x.next(),
            M.done)
              return "break";
            N = M.value
          }
          var e = N
            , t = void 0
            , n = s(d, function(t) {
            return e.eval(t)
          });
          t = n[0],
          d = n[1],
          D.items = D.items.concat(t)
        }
        , x = i, P = Array.isArray(x), M = 0, x = P ? x : x[Symbol.iterator](); ; ) {
          var N, L = E();
          if ("break" === L)
            break
        }
        D.items.length > 0 && (l = l.concat(D))
      }
      return d.length > 0 ? [!1, null ] : [!0, l]
    }
    function l(e) {
      return e.isLeaf() && e.token instanceof _.ViewAll
    }
    function u(e) {
      return e.isLeaf() && e.token instanceof _.Search
    }
    function h(e, t) {
      function n(t) {
        return t instanceof _.Search ? e.SEARCH.replace("$SEARCH_STR", '"' + t.searchStr + '"') : t instanceof _.WithinDays ? e.WITHIN_DAYS.replace("$DAYS_NUM", t.days) : t instanceof _.Priority ? e.PRIORITY.replace("$PRIORITY_LEVEL", t.level) : t instanceof _.NoDueDate ? e.NO_DUE_DATE : t instanceof _.ViewAll ? e.VIEW_ALL : t instanceof _.NoLabels ? e.NO_LABELS : t instanceof _.ToOthers ? e.TO_OTHERS : t instanceof _.ToMe ? e.TO_ME : t instanceof _.Overdue ? e.OVERDUE : t.matchedStr
      }
      var r = t.map(n).join("");
      return r.length < 50 ? r : (r = t.map(function(e) {
        return e.matchedStr
      }).join(""),
      r.length > 50 && (r = r.slice(0, 50) + " ..."),
      r)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.Section = n.VIEW_TYPE_DAY_VIEW_FIXED = n.VIEW_TYPE_DAY_VIEW_SPAN = n.VIEW_TYPE_SEARCH = n.VIEW_TYPE_FLAT = n.VIEW_TYPE_OVERDUE = n.VIEW_TYPE_VIEW_ALL = void 0,
    n.create = a;
    var f = e("./.es6.token")
      , _ = o(f)
      , p = e("./.es6.i18n")
      , m = o(p)
      , g = e("./.es6.errors")
      , y = r(g)
      , w = n.VIEW_TYPE_VIEW_ALL = "view_all"
      , v = n.VIEW_TYPE_OVERDUE = "overdue"
      , j = n.VIEW_TYPE_FLAT = "flat_view"
      , b = n.VIEW_TYPE_SEARCH = "search"
      , I = n.VIEW_TYPE_DAY_VIEW_SPAN = "day_view_span"
      , $ = n.VIEW_TYPE_DAY_VIEW_FIXED = "day_view_fixed"
      , A = n.Section = function e(t, n, r, o) {
      if (i(this, e),
      n === $ && !o)
        throw new y.default("Fix day view required date");
      this.items = t,
      this.view = n,
      this.name = r,
      this.day_date = o
    }
  }
  , {
    "./.es6.errors": 29,
    "./.es6.i18n": 30,
    "./.es6.token": 34
  }],
  34: [function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function o(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function c(e, t) {
      return e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate()
    }
    function d(e) {
      return e = new Date(e.getTime()),
      e.setHours(23),
      e.setMinutes(59),
      e.setSeconds(59),
      e.setMilliseconds(999),
      e
    }
    function l(e) {
      return e = new Date(e.getTime()),
      e.setHours(0),
      e.setMinutes(0),
      e.setSeconds(0),
      e.setMilliseconds(0),
      e
    }
    function u(e) {
      var t = e.indexOf("@") > 0;
      if (t) {
        if (window.User.email === e)
          return new Set([window.User.id]);
        var n = w.getByEmail(e);
        return n ? new Set([n.id]) : new Set
      }
      return j.isNamePartialMatched(window.User.full_name, e) ? new Set([window.User.id]) : new Set(w.searchByName(e).map(function(e) {
        return e.id
      }))
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.FromDefaultSource = n.UnrecognizedSymbol = n.Shared = n.Assigned = n.AssignedBy = n.AssignedTo = n.Search = n.All = n.ViewAll = n.ToOthers = n.ToMe = n.WithinDays = n.Overdue = n.CreatedAfter = n.CreatedBefore = n.Created = n.DueRecurring = n.DueAfter = n.DueBefore = n.Due = n.NoDueDate = n.ProjectSingle = n.Project = n.NoLabels = n.Label = n.NoPriority = n.Priority = n.Or = n.And = n.Right = n.Left = n.Not = n.Token = n.COLLABORATOR_OTHERS = n.COLLABORATOR_ME = n.TOKEN_TYPE_PARATHESIS = n.TOKEN_TYPE_OPERAND = n.TOKEN_TYPE_UNARY_OPEATOR = n.TOKEN_TYPE_BINARY_OPERATOR = void 0;
    var h = e("../../models/.coffee.LabelsModel")
      , f = o(h)
      , _ = e("../../models/.coffee.ProjectsModel")
      , p = o(_)
      , m = e("../../models/.coffee.NotesModel")
      , g = o(m)
      , y = e("../../models/.coffee.Collaborators.js")
      , w = o(y)
      , v = e("../../utils/.es6.Utils.js")
      , j = o(v)
      , b = e("./.es6.errors")
      , I = r(b)
      , $ = n.TOKEN_TYPE_BINARY_OPERATOR = 0
      , A = n.TOKEN_TYPE_UNARY_OPEATOR = 1
      , S = n.TOKEN_TYPE_OPERAND = 2
      , C = n.TOKEN_TYPE_PARATHESIS = 3
      , T = n.COLLABORATOR_ME = Symbol("COLLABORATOR_ME")
      , k = n.COLLABORATOR_OTHERS = Symbol("COLLABORATOR_OTHERS")
      , D = n.Token = function() {
      function e() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? S : arguments[0]
          , n = arguments[1]
          , r = arguments[2];
        a(this, e),
        this.type = t,
        this.matchedStr = n,
        this.index = r
      }
      return e.prototype.toString = function() {
        return "" + this.constructor.name
      }
      ,
      e.prototype.eval = function(e, t) {
        throw new I.default(this.class + " did not implement eval")
      }
      ,
      e
    }();
    n.Not = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, A))
      }
      return s(t, e),
      t
    }(D),
    n.Left = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, C))
      }
      return s(t, e),
      t
    }(D),
    n.Right = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, C))
      }
      return s(t, e),
      t
    }(D),
    n.And = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, $))
      }
      return s(t, e),
      t
    }(D),
    n.Or = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, $))
      }
      return s(t, e),
      t
    }(D),
    n.Priority = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.level = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Priority(" + this.level + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return 5 - e.priority === this.level
      }
      ,
      t
    }(D),
    n.NoPriority = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "No Priority"
      }
      ,
      t.prototype.eval = function(e) {
        return -1 * e.priority + 5 === 4
      }
      ,
      t
    }(D),
    n.Label = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        r.name = n;
        var o = f.getByName(r.name.toLowerCase(), !1);
        return o.length > 0 && (r.label = o[0]),
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Label(" + this.name + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !!this.label && (e.labels && e.labels.indexOf(this.label.id) !== -1)
      }
      ,
      t
    }(D),
    n.NoLabels = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "NoLabels(" + this.name + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !e.labels || 0 === e.labels.length
      }
      ,
      t
    }(D),
    n.Project = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        r.name = n;
        var o = p.getByName(r.name);
        r.projectIDs = o.map(function(e) {
          return e.id
        });
        for (var s = o, c = Array.isArray(s), d = 0, s = c ? s : s[Symbol.iterator](); ; ) {
          var l;
          if (c) {
            if (d >= s.length)
              break;
            l = s[d++]
          } else {
            if (d = s.next(),
            d.done)
              break;
            l = d.value
          }
          var u = l
            , h = p.getChildren(u);
          r.projectIDs = r.projectIDs.concat(h.map(function(e) {
            return e.id
          }))
        }
        return r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Project(" + this.name + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !(!this.projectIDs || 0 === this.projectIDs.length) && this.projectIDs.indexOf(e.project_id) !== -1
      }
      ,
      t
    }(D),
    n.ProjectSingle = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        r.name = n;
        var o = p.getByName(r.name);
        return r.projectIDs = o.map(function(e) {
          return e.id
        }),
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "ProjectSingle(" + this.name + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !(!this.projectIDs || 0 === this.projectIDs.length) && this.projectIDs.indexOf(e.project_id) !== -1
      }
      ,
      t
    }(D),
    n.NoDueDate = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "NoDueDate"
      }
      ,
      t.prototype.eval = function(e) {
        return !("due_date_utc"in e && e.due_date_utc)
      }
      ,
      t
    }(D),
    n.Due = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.dueDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Due(" + this.dueDate + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return e.due_date && c(e.due_date, this.dueDate)
      }
      ,
      t
    }(D),
    n.DueBefore = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.queryDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "DueBefore"
      }
      ,
      t.prototype.eval = function(e) {
        return e.due_date && (c(e.due_date, this.queryDate) || e.due_date <= this.queryDate)
      }
      ,
      t
    }(D),
    n.DueAfter = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.queryDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "DueAfter"
      }
      ,
      t.prototype.eval = function(e) {
        return e.due_date && (c(e.due_date, this.queryDate) || e.due_date >= this.queryDate)
      }
      ,
      t
    }(D),
    n.DueRecurring = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "DueRecurring"
      }
      ,
      t.prototype.eval = function(e) {
        return e.date_string && Dateist.is_recurring(e.date_string, {
          lang: e.date_lang
        })
      }
      ,
      t
    }(D),
    n.Created = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.queryDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Created"
      }
      ,
      t.prototype.eval = function(e) {
        return c(e.date_added, this.queryDate)
      }
      ,
      t
    }(D),
    n.CreatedBefore = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.queryDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "CreatedBefore"
      }
      ,
      t.prototype.eval = function(e) {
        return c(e.date_added, this.queryDate) || e.date_added <= this.queryDate
      }
      ,
      t
    }(D),
    n.CreatedAfter = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.queryDate = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "CreatedAfter"
      }
      ,
      t.prototype.eval = function(e) {
        return c(e.date_added, this.queryDate) || e.date_added >= this.queryDate
      }
      ,
      t
    }(D),
    n.Overdue = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.now = n ? n : new Date,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Overdue"
      }
      ,
      t.prototype.eval = function(e) {
        return e.due_date && !c(this.now, e.due_date) && e.due_date.getTime() < this.now.getTime()
      }
      ,
      t
    }(D),
    n.WithinDays = function(e) {
      function t(n, r) {
        a(this, t);
        var o = i(this, e.call(this, S));
        return r || (r = new Date),
        o.days = n,
        o.from = new Date(r.getTime()),
        o.to = new Date(r.getTime()),
        o.to.setDate(o.from.getDate() + o.days - 1),
        o.from = l(o.from),
        o.to = d(o.to),
        o
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "WithinDays(" + this.days + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !!e.due_date && (e.due_date >= this.from && e.due_date <= this.to)
      }
      ,
      t
    }(D),
    n.ToMe = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "ToMe"
      }
      ,
      t.prototype.eval = function(e, t) {
        if (!t)
          throw new I.default("currentUID should be supplied to eval()");
        var n = p.get(e.project_id);
        return e.responsible_uid === t && n.shared
      }
      ,
      t
    }(D),
    n.ToOthers = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "ToOthers"
      }
      ,
      t.prototype.eval = function(e, t) {
        if (!t)
          throw new I.default("currentUID should be supplied to eval()");
        return e.responsible_uid && e.responsible_uid !== t && e.assigned_by_uid === t
      }
      ,
      t
    }(D),
    n.ViewAll = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "ViewAll"
      }
      ,
      t.prototype.eval = function(e) {
        return !0
      }
      ,
      t
    }(D),
    n.All = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "All"
      }
      ,
      t.prototype.eval = function(e) {
        return !0
      }
      ,
      t
    }(D),
    n.Search = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.searchStr = n,
        r.searchTokens = n.toLowerCase().split(" ").filter(function(e) {
          return e
        }),
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Search(" + this.searchStr + ")"
      }
      ,
      t.prototype.containsSearchTerms = function(e) {
        e = e.toLowerCase();
        var t = this.searchTokens.map(function(t) {
          return e.indexOf(t)
        });
        return t.indexOf(-1) === -1
      }
      ,
      t.prototype.eval = function(e) {
        if (this.containsSearchTerms(e.content))
          return !0;
        for (var t = g.getNotes(e.id, g.TYPE_ITEM_NOTE), n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator](); ; ) {
          var o;
          if (n) {
            if (r >= t.length)
              break;
            o = t[r++]
          } else {
            if (r = t.next(),
            r.done)
              break;
            o = r.value
          }
          var i = o;
          if (this.containsSearchTerms(i.content))
            return !0
        }
        return !1
      }
      ,
      t
    }(D),
    n.AssignedTo = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.collaboratorQuery = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "AssignedTo(" + this.collaboratorQuery + ")"
      }
      ,
      t.prototype.eval = function(e) {
        var t = p.get(e.project_id);
        if (!t.shared)
          return !1;
        if (this.collaboratorQuery === T)
          return e.responsible_uid === window.User.id;
        if (this.collaboratorQuery === k)
          return e.responsible_uid && e.responsible_uid !== window.User.id;
        var n = u(this.collaboratorQuery);
        return n.has(e.responsible_uid)
      }
      ,
      t
    }(D),
    n.AssignedBy = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.collaboratorQuery = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "AssignedBy(" + this.collaboratorQuery + ")"
      }
      ,
      t.prototype.eval = function(e) {
        var t = p.get(e.project_id);
        if (!t.shared)
          return !1;
        if (this.collaboratorQuery === T)
          return e.assigned_by_uid === window.User.id;
        if (this.collaboratorQuery === k)
          return e.assigned_by_uid && e.assigned_by_uid !== window.User.id;
        var n = u(this.collaboratorQuery);
        return n.has(e.assigned_by_uid) && e.responsible_uid
      }
      ,
      t
    }(D),
    n.Assigned = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Assigned"
      }
      ,
      t.prototype.eval = function(e) {
        var t = p.get(e.project_id);
        return t.shared && e.responsible_uid
      }
      ,
      t
    }(D),
    n.Shared = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "Shared"
      }
      ,
      t.prototype.eval = function(e) {
        var t = p.get(e.project_id);
        return t.shared
      }
      ,
      t
    }(D),
    n.UnrecognizedSymbol = function(e) {
      function t(n) {
        a(this, t);
        var r = i(this, e.call(this, S));
        return r.symbol = n,
        r
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "UnrecognizedSymbol(" + this.symbol + ")"
      }
      ,
      t.prototype.eval = function(e) {
        return !1
      }
      ,
      t
    }(D),
    n.FromDefaultSource = function(e) {
      function t() {
        return a(this, t),
        i(this, e.call(this, S))
      }
      return s(t, e),
      t.prototype.toString = function() {
        return "FromDefaultDataSource"
      }
      ,
      t.prototype.eval = function(e, t) {
        return !w.isProjectShared(e.project_id) || e.responsible_uid === t
      }
      ,
      t
    }(D)
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.LabelsModel": 154,
    "../../models/.coffee.NotesModel": 157,
    "../../models/.coffee.ProjectsModel": 159,
    "../../utils/.es6.Utils.js": 185,
    "./.es6.errors": 29
  }],
  35: [function(e, t, n) {
    (function(e) {
      "use strict";
      !function() {
        var t, r = {
          ALL: [/^\s*:all:\s*/i, /^\s*all\s*/i],
          AND: [/^\s*&\s*/i],
          ASSIGNED: [/^\s*assigned\s*/i],
          ASSIGNED_BY: [/^\s*assigned by:\s*([^()|&!,]+)\s*/i],
          ASSIGNED_TO: [/^\s*assigned to:\s*([^()|&!,]+)\s*/i, /^\s*\+\s*([^()|&!,]+)\s*/i],
          CREATED: [/^\s*created:\s*([^()|&!,]+)\s*/i],
          CREATED_AFTER: [/^\s*created after:\s*([^()|&!,]+)\s*/i],
          CREATED_BEFORE: [/^\s*created before:\s*([^()|&!,]+)\s*/i],
          DUE: [/^\s*due:\s*([^()|&!,]+)\s*/i],
          DUE_AFTER: [/^\s*due after:\s*([^()|&!,]+)\s*/i],
          DUE_BEFORE: [/^\s*due before:\s*([^()|&!,]+)\s*/i],
          DUE_RECURRING: [/^\s*recurring\s*/i],
          LABEL: [/^\s*label:\s*([^\s()|&!,]+)\s*/i, /^\s*@\s*([^\s()|&!,]+)\s*/i],
          LEFT: [/^\s*\(\s*/i],
          NOT: [/^\s*!\s*/i],
          NO_DUE_DATE: [/^\s*no due date\s*/i, /^\s*no date\s*/i],
          NO_LABELS: [/^\s*no labels\s*/i, /^\s*no label\s*/i],
          NO_PRIORITY: [/^\s*no priority\s*/i],
          OR: [/^\s*\|\s*/i],
          OVERDUE: [/^\s*over due\s*/i, /^\s*overdue\s*/i, /^\s*od\s*/i],
          PRIORITY: [/^\s*priority:\s*([1-4])\s*\s*/i, /^\s*priority\s*([1-4])\s*\s*/i, /^\s*p\s*([1-4])\s*\s*/i],
          PROJECT: [/^\s*##\s*([^()|&!,]+)\s*/i, /^\s*p:\s*([^()|&!,]+)\s*/i],
          PROJECT_SINGLE: [/^\s*project:\s*([^()|&!,]+)\s*/i, /^\s*#\s*([^()|&!,]+)\s*/i],
          RIGHT: [/^\s*\)\s*/i],
          SEARCH: [/^\s*search:\s*([^()|&!,]+)\s*/i, /^\s*q:\s*([^()|&!,]+)\s*/i],
          SHARED: [/^\s*shared\s*/i],
          TO_ME: [/^\s*:to me:\s*/i, /^\s*:to_me:\s*/i, /^\s*to me\s*/i],
          TO_OTHERS: [/^\s*:to others:\s*/i, /^\s*:to_others:\s*/i, /^\s*to others\s*/i],
          VIEW_ALL: [/^\s*view all\s*/i],
          WITHIN_DAYS: [/^\s*within\s*(\d+)\s*days\s*/i, /^\s*next\s*(\d+)\s*days\s*/i, /^\s*\s*(\d+)\s*days\s*/i]
        }, o = {
          ALL: [":all:", "all"],
          ASSIGNED: ["assigned"],
          ASSIGNED_BY: ["assigned by:$COLLABORATOR"],
          ASSIGNED_TO: ["assigned to:$COLLABORATOR", "+$COLLABORATOR"],
          CREATED: ["created:$DATE"],
          CREATED_AFTER: ["created after:$DATE"],
          CREATED_BEFORE: ["created before:$DATE"],
          DUE: ["due:$DATE"],
          DUE_AFTER: ["due after:$DATE"],
          DUE_BEFORE: ["due before:$DATE"],
          DUE_RECURRING: ["recurring"],
          LABEL: ["label:$LABEL_NAME", "@$LABEL_NAME"],
          NO_DUE_DATE: ["no due date", "no date"],
          NO_LABELS: ["no labels", "no label"],
          NO_PRIORITY: ["no priority"],
          OVERDUE: ["over due", "overdue", "od"],
          PRIORITY: ["priority $PRIORITY_LEVEL", "priority:$PRIORITY_LEVEL", "p$PRIORITY_LEVEL"],
          PROJECT: ["##$PROJECT_NAME", "p:$PROJECT_NAME"],
          PROJECT_SINGLE: ["project:$PROJECT_NAME", "#$PROJECT_NAME"],
          SEARCH: ["search:$SEARCH_STR", "q:$SEARCH_STR"],
          SHARED: ["shared"],
          TO_ME: [":to me:", ":to_me:", "to me"],
          TO_OTHERS: [":to others:", ":to_others:", "to others"],
          VIEW_ALL: ["view all"],
          WITHIN_DAYS: ["within $DAYS_NUM days", "next $DAYS_NUM days", "$DAYS_NUM days"]
        }, i = {
          WITHIN_DAYS: "Due within $DAYS_NUM days",
          SEARCH: "Search for $SEARCH_STR",
          NO_PRIORITY: "No priority",
          PRIORITY: "Priority $PRIORITY_LEVEL",
          NO_DUE_DATE: "No due date",
          VIEW_ALL: "All tasks",
          NO_LABELS: "No labels",
          TO_OTHERS: "Assigned to others",
          TO_ME: "Assigned to me",
          OVERDUE: "Overdue"
        }, s = {
          ME: ["me"],
          OTHERS: ["others", "other"]
        };
        t = "undefined" != typeof n && null !== n ? e : window,
        "undefined" == typeof t.todoist && (t.todoist = {}),
        "undefined" == typeof t.todoist.filteri18n && (t.todoist.filteri18n = {}),
        t.todoist.filteri18n.en = {
          query: o,
          queryRex: r,
          resultTitle: i,
          specialCollaboratorVal: s
        }
      }()
    }
    ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }
  , {}],
  36: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p;
    f = window.Signals,
    o = window.AmiMenu,
    p = window.imageSprite,
    r = e("../agenda/.coffee.AgendaUtils.js"),
    d = e("../labels/Labels.js"),
    h = e("../promotion_overlay/.coffee.PromotionOverlay.js"),
    s = e("../../models/.coffee.FiltersModel.js"),
    c = e("../generic_left_list/.coffee.GenericLeftList.js"),
    i = e("../drag_and_drop/.coffee.DragAndDrop.js"),
    l = e("../../menus/.coffee.MenuFilterColors.js"),
    u = e("../../menus/MenuFilterList.js"),
    a = c.extend({
      initWithData: function() {
        var e;
        return e = {
          event_name: "Filters",
          data_model: s,
          default_color: 12,
          icon: "icon-filter",
          empty_text: _("You have no filters"),
          add_text: _("Add Filter"),
          placeholder: _("Filter name"),
          list_holder: "filters_list_man",
          DragAndDrop: i,
          with_color: !0,
          with_arrows: !1,
          with_indent: !1,
          with_ordering: !0,
          fn_create_counter: this.createCounter,
          fn_get_all: function() {
            return s.getAll(!0)
          },
          fn_on_click: function(e) {
            return function(t) {
              return u.get().hide(),
              e.setCurrent(t),
              window.scroll(0, 0)
            }
          }(this),
          fn_show_items: function(e) {
            var t, n;
            if (t = s.get(e[0]))
              return n = !1,
              r.query(t.query, n)
          },
          fn_on_delete: function(e) {
            return $remove(e)
          },
          fn_get_selected: function() {
            return {}
          },
          fn_check_show_add_item: function(e) {
            return function() {
              return !!window.User.is_premium || e.premiumOnly()
            }
          }(this),
          fn_extend_form: function(e, t, n) {
            var r, o;
            return $addClass(e, "edit_filter_form"),
            o = $child(t, "div", "richtext_editor"),
            $addBefore(SPAN({
              c: "desc"
            }, _("Name:")), o),
            r = INPUT({
              name: "ta_query",
              class: "text_box",
              tabIndex: 1,
              autocomplete: "off"
            }),
            r.placeholder = _("Filter query"),
            n && n.current_item ? r.value = n.current_item.query : r.value = "",
            $addAfter(r, o),
            $addAfter(A({
              href: "/Help/Filtering",
              c: "help_icon",
              target: "_blank"
            }, p("cmp_query-help", 8, 12)), r),
            $addBefore(SPAN({
              c: "desc"
            }, _("Query:")), r),
            e
          },
          fn_parse_form: function(e, t, n) {
            return null == n && (n = !0),
            t.is_changed = !0,
            t.query = $strip($f(e, "ta_query").value),
            0 === t.query.length && (alert(_("The filter query can't be empty."), function() {
              return $f(e, "ta_query").focus()
            }),
            t.is_changed = !1),
            t
          },
          fn_editing_done: function(e) {
            return function() {
              var t, n;
              if (t = e.current_item)
                return n = !1,
                r.query(t.json.query, n)
            }
          }(this)
        },
        $bindMethods(this),
        f.connect("filters_updated", this.reRender),
        e.menu = u.init(this),
        e.menu_colors = l.init(d),
        e.fn_create_color = this.createColor,
        this.parent(e)
      },
      premiumOnly: function() {
        return h.show(_("Filters editing is a premium only feature"), _("Create powerful filters and filter your tasks any way you like.")),
        !1
      },
      createCounter: function() {
        return null
      },
      createColor: function(e) {
        return this.createColorDiv("filter_color_" + e.id, e.color, d.colors)
      }
    }),
    t.exports = new a
  }
  , {
    "../../menus/.coffee.MenuFilterColors.js": 123,
    "../../menus/MenuFilterList.js": 134,
    "../../models/.coffee.FiltersModel.js": 148,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../generic_left_list/.coffee.GenericLeftList.js": 39,
    "../labels/Labels.js": 54,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90
  }],
  37: [function(e, t, n) {
    var r, o = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = function() {
      function e() {
        this.format = o(this.format, this)
      }
      return e.prototype.format = function(e, t) {
        var n, r, o, i;
        if (null == e)
          return null ;
        for (n = e.split("%"),
        r = o = 1,
        i = n.length - 1; o <= i; r = o += 2) {
          if (null == t[n[r]])
            return ["error: ", e];
          n[r] = t[n[r]]
        }
        return n
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {}],
  38: [function(e, t, n) {
    var r = (window.static_path,
    window.DoistFormat)
      , o = {
      formatSimple: function(e, t) {
        return t = this.setOpts(t),
        t.with_email = !1,
        r.formatSimple(e, t)
      },
      format: function(e, t) {
        return t = this.setOpts(t),
        r.format(e, t)
      },
      setOpts: function(e) {
        return e || (e = {}),
        e.fn_generate_link = function(e, t, n) {
          e = e.replace(/javascript:/g, "");
          var r = n.attachment;
          if (t == e && r && r.title && r.url == e) {
            var i = $strip(r.title);
            i.length > 0 && (t = i)
          }
          var s = 250;
          e == t && (s = 50),
          t == e && t.length > s && (t = t.substring(0, s) + "...");
          var a = '<a href="' + e + '" class="ex_link" target="_blank" rel="noopener noreferrer" onclick="return linkRedirecter(this)">' + $xssStrip($strip(t)) + "</a>";
          return a = o.handleExternalServices(e, a)
        }
        ,
        e.fn_handle_gmail = function(e, t, n) {
          var r = o.generateServiceIcon("email")
            , i = "https://mail.google.com/mail/u/0/" + t;
          return '<a href="' + i + '" class="ex_link" target="_blank" rel="noopener noreferrer" onclick="return linkRedirecter(this)">' + r + $xssStrip($strip(n)) + "</a>"
        }
        ,
        e.fn_handle_outlook = function(e, t, n) {
          var r = o.generateServiceIcon("email")
            , i = "<a href='#openOutlook/" + t.replace(/'/g, "") + '\' class="ex_link" onclick="return OutlookIntegration.openEmail(\'' + t + "')\">" + r + $xssStrip($strip(n)) + "</a>";
          return i
        }
        ,
        e.fn_handle_thunderbird = function(e, t, n) {
          var r = o.generateServiceIcon("email")
            , i = "<a thunder_id='" + n.replace(/'/g, "") + '\' href="#openThunderbird" class="ex_link" onclick="return linkRedirecter(this)">' + r + $xssStrip($strip(t)) + "</a>";
          return i
        }
        ,
        e
      },
      generateServiceIcon: function(e) {
        return '<img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" class="cmp_' + e + ' service_icon" width="16" />'
      },
      handleExternalServices: function(e, t) {
        return e.indexOf("d1x0mwiac2rqwt.cloudfront.net") != -1 && (t = o.generateServiceIcon("attachment") + " " + t),
        e.indexOf("mail.google.com") != -1 && (t = o.generateServiceIcon("email") + " " + t),
        e.indexOf("wedoist.com") != -1 && (t = "<b>WD</b> " + t),
        e.indexOf("teamcom.io") != -1 && (t = "<b>TC</b> " + t),
        e.indexOf("evernote.com/Home.action") == -1 && e.indexOf("evernote.com/shard") == -1 && e.indexOf("evernote://") == -1 || (t = o.generateServiceIcon("evernote") + t),
        e.indexOf("google.com/calendar/event") != -1 && (t = o.generateServiceIcon("cal") + t),
        t
      }
    };
    t.exports = o
  }
  , {}],
  39: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m;
    u = window.Signals,
    o = window.Alerts,
    l = window.MenuRightClick,
    f = window.imageSprite,
    m = window.track,
    p = e("../../menus/HelperColorsPriorities.js").selectColor,
    c = e("../generic_manager/GenericManager.js"),
    d = e("../generic_manager/GenericManagerUtils.js"),
    r = e("../action_perfomed/.coffee.ActionPerformed.js"),
    s = e("../formatter/Formatter.js"),
    h = e("../../components/left_menu/.coffee.TopFilters.js"),
    i = e("../../mini/.coffee.DimensionCalculator.js"),
    a = c.extend({
      initWithData: function(e) {
        var t;
        return t = {
          data_model: e.data_model,
          max_indent: 4,
          undo_reorder_intent: e.undo_reorder_intent
        },
        $update(t, e),
        this.opts = t,
        this.parent(t),
        this.event_name = e.event_name,
        this.current_list = null ,
        this.current_item = null ,
        this.empty_text = e.empty_text,
        this.move_x = !1,
        this.menu.hide_callbacks.push(function() {
          return $removeClass($all("li", "on_menu_show"), "on_menu_show")
        }),
        u.connect("color_selected", this.colorSelected),
        e.init && e.init(),
        this.is_inited = !0
      },
      insertItems: function(e) {
        var t, n, r, o, s, a, c;
        for (o = this.current_list,
        t = this.opts.fn_get_selected(),
        $replace(o, null ),
        s = window.User.team_inbox,
        a = 0,
        c = e.length; a < c; a++)
          n = e[a],
          n.inbox_project || n.id !== s && (r = this.renderItem(n),
          $add(o, r),
          t[n.id] && $addClass(r, "current"));
        return d.showHideChildren($AF(o.childNodes)),
        this.opts.with_arrows && this.arrows.updateArrows(),
        this.checkEmpty(),
        i.recalculate()
      },
      reRender: function(e) {
        return e !== !0 && window.isEditingOn() ? void setTimeout(this.reRender, 200) : this.insertItems(this.opts.fn_get_all())
      },
      renderEmpty: function() {
        return this.parent()
      },
      checkEmpty: function() {
        var e;
        return e = this.parent(),
        u.sendSignal("check_premium_promo")
      },
      getProjectById: function(e) {
        var t, n, r, o, i;
        for (n = null ,
        i = $AF(this.current_list.childNodes),
        r = 0,
        o = i.length; r < o; r++)
          if (t = i[r],
          t.json && t.json.id === e) {
            n = t;
            break
          }
        return n
      },
      deselectCurrent: function() {
        return $removeClass($all("li", "current"), "current")
      },
      setCurrentVisually: function(e) {
        var t, n, r, o, i;
        for (o = $AF(this.current_list.childNodes),
        i = [],
        n = 0,
        r = o.length; n < r; n++) {
          if (t = o[n],
          t.json && t.json.id === e) {
            $removeClass($all("li", "current"), "current"),
            $addClass(t, "current");
            break
          }
          i.push(void 0)
        }
        return i
      },
      setCurrentById: function(e, t, n, r) {
        var o, i, s, a, c;
        if (this.flash_item = t,
        e === window.User.inbox_project)
          o = h.getInbox(),
          this.setCurrent(o, n, r);
        else if (e === window.User.team_inbox)
          o = h.getTeamInbox(),
          this.setCurrent(o, n, r);
        else {
          for (i = !1,
          c = $AF(this.current_list.childNodes),
          s = 0,
          a = c.length; s < a; s++)
            if (o = c[s],
            o.json && o.json.id === e) {
              this.setCurrent(o, n, r),
              i = !0;
              break
            }
          i || this.opts.fn_show_items([e], n)
        }
        return !1
      },
      setCurrent: function(e, t, n) {
        var o, i, a, c, l, u;
        if (this.deselectCurrent(),
        e && e.json) {
          if (r.mark("GenericLeftList/setCurrent"),
          $addClass(e, "current"),
          a = e.json.name.replace(/^\*\s+/, ""),
          a = s.formatSimple(a, {
            only_text: !0,
            as_html: !1,
            cache_prefix: "document"
          }),
          document.title = a + ": Todoist",
          this.opts.with_indent && n !== !1)
            for (c = [],
            i = d.getChildren(e, !0),
            l = 0,
            u = i.length; l < u; l++)
              o = i[l],
              c.push(o.json.id),
              $addClass(o, "current");
          else
            c = [e.json.id];
          return this.opts.fn_show_items(c, t),
          this.opts.with_arrows ? this.arrows.updateArrows() : void 0
        }
      },
      editingDone: function(e) {
        if (e && (this.current_item = e),
        this.current_form = null ,
        this.current_cancel = null ,
        this.opts.with_arrows && this.arrows.updateArrows(),
        this.checkEmpty(),
        this.opts.fn_editing_done)
          return this.opts.fn_editing_done()
      },
      saveItem: function(e, t) {
        var n, r, o, i, s, a, c, l, u, h, f, _, p;
        return o = $parent(e, "li"),
        n = o.list_item,
        o && n && (h = d.getChildren(n),
        $addAfter(n, o),
        f = n.nextSibling,
        l = $gc(e, null , "richtext_editor").proxyGetValue(),
        this.opts.with_indent && d.normalizeIndent(o, o),
        i = d.getIndent(o),
        a = this.selected_color,
        r = {
          name: "" !== l ? l : n.json.name,
          indent: i
        },
        this.opts.with_indent && (_ = d.getParent(n, i),
        p = null ,
        _ && (p = _.json.id),
        (n.json.parent_id = p) && (r.parent_id = p)),
        this.opts.fn_parse_form && (r = this.opts.fn_parse_form(e, r, !0)),
        null !== a && (r.color = a),
        s = this.opts.data_model.update(n.json.id, r),
        c = this.renderItem(s),
        $hasClass(n, "current") && $addClass(c, "current"),
        $addClass(c, "generic_left_list_updated"),
        $swap(n, c),
        this.opts.with_indent && d.setIndent(c, i),
        $remove(o),
        this.opts.with_indent && d.updateParentIds(c, this.opts.data_model, h),
        this.editingDone(c),
        u = c.nextSibling,
        f !== u && this.incNextSiblings(c)),
        $isFunction(t) && t(),
        !1
      },
      editCurrentItem: function() {
        var e, t, n, r, o, i;
        if (this.parent(),
        o = function(e) {
          return function() {
            if ($show(e.current_item),
            e.opts.with_arrows)
              return e.arrows.updateArrows()
          }
        }(this),
        t = {
          cancel: d.genCancel("li", o, this),
          action: this.saveItem,
          submit_val: _("Save"),
          name_val: this.current_item.json.name,
          indent_arrows: this.opts.with_indent,
          placeholder: this.opts.placeholder,
          fn_extend_form: this.opts.fn_extend_form,
          current_item: this.current_item.json,
          manager_type: this.manager_type,
          manager_reodering: this.manager_reodering
        },
        this.current_cancel = t.cancel,
        n = this.generateAddEditForm(t),
        this.opts.with_color ? (this.selected_color = null ,
        e = this.createColorSelector(this.current_item.json.color),
        $ATT(n.text_box_holder, e)) : $addClass(n.form, "no_color"),
        r = n.li_item,
        i = n.textarea,
        r.list_item = this.current_item,
        this.current_form = n.form,
        this.opts.with_indent && d.setIndent(r, this.current_item.json.indent),
        $addAfter(r, this.current_item),
        i.proxyPlaceCursor(),
        this.arrows)
          return this.arrows.updateArrows()
      },
      deleteCurrentItem: function(e) {
        var t, n, i, a, c, l, h, f, p, m, g, y;
        if (r.mark("GenericLeftList/deleteCurrentItem"),
        i = d.getChildren(e, !1),
        a = [],
        h = !1,
        e.json.shared && (h = !0),
        l = function(e) {
          var t;
          return t = {
            only_text: !0,
            as_html: !1,
            cache_prefix: "generic_list"
          },
          $escape(s.formatSimple(e, t))
        }
        ,
        m = null ,
        this.opts.with_indent && i && i.length > 0) {
          for (p = [],
          g = 0,
          y = i.length; g < y; g++)
            n = i[g],
            f = n.json && n.json.name,
            f && (p.push(l(f)),
            a.push(n.json.id));
          c = _("Following will be deleted as well: %s."),
          h && (c = _("Following will be left as well: %s.")),
          m = SPAN(BR(), BR(), $setHTML(SPAN(), c.replace("%s", "<b>" + p.join(", ") + "</b>")))
        }
        return c = _("Are you sure you want to delete %s?"),
        h && (c = _("Are you sure you want to leave %s?")),
        t = SPAN($setHTML(SPAN(), c.replace("%s", "<b>" + l(e.json.name) + "</b>")), m),
        o.confirm(t, function(t) {
          return function(n) {
            if (n)
              return i.splice(0, 0, e),
              a.splice(0, 0, e.json.id),
              t.opts.fn_on_delete && t.opts.fn_on_delete(i),
              t.opts.data_model.deleteMany(a),
              t.editingDone(),
              u.sendSignal("refresh_interface")
          }
        }(this))
      },
      addItem: function(e, t) {
        var n, r, o, i, s, a, c, l, h, f, _;
        for (o = $parent(e, "li"),
        a = o.previousSibling,
        l = 1,
        a && (l = a.json.item_order + 1),
        s = $all("li", null , this.current_list),
        f = 0,
        _ = s.length; f < _; f++)
          i = s[f],
          i.json && i.json.item_order >= l && (i.json.item_order += 1);
        if (n = void 0 !== e.color ? e.color : this.opts.default_color,
        void 0 !== this.selected_color && (n = this.selected_color),
        this.opts.with_indent && d.normalizeIndent(o, o),
        r = {
          name: $gc(e, null , "richtext_editor").proxyGetValue(),
          item_order: l,
          indent: d.getIndent(o),
          color: n
        },
        this.opts.with_indent && (h = d.getParent(o),
        h && (r.parent_id = h.json.id)),
        this.opts.fn_parse_form && (r = this.opts.fn_parse_form(e, r, !0)),
        "" !== r.name && r.is_changed !== !1) {
          if (i = this.opts.data_model.add(r),
          !i)
            return;
          o.json = i,
          c = this.renderItem(i),
          $addClass(c, "generic_left_list_added"),
          $swap(o, c),
          this.setCurrent(c),
          window.scroll(0, 0),
          this.opts.with_indent && d.updateParentIds(c, this.opts.data_model, []),
          this.editingDone(c),
          this.incNextSiblings(c),
          $isFunction(t) && t(),
          u.sendSignal("update_counters")
        } else
          this.current_item = o,
          $isFunction(t) && t();
        return !1
      },
      showAddItem: function(e, t, n) {
        var r, o, i, s, a, c, l, u, h;
        if (!this.fn_check_show_add_item || this.fn_check_show_add_item())
          return this.parent(e, t, n),
          h = function(e) {
            return function() {
              if (e.checkEmpty(),
              e.opts.with_arrows)
                return e.arrows.updateArrows()
            }
          }(this),
          i = this.current_item,
          r = this.opts.default_color,
          e === !0 && i && (r = i.json.color),
          this.selected_color = r,
          s = {
            cancel: d.genCancel("li", h, this),
            action: this.addItem,
            submit_val: this.opts.add_text,
            submit_icon: "cmp_add",
            name_val: "",
            indent_arrows: this.opts.with_indent,
            placeholder: this.opts.placeholder,
            fn_extend_form: this.opts.fn_extend_form,
            manager_type: this.manager_type,
            manager_reodering: this.manager_reodering
          },
          this.current_cancel = s.cancel,
          c = this.generateAddEditForm(s),
          this.opts.with_color ? (o = this.createColorSelector(r),
          $ATT(c.text_box_holder, o)) : $addClass(c.form, "no_color"),
          a = this.current_form = c.form,
          a.color = r,
          e === !0 && this.opts.with_indent && (l = d.getIndent(i) || 1,
          u = i.nextSibling,
          u && u.json && u.indent === l + 1 && (l += 1),
          d.setIndent(c.li_item, l)),
          this.insertForm(c.li_item, t),
          this.current_item = null ,
          this.arrows && this.arrows.updateArrows(),
          setTimeout(function() {
            return c.textarea.proxyFocus()
          }, 20)
      },
      render: function() {
        var e, t;
        return t = DIV({
          c: "left_list_man"
        }),
        $addClass(t, "actions"),
        e = A({
          href: "",
          class: "action sel_add_project"
        }, SPAN({
          c: "icon icon-add"
        }), this.opts.add_text),
        this.add_item = e,
        e.onclick = function(e) {
          return function() {
            return e.saveCurrentItem(function() {
              return e.current_item = e.getItem($last),
              e.showAddItem()
            }),
            !1
          }
        }(this),
        $add(t, e),
        $add($(this.opts.list_holder), t)
      },
      renderItem: function(e, t) {
        var n, r, o, i, a, c, u, h, f, _, p, m, g, y, w;
        if (_ = TABLE({
          cellpadding: 0,
          cellspacing: 0,
          class: "item_table"
        }),
        p = TBODY(),
        $add(_, p),
        o = LI({
          class: "clickable"
        }, _),
        o.json = e,
        $ATT(o, DIV({
          c: "invisible_space"
        })),
        c = null ,
        e.not_editable !== !0 ? (c = d.getMenuEditIcon(),
        o.menu_icon = c,
        new l(o,$p(this.toggleMenu, o, {
          id: e.id,
          menu_icon: c
        }, e.id)),
        this.opts.with_ordering && t !== !0 && !e.inbox_project && this.opts.DragAndDrop.attach(o)) : $addClass(o, "not_editable"),
        h = e.name,
        i = h.match(/[^ ]{20}.+?/g))
          for (y = 0,
          w = i.length; y < w; y++)
            r = i[y],
            h = h.replace(r, r.substr(0, 20) + "... ");
        return h = $setHTML(SPAN(), s.formatSimple(h)),
        u = TD({
          class: "name"
        }, h),
        a = TD({
          class: "menu"
        }, c),
        $AEV(a, ["click", "touchstart"], function(t) {
          return function() {
            return t.toggleMenu(o, c, e.id)
          }
        }(this)),
        m = this.opts.with_color ? TD({
          class: "td_color"
        }, this.opts.fn_create_color(e)) : null ,
        $add(u, this.opts.fn_create_counter(e)),
        n = DIV({
          class: "td_separator"
        }),
        $isIe() || (n.style.width = "2px"),
        g = TD(n),
        f = function(t) {
          return function(n) {
            var r;
            if (r = $eventElm(n),
            !r.is_menu_icon && "img" !== $nodeName(r))
              return t.opts.fn_on_click(o, e, n)
          }
        }(this),
        $AEV(o, "dblclick", function(e) {
          return function() {
            return e.setCurrent(o, null , !1),
            !1
          }
        }(this)),
        $AEV(o, "click", f),
        $add(p, TR(m, g, u, a)),
        this.opts.with_indent && d.setIndent(o, e.indent, !0),
        o
      },
      colorSelected: function(e) {
        var t, n, r;
        if (t = $("color_selector"),
        t && this.current_form && (this.selected_color = e,
        r = this.createColorSelector(e),
        $swap(t, r),
        n = $child(this.current_list, "textarea")))
          return n.proxyFocus(!0)
      },
      createColorSelector: function(e) {
        var t, n;
        return n = {
          color: e
        },
        this.current_item && (n.id = this.current_item.json.id),
        t = this.opts.fn_create_color(n, !0),
        t.id = "color_selector",
        $addClass([t, $child(t, "div")], "menu_icon"),
        $AEV(t, "click", function(e) {
          return function() {
            return e.menu_colors.show(t, !0),
            !1
          }
        }(this)),
        t.change_y_pos = function(e) {
          return e += $scrollTop(),
          e -= $("left_menu").scrollTop
        }
        ,
        p(this.menu_colors, e),
        t
      },
      createColorDiv: function(e, t, n) {
        var r, o;
        return o = DIV({
          class: "div_color counter_color " + this.icon,
          id: e
        }),
        r = n[t] || "#dddddd",
        $setStyle(o, "color", r),
        o
      },
      toggleMenu: function(e, t, n, r) {
        return this.opts.fn_on_show_menu && this.opts.fn_on_show_menu(e),
        $removeClass($all("li", "on_menu_show"), "on_menu_show"),
        $addClass(e, "on_menu_show"),
        t.change_y_pos = function() {
          var e, n;
          return e = t.menu_icon || t,
          n = $position(e).y + 15,
          n -= $("left_menu").scrollTop,
          n += $scrollTop()
        }
        ,
        this.menu.toggle(t, e, r),
        !1
      },
      getAllRenrededItems: function(e, t) {
        var n, r, o, i, s;
        for (void 0 === t && (t = !0),
        o = this.parent(e),
        n = [],
        i = 0,
        s = o.length; i < s; i++)
          r = o[i],
          $hasClass(r, "not_editable") || t === !0 && r.json && r.json.inbox_project || t === !0 && r.json && r.json.team_inbox || n.push(r);
        return n
      },
      isEmpty: function() {
        return 0 === this.getAllRenrededItems(!1, !1).length
      }
    }),
    t.exports = a
  }
  , {
    "../../components/left_menu/.coffee.TopFilters.js": 58,
    "../../menus/HelperColorsPriorities.js": 130,
    "../../mini/.coffee.DimensionCalculator.js": 141,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../formatter/Formatter.js": 38,
    "../generic_manager/GenericManager.js": 41,
    "../generic_manager/GenericManagerUtils.js": 42
  }],
  40: [function(e, t, n) {
    var r = window.imageSprite
      , o = e("../generic_manager/GenericManagerUtils.js")
      , i = new ICE.Class({
      init: function(e) {
        e && $update(this, e),
        void 0 !== this.x_off ? this.x_off = this.x_off : this.x_off = 0,
        $bindMethods(this),
        $isMozilla() && (this.y_offset = 4)
      },
      updateArrows: function(e) {
        e = e || this.list.current_list,
        e && (this.removeArrows(e),
        this._updateArrows(e),
        this.list.current_his_list && this._updateArrows(this.list.current_his_list))
      },
      displayArrow: function(e, t) {
        if (!(e.is_manager || e.json && e.json.dont_show_arrow)) {
          var n = this._hasChildren(e)
            , o = e.json && e.json.collapsed;
          if (t === !0 && (o = !0),
          void 0 !== e._collapsed && (o = !!e._collapsed),
          n) {
            var i = "cmp_open_arrow_down";
            o && (i = "cmp_open_arrow_right");
            var s = r(i, 10, 10)
              , a = DIV({
              c: "arrow"
            });
            return $add(a, s),
            $addToTop(e, a),
            a.host_item = e,
            e.arrow = a,
            a.onclick = $p(this._switchState, a),
            a
          }
        }
      },
      removeArrows: function(e) {
        var t = this._getArrows(e);
        $map(t, function(e) {
          e.host_item && (e.host_item.arrow = null ),
          $remove(e)
        })
      },
      setList: function(e) {
        this.list = e
      },
      _updateArrows: function(e) {
        for (var t = $first(e.childNodes), n = t; n; )
          $isHidden(n) || this._childEdited(n) || this.displayArrow(n),
          n = n.nextSibling
      },
      _saveState: function(e, t) {
        this.data_model.update(e, {
          collapsed: t
        }, !0)
      },
      _switchState: function(e) {
        if (e) {
          var t = e.host_item;
          if (t.json.collapsed) {
            t.json.collapsed = 0;
            var n = o.getChildren(t);
            o.showHideChildren(n, t),
            $map(n, function(e) {
              $addClass(e, "task_expand_collapse")
            })
          } else
            t.json.collapsed = 1,
            $map(o.getChildren(t), function(e) {
              $hide(e)
            });
          this.updateArrows($parent(t, "ul")),
          this._saveState(t.json.id, t.json.collapsed)
        }
      },
      _hasEdit: function(e, t) {
        return e.is_manager && o.getIndent(e) <= t,
        !0
      },
      _childEdited: function(e) {
        var t = e.nextSibling;
        if (!t)
          return !1;
        var n;
        if (e.json)
          n = e.json.indent;
        else {
          if (!e.previousSibling || !e.previousSibling.json)
            return !1;
          n = e.previousSibling.json.indent
        }
        for (; t; ) {
          var r = t.json;
          if (r && r.indent <= n)
            return !1;
          if (t.is_manager)
            return !0;
          if (r && r.indent <= n)
            return !1;
          t = t.nextSibling
        }
        return !1
      },
      _getArrows: function(e) {
        if (e) {
          var t = $parent(e, "div");
          return $all("div", "arrow", t)
        }
        return this.list_holder || (this.list_holder = $parent(this.list.current_list, "td")),
        $all("div", "arrow", this.list_holder)
      },
      _hasChildren: function(e) {
        if (!e || !e.json)
          return !1;
        var t = e.nextSibling;
        return !!(t && t.json && t.json.indent > e.json.indent)
      }
    });
    t.exports = i
  }
  , {
    "../generic_manager/GenericManagerUtils.js": 42
  }],
  41: [function(e, t, n) {
    function r(e) {
      return 13 == e.keyAscii && e.ctrl && !e.shift || p && 77 == e.keyAscii && e.ctrl && !e.shift
    }
    var o = window.imageSprite
      , i = window.AmiButton
      , s = window.AmiComplete
      , a = window.FocusElm
      , c = e("../misc/Util.js").attachKeyDown
      , d = e("../action_perfomed/.coffee.ActionPerformed.js")
      , l = e("../drag_and_drop/.coffee.DragAndDrop.js")
      , u = e("../richtext_editor/.coffee.RichTextEditor.js")
      , h = e("./GenericManagerUtils.js")
      , f = 0
      , _ = Class({
      init: function() {},
      initWithData: function(e) {
        this.state_manager = this,
        e && $update(this, e)
      },
      getAllRenrededItems: function(e) {
        var t = [];
        return $map(this.current_list.childNodes, function(n) {
          if (n && n.json && !$hasClass(n, "reorder_item")) {
            if (e === !0 && $isHidden(n))
              return;
            t.push(n)
          }
        }),
        t
      },
      isFormFirst: function() {
        var e = $first(this.current_list.childNodes);
        $hasClass(e, "reorder_item") && (e = e.nextSibling);
        var t = $parent(this.state_manager.current_form, "li");
        return e == t
      },
      isFormLast: function() {
        var e = $last(this.current_list.childNodes)
          , t = $parent(this.state_manager.current_form, "li");
        return e == t
      },
      getItem: function(e) {
        e = e || $last;
        var t = e(this.current_list.childNodes);
        return t && $hasClass(t, "reorder_item") ? t.nextSibling : t && t.is_manager ? t.previousSibling : t && t.json && !t.is_empty ? t : null
      },
      addIndentArrows: function(e, t, n) {
        var r = DIV(o("cmp_indent_right", 14, 14))
          , i = DIV(o("cmp_indent_left", 14, 14))
          , s = this
          , a = function(e, n) {
          s.incIndent(t, e);
          var r = $all(null , "richtext_editor", t)[0];
          return r.proxyFocus(),
          $preventDefault(n),
          !1
        }
        ;
        r.onclick = $p(a, 1),
        i.onclick = $p(a, -1),
        n === !0 ? $add(e, i, r) : $add(e, r, i)
      },
      generateAddEditForm: function(e) {
        var t = LI({
          class: "manager indent_1"
        });
        t.is_manager = !0;
        var n = FORM();
        e.submit_icon && (e.submit_icon = o(e.submit_icon, 16, 16));
        var a = i.createButton(e.submit_val);
        $addClass(a, "amibutton_red"),
        $addClass(a, "submit_btn"),
        n.onsubmit = function() {
          return !1
        }
        ,
        $add(t, n);
        var d = u({
          tabIndex: 1,
          autocomplete: "off",
          withPlaceholders: e.withPlaceholders
        });
        d.proxySetValue(e.name_val, !0, !1),
        e.placeholder && (d.placeholder = e.placeholder);
        var h = $p(e.action, n);
        n.submit_fn = h,
        $AEV(a, ["click", "touchstart"], function(e) {
          return h(e),
          !1
        }),
        void 0 === e.with_esc_cancel && (e.with_esc_cancel = !0);
        var _ = this
          , p = function(o) {
          if (o = o || window.event,
          ICE._setEventKey(o),
          o.ctrl && 77 == o.keyAscii && e.on_ctrl_m)
            return $preventDefault(o),
            e.on_ctrl_m(o),
            !1;
          if (e.with_esc_cancel && 27 == o.keyAscii) {
            if (window.AmiComplete && window.AmiComplete.shown())
              return !1;
            if (d.cancelInput && d.cancelInput(o))
              return $preventDefault(o),
              !1;
            d.blur(),
            e.cancel && e.cancel.onclick()
          }
          if (8 == o.keyAscii && d.cancelInput && d.cancelInput(o))
            return $preventDefault(o),
            !1;
          if (e.onKeyPress)
            return e.onKeyPress(o, t);
          if (r(o))
            return $preventDefault(o),
            n.submit_fn(function() {
              d.blur(),
              _.showAddItem(!0, !0)
            }, !0),
            !1;
          if (13 == o.keyAscii && o.shift)
            return $preventDefault(o),
            n.submit_fn(function() {
              d.blur(),
              _.showAddItem(!0, !1)
            }, !0),
            !1;
          if (13 == o.keyAscii)
            return (!window.AmiComplete || !window.AmiComplete.shown()) && ($preventDefault(o),
            d.blur(),
            n.submit_fn(null , !0),
            !1);
          if (9 == o.keyAscii && !o.ctrl) {
            var i = $f(n, "due_date");
            if (i && !s.shown()) {
              var a = $eventElm(o);
              if (a && !$hasClass(a, "due_date"))
                return $preventDefault(o),
                i.select(),
                !1
            }
          }
          if (o.ctrl && 37 == o.keyAscii && !o.shift)
            return !$gp($eventElm(o), "ul", "items") || (!(!n.no_indent && 0 != _.with_indent) || ($preventDefault(o),
            _.incIndent(t, -1),
            !1));
          if (o.ctrl && 39 == o.keyAscii && !o.shift)
            return !$gp($eventElm(o), "ul", "items") || (!(!n.no_indent && 0 != _.with_indent) || ($preventDefault(o),
            _.incIndent(t, 1),
            !1));
          var c = function(e) {
            "edit" == _.current_mode ? _.saveItem(_.state_manager.current_form, e, !0) : _.addItem(_.state_manager.current_form, e, !0)
          }
          ;
          return o.ctrl && 38 == o.keyAscii && !o.shift ? ($preventDefault(o),
          c(_.editPrevItem),
          !1) : o.ctrl && 40 == o.keyAscii && !o.shift ? ($preventDefault(o),
          c(_.editNextItem),
          !1) : void 0
        }
          , m = TABLE({
          width: "100%"
        })
          , g = TBODY();
        $add(m, g);
        var y, w, v = TABLE(TBODY(y = TR(w = TD({
          c: "text_box_holder"
        }, d))));
        $AEV(w, "click", function(e) {
          var t = $eventElm(e);
          return !(!t || "input" != $nodeName(t)) || void d.proxyFocus()
        });
        var j = TD({
          colSpan: 2,
          class: "form_content"
        }, v)
          , b = TR(j);
        if ($add(g, b),
        e.indent_arrows) {
          var I = TD({
            rowSpan: 2,
            class: "indent_arrows"
          });
          $add(b, I),
          this.addIndentArrows(I, t)
        }
        var $ = TD({
          align: "left",
          c: "td_submit"
        })
          , A = TD({
          align: "right",
          c: "td_extra"
        });
        $add($, a, e.cancel),
        e.td_extra && $add(A, e.td_extra),
        $add(n, m),
        $add(n, TABLE({
          c: "td_submit_area"
        }, TBODY(TR($, A)))),
        e.fn_extend_form && (n = e.fn_extend_form(n, b, e));
        var S = [d];
        return S = S.concat($all("input", null , n)),
        e.inputs && (S = S.concat(e.inputs)),
        $map(S, function(e) {
          c(e, p)
        }),
        e.manager_reodering && (t.json = {
          id: f--,
          manager_type: e.manager_type,
          indent: 1
        },
        l.attach(t, {
          trigger_mouse_over: !0
        })),
        {
          li_item: t,
          form: n,
          textarea: d,
          text_box_holder: w,
          duedate: $f(n, "due_date"),
          form_content: j,
          input_holders_tr: y
        }
      },
      insertForm: function(e, t) {
        var n = this.current_item;
        if (n && t === !0 && e)
          $addBefore(e, n);
        else if (this.current_item) {
          for (var r = n.nextSibling; r && $isHidden(r); )
            r = r.nextSibling;
          r ? $addAfter(e, r.previousSibling || n) : $add(this.current_list, e)
        } else
          $add(this.current_list, e);
        a.focus(e, null , 35)
      },
      saveCurrentItem: function(e) {
        var t = this.state_manager.current_form;
        t ? "" === $gc(t, null , "richtext_editor").proxyGetValue() ? (this.cancelCurrentEdit(!0),
        e()) : "add" == this.current_mode ? this.addItem(t, e) : this.saveItem(t, e) : e()
      },
      editPrevItem: function() {
        d.mark("GenericManager/editPrevItem");
        for (var e = this.current_item.previousSibling; e && $isHidden(e); )
          e = e.previousSibling;
        if ($hasClass(e, "reorder_item") && (e = null ),
        e)
          this.current_item = e,
          this.editCurrentItem(!0);
        else
          try {
            this.isFormFirst() || this.showAddItem(!0, !0)
          } catch (e) {
            this.showAddItem(!0, !0)
          }
      },
      editNextItem: function() {
        d.mark("GenericManager/editNextItem");
        for (var e = this.current_item.nextSibling; e && $isHidden(e); )
          e = e.nextSibling;
        if (e)
          this.current_item = e,
          this.editCurrentItem(!0);
        else
          try {
            this.isFormLast() || this.showAddItem(!0, !1)
          } catch (e) {
            this.showAddItem(!0, !1)
          }
      },
      showAddItem: function() {
        d.mark("GenericManager/showAddItem"),
        this.setCurrentItemViaMenu(),
        this.current_mode = "add",
        this.removeEmpty(),
        this.cancelCurrentEdit()
      },
      editCurrentItem: function() {
        this.setCurrentItemViaMenu(),
        this.current_mode = "edit",
        d.mark("GenericManager/editCurrentItem"),
        this.cancelCurrentEdit(),
        $hide(this.current_item)
      },
      incIndent: function(e, t) {
        var n = h.getIndent(e) + t;
        n < 1 && (n = 1),
        n > this.max_indent && (n = this.max_indent);
        var r;
        if (r = "add" == this.current_mode ? e.previousSibling : e.previousSibling.previousSibling,
        r && $hasClass(r, "reorder_item") && (r = null ),
        r) {
          var o = h.getIndent(r);
          n > o && (n = o + 1)
        }
        h.setIndent(e, n)
      },
      empty_text: "No items",
      isEmpty: function() {
        return 0 === this.getAllRenrededItems().length
      },
      renderEmpty: function() {
        return LI({
          class: "empty"
        }, this.empty_text)
      },
      checkEmpty: function() {
        if (this.isEmpty()) {
          $remove($all("li", "empty", this.current_list));
          var e = this.renderEmpty();
          return e && (h.attachClick(e, this.showAddItem),
          e.is_empty = !0,
          $add(this.current_list, e)),
          !0
        }
        return this.removeEmpty(),
        !1
      },
      removeEmpty: function() {
        $remove($all("li", "empty", this.current_list))
      },
      saveOrder: function(e) {
        var t = $all("li", null , this.current_list)
          , n = 0
          , r = {};
        return $map(t, function(e) {
          e.json && e.json.id && (n++,
          e.json.item_order = n,
          r[e.json.id] = [n, e.json.indent])
        }),
        this.data_model.updateOrdersIndents && this.data_model.updateOrdersIndents(r),
        $isFunction(e) && e(t),
        !1
      },
      incNextSiblings: function(e) {
        if (e && e.json) {
          for (var t = e.json.item_order, n = e.nextSibling, r = {}, o = 0; n; )
            n.json && n.json && n.json.id && (t++,
            n.json.item_order = t,
            r[n.json.id] = [t, n.json.indent]),
            n = n.nextSibling,
            o++;
          o > 0 && this.data_model.updateOrdersIndents && this.data_model.updateOrdersIndents(r)
        }
      },
      setCurrentItemViaMenu: function() {
        var e = this.menu;
        e.shown && e.current_holder && (this.current_item = e.current_holder,
        this.menu.hide())
      },
      cancelCurrentEdit: function() {
        var e = this.state_manager.current_cancel;
        e && (e.onclick(),
        this.state_manager.current_cancel = null )
      }
    })
      , p = navigator.userAgent.indexOf("Macintosh") != -1 && $isMozilla();
    t.exports = _
  }
  , {
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../misc/Util.js": 65,
    "../richtext_editor/.coffee.RichTextEditor.js": 104,
    "./GenericManagerUtils.js": 42
  }],
  42: [function(e, t, n) {
    var r = e("../action_perfomed/.coffee.ActionPerformed.js")
      , o = {
      getChildren: function(e, t) {
        for (var n = t && [e] || [], r = e.json.indent, o = e.nextSibling, i = e.json.project_id; o; )
          if ($hasClass(o, "manager") || $hasClass(o, "reorder_item"))
            o = o.nextSibling;
          else {
            if (!o.json || !o.json.indent || o.json.indent <= r)
              break;
            if (i != o.json.project_id)
              break;
            n.push(o),
            o = o.nextSibling
          }
        return n
      },
      showHideChildren: function(e, t) {
        var n = [];
        t && t.json && n.push(t),
        n = n.concat(e);
        for (var r = {}, o = 0; o < n.length; o++) {
          var i = n[o]
            , s = i.json;
          if (s)
            for (var a = o + 1; a < n.length; a++) {
              var c = n[a]
                , d = c.json;
              if (!d)
                break;
              if (d.indent <= s.indent)
                break;
              r[d.id] = s
            }
        }
        $map(n, function(e) {
          var t = e.json;
          if (t) {
            for (var n = !0, o = t; ; ) {
              if (o = r[o.id],
              !o)
                break;
              if (o.collapsed) {
                n = !1;
                break
              }
            }
            n ? $show(e) : $hide(e)
          }
        })
      },
      getParent: function(e, t) {
        t || (t = e.json.indent);
        for (var n = e.previousSibling; n; )
          if (n.json && n.json.id) {
            if (n.json.indent < t)
              return n;
            n = n.previousSibling
          } else
            n = n.previousSibling;
        return null
      },
      imgOnMouseOver: function(e, t, n) {
        $AEV(e, "mouseover", function() {
          $removeClass(e, t),
          $addClass(e, n)
        }),
        $AEV(e, "mouseout", function() {
          $removeClass(e, n),
          $addClass(e, t)
        })
      },
      getMenuEditIcon: function() {
        var e = DIV({
          class: "icon menu cmp_menu_on gear_menu"
        });
        return e.is_menu_icon = !0,
        e
      },
      getIndent: function(e) {
        if (!e)
          return 1;
        var t = 1
          , n = e.className.match(/indent_(\d)/);
        return n ? parseInt(n[1]) : t
      },
      setIndent: function(e, t, n) {
        n || (r.mark("GenericManagerUtils/setIndent"),
        $map([1, 2, 3, 4, 5], function(t) {
          $removeClass(e, "indent_" + t)
        })),
        $addClass(e, "indent_" + t),
        e.json && (e.indent = t,
        e.json.indent = t)
      },
      attachClick: function(e, t) {
        $AEV(e, "mousedown", function(e) {
          if (2 == e.button)
            return !1;
          var n = $eventElm(e);
          if ($hasClass(n, "clickable"))
            return !0;
          if (document.selection) {
            var r = document.selection.createRange().text;
            if (r)
              return !0
          }
          if ("input" == $nodeName(n))
            return !0;
          if (e.ctrl || e.shift)
            return !0;
          var o = n && $gp(n, "a");
          return !(n && !o && !$hasClass(n, "label")) || t(e)
        })
      },
      genCancel: function(e, t, n, r) {
        r = r || _("Cancel");
        var o = A({
          class: "cancel",
          href: "",
          tabIndex: 4
        }, r)
          , i = function(r) {
          var i = $parent(o, e);
          return $remove(i),
          n.current_form = null ,
          n.current_cancel = null ,
          $isFunction(t) && t(r),
          !1
        }
        ;
        return o.onclick = i,
        o
      },
      openParents: function(e) {
        var t = o;
        if (e)
          for (var n = t.getParent(e); n; ) {
            var r = n.json.collapsed;
            n.json.collapsed = 0,
            r && t.showHideChildren(o.getChildren(n), n),
            n = t.getParent(n)
          }
      },
      normalizeIndent: function(e, t) {
        if (t) {
          var n = t.previousSibling;
          n && $hasClass(n, "reorder_item") && (n = n.previousSibling),
          !n && e.json && e.json.indent > 1 && o.setIndent(e, 1)
        }
      },
      updateParentIds: function(e, t, n) {
        var r = o.getParent(e)
          , i = null ;
        r && (i = r.json.id),
        e.json.parent_id != i && t.update(e.json.id, {
          parent_id: i
        });
        var s = o.getChildren(e);
        o.normalizeChildren(e, n, t),
        o.normalizeChildren(e, s, t);
        var a = [];
        a = a.concat(n),
        a = a.concat(s);
        var c = {};
        $map(a, function(e) {
          if (!c[e.json.id]) {
            c[e.json.id] = !0;
            var n = o.getParent(e)
              , r = null ;
            n && (r = n.json.id);
            var i = {};
            e.json.parent_id != r && (i.parent_id = r),
            !n && e.json.indent > 1 ? i.indent = 1 : n && n.json.indent != e.json.indent + 1 && (i.indent = n.json.indent + 1,
            i.indent > t.max_indent && (i.indent = t.max_indent)),
            i.indent && o.setIndent(e, i.indent),
            $keys(i).length > 0 && t.update(e.json.id, i)
          }
        })
      },
      normalizeChildren: function(e, t, n) {
        if (t.length > 0) {
          var r = t[0];
          if (r.json.indent != e.json.indent + 1) {
            var i = e.json.indent + 1 - r.json.indent;
            $map(t, function(e) {
              var t = e.json.indent + i;
              t > n.max_indent && (t = n.max_indent),
              o.setIndent(e, t),
              n.update(r.json.id, {
                indent: t
              })
            })
          }
        }
      }
    };
    window.GenericManagerUtils = t.exports = o
  }
  , {
    "../action_perfomed/.coffee.ActionPerformed.js": 7
  }],
  43: [function(e, t, n) {
    var r = window.Signals
      , o = window.MiniCal
      , i = window.imageSprite
      , s = (window.track,
    e("../../menus/.coffee.MenuPriorities.js"))
      , a = e("../../menus/.coffee.MenuSelecterMore.js")
      , c = e("../items_utils/.coffee.ItemCommonEdits.js")
      , d = e("../action_perfomed/.coffee.ActionPerformed.js")
      , l = e("../project_selecter/.coffee.ProjectSelecter.js")
      , u = e("../label_selecter/.coffee.LabelSelecter.js")
      , h = e("../minical_ext/.coffee.MiniCalExt.js")
      , f = e("../../models/.coffee.ItemsModel.js")
      , p = {
      last_item_selected: null ,
      highlighted_items: {},
      init: function() {
        $AEV(window, "resize", this.resize),
        r.connect("action_performed", function() {
          p.deselectAll()
        }),
        r.connect("menu_priority_changed", function(e) {
          var t = $all("li", "selected");
          0 !== t.length && ($map(t, function(t) {
            c.updatePriority(t, e)
          }),
          r.sendSignal("refresh_interface", null , !0),
          p.hideSelecta(),
          s.get().hide())
        }),
        r.connect("menu_selecter_delete", function() {
          var e = $all("li", "selected");
          0 !== e.length && (p.deleteItems(),
          a.get().hide())
        }),
        r.connect("menu_selecter_to_history", function() {
          var e = $all("li", "selected");
          0 !== e.length && ($map(e, function(e) {
            f.complete(e.json, !0)
          }),
          r.sendSignal("refresh_interface", null , !0),
          a.get().hide(),
          p.hideSelecta())
        });
        var e = function(e) {
          var t = $all("li", "selected");
          if (0 !== t.length) {
            a.get().hide();
            var n = $gc($("item_commander"), "a", "more_link");
            e(n, t)
          }
        }
        ;
        r.connect("menu_selecter_add_label", $p(e, p.showAddLabel)),
        r.connect("menu_selecter_remove_label", $p(e, p.showRemoveLabel)),
        a.init()
      },
      selectClick: function(e) {
        $AEV(e, "contextmenu", function(e) {
          $isMac() ? e.meta && $preventDefault(e) : e.ctrl && $preventDefault(e)
        }),
        $AEV(e, "mousedown", function(e) {
          var t = $eventElm(e);
          if (t && ($hasClass(t, "amicheckbox") || $hasClass(t, "amicheckbox_img")) && e.shift)
            return !0;
          if ($isMac() && e.meta || !$isMac() && e.ctrl || e.shift) {
            if ($preventDefault(e),
            t && ($hasClass(t, "amicheckbox") || $hasClass(t, "amicheckbox_img")))
              return !0;
            var n = $parent(t, "li");
            if (e.shift && !$hasClass(n, "selected")) {
              var r = p.last_item_selected;
              if (r) {
                for (var o = [], i = !1, s = r.nextSibling; s; )
                  if ($hasClass(s, "reorder_item"))
                    s = s.nextSibling;
                  else {
                    if (s == n) {
                      i = !0;
                      break
                    }
                    o.push(s),
                    s = s.nextSibling
                  }
                if (!i) {
                  o = [];
                  for (var a = r.previousSibling; a; )
                    if ($hasClass(a, "reorder_item"))
                      a = a.previousSibling;
                    else {
                      if (a == n) {
                        i = !0;
                        break
                      }
                      o.push(a),
                      a = a.previousSibling
                    }
                }
                i && $map(o, function(e) {
                  p._selectClick(e)
                })
              }
            }
            return p.last_item_selected = n,
            p._selectClick(n)
          }
        })
      },
      _selectClick: function(e) {
        return p.toggle(e),
        document.selection && document.selection.empty ? document.selection.empty() : $body().focus(),
        !1
      },
      showSelector: function() {
        var e = $all("li", "selected");
        0 === e.length ? this.hideSelecta() : this.showSelecta()
      },
      hideSelecta: function() {
        $fx.fadeOut($("item_commander"), {
          duration: 100,
          onComplete: function() {
            $remove($("item_commander"))
          }
        }),
        this.highlighted_items = {},
        this.last_item_selected = null
      },
      showSelecta: function() {
        if (!$("item_commander")) {
          var e, t, n, r, o;
          $addToTop($body(), DIV({
            id: "item_commander"
          }, this.scheldue = r = A({
            href: "#",
            c: "dp_icon fixed_pos"
          }, _("Schedule")), n = A({
            href: "#",
            c: "fixed_pos"
          }, _("Move to project")), this.priority = o = A({
            href: "#",
            c: "fixed_pos menu_icon"
          }, _("Priority")), t = A({
            href: "#",
            c: "fixed_pos menu_icon more_link"
          }, _("More") + "..."), e = A({
            href: "#",
            id: "deselect_items"
          }, i("cmp_small_close", 16, 16)))),
          $fx.fadeIn($("item_commander"), {
            duration: 100
          }),
          $AEV(e, "click", $b(this.deselectAll, this)),
          $AEV(r, "click", $b(this.showScheldue, this)),
          $AEV(t, "click", $b(this.moreOptions, this)),
          $AEV(n, "click", $p($b(this.moveItems, this), n)),
          $AEV(o, "click", $b(this.showChangePriority, this))
        }
        this.resize()
      },
      deselectAll: function() {
        var e = d.get();
        return "ItemSelecter/toggle" != e && "Agenda/_runQuery" != e && ($removeClass($all("li", "selected"), "selected"),
        this.hideSelecta()),
        !1
      },
      toggle: function(e) {
        return d.mark("ItemSelecter/toggle"),
        $hasClass(e, "selected") ? ($removeClass(e, "selected"),
        p.highlighted_items[e.json.id] && delete p.highlighted_items[e.json.id]) : ($addClass(e, "selected"),
        p.highlighted_items[e.json.id] = !0),
        this.showSelector(),
        !1
      },
      resize: function() {
        var e = $("item_commander")
          , t = $("top_bar");
        e && ($setLeft(e, t.offsetLeft),
        $setWidth(e, t.offsetWidth))
      },
      getProjectItems: function(e) {
        var t = {}
          , n = {};
        return $map(e, function(e) {
          if (e.json && !t[e.json.id]) {
            var r = e.json.project_id;
            n[r] || (n[r] = []),
            n[r].push(e.json.id),
            $map(f.getChildren(e.json, !1), function(e) {
              t[e.id] || (n[r].push(e.id),
              t[e.id] = !0)
            })
          }
        }),
        n
      },
      moreOptions: function(e) {
        var t = a.get();
        return t.show($eventElm(e), e),
        s.get().hide(),
        !1
      },
      deleteItems: function() {
        var e = $all("li", "selected");
        return c.deleteItems(e),
        p.deselectAll(),
        !1
      },
      moveItems: function(e, t) {
        var n = $all("li", "selected");
        return p.showMoveItems(e, n, t),
        !1
      },
      showMoveItems: function(e, t, n) {
        var o = p.getProjectItems(t);
        return l.showTooltip(e, {
          no_swap: !0,
          left_offset: 50,
          top_offset: 28,
          onSelect: function(e) {
            var t = e.id;
            return t && c.moveItems(o, t),
            n && $isFunction(n) && n(),
            r.sendSignal("refresh_interface", null , !0),
            !1
          }
        }),
        !1
      },
      showChangePriority: function(e) {
        var t = s.get()
          , n = $eventElm(e);
        return t.show(n, e, {
          pos_y_offset: 3
        }),
        a.get().hide(),
        !1
      },
      showAddLabel: function(e, t) {
        p.geneircAddRemoveLabel(e, t, {
          title: _("Add label"),
          updateModel: function(e) {
            $map(t, function(t) {
              f.addLabel(t.json, e)
            })
          }
        })
      },
      showRemoveLabel: function(e, t) {
        p.geneircAddRemoveLabel(e, t, {
          title: _("Remove label"),
          updateModel: function(e) {
            $map(t, function(t) {
              f.removeLabel(t.json, e)
            })
          }
        })
      },
      geneircAddRemoveLabel: function(e, t, n) {
        if (window.FLUID_MINI)
          var o = 185;
        else
          var o = 50;
        var i = {
          left_offset: o,
          top_offset: 28,
          onSelect: function(e) {
            return n.updateModel(e),
            r.sendSignal("refresh_interface", null , !0),
            !1
          }
        };
        $update(i, n),
        u.showTooltip(e, i)
      },
      showScheldue: function(e) {
        var t = $eventElm(e)
          , n = $all("li", "selected");
        if (0 === n.length)
          return alert("You must select some tasks"),
          !1;
        o.offset_x = 100,
        o.arrow_left = !0,
        o.offset_y = -7,
        o.show_recurring_help = !1,
        o.with_arrow_top = !0,
        onDateSelect = function(e) {
          c.updateItemsToDate(n, e),
          0 === $all("li", "selected").length && p.hideSelecta(),
          o.remove(),
          p.hideSelecta()
        }
        ;
        var r = n.map(function(e) {
          return e.json
        });
        return h.create(t, onDateSelect, {
          items: r,
          with_batch_smart_schedule: !0,
          on_batch_smart_schedule_submitted: function() {
            p.deselectAll(),
            p.hideSelecta()
          },
          with_today: !0,
          with_tomorrow: !0,
          with_next_week: !0,
          with_postpone: !0,
          with_month: !0,
          with_no_date: !0,
          on_postpone_click: onDateSelect
        }),
        !1
      }
    };
    t.exports = p
  }
  , {
    "../../menus/.coffee.MenuPriorities.js": 126,
    "../../menus/.coffee.MenuSelecterMore.js": 129,
    "../../models/.coffee.ItemsModel.js": 153,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../label_selecter/.coffee.LabelSelecter.js": 53,
    "../minical_ext/.coffee.MiniCalExt.js": 63,
    "../project_selecter/.coffee.ProjectSelecter.js": 88
  }],
  44: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C, T, k, D, E, x, P, M, N, L, R, U, O = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    R = window.Signals,
    d = window.Dateist,
    c = window.DateUtils,
    r = window.Alerts,
    b = window.MouseHover,
    o = window.AmiTooltip,
    u = window.GB_getLast,
    U = window.imageSprite,
    k = e("../../components/people_assigner/.coffee.PeopleAssigner.js"),
    x = e("../../components/project_editor/.coffee.ProjectEditorManager.js"),
    w = e("../../components/labels/Labels.js"),
    N = e("../../components/reminders/Reminders.js"),
    S = e("../notes/Notes.js"),
    C = e("../notes/.coffee.NotesAddTooltip.js"),
    a = e("../../mini/.coffee.ContentTransformers.js").ContentTransformers,
    E = e("../../components/project_selecter/ProjectAutoComplete.js"),
    T = e("../notifier/Notifier.js"),
    P = e("../project_list/.coffee.ProjectListUtils.js"),
    D = e("../../components/people_assigner/PeopleAutoComplete.js"),
    M = e("../../models/.coffee.ProjectsModel.js"),
    y = e("../../models/.coffee.ItemsModel.js"),
    s = e("../../models/.coffee.Collaborators.js"),
    L = e("../../models/.coffee.Reminders.js").RemindersModel,
    i = e("../../models/.coffee.Reminders.js").BufferedRemindersModel,
    j = e("../../menus/.coffee.MenuPriorities.js"),
    v = e("../../menus/.coffee.MenuItemEditMore.js"),
    p = e("../../menus/HelperMenuAnnotations.js"),
    f = e("../generic_manager/GenericManagerUtils.js"),
    l = e("../drag_and_drop/.coffee.DragAndDrop.js"),
    I = e("../richtext_editor/.coffee.NatrualLanguageParsing.js"),
    g = e("./ItemDueDates.js"),
    m = e("./.coffee.ItemCommonEdits.js"),
    h = function() {
      function e() {
        this.addTasksViaPaste = O(this.addTasksViaPaste, this),
        this.parseFormData = O(this.parseFormData, this),
        this.menuIndentGeneric = O(this.menuIndentGeneric, this),
        this.annotateMoreButton = O(this.annotateMoreButton, this),
        this.annotateNoteButton = O(this.annotateNoteButton, this),
        this.menuPriorityUpdated = O(this.menuPriorityUpdated, this),
        this.annotatePrioirtyButton = O(this.annotatePrioirtyButton, this),
        this.annotateReminderButton = O(this.annotateReminderButton, this),
        this.genericSaveItem = O(this.genericSaveItem, this),
        this.genericAddItem = O(this.genericAddItem, this),
        this.genericCancelEdit = O(this.genericCancelEdit, this),
        this.onShowContent = O(this.onShowContent, this),
        this.onSaveContent = O(this.onSaveContent, this),
        this.duedatePredictReqData = O(this.duedatePredictReqData, this),
        this.generateForm = O(this.generateForm, this),
        R.connect("menu_priority_changed", this.menuPriorityUpdated),
        R.connect("menu_indent_left", $p(this.menuIndentGeneric, -1)),
        R.connect("menu_indent_right", $p(this.menuIndentGeneric, 1)),
        R.connect("focus_current_item_input", function() {
          var e, t;
          if (e = $("editor"),
          e && (t = $child(e, null , "richtext_editor")))
            try {
              return t.proxyFocus()
            } catch (e) {
              return null
            }
        })
      }
      return e.prototype.current_priority = 4,
      e.prototype.generateForm = function(e, t) {
        var n, o, s, l, u, h, p, m, y, v, j, b, $, A, S, C, T, P, N, L, R, U;
        return n = null != (U = e.current_item) ? U.json : void 0,
        e.name_val && (a.setupByContent(e.name_val),
        a.type && (e.name_val = a.onContentShow(e.name_val))),
        p = g.createDueInput(e, function(e) {
          return function() {
            return e.duedatePredictReqData(s.form, n)
          }
        }(this)),
        e.due_date && (v = n ? n.date_lang : window.DATEIST_LANG || "en",
        m = d.is_recurring(e.date_string, {
          lang: v
        }),
        m ? p.value = e.date_string : p.value = c.format(e.due_date)),
        e.inputs = [p],
        l = e.td_extra = SPAN({
          c: "form_icon_holder"
        }, T = SPAN(), y = SPAN(), N = SPAN(), S = SPAN(), b = SPAN(), j = SPAN()),
        o = x.current_editor,
        o || (o = x.createEditorInstance()),
        e.withPlaceholders = !0,
        s = o.generateAddEditForm(e),
        a.type && !$hasClass(s.text_box_holder, "has_content_icon") && a.annotateWithIcon(s.textarea),
        e.name_val ? I.truncate_links = !0 : I.truncate_links = !1,
        h = !1,
        e.name_val && e.name_val.length > 0 && (h = !0),
        I.attach(s.textarea, h),
        $add(s.input_holders_tr, R = TD({
          c: "due_date_holder minical_holder"
        }, p)),
        $AEV(R, "click", function(e) {
          return function(e) {
            var t;
            if (t = $eventElm(e),
            "a" !== $nodeName(t))
              return p.focus()
          }
        }(this)),
        s.duedate = p,
        n || (s.textarea.onsubmit = $p(e.action, s.form),
        s.textarea.onMultilinePaste = function(e) {
          return function(t, n) {
            var o;
            return o = n.split("\n"),
            t = e.getEditorTextarea(),
            !(t && o.length > 1) || (r.confirm(_("Do you want to add %s tasks?").replace("%s", o.length), function(r) {
              return r ? e.addTasksViaPaste(t, o) : (t.proxyFocus(),
              document.execCommand("insertHTML", !1, n),
              t.onchanged())
            }),
            !1)
          }
        }(this)),
        P = (null != n ? n.project_id : void 0) || o.project_id,
        i.current_project_id = P,
        C = M.get(P) || M.getInbox(),
        C ? (s.form.responsible_uid = e.responsible_uid || void 0,
        $ = new k({
          from_rendering: !1,
          project_id: P,
          responsible_uid: s.form.responsible_uid,
          fn_on_select: function(e) {
            return s.form.responsible_uid = e
          }
        }),
        s.form.people_assigner = $,
        $add(s.input_holders_tr, TD({
          c: "people_assigner_holder"
        }, $.render())),
        $add(s.input_holders_tr, TD({
          c: "menu"
        }))) : $add(s.input_holders_tr, TD({
          c: "people_assigner_holder"
        })),
        e.no_indent && (s.form.no_indent = !0),
        L = s.textarea,
        e.current_item && (L.proxySetValue(w.textFormat(e.name_val, e.current_item.json.labels), !0, !1),
        u = f.getIndent(e.current_item),
        f.setIndent(s.li_item, u)),
        w.annotateFormArea(L, y),
        e.with_project_button === !1 && ($swap(T, null ),
        T = null ),
        E.annotateFormArea(L, T),
        i.reset(),
        N = this.annotateReminderButton(N, e),
        this.annotateNoteButton(b, e, P),
        this.note_button && (e.on_ctrl_m = function(e) {
          return function() {
            if (!n)
              return e.note_button.onclick()
          }
        }(this)),
        e.no_indent ? $remove(j) : this.annotateMoreButton(j, e, s.li_item),
        A = 4,
        e.priority && (A = 5 - e.priority),
        this.current_priority = A,
        S = this.annotatePrioirtyButton(S, A),
        D.annotateFormArea(L),
        t && t.fixed_pos && $addClass([L, p, S, N, y, j], "fixed_pos"),
        s.form.old_date = s.duedate.value,
        s
      }
      ,
      e.prototype.duedatePredictReqData = function(e, t) {
        var n, r;
        return n = this.parseFormData(e, null , !1),
        r = {
          id: t ? t.id : null ,
          due_date: t ? t.due_date : null ,
          postpone_count: t ? t.postpone_count : 0,
          content: n.content,
          priority: n.priority,
          project_id: n.project_id,
          labels: t ? t.labels : []
        }
      }
      ,
      e.prototype.onSaveContent = function(e) {
        return a.type ? a.onContentSave(e) : e
      }
      ,
      e.prototype.onShowContent = function(e) {
        return a.type ? a.onContentShow(e) : e
      }
      ,
      e.prototype.genericCancelEdit = function() {
        return C.reset(),
        a.onContollerHide()
      }
      ,
      e.prototype.genericAddItem = function(e, t) {
        var n;
        if (n = a,
        n.type && (t.content = n.onContentSave(t.content),
        n.onContollerHide()),
        void 0 !== e.responsible_uid)
          return t.responsible_uid = e.responsible_uid,
          e.people_assigner = null
      }
      ,
      e.prototype.genericSaveItem = function(e, t) {
        var n, r, o, i, s, c, d, l, h, _, p, m, w, v;
        return s = $parent(t, "li"),
        r = $f(t, "due_date"),
        o = r.value,
        n = g.parseDueDate(r),
        n !== !1 && (_ = 5 - this.current_priority,
        m = {
          id: e.json.id,
          content: this.onSaveContent($gc(t, null , "richtext_editor").proxyGetValue()),
          priority: _
        },
        "" === m.content && (m.content = e.json.content),
        t.no_indent !== !0 && (f.normalizeIndent(s, e),
        c = f.getIndent(s),
        m.indent = c,
        i = x.current_editor,
        i || (i = x.createEditorInstance()),
        l = f.getParent(e, c),
        h = null ,
        l && l.json && l.json.id && (h = l.json.id),
        e.json.parent_id !== h && (m.parent_id = h)),
        t.old_date !== o && (m.due_date = n.due_date,
        m.date_string = n.date_string,
        m.date_lang = n.date_lang),
        $addAfter(e, s),
        $remove(s),
        p = $gc(t, null , "richtext_editor"),
        m = I.annotateFormData(p, m),
        m.responsible_uid || (void 0 !== t.responsible_uid && e.json.responsible_uid !== t.responsible_uid && (m.responsible_uid = t.responsible_uid),
        t.people_assigner = null ),
        m.item_order || delete m.item_order,
        v = y.update(e.json.id, m),
        d = v[0],
        w = v[1],
        this.current_priority = 4,
        this.priority_button = null ,
        a.type && a.onContollerHide(),
        u() && R.sendSignal("refresh_interface", null , !0),
        {
          item: d,
          is_updated: w
        })
      }
      ,
      e.prototype.annotateReminderButton = function(e, t) {
        var n, r, i;
        return r = t.current_item,
        r && L.hasReminders(r.json.id) ? (i = "cmp_reminders_on",
        $addClass(e.parentNode, "force_form_show")) : i = "cmp_reminders",
        n = U(i, 22, 16),
        n.id = "reminders_icon",
        $addClass(n, "form_action_icon menu_icon"),
        $AEV(n, "click", function(e) {
          return o.hide(),
          $addClass(n.parentNode, "force_form_show"),
          N.showTooltip(r, n, e),
          !1
        }),
        o.showSimpleText(n, _("Reminders"), null , 3, 5),
        $swap(e, n),
        n
      }
      ,
      e.prototype.annotatePrioirtyButton = function(e, t) {
        var n;
        return null == t && (t = 4),
        n = U("cmp_priority" + t, 22, 16),
        4 !== t && $addClass(e.parentNode, "force_form_show"),
        $AEV(n, "click", function(e) {
          return function(t) {
            var r;
            return o.hide(),
            r = j.get(),
            r.show(n, t),
            p.selectPriority(r, 5 - e.current_priority),
            $addClass(n.parentNode, "force_form_show"),
            !1
          }
        }(this)),
        o.showSimpleText(n, _("Priority")),
        $addClass(n, "form_action_icon menu_icon"),
        $swap(e, n),
        this.priority_button = n,
        n
      }
      ,
      e.prototype.menuPriorityUpdated = function(e) {
        return this.priority_button && (e = 5 - e,
        this.current_priority = e,
        j.get().hide(),
        this.annotatePrioirtyButton(this.priority_button, e),
        R.sendSignal("focus_current_item_input")),
        !1
      }
      ,
      e.prototype.annotateNoteButton = function(e, t, n) {
        var r, i;
        return t.current_item || !S.isPremium(n) ? void $remove(e) : (r = U("cmp_comment_on", 15, 14),
        i = function(e) {
          return o.hide(),
          $addClass(r.parentNode, "force_form_show"),
          C.showTooltip(r, e),
          !1
        }
        ,
        r.onclick = i,
        o.showSimpleText(r, _("Quick Comment"), null , 5),
        $addClass(r, "form_action_icon menu_icon"),
        $swap(e, r),
        this.note_button = r,
        r)
      }
      ,
      e.prototype.annotateMoreButton = function(e, t, n) {
        var r;
        return r = U("cmp_menu_on", 22, 16),
        $AEV(r, "click", function(e) {
          var t;
          return t = v.get(),
          t.show(r, e),
          !1
        }),
        $addClass(r, "form_action_icon menu_icon"),
        $swap(e, r),
        this.more_button = r,
        this.more_button.li_item = n,
        r
      }
      ,
      e.prototype.menuIndentGeneric = function(e) {
        var t;
        return t = x.current_editor,
        t && this.more_button && t.incIndent(this.more_button.li_item, e),
        v.get().hide(),
        R.sendSignal("focus_current_item_input")
      }
      ,
      e.prototype.parseFormData = function(e, t, n) {
        var r, o, i, s, a, c, d, l, u, h;
        return null == t && (t = null ),
        null == n && (n = !0),
        s = $parent(e, "li"),
        s ? (d = s.previousSibling,
        c = d && d.json && d.json.item_order + 1 || 1) : c = null ,
        i = $f(e, "due_date"),
        o = g.parseDueDate(i),
        o !== !1 && (l = 5 - this.current_priority,
        h = $gc(e, null , "richtext_editor"),
        r = $strip(h.proxyGetValue()),
        f.normalizeIndent(s, s),
        u = {
          content: r,
          project_id: t || x.current_project_id || window.User.inbox_project,
          indent: s && f.getIndent(s) || 1,
          priority: l,
          due_date: o.due_date,
          date_string: o.date_string,
          date_lang: o.date_lang
        },
        c && (u.order = c),
        a = C.getValue(),
        a.length > 0 && (u.note = a,
        n && C.reset()),
        u = I.annotateFormData(h, u))
      }
      ,
      e.prototype.removeItemInList = function(e) {
        var t;
        for (t = e.nextSibling; ; ) {
          if (!t)
            break;
          if ($isShown(t))
            break;
          t = t.nextSibling
        }
        if ($addClass(e, "checked"),
        $addClass(e, "complete_animation"),
        setTimeout($p($remove, e), 140),
        t && $hasClass(t, "task_item"))
          return l.attachHandler(t)
      }
      ,
      e.prototype.notifyAddedToProject = function(e, t, n) {
        return setTimeout(function() {
          var r, o, i;
          return o = A({
            c: "project_link",
            href: "#project/" + e.project_id
          }, t.name),
          $AEV(o, "click", function() {
            return T.hide(),
            P.setCurrentById(t.id, e.id),
            !1
          }),
          r = A({
            href: "#",
            c: "hide_link"
          }, _("Hide")),
          $AEV(r, "click", T.hide),
          i = "updated" === n ? _("Task moved to") : _("Task added to"),
          T.show(SPAN(i, " ", o, r))
        }, 100)
      }
      ,
      e.prototype.addTasksViaPaste = function(e, t) {
        var n;
        return this.paste_timeout && (clearTimeout(this.paste_timeout),
        this.paste_timeout = null ),
        this.paste_last_ta = null ,
        this.paste_tries = 0,
        n = function(n) {
          return function() {
            var r;
            if (n.paste_tries > 10)
              return n.paste_tries = 0,
              n.paste_last_ta = null ,
              void clearTimeout(n.paste_timeout);
            if (e = n.getEditorTextarea(),
            e && e !== n.paste_last_ta) {
              for (; ; ) {
                if (r = t.shift(),
                void 0 === r)
                  break;
                if (r = $strip(r),
                r.length > 0)
                  break
              }
              return r && (null === n.paste_last_ta && (r = e.proxyGetValue() + " " + r),
              r.length > 0 && (e.proxySetValue(r, !1),
              e.onchanged(),
              e.onsubmit())),
              n.paste_last_ta = e
            }
            return n.paste_tries += 1
          }
        }(this),
        this.paste_timeout = setInterval(n, 50)
      }
      ,
      e.prototype.getEditorTextarea = function() {
        var e;
        return e = $("editor"),
        e ? $child(e, null , "richtext_editor") : null
      }
      ,
      e
    }(),
    t.exports = new h
  }
  , {
    "../../components/labels/Labels.js": 54,
    "../../components/people_assigner/.coffee.PeopleAssigner.js": 75,
    "../../components/people_assigner/PeopleAutoComplete.js": 76,
    "../../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../../components/project_selecter/ProjectAutoComplete.js": 89,
    "../../components/reminders/Reminders.js": 100,
    "../../menus/.coffee.MenuItemEditMore.js": 124,
    "../../menus/.coffee.MenuPriorities.js": 126,
    "../../menus/HelperMenuAnnotations.js": 131,
    "../../mini/.coffee.ContentTransformers.js": 140,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.Reminders.js": 162,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../notes/.coffee.NotesAddTooltip.js": 67,
    "../notes/Notes.js": 71,
    "../notifier/Notifier.js": 73,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "../richtext_editor/.coffee.NatrualLanguageParsing.js": 103,
    "./.coffee.ItemCommonEdits.js": 46,
    "./ItemDueDates.js": 48
  }],
  45: [function(e, t, n) {
    var r, o, i, s;
    r = window.AmiCheckbox,
    i = e("../../models/.coffee.StateModel.js"),
    s = e("../../models/.coffee.UtilModels.js"),
    o = function() {
      function e() {}
      return e.prototype.create = function(e, t, n) {
        var o;
        return void 0 === n && (n = e.json.checked),
        o = r.genereate(),
        $AEV(o, ["click", "touchend"], function(n) {
          return !o.disabled && !n.ctrl && i.get("drag_and_drop_mode") !== i.DragMode.reordering && t(e, n)
        }),
        s.isBulletItem(e.json.content) || r.setChecked(o, n),
        o
      }
      ,
      e.prototype.update = function(e, t, n, r) {
        var o, i;
        if (null == r && (r = !0),
        e)
          return t ? (r && (e.json.checked = 1),
          $addClass(e, "checked")) : (r && (e.json.checked = 0),
          $removeClass(e, "checked")),
          o = $all("div", "amicheckbox", e)[0],
          i = this.create(e, n, t),
          $swap(o, i),
          i
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../models/.coffee.StateModel.js": 164,
    "../../models/.coffee.UtilModels.js": 172
  }],
  46: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    g = window.Signals,
    i = window.Alerts,
    a = window.Dateist,
    c = window.DateistDateHelpers,
    s = window.DateUtils,
    o = e("../../components/agenda/.coffee.AgendaUtils.js"),
    p = e("../project_list/.coffee.ProjectListUtils.js"),
    u = e("../../models/.coffee.ItemsModel.js"),
    m = e("../../models/.coffee.ProjectsModel.js"),
    h = e("../../models/.coffee.ModelUndo.js"),
    l = e("../generic_manager/GenericManagerUtils.js"),
    f = e("../notifier/Notifier.js"),
    r = e("../action_perfomed/.coffee.ActionPerformed.js"),
    d = function() {
      function e() {
        this.updateItems = y(this.updateItems, this),
        this.updateItemsToDate = y(this.updateItemsToDate, this),
        this.showUndo = y(this.showUndo, this),
        this.markForUndo = y(this.markForUndo, this),
        this.updatePriority = y(this.updatePriority, this),
        g.connect("mark_for_undo", this.markForUndo)
      }
      return e.prototype.updatePriority = function(e, t) {
        var n, o, i, s, a, c;
        if (r.mark("ItemCommonEdits/updatePriority"),
        g.sendSignal("update_priority", e, t),
        e.json) {
          for (a = u.update(e.json.id, {
            priority: t
          }),
          e = a[0],
          o = a[1],
          c = $all("li", "item_" + e.id),
          i = 0,
          s = c.length; i < s; i++)
            n = c[i],
            $update(n.json, e),
            this._setPriority(n);
          return g.sendSignal("update_counters")
        }
      }
      ,
      e.prototype._setPriority = function(e) {
        var t, n, r, o;
        for (o = [1, 2, 3, 4],
        n = 0,
        r = o.length; n < r; n++)
          t = o[n],
          $removeClass(e, "priority_" + t);
        return $addClass(e, "priority_" + e.json.priority)
      }
      ,
      e.prototype.deleteItems = function(e) {
        var t, n, r, o, s, a, c, d, l, h, f, p, m, y;
        for (h = {},
        l = {},
        r = 0,
        t = function(e) {
          var t;
          if (!h[e.id])
            return t = l[e.project_id],
            t || (t = l[e.project_id] = []),
            r += 1,
            t.push(e.id),
            h[e.id] = e
        }
        ,
        c = [],
        f = 0,
        m = e.length; f < m; f++)
          if (s = e[f],
          s.json) {
            for (a = u.getById(s.json.id),
            d = u.getChildren(a, !0),
            p = 0,
            y = d.length; p < y; p++)
              n = d[p],
              t(n);
            c.push(s)
          }
        return r > 1 ? (o = _("Are you sure you want to delete %s task(s)?"),
        o = o.replace("%s", r)) : (o = _("Are you sure you want to delete %s?"),
        o = o.replace("%s", "`" + $trim(d[0].content, 50) + "`")),
        i.confirm(o, function(e) {
          var t, n, r, o, i;
          if (e) {
            for (n in l)
              t = l[n],
              u.deleteItem(t, parseInt(n));
            for (g.sendSignal("update_counters"),
            g.sendSignal("refresh_interface", null , !0),
            i = [],
            r = 0,
            o = c.length; r < o; r++)
              s = c[r],
              i.push($remove(s));
            return i
          }
        })
      }
      ,
      e.prototype.markForUndo = function(e, t, n) {
        return h.markCheckpoint(e, t),
        this.showUndo(n)
      }
      ,
      e.prototype.undo = function() {
        var e, t, n, r, o, i;
        if ($("undo_link")) {
          for (e = h.getCurrentCheckpoint(),
          i = e.items,
          r = 0,
          o = i.length; r < o; r++)
            n = i[r],
            t = $("item_" + n.id),
            t && $hasClass(t, "history_item") && $remove(t);
          h.restore(),
          f.hide(),
          g.sendSignal("refresh_interface", null , !0)
        }
        return !1
      }
      ,
      e.prototype.showUndo = function(e) {
        var t, n, r;
        return r = A({
          href: "#",
          id: "undo_link"
        }, _("Undo")),
        $AEV(r, "click", this.undo),
        n = A({
          href: "#",
          c: "hide_link"
        }, _("Hide")),
        $AEV(n, "click", f.hide),
        t = e.replace("%s", Math.abs(h.getCurrentCheckpoint().items.length)),
        f.show(SPAN(t, r, n), !0)
      }
      ,
      e.prototype.updateItemsToDate = function(e, t) {
        var n, r, o, i, d, l, h, f, p, m, g;
        for (f = t ? _("Date updated") : _("Date removed"),
        e = e.filter(function(e) {
          return e.json
        }),
        l = e.map(function(e) {
          return e.json
        }),
        this.markForUndo(l, "postpone", f),
        g = [],
        o = p = 0,
        m = e.length; p < m; o = ++p)
          d = e[o],
          i = d.json,
          n = {},
          h = t instanceof Array ? t[o] : t,
          h ? i.due_date ? (n.due_date = c.inherit_date(h, i.due_date),
          a.is_recurring(i.date_string, {
            lang: i.date_lang
          }) || (n.date_string = s.format(n.due_date),
          n.date_lang = window.DATEIST_LANG || "en")) : (r = s.dateistResultFromDate(h),
          r.due_date && (n.due_date = r.due_date,
          n.date_string = r.date_string,
          n.date_lang = r.date_lang)) : (n.due_date = null ,
          n.date_string = ""),
          u.update(i.id, n),
          g.push(this.updateItems([d], !0, !1));
        return g
      }
      ,
      e.prototype.updateItems = function(e, t, n) {
        var r, i, s, a, c, d, l, u;
        for (a = 0,
        d = e.length; a < d; a++)
          if (i = e[a],
          i.json)
            for (u = $all("li", "item_" + i.json.id),
            c = 0,
            l = u.length; c < l; c++)
              r = u[c],
              s = r.render_opts.renderCls ? r.render_opts.renderCls.renderItem(r.json, r.render_opts) : o.renderItem(r.json, r.render_opts),
              s.disabled = !1,
              n ? ($ATT($parent(r, "ul"), s),
              $remove(r)) : $swap(r, s);
        return g.sendSignal("refresh_interface", null , !0),
        g.sendSignal("update_counters")
      }
      ,
      e.prototype.moveItems = function(e, t) {
        var n;
        return f.hide(),
        r.mark("ItemCommonEdits/moveItems"),
        u.moveMultiple(e, t, !0),
        n = $keys(e),
        n.push(t),
        g.sendSignal("projects.rerender", n),
        g.sendSignal("refresh_interface", null , !0),
        g.sendSignal("hide_editor_menu")
      }
      ,
      e.prototype.notifyAddedTo = function(e, t) {
        var n, r, o, i;
        return null == t && (t = !0),
        n = A({
          href: "#",
          c: "hide_link"
        }, _("Hide")),
        $AEV(n, "click", f.hide),
        o = _("Task added to"),
        t && e.date_string.length > 0 ? i = e.date_string : (r = m.get(e.project_id),
        i = A({
          c: "project_link",
          href: "#project/" + e.project_id
        }, r.name),
        $AEV(i, "click", function() {
          return f.hide(),
          p.setCurrentById(r.id, e.id),
          !1
        })),
        f.show(SPAN(o, " ", i, n))
      }
      ,
      e
    }(),
    t.exports = new d
  }
  , {
    "../../components/agenda/.coffee.AgendaUtils.js": 12,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ModelUndo.js": 156,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../notifier/Notifier.js": 73,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  47: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, $, A, S, C, T, k, D = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.Dateist,
    c = window.DateistDateHelpers,
    s = window.DateUtils,
    w = window.MenuRightClick,
    C = window.Signals,
    o = window.AmiTooltip,
    k = window.imageSprite,
    r = e("../agenda/.coffee.AgendaUtils.js"),
    j = e("../people_assigner/.coffee.PeopleAssigner.js"),
    y = e("../labels/Labels.js"),
    v = e("../notes/.coffee.NotesUtils.js"),
    m = e("../item_selecter/ItemSelecter.js"),
    d = e("../drag_and_drop/.coffee.DragAndDrop.js"),
    h = e("../generic_manager/GenericManagerUtils.js"),
    I = e("../project_editor/.coffee.ProjectEditorManager.js"),
    $ = e("../project_list/.coffee.ProjectListUtils.js"),
    b = e("../project_list/.coffee.ProjectColors.js"),
    l = e("../formatter/Formatter.js"),
    m = e("../item_selecter/ItemSelecter.js"),
    g = e("../../models/.coffee.ItemsModel.js"),
    A = e("../../models/.coffee.ProjectsModel.js"),
    S = e("../../models/.coffee.Reminders.js").RemindersModel,
    i = e("../../models/.coffee.Collaborators.js"),
    T = e("../../models/.coffee.UtilModels.js"),
    f = e("./.coffee.ItemCheckbox.js"),
    p = e("./ItemDueDates.js"),
    u = function() {
      function e() {
        this.createProjectItem = D(this.createProjectItem, this),
        this.getMenuEditIcon = D(this.getMenuEditIcon, this),
        this.renderItem = D(this.renderItem, this)
      }
      return e.prototype.renderItem = function(e, t) {
        var n, r, u, b, I, $, D, E, x, P, M, N, L, R, U, O, V, B, H, F, G, q, z;
        return U = A.get(e.project_id),
        e.due_date && $isString(e.due_date) && g.convertToDateObject(e),
        M = LI({
          c: "task_item item_" + e.id,
          id: "item_" + e.id
        }),
        M.json = e,
        e.checked && $addClass(M, "checked"),
        $add(M, x = TABLE({
          cellpadding: 0,
          cellspacing: 0
        }, O = TBODY())),
        m.highlighted_items[e.id] && $addClass(M, "selected"),
        M.td_checker = B = TD({
          c: "checker sel_checkbox_td"
        }),
        T.isBulletItem(e.content) || t.no_checkbox === !0 ? M.td_checker = B = TD() : (r = e.is_archived ? function() {
          return alert(_("This project is archived. Unarchive it to be able to edit it.")),
          f.update(M, e.checked, r),
          !0
        }
        : e.checked ? t.fn_undo_complete_item : t.fn_complete_item,
        $add(B, n = f.create(M, r))),
        F = null ,
        t.with_time && (q = "40px",
        window.Settings.AMPM && (q = "67px"),
        c.has_time(e.due_date) && (I = DIV({
          class: "div_time"
        }, SPAN(s.getHourAndMin(e.due_date))),
        I.style.minWidth = q,
        c.is_overdue(new Date, e.due_date) && $addClass(I, "time_overdue"),
        F = TD({
          class: "time task_content_item"
        }, I))),
        H = null ,
        t.with_project && (M.td_project = H = TD({
          class: "project task_content_item"
        }, this.createProjectItem(e)),
        t.with_due_date || p.updateAlarmIcon(H, S.hasReminders(e.id)),
        !t.with_due_date && a.is_recurring(e.date_string, {
          lang: e.date_lang
        }) && ($ATT(H, P = k("cmp_recurring", 12, 11)),
        o.showTooltip(P, $p(p.createTooltipContent, e)))),
        V = null ,
        U && i.isProjectShared(U.id) ? (E = function(t) {
          return g.update(e.id, {
            responsible_uid: t
          }),
          C.sendSignal("people_assigner_person_changed"),
          e
        }
        ,
        R = {
          fn_on_select: E,
          responsible_uid: e.responsible_uid,
          project_id: U.id,
          from_rendering: !0
        },
        L = new j(R),
        V = TD({
          c: "assign_user task_content_item"
        }, L.render(R))) : $addClass(M, "not_shared"),
        $ATT(M, DIV({
          c: "invisible_space"
        })),
        b = null ,
        t.with_due_date && (b = DIV({
          c: "text_cursor div_due_date"
        }, $ = p.create(e))),
        z = l.format(e.content),
        z = z.replace(/^\*\s+/g, ""),
        G = $setHTML(SPAN({
          c: "text sel_item_content"
        }), z),
        v.annotate(e, G, M),
        $add(G, $setHTML(DIV(), y.format("", e))),
        M.content = u = TD({
          c: "text_cursor content task_content_item"
        }, b, G),
        M.td_menu = N = null ,
        D = !0,
        (e.is_archived || t.not_editable) && (D = !1),
        M.td_menu = N = TD({
          c: "menu"
        }),
        D && ($add(N, this.getMenuEditIcon(M, t.fn_toggle_menu, M.td_menu)),
        new w(M,$p(t.fn_toggle_menu, M, {
          id: e.id
        }, e.id)),
        m.selectClick(M),
        t.no_drag_and_drop || d.attach(M)),
        t.no_indent || h.setIndent(M, e.indent, !0),
        $addClass(M, "priority_" + e.priority),
        F ? $add(O, TR(B, F, u, H, V, N)) : $add(O, TR(B, u, H, V, N)),
        M.render_opts = t,
        M
      }
      ,
      e.prototype.getMenuEditIcon = function(e, t, n) {
        var r;
        return r = h.getMenuEditIcon(),
        $AEV(n, ["click", "touchend"], $p(t, e, r, e.json.id)),
        e.menu_icon = r,
        r
      }
      ,
      e.prototype.createProjectItem = function(e, t) {
        var n, r, o, i;
        return null == t && (t = null ),
        t || (t = A.get(e.project_id)),
        t || (t = A.temporary_projects[e.project_id]),
        t || (t = {
          name: _("Undefined"),
          id: null ,
          color: null
        }),
        n = t.name,
        n = n.replace(/^-\s*/, ""),
        n = $trim(n, 30),
        o = SPAN({
          c: "agenda_project_color"
        }, ""),
        i = SPAN({
          c: "clickable project_item"
        }),
        $add(i, $setHTML(SPAN({
          c: "pname"
        }), l.format(n))),
        $add(i, o),
        r = t.color || 0,
        t.inbox_project && (r = 7),
        r = b.getHexCode(t),
        o.style.backgroundColor = r,
        o.style.color = r,
        $AEV(i, "click", function(n) {
          return !n.ctrl && !n.shift && (t.id && $.setCurrentById(t.id, e.id),
          !1)
        }),
        i
      }
      ,
      e
    }(),
    t.exports = new u
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.Reminders.js": 162,
    "../../models/.coffee.UtilModels.js": 172,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../formatter/Formatter.js": 38,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../item_selecter/ItemSelecter.js": 43,
    "../labels/Labels.js": 54,
    "../notes/.coffee.NotesUtils.js": 69,
    "../people_assigner/.coffee.PeopleAssigner.js": 75,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../project_list/.coffee.ProjectColors.js": 85,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "./.coffee.ItemCheckbox.js": 45,
    "./ItemDueDates.js": 48
  }],
  48: [function(e, t, n) {
    var r = window.Dateist
      , o = window.DateistDateHelpers
      , i = window.DateUtils
      , s = window.AmiTooltip
      , a = window.imageSprite
      , c = e("../../components/smart_scheduler/.coffee.QuickDayShow.js")
      , d = e("../../models/.coffee.Reminders.js").RemindersModel
      , l = e("../../components/minical_ext/.coffee.MiniCalExt.js")
      , u = {
      createDueInput: function(e, t) {
        var n = INPUT({
          type: "text",
          c: "input_due_date dp_icon",
          name: "due_date",
          tabIndex: 2,
          autocomplete: "off",
          placeholder: _("Schedule")
        })
          , r = function() {
          n.date_string = "",
          n.no_date = !0,
          MiniCal.reset(),
          n.value = ""
        }
          , s = function(e, t) {
          var n, r = $gp(e, "table");
          r && (n = $gc(r, "div", "richtext_editor")),
          n && ("" === e.value ? n.dateist_disabled = !1 : n.dateist_disabled = !0,
          n.save_position = !1,
          n.onchanged && n.onchanged(),
          t && e.focus())
        }
          , a = function(t) {
          if (t) {
            t = o.has_time(e.due_date) ? o.inherit_date(t, e.due_date) : o.date_max(t);
            var r = {};
            o.is_overdue(new Date, t) && (r.with_year = !0),
            n.value = i.format(t, !1, r),
            n.date_string = i.jsonFormat(t),
            MiniCal.setCurrentNoRender(t)
          } else
            n.value = "",
            n.date_string = "";
          n.no_date = !1,
          n.use_custom = !1,
          s(n, !1),
          $isIe() && n.value && $removeClass(n, "dummy_text"),
          window.SHOULD_HIDE = !0,
          setTimeout(function() {
            window.SHOULD_HIDE = !1
          }, 15);
          try {
            n.focus()
          } catch (e) {}
          try {
            $remove($all("span", "error", $f($parent(n, "form"))))
          } catch (e) {}
          MiniCal.remove()
        }
        ;
        return e && e.due_date ? a(new Date(e.due_date), !0) : r(),
        $AEV(n, "keydown", function(t) {
          return n.use_custom = !0,
          13 == t.keyAscii ? (MiniCal.remove(),
          !1) : 9 != t.keyAscii || AmiComplete.shown() ? 27 == t.keyAscii ? MiniCal.shown ? (MiniCal.remove(),
          !1) : ($preventDefault(t),
          $child($parent(n, "form"), "a", "cancel").onclick(),
          !1) : void 0 : (MiniCal.remove(),
          setTimeout(function() {
            var t = $parent(n, "form");
            e.due_date_focus ? e.due_date_focus() : t.people_assigner && t.people_assigner.isShown() ? t.people_assigner.showTooltip() : $gc(t, null , "richtext_editor").proxyPlaceCursor()
          }, 10),
          !1)
        }),
        $AEV(n, "keypress", function(e) {
          return 9 == e.keyAscii || void s(n, !0)
        }),
        $AEV(n, ["focus", "click"], function() {
          window.SHOULD_HIDE || AmiComplete.shown() || setTimeout(function() {
            if (MiniCal.click_elm != n) {
              var e = t();
              l.create(n, a, {
                with_smart_schedule: !0,
                with_today: !0,
                with_tomorrow: !0,
                with_next_week: !0,
                with_month: !0,
                with_no_date: !0,
                items: e
              })
            }
          }, 2)
        }),
        MiniCal.noDate = r,
        MiniCal.show_recurring_help = !0,
        MiniCal.on_recur_date_click = function(e) {
          n.value = e,
          n.date_string = e,
          s(n, !0)
        }
        ,
        MiniCal.with_arrow_top = !0,
        MiniCal.offset_x = -30,
        MiniCal.arrow_left = !1,
        MiniCal.offset_y = 0,
        MiniCal.close_fn_eval = null ,
        DummyText.attach(n, [n], _("Schedule")),
        n
      },
      parseDueDate: function(e) {
        var t = null ;
        if ("" !== e.value) {
          if (t = i.parse(e.value),
          t.error || !t.due_date) {
            u.flashDateError(e);
            var n = $request("/API/v7/mark_invalid_date");
            return n.addErrback(function() {}),
            n.sendReq({
              date_string: e.value,
              lang: window.LANG,
              translated: "dateist"
            }),
            !1
          }
          return t
        }
        return {
          date_string: "",
          due_date: null ,
          date_lang: "en"
        }
      },
      flashDateError: function(e) {
        var t = $parent(e, "form")
          , n = e.parentNode;
        $remove($all("span", "error", n));
        var r = A({
          href: "#"
        }, _("Help"));
        $AEV(r, "click", u.showDateInsert);
        var o = SPAN({
          c: "error",
          s: "padding: 2px"
        }, _("Invalid date"), r);
        $ATT(n, o),
        AmiButton.enable($child(t, "a", "submit_btn")),
        MiniCal.create(e.parentNode)
      },
      create: function(e, t) {
        if (e.due_date) {
          var n = SPAN({
            class: "date"
          })
            , c = r.is_recurring(e.date_string, {
            lang: e.date_lang
          })
            , l = new Date
            , h = new Date;
          h.setDate(h.getDate() + 1);
          var f = o.is_overdue(l, e.due_date)
            , _ = o.day_diff(new Date, e.due_date)
            , p = i.humanizeDayDiff(_, e.due_date)
            , m = _ <= 7 && _ >= -7;
          return m && $addClass(n, "date_future"),
          !t && window.AmiTooltip && s.showTooltip(n, $p(u.createTooltipContent, e)),
          $add(n, p),
          o.is_same_date(e.due_date, l) ? $addClass(n, "date_today") : o.is_same_date(e.due_date, h) ? $addClass(n, "date_tom") : f && $addClass(n, "date_overdue"),
          c && $ATT(n, a("cmp_recurring", 12, 11, "recurring_icon")),
          this.updateAlarmIcon(n, d.hasReminders(e.id)),
          n
        }
        var g = SPAN({
          class: "date empty"
        })
          , y = this.updateAlarmIcon(g, d.hasReminders(e.id));
        return y && (y.style.marginRight = "0px"),
        g
      },
      createTooltipContent: function(e) {
        var t, n = new Date, s = o.is_overdue(n, e.due_date), a = o.day_diff(new Date, e.due_date), d = a <= 7 && a >= -7, l = r.is_recurring(e.date_string, {
          lang: e.date_lang
        }), u = i.formatView(e.due_date, !d || s), h = !1;
        if (a > 0 ? t = (1 == a || a == -1) && _("day left") || _("days left") : a < 0 && (a = Math.abs(a),
        t = (1 == a || a == -1) && _("day ago") || _("days ago"),
        h = !0),
        0 !== a) {
          var f = "<span>" + a + "</span> ";
          u += "<br /><small>" + f + t + "</small>"
        }
        if (l) {
          var p = e.date_string;
          u += "<br /><small> " + p + "</small>"
        }
        if (window.User.is_premium && e.due_date) {
          u = $setHTML(SPAN({
            c: "date_tooltip"
          }), u);
          var m = c.show(e.due_date);
          $add(u, m)
        }
        return u
      },
      updateAlarmIcon: function(e, t) {
        var n = $all("img", "alarm_icon", e);
        n.length > 0 && $remove(n[0]);
        var r;
        return t && $addToTop(e, r = a("cmp_alarm", 16, 16, "alarm_icon")),
        r
      },
      updateDueDate: function(e) {
        var t = $all("div", "div_due_date", e)[0];
        if (t) {
          var n = u.create(e.json);
          $replace(t, n),
          $fx.highlight($gc(e, "span", "date"), {
            duration: 600
          })
        }
      },
      showDateInsert: function() {
        return window.open("/Help/DatesTimes"),
        !1
      }
    };
    t.exports = u
  }
  , {
    "../../components/minical_ext/.coffee.MiniCalExt.js": 63,
    "../../components/smart_scheduler/.coffee.QuickDayShow.js": 106,
    "../../models/.coffee.Reminders.js": 162
  }],
  49: [function(e, t, n) {
    var r = window.AmiButton
      , o = window.GB_hide
      , i = window.Indicator
      , s = window.GB_showHTML
      , a = e("../../models/.coffee.SyncEngine.js")
      , c = e("../../models/.coffee.ItemsModel.js")
      , d = e("../../models/.coffee.ProjectsModel.js")
      , l = e("../../models/.coffee.TemporaryIds.js");
    n.show = function(e) {
      e = c.getById(e.id);
      var t = r.createButton(_("Ok"), null , "red");
      $AEV(t, "click", o);
      var n = DIV(i.imgSmall(), BR())
        , u = DIV({
        c: "holder_unique_link"
      }, n, t);
      s(_("Link to task"), u, 200, 300);
      var h = function(e) {
        var t = {
          id: e.id
        };
        e.sync_id && (t.sync_id = e.sync_id);
        var r, o = "https://todoist.com/showTask?" + $encode(t), i = INPUT({
          type: "text",
          value: o
        });
        $replace(n, DIV(i, r = A({
          href: "#",
          c: "action"
        }, _("Copy to clipboard")))),
        $AEV(r, "click", function(e) {
          try {
            if (i.select(),
            !document.execCommand("Copy"))
              throw new Exception("fail");
            alert(_("URL copied to the clipboard"), function() {
              i.select()
            })
          } catch (e) {
            alert(_("Could not copy the URL to the clipboard! Please copy manually."))
          }
          return !1
        }),
        i.select()
      }
        , f = function(e) {
        var e = c.getById(e.id)
          , t = d.get(e.project_id);
        if (t && t.shared && !e.sync_id) {
          var n = $requestJSON("/API/v7/get_item");
          n.addCallback(function(e) {
            h(e.item)
          }),
          n.sendReq({
            item_id: e.id,
            token: window.User.token
          })
        } else
          h(e)
      }
      ;
      return l.isTemporary(e.id) ? a.sync({
        onSuccess: $p(f, e)
      }, !0) : f(e),
      !1
    }
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.SyncEngine.js": 167,
    "../../models/.coffee.TemporaryIds.js": 170
  }],
  50: [function(e, t, n) {
    var r = window.Signals
      , o = e("../../components/labels/Labels.js")
      , i = e("../action_perfomed/.coffee.ActionPerformed.js")
      , s = e("../project_editor/.coffee.ProjectEditorManager.js")
      , a = e("../items_utils/.coffee.ItemCommonEdits.js")
      , c = e("../../models/.coffee.Collaborators.js")
      , d = {
      sortBy: function(e, t) {
        var n = s.current_editor;
        return !!n && (n.saveCurrentItem(function() {
          i.mark("ItemsSortBy/sortBy");
          var o = $AF(n.current_list.childNodes)
            , s = [];
          $map(o, function(e) {
            e.json && s.push(e.json)
          }),
          a.markForUndo(s, "reorder_project_editor", _("Order changed"));
          var c = d._sortListBy(o, 1, e, t)
            , l = UL({
            c: "items"
          });
          $map(c, function(e) {
            l.appendChild(e)
          }),
          $swap(n.current_list, l),
          n.current_list = l,
          n.saveOrder(),
          n.arrows.updateArrows(),
          r.sendSignal("sort_by_done")
        }),
        !1)
      },
      _sortListBy: function(e, t, n, r) {
        var o, i, s = [], a = [], c = {};
        $map(e, function(e) {
          var n = e.json;
          if (n && n.indent == t)
            i = r(n) ? s : a,
            i.push(e),
            o = n.id,
            c[o] = [];
          else if (n) {
            var d = c[o];
            d ? d.push(e) : a.push(e)
          }
        }),
        s = s.sort(n);
        var l;
        l = s.concat(a);
        var u = [];
        return $map(l, function(e) {
          if (u.push(e),
          e.json) {
            var t = c[e.json.id];
            if (t && t.length > 0) {
              var o = d._sortListBy(t, t[0].json.indent, n, r);
              u = u.concat(o)
            }
          }
        }),
        u
      },
      sortByDate: function() {
        d.sortBy(d._sortByDate, function(e) {
          return "" !== e.date_string && e.due_date
        })
      },
      sortByPriority: function() {
        d.sortBy(d._sortByPriority, function(e) {
          return 1 != e.priority
        })
      },
      sortByResponsible: function() {
        d.sortBy(d._sortByResponsible, function(e) {
          return null != e.responsible_uid
        })
      },
      sortByName: function() {
        d.sortBy(d._sortByName, function(e) {
          return null != e.content
        })
      },
      _sortByDate: function(e, t) {
        var n = e.json.due_date.getTime()
          , r = t.json.due_date.getTime();
        return n < r ? -1 : n > r ? 1 : n == r ? e.json.priority != t.json.priority ? -(e.json.priority - t.json.priority) : e.json.item_order - t.json.item_order : void 0
      },
      _sortByPriority: function(e, t) {
        var n = e.json.priority
          , r = t.json.priority;
        return n == r ? e.json.item_order - t.json.item_order : n > r ? -1 : 1
      },
      _sortByResponsible: function(e, t) {
        var n = e.json.responsible_uid
          , r = t.json.responsible_uid;
        if (n == r)
          return e.json.item_order - t.json.item_order;
        var o = c.getUserById(n)
          , i = c.getUserById(r);
        if (o && i) {
          var s = o.full_name.toLowerCase()
            , a = i.full_name.toLowerCase();
          return s == a ? e.json.item_order - t.json.item_order : s < a ? -1 : 1
        }
        return n > r ? -1 : 1
      },
      _sortByName: function(e, t) {
        var n = e.json.content.toLowerCase()
          , r = t.json.content.toLowerCase();
        return n = $strip(n.replace(o.re_labels, "")),
        r = $strip(r.replace(o.re_labels, "")),
        n == r ? e.json.item_order - t.json.item_order : n < r ? -1 : 1
      }
    };
    t.exports = d
  }
  , {
    "../../components/labels/Labels.js": 54,
    "../../models/.coffee.Collaborators.js": 146,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../project_editor/.coffee.ProjectEditorManager.js": 80
  }],
  51: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = window.GB_hide,
    o = window.GB_showHTML,
    a = window.imageSprite,
    s = e("../../models/.coffee.NotificationsModel.js"),
    i = function() {
      function e() {
        this.show = c(this.show, this),
        this.showFromModel = c(this.showFromModel, this)
      }
      return e.prototype.canPromote = function(e) {
        var t;
        return t = s.noti_model["karma_level_" + e],
        !!t
      }
      ,
      e.prototype.getIcon = function(e) {
        switch (e) {
        case 1:
          return "icon-karmaprofile2";
        case 2:
          return "icon-karmaprofile3";
        case 3:
          return "icon-karmaprofile4";
        case 4:
          return "icon-karmaprofile5";
        case 5:
          return "icon-karmaprofile6";
        case 6:
          return "icon-karmaprofile7";
        case 7:
          return "icon-karmaprofile8"
        }
      }
      ,
      e.prototype.showFromModel = function(e) {
        var t;
        return t = s.noti_model["karma_level_" + e],
        t && this.show(t, e, this.getIcon(e), !1),
        !1
      }
      ,
      e.prototype.show = function(e, t, n, i) {
        var s, a, c, d, l, u, h, f, p;
        return null == i && (i = !0),
        a = window.User.completed_count,
        1 === t ? (f = _("Novice Level"),
        l = _("You keep progressing- great work!"),
        u = _("With 500 points, you've reached the Novice Todoist Karma level."),
        p = _("My @Todoist Karma gets better everyday :) With 500 points, I'm now a Novice!"),
        c = _("My Todoist Karma gets better everyday :) With 500 points, I'm now a Novice. What about you?")) : 2 === t ? (f = _("Intermediate Level"),
        l = _("Congratulations, you completed a total of %s tasks!").replace("%s", a),
        u = _("Be proud, your productivity is increasing every day! Keep it up and achieve anything."),
        p = _("I've completed %s tasks to reach Intermediate @Todoist Karma!").replace("%s", a),
        c = _("I've completed %s tasks to reach Todoist Karma's Intermediate level! Try Todoist and become more productive.").replace("%s", a)) : 3 === t ? (f = _("Professional Level"),
        l = _("You completed %s tasks last month").replace("%s", e.completed_last_month),
        u = _("Feeling more productive than ever? Don't quit now, you're nearly half way to Enlightened!"),
        p = _("In the last month, I completed %s tasks to reach @Todoist Karma's Professional level!").replace("%s", e.completed_last_month),
        c = _("Last month, I completed %s tasks and reached Todoist Karma's Professional level. Don't stop me now!").replace("%s", e.completed_last_month)) : 4 === t ? (f = _("Expert Level"),
        l = _("Your productivity truly has no bounds"),
        u = _("Stay focused, be productive and keep progressing. You'll be Enlightened in no time!"),
        p = _("I've completed %s tasks, and now I'm a productivity @Todoist Expert!").replace("%s", a),
        c = _("Last month, I completed %s tasks and reached Todoist Karma's Professional level. Don't stop me now!")) : 5 === t ? (f = _("Master Level"),
        l = _("We salute you, Master Todoist user!"),
        u = _("You've reached an important threshold\u2013 over 10,000 impressive karma points."),
        p = _("With more than 10,000 points, I'm now a @Todoist Karma Master! #ProductivityMaster"),
        c = _("With more than 10,000 points, I'm now a Todoist Karma Master! #ProductivityMaster")) : 6 === t ? (f = _("Grandmaster Level"),
        l = _("You're just one level from Enlightenment"),
        u = _("Be proud- your Karma has skyrocketed to over 20,000 points after completing %s tasks.").replace("%s", a),
        p = _("I'm the #productivity Grandmaster\u2013 with over 20k @Todoist Karma points!"),
        c = _("I'm the #productivity Grandmaster\u2013 with over 20k Todoist Karma points and %s completed tasks!").replace("%s", a)) : 7 === t && (f = _("Enlightened Level"),
        l = _("You did it. You're now in the exclusive %s% of Todoist users!").replace("%s", e.top_procent),
        u = _("You've completed an impressive total of %s tasks!").replace("%s", a),
        p = _("I have joined the exclusive %s of Todoist users! Reaching @Todoist Karma Enlightenment!").replace("%s", e.top_procent),
        c = _("I have joined the exclusive %s of Todoist users! Reaching Todoist Karma Enlightenment!").replace("%s", e.top_procent)),
        n = SPAN({
          c: "karma-icon " + n
        }),
        s = DIV({
          c: "btn_continue"
        }, _("Continue")),
        $AEV(s, "click", r),
        h = DIV({
          c: "share_icons"
        }, this._genButton("twitter", p, f, e, t), this._genButton("facebook", c, f, e, t), this._genButton("gplus", c, f, e, t)),
        i ? (l = H2(l),
        u = H3(u)) : (l = H2(),
        u = null ),
        d = DIV({
          c: "karma_promo"
        }, DIV({
          c: "icon"
        }, n), H1(f), l, u, DIV({
          c: "bottom_holder"
        }, h, DIV({
          c: "btn_holder"
        }, s)), A({
          href: "/karma",
          c: "karma_help",
          target: "_blank"
        }, _("Todoist Karma Help"))),
        $addClass(d, "karma_cls_" + t),
        o("", d, 500, 450),
        !1
      }
      ,
      e.prototype._genButton = function(e, t, n, r, o) {
        var i, s, c;
        return i = "https://" + location.host + "/karma/" + window.LANG + "/" + o + "/2",
        "twitter" === e ? (c = t + " " + i,
        c = $urlencode(c),
        c = "https://twitter.com/home?status=" + c) : "facebook" === e ? c = "https://www.facebook.com/sharer.php?u=" + i : "gplus" === e && (c = "https://plus.google.com/share?url=" + i),
        s = A({
          href: c,
          target: "_blank"
        }, a("cmp_k_" + e, 37, 37))
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.NotificationsModel.js": 158
  }],
  52: [function(e, t, n) {
    function r(e) {
      var t = e.target || e.srcElement;
      if (t) {
        var n = $nodeName(t);
        if ("textarea" == n || "input" == n || "select" == n)
          return !0;
        if ($hasClass(t, "amibutton") || $hasClass(t, "richtext_editor"))
          return !0
      }
      return !1
    }
    function o(e) {
      if (r(e))
        return !0;
      var t = e.keyAscii
        , n = c.current_editor;
      if ($isIn(t, [97, 65, 1092, 1060])) {
        var o = $isIn(t, [65, 1060]);
        if (n)
          n.addNewItem(o);
        else {
          var i = $$("li.add_task");
          if (i.length > 0) {
            var a = $child(i[0], "a");
            a.onclick(a)
          }
        }
        return $preventDefault(e),
        !1
      }
      return !e.ctrl && $isIn(t, [47, 102, 1072]) ? (s() && GB_hide(),
      l.focus(),
      l.select(),
      $preventDefault(e),
      !1) : !e.ctrl && $isIn(t, [81, 113, 1081, 1049]) ? ($preventDefault(e),
      d.toggle(),
      !1) : !e.ctrl && $isIn(t, [115, 1099]) ? (u.sortByDate(),
      $preventDefault(e),
      !1) : !e.ctrl && $isIn(t, [114, 1082]) ? (u.sortByResponsible(),
      $preventDefault(e),
      !1) : !e.ctrl && $isIn(t, [112, 1079]) ? (u.sortByPriority(),
      $preventDefault(e),
      !1) : !e.ctrl && $isIn(t, [117, 1075]) ? ($preventDefault(e),
      f.undo(),
      !1) : e.ctrl && $isIn(t, [38, 40]) ? (n && !c.current_form && (n.addNewItem(40 == t),
      $preventDefault(e)),
      !1) : 63 != t || h.showKeyboardShortcuts()
    }
    function i(e) {
      if (r(e))
        return !0;
      var t = e.keyAscii;
      if (27 == t) {
        if (s() || a.current_input)
          return !0;
        var n = $all("li", "selected");
        if (n.length > 0)
          return _.deselectAll(),
          !1
      }
      return !0
    }
    var s = window.GB_getLast
      , a = window.AmiComplete
      , c = e("../project_editor/.coffee.ProjectEditorManager.js")
      , d = e("../quick_add/.coffee.QuickAdd.js")
      , l = e("../quick_find/.coffee.QuickFind.js")
      , u = e("../items_utils/ItemsSortBy.js")
      , h = e("../opener/WindowOpener.js")
      , f = e("../items_utils/.coffee.ItemCommonEdits.js")
      , _ = e("../item_selecter/ItemSelecter.js");
    n.init = function() {
      $AEV(document, "keypress", o),
      $AEV(document, "keyup", i)
    }
  }
  , {
    "../item_selecter/ItemSelecter.js": 43,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../items_utils/ItemsSortBy.js": 50,
    "../opener/WindowOpener.js": 74,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../quick_add/.coffee.QuickAdd.js": 91,
    "../quick_find/.coffee.QuickFind.js": 94
  }],
  53: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.GB_hide,
    r = window.AmiCompleteSelect,
    c = window.imageSprite,
    s = e("../labels/Labels.js"),
    a = e("../../models/.coffee.LabelsModel.js"),
    i = function() {
      function e() {
        this.showTooltip = d(this.showTooltip, this)
      }
      return e.prototype.showTooltip = function(e, t) {
        var n, i, s;
        return i = {
          selectedItem: t.selectedItem,
          collection: function(e) {
            return function() {
              var t;
              return t = e.getCompletionLabels()
            }
          }(this),
          filterItem: function(e) {
            return function(t) {
              var n;
              if (t)
                return n = DIV(e.renderLItem(t)),
                t.indent > 1 && $addClass(n, "indent_" + t.indent),
                n
            }
          }(this),
          onSelect: function(e) {
            if (o(),
            $isFunction(t.onSelect))
              return t.onSelect(e)
          },
          wildcard_match: !0,
          placeholder: t.placeholder_txt || ""
        },
        n = new r(i),
        s = n.showTooltip({
          title: t.title || _("Select a label"),
          icon: e,
          arrow_left_offset: t.arrow_left_offset || 0,
          top_offset: t.top_offset || 25,
          left_offset: t.left_offset || 25,
          fn_on_hide: function() {
            return n = null
          }
        }),
        !1
      }
      ,
      e.prototype.renderLItem = function(e) {
        var t, n;
        return t = e.name.replace(/\*\s*/, ""),
        n = SPAN({
          c: "generic_select_item",
          s: s.getCssColor(e)
        }, SPAN({
          c: "truncated p_name"
        }, t))
      }
      ,
      e.prototype.getCompletionLabels = function() {
        return a.getAll()
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.LabelsModel.js": 154,
    "../labels/Labels.js": 54
  }],
  54: [function(e, t, n) {
    var r = window.Signals
      , o = window.LibEdit
      , i = window.AmiTooltip
      , s = window.AmiComplete
      , a = window.imageSprite
      , c = e("../agenda/.coffee.AgendaUtils.js")
      , d = e("../../models/.coffee.LabelsModel.js")
      , l = e("../promotion_overlay/.coffee.PromotionOverlay.js")
      , u = e("../richtext_editor/.coffee.NatrualLanguageParsing.js")
      , h = {
      re_labels: /(^|\s+)@([^\s,]+)/g,
      colors: ["#019412", "#a39d01", "#e73d02", "#e702a4", "#9902e7", "#1d02e7", "#0082c5", "#555555"],
      init: function() {
        window.User.is_premium && (this.colors = this.colors.concat(["#008299", "#03b3b2", "#ac193d", "#82ba00", "#111111"]))
      },
      getLabels: function(e) {
        var t = [];
        return e = e.replace(h.re_labels, function(e, n, r) {
          r = r.toLowerCase();
          var o = d.get(r);
          return o ? t.push(o.id) : t.push(r),
          ""
        }),
        [e, t]
      },
      queryLabel: function(e) {
        var t = d.getById(e);
        r.sendSignal("select_labels_tab", e),
        c.query("@" + t.name)
      },
      format: function(e, t) {
        if (!t.labels)
          return e;
        var n = {}
          , r = []
          , o = function(e) {
          n[e.id] || (r.push(e),
          n[e.id] = !0)
        }
        ;
        $map(t.labels, function(t) {
          var n = d.getById(t);
          n && (o(n),
          e = e.replace(new RegExp("(^|s)@" + n), "$1"))
        });
        var i = h.getLabels(e)[1];
        return $map(i, function(t) {
          t = d.getById(t),
          t && (o(t),
          e = e.replace(new RegExp("(^|s)@" + t), "$1"))
        }),
        h._format(e, r)
      },
      _format: function(e, t) {
        if (!t || 0 === t.length)
          return e;
        t.sort(function(e, t) {
          return e.item_order - t.item_order
        });
        var n = []
          , r = 0;
        $map(t, function(o, i) {
          if (o) {
            var s = h.getCssColor(o)
              , a = $xssStrip(o.name);
            n.push('<a class="label" onclick="Labels.queryLabel(' + o.id + ')" style="' + s + '">' + a + "</a>"),
            r++,
            e = e.replace(new RegExp("(^|s)@" + o,"ig"), "")
          }
          var c = t[i + 1];
          c && n.push('<a class="label label_sep">,</a>')
        }),
        r > 0 && n.push('<a class="label label_sep"> </a>');
        var t = n.join("");
        return e + '<div class="labels_holder">' + t + "</div>"
      },
      getCssColor: function(e) {
        return "color: " + (h.colors[e.color] || "#555555") + ";"
      },
      formatByContent: function(e) {
        var t = h.getLabels(e);
        e = t[0];
        var n = t[1];
        if (0 === n.length)
          return e;
        var r = [];
        return $map(n, function(e) {
          var t;
          t = $isNumber(e) ? d.getById(e) : {
            name: e,
            color: 0
          },
          t && r.push(t)
        }),
        h._format(e, r)
      },
      jsonFormat: function(e) {
        return e = e.replace(h.re_labels, function(e, t, n) {
          var r = function(e) {
            return "\\" + e
          }
          ;
          return n = n.replace(/\*|\+/g, r),
          e.replace(new RegExp(t + "@" + n,"g"), "")
        }),
        $strip(e)
      },
      textFormat: function(e, t) {
        var n = {}
          , r = [];
        return t && $map(t, function(t) {
          var o = d.getById(t);
          if (o && !n[o.id]) {
            var i = "@" + o.name
              , a = new RegExp("(^|s)@" + s.escapeReqExpSepcails(o.name),"ig");
            null == e.match(a) && (r.push(i),
            n[o.id] = !0)
          }
        }),
        r = r.join(" "),
        r.length > 0 && (r += " "),
        r + $strip(e)
      },
      getCompletionLabels: function() {
        var e = [];
        return $map(d.getAll(!0), function(t) {
          e.push({
            name: t.name
          })
        }),
        e
      },
      annotateFormArea: function(e, t) {
        window.User.is_premium && (s.attach(e, d.complete_data = {
          collection: function(e) {
            return d.getByName(e.replace("@", ""))
          },
          filterItem: function(e, t) {
            var n = $setHTML(SPAN({
              s: h.getCssColor(e)
            }), t);
            return n
          },
          position_item: $parent(e, "td", "text_box_holder"),
          extra_width: 1,
          support_paste: !1,
          wildcard_match: !0,
          onNoMatches: function(e, t, n) {
            if (0 == n.length && 0 != h.getCompletionLabels().length)
              return s.hide(),
              !1;
            if (n.length > 0) {
              n = n.replace(/\\/g, "");
              var r;
              $add(e, TR(r = TD({
                c: "completion_item"
              }, SPAN(_("Label not found."), " ", B(_("Create") + " " + n))))),
              r.onmouseover = $p(s.onMouseOver, r, {}),
              r.onmousedown = $p(h._createLabel, n, t)
            }
            return !0
          },
          preOnSelect: function(e) {
            h.old_support_labels = null ,
            e.is_content_editable && u && (h.old_support_labels = u.highlight_labels,
            u.highlight_labels = !1)
          },
          postOnSelect: function(e) {
            e.is_content_editable && setTimeout(function() {
              u.highlight_labels = h.old_support_labels,
              e.input.onchanged()
            }, 5)
          }
        }),
        $AEV(e, "keydown", function(e) {
          return !(13 == e.keyAscii && !e.shift && s.shown()) && ((27 != e.keyAscii || !s.shown()) && void 0)
        }),
        $swap(t, this._crateLabelButton(e)))
      },
      showPremiumPromotion: function() {
        return l.show(_("Labels are a premium only feature"), _("Labels let you easily add context to your tasks. For example, you can label all call tasks with a @call label."))
      },
      _createLabel: function(e, t) {
        return s.hide(),
        d.add({
          name: e
        }),
        window.LibEdit.insertAtCursor(t, s.CHAR_FORCED_WHITESPACE),
        !1
      },
      _crateLabelButton: function(e) {
        var t = a("cmp_label", 16, 16);
        return $addClass(t, "form_action_icon"),
        $AEV(t, "click", function() {
          return i.hide(),
          window.User.is_premium ? (o.placeCaretAtEnd(e),
          s.forceShow(e, !0, d.complete_data)) : h.showPremiumPromotion(),
          !1
        }),
        i.showSimpleText(t, _("Label"), null , 3, 5),
        t
      }
    };
    window.Labels = h,
    t.exports = h
  }
  , {
    "../../models/.coffee.LabelsModel.js": 154,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90,
    "../richtext_editor/.coffee.NatrualLanguageParsing.js": 103
  }],
  55: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f;
    f = window.Signals,
    o = window.AmiMenu,
    i = e("../drag_and_drop/.coffee.DragAndDrop.js"),
    r = e("../agenda/.coffee.AgendaUtils.js"),
    c = e("../labels/Labels.js"),
    a = e("../generic_left_list/.coffee.GenericLeftList.js"),
    d = e("../../models/.coffee.LabelsModel.js"),
    h = e("../../models/.coffee.QueriesComplex.js"),
    l = e("../../menus/.coffee.MenuLabelColors.js"),
    u = e("../../menus/MenuLabelList.js"),
    s = a.extend({
      initWithData: function() {
        var e;
        return e = {
          event_name: "Labels",
          data_model: d,
          default_color: 7,
          icon: "icon-label",
          empty_text: _("You have no labels"),
          add_text: _("Add Label"),
          placeholder: _("Label name"),
          list_holder: "labels_list_man",
          DragAndDrop: i,
          with_color: !0,
          with_arrows: !1,
          with_indent: !1,
          with_ordering: !0,
          fn_create_counter: this.createCounter,
          fn_get_all: function() {
            return d.getAll(!0)
          },
          fn_on_click: function(e) {
            return function(t) {
              return u.get().hide(),
              e.setCurrent(t),
              window.scroll(0, 0)
            }
          }(this),
          fn_show_items: function(e) {
            var t;
            if (t = d.getById(e[0]))
              return r.query("@" + t.name)
          },
          fn_on_delete: function(e) {
            return function(t) {
              return $remove(t),
              e.deselectCurrent()
            }
          }(this),
          fn_editing_done: function(e) {
            return function() {
              return e.current_item ? e.setCurrent(e.current_item) : f.sendSignal("refresh_interface")
            }
          }(this),
          fn_parse_form: function(e) {
            return function(t, n) {
              var r, o, i, s;
              return o = d.get(n.name),
              r = null != (i = e.current_item) && null != (s = i.json) ? s.id : void 0,
              o && o.id !== r && (alert(_("You already have a label with that name."), function() {
                return $child(t, "textarea").focus()
              }),
              n.name = "",
              n.is_changed = !1),
              n
            }
          }(this),
          fn_get_selected: function() {
            var e, t, n, o;
            return n = {},
            o = c.getLabels(r.getQuery()),
            e = o[0],
            t = o[1],
            1 === t.length && (n[t[0]] = !0),
            n
          }
        },
        $bindMethods(this),
        f.connect("labels_updated", this.reRender),
        e.fn_create_color = this.createColor,
        e.menu_colors = l.init(c),
        e.menu = u.init(this),
        this.parent(e)
      },
      createCounter: function(e) {
        var t, n;
        return t = e.count,
        void 0 === t && (e.count = h.getByLabels([e.id], !0)),
        0 !== t && t || (t = ""),
        n = DIV({
          c: "counter_count",
          id: "label_count_" + e.id
        }, "" + t)
      },
      createColor: function(e) {
        return this.createColorDiv("label_color_" + e.id, e.color, c.colors)
      },
      getCurrentSelect: function(e) {
        return function() {
          return $gc(e.current_list, "li", "current")
        }
      }(this)
    }),
    window.LabelList = t.exports = new s
  }
  , {
    "../../menus/.coffee.MenuLabelColors.js": 125,
    "../../menus/MenuLabelList.js": 135,
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.QueriesComplex.js": 160,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../generic_left_list/.coffee.GenericLeftList.js": 39,
    "../labels/Labels.js": 54
  }],
  56: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = window.AmiComplete,
    a = window.imageSprite,
    s = e("../themes/.coffee.Themes.js"),
    o = function() {
      function e() {
        this.resizeLeftMenu = c(this.resizeLeftMenu, this),
        this.resizeOverlay = c(this.resizeOverlay, this),
        this.toggle = c(this.toggle, this),
        this.hide = c(this.hide, this),
        this.show = c(this.show, this),
        this.toggleIcon = c(this.toggleIcon, this),
        this.render = c(this.render, this),
        $AEV(window, "resize", this.resizeLeftMenu),
        i.connect("theme_changed", function(e) {
          return function() {
            return s.replaceImageClass(e.icon_menu_toggle, s.getMenuToggleIcon())
          }
        }(this))
      }
      return e.prototype.offset_top = 50,
      e.prototype.render = function() {
        var e;
        return e = A({
          href: "#",
          id: "close_menu"
        }, a("cmp_menu_close", 14, 14), _("Close menu")),
        $AEV(e, "click", this.hide),
        $replace($("close_menu_holder"), e),
        $ATT($("top_bar_inner"), this.toggleIcon())
      }
      ,
      e.prototype.toggleIcon = function() {
        var e;
        return e = A({
          href: "#",
          c: "left_menu_toggle"
        }, this.icon_menu_toggle = a(s.getMenuToggleIcon(), 20, 15)),
        $AEV(e, "click", this.toggle),
        e
      }
      ,
      e.prototype.isShown = function() {
        return $hasClass($body(), "left_menu_show")
      }
      ,
      e.prototype.show = function() {
        var e;
        return e = $body(),
        $addClass(e, "left_menu_show"),
        this.resizeLeftMenu(),
        $add(e, this.overlay = DIV({
          c: "left_menu_overlay"
        })),
        $AEV(this.overlay, "click", this.hide),
        $AEV(window, "resize", this.resizeOverlay),
        this.resizeOverlay(),
        !1
      }
      ,
      e.prototype.hide = function() {
        return $removeClass($body(), "left_menu_show"),
        $remove($all("div", "left_menu_overlay")),
        $REV(window, "resize", this.resizeOverlay),
        !1
      }
      ,
      e.prototype.toggle = function() {
        return r.hide(),
        $hasClass($body(), "mini_version") && (this.isShown() ? this.hide() : this.show()),
        !1
      }
      ,
      e.prototype.resizeOverlay = function() {
        var e, t, n;
        return t = this.overlay,
        e = $("left_menu"),
        n = $winSize().w - e.offsetWidth,
        $setWidth(t, n),
        $setHeight(t, e.offsetHeight),
        $setLeft(t, e.offsetWidth)
      }
      ,
      e.prototype.resizeLeftMenu = function() {
        var e;
        return e = $("left_menu"),
        $hasClass($body(), "mini_version") ? e.style.height = $winSize().h + "px" : e.style.height = $winSize().h - this.offset_top + "px",
        this.resizeOverlay()
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../themes/.coffee.Themes.js": 113
  }],
  57: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = e("../../models/.coffee.Storage.js").$storage,
    l = window.Signals,
    d = e("../project_list/.coffee.ProjectList.js"),
    s = e("../labels/Labels.js"),
    a = e("../labels_list/.coffee.LabelsList.js"),
    o = e("../filters_list/.coffee.FiltersList.js"),
    c = e("./.coffee.LeftMenu.js"),
    i = function() {
      function e() {
        this.setCurrentTab = u(this.setCurrentTab, this),
        this.getCurrentTab = u(this.getCurrentTab, this),
        this.genericCancel = u(this.genericCancel, this),
        this.showFilters = u(this.showFilters, this),
        this.showLabels = u(this.showLabels, this),
        this.showProjects = u(this.showProjects, this),
        this.render = u(this.render, this),
        this.showDefault = u(this.showDefault, this),
        l.connect("update_project_count item_updated labels_updated", function(e) {
          return function() {
            if ("labels" === e.getCurrentTab())
              return a.reRender()
          }
        }(this)),
        l.connect("select_labels_tab", function(e) {
          return function(t) {
            return e.showLabels(),
            a.setCurrentVisually(t)
          }
        }(this)),
        l.connect("select_projects_tab", this.showProjects),
        l.connect("select_filters_tab", this.showFilters)
      }
      return e.prototype.showDefault = function() {
        var e;
        return e = this.getCurrentTab(),
        "labels" === e ? this.showLabels() : "filters" === e ? this.showFilters() : this.showProjects()
      }
      ,
      e.prototype.render = function() {
        var e, t, n, r;
        return r = DIV({
          id: "left_menu_tabs"
        }, TABLE(TBODY(TR(n = TD({
          c: "control projects sel_projects",
          width: "33%"
        }, _("Projects")), t = TD({
          c: "control labels",
          width: "33%"
        }, _("Labels")), e = TD({
          c: "control filters",
          width: "33%"
        }, _("Filters")))))),
        $AEV(n, "click", this.showProjects),
        $AEV(t, "click", this.showLabels),
        $AEV(e, "click", this.showFilters),
        r
      }
      ,
      e.prototype.showProjects = function() {
        return this.genericCancel(),
        this.genericShow("project_list_holder", "show_projects", "projects", d.reRender)
      }
      ,
      e.prototype.showLabels = function() {
        return window.User.is_premium ? (this.genericCancel(),
        this.genericShow("labels_list_holder", "show_labels", "labels", a.reRender)) : (s.showPremiumPromotion(),
        !1)
      }
      ,
      e.prototype.showFilters = function() {
        return this.genericCancel(),
        this.genericShow("filters_list_holder", "show_filters", "filters", o.reRender)
      }
      ,
      e.prototype.genericCancel = function() {
        if (d.current_cancel && d.current_cancel.onclick(),
        o.current_cancel && o.current_cancel.onclick(),
        a.current_cancel)
          return a.current_cancel.onclick()
      }
      ,
      e.prototype.genericShow = function(e, t, n, r) {
        return d.current_selected = null ,
        a.current_selected = null ,
        $hide($("labels_list_holder"), $("filters_list_holder"), $("project_list_holder")),
        $show($(e)),
        $("left_menu_tabs").className = "",
        $addClass($("left_menu_tabs"), t),
        this.setCurrentTab(n),
        r(!0),
        c.resizeLeftMenu(),
        !1
      }
      ,
      e.prototype.getCurrentTab = function() {
        return r("current_tab").get() || "projects"
      }
      ,
      e.prototype.setCurrentTab = function(e) {
        return r("current_tab").set(e)
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.Storage.js": 165,
    "../filters_list/.coffee.FiltersList.js": 36,
    "../labels/Labels.js": 54,
    "../labels_list/.coffee.LabelsList.js": 55,
    "../project_list/.coffee.ProjectList.js": 86,
    "./.coffee.LeftMenu.js": 56
  }],
  58: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    d = window.Signals,
    l = window.imageSprite,
    s = e("../project_list/.coffee.ProjectListUtils.js"),
    r = e("../agenda/.coffee.AgendaUtils.js"),
    a = e("../../models/.coffee.ProjectsModel.js"),
    i = e("../../models/.coffee.ItemsModel.js"),
    c = e("../../models/.coffee.QueriesItems.js"),
    o = function() {
      function e() {
        this.execTeamInboxLogic = u(this.execTeamInboxLogic, this),
        this.updateCounters = u(this.updateCounters, this),
        this.setAsCurrent = u(this.setAsCurrent, this),
        this.render = u(this.render, this),
        this.query7days = u(this.query7days, this),
        this.queryToday = u(this.queryToday, this),
        this.getTeamInbox = u(this.getTeamInbox, this),
        this.getInbox = u(this.getInbox, this),
        d.connect("countsUpdated", this.updateCounters),
        d.connect("user_updated", function(e) {
          return function() {
            return e.execTeamInboxLogic()
          }
        }(this))
      }
      return e.prototype.filter_elms = {},
      e.prototype.counter_elms = {},
      e.prototype.getInbox = function() {
        return this.filter_elms.inbox
      }
      ,
      e.prototype.getTeamInbox = function() {
        var e, t;
        return (e = this.filter_elms.team_inbox) ? (t = a.get(window.User.team_inbox),
        e.json = t,
        e) : null
      }
      ,
      e.prototype.queryToday = function() {
        return r.query("overdue, today"),
        this.setAsCurrent("today"),
        window.scroll(0, 0),
        !1
      }
      ,
      e.prototype.query7days = function() {
        return r.query("overdue, 7 days"),
        this.setAsCurrent("7_days"),
        window.scroll(0, 0),
        !1
      }
      ,
      e.prototype.render = function() {
        var e, t, n, r, o, i;
        return e = function(e) {
          return function(t, n, r) {
            var o, i;
            return o = e.counter_elms[r] = SPAN({
              c: "counter"
            }, ""),
            i = LI({
              c: "filter"
            }, l(n, 20, 18), t, o),
            e.filter_elms[r] = i,
            i
          }
        }(this),
        r = _("Inbox"),
        t = e(r, "cmp_filter_inbox", "inbox"),
        t.id = "filter_inbox",
        t.json = a.getInbox(),
        $AEV(t, "click", function() {
          return s.setCurrentById(window.User.inbox_project),
          !1
        }),
        o = e(_("Team Inbox"), "cmp_filter_team_inbox", "team_inbox"),
        o.id = "filter_team_inbox",
        o.json = a.getTeamInbox(),
        $AEV(o, "click", function() {
          return s.setCurrentById(window.User.team_inbox),
          !1
        }),
        this.execTeamInboxLogic(),
        i = e(_("Today"), "cmp_filter_today", "today"),
        $AEV(i, "click", this.queryToday),
        n = e(_("Next 7 days"), "cmp_filter_days", "7_days"),
        $AEV(n, "click", this.query7days),
        UL({
          id: "top_filters"
        }, t, o, i, n)
      }
      ,
      e.prototype.setAsCurrent = function(e) {
        return s.deselectCurrent(),
        $addClass(this.filter_elms[e], "current")
      }
      ,
      e.prototype.updateCounters = function(e) {
        var t, n, r, o, s, a;
        return s = function(e, t) {
          return 0 === t ? $setHTML(e, "") : $setHTML(e, t)
        }
        ,
        n = i.getAllOwn(),
        a = window.User,
        t = i.getItemCount(a.inbox_project),
        s(this.counter_elms.inbox, t),
        a.team_inbox && (o = i.getItemCount(a.team_inbox),
        s(this.counter_elms.team_inbox, o)),
        s(this.counter_elms.today, e.today + e.overdue),
        r = c.getNextXdays(!0, 6, n).length,
        r += c.getOverdue(n).length,
        s(this.counter_elms["7_days"], r),
        e.overdue > 0 ? $addClass(this.counter_elms.today, "overdue_color") : $removeClass(this.counter_elms.today, "overdue_color")
      }
      ,
      e.prototype.execTeamInboxLogic = function() {
        var e;
        return e = this.filter_elms.team_inbox,
        window.User.team_inbox ? ($addClass($body(), "has_team_inbox"),
        $show(e)) : ($removeClass($body(), "has_team_inbox"),
        $hide(e))
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.QueriesItems.js": 161,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  59: [function(e, t, n) {
    var r = {
      show: function() {
        var e = this.loading = $("loading")
          , t = $winSize();
        $setHeight(e, t.h)
      },
      hide: function() {
        this.loading && ($remove(this.loading),
        this.loading = null )
      }
    };
    window.Loading = r,
    t.exports = r
  }
  , {}],
  60: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    , d = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
          return t;
      return -1
    }
    ;
    a = window.Signals,
    r = window.$static_path,
    o = e("../../models/.coffee.Storage.js").$storage,
    s = e("../notifications/.coffee.Notifications.js"),
    i = function() {
      function e() {
        this.connect = c(this.connect, this),
        window.Notification && this.connect()
      }
      return e.prototype.connected = !1,
      e.prototype.connect = function() {
        if (!this.connected)
          return a.connect("notify", function(e) {
            return function(t) {
              var n, r, i, c, d, l, u, h, f;
              if (window.MacBridge && window.MacBridge.bridge)
                ;
              else if ("denied" === o("LocalNotifications").get())
                return;
              try {
                f = s.renderNotification(t, 0),
                h = f[0],
                l = f[1],
                r = f[2],
                i = f[3],
                n = f[4]
              } catch (e) {
                return void (c = e)
              }
              if (l)
                return u = $setHTML(SPAN(), l),
                u = u.textContent || u.innerText,
                d = h && h.avatar_big || null ,
                r && (r = $trim(r, 200)),
                window.MacBridge && window.MacBridge.bridge ? a.sendSignal("mac_notify", u, r, n) : e.notify(u, r, i, h.avatar_big, t.notification_key)
            }
          }(this)),
          this.connected = !0
      }
      ,
      e.prototype.notify = function(e, t, n, r, o) {
        var i;
        return null == n && (n = null ),
        null == r && (r = null ),
        null == o && (o = null ),
        r || (r = "https://d3ptyyxy2at9ui.cloudfront.net/6ce261ea57f349ecda22ead2b73fc767.png"),
        i = function() {
          var i, s;
          return s = {
            icon: r
          },
          t && (s.body = t),
          o && (s.tag = o),
          i = new window.Notification(e,s),
          i.onclick = function() {
            if (window.focus(),
            n)
              return n()
          }
          ,
          i
        }
        ,
        "granted" === window.Notification.permission ? i() : "denied" !== window.Notification.permission ? window.Notification.requestPermission(function(e) {
          var t;
          if (t = d.call(window.Notification, "permission") >= 0,
          t || (window.Notification.permission = e),
          "granted" === e)
            return i()
        }) : void 0
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.Storage.js": 165,
    "../notifications/.coffee.Notifications.js": 72
  }],
  61: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    l = window.Signals,
    r = e("../../models/.coffee.Storage.js").$storage,
    c = e("../notes/.coffee.NotesUtils.js"),
    s = e("../../models/.coffee.ItemsModel.js"),
    d = e("../../models/.coffee.Reminders.js").RemindersModel,
    a = e("../local_notifications/.coffee.LocalNotifications.js"),
    o = e("../formatter/Formatter.js"),
    i = function() {
      function e() {
        this.loopReminders = u(this.loopReminders, this),
        this.connect = u(this.connect, this),
        window.Notification && this.connect()
      }
      return e.prototype.connected = !1,
      e.prototype.connect = function() {
        if (!this.connected)
          return l.connect("remind", function(e) {
            var t, n;
            if (n = s.getById(e.item_id),
            n && !(n.is_deleted || n.checked || n.in_history)) {
              if (window.MacBridge && window.MacBridge.bridge)
                return l.sendSignal("mac_remind", n);
              if (window.Notification) {
                if ("denied" === r("LocalReminders").get())
                  return;
                return t = o.format(n.content, {
                  only_text: !0,
                  as_html: !1
                }),
                a.notify(t, _("Todoist Reminder"), function() {
                  return c.show(n.id)
                }, "reminder_" + n.id)
              }
            }
          }),
          setInterval(this.loopReminders, 1e4),
          this.connected = !0
      }
      ,
      e.prototype.loopReminders = function() {
        var e, t, n, r, o, i, a, c, u, h;
        for (r = (new Date).getTime(),
        e = !1,
        h = d.getAllReminders(),
        c = 0,
        u = h.length; c < u; c++)
          o = h[c],
          a = o.time,
          "relative" === o.type && (i = s.getById(o.item_id),
          i && i.time && (a = i.time - 60 * o.minute_offset * 1e3)),
          !a || o.lprocessed || o.is_deleted || (n = o.notify_uid,
          n && n !== window.User.id || (t = (r - a) / 1e3,
          t >= 0 && t < 60 && (o.lprocessed = !0,
          l.sendSignal("remind", o),
          e = !0)));
        if (d.loaded && e)
          return d.syncCachedData()
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.Reminders.js": 162,
    "../../models/.coffee.Storage.js": 165,
    "../formatter/Formatter.js": 38,
    "../local_notifications/.coffee.LocalNotifications.js": 60,
    "../notes/.coffee.NotesUtils.js": 69
  }],
  62: [function(e, t, n) {
    var r = window.Signals
      , o = e("../../components/project_list/.coffee.ProjectListUtils.js")
      , i = e("../../components/project_editor/.coffee.ProjectExtraActions.js")
      , s = e("../../components/completed_history/.coffee.CompletedHistory.js")
      , a = e("../../components/completed_history/.coffee.CompletedQuickVisualize.js")
      , c = e("../../components/activity_log/.coffee.ActivityLog.js")
      , d = e("../../components/quick_add/.coffee.QuickAdd.js")
      , l = e("../../components/agenda/.coffee.AgendaUtils.js")
      , u = e("../../components/notes/Notes.js")
      , h = e("../../models/.coffee.TemporaryIds.js")
      , f = e("../../models/.coffee.SyncEngine.js")
      , _ = e("../../models/.coffee.ItemsModel.js")
      , p = e("../opener/WindowOpener.js")
      , m = {
      init: function() {
        setInterval(this.locationPolling, 400),
        h.listenAll(function(e, t) {
          var n = m;
          n.cur_location && n.cur_location.indexOf(e) != -1 && n.updateLocation(n.cur_location.replace(e, "" + t))
        }),
        r.connect("change_location", function(e) {
          m.updateLocation(e)
        }),
        h.listenAll(function(e, t) {
          var n = m.getHash();
          n.indexOf(e) != -1 && (n = n.replace(e, t),
          m.updateLocation(n))
        })
      },
      getHash: function() {
        var e = window.location.hash.substring(1);
        return $urldecode(e)
      },
      getCurrentLocation: function() {
        return m.cur_location
      },
      setHash: function(e) {
        window.location.hash = $urlencode(e)
      },
      updateLocation: function(e) {
        var t = m;
        t.cur_location != e && (m.setHash(e),
        t.cur_location = e)
      },
      refreshView: function() {
        return m.updateView(m.setHash()),
        !1
      },
      updateView: function(e, t) {
        if (window.isEditingOn())
          return void setTimeout($p(m.updateView, e), 400);
        if (0 === e.indexOf("project/")) {
          var n = parseInt(e.split("/")[1]);
          n && o.setCurrentById(n, !1)
        }
        if (0 === e.indexOf("project_comments/")) {
          var r, h = e.split("/"), n = parseInt(h[1]);
          if (h[2] && (r = parseInt(h[2])),
          1 == t) {
            var g = ProjectsModel.get(n);
            g ? o.setCurrentById(g.id, !1) : l.query("today")
          }
          u.showProjectNotes(n, r)
        } else if (0 === e.indexOf("task/")) {
          var y, h = e.split("/"), w = parseInt(h[1]);
          if (h[2] && (y = parseInt(h[2])),
          w) {
            if (1 == t) {
              var v;
              v = y ? _.getBySyncId(y) : _.getById(w),
              v ? o.setCurrentById(v.project_id, !1) : l.query("today")
            }
            u.showItemNotes(w, null , y)
          }
        } else if (0 === e.indexOf("email_tasks/")) {
          var n = parseInt(e.split("/")[1]);
          n && (o.setCurrentById(n, !1),
          i.showEmails(n))
        } else if (0 === e.indexOf("agenda/")) {
          var j = e.split("/");
          j.shift(),
          j.length > 0 && l.query(j.join("/"))
        } else if (0 === e.indexOf("activity")) {
          var b = null
            , I = null
            , A = null
            , j = e.split("/");
          j.length > 1 && ("project" == j[1] ? b = parseInt(j[2]) : "task" == j[1] && (I = parseInt(j[2])),
          "null" != j[3] && (A = j[3])),
          c.showActivity(b, I, A)
        } else if (e.indexOf("karma_info") != -1)
          a.show($("completed_items"));
        else if (e.indexOf("completed") != -1) {
          var S = null
            , C = null
            , j = e.split("/");
          3 == j.length && ("null" != j[1] && (S = parseInt(j[1])),
          "null" != j[2] && (C = j[2])),
          s.showHistory(S, C)
        } else
          e.indexOf("quickAdd") != -1 ? (d.toggle(),
          e = m.cur_location,
          m.setHash(e)) : e.indexOf("updateCount") != -1 ? (e = m.cur_location,
          e.indexOf("#updateCount") != -1 ? m.setHash("#start") : m.setHash(e)) : e.indexOf("sync") != -1 ? (f.sync(null , !0),
          e = m.cur_location,
          m.setHash(e)) : e.indexOf("openOutlook") != -1 || e.indexOf("openThunderbird") != -1 || ("upgrade_to_premium" == e && (e = "windowPref/premium"),
          "invite_friends" == e && (e = "windowPref/invite_friends"),
          0 === e.indexOf("windowPref/") && p.showPrefs($last(e.split("/"))))
      },
      locationPolling: function() {
        var e = m
          , t = e.getHash();
        e.cur_location && e.cur_location != t && (m.setHash(t),
        e.updateView(t),
        e.cur_location = t)
      }
    };
    window.LocationManager = m,
    t.exports = m
  }
  , {
    "../../components/activity_log/.coffee.ActivityLog.js": 9,
    "../../components/agenda/.coffee.AgendaUtils.js": 12,
    "../../components/completed_history/.coffee.CompletedHistory.js": 23,
    "../../components/completed_history/.coffee.CompletedQuickVisualize.js": 24,
    "../../components/notes/Notes.js": 71,
    "../../components/project_editor/.coffee.ProjectExtraActions.js": 82,
    "../../components/project_list/.coffee.ProjectListUtils.js": 87,
    "../../components/quick_add/.coffee.QuickAdd.js": 91,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.SyncEngine.js": 167,
    "../../models/.coffee.TemporaryIds.js": 170,
    "../opener/WindowOpener.js": 74
  }],
  63: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p;
    r = window.AmiTooltip,
    a = window.MiniCal,
    l = window.Signals,
    h = window.imageSprite,
    i = window.GB_showHTML,
    h = window.imageSprite,
    s = e("../items_utils/ItemDueDates.js"),
    c = e("../../components/smart_scheduler/.coffee.QuickDayShow.js"),
    u = e("../../react_components/.es6.SmartSchedule.js"),
    o = {
      SmartScheduler: null
    },
    n.Deps = o,
    d = {
      EVERY_DAY: [_("every day"), _("Every day starting from today (daily also works)")],
      EVERY_MORNING: [_("every morning"), _("Every day at 9am")],
      EVERY_EVENING: [_("every evening"), _("Every day at 7pm")],
      EVERY_WEEKDAY: [_("every weekday"), _("Every Monday, Tuesday, Wednesday, Thursday and Friday")],
      EVERY_3_DAYS: [_("every 3 days"), _("Every 3 days from today")],
      EVERY_WEEK: [_("every week"), _("Every week starting from today (weekly also works)")],
      EVERY_MONTH: [_("every month"), _("Every month starting from today (monthly also works)")],
      EVERY_3RD_FRIDAY: [_("every 3rd friday"), _("Every 3rd Friday of the month")],
      EVERY_27TH: [_("every 27th"), _("Every 27th of the month (every 27 also works)")],
      EVERY_YEAR: [_("every year"), _("Every year starting from today (yearly also works)")],
      EVERY_JAN_27TH: [_("every jan 27th"), _("Every January 27th")]
    },
    f = function(e, t) {
      var n;
      return n = A({
        href: "#"
      }, _(e)),
      $AEV(n, "click", function() {
        if (a.on_recur_date_click && a.on_recur_date_click(e),
        t)
          return t()
      }),
      n
    }
    ,
    p = function() {
      var e, t, n, r, o, s, a;
      e = TBODY(TR(TH(_("Input")), TH(_("Definition (Todoist understands)")))),
      r = null ;
      for (n in d)
        a = d[n],
        o = a[0],
        t = a[1],
        $add(e, TR(TD(f(o, function() {
          return r.hide()
        })), TD(t)));
      return $add(e, TR(TD(_("More formats...")), TD(_("Learn more about date & times on "), A({
        href: "https://todoist.com/Help/DatesTimes",
        target: "_blank"
      }, _("Todoist Support"))))),
      s = TABLE({
        c: "recur_example_table"
      }, e),
      r = i(_("Recurrence Date"), s, 400, 600)
    }
    ,
    n.create = function(e, t, n) {
      var r, i, s, d, l, m, g, y, w, v, j, b, I;
      return null == n && (n = {}),
      j = n.with_smart_schedule === !0,
      m = n.with_batch_smart_schedule === !0,
      b = n.with_today === !0,
      I = n.with_tomorrow === !0,
      y = n.with_next_week === !0,
      v = n.with_postpone === !0,
      g = n.with_month === !0,
      w = n.with_no_date === !0,
      d = j || b || I || y || v || g || w,
      a.annotateDate = function(e, t) {
        return $AEV(e, "mouseover", function() {
          var e;
          return e = c.show(t),
          $replace($("quick_day_show"), e)
        })
      }
      ,
      a.onRemoved = n.on_removed ? n.on_removed : null ,
      a.onSelect = function(e) {
        return e = DateistDateHelpers.date_max(e),
        t(e)
      }
      ,
      r = function(e) {
        return t(e),
        a.remove()
      }
      ,
      i = function(e) {
        var t;
        return !e || e instanceof Array ? $replace($("quick_day_show"), null ) : (t = c.show(e),
        $replace($("quick_day_show"), t))
      }
      ,
      d && (l = o.SmartScheduler.create(r, {
        with_smart_schedule: j,
        with_today: b,
        with_tomorrow: I,
        with_next_week: y,
        with_postpone: v,
        with_month: g,
        with_no_date: w,
        items: n.items,
        on_postpone_click: n.on_postpone_click,
        onHover: i
      }),
      s = DIV({
        c: "minical_scheduler"
      }, l)),
      a.beforeShown = function() {
        var e, t, r;
        return d && $ATT(a.inner, s),
        m && (t = DIV({
          c: "minical__quick-schedule-menu"
        }, _("Smart Schedule"), h("cmp_thunder", 12, 18), h("cmp_thunder_inverse", 12, 18)),
        $AEV(t, "click", function() {
          return a.remove(),
          u.openSmartSchedule(n.items, {
            onSubmitted: n.on_batch_smart_schedule_submitted
          })
        }),
        $ATT(a.inner, t)),
        a.show_recurring_help && (r = A({
          c: "more_ex_link"
        }, h("cmp_question_circle", 12, 12)),
        $AEV(r, "click", function() {
          return p()
        }),
        e = P(_("You can also type in recurring due date like "), f(_("every day")), ", ", f(_("every week")), " and ", f(_("every month")), r),
        $add(a.inner, DIV({
          c: "recur_help"
        }, e))),
        $add(a.inner, c.renderHolder())
      }
      ,
      a.create(e)
    }
  }
  , {
    "../../components/smart_scheduler/.coffee.QuickDayShow.js": 106,
    "../../react_components/.es6.SmartSchedule.js": 177,
    "../items_utils/ItemDueDates.js": 48
  }],
  64: [function(e, t, n) {
    function r() {
      return 0 === location.hostname.indexOf("mac")
    }
    function o() {
      return "ja" == window.LANG || "ko" == window.LANG || 0 === window.LANG.indexOf("zh")
    }
    t.exports = {
      isMacApp: r,
      isAsianLang: o
    }
  }
  , {}],
  65: [function(e, t, n) {
    function r(e, t) {
      e(t.shift()),
      t.length > 0 && window.setTimeout($partial(r, e, t), 5)
    }
    function o(e, t) {
      $isIe() || $isSafari(!0) ? $AEV(e, "keydown", t) : $AEV(e, "keypress", t)
    }
    function i(e, t, n) {
      var r = d[e];
      r && clearTimeout(r),
      d[e] = setTimeout(n, t)
    }
    function s(e, t) {
      try {
        e.postMessage(t, "*")
      } catch (e) {}
    }
    function a(e) {
      return e.indexOf("@") != -1 && e.indexOf(".") != -1
    }
    function c() {
      function e(e) {
        return t(Math.random() * (1 << (e << 2)) ^ Date.now()).slice(-e)
      }
      function t(e) {
        return (0 | e).toString(16)
      }
      return [e(4) + e(4), e(4), "4" + e(3), t(8 | 4 * Math.random()) + e(3), Date.now().toString(16).slice(-10) + e(2)].join("-")
    }
    var d = {};
    t.exports = {
      forceLiveRendering: r,
      attachKeyDown: o,
      delayAjaxUpdate: i,
      checkEmail: a,
      postMessageToWindow: s,
      UUID: c
    }
  }
  , {}],
  66: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.GB_showImage,
    i = window.GB_getLast,
    s = window.GB_hide,
    o = window.GB_CURRENT,
    d = window.PlayManager,
    l = window.imageSprite,
    r = e("../formatter/Formatter.js"),
    c = function() {
      function e() {
        this.audioAttachment = u(this.audioAttachment, this),
        this.iconAttachment = u(this.iconAttachment, this),
        this.render = u(this.render, this)
      }
      return e.prototype.canPlayAudio = function(e) {
        var t;
        return t = document.createElement("audio"),
        !(!t.canPlayType || !t.canPlayType(e).replace(/no/, ""))
      }
      ,
      e.prototype.render = function(e) {
        var t, n, r, o, i, s, a, c, d, l, u, h, f, _;
        if (r = e.file_attachment,
        r && !e.is_buffer_obj) {
          if (i = r.file_underlying_type || r.file_type || "",
          o = (null != (_ = r.file_name) ? _.toLowerCase() : void 0) || "",
          c = r.resource_type || "file",
          "website" === c && r.title && r.url)
            return h = r.title ? DIV({
              c: "text"
            }, $trim(r.title, 65)) : null ,
            n = r.description ? DIV({
              c: "desc_text"
            }, $trim(r.description, 200)) : null ,
            a = null ,
            r.image && (s = 90,
            r.image_height && r.image_height < s && (s = r.image_height),
            l = r.image.indexOf("resizeist") === -1 ? "https://resizeist.doist.com/?url=" + encodeURIComponent(r.image) + "&height=" + s : r.image,
            a = DIV({
              c: "image_holder"
            }, IMG({
              src: l
            }))),
            t = DIV({
              c: "content_holder"
            }, h, n),
            r.image && r.image.indexOf(".gif") !== -1 && (t = null ),
            d = DIV({
              c: "file_attachment"
            }, A({
              href: r.url,
              target: "_blank"
            }, a, t)),
            t && $addClass(d, "has_content"),
            a && $addClass(d, "has_image"),
            d;
          if ((r.file_url || r.url) && (r.image || r.tn_m)) {
            if (u = r.image ? r.image : r.tn_m[0],
            f = 150,
            !u)
              return;
            return u.indexOf("resizeist") === -1 && (u = "https://resizeist.doist.com/?url=" + encodeURIComponent(u) + "&width=" + f),
            d = A({
              href: r.file_url || r.url,
              target: "_blank",
              c: "file_attachment"
            }, IMG({
              src: u,
              width: f,
              c: "preview"
            })),
            $AEV(d, "click", $p(this.showImage, d.href, d.href, d)),
            d
          }
          return "outlook/mail" === c ? this.iconAttachment(r, "ft_outlook_mail") : 0 === i.indexOf("td/") ? this.iconAttachment(r, "ft_email") : r.file_url && i.indexOf("audio/") !== -1 && this.canPlayAudio(i) ? this.audioAttachment(r) : i.indexOf("pdf") !== -1 ? this.iconAttachment(r, "ft_pdf") : o.indexOf(".xl") !== -1 || i.indexOf("spreadsheet") !== -1 ? this.iconAttachment(r, "ft_excel") : o.indexOf(".doc") !== -1 || i.indexOf("document") !== -1 ? this.iconAttachment(r, "ft_word") : o.indexOf(".pp") !== -1 ? this.iconAttachment(r, "ft_pp") : o.indexOf(".zip") !== -1 ? this.iconAttachment(r, "ft_zip") : 0 === i.indexOf("td/hyperlink") ? this.iconAttachment(r, "ft_link") : o.indexOf(".psd") !== -1 ? this.iconAttachment(r, "ft_psd") : o.indexOf(".sketch") !== -1 ? this.iconAttachment(r, "ft_sketch") : o.indexOf(".aep") !== -1 ? this.iconAttachment(r, "ft_aep") : o.indexOf(".ai") !== -1 ? this.iconAttachment(r, "ft_ai") : o.indexOf(".py") !== -1 || o.indexOf(".php") !== -1 || o.indexOf(".java") !== -1 || o.indexOf(".rb") !== -1 || o.indexOf(".js") !== -1 ? this.iconAttachment(r, "ft_code") : 0 === i.indexOf("text/") ? this.iconAttachment(r, "ft_text") : this.iconAttachment(r, "ft_generic")
        }
      }
      ,
      e.prototype.iconAttachment = function(e, t) {
        var n, o, i, s, a, c, d;
        return "ft_outlook_mail" === t ? (i = l("cmp_email service_icon", 22, 30),
        n = DIV({
          c: "file_attachment"
        }, i, SPAN({
          c: "text"
        }, $trim(e.file_name || "", 50)))) : "ft_email" === t ? (n = DIV({
          c: "file_attachment link_attachment"
        }),
        d = r.format(e.file_url),
        $setHTML(n, d),
        n) : (c = null ,
        "pending" === e.upload_state && (c = _("Pending")),
        "canceled" === e.upload_state && (c = _("Canceled")),
        c && (c = SPAN({
          c: "status"
        }, c)),
        "ft_link" === t ? (o = "file_attachment link_attachment",
        i = l("cmp_attachment icon", 16, 16)) : (o = "file_attachment",
        i = l("cmp_" + t + " icon", 22, 30)),
        a = DIV({
          c: o
        }, s = A({
          href: e.file_url,
          target: "_blank"
        }, i, SPAN({
          c: "text"
        }, $trim(e.file_name || "", 50)), c)),
        c && ($addClass(s, "no_action"),
        s.onclick = function() {
          return !1
        }
        ),
        a)
      }
      ,
      e.prototype.showImage = function(e, t, n, r) {
        var c, d, u, h;
        return t.indexOf("dropbox.com") !== -1 || (!!window.FLUID_MINI || (e = e.indexOf("resizeist") === -1 ? "https://resizeist.doist.com/?url=" + encodeURIComponent(e) + "&maxheight=800&maxwidth=800" : e,
        $preventDefault(r),
        a("", e),
        i().setZindex(1e7),
        c = $last(o),
        h = t,
        h.length > 40 && (h = h.substring(0, 40) + "..."),
        u = DIV({
          c: "orginal_link"
        }, A({
          href: t,
          target: "_blank"
        }, _("View full size in another window"))),
        $addAfter(u, c.iframe),
        d = l("cmp_small_close", 16, 16),
        $AEV(d, "click", s),
        $addBefore(d, c.iframe),
        !1))
      }
      ,
      e.prototype.audioAttachment = function(e) {
        var t, n, r, o, i, s, a;
        return t = document.createElement("audio"),
        t.controls = !1,
        t.src = e.file_url,
        t.volume = 1,
        $AEV(t, "error", function() {
          return t.error_loading = !0
        }),
        n = A({
          href: "#"
        }, r = l("cmp_play", 16, 16)),
        o = A({
          href: e.file_url,
          target: "_blank",
          c: "attachment_link"
        }, l("cmp_attachment", 16, 16)),
        s = DIV({
          c: "audio_player"
        }, t, n, a = SPAN({
          c: "timer"
        }, "00:00"), o),
        i = t.duration || e.file_duration,
        i && d.timerFormat(a, i),
        d.attach(n, t, a, function(e) {
          return "play" === e ? $setClass(r, "cmp_stop") : "stop" === e ? $setClass(r, "cmp_play") : void 0
        }),
        s
      }
      ,
      e
    }(),
    t.exports = new c
  }
  , {
    "../formatter/Formatter.js": 38
  }],
  67: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    i = window.TooptipWin,
    r = function() {
      function e() {
        this.getValue = s(this.getValue, this),
        this.reset = s(this.reset, this)
      }
      return e.prototype.current_note = "",
      e.prototype.reset = function() {
        return this.current_note = ""
      }
      ,
      e.prototype.getValue = function() {
        return $strip(this.current_note)
      }
      ,
      e.prototype.showTooltip = function(e) {
        var t, n, r, s, a;
        return !$isHidden(e) && (n = DIV(s = TEXTAREA({
          placeholder: _("Content")
        })),
        this.current_note && (s.value = this.current_note),
        $AEV(s, "keyup", function(t) {
          return function() {
            return t.current_note = s.value,
            t.current_note.length > 0 ? ($addClass(e, "cmp_comment_red"),
            $removeClass(e, "cmp_comment_on")) : ($removeClass(e, "cmp_comment_red"),
            $addClass(e, "cmp_comment_on"))
          }
        }(this)),
        t = $position(e),
        r = {
          fn_left_offset: function() {
            return t.x - 270
          },
          fn_top_offset: function() {
            return t.y + 25
          },
          fn_arrow_left: function() {
            return t.x
          },
          fixed_pos: $hasClass(e, "fixed_pos"),
          fn_on_hide: function() {
            return o.sendSignal("focus_current_item_input")
          }
        },
        a = i.show(_("Quick Comment"), n, 210, 300, r),
        $addClass(a.g_window, "notes_add_tooltip"),
        s.focus(),
        !1)
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {}],
  68: [function(e, t, n) {
    var r, o, i, s, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Signals,
    r = window.ElementStore,
    i = e("../../models/.coffee.NotesModel.js"),
    o = function() {
      function e() {
        this.fileStatusChange = a(this.fileStatusChange, this),
        this.addNotes = a(this.addNotes, this),
        this.getNoteUploads = a(this.getNoteUploads, this)
      }
      return e.prototype.note_uploads = [],
      e.prototype.getNoteUploads = function() {
        return this.note_uploads
      }
      ,
      e.prototype.addNotes = function(e, t, n, o, s) {
        var a, c, d, l;
        if (0 === s.length)
          return [i.addNote(e, n, t, o)];
        for (c = function(n, s) {
          var a, c, d;
          return a = {},
          n.file_server_info ? (a.file_server_info = n.file_server_info,
          c = !1) : (a.file_server_info = {
            file_name: n.file.name,
            file_type: n.file.type,
            file_size: n.file.size,
            upload_state: "pending"
          },
          c = !0),
          d = i.addNote(e, s, t, o, a),
          d.is_buffer_obj = c,
          r.set(d, "file", n),
          d
        }
        ,
        l = []; ; ) {
          if (a = s.shift(),
          !a)
            break;
          n = 0 === l.length ? n : "",
          d = c(a, n),
          this.note_uploads.push(d),
          a.addCallback($p(this.fileStatusChange, d)),
          l.push(d)
        }
        return l
      }
      ,
      e.prototype.fileStatusChange = function(e, t) {
        var n;
        return t.file ? t.success ? (t.instant || (n = t.file_server_info,
        n.upload_state = "completed",
        i.updateNote(e.id, null , n)),
        s.sendSignal("refresh_interface"),
        this.note_uploads = $arrayRemove(this.note_uploads, e),
        r.remove(e, "file"),
        e.is_buffer_obj ? delete e.is_buffer_obj : void 0) : s.sendSignal("upload_error", e, t) : (this.note_uploads = $arrayRemove(this.note_uploads, e),
        r.remove(e, "file"))
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../models/.coffee.NotesModel.js": 157
  }],
  69: [function(e, t, n) {
    var r, o, i, s;
    s = window.imageSprite,
    r = e("../../models/.coffee.Collaborators.js"),
    i = e("../../models/.coffee.NotesModel.js"),
    n.Deps = o = {
      Notes: null
    },
    n.show = function(e, t, n) {
      return o.Notes.showItemNotes(e, t, n)
    }
    ,
    n.annotate = function(e, t) {
      return o.Notes.annotate(e, t)
    }
    ,
    n.shortName = function(e) {
      var t;
      return t = e.full_name.split(" "),
      t.length > 1 ? t[0] + " " + t[1].substring(0, 1) + "." : t[0]
    }
    ,
    n.renderIcon = function(e, t, n) {
      "note_parent: item or project";
      var r, a, c, d;
      return a = s("cmp_comment clickable sel_item_notes", 15, 14),
      r = SPAN({
        c: "clickable note_icon"
      }, a),
      r.setAttribute("data-note-type", t),
      r.setAttribute("data-note-parent-id", e.id),
      $AEV(r, ["click", "touchend"], function(n) {
        if (!n.ctrl)
          return t === i.TYPE_ITEM_NOTE ? o.Notes.showItemNotes(e.id, e.sync_id) : o.Notes.showProjectNotes(e.id)
      }),
      $AEV(r, "mouseover", function() {
        return $setClass(a, "cmp_comment_on clickable")
      }),
      $AEV(r, "mouseout", function() {
        return $setClass(a, "cmp_comment clickable")
      }),
      e.notes && $map(e.notes, function(e) {
        return i.model_data[e.id] = e
      }),
      c = i.getNotes(e.id, t),
      null == n && (n = c.length),
      n > 0 ? (d = SPAN({
        c: "clickable note_count sel_note_count"
      }),
      n = "" + n,
      e && e.has_more_notes && (n += "+"),
      $setHTML(d, n),
      $add(r, d)) : t === i.TYPE_ITEM_NOTE && $addClass(r, "note_icon_hidden"),
      r
    }
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.NotesModel.js": 157
  }],
  70: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    , d = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
          return t;
      return -1
    }
    ;
    s = e("../../models/.coffee.NotesModel.js"),
    o = e("../../models/.coffee.Collaborators.js"),
    r = e("../avatars/.coffee.Avatars.js"),
    a = e("../notes/.coffee.NotesUtils.js"),
    i = function() {
      function e() {
        this.renderMultiSelecter = c(this.renderMultiSelecter, this),
        this.reRender = c(this.reRender, this),
        this.setInitialSelected = c(this.setInitialSelected, this),
        this.renderCheckmarkSelector = c(this.renderCheckmarkSelector, this),
        this.getUidsToNotify = c(this.getUidsToNotify, this),
        this.render = c(this.render, this),
        this.current_project_id = c(this.current_project_id, this),
        this.is_project_note = c(this.is_project_note, this),
        this.reset = c(this.reset, this)
      }
      return e.prototype.reset = function() {
        return this.task = null ,
        this.project = null ,
        this.note_type = null ,
        this.other_collaborators = null ,
        this.thread_uids = null ,
        this.current_selected = null ,
        this.holder = null
      }
      ,
      e.prototype.is_project_note = function() {
        return this.note_type === s.TYPE_PROJECT_NOTE
      }
      ,
      e.prototype.current_project_id = function() {
        return this.is_project_note() ? this.project.id : this.task.project_id
      }
      ,
      e.prototype.render = function(e, t) {
        "note_parent: item (for item note) or project (for project note)";
        var n, r, i, a, c;
        for (this.reset(),
        this.note_type = t,
        this.note_type === s.TYPE_PROJECT_NOTE ? this.project = e : this.task = e,
        r = s.getNotes(e.id, t),
        i = window.User.id,
        this.other_collaborators = o.getAll(this.current_project_id()).filter(function(e) {
          return e.id !== i
        }),
        this.thread_uids = {},
        a = 0,
        c = r.length; a < c; a++)
          n = r[a],
          n.posted_uid !== i && (this.thread_uids[n.posted_uid] = n.posted_uid);
        return this.holder = DIV({
          c: "who_to_notify"
        }),
        this.setInitialSelected(r),
        1 === this.other_collaborators.length ? $add(this.holder, this.renderCheckmarkSelector()) : this.other_collaborators.length > 1 && $add(this.holder, this.renderMultiSelecter()),
        this.holder
      }
      ,
      e.prototype.getUidsToNotify = function() {
        return $values(this.current_selected)
      }
      ,
      e.prototype.renderCheckmarkSelector = function() {
        var e, t, n, r;
        return e = this.other_collaborators[0],
        n = e.full_name.split(" ")[0],
        t = LABEL({
          for: "notify_person"
        }, _("Notify %s about my comment").replace("%s", n)),
        r = INPUT({
          type: "checkbox",
          value: "notify_person",
          id: "notify_person"
        }),
        this.current_selected[e.id] && (r.checked = !0),
        $AEV(r, "change", function(t) {
          return function() {
            return r.checked ? t.current_selected[e.id] = e.id : delete t.current_selected[e.id]
          }
        }(this)),
        SPAN(r, t)
      }
      ,
      e.prototype.setInitialSelected = function(e) {
        var t, n, r, o, i, s, a, c, l, u, h, f;
        if (o = window.User.id,
        this.current_selected = {},
        t = function(e) {
          return function(t) {
            var n;
            if (t && t !== o && d.call(function() {
              var e, t, r, o;
              for (r = this.other_collaborators,
              o = [],
              e = 0,
              t = r.length; e < t; e++)
                n = r[e],
                o.push(n.id);
              return o
            }
            .call(e), t) >= 0)
              return e.current_selected[t] = t
          }
        }(this),
        0 !== e.length) {
          if (r = $last(e),
          t(r.posted_uid),
          s = r.uids_to_notify) {
            for ($isString(s) && (s = $eval(s)),
            f = [],
            c = 0,
            u = s.length; c < u; c++)
              i = s[c],
              f.push(t(i));
            return f
          }
        } else if (this.is_project_note())
          for (h = this.other_collaborators,
          a = 0,
          l = h.length; a < l; a++)
            n = h[a],
            t(n.id);
        else
          t(this.task.assigned_by_uid),
          t(this.task.responsible_uid)
      }
      ,
      e.prototype.reRender = function() {
        var e, t;
        return t = this.mutli_selecter,
        e = this.renderMultiSelecter(),
        $swap(t, e)
      }
      ,
      e.prototype.renderMultiSelecter = function() {
        var e, t, n, i, s, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, $, S;
        for (n = $values(this.current_selected),
        0 === n.length ? j = _("Notify <b>Nobody</b> about my comment") : n.length === this.other_collaborators.length ? j = _("Notify <b>Everybody</b> about my comment") : 1 === n.length ? (b = o.getUserById(n[0]),
        f = a.shortName(b),
        j = _("Notify <b>%s</b> about my comment").replace("%s", f)) : j = _("Notify <b>%s people</b> about my comment").replace("%s", n.length),
        t = A({
          href: "#",
          c: "change"
        }, _("Change")),
        $AEV(t, "click", function(e) {
          return function() {
            return $addClass(e.holder, "expanded"),
            !1
          }
        }(this)),
        u = LABEL({
          for: "notify_toggle"
        }, _("Notify following people"), ":"),
        d = INPUT({
          type: "checkbox",
          value: "notify_toggle",
          id: "notify_toggle"
        }),
        n.length > 0 && (d.checked = !0),
        $AEV(d, "change", function(e) {
          return function() {
            var t, n, r;
            if (d.checked)
              for (r = e.other_collaborators,
              t = 0,
              n = r.length; t < n; t++)
                b = r[t],
                e.current_selected[b.id] = b.id;
            else
              e.current_selected = {};
            return e.reRender()
          }
        }(this)),
        g = DIV({
          c: "people people_holder"
        }),
        S = this.other_collaborators,
        I = 0,
        $ = S.length; I < $; I++)
          b = S[I],
          p = "notify_" + b.id,
          e = r.renderAvatar(b, "small"),
          h = LABEL(e, SPAN({
            c: "truncated"
          }, a.shortName(b))),
          l = INPUT({
            type: "checkbox",
            value: p
          }),
          m = function(e) {
            return function(t, n) {
              return e.current_selected[n] ? delete e.current_selected[n] : e.current_selected[n] = n,
              e.reRender()
            }
          }(this),
          this.current_selected[b.id] && (l.checked = !0),
          $add(g, i = DIV({
            c: "user"
          }, l, h)),
          s = $p(m, l, b.id),
          $AEV(i, "click", s);
        return v = DIV({
          c: "selecter"
        }, SPAN({
          c: "top_selecter"
        }, d, u), g),
        w = DIV({
          c: "save_holder"
        }, y = A({
          href: "#"
        }, _("Hide"))),
        $AEV(y, "click", function(e) {
          return function() {
            return $removeClass(e.holder, "expanded"),
            !1
          }
        }(this)),
        this.mutli_selecter = c = DIV({
          c: "mutli_selecter"
        }, w, $setHTML(SPAN({
          c: "desc_text"
        }), j), t, v),
        c
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.NotesModel.js": 157,
    "../avatars/.coffee.Avatars.js": 21,
    "../notes/.coffee.NotesUtils.js": 69
  }],
  71: [function(e, t, n) {
    var r = window.Signals
      , o = window.LibEdit
      , i = window.PlayManager
      , s = window.FilesManager
      , a = window.RecordManager
      , c = window.GFile
      , d = window.GFileView
      , l = window.GB_hide
      , u = window.GB_showHTML
      , h = window.GB_getLast
      , f = window.Indicator
      , p = window.Alerts
      , m = window.AmiButton
      , g = window.AmiTooltip
      , y = window.DateUtils
      , w = window.ElementStore
      , v = window.Emoticons
      , j = window.TextAreaHolder
      , b = window.FocusElm
      , I = window.$isTouchDeviceOnly
      , S = window.imageSprite
      , C = e("../resizing_text_area/ResizingTextArea.js")
      , T = e("../items_utils/.coffee.ItemCheckbox.js")
      , k = e("../agenda/.coffee.AgendaUtils.js")
      , D = e("../project_editor/.coffee.ProjectEditorManager.js")
      , E = e("../project_list/.coffee.ProjectListUtils.js")
      , x = e("../promotion_overlay/.coffee.PromotionOverlay.js")
      , P = e("../avatars/.coffee.Avatars.js")
      , M = e("../../mini/.coffee.ContentTransformers.js").ContentTransformers
      , N = e("../formatter/Formatter.js")
      , L = e("../action_perfomed/.coffee.ActionPerformed.js")
      , R = e("../../models/.coffee.TemporaryIds.js")
      , U = e("../../models/.coffee.Collaborators.js")
      , O = e("../../models/.coffee.NotesModel.js")
      , V = e("../../models/.coffee.ItemsModel.js")
      , H = e("../../models/.coffee.ProjectsModel.js")
      , F = e("../../models/.coffee.NotificationsModel.js")
      , G = e("../../models/.coffee.ModelUndo.js")
      , q = e("./.coffee.WhoToNotify.js")
      , z = e("./.coffee.NoteMedia.js")
      , Y = e("./.coffee.NotesBuffer.js")
      , W = e("./.coffee.NotesUtils.js")
      , Q = {
      current_task: null ,
      current_project: null ,
      restore_project: null ,
      restore_items: null ,
      init: function() {
        $AEV(window, "load", function() {
          R.listenAll(function(e, t) {
            var n = $("note_" + e);
            n && (n.id = "note_" + t)
          })
        }),
        r.connect("notes_updated", function(e) {
          return "play" == i.state ? void setTimeout(function() {
            r.sendSignal("notes_updated", e)
          }, 1e3) : void (Q.current_task ? $map(e, function(e) {
            e.item_id == Q.current_task.id && Q.renderNotes(Q.current_task, O.TYPE_ITEM_NOTE, Q.div_notes, Q.holder)
          }) : Q.current_project && $map(e, function(e) {
            e.item_id || e.project_id != Q.current_project.id || Q.renderNotes(Q.current_project, O.TYPE_PROJECT_NOTE, Q.div_notes, Q.holder)
          }))
        }),
        r.connect("external_service_annotation", this.externalServicesAnnotation),
        r.connect("upload_error", function(e, t) {
          var n = Q.current_task;
          if (n && n.id == e.item_id)
            return !0;
          var r = _('Uploading "%s" failed.').replace("%s", t.file.name);
          p.confirm(r, function(t) {
            if (t) {
              var n = null === e.item_id || void 0 === e.item_id;
              n ? Q.showProjectNotes(e.project_id, e.id) : Q.showItemNotes(e.item_id, e.id)
            }
          }, _("View upload"))
        }),
        r.connect("note_buffer_commit", function(e, t) {
          var n = $("note_" + e.id);
          n && $swap(n, Q.renderNote(t))
        }),
        r.connect("people_assigner_person_changed", function() {
          Q.current_task && r.sendSignal("refresh_interface")
        })
      },
      isReadOnly: function() {
        return Q.current_task ? Q.current_task.is_archived : Q.current_project.is_archived
      },
      isPremium: function(e) {
        return !!window.User.is_premium || (2 == window.User.features.restriction || !(!e || !U.isProjectShared(e)))
      },
      annotate: function(e, t, n) {
        var r = W.renderIcon(e, O.TYPE_ITEM_NOTE);
        $add(t, r)
      },
      showProjectNotes: function(e, t) {
        if (Q.is_currently_in_edit())
          return Q.close_currently_edit(function() {
            Q.showProjectNotes(e, t)
          }),
          !1;
        var n = Q.openGBWindow(!0)
          , r = H.get(e);
        return t && (Q.note_to_focus = t),
        r ? Q.renderHolder(r, O.TYPE_PROJECT_NOTE, n) : Q.renderProjectNotesAjax(n, e),
        !1
      },
      showItemNotes: function(e, t, n) {
        if (Q.is_currently_in_edit())
          return Q.close_currently_edit(function() {
            Q.showItemNotes(e, t, n)
          }),
          !1;
        var r, o = Q.openGBWindow(!1);
        return n && (r = V.getBySyncId(n)),
        r || (r = V.getById(e)),
        t && (Q.note_to_focus = t),
        !r || r.is_archived || r.in_history ? Q.renderItemNotesAjax(o, e, n) : Q.renderHolder(r, O.TYPE_ITEM_NOTE, o),
        !1
      },
      is_currently_in_edit: function() {
        return Q.current_task || D.current_form
      },
      close_currently_edit: function(e) {
        return Q.current_task ? void l(function() {
          D.current_editor ? D.current_editor.saveCurrentItem(e) : e()
        }) : void (D.current_form && D.current_editor && D.current_editor.saveCurrentItem(e))
      },
      openGBWindow: function(e) {
        if (e)
          var t = _("Project Comments");
        else
          var t = _("Comments");
        var n = document.title
          , r = Q.getDimension()
          , o = DIV({
          c: "notes_holder notes_loading"
        }, f.cssSpinner());
        L.mark("Notes/open");
        var c = u(t, o, r.height, r.width, {
          close_validator_fn: function() {
            var e = $("note_textarea");
            if (!e)
              return !0;
            var t = function() {
              q.reset(),
              Q.holder = null ,
              Q.current_task = null ,
              Q.current_project = null ,
              Q.submit_fn = null ,
              Q.attach_button = null ,
              Q.files_view = null ,
              s.reset(),
              a.reset(),
              i.reset(),
              document.title = n;
            }
              , r = $strip(e.value);
            return 0 !== r.length ? (p.confirmYesNo(_("Are you sure you want to cancel your current input?"), function(n) {
              n ? (l(null , !1),
              t()) : e.focus()
            }),
            !1) : (t(),
            !0)
          }
        });
        return $addClass(c.g_window, "notes_gb_window"),
        o
      },
      renderProjectNotesAjax: function(e, t, n) {
        var o = function(t) {
          Q.current_project = t.project,
          Q.temp_project = t.project,
          Q.renderHolder(t.project, O.TYPE_PROJECT_NOTE, e);
          var o = H.get(Q.temp_project.id);
          o && r.sendSignal("refresh_interface", [Q.temp_project]),
          n && n()
        }
          , i = function(e) {
          l(),
          e && e.indexOf("PROJECT_NOT_FOUND") != -1 ? alert(_("The project was not found, could be deleted or moved.")) : alert(_("An unknown error happened") + ". " + _("Please try again later. We're sorry for the trouble."))
        }
        ;
        O.ajaxGetProjectNotesData(t, o, i)
      },
      renderItemNotesAjax: function(e, t, n, o) {
        var i = function(t) {
          if (null == t.item)
            return l(),
            void alert(_("The task was not found, could be deleted."));
          t.item.due_date || (t.item.due_date = t.item.due_date_utc),
          Q.current_project = t.project,
          Q.temp_project = t.project,
          Q.renderHolder(t.item, O.TYPE_ITEM_NOTE, e);
          var n = H.get(Q.temp_project.id);
          n && r.sendSignal("refresh_interface", [Q.temp_project]),
          $isFunction(o) && o(t.item)
        }
          , s = function(e) {
          l(),
          e && e.indexOf("ITEM_NOT_FOUND") != -1 ? alert(_("The task was not found, could be deleted or moved.")) : alert(_("An unknown error happened") + ". " + _("Please try again later. We're sorry for the trouble."))
        }
        ;
        O.ajaxGetTaskNotesData(t, n, i, s)
      },
      renderHolder: function(e, t, n) {
        var o = O.getNotes(e.id, t)
          , i = t == O.TYPE_ITEM_NOTE ? e.project_id : e.id;
        if (o.length <= 0 && !Q.isPremium(i))
          return l(),
          void Q.showPromo();
        var s, a, c;
        if (t === O.TYPE_ITEM_NOTE) {
          var d = N.format(e.content, {
            only_text: !0,
            as_html: !1
          });
          document.title = $strip(d) + ": Todoist",
          r.sendSignal("change_location", "task/" + e.id),
          Q.current_task = e,
          Q.current_project = Q.getProject(e.project_id),
          c = DIV({
            c: "note_item"
          }, UL({
            c: "items"
          }, Q.renderItem(e)), Q.renderExtraItemInfo(e))
        } else {
          var d = N.format(e.name, {
            only_text: !0,
            as_html: !1
          });
          document.title = $strip(d) + ": Todoist",
          r.sendSignal("change_location", "project_comments/" + e.id),
          Q.current_task = null ,
          Q.current_project = e,
          c = DIV({
            c: "note_item"
          }, Q.renderExtraProjectInfo(e))
        }
        var u = q.render(e, t)
          , h = m.createButton(_("Add Comment"), null , "red sel_submit_note")
          , p = U.isProjectShared(this.current_project.id)
          , g = Q.renderTextareaHolder(!1)
          , y = DIV({
          c: "notes_holder"
        }, c, this.div_notes = a = DIV({
          c: "note_notes",
          id: "current_notes"
        }), DIV({
          c: "note_submit"
        }, s = FORM(g.holder, DIV({
          c: "btn_area"
        }, TABLE({
          width: "100%"
        }, TBODY(TR(TD({
          width: "30%"
        }, h), TD({
          s: "text-align: right"
        }, u))))))));
        if ($add(a, f.cssSpinner()),
        p && $addClass(y, "notes_shared"),
        Q.isReadOnly())
          $addClass(y, "notes_readonly");
        else {
          var w = $p(Q.addNote, e, t, s);
          s.submit_fn = w,
          $AEV(s, "submit", w),
          $AEV(h, "click", w),
          Q.submit_fn = w
        }
        Q.holder = y,
        Q.externalServicesAnnotation(window.CURRENT_EXERNAL_SERVICE),
        $swap(n, y),
        Q.renderNotes(e, t, Q.div_notes, y);
        var v = $("note_textarea");
        return I() || setTimeout(function() {
          v.focus()
        }, 50),
        Q.attachNoteKeyboardShortcuts(v),
        !1
      },
      renderExtraProjectInfo: function(e) {
        var t = DIV({
          c: "note_extra_info"
        });
        return $add(t, Q.renderProjectLink(e)),
        t
      },
      renderExtraItemInfo: function(e) {
        if (!e.date_added)
          return null ;
        var t = DIV({
          c: "note_extra_info"
        });
        if (e.date_added) {
          Q.resolveDate(e, "date_added");
          var n = SPAN(y.formatView(e.date_added))
            , r = function(e) {
            var n = Q.renderProjectLink(e);
            $add(t, SPAN({
              c: "sep"
            }, " \u2022 "), n)
          }
            , o = this.current_project;
          if (o && U.isProjectShared(o.id)) {
            var i = U.getUserById(e.assigned_by_uid || e.user_id);
            if (i) {
              var s = SPAN(_("Added by"), " ", W.shortName(i));
              $add(t, s),
              g.showSimpleText(s, SPAN(_("Time added"), " ", n));
              var a = P.renderAvatar(i, "small");
              $ATT(s, a)
            }
            r(o)
          } else
            o && (g.showSimpleText(n, _("Time added")),
            $add(t, n),
            r(o))
        }
        return t
      },
      renderItem: function(e) {
        var t = k.renderItem(e, {
          with_due_date: !0,
          no_drag_and_drop: !0,
          with_project: !1,
          not_editable: !1,
          fn_complete_item: this.completeItem,
          fn_undo_complete_item: this.uncompleteItem
        });
        return $addClass(t, "note_task"),
        t
      },
      renderTextareaHolder: function(e) {
        function t() {
          return !!window.User.is_premium || (Q.showPromo(),
          !1)
        }
        var n = _("Content")
          , r = TEXTAREA({
          placeholder: n,
          id: "note_textarea"
        });
        new C(r,!1),
        Q.attachNoteKeyboardShortcuts(r);
        var o, i, c, d;
        e || (d = s.generateUploadView(),
        Q.files_view = d,
        o = m.createMiniButton(S("cmp_attachment", 16, 16), "upload_btn"),
        $AEV(o, "click", function(e) {
          return s.showDropArea(!0, {
            on_computer_click: function(e) {
              t() || e.preventDefault()
            }
          }),
          g.hide(),
          !1
        }),
        c = m.createMiniButton(S("cmp_record_icon", 16, 16), "upload_btn"),
        c.addEventListener("click", function(e) {
          t() && a.show()
        }),
        i = this.attach_button = m.createMiniButton(S("cmp_attachment_page", 16, 16), "attach_btn"),
        g.showSimpleText(i, function() {
          return i.tooltip_text
        }));
        var l = [o, c, i];
        l.push(v.getButton(r));
        var u = j.create({
          text_area: r,
          buttons: l
        });
        return e || ($addAfter(d, r),
        s.setDropArea(d, u, function(e) {
          var n = t();
          return n
        })),
        {
          holder: u,
          textarea: r
        }
      },
      showPromo: function() {
        return x.show(_("Comments and file attachments are premium features"), _("With comments you can add as many details as you want. Or attach PDFs, spreadsheets or photos!")),
        !1
      },
      completeItem: function(e) {
        V.complete(e.json),
        Q._genericUpdateCheckbox(e, !0)
      },
      uncompleteItem: function(e) {
        V.uncomplete(e.json),
        Q._genericUpdateCheckbox(e, !1);
        var t = $all("li", "item_" + e.json.id);
        $map(t, function(e) {
          $hasClass(e, "history_item") && $remove(e)
        })
      },
      _genericUpdateCheckbox: function(e, t) {
        var n = G.getCurrentCheckpoint();
        T.update(e, t, function() {
          G.restoreCustom(n);
          var r;
          r = t ? $p(Q.completeItem, e) : $p(Q.uncompleteItem, e),
          T.update(e, !t, r)
        }, !1);
        var o = Q.getProject(e.json.project_id);
        o && r.sendSignal("refresh_interface", [o], !0)
      },
      renderNote: function(e) {
        var t = this.current_project && U.isProjectShared(this.current_project.id)
          , n = N.format(e.content, {
          as_html: !0,
          attachment: e.file_attachment
        })
          , r = S("cmp_trash", 10, 11)
          , o = S("cmp_pencil", 16, 16)
          , i = y.formatView(e.posted);
        e.posted_uid || (e.posted_uid = window.User.id);
        var s = DIV({
          c: "note_actions"
        });
        e.posted_uid == window.User.id && (e.is_buffer_obj ? $add(s, r, " ") : Q.isReadOnly() || $add(s, o, " ", r, " ")),
        $add(s, Q.usersNotified(e), " ");
        var a = DIV({
          c: "note_meta"
        }, SPAN({
          c: "time"
        }, i), s)
          , c = DIV({
          c: "note_text",
          id: "note_" + e.id
        }, a, $setHTML(SPAN({
          c: "note_content"
        }), n));
        if (t) {
          var l = U.getUserById(e.posted_uid);
          if (l) {
            var u = P.renderAvatar(l, "medium");
            $addClass(c, "has_avatar"),
            $ATT(c, u),
            $ATT(a, SPAN({
              c: "user_name"
            }, W.shortName(l)))
          }
        }
        var h = z.render(e);
        h && $add(c, h),
        $AEV(r, "click", $p(Q.deleteNote, e, c)),
        $AEV(o, "click", $p(Q.showEditNote, e, c));
        var f = w.get(e, "file");
        if (e.is_buffer_obj && f) {
          $setOpacity(c, .6);
          var _ = new d(f);
          $add(c, DIV({
            c: "files_view"
          }, _.render(!1)))
        }
        return c
      },
      clearEmpty: function() {
        $remove($all("div", "no_notes", $("current_notes")))
      },
      focusLatest: function(e) {
        $("current_notes").scrollTop = e.offsetTop
      },
      usersNotified: function(e) {
        var t = e.uids_to_notify;
        if (t && t.length > 0) {
          var n = S("cmp_dark_notifications clickable", 26, 16)
            , r = function() {
            return -$("current_notes").scrollTop || 0
          }
          ;
          return g.showTooltip(n, function() {
            var e = DIV({
              c: "people_holder notified_people"
            }, B(_("People notified")), BR());
            return $map(t, function(t) {
              var n = U.getUserById(t);
              if (n) {
                var r = P.renderAvatar(n, "small")
                  , o = DIV({
                  c: "user"
                }, r, SPAN(W.shortName(n)));
                $add(e, o, BR())
              }
            }),
            e
          }, r, 0),
          n
        }
      },
      showEditNote: function(e, t) {
        Q.current_note = e,
        Q.edit_note_saved = !1;
        var n, r = Q.getDimension();
        n = m.createButton(_("Update"), null , "red");
        var i, s = Q.renderTextareaHolder(!0), t = DIV({
          c: "note_submit note_edit"
        }, i = FORM(s.holder, DIV({
          c: "btn_area"
        }, n))), a = $p(Q.saveNote, n, e, s.textarea);
        return i.submit_fn = a,
        $AEV(n, "click", a),
        s.textarea.value = e.content,
        u(_("Edit"), t, r.height, r.width, {
          close_validator_fn: function() {
            var t = s.textarea;
            return !t || (Q.edit_note_saved ? (Q.edit_note_saved = !1,
            !0) : t.value == e.content || (p.confirmYesNo(_("Are you sure you want to cancel your current input?"), function(e) {
              e ? l(null , !1) : t.focus()
            }),
            !1))
          }
        }),
        o.placeCursor(s.textarea, s.textarea.value.length),
        !1
      },
      saveNote: function(e, t, n) {
        var r = $strip(n.value);
        if ("" == r)
          return !1;
        $hide(e),
        $addAfter(f.cssSpinner(), e),
        O.updateNote(Q.current_note.id, r);
        var o, i = Q.current_note;
        if (i) {
          i.content = r;
          var s = $("note_" + i.id);
          s && (o = Q.renderNote(i),
          $addClass(o, "note_updated"),
          $swap(s, o))
        }
        return Q.edit_note_saved = !0,
        l(),
        !1
      },
      renderNotes: function(e, t, n, r) {
        var o = O.getNotes(e.id, t);
        $replace(n, null );
        var i, s = Q.note_to_focus, a = _("Fetch older comments"), c = t == O.TYPE_ITEM_NOTE ? _("This task has no comments") : _("This project has no comments");
        if (0 === o.length)
          $add(n, DIV({
            c: "no_notes"
          }, c));
        else {
          var d, l = !1;
          if (!e.all_notes_fetched && o.length >= 10 && (l = !0),
          e.has_more_notes && (l = !0),
          l) {
            var u;
            $add(n, u = A({
              c: "fetch_old",
              href: "#"
            }, a)),
            $AEV(u, "click", function() {
              return $replace(u, f.cssSpinner()),
              t === O.TYPE_ITEM_NOTE ? Q.renderItemNotesAjax(r, e.id, e.sync_id, function() {
                var e = $child(r, "div", "note_text");
                e && Q.focusLatest(e)
              }) : Q.renderProjectNotesAjax(r, e.id, function() {
                var e = $child(r, "div", "note_text");
                e && Q.focusLatest(e)
              }),
              !1
            })
          }
          $map(o, function(e) {
            $add(n, d = Q.renderNote(e)),
            s && e.id == s && (i = d)
          }),
          setTimeout(function() {
            F.markNotesAsRead(o)
          }, 200),
          i ? (Q.note_to_focus = null ,
          $("current_notes").scrollTop = i.offsetTop - 120,
          $fx.highlight($gc(i, "span", "note_content")),
          $addClass(i, "note_added")) : d && Q.focusLatest(d)
        }
      },
      addNote: function(e, t, n) {
        if (t == O.TYPE_ITEM_NOTE && !Q.isPremium(e.project_id) || t == O.TYPE_PROJECT_NOTE && !Q.isPremium(e.id))
          return Q.showPromo(),
          !1;
        var r = $child(n, "textarea")
          , o = $strip(r.value)
          , i = s.getFiles(Q.files_view);
        if (0 === o.length && 0 === i.length)
          return !1;
        var c = null ;
        Q.current_project && U.isProjectShared(Q.current_project.id) && (c = q.getUidsToNotify());
        var d = Y.addNotes(e.id, t, r.value, c, i);
        r.value = "",
        I() ? r.blur() : r.focus(),
        Q.files_view && s.resetView(Q.files_view),
        a.reset(),
        r.resize_textarea && r.resize_textarea(),
        Q.clearEmpty();
        var l;
        return $map(d, function(e) {
          l = Q.renderNote(e),
          $addClass(l, "note_added"),
          $add($("current_notes"), l)
        }),
        Q.focusLatest(l),
        Q.updateCount(),
        !1
      },
      deleteNote: function(e, t) {
        p.confirm(_("Are you sure you want to delete this?"), function(n) {
          n && (O.deleteNote(e.id),
          $remove(t),
          Q.updateCount())
        })
      },
      updateCount: function() {
        var e = Q.current_task ? O.TYPE_ITEM_NOTE : O.TYPE_PROJECT_NOTE
          , t = Q.current_task ? Q.current_task : Q.current_project
          , n = $$('[data-note-type="' + e + '"][data-note-parent-id="' + t.id + '"]');
        n.length > 0 && $map(n, function(n) {
          $swap(n, W.renderIcon(t, e))
        })
      },
      getDimension: function() {
        var e = $winSize()
          , t = 600
          , n = 560
          , r = Math.min(e.w - 100, t)
          , o = Math.min(e.h - 30, n);
        return {
          width: r,
          height: o
        }
      },
      resolveDate: function(e, t) {
        return e[t] ? void (e.ntime ? e[t] = new Date(e.ntime) : $isString(e[t]) ? e[t] = new Date(e[t]) : e.ntime = e[t].getTime()) : null
      },
      attachNoteKeyboardShortcuts: function(e) {
        e.note_keys_attached || ($AEV(e, "keydown", function(t) {
          var n = $parent(e, "form")
            , r = $child(n, "a", "amibutton_red");
          if (r && setTimeout(function() {
            b.focus(r)
          }, 5),
          t.ctrl && 13 == t.keyAscii)
            return n.submit_fn(),
            $preventDefault(t),
            !1
        }),
        e.note_keys_attached = !0)
      },
      externalServicesAnnotation: function(e) {
        var t = Q.attach_button;
        if (e && t) {
          var n = e.annotate_fn;
          e.is_email ? t.tooltip_text = _("Attach email to comment") : t.tooltip_text = _("Attach website to comment"),
          t.onclick = function() {
            var e = new c
              , r = new TEXTAREA;
            n(r);
            var o, i = r.value, s = M.onContentSave(i), a = M.type;
            if ("gmail_new" == a)
              o = "td/gmail";
            else if ("outlook" == a)
              o = "td/outlook";
            else if ("thunderbird" == a)
              o = "td/thunderbird";
            else {
              o = "td/hyperlink";
              var l = window.PluginVersion.getTitleAndUrl();
              i = l[0],
              s = l[1]
            }
            e.setUploadContent({
              file_url: s,
              file_name: i,
              file_type: o
            });
            var u = new d(e);
            return $add(Q.files_view, u.render()),
            g.hide(),
            $hide(t),
            setTimeout(function() {
              $show(t)
            }, 20),
            M.onContollerHide(),
            !1
          }
          ,
          $show(t)
        } else
          $hide(t)
      },
      getProject: function(e) {
        var t = H.get(e);
        if (t)
          return t;
        var n = Q.temp_project;
        return n && n.id == e ? n : void 0
      },
      renderProjectLink: function(e) {
        var t = N.format(e.name, {
          as_html: !0
        })
          , n = $setHTML(A({
          href: "#project/" + e.id
        }), t);
        return $AEV(n, "click", function() {
          var t = null ;
          return Q.current_task && (t = Q.current_task.id),
          l(),
          h() && l(),
          E.setCurrentById(e.id, t),
          !1
        }),
        n
      }
    };
    window.Notes = Q,
    t.exports = Q
  }
  , {
    "../../mini/.coffee.ContentTransformers.js": 140,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ModelUndo.js": 156,
    "../../models/.coffee.NotesModel.js": 157,
    "../../models/.coffee.NotificationsModel.js": 158,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.TemporaryIds.js": 170,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../avatars/.coffee.Avatars.js": 21,
    "../formatter/Formatter.js": 38,
    "../items_utils/.coffee.ItemCheckbox.js": 45,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90,
    "../resizing_text_area/ResizingTextArea.js": 102,
    "./.coffee.NoteMedia.js": 66,
    "./.coffee.NotesBuffer.js": 68,
    "./.coffee.NotesUtils.js": 69,
    "./.coffee.WhoToNotify.js": 70
  }],
  72: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    , T = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
          return t;
      return -1
    }
    ;
    w = window.Signals,
    r = window.AmiTooltip,
    a = window.ForcedScroll,
    l = window.Indicator,
    j = window.TooptipWin,
    c = window.GB_hide,
    s = window.DoistFormat,
    b = window.format,
    S = window.track,
    I = window.imageSprite,
    o = e("../avatars/.coffee.Avatars.js"),
    f = e("../notes/Notes.js"),
    g = e("../project_list/.coffee.ProjectListUtils.js"),
    h = e("../karma_promotion/.coffee.KarmaPromotion.js"),
    v = e("../themes/.coffee.Themes.js"),
    m = e("../../models/.coffee.NotificationsModel.js"),
    i = e("../../models/.coffee.Collaborators.js"),
    y = e("../../models/.coffee.ProjectsModel.js"),
    u = e("../../models/.coffee.ItemsModel.js"),
    _("<b>%s</b>, <b>%s</b> and <b>%s</b>"),
    _("%s added a project comment to <b>%s</b>."),
    _("%s added %d project comments to <b>%s</b>."),
    _("You declined %s's invitation to %s."),
    _("%s joined %s."),
    _("%s rejected your invitation to %s."),
    _("%s left %s."),
    _("%s invited you to the %s account."),
    _("You joined the %s account."),
    _("You rejected %s's invitation to the %s account."),
    _("%s joined the %s account."),
    _("%s rejected your invitation to the %s account."),
    _("Your Business account permission settings don't allow you to share projects outside of your team. Add %s to your team or change the permission settings."),
    _("Permission settings don\u2019t allow you to join this project. Ask %s to add you to their team or change the permission settings."),
    _("Your Business trial will end in 3 days. At that time, we will process your first payment to ensure uninterrupted service."),
    _("This is a reminder that your Business trial will end in a few days. Update your credit card information to keep using our service."),
    _("Your payment failed. Review and update your credit card information to continue using TD Business."),
    _("Your account was disabled. Upgrade now to continue using your TD Business account."),
    p = function() {
      function e(e, t) {
        null == t && (t = !0),
        this.render = C(this.render, this),
        this.onlyText = C(this.onlyText, this),
        this.createCollapseNoteItem = C(this.createCollapseNoteItem, this),
        this.createCollapseTaskItem = C(this.createCollapseTaskItem, this),
        this.hideIndicator = C(this.hideIndicator, this),
        this.showIndicator = C(this.showIndicator, this),
        this.notification_type = e.notification_type,
        this.notifications = [e],
        this.is_unread = t
      }
      return e.prototype.push = function(e) {
        if (e.notification_type !== this.notification_type)
          throw new Error("Programming error: Cannot push notification of different type");
        return this.notifications.push(e),
        this.notifications.sort(function(e, t) {
          return t.seq_no - e.seq_no
        })
      }
      ,
      e.prototype.sortKey = function() {
        return this.notifications[0].seq_no
      }
      ,
      e.prototype.isAggregated = function() {
        return this.notifications.length > 1
      }
      ,
      e.prototype.count = function() {
        return this.notifications.length
      }
      ,
      e.prototype.timeString = function() {
        var e, t, n, r, o, i;
        return o = this.notifications[0].created,
        i = Date.now() / 1e3,
        r = Math.ceil(i - o),
        n = Math.floor(r / 60),
        t = Math.floor(n / 60),
        e = Math.floor(t / 24),
        e > 1 ? b(_("%d days ago"), e) : 1 === e ? b(_("%d day ago"), e) : t > 1 ? b(_("%d hours ago"), t) : 1 === t ? b(_("%d hour ago"), t) : n > 1 ? b(_("%d minutes ago"), n) : 1 === n ? b(_("%d minute ago"), n) : _("now")
      }
      ,
      e.prototype.allUsers = function() {
        var e, t, n, r, o, s, a, c;
        for (t = [],
        e = [],
        a = this.notifications,
        o = 0,
        s = a.length; o < s; o++)
          n = a[o],
          r = i.getUserById(n.from_uid),
          r || (r = n.from_user),
          r && (c = r.id,
          T.call(e, c) < 0) && (t.push(r),
          e.push(r.id));
        return t
      }
      ,
      e.prototype.hasMultipleUsers = function() {
        return this.allUsers().length > 1
      }
      ,
      e.prototype.subject = function() {
        var e;
        return e = this.allUsers(),
        1 === e.length ? "<b>" + $xssStrip(e[0].full_name) + "</b>" : 2 === e.length ? b(_("<b>%s</b> and <b>%s</b>"), $xssStrip(e[0].full_name), $xssStrip(e[1].full_name)) : 3 === e.length ? b(_("<b>%s</b>, <b>%s</b> and <b>%d</b> other"), $xssStrip(e[0].full_name), $xssStrip(e[1].full_name), e.length - 2) : e.length >= 4 ? b(_("<b>%s</b>, <b>%s</b> and <b>%d</b> others"), $xssStrip(e[0].full_name), $xssStrip(e[1].full_name), e.length - 2) : "X"
      }
      ,
      e.prototype.genericAccept = function(e, t, n, o, i) {
        var s, a, c, d;
        return d = $setHTML(SPAN(), t),
        a = DIV({
          c: "actions"
        }, s = A({
          href: "#",
          c: "accept"
        }, _("Accept")), c = A({
          href: "#",
          c: "reject"
        }, I("cmp_trash_small", 12, 12))),
        $AEV(s, "click", function(t) {
          return function() {
            var r, o;
            return t.showIndicator(a),
            r = function() {
              return i()
            }
            ,
            o = function(e) {
              return alert(e),
              t.hideIndicator(a)
            }
            ,
            n(e, r, o),
            !1
          }
        }(this)),
        $AEV(c, "click", function(t) {
          return function() {
            var n, i;
            return r.hide(),
            t.showIndicator(a),
            n = function() {
              return $remove($parent(a, "li"))
            }
            ,
            i = function(e) {
              return alert(e),
              t.hideIndicator(a)
            }
            ,
            o(e, n, i),
            !1
          }
        }(this)),
        r.showSimpleText(c, _("Reject")),
        [d, a]
      }
      ,
      e.prototype.showIndicator = function(e) {
        return $hide($all("a", null , e)),
        l.addToElm(e)
      }
      ,
      e.prototype.hideIndicator = function(e) {
        return l.removeFromElm(e),
        $show($all("a", null , e))
      }
      ,
      e.prototype.createCollapseTaskItem = function(e) {
        var t;
        return t = DIV({
          c: "collapsed_list_item"
        }, this.onlyText(e.item_content)),
        $AEV(t, "click", function(t) {
          return f.showItemNotes(e.item_id),
          t.stopPropagation(),
          !1
        }),
        t
      }
      ,
      e.prototype.createCollapseNoteItem = function(e) {
        var t, n, r, o;
        return o = i.getUserById(e.from_uid),
        this.hasMultipleUsers() && o && o.full_name ? (r = $strip(o.full_name).split(" "),
        n = $setHTML(DIV({
          c: "collapsed_list_item"
        }), "<b>" + r[0] + ":</b> " + this.onlyText(e.note_content))) : n = $setHTML(DIV({
          c: "collapsed_list_item"
        }), "" + this.onlyText(e.note_content)),
        t = null === e.item_id,
        $AEV(n, "click", function(n) {
          return t ? f.showProjectNotes(e.project_id, e.note_id) : f.showItemNotes(e.item_id, e.note_id),
          n.stopPropagation(),
          !1
        }),
        n
      }
      ,
      e.prototype.onlyText = function(e) {
        return s.formatSimple(e, {
          only_text: !0,
          as_html: !1,
          cache_prefix: "noti:"
        })
      }
      ,
      e.prototype.render = function(e) {
        var t, n, r, s, a, d, l, u, p, w, v, j, I, $, A, S, C, T, k, D, E, x, P, M, N, L, R, U, O, V, B, H, F, G, q, z, Y, W, Q, K, J, X;
        if (null == e && (e = !1),
        M = this.notifications[0],
        F = i.getUserById(M.from_uid),
        N = M.notification_type,
        F || (F = M.from_user),
        !F)
          if (N.indexOf("biz_") !== -1)
            F = {};
          else {
            if (N.indexOf("karma_") === -1)
              return;
            F = {}
          }
        if (r = F.full_name ? o.renderAvatar(F, "medium") : null ,
        n = null ,
        p = null ,
        v = null ,
        w = null ,
        u = !1,
        l = !1,
        d = !1,
        A = !1,
        e === !1 && (E = LI(),
        E.id = "noti_" + M.notification_key,
        this.isAggregated() && $addClass(E, "collasible_box")),
        L = M.project_name,
        G = F.full_name,
        G = "<b>" + $xssStrip(G) + "</b>",
        L = "<b>" + $xssStrip(L) + "</b>",
        O = null ,
        V = "",
        s = null ,
        C = null ,
        H = null ,
        "note_added" === N) {
          if (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_comment type_icon"
          }),
          O = this.isAggregated() ? b(_("%s added %d comments to <b>%s</b>"), this.subject(), this.count(), this.onlyText(M.item_content)) : b(_("%s added a comment to <b>%s</b>"), this.subject(), this.onlyText(M.item_content)),
          M.note_content && (s = M.note_content),
          null !== this.notifications[0].item_id ? v = !0 : w = !0,
          e === !1)
            if (this.isAggregated()) {
              for (A = !0,
              V = $setHTML(DIV(), O),
              $ = DIV({
                c: "collapsed_list"
              }),
              Q = this.notifications,
              q = 0,
              Y = Q.length; q < Y; q++)
                P = Q[q],
                x = this.createCollapseNoteItem(P),
                $add($, x);
              $add(V, $)
            } else
              V = $setHTML(SPAN(), O + "<br>"),
              M.note_content && $add(V, SPAN({
                c: "desc"
              }, '"' + this.onlyText(M.note_content) + '"'))
        } else if (N.indexOf("item_") !== -1) {
          if (j = null ,
          "item_assigned" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_assigned type_icon"
          }),
          this.isAggregated() ? (p = M.project_id,
          O = b(_("%s assigned %d tasks"), this.subject(), this.count())) : (v = !0,
          O = b(_("%s assigned a task"), this.subject()))) : "item_completed" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_completed type_icon"
          }),
          this.isAggregated() ? (p = M.project_id,
          O = b(_("%s completed %d tasks"), this.subject(), this.count())) : (v = !0,
          O = b(_("%s completed a task"), this.subject(), this.count())),
          j = "completed") : "item_uncompleted" === N && (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_uncompleted type_icon"
          }),
          this.isAggregated() ? (p = M.project_id,
          O = b(_("%s uncompleted %d tasks"), this.subject(), this.count())) : (v = !0,
          O = b(_("%s uncompleted a task"), this.subject(), this.count()))),
          L = y.get(M.project_id),
          L && (O += b(" in <b>%s</b>", L.name)),
          M.item_content && (s = M.item_content),
          e === !1)
            if (this.isAggregated()) {
              for (A = !0,
              V = $setHTML(DIV(), O),
              $ = DIV({
                c: "collapsed_list"
              }),
              K = this.notifications,
              z = 0,
              W = K.length; z < W; z++)
                P = K[z],
                x = this.createCollapseTaskItem(P),
                j && $addClass(x, j),
                $add($, x);
              $add(V, $)
            } else
              V = $setHTML(SPAN(), O),
              M.item_content && ($add(V, BR(), S = DIV({
                c: "desc"
              }, this.onlyText(M.item_content))),
              j && $addClass(S, j))
        } else
          "share_invitation_sent" === N ? "accepted" === M.state ? (r = o.renderAvatar(window.User, "medium"),
          O = b(_("You joined %s"), L),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "rejected" === M.state ? (r = o.renderAvatar(window.User, "medium"),
          O = b(_("You declined invitation to %s"), L),
          p = null ,
          e === !1 && (V = $setHTML(SPAN(), O))) : (O = b(_("%s invited you to %s"), G, L),
          e === !1 && (B = function(e) {
            var t;
            return t = b(_("Start collaborating on %s"), L),
            $swap(E, E = LI({
              c: "accepted"
            }, _("Invitation accepted!"), BR(), $setHTML(SPAN(), t))),
            $AEV(E, "click", function() {
              var t, n, r, o;
              for (c(),
              t = null ,
              o = y.getAll(),
              n = 0,
              r = o.length; n < r; n++)
                if (L = o[n],
                L.name === e.project_name) {
                  t = L.id;
                  break
                }
              return t && g.setCurrentById(t),
              !1
            })
          }
          ,
          J = this.genericAccept(M, O, m.acceptInvitation, m.rejectInvitation, B),
          V = J[0],
          n = J[1])) : "share_invitation_accepted" === N ? (O = b(_("%s joined project %s"), this.subject(), L),
          H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_added type_icon"
          }),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "share_invitation_rejected" === N ? (O = b(_("%s rejected your invitation to project %s"), G, L),
          H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_removed type_icon"
          }),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "user_left_project" === N ? (O = b(_("%s left project %s."), this.subject(), L),
          H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_removed type_icon"
          }),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "user_removed_from_project" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_removed type_icon"
          }),
          M.removed_uid === window.User.id ? O = b(_("%s removed you from %s."), G, L) : (U = i.getUserById(M.removed_uid) || {},
          R = U.full_name || "",
          R = R.split(" ")[0],
          O = b(_("%s removed %s from %s."), G, R, L)),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "owner_left_project" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_removed type_icon"
          }),
          O = b(_("%s (owner) left project %s"), G, L),
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "karma_level" === N ? (k = M.karma_level,
          O = V = function() {
            switch (k) {
            case 1:
              return _("Your journey towards higher productivity begins today! You're now a Todoist Karma Novice.");
            case 2:
              return _("Congrats! Reaching 2,500 points makes you a Todoist Karma Intermediate.");
            case 3:
              return _("You're a Pro! High five on reaching the Professional level of Todoist Karma!");
            case 4:
              return _("Pat yourself on the back\u2013 you're now an impressive Todoist Karma Expert!");
            case 5:
              return _("Outstanding work! Achieving 10,000 points makes you a Todoist Karma Master.");
            case 6:
              return _("One more level to go! You're now a revered Todoist Karma Grandmaster!");
            case 7:
              return _("You did it! With over 50,000 points you've reached the top\u2013 Todoist Karma Enlightenment!")
            }
          }(),
          d = !0,
          e === !1 && (T = h.getIcon(k),
          r = SPAN({
            c: "karma-icon " + T
          }))) : "biz_invitation_created" === N ? "invited" === M.state ? (B = function() {
            return $swap(E, E = LI({
              c: "accepted"
            }, _("Invitation accepted!")))
          }
          ,
          O = b(_("%s invited you to %s"), G, M.account_name),
          O = _("TD Business") + ": " + O,
          e === !1 && (X = this.genericAccept(M, O, m.acceptInvitationBiz, m.rejectInvitationBiz, B),
          V = X[0],
          n = X[1])) : "accepted" === M.state ? (r = null ,
          O = b(_("You joined %s"), M.account_name),
          O = _("TD Business") + ": " + O,
          e === !1 && (V = $setHTML(SPAN(), O))) : (r = null ,
          O = b(_("You rejected invitation to %s"), M.account_name),
          O = _("TD Business") + ": " + O,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_invitation_accepted" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_added type_icon"
          }),
          O = b(_("%s joined %s"), G, M.account_name),
          O = _("TD Business") + ": " + O,
          u = !0,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_invitation_rejected" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_user_removed type_icon"
          }),
          O = b(_("%s rejected your invitation to %s"), G, M.account_name),
          O = _("TD Business") + ": " + O,
          u = !0,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_policy_disallowed_invitation" === N ? (O = b(_("Team's permission settings don't allow you to share projects outside of your team. Add %s to your team or change the permission settings"), G),
          O = _("TD Business") + ": " + O,
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_policy_rejected_invitation" === N ? (O = b(_("Team's permission don't allow user to join projects outside of their team. Ask %s to add yourself to their team or to change the permission settings"), G),
          O = _("TD Business") + ": " + O,
          p = M.project_id,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_trial_will_end" === N ? (O = _("This is a reminder that your trial will end in a few days. At that time, we will process your first payment to ensure uninterrupted service."),
          O = _("TD Business") + ": " + O,
          l = !0,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_trial_enter_cc" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_payment type_icon"
          }),
          O = _("This is a reminder that your trial will end in a few days. Update your credit card information to keep using our service."),
          O = _("TD Business") + ": " + O,
          l = !0,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_payment_failed" === N ? (H = IMG({
            src: "/static/blank.gif",
            width: "15",
            height: "15",
            c: "cmp_notification_payment type_icon"
          }),
          O = _("We failed to charge you. Please review and update your credit card information to avoid any disruption in service."),
          O = _("TD Business") + ": " + O,
          l = !0,
          e === !1 && (V = $setHTML(SPAN(), O))) : "biz_account_disabled" === N && (O = _("Your business account was disabled. Upgrade now to continue using account."),
          O = _("TD Business") + ": " + O,
          l = !0,
          e === !1 && (V = $setHTML(SPAN(), O)));
        return a = null ,
        t = null ,
        p ? (a = function() {
          return c(),
          g.setCurrentById(p),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_project",
          project_id: p,
          put_in_focus: !0
        }) : w ? (D = this.notifications[0].note_id,
        a = function() {
          return f.showProjectNotes(M.project_id, D),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_project_note",
          project_id: M.project_id,
          note_id: D,
          put_in_focus: !0
        }) : v ? (a = function() {
          return f.showItemNotes(M.item_id, M.note_id),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_task",
          item_id: M.item_id,
          note_id: M.note_id,
          put_in_focus: !0
        }) : u ? (a = function() {
          return window.open("/business/users"),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_business_users"
        }) : l ? (a = function() {
          return window.open("/business/accountAndBilling"),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_business_billing"
        }) : d && (a = function() {
          return h.show(M, k, T),
          !1
        }
        ,
        t = {
          text: _("View"),
          action: "view_karma"
        }),
        e ? [F, O, s, a, t] : ($add(E, DIV({
          c: "left_container"
        }, DIV({
          c: "avatar_holder"
        }, r, H), DIV({
          c: "text_holder"
        }, V, n, DIV({
          c: "time_holder"
        }, this.timeString())))),
        A ? (I = DIV({
          c: "collapse_icon_wrap right_container"
        }, IMG({
          src: "/static/blank.gif",
          width: "10",
          height: "10",
          c: "collapse_icon cmp_open_arrow_left"
        })),
        $AEV(I, "click", function(e) {
          return $hasClass(E, "is_uncollapsed") ? $removeClass(E, "is_uncollapsed") : $addClass(E, "is_uncollapsed"),
          e.stopPropagation(),
          !1
        }),
        $add(E, I)) : $add(E, DIV({
          c: "right_container"
        })),
        a && $AEV(E, "click", a),
        n && $addClass(E, "has_actions"),
        C && $addClass(E, C),
        this.is_unread && $addClass(E, "unread"),
        E)
      }
      ,
      e
    }(),
    d = function() {
      function e() {
        this.renderNotification = C(this.renderNotification, this),
        this.renderNotifications = C(this.renderNotifications, this),
        this.aggregated = C(this.aggregated, this),
        this.fetchData = C(this.fetchData, this),
        this.showDropdown = C(this.showDropdown, this),
        this.updateIcon = C(this.updateIcon, this),
        this._renderImageCount = C(this._renderImageCount, this),
        w.connect("notifications_updated", function(e) {
          return function() {
            return e.updateIcon(m.getUnreadCount())
          }
        }(this)),
        w.connect("theme_changed", function(e) {
          return function() {
            return e.updateIcon(m.getUnreadCount())
          }
        }(this)),
        w.connect("noti_updated", function(e) {
          var t;
          if (e.is_read && (t = $("noti_" + e.notification_key),
          t && $hasClass(t, "unread")))
            return $removeClass(t, "unread")
        })
      }
      return e.prototype.renderIcon = function() {
        var e, t;
        return t = this._renderImageCount(null ),
        e = SPAN({
          id: "notifications_counter"
        }, t),
        $AEV(e, "click", function(t) {
          return function() {
            return t.updateIcon(0),
            t.showDropdown(e)
          }
        }(this)),
        e
      }
      ,
      e.prototype._renderImageCount = function(e) {
        var t, n, r, o;
        return o = null ,
        t = v.getNotificationsIcon(),
        e && e > 0 && (o = SPAN({
          c: "unread"
        })),
        n = I(t, 22, 17),
        r = SPAN({
          c: "fixed_pos"
        }, o, n)
      }
      ,
      e.prototype.updateIcon = function(e) {
        var t;
        return t = $("notifications_counter"),
        !t || this.cur_window ? this.timeout = setTimeout(function(t) {
          return function() {
            return t.timeout = null ,
            t.updateIcon(e)
          }
        }(this), 500) : $replace(t, this._renderImageCount(e))
      }
      ,
      e.prototype.showDropdown = function(e) {
        var t, n;
        return n = {
          no_side_padding: !0,
          fn_left_offset: function() {
            var t;
            return t = $position(e).x,
            window.FLUID_MINI ? t - 250 : t - 210
          },
          fn_top_offset: function() {
            return window.FLUID_MINI ? 38 : 42
          },
          fn_arrow_left: function() {
            var t;
            return t = $position(e).x,
            window.FLUID_MINI ? t + 6 : t + 9
          },
          fn_on_hide: function(e) {
            return function() {
              return e.cur_window = null ,
              a.removeListener()
            }
          }(this),
          fixed_pos: !0
        },
        t = DIV({
          id: "notifications_holder"
        }, DIV({
          c: "indicator"
        }, l.imgMedium())),
        a.attachListener(t, "notifications"),
        this.cur_window = j.show(_("Notifications"), t, 200, 350, n),
        this.fetchData(t, null , !0),
        S("Notifications", "Show")
      }
      ,
      e.prototype.fetchData = function(e) {
        var t, n;
        return t = m.getNotifications(),
        0 === t.length ? $replace(e, CENTER(DIV({
          c: "empty"
        }, _("Notifications will be displayed here whenever something happens in one of your shared projects.")))) : (this.renderNotifications(e, t),
        (n = $first(t)) ? m.markAsRead(n) : void 0)
      }
      ,
      e.prototype.aggregated = function(e, t) {
        "Aggregate a list of notifications into a list of NotificationBox.";
        var n, r, o, i, s, a, c, d, l, u, h, f, _;
        for (c = {},
        l = 14400,
        u = 0,
        h = e.length; u < h; u++)
          a = e[u],
          d = Math.floor(a.created / l),
          "item_completed" === (f = a.notification_type) || "item_uncompleted" === f || "item_assigned" === f ? o = "" + a.notification_type + ":" + a.project_id + ":" + a.from_uid + ":" + d : "share_invitation_accepted" === (_ = a.notification_type) || "user_left_project" === _ ? o = "" + a.notification_type + ":" + a.project_id + ":" + d : "note_added" === a.notification_type ? (i = null === a.item_id,
          o = i ? "project_note_added:" + a.project_id + ":" + d : "item_note_added:" + a.item_id + ":" + d) : o = a.seq_no,
          void 0 === c[o] ? c[o] = new p(a,t) : c[o].push(a);
        r = [];
        for (s in c)
          n = c[s],
          r.push(n);
        return r.sort(function(e, t) {
          return t.sortKey() - e.sortKey()
        }),
        r
      }
      ,
      e.prototype.renderNotifications = function(e, t) {
        var n, r, o, i, s, a, c, d, l;
        for ($remove($all("div", "indicator", e)),
        $("more_button_noti") && $remove($("more_button_noti")),
        r = m.getLastRead(),
        c = function() {
          var e, n, i;
          for (i = [],
          e = 0,
          n = t.length; e < n; e++)
            o = t[e],
            o.id > r && i.push(o);
          return i
        }(),
        s = function() {
          var e, n, i;
          for (i = [],
          e = 0,
          n = t.length; e < n; e++)
            o = t[e],
            o.id <= r && i.push(o);
          return i
        }(),
        c = this.aggregated(c, !0),
        s = this.aggregated(s, !1),
        a = c.concat(s),
        i = UL(),
        d = 0,
        l = a.length; d < l; d++)
          n = a[d],
          $add(i, n.render(!1));
        return $add(e, i)
      }
      ,
      e.prototype.renderNotification = function(e, t) {
        "use for LocalNotification";
        var n;
        return n = e.id > t,
        new p(e,n).render(!0)
      }
      ,
      e
    }(),
    t.exports = new d
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.NotificationsModel.js": 158,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../avatars/.coffee.Avatars.js": 21,
    "../karma_promotion/.coffee.KarmaPromotion.js": 51,
    "../notes/Notes.js": 71,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "../themes/.coffee.Themes.js": 113
  }],
  73: [function(e, t, n) {
    var r = window.Signals
      , o = e("../../models/.coffee.ModelUndo.js")
      , i = {
      shown: !1,
      sticky: !1,
      div_top: null ,
      div_notifier: null ,
      hide_link: A({
        href: "#",
        c: "hide_link",
        s: "float: right"
      }, _("Hide")),
      init: function() {
        $AEV(window, "resize", this.position),
        $AEV(window, "scroll", this.position),
        r.connect("action_performed", this.hideUnlessSticky),
        this.hide_link.onclick = i.hide,
        this.div_notifier = $("notifier"),
        $AEV(this.div_notifier, "mouseover", function() {
          i.hideTimeout && (clearTimeout(i.hideTimeout),
          i.hideTimeout = null )
        }),
        this.div_top = $("top"),
        this.hide(),
        this.position(),
        $addToTop(this.div_notifier, this.hide_link)
      },
      position: function() {
        var e = $("notifier");
        if (e) {
          var t = $winSize()
            , n = (t.w - e.offsetWidth) / 2;
          $setLeft(e, n)
        }
      },
      hide: function() {
        return $hide($("notifier")),
        i.shown = !1,
        o.clear(),
        !1
      },
      hideUnlessSticky: function() {
        return i.sticky || i.hide(),
        !1
      },
      show: function(e, t) {
        $isString(e) ? $setHTML(this.div_notifier, e) : $replace(this.div_notifier, e),
        t !== !0 && (t = !1),
        this.sticky = t,
        $setOpacity(this.div_notifier, 0),
        $show(this.div_notifier),
        this.position(),
        $setOpacity(this.div_notifier, 1),
        this.position(),
        i.shown = !0,
        t && (i.hideTimeout && clearTimeout(i.hideTimeout),
        i.hideTimeout = setTimeout(i.hide, 12e3))
      }
    };
    t.exports = i
  }
  , {
    "../../models/.coffee.ModelUndo.js": 156
  }],
  74: [function(e, t, n) {
    var r = window.GB_show
      , o = {
      init: function() {
        $AEV(window, "message", function(e) {
          e && e.data && e.data.indexOf("show_premium") != -1 && o.showPrefs("premium")
        })
      },
      showKeyboardShortcuts: function() {
        return window.open("/Help/KeyboardShortcuts"),
        !1
      },
      showPrefs: function(e, t) {
        if (e || (e = "general"),
        $isString(t) || (t = _("Todoist Settings")),
        "premium" == e)
          return window.FLUID_MINI ? window.open("https://" + window.location.host + "/premium") : top.location = "https://" + window.location.host + "/premium",
          !1;
        var n = "/Users/viewPrefs";
        return n += "?page=" + e,
        r(t, n, 550, 750)
      },
      showKarmaInfo: function() {
        var e = 500;
        return window.FLUID_MINI && (e = 390),
        r(_("More about Todoist Karma"), "/Karma/showInfo", 550, e)
      }
    };
    t.exports = o
  }
  , {}],
  75: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.AmiTooltip,
    r = window.AmiCompleteSelect,
    a = window.GB_hide,
    u = window.Signals,
    h = window.imageSprite,
    s = e("../../models/.coffee.Collaborators.js"),
    d = e("../notes/.coffee.NotesUtils.js"),
    i = e("../avatars/.coffee.Avatars.js"),
    c = e("../richtext_editor/.coffee.NatrualLanguageParsing.js"),
    l = function() {
      function e(e) {
        this.showTooltip = f(this.showTooltip, this),
        this.onProjectUpdated = f(this.onProjectUpdated, this),
        this.isShown = f(this.isShown, this),
        this.render = f(this.render, this),
        this.opts = e,
        e.responsible_uid && (this.responsible_uid = e.responsible_uid),
        e.orginal_project_id || (e.orginal_project_id = e.project_id),
        e.left_offset || (e.left_offset = 205)
      }
      return e.prototype.render = function() {
        var e, t, n, r, a;
        return this.opts.unassigned_icon_disable ? this.avatar = SPAN({
          c: "blank_avatar"
        }) : this.avatar = h("cmp_share_person form_action_icon menu_icon", 22, 20),
        n = this.opts.tooltip_txt || _("Assign to person"),
        this.responsible_uid ? (a = this.responsible_uid === window.User.id ? window.User : s.getUserById(this.responsible_uid),
        a && (this.avatar = i.renderAvatar(a, "small"),
        r = this.opts.tooltip_txt_selected || _("Assigned to"),
        n = r + " " + d.shortName(a),
        t = a.id === window.User.id ? _("Me") + " (" + a.full_name.split(" ")[0] + ")" : a.full_name)) : t = this.opts.unassigned_txt || _("Unassigned"),
        $addClass(this.avatar, "assign_icon"),
        null != this.opts.show_name ? (this.icon = h("cmp_arrow_down", 7, 4),
        this.user_select = A({
          href: "#",
          c: "user_select_item"
        }, this.avatar, SPAN({
          c: "truncated u_name"
        }, t), this.icon)) : (this.icon = this.avatar,
        this.user_select = this.avatar),
        o.showSimpleText(this.user_select, n),
        e = function(e) {
          return function() {
            return $addClass(e.user_select, "always_show"),
            e.showTooltip(),
            !1
          }
        }(this),
        $AEV(this.user_select, "click", e),
        this.opts.never_hide || s.isProjectShared(this.opts.project_id) || $hide(this.user_select),
        this.user_select
      }
      ,
      e.prototype.isShown = function() {
        return $isShown(this.icon)
      }
      ,
      e.prototype.onProjectUpdated = function(e) {
        return this.opts.project_id === e,
        this.responsible_uid = void 0,
        e ? this.opts.project_id = e : this.opts.project_id = this.opts.orginal_project_id,
        $swap(this.icon, this.render())
      }
      ,
      e.prototype.showTooltip = function() {
        var e, t, n;
        return t = {
          collection: function(e) {
            return function() {
              var t, n, r, o, i, a, c, d, l, u, h;
              for (a = [],
              e.opts.support_unassigned !== !1 && (o = {
                name: e.opts.unassigned_txt || _("Unassigned"),
                id: null ,
                email: ""
              },
              o.full_name = o.name,
              a.push(o)),
              n = $isArray(e.opts.project_id) ? e.opts.project_id : [e.opts.project_id],
              c = 0,
              l = n.length; c < l; c++)
                for (t = n[c],
                h = s.getAll(t),
                d = 0,
                u = h.length; d < u; d++)
                  i = h[d],
                  r = {},
                  $update(r, i),
                  $index(i, a, function(e) {
                    return e.id === i.id
                  }) === -1 && (r.id === window.User.id ? r.name = _("Me") + " (" + i.full_name.split(" ")[0] + ")" : r.name = i.full_name,
                  a.push(r));
              return a
            }
          }(this),
          filterItem: function(e) {
            return function(t, n) {
              var r;
              return null === (null != t ? t.id : void 0) ? (e.opts.unassigned_icon_disable ? e.avatar = SPAN({
                c: "blank_avatar"
              }) : e.avatar = h("cmp_share_person user_avatar", 16, 16),
              r = SPAN({
                c: "name_email"
              }, t.full_name)) : (r = $setHTML(SPAN({
                c: "name_email truncated"
              }), n),
              e.avatar = i.renderAvatar(t, "small")),
              DIV({
                c: "amicomplete_entry"
              }, e.avatar, r)
            }
          }(this),
          onSelect: function(e) {
            return function(t) {
              var n, r;
              return e.responsible_uid = t.id,
              e.responsible_uid = null != t ? t.id : void 0,
              $isFunction(e.opts.fn_on_select) && e.opts.fn_on_select(t.id),
              $swap(e.user_select, e.render()),
              a(),
              e.opts.onExitFocus ? e.opts.onExitFocus() : (n = $parent(e.user_select, "form")) ? (c.setCurrentPerson(null ),
              r = $gc(n, null , "richtext_editor"),
              r.onchanged(),
              r.proxyFocus(!0)) : void 0
            }
          }(this),
          wildcard_match: !0,
          placeholder: this.opts.placeholder_txt || ""
        },
        e = new r(t),
        n = e.showTooltip({
          title: this.opts.title_txt || _("Assign a person"),
          icon: this.icon,
          top_offset: 25,
          left_offset: this.opts.left_offset,
          fn_on_hide: function() {
            return e = null
          }
        }),
        $addClass(n.g_window, "person_selecter")
      }
      ,
      e
    }(),
    t.exports = l
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../avatars/.coffee.Avatars.js": 21,
    "../notes/.coffee.NotesUtils.js": 69,
    "../richtext_editor/.coffee.NatrualLanguageParsing.js": 103
  }],
  76: [function(e, t, n) {
    var r = e("../richtext_editor/.coffee.NatrualLanguageParsing.js")
      , o = e("../project_editor/.coffee.ProjectEditorManager.js")
      , i = e("../notes/.coffee.NotesUtils.js")
      , s = e("../avatars/.coffee.Avatars.js")
      , a = e("../../models/.coffee.Collaborators.js")
      , c = {
      annotateFormArea: function(e) {
        AmiComplete.attach(e, {
          trigger: "+",
          collection: function() {
            return c.getCompletionPeople()
          },
          filterItem: function(e, t) {
            if (!e)
              return null ;
            var n = s.renderAvatar(e, "small")
              , r = DIV(SPAN(n, " ", e.name));
            return r
          },
          onNoMatches: function() {
            return AmiComplete.hide(),
            !1
          },
          position_item: $parent(e, "td", "text_box_holder"),
          extra_width: 1,
          support_paste: !1,
          wildcard_match: !0,
          preOnSelect: function(e) {
            var t = e.completion_item;
            r.setCurrentPerson(t.id, "+" + t.name)
          }
        }),
        $AEV(e, "keydown", function(e) {
          if ((13 == e.keyAscii && !e.shift || 27 == e.keyAscii) && AmiComplete.shown())
            return !1
        })
      },
      getCompletionProjectId: function() {
        var e, t = r.highlight_project;
        if (t) {
          var n = ProjectsModel.get(t[0]);
          n && n.shared && (e = n.id)
        } else {
          var i = o.getCurrentEditor();
          if (i) {
            var n = ProjectsModel.get(i.project_id);
            n && n.shared && (e = n.id)
          }
        }
        return e
      },
      getCompletionPeople: function() {
        var e = []
          , t = c.getCompletionProjectId();
        if (t) {
          var n = a.getAll(t);
          $map(n, function(t) {
            var n = {};
            $update(n, t),
            n.name = i.shortName(n),
            n.name || (n.name = n.email),
            n.name = n.name.replace(/[_*!]+/g, ""),
            e.push(n)
          })
        }
        return e
      }
    };
    t.exports = c
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../avatars/.coffee.Avatars.js": 21,
    "../notes/.coffee.NotesUtils.js": 69,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../richtext_editor/.coffee.NatrualLanguageParsing.js": 103
  }],
  77: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    d = window.Signals,
    r = window.AmiTooltip,
    i = window.Dateist,
    o = window.DateUtils,
    c = e("../../models/.coffee.ItemsModel.js"),
    l = e("../../models/.coffee.UtilModels.js"),
    a = e("../items_utils/.coffee.ItemCommonEdits.js"),
    s = function() {
      function e() {
        this.postPoneUpdate = u(this.postPoneUpdate, this)
      }
      return e.prototype.postPoneUpdate = function(e, t) {
        var n, o, i, s, c, l, u;
        for (null == t && (t = !1),
        s = [],
        i = {},
        c = [],
        l = 0,
        u = e.length; l < u; l++)
          o = e[l],
          o.json && (n = $update({}, o.json),
          c.push(n),
          this.postPoneModel(o.json),
          s.push(o));
        return a.markForUndo(c, "postpone", _("%s task(s) postponed")),
        a.updateItems(s, !0, t),
        r.hide(),
        d.sendSignal("update_counters"),
        !1
      }
      ,
      e.prototype.postPoneModel = function(e) {
        var t, n, r, s, a, d;
        try {
          d = l.getNewDate(e, !1),
          a = d[0],
          s = d[1],
          n = d[2],
          r = d[3]
        } catch (n) {
          if (t = n,
          "INVALID_DATE" === t)
            alert(_("Invalid date") + ": " + e.date_string);
          else {
            if ("END_REACHED" !== t)
              return void alert("" + t);
            c.complete(e.id, !0)
          }
        }
        return e.date_string || (e.date_string = o.format(i.parse("tomorrow").due_date)),
        c.update(e.id, {
          due_date: a,
          date_string: e.date_string
        })
      }
      ,
      e
    }(),
    t.exports = new s
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.UtilModels.js": 172,
    "../items_utils/.coffee.ItemCommonEdits.js": 46
  }],
  78: [function(e, t, n) {
    var r, o, i, s, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    o = e("../../models/.coffee.ProjectsModel.js"),
    s = e("../../models/.coffee.UserModel.js"),
    r = function() {
      function e() {
        this.checkEmpty = a(this.checkEmpty, this),
        i.connect("check_premium_promo", this.checkEmpty)
      }
      return e.prototype.checkEmpty = function() {
        var e, t;
        return window.User.is_premium ? (e = $("premium_promotion"),
        void (e && $remove(e))) : (e = $("premium_promotion"),
        s.hasFreeTrial() && (e.innerHTML = _("Try out Todoist Premium for 30 days on us") + " \ud83c\udf81",
        e.href = "/premium/freeTrial",
        window.FLUID_MINI ? e.target = "_blank" : e.target = "_self"),
        t = function() {
          var e;
          return e = o.getAll(),
          1 === e.length && 0 === e[0].cache_count
        }
        ,
        t() ? $hide(e) : $isHidden(e) && window.User.karma > 1500 ? ($show(e),
        $fx.fadeIn(e)) : void 0)
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.UserModel.js": 171
  }],
  79: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Signals,
    r = e("../../models/.coffee.ItemsModel.js"),
    o = e("../notes/Notes.js"),
    a = e("../templates/.coffee.Templates.js"),
    i = function() {
      function e() {
        this.removeOverlay = c(this.removeOverlay, this),
        this.addOverlay = c(this.addOverlay, this),
        this.attach = c(this.attach, this)
      }
      return e.prototype.attach = function(e) {
        var t;
        if (window.User.is_premium)
          return t = e.editor_instance_div,
          t.addEventListener("dragleave", function(e) {
            return function(n) {
              return $preventDefault(n),
              e.removeOverlay(n, t)
            }
          }(this), !0),
          t.addEventListener("dragenter", function(e) {
            return function(n) {
              return $preventDefault(n),
              e.addOverlay(n, t)
            }
          }(this), !0),
          t.addEventListener("dragover", function(e) {
            return function(n) {
              return $preventDefault(n),
              e.addOverlay(n, t)
            }
          }(this), !0),
          t.addEventListener("drop", function(n) {
            return function(i) {
              var c, d, l;
              if ($preventDefault(i),
              n.removeOverlay(i, t),
              c = n._getFile(i))
                return l = e.project_id,
                c.name.indexOf(".csv") !== -1 || c.name.indexOf(".txt") !== -1 ? a.showImport(l) : (d = r.add({
                  project_id: l,
                  content: c.name,
                  item_order: r.getMaxOrder(l)
                }),
                s.sendSignal("refresh_interface", [], !0),
                o.showItemNotes(d.id),
                setTimeout(function() {
                  if (o.submit_fn)
                    return o.submit_fn()
                }, 50))
            }
          }(this), !0)
      }
      ,
      e.prototype.addOverlay = function(e, t) {
        var n, r, o, i, s, a, c, d;
        if (this.clearTimeout(t),
        o = !1,
        e.dataTransfer.types)
          for (d = event.dataTransfer.types,
          a = 0,
          c = d.length; a < c; a++)
            if (r = d[a],
            "Files" === r) {
              o = !0;
              break
            }
        if (o)
          return t.attach_overlay ? void 0 : ($addClass(t, "drop_over"),
          i = _("Add file as task / Import from template"),
          $add($body(), n = DIV({
            c: "attach_overlay"
          }, SPAN(i))),
          s = $position(t),
          $setWidth(n, t.offsetWidth),
          $setHeight(n, t.offsetHeight),
          $setTop(n, s.y),
          $setLeft(n, s.x),
          t.attach_overlay = n)
      }
      ,
      e.prototype.removeOverlay = function(e, t) {
        return this.clearTimeout(t),
        t.attach_timeout = setTimeout(function(e) {
          return function() {
            return $removeClass(t, "drop_over"),
            t.attach_overlay && ($remove(t.attach_overlay),
            t.attach_overlay = null ),
            e.clearTimeout(t)
          }
        }(this), 100)
      }
      ,
      e.prototype.clearTimeout = function(e) {
        if (e.attach_timeout)
          return clearTimeout(e.attach_timeout),
          e.attach_timeout = null
      }
      ,
      e.prototype._getFile = function(e) {
        var t, n;
        return n = e.dataTransfer && e.dataTransfer.files,
        n && (t = $first(n)) ? t : null
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../notes/Notes.js": 71,
    "../templates/.coffee.Templates.js": 112
  }],
  80: [function(e, t, n) {
    var r, o, i, s, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Signals,
    i = e("../../models/.coffee.ProjectsModel.js"),
    o = e("../../menus/MenuProjectEditor.js"),
    r = function() {
      function e() {
        this.attachMouseMove = a(this.attachMouseMove, this),
        this.externalServicesAnnotation = a(this.externalServicesAnnotation, this),
        this.setAsActive = a(this.setAsActive, this),
        this.toggleProject = a(this.toggleProject, this),
        this.showProjects = a(this.showProjects, this),
        this.getCurrentProjectId = a(this.getCurrentProjectId, this),
        this.createEditorInstance = a(this.createEditorInstance, this),
        this.getEditorsById = a(this.getEditorsById, this),
        this.getEditorById = a(this.getEditorById, this),
        this.getCurrentEditor = a(this.getCurrentEditor, this),
        this.reset = a(this.reset, this),
        this.current_cancel = null ,
        this.current_form = null ,
        this.current_holder = null ,
        this.current_editors = [],
        s.connect("projects.rerender", function(e) {
          return function(t) {
            var n, r, o, i, s, a, c, d;
            for (r = {},
            d = e.current_editors,
            i = 0,
            a = d.length; i < a; i++)
              n = d[i],
              r[n.project_id] = n;
            for (s = 0,
            c = t.length; s < c; s++)
              o = t[s],
              n = r[parseInt(o)],
              n && n.reRender();
            return r = null
          }
        }(this)),
        s.connect("projects.rerender.all", function(e) {
          return function() {
            return e.reRender()
          }
        }(this)),
        s.connect("projects.reset", function(e) {
          return function() {
            return e.reset()
          }
        }(this)),
        s.connect("project.name.changed", function(e) {
          return function(t) {
            var n;
            if (n = e.getEditorById(t.id))
              return n.setProjectTitle(t.name)
          }
        }(this)),
        s.connect("external_service_annotation", this.externalServicesAnnotation)
      }
      return e.prototype.DepProjectEditor = null ,
      e.prototype.reset = function(e) {
        var t, n, r, o;
        if (null == e && (e = !0),
        this.current_cancel = null ,
        this.current_form = null ,
        this.current_editor = null ,
        this.current_project_id = null ,
        this.current_holder = null ,
        e) {
          for (o = this.current_editors,
          n = 0,
          r = o.length; n < r; n++)
            t = o[n],
            t.remove();
          this.current_editors = []
        }
        return s.sendSignal("project_editor_manager_reset")
      }
      ,
      e.prototype.getCurrentEditor = function() {
        return this.current_editor
      }
      ,
      e.prototype.getEditorById = function(e) {
        var t, n, r, o;
        for (o = this.current_editors,
        n = 0,
        r = o.length; n < r; n++)
          if (t = o[n],
          t.project_id === e)
            return t;
        return null
      }
      ,
      e.prototype.getEditorsById = function() {
        var e, t, n, r, o;
        for (t = {},
        o = this.current_editors,
        n = 0,
        r = o.length; n < r; n++)
          e = o[n],
          t[e.project_id] = !0;
        return t
      }
      ,
      e.prototype.createEditorInstance = function(e) {
        var t;
        return t = new this.DepProjectEditor,
        t.initWithData(e),
        this.current_editors.push(t),
        t
      }
      ,
      e.prototype.getCurrentProjectId = function() {
        return this.current_project_id
      }
      ,
      e.prototype.showProjects = function(e, t, n) {
        var r, o, i, a, c, d;
        for (n || (n = {}),
        n.holder || (n.holder = $("editor")),
        window.FLUID_MINI && (i = $("blank_state_project_list"),
        i && $remove(i)),
        this.reset(),
        n.dont_replace_holder !== !0 && $replace(n.holder, null ),
        this.current_holder = n.holder,
        e.length > 1 ? $addClass(n.holder, "project_editors_multiple") : $removeClass(n.holder, "project_editors_multiple"),
        r = 0,
        c = 0,
        d = e.length; c < d; c++)
          o = e[c],
          a = this.createEditorInstance(o),
          a.holder = n.holder,
          this.current_project_id || (n.update_location !== !1 && s.sendSignal("change_location", "project/" + o),
          this.setAsActive(a, !0)),
          a.showProjectDelayed(r),
          r += 20;
        return this.externalServicesAnnotation(window.CURRENT_EXERNAL_SERVICE),
        $isFunction(t) && t(),
        setTimeout(function() {
          return s.sendSignal("rendered.projects")
        }, 50)
      }
      ,
      e.prototype.toggleProject = function(e) {
        var t, n, r, o, i, s, a;
        for (t = null ,
        r = [],
        a = this.current_editors,
        i = 0,
        s = a.length; i < s; i++)
          n = a[i],
          n.project_id === e ? t = n : r.push(n);
        return $addClass(this.current_holder, "project_editors_multiple"),
        t ? (this.current_editor === t && this.reset(!1),
        this.current_editors = r,
        t.remove(),
        !1) : (o = this.createEditorInstance(e),
        o.holder = this.current_holder,
        o.showProject(),
        !0)
      }
      ,
      e.prototype.setAsActive = function(e, t) {
        if (null == t && (t = !1),
        !(t === !1 && this.current_form || o.get().shown) && this.current_project_id !== e.project_id)
          return this.current_project_id = e.project_id,
          this.current_editor = e,
          $removeClass($all("div", "project_editor_instance"), "current_editor"),
          $addClass(e.editor_instance_div, "current_editor"),
          this.externalServicesAnnotation(window.CURRENT_EXERNAL_SERVICE)
      }
      ,
      e.prototype.externalServicesAnnotation = function(e) {
        var t, n, r, o;
        if (this.current_editor && (t = $("add_link"),
        t && $remove(t),
        e)) {
          if (r = e.annotate_text,
          n = e.annotate_fn,
          o = this.current_editor.controller,
          !o)
            return;
          return t = A({
            href: "#",
            class: "action",
            id: "add_link"
          }, r),
          $add(o, t),
          t.onclick = function(e) {
            return function() {
              return e.current_editor.addNewItem(!1, function() {
                var t;
                if (t = $gc(e.current_form, null , "richtext_editor"),
                t && n)
                  return n(t)
              }),
              !1
            }
          }(this)
        }
      }
      ,
      e.prototype.attachMouseMove = function(e) {
        return $AEV(e.editor_instance_div, "mouseover", function(t) {
          return function() {
            if (t.current_project_id !== e.project_id)
              return t.setAsActive(e)
          }
        }(this))
      }
      ,
      e.prototype.checkEmpty = function() {
        if (this.current_editor)
          return this.current_editor.checkEmpty()
      }
      ,
      e.prototype.removeEmpty = function() {
        if (this.current_editor)
          return this.current_editor.removeEmpty()
      }
      ,
      e.prototype.reRender = function() {
        var e, t, n, r, o, s;
        for (t = [],
        s = this.current_editors,
        r = 0,
        o = s.length; r < o; r++)
          e = s[r],
          n = i.get(e.project_id),
          n ? (e.reRender(),
          t.push(e)) : e.remove();
        return this.current_editors = t
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "../../menus/MenuProjectEditor.js": 136,
    "../../models/.coffee.ProjectsModel.js": 159
  }],
  81: [function(e, t, n) {
    var r, o;
    o = e("../project_list/.coffee.ProjectListUtils.js"),
    r = e("../formatter/Formatter.js"),
    n.generateLink = function(e) {
      var t, n;
      return n = $setHTML(SPAN(), r.formatSimple(e.name)),
      t = A({
        href: "#",
        c: "project_link"
      }, n),
      $AEV(t, "click", function() {
        return o.setCurrentById(e.id, null , null , !1),
        window.scroll(0, 0),
        !1
      }),
      t
    }
  }
  , {
    "../formatter/Formatter.js": 38,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  82: [function(e, t, n) {
    var r, o, i, s, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = window.GB_show,
    i = e("../promotion_overlay/.coffee.PromotionOverlay.js"),
    s = e("../../models/.coffee.TemporaryIds.js"),
    o = function() {
      function e() {
        this.showEmails = a(this.showEmails, this)
      }
      return e.prototype.showEmails = function(e) {
        var t, n;
        return window.User.is_premium ? (t = function(e) {
          var t;
          return t = "/Emails/view?project_id=" + e,
          r(_("Add tasks via Email"), t, 500, 600)
        }
        ,
        this.customShowGb(e, t)) : (n = _("Adding tasks via email is a premium feature"),
        i.show(n, null ))
      }
      ,
      e.prototype.customShowGb = function(e, t) {
        return s.waitToResolve(e, function(e) {
          return t(e)
        })
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../models/.coffee.TemporaryIds.js": 170,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90
  }],
  83: [function(e, t, n) {
    var r = window.ElementStore
      , o = window.Signals
      , i = window.Indicator
      , s = window.Alerts
      , a = window.AmiTooltip
      , c = window.AmiCheckbox
      , d = window.MiniCal
      , l = window.imageSprite
      , u = e("../project_list/.coffee.ProjectListUtils.js")
      , h = e("../notes/Notes.js")
      , f = e("../notes/.coffee.NotesUtils.js")
      , p = e("../labels/Labels.js")
      , m = e("../project_editor/.coffee.ProjectEditorManager.js")
      , g = e("../project_editor/.coffee.ProjectEditorDragAndDropFiles.js")
      , y = e("../agenda/.coffee.AgendaUtils.js")
      , w = e("../left_menu/.coffee.LeftMenu.js")
      , v = e("../sharing/.coffee.SharingManager.js")
      , j = e("../premium_promotion/.coffee.PremiumPromotion.js")
      , b = e("../action_perfomed/.coffee.ActionPerformed.js")
      , I = e("../items_utils/.coffee.ItemAddEditForm.js")
      , S = e("../items_utils/.coffee.ItemsRender.js")
      , C = e("../items_utils/.coffee.ItemCheckbox.js")
      , T = e("../items_utils/ItemDueDates.js")
      , k = e("../items_utils/.coffee.ItemCommonEdits.js")
      , D = e("../generic_manager/GenericManager.js")
      , E = e("../generic_manager/GenericManagerUtils.js")
      , x = e("../generic_manager/GenericArrows.js")
      , P = e("../formatter/Formatter.js")
      , M = e("../../models/.coffee.TemporaryIds.js")
      , N = e("../../models/.coffee.ProjectsModel.js")
      , L = e("../../models/.coffee.ItemsModel.js")
      , R = e("../../models/.coffee.Collaborators.js")
      , U = e("../../models/.coffee.Reminders.js").BufferedRemindersModel
      , O = e("../../menus/MenuProjectGear.js")
      , V = e("../../menus/MenuProjectEditor.js")
      , B = e("../../menus/.coffee.MenuPriorities.js")
      , H = e("./.coffee.ProjectEditorUtils.js")
      , F = {
      init: function() {
        O.init(m),
        V.init(m),
        B.init(m),
        M.listenAll(function(e, t) {
          var n = "item_" + t
            , r = "item_" + e
            , o = $(r);
          o && (o.id = n,
          $removeClass(o, r),
          $addClass(o, n));
          var i = m.getEditorById(e);
          i && (i.project_id = t),
          m.current_project_id == e && (m.current_project_id = t)
        })
      }
    }
      , G = D.extend({
      initWithData: function(e) {
        var t = {
          list_class: "ProjectEditor",
          data_model: L,
          max_indent: 5,
          undo_reorder_intent: "reorder_project_editor",
          arrows: new x({
            data_model: L
          }),
          state_manager: m,
          empty_text: _("This project has no tasks. Add some now!")
        };
        t.arrows.setList(this),
        this.parent(t),
        this.project_id = e,
        this.current_limit = 0,
        this.history_fetch_count = 0,
        this.menu = V.get(),
        this.is_archived = !1,
        $bindMethods(this)
      },
      remove: function() {
        this.editor_instance_div && ($remove(this.current_list, this.current_his_list, this.editor_instance_div, this.right_task_actions_div, this.history_icon_div),
        r.remove(this.editor_instance_div),
        this.state_manager = null ,
        this.current_list = null ,
        this.current_his_list = null ,
        this.menu = null ,
        this.arrows.data_model = null ,
        this.arrows = null ,
        this.editor_instance_div = null ,
        this.project_header_link = null )
      },
      showProjectDelayed: function(e) {
        e ? setTimeout(this.showProject, e) : this.showProject()
      },
      showProject: function() {
        var e = this
          , t = N.get(this.project_id);
        if (t) {
          var n = L.getByProjectId(t.id);
          return e._showProject(t, n)
        }
        var r = $requestJSON("/API/v7/projects/get_data");
        r.offline_message = !0,
        r.addCallback(function(t) {
          e._showProject(t.project, t.items)
        }),
        r.addErrback(function(e, t) {
          404 == t.status ? alert(_("Project not found")) : alert(e)
        }),
        r.sendReq({
          token: window.User.token,
          project_id: this.project_id
        })
      },
      _showProject: function(e, t) {
        y.reset();
        var n = this;
        this.render();
        var r = this.current_list = UL({
          c: "items"
        });
        $add(r, LI({
          c: "reorder_item task_item"
        }));
        var o = this.current_his_list = UL({
          c: "items history",
          id: "project_history"
        });
        if ($map(t, function(e) {
          var t = n.renderItem(e);
          $add(r, t)
        }),
        E.showHideChildren($AF(r.childNodes)),
        $replace(this.list_editor, n.renderProjectHeader(e)),
        $add(this.list_editor, r),
        $replace(this.history_editor, null ),
        $swap(this.history_editor, this.history_editor = DIV({
          c: "history_desc"
        }, o)),
        this.edit_on_load) {
          var i = this.edit_on_load;
          $map($AF(this.current_list.childNodes), function(e) {
            e.json.id == i && (n.current_item = e,
            n.editCurrentItem())
          }),
          this.edit_on_load = null
        }
        this.checkEmpty(),
        u.flashItemIfNeeded(),
        n.arrows.updateArrows(),
        e.is_archived ? ($hide($all("a", "action", n.controller)),
        this.is_archived = !0) : ($show($all("a", "action", n.controller)),
        this.is_archived = !1),
        $hide(this.history_editor, this.history_controller),
        $show(this.history_icon_div),
        w.hide(),
        window.User.karma >= 100 && !e.inbox_project && v.promoCheck()
      },
      renderProjectHeader: function(e) {
        var t = H.generateLink(e);
        this.project_header_link = t;
        var n = H2({
          c: "project_header section_header"
        }, t, this.right_task_actions_div = this.renderActions(e));
        return this.h2_title = n,
        e.is_archived && this.showArchived(),
        n
      },
      showArchived: function() {
        this.hideArchived(),
        $add(this.h2_title, SPAN({
          c: "desc"
        }, _("Archived")))
      },
      hideArchived: function() {
        $remove($all("span", "desc", this.h2_title))
      },
      setProjectTitle: function(e) {
        $setHTML($gc(this.project_header_link, "span"), P.formatSimple(e))
      },
      showHistory: function() {
        return $show(this.history_editor, this.history_controller),
        $hide(this.history_icon_div),
        this.getMoreHistory(),
        !1
      },
      getMoreHistory: function() {
        var e = this;
        b.mark("ProjectEditor/getMoreHistory");
        var t = this.fetch_history;
        $hide(t),
        this.history_fetch_count++,
        i.addToElm(t.parentNode);
        var n = $requestJSON("Items/getMoreHistory");
        return n.offline_message = !0,
        n.addCallback(function(n) {
          var r = e.current_his_list;
          $remove($all("li", "empty", r)),
          i.removeFromElm(t.parentNode),
          $map(n.completed, function(t) {
            if (!$("item_" + t.id)) {
              var n = e.renderHistoryItem(t);
              $add(r, n)
            }
          });
          var o = e.history_fetch_count
            , s = n.completed.length;
          if (1 == o && s < 10 && s > 0)
            ;
          else if (n.completed.length < 10) {
            var a, c;
            c = o > 1 ? _("No more completed tasks") : _("No completed tasks"),
            $add(r, a = LI({
              c: "empty"
            }, c)),
            $fx.fadeOut(a, {
              duration: 3e3,
              onComplete: function() {
                $show(e.history_icon_div),
                $remove(a)
              }
            })
          } else
            $show(t);
          e.arrows.updateArrows(),
          e.current_limit += n.completed.length
        }),
        n.addErrback(function() {
          i.removeFromElm(t.parentNode)
        }),
        0 === this.current_limit && (this.current_limit = this.current_his_list.childNodes.length),
        n.sendReq({
          current_limit: this.current_limit,
          project_id: this.project_id
        }),
        !1
      },
      clearCompletedTasks: function() {
        var e = this
          , t = _("Are you sure you want to delete all the completed items?");
        return s.confirm(t, function(t) {
          if (t) {
            var n = $request("/API/v7/completed/delete_from_project");
            n.offline_message = !0,
            n.addCallback(function() {
              var t = UL({
                c: "items history"
              });
              $swap(e.current_his_list, t),
              e.current_his_list = t
            }),
            n.sendReq({
              token: window.User.token,
              project_id: e.project_id
            })
          }
        }),
        !1
      },
      renderEmpty: function() {
        return null
      },
      renderItem: function(e, t) {
        var n = this;
        t || (t = {
          fn_toggle_menu: V.toggle,
          fn_complete_item: this.completeItem,
          fn_undo_complete_item: this.uncompleteItem,
          with_due_date: !0
        });
        var r = N.get(e.project_id)
          , o = !0;
        (e.is_archived || t.not_editable || !r || r.is_archived) && (o = !1),
        o || (t.no_checkbox = !0,
        t.no_drag_and_drop = !0,
        t.not_editable = !0);
        var i = S.renderItem(e, t);
        return i.render_opts.renderCls = n,
        o && E.attachClick(i.content, function() {
          return n.saveCurrentItem(function() {
            n.current_item = i,
            n.editCurrentItem()
          }),
          !0
        }),
        i
      },
      render: function() {
        this.controller = DIV({
          c: "controller actions pe_controller"
        }),
        this.add_item = A({
          href: "",
          c: "action"
        }, SPAN({
          c: "icon icon-add"
        }), _("Add Task")),
        this.add_item.onclick = this.addNewItem,
        $add(this.controller, this.add_item);
        var e;
        $ATT(this.controller, this.history_icon_div = DIV({
          c: "history_icon"
        }, e = A({
          href: "#"
        }, l("cmp_history_big", 26, 16)))),
        a.showSimpleText(e, _("Show archived tasks")),
        $AEV(e, ["click", "touchstart"], this.showHistory),
        this.history_editor = DIV({
          c: "list_editor history"
        }),
        this.history_controller = DIV({
          c: "controller actions his_ctrl"
        }),
        this.fetch_history = A({
          href: "#",
          c: "action"
        }, _("Fetch more"), "..."),
        $AEV(this.fetch_history, ["click", "touchstart"], this.getMoreHistory),
        $replace(this.history_controller, this.fetch_history),
        $hide(this.history_controller, this.history_editor),
        this.list_editor = DIV({
          c: "list_editor"
        });
        var t = this.holder;
        t || (t = $("editor")),
        $add(t, this.editor_instance_div = DIV({
          c: "project_editor_instance"
        }, this.list_editor, this.controller, this.history_editor, this.history_controller)),
        this.editor_instance_div.setAttribute("data-project-id", this.project_id),
        r.set(this.editor_instance_div, "editor", this),
        m.current_project_id == this.project_id && $addClass(this.editor_instance_div, "current_editor"),
        m.attachMouseMove(this),
        g.attach(this)
      },
      renderActions: function(e) {
        var t, n = this;
        if (!e.inbox_project) {
          var r = R.getAll(this.project_id)
            , o = r.length > 1 ? l("cmp_share_project", 26, 16) : l("cmp_share_project_plus", 26, 16);
          t = A({
            href: "#"
          }, o),
          $AEV(t, ["click", "touchstart"], function() {
            return v.show(n.project_id),
            !1
          }),
          a.showSimpleText(t, _("Share options")),
          r && r.length > 1 && $add(t, SPAN("" + r.length))
        }
        var i = A({
          href: "#"
        }, l("cmp_task_actions icon", 16, 16));
        a.showSimpleText(i, _("Project actions")),
        $AEV(i, ["click", "touchstart"], function() {
          return a.hide(),
          V.get().hide(),
          O.get().toggle(i, i)
        });
        var s;
        return s = f.renderIcon(e, NotesModel.TYPE_PROJECT_NOTE),
        a.showSimpleText(s, _("Project comments")),
        e.is_archived ? DIV({
          c: "right_task_actions"
        }, s) : DIV({
          c: "right_task_actions"
        }, s, t, i)
      },
      renderHistoryItem: function(e) {
        L._addToModel(e, !0, !1);
        var t = P.format(e.content)
          , n = TBODY()
          , r = TABLE(n)
          , o = TD()
          , i = TD({
          c: "content"
        });
        $add(n, TR(o, i));
        var s = SPAN();
        $setHTML(s, t),
        $add(i, s);
        var a = LI({
          c: "task_item history_item",
          id: "item_" + e.id
        }, r);
        if ($addClass(a, "item_" + e.id),
        a.json = e,
        h.annotate(e, s, a),
        $add(i, $setHTML(DIV(), p.format("", e))),
        1 == e.indent) {
          var d = C.create(a, this.uncompleteItem);
          $add(o, DIV({
            c: "div_checker"
          }, d)),
          c.setChecked(d, 1)
        }
        return E.setIndent(a, e.indent),
        a
      },
      reRender: function() {
        var e = this
          , t = N.get(this.project_id);
        if (t) {
          var n = L.getByProjectId(t.id)
            , r = UL({
            c: "items"
          });
          $add(r, LI({
            c: "reorder_item task_item"
          })),
          $map(n, function(t) {
            var n = e.renderItem(t);
            $add(r, n)
          }),
          E.showHideChildren($AF(r.childNodes)),
          $swap(e.current_list, r),
          e.current_list = r,
          $swap(e.right_task_actions_div, e.right_task_actions_div = e.renderActions(t)),
          e.setProjectTitle(t.name)
        }
        t ? t.is_archived ? ($hide($all("a", "action", e.controller)),
        this.showArchived()) : ($show($all("a", "action", e.controller)),
        this.hideArchived()) : e.remove(),
        e.current_list && (e.arrows.updateArrows(),
        e.checkEmpty())
      },
      addItem: function(e, t) {
        var n = this
          , r = $parent(e, "li")
          , o = I.parseFormData(e);
        if (!o)
          return !1;
        if (I.genericAddItem(e, o),
        "" !== o.content) {
          var i = E.getParent(r);
          i && i.json && i.json.id && (o.parent_id = i.json.id);
          var s = L.add(o);
          if (s) {
            U.reminders.length > 0 && U.commitBuffered(s);
            var a, c = N.get(s.project_id);
            s.project_id != this.project_id ? (I.notifyAddedToProject(s, c, "added"),
            a = r.previousSibling,
            $swap(r, null )) : (a = n.renderItem(s),
            $addClass(a, "item_added"),
            $swap(r, a),
            E.updateParentIds(a, L, [])),
            this.editingDone(a);
            var d = {};
            return c && R.isProjectShared(c.id) && 0 != o.inherit_asignee ? d.responsible_uid = s.responsible_uid : d.responsible_uid = void 0,
            $isFunction(t) ? t(s) : n.showAddItem(!0, !1, !1, d),
            a && n.incNextSiblings(a),
            !1
          }
        }
        this.current_item = r,
        $isFunction(t) && t(!0);
        var l = $gc(e, null , "richtext_editor");
        return l && l.proxyFocus(),
        !1
      },
      showAddItem: function(e, t, n, r) {
        m.setAsActive(this);
        var o = this;
        v.promo_shown && v.promoRemove(),
        this.parent(e, t, n),
        V.get().hide();
        var i = function() {
          U.reset(),
          o.checkEmpty(),
          o.arrows.updateArrows(),
          d.remove(),
          I.genericCancelEdit()
        }
          , s = {
          cancel: E.genCancel("li", i, m),
          action: o.addItem,
          submit_val: _("Add Task"),
          submit_icon: "cmp_add",
          name_val: "",
          manager_reodering: !0,
          manager_type: "project_editor"
        };
        r && r.responsible_uid && (s.responsible_uid = r.responsible_uid);
        var a = I.generateForm(s);
        m.current_cancel = s.cancel,
        m.current_form = a.form;
        var c = a.li_item;
        if (e === !0) {
          var l = E.getIndent(this.current_item) || 1
            , u = this.current_item.nextSibling;
          u && u.json && u.indent == l + 1 && (l += 1),
          E.setIndent(c, l)
        } else
          c.indent = E.getIndent(c);
        return c.priority = 1,
        m.current_editor.insertForm(a.li_item, t),
        this.arrows.updateArrows(),
        a.textarea.proxyFocus(),
        !1
      },
      addNewItem: function(e, t) {
        var n = this;
        b.mark("ProjectEditor/addNewItem");
        var r = function() {
          e === !0 ? n.current_item = n.getItem($first) : n.current_item = n.getItem($last),
          n.showAddItem(!1, e === !0, !0),
          $isFunction(t) && t()
        }
        ;
        return m.current_editor.saveCurrentItem(r),
        !1
      },
      saveItem: function(e, t) {
        var n = this
          , r = m.current_form
          , o = m.current_editor.current_item
          , i = E.getChildren(o)
          , s = o.nextSibling
          , a = I.genericSaveItem(o, r);
        if (a) {
          var c, d = N.get(a.item.project_id);
          if (a.item.project_id != this.project_id ? ($map(E.getChildren(o, !0), function(e) {
            $swap(e, null )
          }),
          I.notifyAddedToProject(a.item, d, "updated")) : (c = n.renderItem(a.item),
          $addClass(c, "item_updated"),
          $swap(o, c),
          E.updateParentIds(c, L, i)),
          this.editingDone(c),
          c) {
            var l = c.nextSibling;
            s != l && this.incNextSiblings(c)
          }
          return $isFunction(t) && t(),
          !1
        }
      },
      editCurrentItem: function() {
        d.remove(),
        m.setAsActive(this),
        v.promo_shown && v.promoRemove();
        var e = this;
        this.parent(),
        V.get().hide();
        var t = this.current_item;
        a.hide();
        var n = function() {
          $show(t),
          e.arrows.updateArrows(),
          d.remove(),
          I.genericCancelEdit()
        }
          , r = t.json.due_date
          , o = t.json.date_string || ""
          , i = {
          cancel: E.genCancel("li", n, m),
          action: e.saveItem,
          submit_val: _("Save"),
          name_val: t.json.content,
          due_date: r,
          date_string: o,
          current_item: t,
          priority: t.json.priority,
          responsible_uid: t.json.responsible_uid,
          manager_reodering: !0,
          manager_type: "project_editor"
        }
          , s = I.generateForm(i);
        m.current_cancel = i.cancel,
        m.current_form = s.form,
        $addAfter(s.li_item, t),
        this.arrows.updateArrows(),
        setTimeout(function() {
          var e = s.textarea;
          e.proxyPlaceCursor()
        }, 1)
      },
      completeItem: function(e, t, n) {
        var r = this;
        b.mark("ProjectEditor/completeItem"),
        t && t.shift && (n = !0);
        var i = L.complete(e.json, n)
          , s = $first(i);
        $rmap(i, function(e) {
          var t = $("item_" + e.id);
          t && (s.in_history ? I.removeItemInList(t) : e.checked ? C.update(t, 1, r.uncompleteItem) : ($update(t.json, e),
          C.update(t, 0, r.completeItem),
          T.updateDueDate(t)))
        }),
        this.arrows.updateArrows(),
        this.checkEmpty(),
        o.sendSignal("update_counters")
      },
      uncompleteItem: function(e) {
        var t = this;
        b.mark("ProjectEditor/uncompleteItem");
        var n = L.uncomplete(e.json);
        if ($hasClass(e, "history_item")) {
          $remove(e);
          var r = this.renderItem(n);
          $add(this.current_list, r)
        } else {
          $update(e.json, n),
          C.update(e, 0, this.completeItem);
          for (var i = e; ; ) {
            var s = E.getParent(i);
            if (!s)
              break;
            C.update(s, 0, this.completeItem),
            i = s
          }
        }
        t.arrows.updateArrows(),
        t.checkEmpty(),
        o.sendSignal("update_counters")
      },
      editingDone: function(e) {
        m.current_cancel = null ,
        m.current_form = null ,
        this.arrows.updateArrows(),
        this.current_item = e,
        o.sendSignal("update_counters")
      },
      deleteCurrentItem: function(e) {
        var t = E.getChildren(e, !0);
        return k.deleteItems(t)
      },
      checkEmpty: function() {
        this.parent(),
        j.checkEmpty()
      }
    });
    t.exports = {
      ProjectEditorGeneric: F,
      ProjectEditor: G
    }
  }
  , {
    "../../menus/.coffee.MenuPriorities.js": 126,
    "../../menus/MenuProjectEditor.js": 136,
    "../../menus/MenuProjectGear.js": 137,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.Reminders.js": 162,
    "../../models/.coffee.TemporaryIds.js": 170,
    "../action_perfomed/.coffee.ActionPerformed.js": 7,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../formatter/Formatter.js": 38,
    "../generic_manager/GenericArrows.js": 40,
    "../generic_manager/GenericManager.js": 41,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../items_utils/.coffee.ItemAddEditForm.js": 44,
    "../items_utils/.coffee.ItemCheckbox.js": 45,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../items_utils/.coffee.ItemsRender.js": 47,
    "../items_utils/ItemDueDates.js": 48,
    "../labels/Labels.js": 54,
    "../left_menu/.coffee.LeftMenu.js": 56,
    "../notes/.coffee.NotesUtils.js": 69,
    "../notes/Notes.js": 71,
    "../premium_promotion/.coffee.PremiumPromotion.js": 78,
    "../project_editor/.coffee.ProjectEditorDragAndDropFiles.js": 79,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "../sharing/.coffee.SharingManager.js": 105,
    "./.coffee.ProjectEditorUtils.js": 81
  }],
  84: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Indicator,
    d = window.Signals,
    r = e("../../mini/.coffee.DimensionCalculator.js"),
    c = e("../../models/.coffee.ProjectsModel.js"),
    l = e("../../models/.coffee.SyncEngine.js"),
    i = e("../generic_manager/GenericManagerUtils.js"),
    a = e("../notifier/Notifier.js"),
    o = function() {
      function e() {
        this.unarchive = u(this.unarchive, this),
        this.archive = u(this.archive, this),
        this.showHideArchived = u(this.showHideArchived, this),
        this.getArchived = u(this.getArchived, this),
        this.render = u(this.render, this)
      }
      return e.prototype.DepProjectList = null ,
      e.prototype.render = function() {
        var e;
        return $add($("project_list_man"), DIV({
          c: "controller actions his_ctrl",
          id: "projects_archived_holder"
        }, UL({
          id: "projects_archived_ul",
          c: "items generic_left_list"
        }), e = A({
          href: "#",
          id: "archived_link"
        }, _("Archived projects")))),
        $AEV(e, "click", $p(this.getArchived, e))
      }
      ,
      e.prototype.getArchived = function(e) {
        var t, n, o;
        return $hide(e),
        t = $("projects_archived_holder"),
        n = $("projects_archived_ul"),
        s.addToElm(t.parentNode),
        o = $requestJSON("/API/v7/projects/get_archived"),
        o.offline_message = !0,
        o.addCallback(function(o) {
          return function(i) {
            var a, c, d, l, u;
            for (s.removeFromElm(t.parentNode),
            $replace(n, null ),
            l = 0,
            u = i.length; l < u; l++)
              d = i[l],
              d.indent = 1,
              $add(n, o.DepProjectList.renderItem(d, !0));
            return r.recalculate(),
            0 === i.length ? ($add(n, a = LI({
              c: "empty"
            }, _("No archived projects"))),
            c = function() {
              return $remove(a),
              $show(e)
            }
            ,
            $fx.fadeOut(a, {
              duration: 3e3,
              onComplete: c
            })) : o.showHideArchived()
          }
        }(this)),
        o.addErrback(function() {
          return s.removeFromElm(t.parentNode)
        }),
        o.sendReq({
          token: window.User.token
        }),
        !1
      }
      ,
      e.prototype.showHideArchived = function() {
        var e;
        if (e = $("archived_link"))
          return $show(e),
          $setHTML(e, _("Hide Archived")),
          e.onclick = function(t) {
            return function() {
              return $replace($("projects_archived_ul"), null ),
              $setHTML(e, _("Archived projects")),
              e.onclick = $p(t.getArchived, e),
              !1
            }
          }(this)
      }
      ,
      e.prototype.archive = function(e) {
        var t, n, r, o, s;
        for (r = i.getChildren(e, !0),
        r.reverse(),
        o = 0,
        s = r.length; o < s; o++)
          n = r[o],
          c.archive(n.json.id),
          d.sendSignal("project_archived", n.json.id),
          i.setIndent(n, 1),
          $remove(n),
          $ATT($("projects_archived_ul"), this.DepProjectList.renderItem(n.json, !0));
        return this.DepProjectList.arrows.updateArrows(),
        d.sendSignal("update_counters"),
        d.sendSignal("projects.rerender.all"),
        this.showHideArchived(),
        t = A({
          href: "#",
          c: "hide_link"
        }, _("Hide")),
        $AEV(t, "click", a.hide),
        a.show(SPAN(e.json.name, " ", _("archived"), t))
      }
      ,
      e.prototype.unarchive = function(e) {
        var t, n, r, o, s;
        for (c.unarchive(e.json.id),
        s = i.getChildren(e, !0),
        r = 0,
        o = s.length; r < o; r++)
          n = s[r],
          $remove(n);
        return t = {
          onSuccess: function(e) {
            return function() {
              return setTimeout(function() {
                return e.DepProjectList.reRender(),
                e.DepProjectList.arrows.updateArrows(),
                d.sendSignal("update_counters"),
                d.sendSignal("projects.rerender.all")
              }, 50)
            }
          }(this)
        },
        l.sync(t, !0),
        d.sendSignal("project_unarchived", e.json.id)
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../mini/.coffee.DimensionCalculator.js": 141,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.SyncEngine.js": 167,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../notifier/Notifier.js": 73
  }],
  85: [function(e, t, n) {
    var r, o, i;
    r = ["#95ef63", "#ff8581", "#ffc471", "#f9ec75", "#a8c8e4", "#d2b8a3", "#e2a8e4", "#cccccc", "#fb886e", "#ffcc00", "#74e8d3", "#3bd5fb"],
    o = r.concat(["#dc4fad", "#ac193d", "#d24726", "#82ba00", "#03b3b2", "#008299", "#5db2ff", "#0072c6", "#000000", "#777777"]),
    i = 7,
    n.getHexCode = function(e) {
      var t;
      return t = window.User.is_premium ? o : r,
      e.inbox_project ? t[i] : t[e.color] ? t[e.color] : "#dddddd"
    }
    ,
    n.get = function() {
      return window.User.is_premium ? o : r
    }
  }
  , {}],
  86: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    y = window.Signals,
    o = e("../../mini/.coffee.DimensionCalculator.js"),
    l = e("../../menus/.coffee.MenuProjctColors.js"),
    u = e("../../menus/MenuProjectList.js"),
    g = e("../../models/.coffee.ProjectsModel.js"),
    r = e("../../models/.coffee.Collaborators.js"),
    w = e("../../models/.coffee.TemporaryIds.js"),
    d = e("../generic_left_list/.coffee.GenericLeftList.js"),
    c = e("../generic_manager/GenericArrows.js"),
    i = e("../drag_and_drop/.coffee.DragAndDrop.js"),
    f = e("../project_editor/.coffee.ProjectEditorManager.js"),
    h = e("./.coffee.ProjectColors.js"),
    a = d.extend({
      name: "ProjectList",
      initWithData: function() {
        var e, t, n, s;
        return t = {
          event_name: "Projects",
          data_model: g,
          fn_get_all: function() {
            return g.getAll()
          },
          icon: "icon-project",
          undo_reorder_intent: "reorder_project_list",
          max_indent: 4,
          default_color: 7,
          empty_text: _("You have no projects"),
          add_text: _("Add Project"),
          placeholder: _("Project name"),
          list_holder: "project_list_man",
          DragAndDrop: i,
          with_color: !0,
          with_arrows: !0,
          with_indent: !0,
          with_ordering: !0,
          manager_reodering: !0,
          manager_type: "project_list",
          empty_screen_only_with_activity: !0,
          fn_on_click: function(e) {
            return function(t, n, r) {
              var o;
              return u.get().hide(),
              r.shift || r.ctrl ? ($preventDefault(r),
              f.current_editor ? (o = f.toggleProject(n.id),
              o ? $addClass(t, "current") : $removeClass(t, "current")) : e.setCurrent(t),
              !1) : (e.setCurrent(t),
              window.scroll(0, 0))
            }
          }(this),
          fn_show_items: f.showProjects,
          fn_on_delete: function(e) {
            var t, n, r;
            for (n = 0,
            r = e.length; n < r; n++)
              t = e[n],
              y.sendSignal("project_deleted", t);
            return f.reRender(),
            y.sendSignal("update_counters")
          },
          fn_create_counter: p.createCounter,
          fn_get_selected: f.getEditorsById,
          fn_on_show_menu: function(e) {
            return function(t) {
              var n, o, i, s;
              return t.json.inbox_project ? void $hide($all("tr", "project_inbox_action", e.menu.menu_holder)) : ($show($all("tr", "project_inbox_action", e.menu.menu_holder)),
              i = $("menu_archive_text"),
              n = t.json.is_archived,
              n ? ($setHTML(i, _("Unarchive")),
              $hide($all("tr", "project_archive_action", e.menu.menu_holder))) : ($setHTML(i, _("Archive")),
              $show($all("tr", "project_archive_action", e.menu.menu_holder))),
              o = r.isProjectShared(t.json.id),
              s = $("menu_delete_text"),
              o ? $setHTML(s, _("Leave project")) : $setHTML(s, _("Delete project")))
            }
          }(this)
        },
        e = t.arrows = new c({
          data_model: t.data_model,
          x_off: -6
        }),
        e.setList(this),
        s = e._switchState,
        n = function(e, t) {
          return s(e, t),
          y.sendSignal("update_project_count", e.host_item.json),
          o.recalculate()
        }
        ,
        e._switchState = n,
        t.arrows = e,
        $bindMethods(this),
        t.fn_create_color = this.createColor,
        t.menu = u.init(this),
        t.menu_colors = l.init(),
        y.connect("project_editor_manager_reset", function(e) {
          return function() {
            if (e.current_selected)
              return e.deselectCurrent(),
              e.current_selected = null
          }
        }(this)),
        y.connect("projects.reset", function(e) {
          return function() {
            return e.deselectCurrent()
          }
        }(this)),
        this.parent(t)
      },
      createColor: function(e, t) {
        var n;
        return null == t && (t = !1),
        n = this.createColorDiv("project_color_" + e.id, e.color, h.get()),
        t !== !0 && r.isProjectShared(e.id) && ($removeClass(n, "icon-project"),
        $addClass(n, "icon-project-shared")),
        n
      },
      projectDeleted: y.connect("project_deleted", function(e) {
        return function(t) {
          return t === e.current_selected && (f.reset(),
          $replace($("editor"), null ),
          e.current_selected = null ),
          $remove(t)
        }
      }(this))
    }),
    s = function() {
      function e() {
        this.createCounter = v(this.createCounter, this),
        this.updateColor = v(this.updateColor, this),
        this.updateCount = v(this.updateCount, this),
        $AEV(window, "load", function() {
          return w.listenAll(function(e, t) {
            var n;
            if (n = $("project_count_" + e),
            n && (n.id = "project_count_" + t),
            n = $("project_color_" + e))
              return n.id = "project_color_" + t
          })
        }),
        y.connect("update_project_color", this.updateColor),
        y.connect("update_project_count", this.updateCount)
      }
      return e.prototype.updateCount = function(e) {
        var t;
        if (t = $("project_count_" + e.id))
          return $swap(t, this.createCounter(e))
      }
      ,
      e.prototype.updateColor = function(e) {
        var t;
        if (t = $("project_color_" + e.id))
          return $swap(t, m.createColor(e))
      }
      ,
      e.prototype.createCounter = function(e) {
        var t, n, r, o, i, s;
        if (n = e.cache_count || 0,
        e.collapsed)
          for (s = g.getChildren(e),
          o = 0,
          i = s.length; o < i; o++)
            t = s[o],
            n += t.cache_count;
        return 0 === n && (n = ""),
        r = DIV({
          c: "counter_count",
          id: "project_count_" + e.id
        }, "" + n)
      }
      ,
      e
    }(),
    p = new s,
    m = new a,
    window.ProjectList = t.exports = m
  }
  , {
    "../../menus/.coffee.MenuProjctColors.js": 127,
    "../../menus/MenuProjectList.js": 138,
    "../../mini/.coffee.DimensionCalculator.js": 141,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.TemporaryIds.js": 170,
    "../drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../generic_left_list/.coffee.GenericLeftList.js": 39,
    "../generic_manager/GenericArrows.js": 40,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "./.coffee.ProjectColors.js": 85
  }],
  87: [function(e, t, n) {
    var r, o;
    o = e("../generic_manager/GenericManagerUtils.js"),
    n.Deps = r = {
      ProjectList: null
    },
    n.setCurrentById = function(e, t, n, o) {
      return r.ProjectList.setCurrentById(e, t, n, o)
    }
    ,
    n.createColor = function(e, t) {
      return null == t && (t = !1),
      r.ProjectList.createColor(e, t)
    }
    ,
    n.deselectCurrent = function() {
      return r.ProjectList.deselectCurrent()
    }
    ,
    n.flashItemIfNeeded = function(e) {
      var t;
      if (null == e && (e = void 0),
      void 0 === e && (e = r.ProjectList.flash_item),
      e && (r.ProjectList.flash_item = null ,
      t = $("item_" + e),
      t && (o.openParents(t),
      !$isHidden(t))))
        return $fx.highlight(t, {
          duration: 1e3
        }),
        window.scrollTo(0, $position(t).y - 200)
    }
  }
  , {
    "../generic_manager/GenericManagerUtils.js": 42
  }],
  88: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.GB_hide,
    r = window.AmiCompleteSelect,
    o = window.DoistFormat,
    l = window.imageSprite,
    i = e("../formatter/Formatter.js"),
    d = e("../../models/.coffee.ProjectsModel.js"),
    c = e("../project_list/.coffee.ProjectListUtils.js"),
    a = function() {
      function e() {
        this.getCompletionProjects = u(this.getCompletionProjects, this),
        this.renderPItem = u(this.renderPItem, this),
        this.showTooltip = u(this.showTooltip, this),
        this.render = u(this.render, this)
      }
      return e.prototype.render = function(e, t) {
        var n, r, o;
        return r = null != t.support_all && 0 === e ? {
          id: 0,
          name: t.all_txt || _("All projects")
        } : d.get(e),
        n = this.renderPItem(r, t),
        o = A({
          href: "#"
        }, n, l("cmp_arrow_down", 7, 4)),
        t.fixed_pos && $addClass(o, "fixed_pos"),
        o.showTooltip = $p(this.showTooltip, o, t),
        $AEV(o, "click", o.showTooltip),
        this.current = o,
        o
      }
      ,
      e.prototype.showTooltip = function(e, t) {
        var n, o, i;
        return o = {
          selectedItem: t.selectedItem,
          collection: function(e) {
            return function() {
              var n;
              return n = e.getCompletionProjects(),
              null != t.support_all && n.splice(0, 0, {
                id: 0,
                name: t.all_txt || _("All projects")
              }),
              n
            }
          }(this),
          filterItem: function(e) {
            return function(n) {
              var r;
              if (n)
                return r = DIV(e.renderPItem(n, t)),
                n.indent > 1 && $addClass(r, "indent_" + n.indent),
                r
            }
          }(this),
          onSelect: function(n) {
            return function(r) {
              if (s(),
              t.no_swap || (e.showTooltip = null ,
              $swap(e, e = n.render(r.id, t)),
              n.current = e),
              $isFunction(t.onSelect))
                return t.onSelect(r, e)
            }
          }(this),
          wildcard_match: !0,
          placeholder: t.placeholder_txt || ""
        },
        n = new r(o),
        i = n.showTooltip({
          title: _("Select a project"),
          icon: e,
          arrow_left_offset: t.arrow_left_offset || 0,
          top_offset: t.top_offset || 25,
          left_offset: t.left_offset || 25,
          fn_on_hide: function() {
            return n = null
          }
        }),
        !1
      }
      ,
      e.prototype.renderPItem = function(e) {
        var t, n, r;
        return n = e.orginal_name ? e.orginal_name : e.name,
        n = n.replace(/\*\s*/, ""),
        0 !== e.id ? (t = c.createColor(e),
        n = i.formatSimple(n, {
          only_text: !0,
          as_html: !1,
          cache_prefix: "document"
        })) : t = SPAN({
          c: "blank_color"
        }),
        r = SPAN({
          c: "generic_select_item"
        }, t, SPAN({
          c: "truncated p_name"
        }, n))
      }
      ,
      e.prototype.getCompletionProjects = function() {
        var e, t, n, r, i, s;
        for (n = [],
        s = d.getAll(),
        r = 0,
        i = s.length; r < i; r++)
          t = s[r],
          e = {},
          $update(e, t),
          e.orginal_name = e.name,
          e.name = e.name.replace(o.emojiRangesRegExp(), ""),
          e.name = $strip(e.name.replace(/[*!]+/g, "")),
          n.push(e);
        return n
      }
      ,
      e
    }(),
    t.exports = new a
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "../formatter/Formatter.js": 38,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  89: [function(e, t, n) {
    var r = (window.DoistFormat,
    window.AmiTooltip)
      , o = e("../../models/.coffee.ProjectsModel.js")
      , i = e("../richtext_editor/.coffee.NatrualLanguageParsing.js")
      , s = e("./.coffee.ProjectSelecter.js")
      , a = {
      annotateFormArea: function(e, t) {
        AmiComplete.attach(e, a.complete_data = {
          trigger: "#",
          collection: function() {
            return s.getCompletionProjects()
          },
          filterItem: function(e, t) {
            if (!e)
              return null ;
            var n = DIV(s.renderPItem(e));
            return e.indent > 1 && $addClass(n, "indent_" + e.indent),
            n
          },
          wildcard_match: !0,
          position_item: $parent(e, "td", "text_box_holder"),
          extra_width: 1,
          support_paste: !1,
          onNoMatches: function(e, t, n) {
            var r;
            return $add(e, TR(r = TD({
              c: "completion_item"
            }, SPAN(_("Project not found."), " ", B(_("Create") + " " + n))))),
            r.onmouseover = $p(AmiComplete.onMouseOver, r, {}),
            r.onmousedown = $p(a._createProject, n, t),
            !0
          },
          preOnSelect: function(e) {
            var t = e.completion_item;
            i.setCurrentProject(t.id, "#" + t.name)
          }
        }),
        $AEV(e, "keydown", function(e) {
          return !(13 == e.keyAscii && !e.shift && AmiComplete.shown()) && ((27 != e.keyAscii || !AmiComplete.shown()) && void 0)
        }),
        t && $swap(t, this._crateButton(e))
      },
      _createProject: function(e, t) {
        AmiComplete.hide();
        var n = o.add({
          name: e
        });
        return i.highlight_project = [n.id, "#" + e],
        window.LibEdit.insertAtCursor(t, AmiComplete.CHAR_FORCED_WHITESPACE),
        !1
      },
      _getCompletionProjects: function() {
        var e = [];
        return $map(o.getAll(), function(t) {
          var n = {};
          $update(n, t),
          n.name = n.name.replace(/[*!]+/g, ""),
          e.push(n)
        }),
        e
      },
      _crateButton: function(e) {
        var t = imageSprite("cmp_dark_highlight_project", 16, 16);
        return $addClass(t, "form_action_icon"),
        $AEV(t, "click", function() {
          return r.hide(),
          LibEdit.placeCaretAtEnd(e),
          AmiComplete.forceShow(e, !0, a.complete_data),
          !1
        }),
        r.showSimpleText(t, _("Project"), null , 5),
        t
      }
    };
    t.exports = a
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "../richtext_editor/.coffee.NatrualLanguageParsing.js": 103,
    "./.coffee.ProjectSelecter.js": 88
  }],
  90: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = window.AmiButton,
    o = window.GB_showHTML,
    a = window.imageSprite,
    s = e("../../models/.coffee.UserModel.js"),
    i = function() {
      function e() {
        this.renderHolder = c(this.renderHolder, this),
        this.show = c(this.show, this)
      }
      return e.prototype.free_trial = !0,
      e.prototype.show = function(e, t) {
        var n, r, i;
        return i = 530,
        n = 600,
        window.FLUID_MINI && (i = 290,
        n = 200),
        r = this.renderHolder(e, t),
        o(_("Premium Only"), r, n, i)
      }
      ,
      e.prototype.renderHolder = function(e, t) {
        var n, o, i, c;
        return s.hasFreeTrial() ? (c = DIV({
          c: "text"
        }, n = r.createButton(_("Try out Todoist Premium for 30 days"), null , "red"), BR(), SPAN({
          c: "desc"
        }, _("No credit card required."))),
        n.href = "/premium/freeTrial",
        window.FLUID_MINI && (n.target = "_blank")) : (c = _("<a>Upgrade to Todoist Premium</a> for instant access to this and a lot of other features").replace("<a>", '<a href="/premium" target="_blank" class="sel_premium">'),
        c += ".",
        window.FLUID_MINI && (c = c.replace("</a>", "</a><br>")),
        c = DIV({
          c: "text"
        }, $setHTML(SPAN(), c))),
        t && (i = DIV({
          c: "text"
        }, t)),
        o = DIV(DIV({
          c: "premium_only"
        }, DIV({
          c: "p_banner"
        }, DIV({
          c: "p_banner_logo"
        }, a("cmp_premium_logo", 197, 29)), DIV({
          c: "p_banner_img"
        }, a("cmp_premium_banner", 178, 96))), DIV({
          c: "p_header"
        }, $setHTML(SPAN(), e)), i, c))
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../models/.coffee.UserModel.js": 171
  }],
  91: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C, T, k, D = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    C = window.Signals,
    v = window.MiniCal,
    c = window.AmiTooltip,
    a = window.AmiComplete,
    h = window.GB_hide,
    f = window.GB_showHTML,
    u = window.DateUtils,
    s = window.Alerts,
    k = window.imageSprite,
    o = e("../agenda/Agenda.js"),
    i = e("../agenda/.coffee.AgendaCurrentDays.js"),
    b = e("../project_editor/.coffee.ProjectEditorUtils.js"),
    I = e("../project_list/.coffee.ProjectListUtils.js"),
    j = e("../project_editor/.coffee.ProjectEditorManager.js"),
    g = e("../items_utils/.coffee.ItemAddEditForm.js"),
    y = e("../items_utils/.coffee.ItemCommonEdits.js"),
    m = e("../generic_manager/GenericManagerUtils.js"),
    S = e("../../models/.coffee.ProjectsModel.js"),
    w = e("../../models/.coffee.ItemsModel.js"),
    d = e("../../models/.coffee.Reminders.js").BufferedRemindersModel,
    l = e("../../models/.coffee.Collaborators.js"),
    r = e("../../models/.coffee.Storage.js").$storage,
    T = e("./.coffee.SmartPrefilling.js"),
    p = function() {
      function e() {
        this.externalServicesAnnotation = D(this.externalServicesAnnotation, this),
        this.hide = D(this.hide, this),
        this.addTask = D(this.addTask, this),
        this._show = D(this._show, this),
        this.toggle = D(this.toggle, this),
        $AEV(document, ["keydown", "keypress"], function(e) {
          return function(t) {
            if (!t.meta && !t.alt && 81 === t.keyAscii && t.ctrl)
              return e.toggle(),
              $preventDefault(t),
              !1
          }
        }(this)),
        C.connect("external_service_annotation", this.externalServicesAnnotation),
        C.connect("natural_language_project_updated", function(e) {
          return function(t) {
            if (e.shown && e.form_data)
              return e.form_data.form.people_assigner.onProjectUpdated(t)
          }
        }(this))
      }
      return e.prototype.shown = !1,
      e.prototype.support_annotation = !0,
      e.prototype.toggle = function() {
        var e;
        return !this.shown && (e = j.current_editor,
        e ? e.saveCurrentItem(this._show) : this._show())
      }
      ,
      e.prototype._show = function() {
        var e, t, n, r, o, a, l, h, p, y;
        return l = $("quick_add_task_holder"),
        v.arrow_left = !1,
        $addClass($body(), "body_quick_add_task"),
        this.shown = !0,
        c.hide(),
        0 === S.getAll().length ? (this.shown = !1,
        alert(DIV(B(_("You have no projects")), BR(), _("Tasks are added to projects."), " ", _("Add your first project now!"))),
        !1) : (t = {
          cancel: m.genCancel("li", this.hide, this, " "),
          action: this.addTask,
          submit_val: _("Add Task"),
          submit_icon: "cmp_add",
          name_val: "",
          indent_arrows: !1,
          with_esc_cancel: !1,
          no_indent: !0,
          due_date_focus: function() {
            var e, t;
            return e = function() {
              if (a.textarea)
                return a.textarea.proxyFocus(!0)
            }
            ,
            t = a.form.people_assigner,
            t && t.isShown() ? (t.opts.onExitFocus = function() {
              return e()
            }
            ,
            t.showTooltip()) : e()
          }
        },
        e = i.getNonOverdue(),
        e.length > 0 && (n = e[0],
        r = u.dateistResultFromDate(n),
        t.date_string = r.date_string,
        t.date_lang = r.date_lang,
        t.due_date = r.due_date),
        this.form_data = a = g.generateForm(t),
        h = T.prefillLabel(),
        h && "" === a.textarea.proxyGetValue() && a.textarea.proxySetValue("@" + h + " "),
        $setHeight(a.textarea, 19),
        o = $child(a.form, "td", "form_content"),
        this.holder = DIV({
          c: "quick_add_task manager",
          id: "quick_add_task"
        }, a.form),
        $add(this.holder, this.quick_add_annotate = DIV({
          id: "quick_add_annotate"
        }, this.quick_annotate_link = A({
          href: "#",
          class: "action",
          id: "quick_annotate_link"
        }, this.quick_annotate_icon = null , this.quick_annotate_text = SPAN(_("Attach email to task"))))),
        $hide(this.quick_add_annotate),
        $setOpacity(this.quick_add_annotate, 0),
        y = 550,
        this.task_added = !1,
        f(_("Quick Add Task"), this.holder, 210, y, {
          fn_arrow_left: function() {
            var e;
            return e = $position(l),
            e.x + 5
          },
          close_validator_fn: function(e) {
            return function() {
              var t, n;
              return t = a.textarea,
              !!e.task_added || (n = $strip(t.proxyGetValue()),
              0 !== n.length ? (s.confirmYesNo(_("Are you sure you want to cancel your current task?"), function(n) {
                return n ? (e.hide(),
                d.reset()) : t.proxyFocus(!0)
              }),
              !1) : (e.hide(),
              d.reset(),
              !0))
            }
          }(this),
          fn_left_offset: function(e, t) {
            var n;
            return n = $position(l),
            $winSize().w < 380 ? 10 : n.x - t.width / 2 - 25
          },
          fn_top_offset: function() {
            return 40
          }
        }),
        a.textarea.proxyPlaceCursor(),
        p = $child(a.form, "a", "submit_btn"),
        $AEV(p, "keydown", function(e) {
          if (9 === e.key)
            return a.textarea.proxyFocus(!0),
            !1
        }),
        this.externalServicesAnnotation(window.CURRENT_EXERNAL_SERVICE),
        !1)
      }
      ,
      e.prototype.addTask = function(e) {
        var t, n, r, s;
        return t = g.parseFormData(e, this.current_pid),
        t && "" !== t.content ? (g.genericAddItem(e, t),
        delete t.item_order,
        s = w.getByProjectId(t.project_id),
        s.length > 0 && (t.item_order = $last(s).item_order + 1),
        (r = w.add(t)) ? (d.reminders.length > 0 && d.commitBuffered(r),
        n = j.getEditorById(r.project_id),
        r.labels && r.labels.length > 0 && T.prefillLabel() ? C.sendSignal("refresh_interface", null , !0) : r.due_date && !n ? (o.get().flash_item = r.id,
        i.isAdded(r.due_date) ? C.sendSignal("refresh_interface", null , !0) : o.get().query(u.format(r.due_date, !0))) : n ? (n.reRender(),
        I.flashItemIfNeeded(r.id)) : y.notifyAddedTo(r, !1),
        C.sendSignal("update_counters"),
        this.task_added = !0,
        this.hide(),
        !1) : ($gc(e, null , "richtext_editor").proxyFocus(!0),
        !1)) : ($gc(e, null , "richtext_editor").proxyFocus(!0),
        !1)
      }
      ,
      e.prototype.hide = function() {
        return this.interval_set && (clearTimeout(this.interval_set),
        this.interval_set = null ),
        g.genericCancelEdit(),
        $remove(this.holder),
        $remove(this.sprite),
        this.support_annotation = !0,
        this.holder = this.sprite = this.shown = this.form_data = !1,
        $removeClass($body(), "body_quick_add_task"),
        a.hide(),
        $all("div", "manage_reminders").length > 0 && h(null , !1),
        h(null , !1),
        !0
      }
      ,
      e.prototype.externalServicesAnnotation = function(e) {
        var t;
        if (this.quick_annotate_link && this.support_annotation && this.support_annotation)
          return e ? ($isHidden(this.quick_add_annotate) && ($show(this.quick_add_annotate),
          setTimeout(function(e) {
            return function() {
              return $setOpacity(e.quick_add_annotate, 1)
            }
          }(this), 10)),
          t = $child($("quick_add_task"), null , "richtext_editor"),
          this.quick_annotate_link.onclick = $p(e.annotate_fn, t),
          $setHTML(this.quick_annotate_text, e.annotate_text)) : ($setOpacity(this.quick_add_annotate, 0),
          $hide(this.quick_add_annotate))
      }
      ,
      e
    }(),
    t.exports = new p
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.Reminders.js": 162,
    "../../models/.coffee.Storage.js": 165,
    "../agenda/.coffee.AgendaCurrentDays.js": 10,
    "../agenda/Agenda.js": 19,
    "../generic_manager/GenericManagerUtils.js": 42,
    "../items_utils/.coffee.ItemAddEditForm.js": 44,
    "../items_utils/.coffee.ItemCommonEdits.js": 46,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../project_editor/.coffee.ProjectEditorUtils.js": 81,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "./.coffee.SmartPrefilling.js": 92
  }],
  92: [function(e, t, n) {
    var r, o, i, s;
    s = e("../project_editor/.coffee.ProjectEditorManager.js"),
    o = e("../labels_list/.coffee.LabelsList.js"),
    i = e("../left_menu/.coffee.LeftMenuTabs.js"),
    r = function() {
      function e() {}
      return e.prototype.prefillProject = function() {
        var e;
        return e = s.current_project_id,
        e || (e = window.User.inbox_project),
        e
      }
      ,
      e.prototype.prefillLabel = function() {
        var e;
        if (!s.current_project_id && "labels" === i.getCurrentTab() && (e = o.getCurrentSelect(),
        e && e.json))
          return e.json.name
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "../labels_list/.coffee.LabelsList.js": 55,
    "../left_menu/.coffee.LeftMenuTabs.js": 57,
    "../project_editor/.coffee.ProjectEditorManager.js": 80
  }],
  93: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.AmiComplete,
    g = window.Signals,
    p = e("../project_list/.coffee.ProjectListUtils.js"),
    u = e("../labels_list/.coffee.LabelsList.js"),
    i = e("../filters_list/.coffee.FiltersList.js"),
    l = e("../labels/Labels.js"),
    f = e("../notes/Notes.js"),
    r = e("../agenda/.coffee.AgendaUtils.js"),
    y = e("../left_menu/.coffee.TopFilters.js"),
    a = e("../formatter/Formatter.js"),
    m = e("../../models/.coffee.ProjectsModel.js"),
    d = e("../../models/.coffee.ItemsModel.js"),
    h = e("../../models/.coffee.LabelsModel.js"),
    s = e("../../models/.coffee.FiltersModel.js"),
    c = function() {
      function e() {
        this.attach = w(this.attach, this)
      }
      return e.prototype.attach = function(e) {
        var t, n, c, l, w, v;
        return t = function(e, t) {
          var n, r, o;
          for (r = 0,
          o = e.length; r < o; r++)
            n = e[r],
            n.name || (n.name = n.content),
            n.type = t;
          return e
        }
        ,
        n = function(e) {
          return function(n) {
            var r, o, i;
            return n = n.toLowerCase(),
            i = [],
            i = i.concat(t(m.getByName(n).slice(0, 3), "project")),
            i = i.concat(t(h.getByName(n).slice(0, 3), "label")),
            i = i.concat(t(d.getByName(n, 5), "item")),
            window.User.is_premium && ("@" === n ? (e.complete_data.trigger = "@",
            i = t(h.getAll(), "label").concat(i)) : 0 === n.indexOf("@") && (e.complete_data.trigger = "@",
            r = n.slice(1),
            i = i.concat(t(h.getByName(r).slice(0, 8), "label")))),
            "#" === n ? (e.complete_data.trigger = "#",
            i = t(m.getAll(), "project").concat(i)) : 0 === n.indexOf("#") && (e.complete_data.trigger = "#",
            o = n.slice(1),
            i = i.concat(t(m.getByName(o).slice(0, 8), "project"))),
            i = i.concat(t(s.getByName(n, 2), "filter")),
            i = i.concat(e.getByFilters(n)),
            i.length > 0 && i.push({
              name: _("Query all tasks"),
              forced: !0,
              type: "search"
            }),
            i
          }
        }(this),
        v = function(e, t) {
          var n, r, o;
          switch (r = $setHTML(SPAN({
            c: "auto_complete_generic auto_complete_s_" + e.type
          }), t),
          e.type) {
          case "project":
            $ATT(r, p.createColor(e, !1)),
            n = m.getParent(e),
            n && $add(r, I({
              c: "parent"
            }, n.name));
            break;
          case "label":
            $ATT(r, u.createColor(e, !1));
            break;
          case "filter":
            $ATT(r, i.createColor(e, !1));
            break;
          case "item":
            o = a.formatSimple(e.content),
            o = o.replace(/\[\[(?:outlook|gmail|thunderbird)=(.+?),\s*(.+?)\]\]/, "$2"),
            o = o.replace(/<[^>]+>/g, ""),
            $setHTML(r, o),
            $ATT(r, DIV({
              c: "auto_complete_task"
            }));
            break;
          default:
            $ATT(r, DIV({
              c: "auto_complete_search"
            }))
          }
          return r
        }
        ,
        w = function(t, n) {
          var s;
          switch (n.type) {
          case "project":
            g.sendSignal("select_projects_tab"),
            p.setCurrentById(n.id);
            break;
          case "item":
            window.User.is_premium ? f.showItemNotes(n.id) : (g.sendSignal("select_projects_tab"),
            p.setCurrentById(n.project_id, n.id));
            break;
          case "label":
            u.setCurrentById(n.id),
            g.sendSignal("select_labels_tab", n.id);
            break;
          case "filter":
            i.setCurrentById(n.id),
            g.sendSignal("select_filters_tab");
            break;
          case "search":
            s = "q:" + e.value,
            r.query(s, !0, !1);
            break;
          case "today":
            y.queryToday();
            break;
          case "seven_days":
            y.query7days()
          }
          return o.hide(),
          r.blur(),
          !1
        }
        ,
        c = function(e, t, r) {
          if (!t.amicomplete_word)
            return t.amicomplete_word = t.value,
            r.require_trigger = !1,
            r.wildcard_match = !0,
            r.omni_match = !0,
            r.onNoMatches = function() {
              return o.hide(),
              !1
            }
            ,
            r.collection = n,
            r.filterItem = v,
            r.onclick = w
        }
        ,
        this.complete_data = {
          preselect_match: !1,
          keyPressListener: c
        },
        o.attach(e, this.complete_data),
        l = function() {
          if (0 === e.value.length)
            return o.hide()
        }
        ,
        $AEV(e, "blur", function() {
          return setTimeout(l, 10)
        }),
        $AEV(e, "keyup", l),
        $AEV(e, "keydown", function(t) {
          var n;
          return 13 !== t.keyAscii || (n = $child(document, "td", "current_match")) ? !(13 === t.keyAscii && !t.shift && o.shown()) && ((27 !== t.keyAscii || !o.shown()) && void 0) : (r.query(e.value, !0, !1),
          e.blur(),
          !1)
        })
      }
      ,
      e.prototype.getByFilters = function(e) {
        var t, n, r;
        return t = [],
        r = _("Today"),
        r.toLowerCase().indexOf(e) !== -1 && t.push({
          name: r,
          type: "today"
        }),
        n = _("Next 7 days"),
        n.toLowerCase().indexOf(e) !== -1 && t.push({
          name: n,
          type: "seven_days"
        }),
        t
      }
      ,
      e
    }(),
    t.exports = new c
  }
  , {
    "../../models/.coffee.FiltersModel.js": 148,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../filters_list/.coffee.FiltersList.js": 36,
    "../formatter/Formatter.js": 38,
    "../labels/Labels.js": 54,
    "../labels_list/.coffee.LabelsList.js": 55,
    "../left_menu/.coffee.TopFilters.js": 58,
    "../notes/Notes.js": 71,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  94: [function(e, t, n) {
    var r, o, i, s, a, c, d, l = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.Signals,
    r = window.AmiComplete,
    o = window.AmiTooltip,
    d = window.imageSprite,
    c = e("../themes/.coffee.Themes.js"),
    i = e("./.coffee.AutoComplete.js"),
    s = function() {
      function e() {
        this.renderHelpIcon = l(this.renderHelpIcon, this),
        this.renderSearchIcon = l(this.renderSearchIcon, this),
        this.render = l(this.render, this),
        this.blur = l(this.blur, this),
        this.select = l(this.select, this),
        this.focus = l(this.focus, this),
        this.setPlaceholder = l(this.setPlaceholder, this),
        this.setValue = l(this.setValue, this),
        this.getValue = l(this.getValue, this),
        a.connect("theme_changed", function(e) {
          return function() {
            return c.replaceImageClass(e.icon_search, c.getSearchIcon()),
            c.replaceImageClass(e.icon_help_sprite, c.getSearchHelp())
          }
        }(this))
      }
      return e.prototype.getValue = function() {
        return this.input.value
      }
      ,
      e.prototype.setValue = function(e) {
        return this.input.value = e
      }
      ,
      e.prototype.setPlaceholder = function(e) {
        return e || (e = _("Quick Find")),
        this.input_placeholder = e,
        this.input.placeholder = e
      }
      ,
      e.prototype.focus = function() {
        return this.input.focus()
      }
      ,
      e.prototype.select = function() {
        return this.input.select()
      }
      ,
      e.prototype.blur = function() {
        this.input.placeholder = this.input_placeholder,
        this.input.value = "",
        this.input.amicomplete_word = "";
        try {
          return this.input.blur()
        } catch (e) {}
      }
      ,
      e.prototype.render = function() {
        var e, t;
        return this.input_placeholder = _("Quick Find"),
        this.input = INPUT({
          class: "quick_find fixed_pos",
          type: "text text_box",
          placeholder: this.input_placeholder,
          autocomplete: "off",
          autocorrect: "off",
          spellcheck: "false"
        }),
        i.attach(this.input),
        t = DIV(),
        $add(t, this.renderSearchIcon()),
        $AEV(this.icon_search, "click", this.focus),
        $add(t, this.input),
        e = this.renderHelpIcon(),
        $add(t, e),
        $add($("quick_find"), t)
      }
      ,
      e.prototype.renderSearchIcon = function() {
        return this.icon_search = d(c.getSearchIcon(), 16, 16),
        $addClass(this.icon_search, "search_icon"),
        this.icon_search
      }
      ,
      e.prototype.renderHelpIcon = function() {
        var e;
        return this.icon_help = e = A({
          href: "/Help/Filtering",
          c: "help_icon",
          target: "_blank"
        }, this.icon_help_sprite = d(c.getSearchHelp(), 16, 16)),
        $AEV(this.icon_help_sprite, "click", function() {
          return !0
        }),
        o.showSimpleText(e, SPAN(_("Open Quick Find by typing f"), BR(), _("Press here for more help")), null , null , 5),
        $hide(e),
        $AEV(this.input, "keydown", function(e) {
          return function(t) {
            if (27 === t.key)
              return r.shown() ? r.hide() : e.input.blur(),
              !1
          }
        }(this)),
        $AEV(this.input, "focus", function(t) {
          return function() {
            return $setOpacity(t.icon_search, 0),
            $setOpacity(t.icon_help, 0),
            c.replaceImageClass(t.icon_search, c.getSearchIcon("dark")),
            c.replaceImageClass(t.icon_help_sprite, c.getSearchHelp("dark")),
            setTimeout(function() {
              return $setOpacity(t.icon_search, 1),
              $setOpacity(t.icon_help, 1)
            }, 50),
            $addClass(t.input, "quick_find_focused"),
            $show(e)
          }
        }(this)),
        $AEV(this.input, "blur", function(t) {
          return function() {
            return setTimeout(function() {
              return $removeClass(t.input, "quick_find_focused"),
              $hide(e),
              c.replaceImageClass(t.icon_search, c.getSearchIcon()),
              c.replaceImageClass(t.icon_help_sprite, c.getSearchHelp())
            }, 200),
            setTimeout(r.hide, 300)
          }
        }(this)),
        e
      }
      ,
      e
    }(),
    t.exports = new s
  }
  , {
    "../themes/.coffee.Themes.js": 113,
    "./.coffee.AutoComplete.js": 93
  }],
  95: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, _, p, m, g, y;
    i = window.GB_getLast,
    _ = window.Signals,
    r = e("../agenda/Agenda.js"),
    o = e("../agenda/.coffee.CompletedToday.js"),
    u = e("../../components/project_editor/.coffee.ProjectEditorManager.js"),
    h = e("../../components/project_list/.coffee.ProjectList.js"),
    f = e("../../models/.coffee.ProjectsModel.js"),
    p = e("../../models/.coffee.StateModel.js"),
    l = e("../../menus/MenuProjectList.js"),
    d = e("../../menus/MenuProjectEditor.js"),
    s = e("../../menus/MenuAgendaEdit.js"),
    c = e("../../menus/MenuLabelList.js"),
    a = e("../../menus/MenuFilterList.js"),
    m = window.isEditingOn = function() {
      var e, t, n, r, h, f, _;
      return _ = l.get() || {},
      r = d.get() || {},
      e = s.get() || {},
      f = c.get() || {},
      h = a.get() || {},
      n = i() || p.get("drag_and_drop_mode") === p.DragMode.reordering,
      (u.current_form || r.shown || e.shown) && (n = !0),
      t = u.getCurrentEditor(),
      t && t.is_archived && (n = !0),
      (_.shown || h.shown || f.shown) && (n = !0),
      $all("li", "manager").length > 0 && (n = !0),
      $all("div", "drag_and_drop_handler").length > 0 && (n = !0),
      $all("li", "selected").length > 0 && (n = !0),
      $("agenda_view") && o.isAnimationRunning() && (n = !0),
      $$(".search_holder").length > 0 && (n = !0),
      n
    }
    ,
    n.refreshInterface = g = function(e, t) {
      var n;
      return null == t && (t = !1),
      !window.PRINT_MODE && (n = m(),
      n && t !== !0 ? (window.refresh_to && (clearTimeout(window.refresh_to),
      window.refresh_to = null ),
      window.refresh_to = setTimeout($p(g, e, t), 500)) : (window.refresh_real && (clearTimeout(window.refresh_real),
      window.refresh_real = null ),
      window.refresh_real = setTimeout($p(y, e, t), 150)))
    }
    ,
    y = function(e, t) {
      var n, o, i, s, a, c, d, l;
      if (null == t && (t = !1),
      t === !1 && m())
        return g(e, t),
        !1;
      if (n = r.get(),
      _.sendSignal("update_counters"),
      h.is_inited && h.insertItems(f.getAll()),
      u.current_editor) {
        if (o = [],
        e)
          for (a = 0,
          d = e.length; a < d; a++)
            i = e[a],
            o.push(i.id);
        else
          for (l = u.current_editors,
          s = 0,
          c = l.length; s < c; s++)
            i = l[s],
            o.push(i.project_id);
        return _.sendSignal("projects.rerender", o)
      }
      return $("agenda_view") && n.refresh ? n.refresh() : void 0
    }
    ,
    _.connect("refresh_interface", g)
  }
  , {
    "../../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../../components/project_list/.coffee.ProjectList.js": 86,
    "../../menus/MenuAgendaEdit.js": 133,
    "../../menus/MenuFilterList.js": 134,
    "../../menus/MenuLabelList.js": 135,
    "../../menus/MenuProjectEditor.js": 136,
    "../../menus/MenuProjectList.js": 138,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.StateModel.js": 164,
    "../agenda/.coffee.CompletedToday.js": 13,
    "../agenda/Agenda.js": 19
  }],
  96: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    c = window.DateUtils,
    d = window.DateistDateHelpers,
    r = window.AmiButton,
    l = window.GB_hide,
    o = window.AmiCompleteSelect,
    u = window.LANG,
    w = window.imageSprite,
    v = window.translate_to_lang,
    i = e("../avatars/.coffee.Avatars.js"),
    y = e("../opener/WindowOpener.js"),
    f = e("../premium_promotion/.coffee.PremiumPromotion.js"),
    s = e("../../models/.coffee.Reminders.js").BufferedRemindersModel,
    a = e("../../models/.coffee.Collaborators.js"),
    h = e("../../menus/.coffee.MenuRemindersTypes.js"),
    m = e("./.coffee.RemindersLocation.js"),
    g = e("./RemindersPromo.js"),
    p = function() {
      function e(e, t) {
        this.clean = j(this.clean, this),
        this.renderServiceSelector = j(this.renderServiceSelector, this),
        this.generateSharedServices = j(this.generateSharedServices, this),
        this.generateUserServices = j(this.generateUserServices, this),
        this.addReminder = j(this.addReminder, this),
        this.renderRelative = j(this.renderRelative, this),
        this.renderAbsolute = j(this.renderAbsolute, this),
        this.render = j(this.render, this),
        this.reRender = j(this.reRender, this),
        this.onChangeInterface = j(this.onChangeInterface, this);
        var n, r, o, i, s;
        this.manager = e,
        t && t.due_date && d.has_time(t.due_date) ? this.current_interface = "relative" : this.current_interface = "absolute",
        n = window.User.auto_reminder,
        void 0 !== n && n !== -1 || (n = 30),
        this.relative_items = [],
        s = e.min_to_words;
        for (o in s)
          i = s[o],
          o = parseInt(o),
          r = {
            id: o,
            name: i
          },
          o === n && (this.current_relative_select = r),
          this.relative_items.push(r);
        this.user_services = this.generateUserServices(),
        h.init()
      }
      return e.prototype.onChangeInterface = function(e) {
        return "location" === e && !window.User.is_premium && $all("li", "reminder").length >= 1 ? g.showPromotionLocation() : (this.current_interface = e,
        this.reRender(),
        h.get().hide(),
        !1)
      }
      ,
      e.prototype.reRender = function() {
        var e;
        return e = this.adder,
        $swap(e, this.render()),
        $remove(e)
      }
      ,
      e.prototype.render = function() {
        var e, t;
        return this.adder_below = DIV({
          c: "adder_below"
        }),
        e = "absolute" === this.current_interface ? this.renderAbsolute() : "relative" === this.current_interface ? this.renderRelative() : m.render(this.adder_below),
        t = r.createButton(_("Add reminder"), null , "red"),
        $AEV(t, "click", function(e) {
          return function() {
            return e.addReminder(),
            !1
          }
        }(this)),
        this.adder = DIV(DIV({
          c: "adder"
        }, this.renderSwitcher(), e), this.adder_below, DIV(A({
          href: "/Help/Reminders",
          target: "_blank",
          c: "help"
        }, w("cmp_query-help", 16, 16)), t)),
        this.adder
      }
      ,
      e.prototype.renderAbsolute = function() {
        var e, t, n;
        return e = _("today at 2pm"),
        t = DIV(n = this.absolute_input = INPUT({
          placeholder: e
        })),
        $AEV(n, "keydown", function(e) {
          return function(t) {
            if (13 === t.keyAscii)
              return e.addReminder(),
              !1
          }
        }(this)),
        setTimeout(function() {
          return n.focus()
        }, 150),
        DIV({
          c: "absolute"
        }, this.renderServiceSelector(), t)
      }
      ,
      e.prototype.renderRelative = function() {
        var e, t, n;
        return t = function(e) {
          return function() {
            return _("%s before").replace("%s", e.current_relative_select.name)
          }
        }(this),
        e = A({
          href: "#",
          c: "icon"
        }, n = SPAN(t()), w("cmp_arrow_down", 7, 4)),
        $AEV(e, "click", function(r) {
          return function() {
            var i, s, a;
            return s = {
              selectedItem: function() {
                return r.current_relative_select
              },
              collection: function() {
                return r.relative_items
              },
              filterItem: function(e) {
                var t;
                return t = DIV({
                  c: "complete_item"
                }, e.name)
              },
              onSelect: function(e) {
                return r.current_relative_select = e,
                $replace(n, t()),
                l()
              },
              wildcard_match: !0
            },
            i = new o(s),
            a = i.showTooltip({
              icon: e,
              title: _("Remind me"),
              arrow_left_offset: 5,
              top_offset: 35,
              left_offset: 30,
              fn_on_hide: function() {
                return i = null
              }
            }),
            !1
          }
        }(this)),
        DIV({
          c: "relative"
        }, this.renderServiceSelector(), e)
      }
      ,
      e.prototype.addReminder = function() {
        var e, t, n;
        if (!window.User.is_premium && $all("li", "reminder").length >= 1)
          return g.showPromotion();
        if (e = function(e) {
          return function(t) {
            return s.add(t),
            e.manager.viewer.reRender(),
            e.absolute_input && (e.absolute_input.value = ""),
            e.manager.updateParentItem(!0)
          }
        }(this),
        "location" === this.current_interface)
          m.getPlaceResolved(function(t) {
            var n;
            return t ? (n = {
              item_id: s.getCurItem().id,
              type: "location"
            },
            $update(n, t),
            m.reset(),
            m.input.focus(),
            e(n)) : (alert(_("Please select a location first"), function() {
              return m.input.focus()
            }),
            !1)
          });
        else {
          if (t = {
            item_id: s.getCurItem().id,
            service: this.current_service_select.id
          },
          "absolute" === this.current_interface) {
            if (n = this.parseDate(this.absolute_input.value),
            n.error)
              return alert(n.error, function(e) {
                return function() {
                  var t;
                  return t = function() {
                    return e.absolute_input.focus()
                  }
                  ,
                  setTimeout(t, 200)
                }
              }(this)),
              !1;
            t.time = n.due_date.getTime(),
            t.due_date_utc = c.jsonFormat(n.due_date),
            t.date_lang = n.date_lang,
            t.date_string = n.date_string,
            t.type = "absolute"
          } else
            t.minute_offset = this.current_relative_select.id,
            t.type = "relative";
          this.current_service_select.notify_uid && (t.notify_uid = this.current_service_select.notify_uid,
          t.service = "default"),
          e(t)
        }
        return !1
      }
      ,
      e.prototype.renderSwitcher = function() {
        var e, t, n;
        return t = w("cmp_rem_" + this.current_interface + " menu_icon", 29, 29),
        e = w("cmp_rem_dp menu_icon", 10, 9),
        n = A({
          href: "#",
          c: "switcher menu"
        }, t, e),
        $AEV(n, "click", function(e) {
          return h.get().toggle(n, n, e),
          !1
        }),
        n
      }
      ,
      e.prototype.generateUserServices = function() {
        var e, t, n, r, o, i, s;
        return r = {
          id: "push",
          name: _("Push notification")
        },
        n = {
          id: "email",
          name: _("Email")
        },
        i = {
          id: "sms",
          name: _("SMS")
        },
        e = {
          id: "settings",
          name: _("Reminders settings") + "..."
        },
        s = window.User,
        this.current_service_select || (t = s.default_reminder,
        "push" === t ? this.current_service_select = r : s.mobile_number && "mobile" === t ? this.current_service_select = i : this.current_service_select = n),
        o = [n],
        o.push(r),
        s.mobile_number && o.push(i),
        o.push(e),
        o
      }
      ,
      e.prototype.generateSharedServices = function(e) {
        var t, n, r, o, i, s;
        for (t = [],
        s = a.getAll(e),
        o = 0,
        i = s.length; o < i; o++)
          r = s[o],
          n = {
            notify_uid: r.id
          },
          $update(n, r),
          r.id !== window.User.id && (n.name = r.full_name.split(" ")[0],
          t.push(n));
        return t
      }
      ,
      e.prototype.renderServiceSelector = function() {
        var e, t, n, r, c, d, u;
        return n = function(e) {
          return function() {
            var t, n;
            return t = e.current_service_select,
            t.notify_uid ? i.renderAvatar(t, "small") : (n = "email" === t.id ? "cmp_reminder_email" : "cmp_reminder_mobile",
            w(n, 16, 16))
          }
        }(this),
        d = A({
          href: "#",
          c: "service_selector"
        }, r = SPAN(n()), w("cmp_arrow_down", 7, 4)),
        e = this.user_services,
        t = s.getCurItem(),
        a.isProjectShared(t.project_id) ? (u = _("Who to notify"),
        c = !0,
        e = e.concat(this.generateSharedServices(t.project_id))) : (u = _("Notify via"),
        c = !1),
        $AEV(d, "click", function(t) {
          return function() {
            var s, a, h;
            return a = {
              selectedItem: function() {
                return t.current_service_select
              },
              collection: function() {
                return e
              },
              filterItem: function(e) {
                var t, n, r;
                return c ? (e.notify_uid ? (t = i.renderAvatar(e, "small"),
                r = e.name + " (" + _("Default") + ")") : (t = i.renderAvatar(window.User, "small"),
                r = _("Me") + " (" + e.name + ")"),
                n = DIV({
                  c: "complete_item"
                }, t, r)) : n = DIV({
                  c: "complete_item"
                }, e.name),
                n
              },
              onSelect: function(e) {
                if (l(),
                "settings" === e.id ? y.showPrefs("reminders") : (t.current_service_select = e,
                $replace(r, n())),
                t.absolute_input)
                  return t.absolute_input.focus()
              },
              wildcard_match: !0
            },
            s = new o(a),
            h = s.showTooltip({
              icon: d,
              title: u,
              arrow_left_offset: 5,
              top_offset: 35,
              left_offset: 170,
              fn_on_hide: function() {
                return s = null
              }
            }),
            !1
          }
        }(this)),
        d
      }
      ,
      e.prototype.clean = function() {
        return $remove(this.adder),
        $remove(this.adder_below),
        $remove(this.absolute_input),
        this.manager = null ,
        this.adder = null ,
        this.adder_below = null ,
        this.absolute_input = null
      }
      ,
      e.prototype.parseDate = function(e) {
        var t, n, r, o, i, s;
        return t = c.parse(e),
        "" === e ? {
          error: _("Date can't be empty")
        } : t.error || !t.due_date ? {
          error: _("Invalid date")
        } : (t.due_date && (d.has_time(t.due_date) || (s = t,
        t = c.parse(t.date_string + " @ 9:00"),
        t.due_date && (i = new Date,
        n = d.day_diff(i, t.due_date),
        n >= 365 && (r = i.getHours() + 3,
        o = "00",
        r > 23 && (r = 23,
        o = 29),
        t = c.parse(s.date_string + " @ " + r + ":" + o))))),
        t)
      }
      ,
      e
    }(),
    t.exports = p
  }
  , {
    "../../menus/.coffee.MenuRemindersTypes.js": 128,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.Reminders.js": 162,
    "../avatars/.coffee.Avatars.js": 21,
    "../opener/WindowOpener.js": 74,
    "../premium_promotion/.coffee.PremiumPromotion.js": 78,
    "./.coffee.RemindersLocation.js": 97,
    "./RemindersPromo.js": 101
  }],
  97: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Indicator,
    o = window.GB_hide,
    r = window.AmiCompleteSelect,
    c = window.imageSprite,
    a = e("../../models/.coffee.RemindersLocationModel.js"),
    i = function() {
      function e() {
        this.nearbySearch = d(this.nearbySearch, this),
        this.loaded = d(this.loaded, this),
        this.loadGoogle = d(this.loadGoogle, this),
        this.showLastLocations = d(this.showLastLocations, this),
        this.selectLocation = d(this.selectLocation, this),
        this.initGoogleMaps = d(this.initGoogleMaps, this),
        this._render = d(this._render, this),
        this.reset = d(this.reset, this),
        this.getPlaceResolved = d(this.getPlaceResolved, this),
        this.getPlace = d(this.getPlace, this),
        this.render = d(this.render, this)
      }
      return e.prototype.render = function(e) {
        var t, n;
        return window.google && window.google.maps ? (this._render(e),
        this.holder) : (n = DIV({
          c: "location_selecter"
        }, s.imgSmall()),
        t = function(t) {
          return function() {
            return $replace(n, t._render(e))
          }
        }(this),
        this.loadGoogle(t),
        n)
      }
      ,
      e.prototype.formatPlace = function(e, t) {
        return {
          name: e,
          loc_lat: "" + t.lat(),
          loc_long: "" + t.lng(),
          loc_trigger: $selectValue(this.gtrigger),
          radius: 100
        }
      }
      ,
      e.prototype.getPlace = function() {
        var e;
        if (this.place && this.gmarker)
          return e = this.gmarker.getPosition(),
          this.formatPlace(this.place.name, e)
      }
      ,
      e.prototype.getPlaceResolved = function(e) {
        var t;
        return this.place && this.gmarker ? (t = this.gmarker.getPosition(),
        this.start_location && t.lat() === this.start_location.lat() && t.lng() === this.start_location.lng() ? e(this.formatPlace(this.place.name, t)) : this.nearbySearch(t, function(n) {
          return function(r) {
            return r = r || n.place.name,
            e(n.formatPlace(r, t))
          }
        }(this))) : e(null )
      }
      ,
      e.prototype.reset = function() {
        return this.input.value = "",
        $hide(this.gholder),
        this.place = null ,
        this.start_location = null
      }
      ,
      e.prototype._render = function(e) {
        var t, n;
        return n = A({
          href: "#",
          c: "service_selector"
        }, t = SPAN(c("cmp_last_locations", 16, 16)), c("cmp_arrow_down", 7, 4)),
        n.reuseable = !0,
        $AEV(n, "click", $p(this.showLastLocations, n)),
        this.holder || (this.holder = DIV({
          c: "location_selecter"
        }, n, this.input = INPUT({
          type: "text",
          placeholder: _("Type location"),
          reuseable: !0
        })),
        this.initGoogleMaps(this.input, e)),
        this.place = null ,
        this.input.value = "",
        setTimeout(function(e) {
          return function() {
            return e.input.focus()
          }
        }(this), 100),
        $AEV(this.input, "keyup", function(e) {
          return function() {
            if ("" === e.input.value)
              return $hide(e.gholder)
          }
        }(this)),
        $hide(this.gholder),
        $replace(e, this.gholder),
        this.holder
      }
      ,
      e.prototype.initGoogleMaps = function(e) {
        var t;
        return this.gholder ? this.gholder : (t = new window.google.maps.places.Autocomplete(e),
        this.gholder = DIV({
          c: "map_holder"
        }, this.map_canvas = DIV({
          c: "map"
        }), this.gtrigger = SELECT(OPTION({
          value: "on_enter",
          selected: "selected"
        }, _("When I arrive")), OPTION({
          value: "on_leave"
        }, _("When I leave")))),
        window.google.maps.event.addListener(t, "place_changed", function(e) {
          return function() {
            if (e.place = t.getPlace(),
            e.place.geometry)
              return e.selectLocation(e.place.geometry)
          }
        }(this)))
      }
      ,
      e.prototype.selectLocation = function(e) {
        var t;
        return $show(this.gholder),
        this.gmap || (t = {
          zoom: 17,
          mapTypeControl: !1,
          zoomControl: !0,
          streetViewControl: !1
        },
        this.gmap = new window.google.maps.Map(this.map_canvas,t),
        this.gmarker = new window.google.maps.Marker({
          map: this.gmap,
          anchorPoint: new window.google.maps.Point(0,-29),
          draggable: !0
        })),
        this.gmarker.setPosition(e.location),
        this.gmarker.setVisible(!0),
        this.start_location = this.gmarker.getPosition(),
        e.viewport ? this.gmap.fitBounds(e.viewport) : (this.gmap.setCenter(e.location),
        this.gmap.setZoom(17))
      }
      ,
      e.prototype.showLastLocations = function(e) {
        var t, n, i;
        return n = {
          selectedItem: function() {
            return null
          },
          collection: function() {
            var e, t, n, r, o;
            for (t = [],
            o = a.getLastLocations(),
            n = 0,
            r = o.length; n < r; n++)
              e = o[n],
              t.push({
                name: e[0],
                loc_lat: parseFloat(e[1]),
                loc_long: parseFloat(e[2])
              });
            return t
          },
          filterItem: function(e, t) {
            return $setHTML(DIV({
              c: "complete_item"
            }), t)
          },
          txt_no_matches_found: _("No recent locations found."),
          onSelect: function(e) {
            return function(t) {
              var n;
              return e.place = {
                name: t.name
              },
              e.input.value = t.name,
              n = {
                location: new window.google.maps.LatLng(t.loc_lat,t.loc_long),
                viewport: null
              },
              e.selectLocation(n),
              o(),
              !1
            }
          }(this),
          wildcard_match: !0
        },
        t = new r(n),
        i = t.showTooltip({
          icon: e,
          title: _("Recent locations"),
          arrow_left_offset: 5,
          top_offset: 35,
          left_offset: 170,
          fn_on_hide: function() {
            return t = null
          }
        }),
        !1
      }
      ,
      e.prototype.load_timeout = null ,
      e.prototype.callbacks = [],
      e.prototype.loadGoogle = function(e) {
        if (!window.google || !window.google.maps)
          return this.load_timeout && clearTimeout(this.load_timeout),
          this.callbacks.push(e),
          $add($body(), SCRIPT({
            src: "https://maps.googleapis.com/maps/api/js?libraries=places&async=2&callback=RemindersLocation.loaded&key=AIzaSyCXMDZI-DQwpQ72521KB_V45LXL1Zm_lHU&sensor=false"
          })),
          this.load_timeout = setInterval(function(e) {
            return function() {
              if (window.google && window.google.maps)
                return e.loaded()
            }
          }(this), 500)
      }
      ,
      e.prototype.loaded = function() {
        var e, t, n, r;
        for (this.load_timeout && (clearTimeout(this.load_timeout),
        this.load_timeout = null ),
        r = this.callbacks,
        t = 0,
        n = r.length; t < n; t++)
          (e = r[t])();
        return this.callbacks = []
      }
      ,
      e.prototype.nearbySearch = function(e, t) {
        var n, r, o;
        return n = new window.google.maps.LatLng(e.lat(),e.lng()),
        r = {
          location: n,
          radius: "5"
        },
        o = new window.google.maps.places.PlacesService(this.gmap),
        o.nearbySearch(r, function(e) {
          return t(e && e.length > 0 ? e[0].name : null )
        })
      }
      ,
      e
    }(),
    window.RemindersLocation = new i,
    t.exports = window.RemindersLocation
  }
  , {
    "../../models/.coffee.RemindersLocationModel.js": 163
  }],
  98: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.DateistDateHelpers,
    r = e("../../models/.coffee.Reminders.js").BufferedRemindersModel,
    s = e("../../models/.coffee.ItemsModel.js"),
    i = e("../items_utils/ItemDueDates.js"),
    c = e("./.coffee.RemindersAdder.js"),
    l = e("./.coffee.RemindersViewer.js"),
    a = e("../../menus/.coffee.MenuRemindersTypes.js"),
    d = function() {
      function e(e, t) {
        this.updateParentItem = u(this.updateParentItem, this),
        this.render = u(this.render, this);
        var n;
        this.holder = t,
        e ? (n = s.getById(e.json.id),
        n && (r.cur_item = n,
        r.use_buffered = !1)) : (r.use_buffered = !0,
        n = r.getCurItem()),
        this.viewer = new l(this),
        this.adder = new c(this,n),
        a.init(this),
        n && o.has_time(n.due_date) ? a.get().setRelativePossible(!0) : a.get().setRelativePossible(!1),
        window.REMINDER_MANAGER = this
      }
      return e.prototype.min_to_words = {
        0: _("0 min"),
        10: _("10 min"),
        30: _("30 min"),
        45: _("45 min"),
        60: _("1 hour"),
        120: _("2 hours"),
        180: _("3 hours"),
        1440: _("1 day"),
        2880: _("2 days"),
        4320: _("3 days"),
        10080: _("1 week")
      },
      e.prototype.render = function() {
        var e;
        return e = DIV({
          c: "reminder_manager"
        }, this.viewer.render(), this.adder.render()),
        $replace(this.holder, e)
      }
      ,
      e.prototype.updateParentItem = function(e) {
        var t, n, o, s, a, c, d;
        if (!r.use_buffered) {
          if (s = r.getCurItem(),
          !s)
            return;
          for (d = $all("li", "item_" + s.id),
          a = 0,
          c = d.length; a < c; a++)
            n = d[a],
            t = $all("span", "date", n),
            t = t.length > 0 ? t[0] : $all("td", "project", n)[0],
            i.updateAlarmIcon(t, e)
        }
        return o = $("reminders_icon"),
        this.viewer.is_empty ? ($removeClass(o, "cmp_reminders_on"),
        $addClass(o, "cmp_reminders")) : ($removeClass(o, "cmp_reminders"),
        $addClass(o, "cmp_reminders_on"))
      }
      ,
      e.prototype.clean = function() {
        return this.adder.clean(),
        this.viewer.clean(),
        this.adder = null ,
        this.viewer = null ,
        window.REMINDER_MANAGER = null
      }
      ,
      e
    }(),
    t.exports = d
  }
  , {
    "../../menus/.coffee.MenuRemindersTypes.js": 128,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.Reminders.js": 162,
    "../items_utils/ItemDueDates.js": 48,
    "./.coffee.RemindersAdder.js": 96,
    "./.coffee.RemindersViewer.js": 99
  }],
  99: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.Dateist,
    c = window.DateistDateHelpers,
    s = window.DateUtils,
    d = window.LANG,
    u = window.imageSprite,
    r = e("../avatars/.coffee.Avatars.js"),
    o = e("../../models/.coffee.Reminders.js").BufferedRemindersModel,
    i = e("../../models/.coffee.Collaborators.js"),
    l = function() {
      function e(e) {
        this.clean = h(this.clean, this),
        this.deleteNotification = h(this.deleteNotification, this),
        this.render = h(this.render, this),
        this.reRender = h(this.reRender, this),
        this.manager = e
      }
      return e.prototype.reRender = function() {
        var e;
        return e = this.viewer,
        $swap(e, this.render()),
        $remove(e)
      }
      ,
      e.prototype.render = function() {
        var e, t, n, d, l, h, f, p, m, g, y, w, v, j, b, I, $;
        for (m = o.getCurrentReminders(),
        j = this.viewer = UL({
          c: "viewer"
        }),
        0 === m.length ? ($addClass(j, "is_empty"),
        this.is_empty = !0) : this.is_empty = !1,
        e = o.getCurItem(),
        h = !!i.isProjectShared(e.project_id),
        I = 0,
        $ = m.length; I < $; I++)
          p = m[I],
          l = null ,
          h && (v = i.getUserById(p.notify_uid || window.User.id),
          v && (l = r.renderAvatar(v, "small"))),
          l || (l = u("cmp_rem_" + p.type + " menu_icon", 29, 29)),
          d = "",
          g = "",
          "absolute" === p.type ? a.is_recurring(p.date_string, {
            lang: p.date_lang
          }) ? (y = p.date_string,
          d = y) : (p.time || (p.time = new Date(p.due_date_utc).getTime()),
          n = new Date(p.time),
          t = s.humanizeDayDiff(c.day_diff(new Date, n), n),
          d = t) : "relative" === p.type ? (b = this.manager.min_to_words[p.minute_offset],
          d = void 0 !== b ? _("%s before").replace("%s", b) : _("%d min before").replace("%d", p.minute_offset)) : "location" === p.type && (d = p.name,
          g = "on_enter" === p.loc_trigger ? _("When I arrive") : _("When I leave")),
          0 === g.length && (g = "email" === p.service ? _("email") : "push" === p.service ? _("mobile notification") : "sms" === p.service || "mobile" === p.service ? _("SMS notification") : _("default")),
          $add(j, f = LI({
            c: "reminder"
          }, w = A({
            href: "#",
            c: "trash"
          }, u("cmp_trash", 16, 16)), l, DIV(B(d), BR(), g))),
          $AEV(w, "click", $p(this.deleteNotification, p.id));
        return this.viewer
      }
      ,
      e.prototype.deleteNotification = function(e) {
        var t;
        return o.remove(e),
        this.reRender(),
        t = o.getCurrentReminders(),
        this.manager.updateParentItem(t.length > 0),
        !1
      }
      ,
      e.prototype.clean = function() {
        return $remove(this.viewer),
        this.manager = null ,
        this.viewer = null
      }
      ,
      e
    }(),
    t.exports = l
  }
  , {
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.Reminders.js": 162,
    "../avatars/.coffee.Avatars.js": 21
  }],
  100: [function(e, t, n) {
    var r = window.Signals
      , o = window.TooptipWin
      , i = window.GB_showHTML
      , s = e("./.coffee.RemindersManager.js")
      , a = e("./RemindersPromo.js")
      , c = e("../../models/.coffee.Reminders.js").RemindersModel
      , d = {
      current_manager: null ,
      renderHolder: function(e) {
        var t = DIV();
        return this.current_manager = new s(e,t),
        this.current_manager.render(),
        t
      },
      showTooltip: function(e, t) {
        if (!c.featureEnabled())
          return a.showPromotion();
        var n = $position(t)
          , i = d.renderHolder(e)
          , s = {
          fn_left_offset: function() {
            return n.x - 240
          },
          fn_top_offset: function() {
            return n.y + 25
          },
          fn_arrow_left: function() {
            return n.x + 4
          },
          fixed_pos: $hasClass(t, "fixed_pos"),
          fn_on_hide: function() {
            var e = d.current_manager;
            e && (e.clean(),
            d.current_manager = null ),
            r.sendSignal("focus_current_item_input")
          }
        }
          , l = o.show(_("Reminders"), i, 210, 300, s);
        $addClass(l.g_window, "manage_reminders")
      },
      show: function(e) {
        if (!c.featureEnabled())
          return a.showPromotion();
        var t = d.renderHolder(e);
        return i(_("Reminders"), t, 350, 300),
        !1
      }
    };
    t.exports = d
  }
  , {
    "../../models/.coffee.Reminders.js": 162,
    "./.coffee.RemindersManager.js": 98,
    "./RemindersPromo.js": 101
  }],
  101: [function(e, t, n) {
    var r = e("../promotion_overlay/.coffee.PromotionOverlay.js")
      , o = {
      showPromotionLocation: function() {
        var e = _("Location reminders are a premium feature")
          , t = _("With reminders you can get reminded about upcoming tasks via email or mobile notifications.");
        return r.show(e, t)
      },
      showPromotion: function() {
        var e = _("Reminders are a premium feature")
          , t = _("With reminders you can get reminded about upcoming tasks via email or mobile notifications.")
          , n = window.User.features.restriction || window.User.restriction || 0;
        return n > 0 && (e = _("Get unlimited reminders"),
        t = _("Your free account only includes %s free reminder pr. task. Upgrade to Premium and get unlimited reminders.").replace("%s", 1)),
        r.show(e, t)
      }
    };
    t.exports = o
  }
  , {
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90
  }],
  102: [function(e, t, n) {
    var r = (window.LibEdit,
    e("../../components/project_editor/.coffee.ProjectEditorManager.js"))
      , o = e("../generic_manager/GenericManagerUtils.js")
      , i = new ICE.Class({
      init: function(e, t) {
        $bindMethods(this),
        this.field = e,
        this.clone = ICE.DIV({
          class: "auto_exapnd_clone"
        }, "-"),
        $add($body(), this.clone),
        $addClass(e, "auto_exapnd");
        var n = "keypress";
        this.extra_h = 0,
        ($isIe() || $isSafari()) && (n = "keydown"),
        $AEV(e, n, this.keyPress),
        $AEV(e, "focus", this.resize);
        var i = this;
        $AEV(e, "paste", function() {
          setTimeout(i.resize, 100)
        }),
        e.resize_textarea = this.resize,
        e.resize = this.resize,
        t !== !1 ? this.escape_cr = !0 : this.escape_cr = !1;
        try {
          var s = r.current_editor;
          this.current_indent = o.getIndent(s.current_item)
        } catch (e) {
          this.current_indent = 1
        }
      },
      keyPress: function() {
        this.timeout && clearTimeout(this.timeout),
        this.timeout = setTimeout(this.resize, 10)
      },
      resize: function() {
        var e = this.field
          , t = this.clone;
        if (e && 0 !== e.clientHeight) {
          t.style.width = e.offsetWidth + "px";
          var n;
          if (n = e.proxyGetValue ? e.proxyGetValue() : e.value,
          n = n.replace(/</g, "&gt;"),
          n = n.replace(/\n\r?/g, "<br>--"),
          "" === n && (n = "T"),
          this.clone.innerHTML = n,
          t.offsetHeight != this.old_height) {
            var r = t.offsetHeight;
            e.style.height = r + this.extra_h + "px",
            this.old_height = r
          }
        }
      },
      remove: function() {
        $remove(this.clone),
        this.clone = null ,
        this.field = null
      }
    });
    t.exports = i
  }
  , {
    "../../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../generic_manager/GenericManagerUtils.js": 42
  }],
  103: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    l = window.LibEdit,
    s = window.DateUtils,
    a = window.Dateist,
    c = window.DateistUtils,
    o = window.AmiComplete,
    p = window.Signals,
    r = window.$static_path,
    m = e("../../components/themes/.coffee.Themes.js"),
    h = e("../project_editor/.coffee.ProjectEditorManager.js"),
    d = e("../../models/.coffee.LabelsModel.js"),
    f = e("../../models/.coffee.ProjectsModel.js"),
    i = e("../../models/.coffee.Collaborators.js"),
    u = function() {
      function e() {
        this.generateProjectMatcher = g(this.generateProjectMatcher, this),
        this.generateUserMatcher = g(this.generateUserMatcher, this),
        this.setCurrentPerson = g(this.setCurrentPerson, this),
        this.setCurrentProject = g(this.setCurrentProject, this),
        this.attach = g(this.attach, this),
        this.annotateFormData = g(this.annotateFormData, this);
        var e;
        e = _("priority"),
        this.re_priority = new RegExp("(?:^|\\s+)(?:!!|p|" + e + ")\\s*(1|2|3|4)(?:\\s|$)")
      }
      return e.prototype.truncate_links = !1,
      e.prototype.highlight_labels = !0,
      e.prototype.highlight_project = null ,
      e.prototype.highlight_person = null ,
      e.prototype.re_labels = /(?:^|\s+)@([^\s,]+)/g,
      e.prototype.re_links = /[\w-]+:\/\/[^\s]+/g,
      e.prototype.annotateFormData = function(e, t) {
        var n, r, o, i, s, a, c;
        a = e.matches;
        for (i in a)
          switch (o = a[i],
          o[0]) {
          case "priority":
            t.content = t.content.replace(o[1], ""),
            t.priority = 5 - o[2];
            break;
          case "date":
            t.content = t.content.replace(o[1], ""),
            t.due_date = o[2].due_date,
            t.date_string = o[2].date_string,
            t.date_lang = o[2].date_lang;
            break;
          case "project":
            this.highlight_project && (t.content = t.content.replace(o[1], ""),
            t.project_id = this.highlight_project[0],
            t.item_order = null ,
            t.indent = 1);
            break;
          case "person":
            this.highlight_person && (t.content = t.content.replace(o[1], ""),
            t.responsible_uid = this.highlight_person[0],
            t.inherit_asignee = !1)
          }
        r = {},
        c = e.ignored;
        for (n in c)
          s = c[n],
          0 === n.indexOf("@") && (r[n.replace("@", "")] = !0);
        return $keys(r).length > 0 && (t.labels_to_ignore = r),
        t.content = $strip(t.content.replace(/\s\s+/, " ")),
        t
      }
      ,
      e.prototype.attach = function(e, t) {
        var n, r, i;
        return a.clear_free_text_cache(),
        e.ignored = {},
        e.matches = {},
        e.initial_has_content = t,
        e.dateist_disabled = !1,
        this.highlight_project = null ,
        this.highlight_person = null ,
        this.re_project_matchers = null ,
        this.user_matcher_cache = {},
        this.generateProjectMatcher(),
        n = function(t) {
          return function(n, i) {
            var s, d, u, h, f, _, p, m, g, y, w, v, j;
            if (n = n.replace(/`/g, "'"),
            "t_link" === i && (t.truncate_links = !1),
            _ = l.getCaretOffsetWithin(e),
            l.setCaretPositionWithin(e, _.start),
            d = function(t) {
              return e.matches[t] && delete e.matches[t],
              e.ignored[t] = !0
            }
            ,
            "t_date" === i)
              for (m = c.is_spaceless_lang(window.DATEIST_LANG),
              p = a.split_text(n, window.DATEIST_LANG),
              u = 0,
              g = 0,
              w = p.length; g < w; g++) {
                for (h = p[g],
                s = "",
                j = p.slice(u),
                y = 0,
                v = j.length; y < v; y++)
                  f = j[y],
                  m ? s += f : s = s + " " + f,
                  s = c.trim(s),
                  d(s);
                u += 1
              }
            else
              "t_project" === i ? t.setCurrentProject(null ) : "t_person" === i && t.setCurrentPerson(null );
            return d(n),
            o.hide(),
            r(),
            !1
          }
        }(this),
        i = function(e, t) {
          var n, r;
          return null == t && (t = !1),
          n = e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&"),
          r = c.is_spaceless_lang(window.DATEIST_LANG),
          n = r ? "(^|\\s*)" + n : "(^|\\s+)" + n + "(?:$|(?=\\s+))",
          new RegExp(n,"gi")
        }
        ,
        r = function(r) {
          return function() {
            var a, c, l, u, _, p, m, g, y, w, v, j, b, I, $, A, S, C, T, k, D, E, x, P, M, N, L, R, U, O, V, B, H, F, G, q, z, Y, W;
            if (S = {},
            L = e.proxyGetValue(),
            L = L.replace(/\s/g, " "),
            D = L.match(r.re_priority),
            D && (N = $strip(D[0]),
            k = D[1],
            e.ignored[N] || (S[N] = ["priority", i(N), parseInt(k), N])),
            r.highlight_labels && (b = L.match(r.re_labels)))
              for (a = null ,
              o.current_input && (a = o.current_input.amicomplete_word || null ),
              V = 0,
              F = b.length; V < F; V++)
                j = b[V],
                j = $strip(j),
                a !== j && (C = d.getByName(j.replace("@", "").toLowerCase()),
                C.length > 0 && (e.ignored[j] || (S[j] = ["label", i(j), j, j])));
            if (p = !1,
            U = window.User,
            p = void 0 !== U.features.dateist_inline_disabled ? U.features.dateist_inline_disabled : U.dateist_inline_disabled,
            p || e.dateist_disabled || (_ = s.parse(L, null , !0, e.ignored),
            _ && _.due_date && (m = _.date_string_matched,
            0 === m.indexOf("@") || e.ignored[m] || (S[m] = ["date", i(m), _, m]))),
            r.truncate_links && (A = L.match(r.re_links)))
              for (B = 0,
              G = A.length; B < G; B++)
                $ = A[B],
                e.ignored[$] || (S[$] = ["link", i($), $, $]);
            if (r.re_project_matchers && L.match(/#[^\s]+/) && (l = r.genericPersonProjectMatcher(e, L, r.re_project_matchers),
            l && (r.highlight_project = l)),
            r.highlight_project && (z = r.highlight_project,
            x = z[0],
            T = z[1],
            S[T] = ["project", i(T), x, T]),
            L.match(/\+[^\s]+/) && (x = null ,
            r.highlight_project ? x = r.highlight_project[0] : (g = h.getCurrentEditor(),
            g && (x = g.project_id)),
            x && (E = f.get(x),
            E && E.shared && (O = r.generateUserMatcher(x),
            l = r.genericPersonProjectMatcher(e, L, O),
            l && (r.highlight_person = l)))),
            r.highlight_person && (Y = r.highlight_person,
            P = Y[0],
            T = Y[1],
            S[T] = ["person", i(T), P, T]),
            t = e.initial_has_content) {
              for (N in S)
                M = S[N],
                "date" === M[0] && (R = M[4] || M[3],
                e.ignored[R] = !0,
                delete S[N]);
              e.initial_has_content = !1
            }
            y = L,
            u = "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif";
            for (N in S)
              M = S[N],
              R = M[4] || M[3],
              v = "\u27e6img src='" + u + "' width='12' height='14' class='cmp_" + r.getIconType() + "_highlight_" + M[0] + "'\u27e7",
              w = M[3].replace(/'/g, "`"),
              y = y.replace(M[1], "$1\u27e6b id='" + w + "' class='t_" + M[0] + "'\u27e7" + v + "\u27e6span\u27e7" + R + "\u27e6/span\u27e7\u27e6/b\u27e7");
            for (t && (I = y.charAt(y.length - 1),
            "\u27e7" === I && (y += " ")),
            e.proxySetValue(y, !1),
            W = $all("b", null , e),
            H = 0,
            q = W.length; H < q; H++)
              c = W[H],
              c.onclick = c.ignore_match = $p(n, c.id, c.className);
            return e.matches = S
          }
        }(this),
        e.onchanged = r,
        e.cancelInput = function(e) {
          var t, n, r, o, i, s, a;
          if ((27 === e.keyAscii || 8 === e.keyAscii) && window.getSelection) {
            if (a = window.getSelection(),
            r = a.focusNode,
            r && "#text" === $nodeName(r) && (i = r.parentElement,
            i && (s = i.parentElement,
            s && "b" === $nodeName(s))))
              return s.ignore_match && s.ignore_match(),
              !0;
            if (r && 27 === e.keyAscii && (t = $gp(r, "div"),
            n = $all("b", null , t),
            o = $last(n),
            o && o.ignore_match && $hasClass(o, "t_date")))
              return o.ignore_match(),
              !0
          }
          return !1
        }
        ,
        $AEV(e, "keydown", function(e) {
          return !e.ctrl || 66 !== e.key && 73 !== e.key && 85 !== e.key || (e.preventDefault(),
          !1)
        })
      }
      ,
      e.prototype.getIconType = function() {
        return "theme_neutral" === m.theme ? "light" : m.icon_type
      }
      ,
      e.prototype.setCurrentProject = function(e, t) {
        var n, r;
        return t ? (this.highlight_person && this.setCurrentPerson(null ),
        this.highlight_project = [e, t]) : (e = null ,
        this.highlight_project = null ),
        n = h.current_form,
        n && (r = n.people_assigner,
        r && r.onProjectUpdated(e)),
        p.sendSignal("natural_language_project_updated", e)
      }
      ,
      e.prototype.setCurrentPerson = function(e, t) {
        return t ? this.highlight_person = [e, t] : this.highlight_person = null
      }
      ,
      e.prototype.re_special_chars = /([\+.?*+^$[\]\\(){}|_&-])/g,
      e.prototype.generateUserMatcher = function(e) {
        var t, n, r, o, s, a, c, d, l, u, h;
        if (!this.user_matcher_cache[e]) {
          for (s = [],
          h = i.getAll(e),
          l = 0,
          u = h.length; l < u; l++)
            d = h[l],
            a = d.full_name || d.email,
            a = $strip(a.replace(this.re_special_chars, "\\$1")),
            0 !== a.length && (c = [],
            c.push(a),
            n = a.split(" ")[0],
            o = a.split(" "),
            t = "",
            o.length > 1 && (r = o[1][0],
            t = n + "\\s" + r + "\\.?"),
            t !== a && t.length > 0 && c.push(t),
            n !== a && n.length > 0 && c.push(n),
            c.length > 0 && s.push([d.id, new RegExp("(?:^|\\s)\\+(?:" + c.join("|") + ")","i"), a]));
          this.user_matcher_cache[e] = s
        }
        return this.user_matcher_cache[e]
      }
      ,
      e.prototype.generateProjectMatcher = function() {
        var e, t, n, r, o, i;
        for (this.re_project_matchers = [],
        o = f.getAll(),
        i = [],
        n = 0,
        r = o.length; n < r; n++)
          t = o[n],
          e = t.name,
          e = $strip(e.replace(this.re_special_chars, "\\$1")),
          i.push(this.re_project_matchers.push([t.id, new RegExp("(?:^|\\s)#" + e,"i"), e]));
        return i
      }
      ,
      e.prototype.genericPersonProjectMatcher = function(e, t, n) {
        var r, o, i, s, a, c, d, l, u, h, f, _, p, m, g, y;
        for (i = [],
        a = {},
        c = {},
        p = 0,
        g = n.length; p < g; p++)
          f = n[p],
          h = f[0],
          _ = f[1],
          u = f[2],
          l = t.match(_),
          l && (d = $strip(l[0]),
          e.ignored[d] || (i.push([l.index, h, d]),
          a[l.index] && a[l.index] !== h ? c[l.index] = !0 : a[l.index] = h));
        for (s = [],
        m = 0,
        y = i.length; m < y; m++)
          o = i[m],
          c[o[0]] || s.push(o);
        return s.sort(function(e, t) {
          return t[0] - e[0]
        }),
        r = $first(s),
        r ? [r[1], r[2]] : null
      }
      ,
      e
    }(),
    window.NatrualLanguageParsing = new u,
    t.exports = window.NatrualLanguageParsing
  }
  , {
    "../../components/themes/.coffee.Themes.js": 113,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../project_editor/.coffee.ProjectEditorManager.js": 80
  }],
  104: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u;
    s = window.LibEdit,
    o = window.AmiComplete,
    r = e("../../models/.coffee.Storage.js").$storage,
    u = function(e) {
      var t, n, r;
      return e.className = "richtext_editor sel_richtext_editor",
      n = DIV(e),
      e.withPlaceholders ? n.placeholderText = d.genereate() : n.placeholderText = null ,
      n.contentEditable = !0,
      n.proxyFocus = function(e) {
        return null == e && (e = !1),
        setTimeout(function() {
          if (n.focus(),
          e)
            return s.setCaretPositionWithin(n, n.proxyGetValue().length)
        }, 50)
      }
      ,
      n.proxySelect = function() {
        var e, t;
        return e = document.createRange(),
        e.selectNodeContents(n),
        t = window.getSelection(),
        t.removeAllRanges(),
        t.addRange(e)
      }
      ,
      n.proxyGetValue = function() {
        var e;
        return e = n.innerText || n.textContent,
        e = e.replace(new RegExp(o.CHAR_FORCED_WHITESPACE,"g"), " ")
      }
      ,
      n.proxyPlaceCursor = function() {
        return s.placeCursor(n, n.proxyGetValue().length)
      }
      ,
      $AEV(n, ["keypress", "paste"], function(e) {
        return function(t) {
          var r, o;
          if (t.clipboardData)
            return t.preventDefault(),
            o = s.normalzieClipboardData(t.clipboardData.getData("text/plain")),
            !(o.indexOf("\n") !== -1 && n.onMultilinePaste && !n.onMultilinePaste(n, o)) && (document.execCommand("insertHTML", !1, o),
            n.onchanged(),
            !1);
          if (t.ctrl && t.key)
            return !0;
          if (e.timeout && clearTimeout(e.timeout),
          window.getSelection)
            try {
              if (r = window.getSelection().getRangeAt(0),
              !r.collapsed)
                return !0
            } catch (e) {}
          return e.timeout = setTimeout(n.onchanged, 0)
        }
      }(this)),
      t = null ,
      n.placeholderText && (r = function() {
        var e;
        if (e = n.innerText || n.textContent,
        "" === e) {
          if (!n.placeholder)
            return n.placeholder = SPAN({
              c: "rich_text_placeholder"
            }, n.placeholderText),
            $AEV(n.placeholder, "contextmenu", function() {
              return $remove(n.placeholder),
              n.proxyFocus()
            }),
            $addBefore(n.placeholder, n)
        } else if (n.placeholder)
          return $remove(n.placeholder),
          n.placeholder = null
      }
      ,
      t = function() {
        return n.placeholder_ta && clearTimeout(n.placeholder_ta),
        n.placeholder_ta = setTimeout(r, 0)
      }
      ,
      $AEV(n, "keyup", t)),
      n.proxySetValue = function(e, r, o) {
        var i, a;
        if (null == r && (r = !0),
        null == o && (o = !0),
        i = s.getSelectedNode(),
        void 0 === n.save_position && (n.save_position = !0),
        n.save_position && (a = s.getCaretOffsetWithin(n)),
        e = e.replace(/(?:^\s)|(?:\s$)/g, "&nbsp;"),
        e = e.replace(/\s\s/g, " &nbsp;"),
        e = e.replace(/</g, "&lt;"),
        e = e.replace(/>/g, "&gt;"),
        e = e.replace(/\u27e6/g, "<"),
        e = e.replace(/\u27e7/g, ">"),
        n.innerHTML = e,
        n.placeholderText && t && t(),
        o && n.save_position && s.setCaretPositionWithin(n, a.start),
        r && n.onchanged)
          return setTimeout(n.onchanged, 0)
      }
      ,
      $AEV(n, "focus", function() {
        return n.save_position = !0
      }),
      n
    }
    ,
    c = [_("Get pastries sun at 9") + " " + _("#Family"), _("Renew gym every May 1st") + " " + _("#Health"), _("Design meeting at 11am p1") + " " + _("#Meeting"), _("Learn Portuguese every 2 days") + " " + _("#Learning"), _("Buy gift tomorrow at 6pm p1") + " " + _("#Errands"), _("Read every day p3 @goals") + " " + _("#Learning"), _("Conference Wednesday at 15") + " " + _("#Meeting"), _("Family lunch on Sunday at 11am") + " " + _("#Personal")],
    a = 100,
    l = "WR_PlaceholderCount",
    i = "web_ph_natrual_text",
    d = {
      genereate: function() {
        var e, t;
        return e = this.increaseCount(),
        e >= a ? null : (t = Math.floor(Math.random() * c.length),
        _("e.g.") + " " + c[t])
      },
      increaseCount: function() {
        var e, t;
        return t = r(l).get(),
        null === t ? (this.restoreCountFromServer(),
        a) : (e = parseInt(t || 0),
        e += 1,
        r(l).set("" + e),
        e === a && this.markAsSeenGlobally(),
        e)
      },
      restoreCountFromServer: function() {
        var e;
        return e = $requestJSON("/API/v7/tooltips/is_seen"),
        e.addCallback(function(e) {
          return e.result ? r(l).set(a) : r(l).set("0")
        }),
        e.sendReq({
          name: i,
          token: window.User.token
        })
      },
      markAsSeenGlobally: function() {
        return $request("/API/v7/tooltips/mark_as_seen").sendReq({
          name: i,
          token: window.User.token
        })
      }
    },
    t.exports = u
  }
  , {
    "../../models/.coffee.Storage.js": 165
  }],
  105: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, S, C, T = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    , k = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
          return t;
      return -1
    }
    ;
    b = window.Signals,
    p = window.GB_showHTML,
    f = window.GB_hide,
    s = window.AmiComplete,
    i = window.AmiButton,
    o = window.Alerts,
    a = window.AmiTooltip,
    C = window.imageSprite,
    r = e("./../../models/.coffee.Storage.js").$storage,
    c = e("../avatars/.coffee.Avatars.js"),
    g = e("../project_editor/.coffee.ProjectEditorManager.js"),
    w = e("../project_selecter/.coffee.ProjectSelecter.js"),
    j = e("../promotion_overlay/.coffee.PromotionOverlay.js"),
    h = e("../formatter/Formatter.js"),
    v = e("../../models/.coffee.ProjectsModel.js"),
    y = e("../project_list/.coffee.ProjectListUtils.js"),
    d = e("../../models/.coffee.Collaborators.js"),
    v = e("../../models/.coffee.ProjectsModel.js"),
    u = e("../../stores/.es6.FeatureTipStore.js"),
    l = e("../../actions/.es6.FeatureTipActions.js"),
    I = "tab_collaborator",
    S = "tab_project",
    m = function() {
      function e() {
        this.promoRemove = T(this.promoRemove, this),
        this._promoShow = T(this._promoShow, this),
        this.promoCheck = T(this.promoCheck, this),
        this._checkEmpty = T(this._checkEmpty, this),
        this.render_intro_text = T(this.render_intro_text, this),
        this._renderAdder = T(this._renderAdder, this),
        this.renderUserRow = T(this.renderUserRow, this),
        this.renderCollaboratorTabBody = T(this.renderCollaboratorTabBody, this),
        this.renderCollaboratorSelector = T(this.renderCollaboratorSelector, this),
        this.renderProjectTabBody = T(this.renderProjectTabBody, this),
        this.switchTab = T(this.switchTab, this),
        this.renderView = T(this.renderView, this),
        this.show = T(this.show, this),
        this.refresh = T(this.refresh, this),
        this.holder = null ,
        this.view_data = null ,
        this.current_project = null ,
        this.current_tab = null ,
        this.selected_collaborators = [],
        b.connect("collaborators_states_updated", this.refresh)
      }
      return e.prototype.refresh = function() {
        if (this.current_project && this.holder)
          return "" !== this.adder_input.value ? void setTimeout(this.refresh, 500) : this.renderView(this.current_project)
      }
      ,
      e.prototype.show = function(e) {
        var t;
        return this.holder = DIV({
          c: "sharing_manager"
        }),
        this.view_data = DIV(),
        this.current_tab = I,
        $add(this.holder, this.view_data),
        $add(this.view_data, Indicator.imgSmall()),
        p(_("Share options"), this.holder, 400, 388, {
          callback_fn: function(e) {
            return function() {
              return s.hide(),
              e.current_project = null ,
              e.holder = null
            }
          }(this)
        }),
        t = v.get(e),
        t.team_inbox && $addClass(this.holder, "team_inbox_view"),
        t.inbox_project ? (alert(_("It's not possible to share the inbox project. Please share a regular project."), f),
        !1) : (this.current_project = t,
        this.renderView(),
        !1)
      }
      ,
      e.prototype.renderView = function() {
        "Render sharing view according to the @current_project and @current_tab data";
        var e, t, n, r, o;
        if (!this.current_project || !this.current_tab)
          throw Error("State @current_project, @current_tab must be set beforing rendering");
        return o = UL({
          c: "tab_nav"
        }),
        e = LI(_("Collaborators")),
        r = LI(_("Invite From Project")),
        $AEV(e, "click", function(e) {
          return function() {
            return e.switchTab(I)
          }
        }(this)),
        $AEV(r, "click", function(e) {
          return function() {
            return e.switchTab(S)
          }
        }(this)),
        $add(o, e, r),
        this.current_tab === I ? ($addClass(e, "active"),
        this.renderCollaboratorTabBody()) : ($addClass(r, "active"),
        this.renderProjectTabBody()),
        n = v.getAll().filter(function(e) {
          return function(t) {
            return t.shared && e.current_project.id !== t.id
          }
        }(this)),
        0 === n.length && $addClass(o, "hidden"),
        t = DIV(o, this.tab_body),
        $swap(this.view_data, t),
        this.view_data = t,
        this.adder_input.focus()
      }
      ,
      e.prototype.switchTab = function(e) {
        return this.current_tab = e,
        this.renderView()
      }
      ,
      e.prototype.renderProjectTabBody = function() {
        var e, t, n, r, o, i, s, a, c;
        if (r = v.getAll().filter(function(e) {
          return function(t) {
            return t.shared && e.current_project.id !== t.id
          }
        }(this)),
        0 === r.length)
          return void (this.tab_body = DIV({
            c: "blank_screen"
          }, _("You have no other shared projects.")));
        for (i = UL({
          c: "project_list"
        }),
        s = function(e) {
          return function(n) {
            return $AEV(t, "click", function() {
              var t;
              return t = e.renderCollaboratorSelector(n),
              $swap(e.tab_body, t),
              e.tab_body = t
            })
          }
        }(this),
        a = 0,
        c = r.length; a < c; a++)
          o = r[a],
          n = o.name.replace(/\*\s*/, ""),
          n = h.formatSimple(n, {
            only_text: !0,
            as_html: !1
          }),
          e = 0 !== o.id ? y.createColor(o) : SPAN({
            c: "blank_color"
          }),
          t = LI(e, SPAN({
            c: "project_name"
          }, n)),
          s(o),
          $add(i, t);
        return this.tab_body = i
      }
      ,
      e.prototype.renderCollaboratorSelector = function(e) {
        var t, n, r, o, s, a, l, u, f, p, m, g, w, v, j, b, $, A, T, D, E, x, M, N, L, R;
        for (g = DIV({
          c: "collaborator_selector"
        }),
        b = e.name.replace(/\*\s*/, ""),
        b = h.formatSimple(b, {
          only_text: !0,
          as_html: !1
        }),
        p = 0 !== e.id ? y.createColor(e) : SPAN({
          c: "blank_color"
        }),
        o = DIV({
          c: "back_to_list_link"
        }, r = C("cmp_open_arrow_left", 10, 10), SPAN({
          c: "project_name"
        }, p, b)),
        $AEV(r, "click", function(e) {
          return function() {
            return e.switchTab(S)
          }
        }(this)),
        $add(g, o),
        f = UL({
          c: "collaborator_list selectable"
        }),
        A = [],
        v = function() {
          var e, t, n, r;
          for (n = d.getInvitedUsers(this.current_project.id),
          r = [],
          e = 0,
          t = n.length; e < t; e++)
            a = n[e],
            r.push(a.id);
          return r
        }
        .call(this),
        t = function() {
          var e, t, n, r;
          for (n = d.getActiveUsers(this.current_project.id),
          r = [],
          e = 0,
          t = n.length; e < t; e++)
            a = n[e],
            r.push(a.id);
          return r
        }
        .call(this),
        x = d.getAll(e.id),
        D = 0,
        E = x.length; D < E; D++)
          u = x[D],
          u.id !== window.User.id && (n = c.renderAvatar(u, "small"),
          T = SPAN({
            c: "user_info"
          }, B(u.full_name)),
          M = u.id,
          k.call(v, M) >= 0 && $add(T, SPAN({
            c: "status pending"
          }, _("Pending"))),
          N = u.id,
          k.call(t, N) >= 0 && $add(T, SPAN({
            c: "status pending"
          }, _("Collaborator"))),
          $add(T, BR(), u.email),
          l = SPAN({
            c: "check_box"
          }, C("cmp_checkmark_white", 15, 15)),
          j = LI({
            c: "collaborator_list_item"
          }, l, n, T),
          j.collaborator = u,
          L = u.id,
          k.call(v, L) >= 0 || (R = u.id,
          k.call(t, R) >= 0) ? $addClass(j, "is_unselectable") : (A.push(j),
          function(e) {
            return $AEV(e, "click", function() {
              return $hasClass(e, "is_selected") ? $removeClass(e, "is_selected") : $addClass(e, "is_selected"),
              $()
            })
          }(j)),
          $add(f, j));
        return $add(g, f),
        A.length > 0 && (m = function() {
          return A.filter(function(e) {
            return $hasClass(e, "is_selected")
          }).length === A.length
        }
        ,
        s = LI({
          c: "batch_selector"
        }, SPAN({
          c: "check_box"
        }, C("cmp_checkmark_white", 15, 15)), P({
          c: "select_all"
        }, _("Select All"))),
        $AEV(s, "click", function() {
          var e, t, n, r, o;
          if (m())
            for (t = 0,
            r = A.length; t < r; t++)
              e = A[t],
              $removeClass(e, "is_selected");
          else
            for (n = 0,
            o = A.length; n < o; n++)
              e = A[n],
              $addClass(e, "is_selected");
          return $()
        }),
        $ = function() {
          return m() ? $addClass(s, "has_all_selected") : $removeClass(s, "has_all_selected")
        }
        ,
        $addToTop(f, s),
        w = i.createButton(_("Invite")),
        $addClass(w, "amibutton_red"),
        $AEV(w, "click", function(e) {
          return function() {
            var t, n, r, o;
            for (o = $$(".collaborator_list_item.is_selected"),
            n = 0,
            r = o.length; n < r; n++)
              t = o[n],
              d.addInvite(e.current_project.id, t.collaborator.email);
            return e.switchTab(I)
          }
        }(this)),
        $add(g, w)),
        g
      }
      ,
      e.prototype.renderCollaboratorTabBody = function() {
        var e, t, n, r, o, i, s, a, c, l, u, h, f;
        if (this.tab_body = DIV({
          c: "collaborator_tab_body"
        }),
        e = d.getActiveUsers(this.current_project.id),
        i = d.getInvitedUsers(this.current_project.id),
        0 === e.length && 0 === i.length)
          return o = this.render_intro_text(),
          t = this._renderAdder(),
          void $add(this.tab_body, t, o);
        for (r = UL({
          c: "collaborator_list"
        }),
        h = this._sort(i),
        a = 0,
        l = h.length; a < l; a++)
          s = h[a],
          n = {},
          $update(n, s),
          n.state = "pending",
          $add(r, this.renderUserRow(n));
        for ($add(r, this.renderUserRow(window.User)),
        f = this._sort(e),
        c = 0,
        u = f.length; c < u; c++)
          s = f[c],
          s.id !== window.User.id && $add(r, this.renderUserRow(s));
        return t = this._renderAdder(),
        $add(this.tab_body, t, r)
      }
      ,
      e.prototype.renderUserRow = function(e) {
        var t, n, r, i, s, l;
        return s = LI({
          c: "collaborator_list_item"
        }),
        l = SPAN({
          c: "user_info"
        }),
        $ATT(s, c.renderAvatar(e, "small")),
        $ATT(s, l),
        n = e.full_name || e.user_full_name,
        e.id === window.User.id && (n = _("Me")),
        n ? $add(l, SPAN(t = B(n), BR(), e.email)) : $add(l, SPAN(t = B(e.email))),
        "pending" === e.state && $add(t, SPAN({
          c: "status pending"
        }, _("Pending"))),
        e.id === window.User.id || this.current_project.team_inbox || ($add(s, r = A({
          href: "#",
          c: "delete"
        }, C("cmp_trash", 16, 16))),
        a.showSimpleText(r, _("Remove collaborator")),
        $AEV(r, "click", function(t) {
          return function() {
            var r;
            return r = _('Are you sure you want to remove "%s"?'),
            r = r.replace("%s", n || e.email),
            o.confirm(r, function(n) {
              if (n)
                return $remove(s),
                d.deleteFromProject(t.current_project.id, e)
            }),
            !1
          }
        }(this))),
        e.id !== window.User.id || this.current_project.team_inbox || ($add(s, i = A({
          href: "#",
          c: "leave_channel"
        }, C("cmp_door_exit", 16, 16))),
        a.showSimpleText(i, _("Leave this project")),
        $AEV(i, "click", function(e) {
          return function() {
            var t;
            return t = _("Are you sure you want to leave this project?") + " " + _("This will delete it from your account."),
            o.confirm(t, function(t) {
              if (t)
                return d.deleteFromProject(e.current_project.id, window.User),
                v.deleteFromModel(e.current_project.id),
                f(),
                g.reset(),
                !1
            }),
            !1
          }
        }(this))),
        s
      }
      ,
      e.prototype._renderAdder = function() {
        var e, t, n, r, o;
        return r = i.createButton(_("Invite")),
        $addClass(r, "amibutton_red"),
        this.adder_input = e = INPUT({
          type: "text",
          placeholder: _("Email or Name"),
          c: "input_email text_box"
        }),
        n = DIV({
          c: "invite_adder"
        }, e, r),
        o = function(t) {
          return function() {
            var n, r, o, i, s, a, c, l, u, h;
            for (i = e.value,
            i = $trim(i),
            i.indexOf(" ") !== -1 && i.indexOf("<") === -1 && (i = i.replace(/\s+/g, ",")),
            h = i.split(/[,;]/),
            a = 0,
            l = h.length; a < l; a++)
              if (o = h[a],
              o = $trim(o),
              0 !== o.length) {
                if (o.indexOf("@") === -1)
                  return alert(_("Email isn't valid") + ": " + $escape(o)),
                  !1;
                for (r = d.getAll(t.current_project.id),
                c = 0,
                u = r.length; c < u; c++)
                  if (n = r[c],
                  n.email === o)
                    return alert(_("User is already part of the project") + ": " + $escape(o)),
                    !1;
                if (window.User.is_premium) {
                  if (s = window.User.share_limit || 26,
                  r.length >= s)
                    return alert(DIV(B(_("Collaboration limit reached")), P(_("Unfortunately, you've reached the limit of 25 collaborators per project.")), P(_("Need more? Get in touch"), " ", A({
                      href: "mailto:support@todoist.com"
                    }, "support@todoist.com")))),
                    !1
                } else if (s = 6,
                r.length >= s)
                  return j.show(_("Collaboration limit reached"), _("You've reached the free limit of 5 collaborators per project. With Todoist Premium you can share with up to 25 people per project!")),
                  !1;
                d.addInvite(t.current_project.id, o)
              }
            return t.renderView(),
            e.value = "",
            !1
          }
        }(this),
        $AEV(r, "click", o),
        t = {
          collection: function() {
            var e, t, n, r, o, i, s, a;
            for (o = {},
            r = [],
            a = $values(d.collaborators),
            i = 0,
            s = a.length; i < s; i++)
              n = a[i],
              n.id !== window.User.id && (o[n.email] || (o[n.email] = !0,
              t = n.full_name + " " + n.email,
              e = {
                name: t,
                email: n.email,
                avatar_small: n.avatar_small
              },
              r.push(e)));
            return r
          },
          filterItem: function(e, t) {
            var n, r;
            return r = $setHTML(SPAN({
              c: "name_email"
            }), t),
            n = c.renderAvatar(e, "small"),
            DIV({
              c: "amicomplete_entry"
            }, n, r)
          },
          onSelect: function(e) {
            return e.email
          },
          onNoMatches: function() {
            return s.hide(),
            !1
          },
          onPreProcess: function(e, t) {
            return 0 === e.length ? [] : t
          },
          wildcard_match: !0,
          require_trigger: !1,
          whole_input_match: !0,
          extra_width: 1
        },
        s.attach(e, t),
        $AEV(e, "keydown", function(e) {
          return 13 !== e.keyAscii || !s.shown() && o()
        }),
        n
      }
      ,
      e.prototype.render_intro_text = function() {
        var e, t, n, r;
        return e = _("The people you invite will be able to add, delete and complete tasks from '%s'.").replace("%s", this.current_project.name),
        t = _("You will get notified when changes happen."),
        n = A({
          href: "/Help/Sharing",
          target: "_blank"
        }, _("Learn more...")),
        r = DIV({
          c: "blank_screen"
        }, H2(_("Collaborate with others")), e, BR(), BR(), t, BR(), BR(), n)
      }
      ,
      e.prototype._checkEmpty = function(e) {
        var t, n;
        return n = $all("div", "user_info", this.holder),
        t = null ,
        "owner" !== e.user_role && (t = A({
          href: "#"
        }, _("Leave this project")),
        $AEV(t, "click", function(e) {
          return function() {
            var t;
            return t = _("Are you sure you want to leave this project?") + " " + _("This will delete it from your account."),
            o.confirm(t, function(t) {
              if (t)
                return d.deleteFromProject(e.current_project.id, window.User),
                v.deleteFromModel(e.current_project.id),
                f(),
                g.reset(),
                !1
            }),
            !1
          }
        }(this))),
        $add(this.holder, DIV({
          c: "desc"
        }, t))
      }
      ,
      e.prototype._sort = function(e) {
        var t, n, r;
        for (n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          t.full_name ? t.name = t.full_name.toLowerCase() : t.name = t.email.toLowerCase();
        return e = e.sort(function(e, t) {
          return e.name.localeCompare(t.name)
        })
      }
      ,
      e.prototype.promoCheck = function() {
        if (!(window.User.karma < 200))
          return !u.hasSeen(u.FNAME_SHARING) && $isShown($("all_holder")) ? (l.markAsSeen(u.FNAME_SHARING),
          this._promoShow()) : void 0
      }
      ,
      e.prototype._promoShow = function() {
        var e, t, n;
        if (!$("blank_state_sharing"))
          return this.promo_shown = !0,
          e = DIV({
            id: "blank_state_sharing"
          }, _("Share projects, assign tasks, discuss in real-time, and get notified when changes are made. Todoist lets you collaborate from any web-enabled device.")),
          t = {},
          n = $all("img", "cmp_share_project", null , !0),
          n || (n = $all("img", "cmp_share_project_plus", null , !0)),
          n ? (t = {
            fn_left_offset: function(e, t) {
              return $position(n).x - t.width + 40
            },
            fn_arrow_left: function() {
              return $position(n).x + 5
            },
            fn_top_offset: function() {
              return $position(n).y + 30
            },
            fixed_pos: !0
          },
          this.tipwin = TooptipWin.show(_("Collaborate with others"), e, 300, 350, t),
          $fx.fadeIn(e)) : void 0
      }
      ,
      e.prototype.promoRemove = function() {
        return this.promo_shown = !1,
        this.tipwin && this.tipwin.hide(),
        !1
      }
      ,
      e
    }(),
    window.SharingManager = new m,
    t.exports = window.SharingManager
  }
  , {
    "../../actions/.es6.FeatureTipActions.js": 3,
    "../../models/.coffee.Collaborators.js": 146,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../stores/.es6.FeatureTipStore.js": 183,
    "../avatars/.coffee.Avatars.js": 21,
    "../formatter/Formatter.js": 38,
    "../project_editor/.coffee.ProjectEditorManager.js": 80,
    "../project_list/.coffee.ProjectListUtils.js": 87,
    "../project_selecter/.coffee.ProjectSelecter.js": 88,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90,
    "./../../models/.coffee.Storage.js": 165
  }],
  106: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = e("../../models/.coffee.ProjectsModel.js"),
    i = e("../../models/.coffee.ItemsModel.js"),
    a = e("../../models/.coffee.QueriesItems.js"),
    r = e("../completed_history/.coffee.CompletedQuickVisualize.js"),
    o = function() {
      function e() {
        this.hide = c(this.hide, this),
        this.show = c(this.show, this)
      }
      return e.prototype.renderHolder = function() {
        return DIV({
          id: "quick_day_show"
        })
      }
      ,
      e.prototype.show = function(e) {
        var t, n, o, c, d, l, u, h, f, p, m;
        for (n = a.getByDate(e, i.getAllOwn()),
        u = 0 === n.length ? _("No tasks due") : 1 === n.length ? _("1 task due") : _("%s tasks due").replace("%s", n.length),
        d = DIV({
          c: "project_bar"
        }),
        c = [],
        h = 0,
        p = n.length; h < p; h++)
          t = n[h],
          l = s.get(t.project_id),
          l && (o = r.getProjectColor(l, 8),
          c.push([l.color, o]));
        for (c.sort(function(e, t) {
          return e[0] - t[0]
        }),
        f = 0,
        m = c.length; f < m; f++)
          o = c[f],
          $add(d, o[1]);
        return DIV({
          c: "project_bar_holder"
        }, u, CENTER(d))
      }
      ,
      e.prototype.hide = function() {
        return $replace($("quick_day_show"), null )
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.QueriesItems.js": 161,
    "../completed_history/.coffee.CompletedQuickVisualize.js": 24
  }],
  107: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = window.AmiTooltip,
    d = window.MiniCal,
    i = window.Dateist,
    s = window.DateistDateHelpers,
    o = window.DateUtils,
    u = window.Signals,
    m = window.imageSprite,
    c = e("../../models/.coffee.ItemsModel.js"),
    p = e("../../models/.coffee.UtilModels.js"),
    l = e("../minical_ext/.coffee.MiniCalExt.js"),
    h = e("../../models/.es6.SmartSchedule.js"),
    f = e("../../stores/.es6.SystemStatusStore.js"),
    a = function() {
      function e() {
        this.daysToAdd = g(this.daysToAdd, this),
        this.genAISchedulerIcon = g(this.genAISchedulerIcon, this),
        this.getPostponeIcon = g(this.getPostponeIcon, this),
        this.genDate = g(this.genDate, this),
        this.genIcon = g(this.genIcon, this),
        this.create = g(this.create, this)
      }
      return e.prototype.create = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h, f;
        return null == t && (t = {}),
        i = t.with_help_text === !0,
        u = t.with_smart_schedule === !0,
        h = t.with_today === !0,
        f = t.with_tomorrow === !0,
        c = t.with_next_week === !0,
        l = t.with_postpone === !0,
        s = t.with_month === !0,
        d = t.with_no_date === !0,
        a = t.with_more === !0,
        r = DIV({
          c: "scheduler_holder"
        }),
        i && $add(r, SPAN({
          c: "desc"
        }, _("Schedule"))),
        o = DIV({
          c: "icon_list"
        }),
        $add(r, o),
        !u || !t.items || t.items instanceof Array || $add(o, this.genAISchedulerIcon(t.items, e, t.onHover)),
        h && $add(o, this.genIcon("today", e, t.onHover, _("Today"))),
        f && $add(o, this.genIcon("tomorrow", e, t.onHover, _("Tomorrow"))),
        l && t.items && (t.items instanceof Array && 1 === t.items.length && (t.items = t.items[0]),
        n = t.items instanceof Array ? t.on_postpone_click : e,
        $add(o, this.getPostponeIcon(t.items, n, t.onHover))),
        c && $add(o, this.genIcon("next_week", e, t.onHover, _("Next week"))),
        s && $add(o, this.genIcon("month", e, t.onHover, _("In 1 month"))),
        d && $add(o, this.genIcon("no_date", e, t.onHover, _("No due date"))),
        a && $add(o, this.genIcon("more", $p(this.moreClick, e), t.onHover, _("More"))),
        r
      }
      ,
      e.prototype.moreClick = function(e, t, n) {
        var o;
        return r.hide(),
        d.reset(),
        d.offset_x = -82,
        d.offset_y = -40,
        d.arrow_left = !1,
        d.close_fn_eval = function() {
          return !0
        }
        ,
        d.show_recurring_help = !1,
        d.with_arrow_top = !1,
        o = {
          with_today: !0,
          with_tomorrow: !0,
          with_next_week: !0,
          with_month: !0,
          with_no_date: !0
        },
        l.create(n, function(t) {
          return e(t),
          d.remove(),
          !1
        }, o),
        !1
      }
      ,
      e.prototype.genIcon = function(e, t, n, o) {
        var i, s, a, c;
        return i = e,
        "no_date" === e && (i = "today"),
        a = m("cmp_scheduler_" + i, 26, 26),
        c = A({
          href: "#",
          c: "icon_scheduler"
        }, a),
        "today" !== e && "no_date" !== e || (s = "no_date" === e ? "X" : "" + (new Date).getDate(),
        $add(c, SPAN(s)),
        1 === s.length && $addClass(c, "one_digit"),
        $addClass(c, "today_icon")),
        "more" === e && $addClass(c, "icon_more"),
        $AEV(c, ["click", "touchstart"], function(n) {
          return function() {
            return "more" !== e && u.sendSignal("hide_editor_menu"),
            r.hide(),
            t(n.genDate(e), c),
            !1
          }
        }(this)),
        n && $AEV(c, "mouseover", function(t) {
          return function() {
            if ("more" !== e)
              return n(t.genDate(e)),
              !1
          }
        }(this)),
        r.showSimpleText(c, o, null , -5, 12),
        c
      }
      ,
      e.prototype.genDate = function(e) {
        var t;
        return "today" === e ? i.parse("today").due_date : "tomorrow" === e ? i.parse("tomorrow").due_date : "next_week" === e ? (t = this.daysToAdd(),
        i.parse("+" + t + " days").due_date) : "month" === e ? i.parse("+1 month").due_date : "no_date" === e ? null : void 0
      }
      ,
      e.prototype.getPostponeIcon = function(e, t, n) {
        "@param {(Items|Items[])} items";
        var a, c, d, l, h, f, g, y;
        return d = A({
          href: "#",
          c: "icon_scheduler icon_postpone"
        }, m("cmp_scheduler_next_occurrence", 26, 26)),
        c = function(e) {
          var t, n, r, a, c, d, l;
          try {
            d = !0,
            l = p.getNewDate(e, d),
            c = l[0],
            t = l[1],
            n = l[2]
          } catch (e) {
            a = e,
            c = i.parse("tomorrow").due_date,
            r = s.day_diff(new Date, c),
            n = o.humanizeDayDiff(r, c)
          }
          return [c, n]
        }
        ,
        l = e instanceof Array,
        l ? (f = e.map(function(e) {
          return c(e)[0]
        }),
        $AEV(d, ["click", "touchstart"], function() {
          return r.hide(),
          u.sendSignal("hide_editor_menu"),
          t(f),
          !1
        }),
        n && $AEV(d, "mouseover", function() {
          return n(f)
        }),
        g = SPAN(_("Postpone")),
        r.showSimpleText(d, g, null , -5, 12),
        d) : (y = c(e),
        h = y[0],
        a = y[1],
        $AEV(d, ["click", "touchstart"], function() {
          return r.hide(),
          u.sendSignal("hide_editor_menu"),
          t(h),
          !1
        }),
        n && $AEV(d, "mouseover", function() {
          return n(h)
        }),
        g = SPAN(_("Postpone to"), " ", B(a)),
        r.showSimpleText(d, g, null , -5, 12),
        d)
      }
      ,
      e.prototype.genAISchedulerIcon = function(e, t, n) {
        var i, a, c, d, l;
        return a = A({
          c: "ai_scheduler"
        }, IMG({
          c: "spin_loader",
          src: "static/images/firework_loader.gif"
        }), c = SPAN({
          c: "predicted_date"
        }, m("cmp_ai_circle", 26, 26), d = SPAN({
          c: "date_text"
        })), i = SPAN({
          c: "error_icon"
        }, m("cmp_triangle_warning", 24, 22))),
        f.isOffline() ? (l = _("Smart Schedule requires an Internet connection"),
        r.showSimpleText(a, l, null , -5, 12),
        $addClass(a, "has_error"),
        n && $AEV(a, ["mouseover"], function() {
          return n(null )
        }),
        a) : (h.predictItemDuedate(e, function(e, i) {
          var c, u;
          return i ? (l = _("No suggestions available"),
          r.showSimpleText(a, l, null , -5, 12),
          $addClass(a, "has_error"),
          void (n && $AEV(a, ["mouseover"], function() {
            return n(null )
          }))) : (e = s.date_max(e),
          c = s.day_diff(new Date, e),
          u = o.humanizeDayDiff(c, e),
          l = DIV(_("Suggested date: "), B(u)),
          r.showSimpleText(a, l, null , -5, 12),
          d.textContent = e.getDate(),
          $addClass(a, "has_result"),
          $AEV(a, ["click", "touchstart"], function() {
            return r.hide(),
            t(e)
          }),
          n ? $AEV(a, ["mouseover"], function() {
            return n(e)
          }) : void 0)
        }),
        a)
      }
      ,
      e.prototype.daysToAdd = function() {
        var e, t, n, r, o, i, a;
        return o = new Date,
        a = s.iso_day(o),
        i = window.Settings.START_DAY,
        r = window.Settings.NEXT_WEEK,
        n = i - a,
        n <= 0 && (n += 7),
        e = r - i,
        e < 0 && (e += 7),
        t = n + e
      }
      ,
      e
    }(),
    t.exports = new a
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.UtilModels.js": 172,
    "../../models/.es6.SmartSchedule.js": 174,
    "../../stores/.es6.SystemStatusStore.js": 184,
    "../minical_ext/.coffee.MiniCalExt.js": 63
  }],
  108: [function(e, t, n) {
    var r = e("../generic_manager/GenericManagerUtils.js")
      , o = Class({
      current_replacer: null ,
      init: function(e, t) {
        this.li_items = e,
        this.controller = t,
        this.set_indent = !0,
        this.start_x = 0,
        this.current_indent = 0,
        this.indent_level = "ProjectList" == t.name && 22 || 28,
        this.max_indent = "ProjectList" == t.name && 3 || 5,
        $bindMethods(this)
      },
      onStart: function() {
        var e = this
          , t = ICE.$dnd.current_root
          , n = ICE.$dnd.current_handler
          , o = $position(t)
          , i = o.y
          , s = this.current_replacer = LI();
        ICE.$dnd.current_replacer = s;
        var a = (t.json.indent - 1) * this.indent_level
          , c = $hasClass($body(), "mini_version");
        $parent(t, "div", "left_menu") && (n._kws.position_filter = function(e) {
          return c ? e : (e.x -= parseInt($getStyle($("all_holder"), "marginLeft")),
          e)
        }
        ),
        this.set_indent && (n._kws.move_filter = function(n, r) {
          0 === e.start_x && (e.start_x = $position(t).x - a);
          var o = $position(t).x - e.start_x
            , i = e.current_indent
            , c = e.indent_level;
          if (o <= 10 ? i = 0 : o >= 1 * c - 10 && o <= 1 * c + 10 ? i = 1 : o >= 3 * c - 10 && o <= 3 * c + 10 ? i = 2 : o >= 4 * c - 10 && o <= 4 * c + 10 ? i = 3 : o >= 4 * c - 10 && o <= 4 * c + 10 ? i = 4 : o >= 5 * c - 10 && o <= 5 * c + 10 && (i = 5),
          i > e.max_indent && (i = e.max_indent),
          i != e.current_indent) {
            for (var d = s.previousSibling; ; ) {
              if (!d)
                break;
              {
                if (d.json && d != t && !$isHidden(d) && !$hasClass(d, "manager") && !$hasClass(d, "reorder_item"))
                  break;
                d = d.previousSibling
              }
            }
            if (d) {
              var o = d.json.indent - 1 - i;
              o < -1 && (i = d.json.indent)
            } else
              i = 0;
            $setStyle(s, "marginLeft", i * e.indent_level + "px"),
            e.current_indent = i
          }
          return [n, r]
        }
        ),
        this.set_indent && ($setStyle(s, "marginLeft", a + "px"),
        this.current_indent = t.json.indent - 1,
        this.cur_child = r.getChildren(t)),
        this.cur_child = this.cur_child || [],
        ICE.$dnd.cur_child = this.cur_child,
        $map(this.cur_child, function(e) {
          $hide(e)
        }),
        $setClass(s, t.className),
        $addClass(s, "drop_item"),
        $removeClass(s, "current"),
        $addClass(t, "on_drag");
        var d = 0;
        $hasClass(t, "task_item") || (d = 1),
        $setHeight(s, t.offsetHeight - d),
        $setOpacity(t, .5),
        setTimeout(function() {
          $setTop(t, i),
          t.style.position = "absolute",
          $addAfter(s, t),
          $setWidth(t, s.offsetWidth)
        }, 1)
      },
      onDrag: function() {
        var e = ICE.$dnd.current_root
          , t = this.current_replacer;
        $map(this.li_items, function(n) {
          if (n != e) {
            var r = n.offsetTop
              , o = r + n.offsetHeight / 2
              , i = e.offsetTop
              , s = i + e.offsetHeight;
            if (s > o && i < r) {
              for (; n.nextSibling && "none" == n.nextSibling.style.display; )
                n = n.nextSibling;
              $addAfter(t, n)
            } else
              i < o && i > r && $addBefore(t, n)
          }
        })
      },
      onEnd: function() {
        var e = this
          , t = ICE.$dnd.current_root
          , n = this.current_replacer;
        if ($removeClass(t, "on_drag"),
        $setOpacity(t, 1),
        t.style.position = "",
        t.style.left = "",
        t.style.width = "",
        this.set_indent) {
          var o = this.current_indent + 1;
          if (o > 5 && (o = 5),
          o != t.json.indent) {
            var i = o - t.json.indent;
            r.setIndent(t, o),
            $map(this.cur_child, function(t) {
              var n = t.json.indent + i;
              n > e.max_indent && (n = e.max_indent),
              r.setIndent(t, n)
            })
          }
        }
        try {
          $addBefore(t, n)
        } catch (e) {}
        $remove($$("li.drop_item"));
        var s = this.controller.name || this.controller.list_class
          , a = "ProjectList" == s || "ProjectEditor" == s;
        if (a && r.normalizeIndent(t, t),
        ICE.$dnd.removeDragAble(t),
        this.current_replacer = null ,
        ICE.$dnd.current_replacer = null ,
        this.cur_child)
          return $rmap(this.cur_child, function(e) {
            $addAfter(e, t)
          }),
          r.showHideChildren(this.cur_child, t),
          ICE.$dnd.cur_child = this.cur_child = null ,
          !1
      }
    });
    t.exports = o
  }
  , {
    "../generic_manager/GenericManagerUtils.js": 42
  }],
  109: [function(e, t, n) {
    var r = e("../agenda/.coffee.AgendaUtils.js")
      , o = e("../loading/Loading.js")
      , i = e("../project_list/.coffee.ProjectListUtils.js")
      , s = e("../location_manager/LocationManager.js")
      , a = e("../../models/.coffee.ItemsModel.js")
      , c = e("../../models/.coffee.ProjectsModel.js")
      , d = !0;
    n.show = function() {
      var e = s.getHash();
      if (e && d && "start" != e && e.indexOf("utm_source") == -1)
        return s.updateView(e, !0),
        d = !1,
        o.hide(),
        !0;
      var t = 0 === a.getAll().length;
      return t ? i.setCurrentById(window.User.inbox_project) : (l(),
      s.updateLocation("start")),
      o.hide(),
      !1
    }
    ;
    var l = n.queryStart = function() {
      var e = window.Settings && window.Settings.START_PAGE || "";
      if ("_info_page" == e && (e = "overdue, 7 days"),
      0 === e.indexOf("_project_")) {
        var t = parseInt(e.replace("_project_", ""));
        c.get(t) && i.setCurrentById(t)
      } else
        "_blank" != e ? r.query(e) : (r.reset(),
        $replace($("editor"), null ))
    }
    ;
    n.get = function() {
      var e, t = window.Settings && window.Settings.START_PAGE || "";
      if (e = t.match(/_project_(\d+)/)) {
        var n = parseInt(e[1])
          , r = c.get(n);
        return r ? r.name : "Project"
      }
      return "_blank" == t ? "blank" : t
    }
  }
  , {
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../agenda/.coffee.AgendaUtils.js": 12,
    "../loading/Loading.js": 59,
    "../location_manager/LocationManager.js": 62,
    "../project_list/.coffee.ProjectListUtils.js": 87
  }],
  110: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f;
    h = window.Signals,
    o = window.AmiButton,
    c = window.Indicator,
    r = window.Alerts,
    s = window.GB_showHTML,
    f = e("../../models/.coffee.SyncEngine.js"),
    d = e("../../models/.coffee.ItemsModel.js"),
    u = e("../../models/.coffee.ProjectsModel.js"),
    l = e("../../models/.coffee.LabelsModel.js"),
    i = e("../../models/.coffee.FiltersModel.js"),
    a = function() {
      function e() {
        h.connect("sync_state_changed", function(e) {
          return function() {
            var t;
            if (e.ul)
              return t = f.getSyncState(),
              t === f.sync_states.syncing ? ($replace(e.ul, LI("...")),
              $setVisibility(e.btn_retry, !1),
              $show(e.indicator)) : (e.generateListReport(e.ul),
              $setVisibility(e.btn_retry, !0),
              $hide(e.indicator))
          }
        }(this))
      }
      return e.prototype.show = function() {
        var e, t, n;
        return this.btn_retry = o.createButton(_("Try to sync again"), null , "red"),
        e = o.createButton(_("Discard failed updates"), null ),
        n = DIV({
          c: "sync_report"
        }, DIV(_("Your updates couldn't be synced with Todoist's servers. Please wait a few minutes and try again."), DIV({
          c: "small_separator"
        }), this.indicator = c.imgSmall(), this.btn_retry, DIV({
          c: "separator"
        }), _("Detailed log"), ":", DIV({
          c: "small_separator"
        }), this.ul = UL({
          c: "sync_error_text",
          name: "body"
        })), DIV({
          c: "separator"
        }), DIV(SPAN({
          c: "desc"
        }, _("Discarding will restore your sync, but your updates mentioned above will be lost")), DIV({
          c: "small_separator"
        }), e), DIV({
          c: "separator"
        })),
        $hide(this.indicator),
        this.generateListReport(this.ul),
        $AEV(this.btn_retry, "click", function() {
          return f.sync(null , !0, !0),
          !1
        }),
        $AEV(e, "click", function() {
          return r.confirmYesNo(_("Are you sure you want to discard your sync updates?"), function(e) {
            if (e)
              return f.sync_queue.clear(),
              h.sendSignal("clear_local_data"),
              window.location.reload()
          }),
          !1
        }),
        t = DIV({
          c: "sync_error_handler"
        }, n),
        s(_("Sync issues"), t, 300, 550, function(e) {
          return function() {
            return e.ul = null
          }
        }(this))
      }
      ,
      e.prototype.generateListReport = function(e, t) {
        var n, r, o, s, a, c, h, p, m, g, y, w, v, j;
        for (null == t && (t = !1),
        $replace(e, null ),
        s = function(e) {
          var t, n;
          if (n = d.getById(e.id),
          t = (null != n ? n.content : void 0) || e.content)
            return $trim(t, 75)
        }
        ,
        c = function(e) {
          var t, n;
          if (n = u.get(e.id),
          t = (null != n ? n.name : void 0) || e.name)
            return $trim(t, 75)
        }
        ,
        a = function(e) {
          var t, n;
          if (t = l.getById(e.id),
          n = (null != t ? t.name : void 0) || e.name)
            return $trim(n, 75)
        }
        ,
        o = function(e) {
          var t, n;
          if (t = i.get(e.id),
          n = (null != t ? t.name : void 0) || t.name)
            return $trim(n, 75)
        }
        ,
        r = 0,
        g = {},
        t || ($add(e, LI({
          c: "full_log"
        }, h = A({
          href: "#"
        }, _("Show full log")))),
        $AEV(h, "click", function(t) {
          return function() {
            return t.generateListReport(e, !0),
            !1
          }
        }(this))),
        j = f.sync_queue.get(),
        w = 0,
        v = j.length; w < v; w++)
          if (n = j[w],
          n.last_error) {
            if (r++,
            m = "" + n.type + "-" + n.args.id + "-" + n.last_error.error_code,
            g[m])
              continue;g[m] = !0,
            y = null ;
            try {
              n.type.indexOf("item_") !== -1 ? y = s(n.args) : n.type.indexOf("project_") !== -1 ? y = c(n.args) : n.type.indexOf("share_") !== -1 ? y = c(n.args) : n.type.indexOf("label_") !== -1 ? y = a(n.args) : n.type.indexOf("filter_") !== -1 && (y = o(n.args))
            } catch (e) {}
            y = y ? B(y, ": ") : "",
            p = t ? LI(B(y), $serialize(n)) : LI(B(y), this.humanCommandType(n.type), ". "),
            $add(e, p)
          }
        if (0 === r)
          return $add(e, LI(_("All updates processed successfully!")))
      }
      ,
      e.prototype.getJson = function() {
        var e, t, n, r, o, i;
        for (n = [window.User.id, navigator.appVersion, window.LANG, $queryArgument("v")],
        i = f.sync_queue.get(),
        r = 0,
        o = i.length; r < o; r++)
          e = i[r],
          e.last_error && (t = $update({}, e),
          t.args = $update({}, e.args),
          t.args && (t.args.content && (t.args.content = "..."),
          t.args.name && (t.args.name = "...")),
          n.push(t));
        return $serialize(n)
      }
      ,
      e.prototype.humanCommandType = function(e) {
        switch (e) {
        case "item_add":
          return _("Task add failed");
        case "item_delete":
          return _("Task delete failed");
        case "item_update":
          return _("Task update failed");
        case "item_update_date_complete":
          return _("Task update failed");
        case "item_move":
          return _("Task move failed");
        case "item_complete":
          return _("Task complete failed");
        case "item_uncomplete":
          return _("Task uncomplete failed");
        case "item_uncomplete_update_meta":
          return _("Task uncomplete failed");
        case "item_update_orders_indents":
          return _("Task order update failed");
        case "item_update_day_orders":
          return _("Task order update failed");
        case "note_add":
          return _("Comment add failed");
        case "note_update":
          return _("Comment update failed");
        case "note_delete":
          return _("Comment delete failed");
        case "project_add":
          return _("Project add failed");
        case "project_update":
          return _("Project update failed");
        case "project_delete":
          return _("Project delete failed");
        case "project_archive":
          return _("Project archive failed");
        case "project_unarchive":
          return _("Project unarchive failed");
        case "project_update_orders_indents":
          return _("Project order update failed");
        case "label_add":
          return _("Label add failed");
        case "label_delete":
          return _("Label delete failed");
        case "label_update":
          return _("Label update failed");
        case "label_update_orders":
          return _("Label order update failed");
        case "filter_add":
          return _("Filter add failed");
        case "filter_delete":
          return _("Filter delete failed");
        case "filter_update":
          return _("Filter update failed");
        case "filter_update_orders":
          return _("Filter order update failed");
        case "share_project":
          return _("Share project failed");
        case "delete_collaborator":
          return _("Remove collaborator failed");
        case "accept_invitation":
          return _("Accept invitation failed");
        case "reject_invitation":
          return _("Reject invitation failed");
        case "delete_invitation":
          return _("Delete invitation failed")
        }
        return _("%s failed").replace("%s", e)
      }
      ,
      e
    }(),
    t.exports = new a
  }
  , {
    "../../models/.coffee.FiltersModel.js": 148,
    "../../models/.coffee.ItemsModel.js": 153,
    "../../models/.coffee.LabelsModel.js": 154,
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.SyncEngine.js": 167
  }],
  111: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.Signals,
    i = window.Indicator,
    r = window.AmiTooltip,
    u = window.imageSprite,
    c = e("../../models/.coffee.SyncEngine.js"),
    s = e("../../models/.coffee.LoadEngine.js"),
    d = e("../../components/sync_error_handler/.coffee.SyncErrorHandler.js"),
    l = e("../../components/themes/.coffee.Themes.js"),
    o = function() {
      function e() {
        this.showSyncErrorHandler = h(this.showSyncErrorHandler, this),
        this.forceSync = h(this.forceSync, this),
        this.showOfflineInfo = h(this.showOfflineInfo, this),
        this._syncStateChanged = h(this._syncStateChanged, this),
        this.syncStateChanged = h(this.syncStateChanged, this),
        this.render = h(this.render, this),
        this.current_state = null ,
        a.connect("sync_state_changed", this.syncStateChanged),
        $AEV(window, "online", this.syncStateChanged),
        $AEV(window, "offline", this.syncStateChanged),
        $AEV(window, "load", function(e) {
          return function() {
            if (e.render(),
            navigator.onLine === !1)
              return e.syncStateChanged()
          }
        }(this))
      }
      return e.prototype.render = function() {
        return this.holder ? this.holder : (this.holder = SPAN({
          id: "sync_state_icon"
        }),
        this.holder)
      }
      ,
      e.prototype.syncStateChanged = function() {
        if (this.holder)
          return this.timeout && clearTimeout(this.timeout),
          this.timeout = setTimeout(this._syncStateChanged, 100)
      }
      ,
      e.prototype._syncStateChanged = function() {
        var e, t, n, o, a;
        if (o = c.getSyncState(),
        a = c.sync_states,
        e = null ,
        e = o === a.syncing ? "syncing" : c.global_error ? "offline" : c.getQueueErrorLength() ? "offline" : s.fetched_data_from_server ? "none" : "offline",
        this.current_state !== e && (this.current_state = e,
        t = navigator.onLine,
        void 0 !== t && (t || (e = "offline")),
        e)) {
          if ($replace(this.holder, null ),
          "syncing" === e)
            return $add(this.holder, i.cssSpinner("small"));
          if ("offline" === e)
            return this.offline_link = n = A({
              href: "#",
              c: "fixed_pos"
            }, u("cmp_" + l.getSyncIcon(), 16, 16)),
            $AEV(n, "mouseover", $p(this.showOfflineInfo, n)),
            $AEV(n, "mouseout", r.hide),
            n.onclick = this.forceSync,
            $add(this.holder, n)
        }
      }
      ,
      e.prototype.showOfflineInfo = function(e) {
        var t, n, o, i, s;
        return i = c.getSyncState(),
        s = _("Offline mode is on"),
        this.offline_link.onclick = this.forceSync,
        c.global_error ? (n = c.timeout / 1e3,
        o = _("%s seconds").replace("%s", n || 10),
        t = DIV(_("Needs to sync with Todoist"), BR(), _("Will try to sync again in %s").replace("%s", o), BR(), _("Click on this icon to force a sync"))) : c.getQueueErrorLength() ? (s = _("Sync issues"),
        t = DIV(_("We could not sync some updates"), BR(), _("Click here for more details")),
        this.offline_link.onclick = this.showSyncErrorHandler) : t = null ,
        r.show(e, DIV({
          c: "tooltip_cnt"
        }, B(s), t), null , null , 25);
      }
      ,
      e.prototype.forceSync = function() {
        return r.hide(),
        this.current_state = "syncing",
        c.sync(null , !0, !0),
        $replace(this.holder, i.cssSpinner("small")),
        !1
      }
      ,
      e.prototype.showSyncErrorHandler = function() {
        return d.show(),
        !1
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../../components/sync_error_handler/.coffee.SyncErrorHandler.js": 110,
    "../../components/themes/.coffee.Themes.js": 113,
    "../../models/.coffee.LoadEngine.js": 155,
    "../../models/.coffee.SyncEngine.js": 167
  }],
  112: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    h = window.Signals,
    o = window.GB_hide,
    d = window.Indicator,
    r = window.AmiButton,
    s = window.GB_showYouTube,
    i = window.GB_showHTML,
    o = window.GB_hide,
    a = window.GHtml5Uploader,
    l = e("../../models/.coffee.ProjectsModel.js"),
    f = e("../../models/.coffee.TemporaryIds.js"),
    u = e("../promotion_overlay/.coffee.PromotionOverlay.js"),
    c = function() {
      function e() {
        this.exportAsUrl = p(this.exportAsUrl, this),
        this.exportAsFile = p(this.exportAsFile, this),
        this.showExportTemplate = p(this.showExportTemplate, this)
      }
      return e.prototype.showExportTemplate = function(e) {
        var t, n, o;
        return !!this.checkPremiumForTemplates() && (o = DIV({
          c: "template_exporter"
        }, DIV(_("Please pick the template type:")), DIV(t = r.createButton(_("Export as file"))), DIV(n = r.createButton(_("Export as shareable URL"))), DIV({
          c: "template_relative"
        }, LABEL(this.input_relative = INPUT({
          type: "checkbox"
        }), _("Use relative dates")), BR(), SPAN({
          c: "desc"
        }, _("Relative means \u201cTomorrow\u201d will get turned into \u201c+1 day\u201d")))),
        this.input_relative.checked = !0,
        $AEV(t, "click", $p(this.exportAsFile, e)),
        $AEV(n, "click", $p(this.exportAsUrl, e, o)),
        i(_("Export as a template"), o, 300, 400))
      }
      ,
      e.prototype.exportAsFile = function(e) {
        var t;
        return t = function(e) {
          return function(t) {
            var n, r, i;
            return i = e.input_relative.checked && 1 || 0,
            n = $encode({
              project_id: t,
              use_relative_dates: i
            }),
            r = "/ImportExport/exportProject?" + n,
            window.open(r),
            o(),
            !1
          }
        }(this),
        this.customShowGb(e, t)
      }
      ,
      e.prototype.exportAsUrl = function(e, t) {
        var n, i;
        return i = function(e) {
          var n, i, s;
          return $replace(t, DIV({
            c: "copy_url"
          }, _("Copy the URL"), ":", BR(), s = INPUT({
            readonly: "readonly",
            type: "text"
          }), i = r.createButton(_("Close")))),
          n = $encode({
            t_url: e.file_url
          }),
          s.value = "https://todoist.com/importFromTemplate?" + n,
          $AEV(s, "click", function() {
            return s.select()
          }),
          $AEV(i, "click", o),
          s.select()
        }
        ,
        n = function(n) {
          return function() {
            var r, o;
            return $replace(t, d.cssSpinner()),
            r = $requestJSON("/ImportExport/exportProjectAsURL"),
            r.addCallback(i),
            o = n.input_relative.checked && 1 || 0,
            r.sendReq({
              project_id: e,
              use_relative_dates: o
            })
          }
        }(this),
        this.customShowGb(e, n),
        !1
      }
      ,
      e.prototype.showImport = function(e) {
        var t, n, r, c, d;
        return !!this.checkPremiumForTemplates() && (n = DIV({
          c: "template_importer"
        }, c = DIV({
          c: "upload_holder"
        }), DIV({
          c: "template_help"
        }, _("Import tasks from a template, use this to create a new project by duplicating an existing one."), BR(), d = A({
          href: "https://www.youtube.com/watch?v=_Rl_CLGY_3o"
        }, "\u25b6 ", _("Show a help video")))),
        $AEV(d, "click", function() {
          return s("", "https://www.youtube.com/watch?v=_Rl_CLGY_3o", 387, 640),
          !1
        }),
        t = function() {
          var t;
          return t = {
            onSuccess: function() {
              var t;
              return t = l.get(e),
              t && h.sendSignal("refresh_interface", [t], !0),
              setTimeout(o, 200)
            }
          },
          top.SyncEngine.sync(t, !0)
        }
        ,
        r = new a(c,"/ImportExport/importIntoProjectHTML5?project_id=" + e,!1,{
          allFilesUploaded: t,
          fileUploaded: t
        }),
        i(_("Import from template"), n, 300, 400, {
          close_validator_fn: function() {
            return r.remove(),
            !0
          }
        }),
        !1)
      }
      ,
      e.prototype.checkPremiumForTemplates = function() {
        return !!window.User.is_premium || (u.show(_("Templates are a premium feature"), _("Templates let you save time and busy work. Perfect for your repetitive projects.")),
        !1)
      }
      ,
      e.prototype.customShowGb = function(e, t) {
        return f.waitToResolve(e, function(e) {
          return t(e)
        })
      }
      ,
      e
    }(),
    t.exports = new c
  }
  , {
    "../../models/.coffee.ProjectsModel.js": 159,
    "../../models/.coffee.TemporaryIds.js": 170,
    "../promotion_overlay/.coffee.PromotionOverlay.js": 90
  }],
  113: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    r = function() {
      function e() {
        this.rgbToHex = i(this.rgbToHex, this),
        this.getSyncIcon = i(this.getSyncIcon, this),
        this.getTertiaryColor = i(this.getTertiaryColor, this),
        this.getSecondaryColor = i(this.getSecondaryColor, this),
        this.getPrimaryColor = i(this.getPrimaryColor, this),
        this.getMenuToggleIcon = i(this.getMenuToggleIcon, this),
        this.getKarmaDownIcon = i(this.getKarmaDownIcon, this),
        this.getKarmaUpIcon = i(this.getKarmaUpIcon, this),
        this.getGearIcon = i(this.getGearIcon, this),
        this.getNotificationsIcon = i(this.getNotificationsIcon, this),
        this.getQuickAddIcon = i(this.getQuickAddIcon, this),
        this.getSearchHelp = i(this.getSearchHelp, this),
        this.getSearchIcon = i(this.getSearchIcon, this),
        this.getLogo = i(this.getLogo, this),
        this.switchThemes = i(this.switchThemes, this),
        o.connect("user_updated", function(e) {
          return function(t) {
            if ($body() && e.theme_number !== t.theme)
              return e.switchThemes(t.theme)
          }
        }(this))
      }
      return e.prototype.icon_type = "light",
      e.prototype.theme = "theme_todoist",
      e.prototype.theme_name = "todoist",
      e.prototype.theme_number = 15,
      e.prototype.theme_id_to_name = {
        1: "noir",
        2: "neutral",
        3: "tangerine",
        4: "sunflower",
        5: "clover",
        6: "blueberry",
        7: "sky",
        8: "amethyst",
        9: "graphite",
        10: "gold"
      },
      e.prototype.switchThemes = function(e) {
        var t;
        return this.theme_number = e,
        this.theme_name = this.theme_id_to_name[e] || "todoist",
        this.theme = "theme_" + this.theme_name,
        "sunflower" === this.theme_name || "neutral" === this.theme_name ? this.icon_type = "dark" : this.icon_type = "light",
        t = $body().className,
        t = t.replace(/theme_\S+/g, ""),
        t += " " + this.theme,
        $body().className = t,
        o.sendSignal("theme_changed")
      }
      ,
      e.prototype.replaceImageClass = function(e, t) {
        if (e && t)
          return e.className = e.className.replace(/cmp_\S+/, ""),
          $addClass(e, t)
      }
      ,
      e.prototype.getLogo = function() {
        return "cmp_" + this.icon_type + "_logo"
      }
      ,
      e.prototype.getSearchIcon = function(e) {
        return "cmp_" + (e || this.icon_type) + "_search"
      }
      ,
      e.prototype.getSearchHelp = function(e) {
        return "cmp_" + (e || this.icon_type) + "_query_help"
      }
      ,
      e.prototype.getQuickAddIcon = function() {
        return "cmp_" + this.icon_type + "_add_task"
      }
      ,
      e.prototype.getNotificationsIcon = function() {
        return "cmp_" + this.icon_type + "_notifications"
      }
      ,
      e.prototype.getGearIcon = function() {
        return "cmp_" + this.icon_type + "_gear"
      }
      ,
      e.prototype.getKarmaUpIcon = function() {
        return "cmp_" + this.icon_type + "_karma_up"
      }
      ,
      e.prototype.getKarmaDownIcon = function() {
        return "cmp_" + this.icon_type + "_karma_down"
      }
      ,
      e.prototype.getMenuToggleIcon = function() {
        return "cmp_" + this.icon_type + "_menu_toggle"
      }
      ,
      e.prototype.getPrimaryColor = function() {
        switch (this.theme_number) {
        case 1:
          return this.rgbToHex(61, 61, 61);
        case 2:
          return this.rgbToHex(247, 247, 247);
        case 3:
          return this.rgbToHex(255, 145, 0);
        case 4:
          return this.rgbToHex(255, 207, 6);
        case 5:
          return this.rgbToHex(59, 155, 12);
        case 6:
          return this.rgbToHex(48, 111, 234);
        case 7:
          return this.rgbToHex(78, 193, 230);
        case 8:
          return this.rgbToHex(142, 36, 170);
        case 9:
          return this.rgbToHex(81, 101, 121);
        case 10:
          return this.rgbToHex(224, 181, 63);
        default:
          return this.rgbToHex(221, 75, 57)
        }
      }
      ,
      e.prototype.getSecondaryColor = function() {
        switch (this.theme_number) {
        case 1:
          return this.rgbToHex(102, 92, 92);
        case 2:
          return this.rgbToHex(234, 184, 181);
        case 3:
          return this.rgbToHex(249, 82, 45);
        case 4:
          return this.rgbToHex(255, 154, 8);
        case 5:
          return this.rgbToHex(45, 109, 17);
        case 6:
          return this.rgbToHex(26, 19, 158);
        case 7:
          return this.rgbToHex(72, 144, 216);
        case 8:
          return this.rgbToHex(88, 30, 155);
        case 9:
          return this.rgbToHex(8, 61, 84);
        case 10:
          return this.rgbToHex(83, 90, 91);
        default:
          return this.rgbToHex(127, 23, 15)
        }
      }
      ,
      e.prototype.getTertiaryColor = function() {
        switch (this.theme_number) {
        case 1:
          return this.rgbToHex(150, 137, 137);
        case 2:
          return this.rgbToHex(242, 227, 226);
        case 3:
          return this.rgbToHex(252, 193, 26);
        case 4:
          return this.rgbToHex(255, 239, 174);
        case 5:
          return this.rgbToHex(175, 191, 16);
        case 6:
          return this.rgbToHex(166, 191, 247);
        case 7:
          return this.rgbToHex(145, 229, 242);
        case 8:
          return this.rgbToHex(242, 95, 221);
        case 9:
          return this.rgbToHex(169, 196, 211);
        default:
          return this.rgbToHex(247, 149, 82)
        }
      }
      ,
      e.prototype.getSyncIcon = function() {
        return "todoist" === this.theme_name ? "needs_sync_yellow" : "needs_sync"
      }
      ,
      e.prototype.componentToHex = function(e) {
        var t;
        return t = e.toString(16),
        1 === t.length ? "0" + t : t
      }
      ,
      e.prototype.rgbToHex = function(e, t, n) {
        return "#" + this.componentToHex(e) + this.componentToHex(t) + this.componentToHex(n)
      }
      ,
      e
    }(),
    window.Themes = new r,
    t.exports = window.Themes
  }
  , {}],
  114: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.GB_showHTML,
    o = window.GB_hideIfNeeded,
    c = window.format,
    r = e("../../models/.coffee.Storage.js").$storage,
    a = e("../opener/WindowOpener.js"),
    s = function() {
      function e() {
        this.showSettings = d(this.showSettings, this),
        this.hideTimezoneHint = d(this.hideTimezoneHint, this),
        this.changeTimezoneToCurrent = d(this.changeTimezoneToCurrent, this),
        this.createHintLink = d(this.createHintLink, this),
        this.showTimezoneHintNormal = d(this.showTimezoneHintNormal, this),
        this.showTimezoneHint = d(this.showTimezoneHint, this),
        this.guessTimezone = d(this.guessTimezone, this),
        this.checkTimezone = d(this.checkTimezone, this),
        this.setValidTimezone = d(this.setValidTimezone, this),
        this.getValidTimezone = d(this.getValidTimezone, this)
      }
      return e.prototype.getValidTimezone = function() {
        return r("valid_timezone").get()
      }
      ,
      e.prototype.setValidTimezone = function(e) {
        return r("valid_timezone").set(e)
      }
      ,
      e.prototype.checkTimezone = function() {
        var e, t, n, r, o, i, s;
        if (e = window.User,
        e && (e.tz_offset || e.tz_info) && (e.tz_info ? (n = e.tz_info.timezone,
        i = e.tz_info.hours,
        s = e.tz_info.minutes) : (n = e.timezone,
        r = e.tz_offset,
        i = r[1],
        s = r[2]),
        this.getValidTimezone() !== n))
          return o = 60 * i + s,
          t = -(new Date).getTimezoneOffset(),
          o !== t ? this.guessTimezone(t) : void 0
      }
      ,
      e.prototype.guessTimezone = function(e) {
        var t;
        return t = $requestJSON("/API/v7/guess_timezone"),
        t.addCallback(this.showTimezoneHint),
        t.sendReq({
          mm_offset: e
        })
      }
      ,
      e.prototype.showTimezoneHint = function(e) {
        return this.showTimezoneHintNormal(e)
      }
      ,
      e.prototype.showTimezoneHintNormal = function(e) {
        var t, n;
        if (n = window.User.timezone || window.User.tz_info.timezone,
        e !== n)
          return t = DIV({
            c: "timezone_alert"
          }),
          "UNKNOWN_TIMEZONE" !== e ? (this.current_timezone = e,
          $add(t, c(_("Change timezone to %s?"), e), BR(), this.createHintLink(_("Yes, update my settings"), this.changeTimezoneToCurrent, "amibutton amibutton_red amibutton_big timezone_button"), BR(), this.createHintLink(_("Don't update settings"), this.hideTimezoneHint, "timezone_link timezone_link_block"), this.createHintLink(_("View my settings"), this.showSettings, "timezone_link timezone_link_block"))) : $add(t, DIV({
            c: "timezone_alert_message"
          }, _("Your system timezone doesn't match your Todoist settings. Fix it now?")), this.createHintLink(_("Yes, show my settings"), this.showSettings, "amibutton amibutton_red amibutton_big timezone_button"), BR(), this.createHintLink(_("Don't update settings"), this.hideTimezoneHint, "timezone_link timezone_link_block")),
          i(_("Time zone settings"), DIV(t), 200, 400)
      }
      ,
      e.prototype.createHintLink = function(e, t, n) {
        var r;
        return null == n && (n = "timezone_link"),
        r = A({
          c: n,
          href: "#"
        }, e),
        $AEV(r, "click", t),
        r
      }
      ,
      e.prototype.changeTimezoneToCurrent = function() {
        var e;
        return this.hideTimezoneHint(),
        e = $request("/Users/setTimezone"),
        e.addCallback(function(e) {
          return function() {
            return window.tz_info ? window.User.tz_info.timezone = e.current_timezone : window.User.timezone = e.current_timezone,
            r("User").set(window.User),
            window.location.reload()
          }
        }(this)),
        e.sendReq({
          value: this.current_timezone
        }),
        !1
      }
      ,
      e.prototype.hideTimezoneHint = function() {
        return o(),
        !1
      }
      ,
      e.prototype.showSettings = function() {
        return this.hideTimezoneHint(),
        a.showPrefs("general"),
        !1
      }
      ,
      e
    }(),
    t.exports = new s
  }
  , {
    "../../models/.coffee.Storage.js": 165,
    "../opener/WindowOpener.js": 74
  }],
  115: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f;
    d = window.Signals,
    r = window.AmiTooltip,
    f = window.imageSprite,
    u = e("../sync_state_icon/.coffee.SyncStateIcon.js"),
    a = e("../notifications/.coffee.Notifications.js"),
    c = e("../quick_add/.coffee.QuickAdd.js"),
    o = e("../completed_history/.coffee.CompletedQuickVisualize.js"),
    h = e("../themes/.coffee.Themes.js"),
    l = e("../start_page/StartPage.js"),
    s = e("../../menus/MenuUser.js"),
    i = function() {
      function e() {
        d.connect("theme_changed", function(e) {
          return function() {
            return e.renderTopLogo(),
            h.replaceImageClass(e.icon_add_task, h.getQuickAddIcon()),
            h.replaceImageClass(e.icon_gear, h.getGearIcon())
          }
        }(this))
      }
      return e.prototype.renderTopLogo = function() {
        var e;
        return e = A({
          href: "#"
        }, f(h.getLogo(), 30, 30)),
        e.onclick = function() {
          return l.queryStart(),
          !1
        }
        ,
        $replace($("logo"), e)
      }
      ,
      e.prototype.render = function() {
        var e, t, n;
        return this.renderTopLogo(),
        n = $("top_icons"),
        $add(n, e = SPAN(this.icon_add_task = this.createIcon(h.getQuickAddIcon(), SPAN(B(_("Quick Add Task")), BR(), _("Open by typing %s").replace("%s", "q"))))),
        e.id = "quick_add_task_holder",
        $AEV(e, ["click", "touchend"], function() {
          return c.toggle()
        }),
        $add(n, a.renderIcon()),
        $add(n, SPAN({
          id: "completed_items"
        }, o.renderLink())),
        $add(n, t = SPAN({
          id: "gear_holder",
          c: "menu_icon fixed_pos"
        }, this.icon_gear = this.createIcon(SPAN(h.getGearIcon()), null , null ))),
        $AEV(t, ["click", "touchend"], function() {
          return s.open(t),
          !1
        }),
        $ATT($("top_icons"), u.render()),
        d.connect("new_version_available", function() {
          return $remove($gc(t, "span", "unread")),
          $ATT(t, SPAN({
            c: "unread menu_icon"
          }))
        })
      }
      ,
      e.prototype.createIcon = function(e, t, n) {
        var o;
        return o = f("" + e + " icon fixed_pos", 26, 16),
        $isTouchDeviceOnly() || t && r.showSimpleText(o, t, null , null , 1),
        n && $AEV(o, "click", n),
        o
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "../../menus/MenuUser.js": 139,
    "../completed_history/.coffee.CompletedQuickVisualize.js": 24,
    "../notifications/.coffee.Notifications.js": 72,
    "../quick_add/.coffee.QuickAdd.js": 91,
    "../start_page/StartPage.js": 109,
    "../sync_state_icon/.coffee.SyncStateIcon.js": 111,
    "../themes/.coffee.Themes.js": 113
  }],
  116: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      var t = void 0;
      switch (e.intent) {
      case s.INTENT_DUE_REMOVE:
        t = _("Date removed");
        break;
      case s.INTENT_DUE_UPDATE:
        t = _("Date updated")
      }
      var n = A({
        href: "#",
        id: "undo_link"
      }, _("Undo"));
      $AEV(n, "click", function() {
        c.undo(e),
        d.hide()
      });
      var r = A({
        href: "#",
        c: "hideLink_link"
      }, _("Hide"));
      $AEV(r, "click", d.hide),
      d.show(SPAN(t, n, r), !0)
    }
    var i = e("../../models/.coffee.ModelUndo.js")
      , s = r(i)
      , a = e("../../actions/.es6.UndoActions.js")
      , c = r(a)
      , d = e("../notifier/Notifier.js");
    s.addCheckpointUpdateListener(o)
  }
  , {
    "../../actions/.es6.UndoActions.js": 6,
    "../../models/.coffee.ModelUndo.js": 156,
    "../notifier/Notifier.js": 73
  }],
  117: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.GB_showHTML,
    i = window.GB_hide,
    o = window.Alerts,
    c = window.imageSprite,
    r = e("../../models/.coffee.Storage.js").$storage,
    a = function() {
      function e() {
        this.show = d(this.show, this),
        this.showIfUnique = d(this.showIfUnique, this),
        this.countAndShowIfNeeded = d(this.countAndShowIfNeeded, this)
      }
      return e.prototype.countAndShowIfNeeded = function() {
        var e, t, n;
        if (!(window.User.karma < 500 || r("ViralSpreadDone").get()))
          return e = r("ViewCount").get(),
          e ? (n = e.split("-"),
          e = n[0],
          t = n[1],
          e = parseInt(e),
          t = parseInt(t)) : (e = 0,
          t = 3),
          e++,
          r("ViewCount").set("" + e + "-" + t),
          e > t ? this.showIfUnique() : void 0
      }
      ,
      e.prototype.showIfUnique = function() {
        var e;
        return e = $requestJSON("/API/v7/tooltips/is_seen"),
        e.addCallback(function(e) {
          return function(t) {
            return t.result ? r("ViralSpreadDone").set(1) : e.show()
          }
        }(this)),
        e.sendReq({
          name: "viral_spread",
          token: window.User.token
        })
      }
      ,
      e.prototype.show = function() {
        var e, t, n, a, c, d, l, u;
        if (!this.tooltip_shown)
          return c = _("Enjoy using Todoist?") + "<br><br>" + _("Take a quick break from getting stuff done to share the productivity love \u2764\ufe0f") + "<br><br>" + _("Thanks for helping us make the world a less stressful, more productive place!"),
          e = o.renderHolder(c),
          $addClass(e.frame, "viral_holder"),
          t = this.shareLink("facebook", "Facebook", "https://www.facebook.com/sharer/sharer.php?u=https://todoist.com/"),
          a = this.shareLink("twitter", "Twitter", this.genTwitterLink()),
          n = this.shareLink("gplus", "Google+", "https://plus.google.com/share?url=https://todoist.com/"),
          $add(e.buttons, BR(), t, a, n),
          $add(e.buttons, BR(), BR(), BR()),
          $add(e.buttons, l = DIV(u = A({
            href: "#",
            c: "cancel"
          }, _("Remind me later")), d = A({
            href: "#",
            c: "cancel"
          }, _("No, Thanks")))),
          $AEV([t, a, n], "click", function(e) {
            return function() {
              var t;
              return e.disableTooltip(),
              $replace(l, DIV(B(_("Thank you!"))), t = A({
                href: "#",
                c: "viral_link"
              }, _("Close"))),
              $AEV(t, "click", i)
            }
          }(this)),
          $AEV(u, "click", this.remindMeLater),
          $AEV(d, "click", this.disableTooltip),
          $AEV([u, d], "click", i),
          s("", e.frame, 180, 350, {
            callback_fn: function(e) {
              return function() {
                if (!r("ViralSpreadDone").get())
                  return e.remindMeLater()
              }
            }(this)
          }),
          this.tooltip_shown = !0
      }
      ,
      e.prototype.disableTooltip = function() {
        return r("ViralSpreadDone").set(1),
        $request("/API/v7/tooltips/mark_as_seen").sendReq({
          name: "viral_spread",
          token: window.User.token
        })
      }
      ,
      e.prototype.remindMeLater = function() {
        return r("ViewCount").set("0-30")
      }
      ,
      e.prototype.shareLink = function(e, t, n) {
        var r;
        return r = c("cmp_" + e, 16, 16),
        A({
          href: n,
          target: "_blank",
          c: "viral_link"
        }, r, t)
      }
      ,
      e.prototype.genTwitterLink = function() {
        var e;
        return e = _("I just started using @Todoist to get organized and boost my #productivity! Try it out for free: Todoist.com #DoMoreStressLess"),
        e = $urlencode(e),
        "https://twitter.com/home?status=" + e
      }
      ,
      e
    }(),
    t.exports = new a
  }
  , {
    "../../models/.coffee.Storage.js": 165
  }],
  118: [function(e, t, n) {
    var r = e("flux").Dispatcher;
    t.exports = new r
  }
  , {
    flux: "flux"
  }],
  119: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v, j, b, I, $, A, S, C, T;
    i = window.Dateist,
    s = window.DateistDateHelpers,
    o = window.DateUtils,
    j = window.Signals,
    S = e("../components/misc/Misc.js").isMacApp,
    g = e("../components/project_list/.coffee.ProjectListUtils.js"),
    f = e("../components/notes/Notes.js"),
    l = e("../components/local_notifications/.coffee.LocalNotifications.js"),
    u = e("../components/local_reminders/.coffee.LocalReminders.js"),
    m = e("../components/postpone/.coffee.Postpone.js"),
    I = e("../components/themes/.coffee.Themes.js"),
    c = e("../models/.coffee.ItemsModel.js"),
    d = e("../models/.coffee.LabelsModel.js"),
    y = e("../models/.coffee.ProjectsModel.js"),
    b = e("../models/.coffee.SyncEngine.js"),
    r = e("../models/.coffee.Collaborators.js"),
    v = e("../models/.coffee.Reminders.js").RemindersModel,
    w = e("../models/.coffee.QueriesItems.js"),
    p = e("../models/.coffee.NotesModel.js"),
    $ = e("../models/.coffee.UtilModels.js"),
    a = e("../mini/.coffee.ContentTransformers.js").GContentTransformers,
    T = "local.todoist.com" === window.location.host,
    C = "beta.todoist.com" === window.location.host,
    (S() || T || C) && (A = function(e) {
      var t;
      return window.WebViewJavascriptBridge ? e(window.WebViewJavascriptBridge) : (t = function() {
        return e(window.WebViewJavascriptBridge)
      }
      ,
      document.addEventListener("WebViewJavascriptBridgeReady", t, !1))
    }
    ,
    window.MacBridge = h = {
      bridge: null ,
      handleRequest: function(e, t) {
        var n, a, l, u, _, I, $, A, S, C, T, k, D, E, x, P, M, N, L, R, U, O, V, B, H, F, G, q;
        if (M = {
          status: "ok"
        },
        N = function(e) {
          var t, n, r, o;
          for (o = [],
          n = 0,
          r = e.length; n < r; n++)
            t = e[n],
            null === t.color ? o.push(t.color = 7) : o.push(void 0);
          return o
        }
        ,
        a = function() {
          return M.projects = y.getAll(),
          N(M.projects)
        }
        ,
        n = function() {
          return M.labels = d.getAll(!0),
          N(M.labels)
        }
        ,
        l = function() {
          var e, t, n, r;
          return e = s.date_min(i.parse("today").due_date),
          t = c.getAllOwn(),
          r = w.getByDate(e, t),
          n = w.getOverdue(t),
          M.items_today = h.handleDayResult(r),
          M.items_overdue = h.handleDayResult(n)
        }
        ,
        u = function() {
          return M.user = window.User,
          M.user.dateist_lang = window.DATEIST_LANG || "en"
        }
        ,
        "sync" === e.action)
          b.sync(null , !0);
        else if ("logout" === e.action)
          j.sendSignal("logout");
        else if ("getData" === e.action)
          a(),
          n(),
          l(),
          u();
        else if ("getProjects" === e.action)
          a();
        else if ("getLabels" === e.action)
          n();
        else if ("getTodayItems" === e.action)
          l();
        else if ("getUser" === e.action)
          u();
        else if ("parseDate" === e.action)
          h.parseDate(e, M);
        else if ("formatDate" === e.action)
          h.formatDate(e, M);
        else if ("getProjectMembersWithID" === e.action)
          I = r.isProjectShared(e.id) ? r.getAll(e.id) : [],
          M.members = I,
          M.length = I.length;
        else if ("completeItem" === e.action)
          k = c.getById(e.itemId),
          k && c.complete(k);
        else if ("uncompleteItem" === e.action)
          k = c.getById(e.itemId),
          k && c.uncomplete(k.id, k.in_history);
        else if ("genericAction" === e.action) {
          for (F = e.actions,
          R = 0,
          V = F.length; R < V; R++)
            k = F[R],
            "complete" === k.action ? (L = c.getById(k.id),
            L && c.complete(L)) : "postpone" === k.action ? (L = c.getById(k.id),
            L && m.postPoneModel(L)) : "view_project" === k.action ? g.setCurrentById(k.project_id) : "view_task" === k.action ? f.showItemNotes(k.item_id, k.note_id, k.sync_id) : "view_project_note" === k.action ? f.showProjectNotes(k.project_id, k.note_id) : "view_business_users" === k.action ? window.open("/business/users") : "view_business_billing" === k.action ? window.open("/business/accountAndBilling") : "note_add" === k.action && (T = !!k.project_id,
            T ? p.addNote(k.project_id, k.text, p.TYPE_PROJECT_NOTE) : p.addNote(k.item_id, k.text, p.TYPE_ITEM_NOTE));
          j.sendSignal("refresh_interface", null , !0)
        } else if ("addItem" === e.action) {
          if (x = y.get(e.projectId),
          x || (x = y.getInbox()),
          S = "",
          C = null ,
          $ = "en",
          e.dueDate) {
            if (A = o.parse(e.dueDate),
            !A.due_date)
              return M.status = "error",
              M.reason = "INVALID_DATE",
              t(M);
            S = A.date_string,
            $ = A.date_lang,
            C = A.due_date
          }
          if (!e.content || 0 === e.content.length)
            return M.status = "error",
            M.reason = "CONTENT_IS_EMPTY",
            t(M);
          if (_ = {
            content: e.content,
            date_string: S,
            date_lang: $,
            due_date: C,
            project_id: x.id,
            priority: e.priority || 1,
            item_order: c.getMaxOrder(x.id) + 1,
            responsible_uid: e.responsible_uid || null
          },
          e.dismissedLabels) {
            for (E = {},
            G = e.dismissedLabels,
            U = 0,
            B = G.length; U < B; U++)
              D = G[U],
              E[D] = !0;
            _.labels_to_ignore = E
          }
          if (k = c.add(_, {
            return_as_error: !0
          }),
          k.error)
            M.status = "error",
            M.reason = "LIMIT_REACHED";
          else {
            if (M.item = k,
            e.reminders)
              for (q = e.reminders,
              O = 0,
              H = q.length; O < H; O++)
                P = q[O],
                A = o.parse(P),
                A.due_date && v.add({
                  item_id: k.id,
                  type: "absolute",
                  date_string: A.date_string,
                  date_lang: A.date_lang,
                  due_date_utc: o.jsonFormat(A.due_date),
                  time: A.due_date.getTime()
                });
            e.note && e.note.length > 0 && p.addNote(k.id, e.note, p.TYPE_ITEM_NOTE),
            j.sendSignal("refresh_interface", null , !0)
          }
        }
        if ($isFunction(t))
          return t(M)
      },
      parseDate: function(e, t) {
        var n, r;
        return r = e.dueDate,
        n = o.parse(r),
        n.due_date ? (t.date_string = n.date_string,
        t.date_lang = n.date_lang,
        t.date = n.due_date.getTime()) : (t.status = "error",
        t.reason = "INVALID_DATE"),
        t
      },
      formatDate: function(e, t) {
        var n, r;
        return r = e.date_string.split("-"),
        n = new Date(parseInt(r[0]),parseInt(r[1]) - 1,parseInt(r[2])),
        t.date_string = o.format(n),
        t
      },
      handleDayResult: function(e) {
        var t, n, r, c, d, l, u, h;
        for (r = new Date,
        l = new a,
        n = [],
        u = 0,
        h = e.length; u < h; u++)
          d = e[u],
          c = {},
          $update(c, d),
          l.setupByContent(d.content),
          "outlook" === l.type ? c.content = "Outlook: " + l.title : "thunderbird" === l.type ? c.content = "Thunderbird: " + l.title : l.type && (c.content = "Gmail: " + l.title),
          i.is_recurring(c.date_string, {
            lang: c.date_lang
          }) && (c.is_recurring = !0),
          s.is_overdue(r, c.due_date) && (t = s.day_diff(new Date, c.due_date),
          c.diff_human = o.humanizeDayDiff(t, c.due_date)),
          n.push(c),
          l.reset();
        return n.sort($.daySort),
        n
      }
    },
    A(function(e) {
      var t, n, r, o, i, s, a;
      return e.init(function() {
        return null
      }),
      h.bridge = e,
      l.connect(),
      u.connect(),
      e.registerHandler("nativeAppBridge", function(e, t) {
        return h.handleRequest(e, t)
      }),
      n = 5,
      i = 6,
      t = 7,
      r = 8,
      o = 9,
      j.connect("countsUpdated", function(t) {
        var r;
        if (e)
          return r = t.today + t.overdue,
          e.callHandler("jsAppBridge", {
            action: n,
            count: r
          }, function() {
            return null
          })
      }),
      j.connect("data_fully_loaded", function() {
        if (e)
          return e.callHandler("jsAppBridge", {
            action: t
          }, function() {
            return null
          })
      }),
      j.connect("mac_remind", function(t) {
        var n, r;
        if (e)
          return r = {
            action: i
          },
          r.title = t.content,
          r.body = "",
          r.type = "reminder",
          n = [{
            text: _("Complete"),
            action: "complete",
            id: t.id,
            put_in_focus: !1
          }],
          t.due_date && n.push({
            text: _("Postpone"),
            action: "postpone",
            id: t.id,
            put_in_focus: !1
          }),
          r.actions = n,
          e.callHandler("jsAppBridge", r, function() {
            return null
          })
      }),
      j.connect("mac_notify", function(t, n, r) {
        var o, s;
        if (e)
          return s = {
            action: i
          },
          s.title = t,
          s.body = n || "",
          s.type = "notification",
          o = [],
          r && o.push(r),
          s.actions = o,
          e.callHandler("jsAppBridge", s, function() {
            return null
          })
      }),
      a = function(t) {
        var n;
        if (e)
          return n = {
            action: r
          },
          n.user = t,
          e.callHandler("jsAppBridge", n, function() {
            return null
          })
      }
      ,
      s = function() {
        var t;
        if (e)
          return t = {
            action: o
          },
          t.color = "#f6f6f6",
          e.callHandler("jsAppBridge", t, function() {
            return null
          })
      }
      ,
      j.connect("user_updated", function(e) {
        return a(e),
        s()
      }),
      j.connect("theme_changed", function() {
        return a(window.User),
        s()
      })
    }))
  }
  , {
    "../components/local_notifications/.coffee.LocalNotifications.js": 60,
    "../components/local_reminders/.coffee.LocalReminders.js": 61,
    "../components/misc/Misc.js": 64,
    "../components/notes/Notes.js": 71,
    "../components/postpone/.coffee.Postpone.js": 77,
    "../components/project_list/.coffee.ProjectListUtils.js": 87,
    "../components/themes/.coffee.Themes.js": 113,
    "../mini/.coffee.ContentTransformers.js": 140,
    "../models/.coffee.Collaborators.js": 146,
    "../models/.coffee.ItemsModel.js": 153,
    "../models/.coffee.LabelsModel.js": 154,
    "../models/.coffee.NotesModel.js": 157,
    "../models/.coffee.ProjectsModel.js": 159,
    "../models/.coffee.QueriesItems.js": 161,
    "../models/.coffee.Reminders.js": 162,
    "../models/.coffee.SyncEngine.js": 167,
    "../models/.coffee.UtilModels.js": 172
  }],
  120: [function(e, t, n) {
    function r(e) {
      $isString(e) && (e = $eval(e)),
      c.setCurrentEmail(e),
      c.trackIfNeeded()
    }
    function o(e) {
      $isString(e) && (e = $eval(e)),
      c.setCurrentEmail(e),
      s.sendSignal("PluginVersion.addToGenericController")
    }
    var i = window.LibEdit
      , s = window.Signals
      , a = e("../mini/.coffee.ContentTransformers.js").ContentTransformers
      , c = {
      current_email_obj: null ,
      addToTextArea: function(e) {
        var t = c.current_email_obj;
        return !!t && (a.type = "outlook",
        a.email_id = t.id,
        a.title = t.subject,
        a.annotateWithIcon(e),
        i.insertAtCursor(e, t.subject, !0),
        !1)
      },
      setCurrentEmail: function(e) {
        if (e) {
          var t = c.current_email_obj = {};
          $update(t, e)
        } else
          c.current_email_obj = null ;
        s.sendSignal("PluginVersion.notifyExternalServices")
      },
      openEmail: function(e) {
        try {
          return window.external.openmail(e),
          !1
        } catch (e) {}
        return !0
      },
      tracked: !1,
      trackIfNeeded: function() {
        c.tracked || (c.tracked = !0)
      }
    };
    window.OutlookIntegration = c,
    window.setOutlookEmail = r,
    window.addOutlookEmail = o,
    t.exports = c
  }
  , {
    "../mini/.coffee.ContentTransformers.js": 140
  }],
  121: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, _, p, m, g;
    i = e("../components/drag_and_drop/.coffee.DragAndDrop.js"),
    r = e("../components/agenda/Agenda.js"),
    o = e("../components/agenda/.coffee.AgendaUtils.js"),
    h = e("../components/project_editor/ProjectEditor.js").ProjectEditor,
    f = e("../components/project_editor/.coffee.ProjectEditorManager.js"),
    _ = e("../components/project_list/.coffee.ProjectList.js"),
    p = e("../components/project_list/.coffee.ProjectListUtils.js"),
    m = e("../components/project_list/.coffee.ProjectArchive.js"),
    c = e("../components/left_menu/.coffee.LeftMenuTabs.js"),
    l = e("../components/notes/Notes.js"),
    u = e("../components/notes/.coffee.NotesUtils.js"),
    s = e("../components/filters_list/.coffee.FiltersList.js"),
    a = e("../components/labels_list/.coffee.LabelsList.js"),
    g = e("../components/smart_scheduler/.coffee.SmartScheduler.js"),
    d = e("../components/minical_ext/.coffee.MiniCalExt.js"),
    n.resolve = function() {
      return p.Deps.ProjectList = _,
      u.Deps.Notes = l,
      o.Deps.Agenda = r,
      f.DepProjectEditor = h,
      m.DepProjectList = _,
      d.Deps.SmartScheduler = g,
      i.DepAgenda = r,
      i.DepProjectList = _,
      i.DepFiltersList = s,
      i.DepLabelsList = a,
      i.DepLeftMenuTabs = c
    }
  }
  , {
    "../components/agenda/.coffee.AgendaUtils.js": 12,
    "../components/agenda/Agenda.js": 19,
    "../components/drag_and_drop/.coffee.DragAndDrop.js": 27,
    "../components/filters_list/.coffee.FiltersList.js": 36,
    "../components/labels_list/.coffee.LabelsList.js": 55,
    "../components/left_menu/.coffee.LeftMenuTabs.js": 57,
    "../components/minical_ext/.coffee.MiniCalExt.js": 63,
    "../components/notes/.coffee.NotesUtils.js": 69,
    "../components/notes/Notes.js": 71,
    "../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../components/project_editor/ProjectEditor.js": 83,
    "../components/project_list/.coffee.ProjectArchive.js": 84,
    "../components/project_list/.coffee.ProjectList.js": 86,
    "../components/project_list/.coffee.ProjectListUtils.js": 87,
    "../components/smart_scheduler/.coffee.SmartScheduler.js": 107
  }],
  122: [function(e, t, n) {
    n.strings = [_("Project Comments"), _("The project was not found, could be deleted or moved"), _("This project has no comments"), _("Invite From Project"), _("Select All"), _("Comments and file attachments are premium features"), , _("With comments you can add as many details as you want. Or attach PDFs, spreadsheets or photos!")]
  }
  , {}],
  123: [function(e, t, n) {
    var r, o, i, s;
    s = window.Signals,
    r = window.AmiMenu,
    o = e("./HelperColorsPriorities.js"),
    i = {},
    n.get = function() {
      return i.Menu
    }
    ,
    n.init = function(e) {
      var t;
      return i.Menu = t = new r,
      t.addItems(t.colors = o.createColor(e.colors, function(e) {
        return s.sendSignal("color_selected", e),
        t.hide(),
        !1
      })),
      $addClass(t.colors.view, "filter_list_colors"),
      $AEV(document, "click", t.hide),
      t
    }
  }
  , {
    "./HelperColorsPriorities.js": 130
  }],
  124: [function(e, t, n) {
    var r, o, i;
    i = window.Signals,
    r = window.AmiMenu,
    o = {},
    n.get = function() {
      return o.Menu
    }
    ,
    n.init = function() {
      var e, t, n;
      return o.Menu = e = new r,
      e.with_arrow = !0,
      e.pos_y_offset = 9,
      e.arrow_y_offset = 11,
      e.arrow_x_offset = 4,
      t = function() {
        return $isMac() ? "CMD+Left" : "CTRL+Left"
      }
      ,
      n = function() {
        return $isMac() ? "CMD+Right" : "CTRL+Right"
      }
      ,
      e.addItems(r.createItem(SPAN(_("Indent Left"), SPAN({
        c: "desc"
      }, t())), function() {
        return i.sendSignal("menu_indent_left"),
        !1
      }, {
        extra_class: "menu_indent"
      }), r.createItem(SPAN(_("Indent Right"), SPAN({
        c: "desc"
      }, n())), function() {
        return i.sendSignal("menu_indent_right"),
        !1
      }, {
        extra_class: "menu_indent"
      })),
      $AEV(document, "click", e.hide),
      e
    }
  }
  , {}],
  125: [function(e, t, n) {
    var r, o, i, s;
    s = window.Signals,
    r = window.AmiMenu,
    o = e("./HelperColorsPriorities.js"),
    i = {},
    n.get = function() {
      return i.Menu
    }
    ,
    n.init = function(e) {
      var t;
      return i.Menu = t = new r,
      t.addItems(t.colors = o.createColor(e.colors, function(e) {
        return s.sendSignal("color_selected", e),
        t.hide(),
        !1
      })),
      $addClass(t.colors.view, "label_list_colors"),
      $AEV(document, "click", t.hide),
      t
    }
  }
  , {
    "./HelperColorsPriorities.js": 130
  }],
  126: [function(e, t, n) {
    var r, o, i, s;
    s = window.Signals,
    r = window.AmiMenu,
    o = e("./HelperColorsPriorities.js"),
    i = {},
    n.get = function() {
      return i.Menu
    }
    ,
    n.init = function() {
      var e;
      return i.Menu = e = new r,
      $addClass(e.menu_holder, "priority_menu"),
      e.with_arrow = !0,
      e.pos_y_offset = 7,
      e.arrow_y_offset = 15,
      e.arrow_x_offset = 4,
      e.addItems(o.createPriorities(function(e) {
        return s.sendSignal("menu_priority_changed", e),
        !1
      })),
      $AEV(document, "click", e.hide),
      e
    }
  }
  , {
    "./HelperColorsPriorities.js": 130
  }],
  127: [function(e, t, n) {
    var r, o, i, s, a;
    a = window.Signals,
    r = window.AmiMenu,
    s = e("../components/project_list/.coffee.ProjectColors.js"),
    o = e("./HelperColorsPriorities.js"),
    i = {},
    n.get = function() {
      return i.Menu
    }
    ,
    n.init = function() {
      var e;
      return i.Menu = e = new r,
      e.addItems(e.colors = o.createColor(s.get(), function(t) {
        return a.sendSignal("color_selected", t),
        e.hide(),
        !1
      })),
      $addClass(e.colors.view, "project_list_colors"),
      $AEV(document, "click", e.hide),
      e
    }
  }
  , {
    "../components/project_list/.coffee.ProjectColors.js": 85,
    "./HelperColorsPriorities.js": 130
  }],
  128: [function(e, t, n) {
    var r, o, i, s;
    i = window.Signals,
    r = window.AmiMenu,
    s = window.imageSprite,
    o = null ,
    n.get = function() {
      return o
    }
    ,
    n.init = function(e) {
      var t, n, i, a;
      return o = new r,
      o.pos_x_offset = -12,
      $addClass(o.menu_holder, "reminders_menu"),
      n = SPAN(s("cmp_rem_absolute", 29, 29), _("Date and time")),
      a = SPAN(s("cmp_rem_relative", 29, 29), _("Before task")),
      i = SPAN(s("cmp_rem_location", 29, 29), _("Location")),
      o.addItems(r.createItem(n, function() {
        return e.adder.onChangeInterface("absolute")
      }), t = r.createItem(a, function() {
        return e.adder.onChangeInterface("relative")
      }), r.createItem(i, function() {
        return e.adder.onChangeInterface("location")
      })),
      o.setRelativePossible = function(e) {
        return e ? $show(t.view.parentNode) : $hide(t.view.parentNode)
      }
      ,
      $AEV(document, "click", o.hide),
      o
    }
  }
  , {}],
  129: [function(e, t, n) {
    var r, o, i;
    r = window.AmiMenu,
    i = window.Signals,
    o = {},
    n.get = function() {
      return o.Menu
    }
    ,
    n.init = function() {
      var e;
      return o.Menu = e = new r,
      e.with_arrow = !0,
      e.pos_y_offset = 3,
      e.arrow_y_offset = 15,
      e.arrow_x_offset = 4,
      e.addItems(r.createItem(_("Archive"), function() {
        return i.sendSignal("menu_selecter_to_history"),
        !1
      }, {
        extra_class: "menu_indent"
      }), r.createItem(_("Delete"), function() {
        return i.sendSignal("menu_selecter_delete"),
        !1
      }, {
        extra_class: "menu_indent"
      }), r.createSeparator(), r.createItem(_("Add label"), function() {
        return i.sendSignal("menu_selecter_add_label"),
        !1
      }, {
        extra_class: "menu_indent"
      }), r.createItem(_("Remove label"), function() {
        return i.sendSignal("menu_selecter_remove_label"),
        !1
      }, {
        extra_class: "menu_indent"
      })),
      $AEV(document, "click", e.hide),
      e
    }
  }
  , {}],
  130: [function(e, t, n) {
    function r(e) {
      var t = UL({
        class: "menu_buttons priorities"
      });
      $add(t, LI({
        class: "lbl"
      }, _("Priority")));
      var n = LI({
        class: "priorities"
      });
      return $map([4, 3, 2, 1], function(t) {
        var r = 5 - t
          , o = d("cmp_priority" + t, 22, 22)
          , i = A({
          c: "a_priority"
        }, o);
        i.priority = r,
        l.showSimpleText(i, _("Priority %s").replace("%s", t), null , 0, 5),
        $AEV(i, ["click", "touchstart"], function(t) {
          return $preventDefault(t),
          e(r, i),
          !1
        }),
        c(i),
        $add(n, i)
      }),
      $add(t, n),
      {
        type: "item",
        view: t,
        extra_class: "no_hover"
      }
    }
    function o(e, t) {
      var n = $all("li", "colors", e.colors.view)[0];
      $map($AF(n.childNodes), function(e, n) {
        n == t ? $addClass(e, "selected_color") : $removeClass(e, "selected_color")
      })
    }
    function i(e, t) {
      var n = UL({
        class: "menu_buttons colors"
      })
        , r = LI({
        class: "colors"
      });
      return $map(e, function(e, n) {
        var o = A(IMG({
          src: "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif",
          width: 18,
          height: 20,
          c: "object_color"
        }));
        o.style.backgroundColor = e,
        o.onclick = $p(t, n, o, null ),
        c(o),
        $add(r, o)
      }),
      $add(n, r),
      {
        type: "item",
        view: n,
        extra_class: "no_hover"
      }
    }
    function s(e) {
      $addClass(e, "hovering")
    }
    function a(e) {
      $removeClass(e, "hovering")
    }
    function c(e) {
      $AEV(e, "mouseover", $p(s, e)),
      $AEV(e, "mouseout", $p(a, e))
    }
    var d = window.imageSprite
      , l = window.AmiTooltip;
    window.$static_path;
    t.exports = {
      createPriorities: r,
      selectColor: o,
      createColor: i
    }
  }
  , {}],
  131: [function(e, t, n) {
    function r(e, t) {
      i(t, e.json.priority);
      var n = t.current_holder.json
        , r = {
        with_help_text: !0,
        with_smart_schedule: !0,
        with_today: !0,
        with_postpone: !!n.due_date,
        with_tomorrow: !n.due_date,
        with_next_week: !0,
        with_more: !0,
        items: n
      }
        , o = function(n) {
        var r;
        (r = t.saveCurrentItem ? t.saveCurrentItem : function(e) {
          e()
        }
        )(function() {
          l.updateItemsToDate([e], n),
          t.hide()
        })
      }
        , s = d.create(o, r);
      $replace(t.scheduler_holder.view, s)
    }
    function o(e) {
      $AEV(document, "click", function(t) {
        var n = $eventElm(t);
        return !(!c.active || !$parent(n, "div", "dp_cal")) || (!c.active || $hasClass(n, "dp_icon") || $hasClass(n, "cmp_scheduler_more") ? e.hide(t) : (c.remove(),
        !0))
      })
    }
    function i(e, t) {
      var n = $all("li", "priorities", e.menu_holder)[0];
      s(),
      $map($AF(n.childNodes), function(e) {
        e.priority == t && $addClass(e, "pri_selected")
      })
    }
    function s() {
      $map($all("a", "a_priority"), function(e) {
        $removeClass(e, "pri_selected"),
        $removeClass(e, "hovering")
      })
    }
    var a = window.Signals
      , c = window.MiniCal
      , d = e("../components/smart_scheduler/.coffee.SmartScheduler.js")
      , l = e("../components/items_utils/.coffee.ItemCommonEdits.js");
    a.connect("update_priority", s),
    t.exports = {
      annotateItemEditMenu: r,
      miniCalClose: o,
      selectPriority: i
    }
  }
  , {
    "../components/items_utils/.coffee.ItemCommonEdits.js": 46,
    "../components/smart_scheduler/.coffee.SmartScheduler.js": 107
  }],
  132: [function(e, t, n) {
    function r(e, t) {
      return function() {
        var n = e.current_form;
        return n && "" !== $gc(n, null , "richtext_editor").proxyGetValue() ? void ("edit" == e.current_mode ? e.saveItem(n, function() {
          return e.showAddItem(!0, t)
        }) : e.addItem(n, function() {
          return e.showAddItem(!0, t)
        })) : e.showAddItem(!0, t)
      }
    }
    function o(e, t) {
      if (!e)
        return null ;
      var n = e.current_holder;
      return e.current_holder = null ,
      t !== !1 && e.hide(),
      n
    }
    e("../models/.coffee.ItemsModel.js");
    t.exports = {
      menuSaveAndAdd: r,
      getAndResetCurrent: o
    }
  }
  , {
    "../models/.coffee.ItemsModel.js": 153
  }],
  133: [function(e, t, n) {
    var r, o = window.AmiMenu, i = window.Signals, s = window.GB_getLast, a = e("./HelpersMenuGeneral.js"), c = e("./HelperMenuAnnotations.js"), d = e("./HelperColorsPriorities.js"), l = e("../components/items_utils/.coffee.ItemCommonEdits.js"), u = e("../components/items_utils/ItemUniqueLink.js"), h = e("../components/generic_manager/GenericManagerUtils.js"), f = e("../components/reminders/Reminders.js"), p = e("./../components/agenda/.coffee.AgendaUtils.js"), m = e("../components/item_selecter/ItemSelecter.js"), g = {
      init: function(e) {
        r = new o,
        r.saveCurrentItem = e.saveCurrentItem,
        r.addItems(o.createItem(_("Edit task"), function() {
          e.editCurrentItem(a.getAndResetCurrent(r))
        }), o.createSeparator(), r.scheduler_holder = {
          type: "item",
          view: DIV(),
          extra_class: "no_hover"
        }, function() {
          return menu_item = d.createPriorities(function(t) {
            e.saveCurrentItem(function() {
              g.updatePriority(e, t)
            })
          }),
          menu_item.extra_class += " sel_f_priorities",
          menu_item
        }()),
        r.addItems(o.createSeparator(), o.createItem(_("Reminders"), function() {
          var e = a.getAndResetCurrent(r);
          return e && f.show(e),
          !1
        })),
        window.User.is_premium && r.addItems(o.createItem(_("View activity log"), function() {
          var e = a.getAndResetCurrent(r);
          return i.sendSignal("activity_log.show", null , e.json.id),
          !1
        }));
        var t, n;
        return r.addItems(o.createSeparator(), t = o.createItem(_("Archive task"), $p(e.saveCurrentItem, $p(g.forceComplete, e))), o.createItem(_("Move to another project"), function(t) {
          e.saveCurrentItem(function() {
            g.showMoveTo(t)
          })
        }), o.createItem(_("Link to task"), function() {
          var e = a.getAndResetCurrent(r);
          return e && u.show(e.json),
          !1
        }), o.createSeparator(), n = o.createItem(_("Delete task"), g.deleteCurrentItem)),
        r.adaptToNoteMenu = function(e) {
          var r = s();
          r && $hasClass(r.g_window, "notes_gb_window") ? $hide(t.view.parentNode, n.view.parentNode) : $show(t.view.parentNode, n.view.parentNode)
        }
        ,
        r.hide_callbacks.push(function() {
          $removeClass($all("li", "on_menu_show"), "on_menu_show")
        }),
        r.hide_menu_icon = !0,
        c.miniCalClose(r),
        i.connect("hide_editor_menu", function() {
          r.hide()
        }),
        r
      },
      get: function() {
        return r
      },
      toggle: function(e, t, n, o) {
        return !e.disabled && (m.deselectAll(),
        r.adaptToNoteMenu(),
        $removeClass($all("li", "on_menu_show"), "on_menu_show"),
        $addClass(e, "on_menu_show"),
        r.current_holder = e,
        c.annotateItemEditMenu(e, r),
        r.toggle(t, e, o),
        !1)
      },
      updatePriority: function(e, t) {
        var n = a.getAndResetCurrent(r);
        if (n) {
          var o = n.json.priority;
          l.updatePriority(n, t),
          e.refresh(n.json, {
            priority: o,
            due_date: n.json.due_date
          })
        }
      },
      forceComplete: function(e) {
        var t = a.getAndResetCurrent(r);
        return t && e.completeItem(t, {
          shift: !0
        }, !0),
        !1
      },
      deleteCurrentItem: function() {
        var e = a.getAndResetCurrent(r);
        if (e) {
          var t = $child(e, "img", "arrow");
          if (t)
            try {
              p.fetchChildren(t)
            } catch (e) {}
          h.getChildren(e, !0);
          l.deleteItems([e])
        }
      },
      showMoveTo: function(e) {
        var t = $eventElm(e)
          , n = a.getAndResetCurrent(r, !1);
        return n && m.showMoveItems(t, [n]),
        !1
      }
    };
    t.exports = g
  }
  , {
    "../components/generic_manager/GenericManagerUtils.js": 42,
    "../components/item_selecter/ItemSelecter.js": 43,
    "../components/items_utils/.coffee.ItemCommonEdits.js": 46,
    "../components/items_utils/ItemUniqueLink.js": 49,
    "../components/reminders/Reminders.js": 100,
    "./../components/agenda/.coffee.AgendaUtils.js": 12,
    "./HelperColorsPriorities.js": 130,
    "./HelperMenuAnnotations.js": 131,
    "./HelpersMenuGeneral.js": 132
  }],
  134: [function(e, t, n) {
    var r, o = window.AmiMenu, i = e("./HelpersMenuGeneral.js"), s = {
      get: function() {
        return r
      },
      init: function(e) {
        return r = new o,
        r.hide_menu_icon = !0,
        r.addItems(o.createItem(_("Edit filter"), function() {
          return window.User.is_premium ? e.saveCurrentItem(e.editCurrentItem) : e.premiumOnly()
        }), o.createItem(_("Delete filter"), function() {
          if (!window.User.is_premium)
            return e.premiumOnly();
          var t = i.getAndResetCurrent(r);
          return t && e.deleteCurrentItem(t),
          !1
        })),
        $AEV(document, "click", r.hide),
        r
      }
    };
    t.exports = s
  }
  , {
    "./HelpersMenuGeneral.js": 132
  }],
  135: [function(e, t, n) {
    var r, o = window.AmiMenu, i = e("./HelpersMenuGeneral.js"), s = {
      get: function() {
        return r
      },
      init: function(e) {
        return r = new o,
        r.hide_menu_icon = !0,
        r.addItems(o.createItem(_("Edit label"), $p(e.saveCurrentItem, e.editCurrentItem)), o.createItem(_("Delete label"), function() {
          var t = i.getAndResetCurrent(r);
          t && e.deleteCurrentItem(t)
        })),
        $AEV(document, "click", r.hide),
        r
      }
    };
    t.exports = s
  }
  , {
    "./HelpersMenuGeneral.js": 132
  }],
  136: [function(e, t, n) {
    var r, o = window.AmiMenu, i = window.Signals, s = e("./HelpersMenuGeneral.js"), a = e("./HelperMenuAnnotations.js"), c = e("./HelperColorsPriorities.js"), d = e("../components/reminders/Reminders.js"), l = e("../components/item_selecter/ItemSelecter.js"), u = e("../components/items_utils/ItemUniqueLink.js"), h = e("../components/items_utils/.coffee.ItemCommonEdits.js"), f = {
      init: function(e) {
        return r = new o,
        r.addItems(o.createItem(_("Add task above"), function(t) {
          return s.menuSaveAndAdd(e.getCurrentEditor(), !0)(t)
        }), o.createItem(_("Add task below"), function(t) {
          s.menuSaveAndAdd(e.getCurrentEditor(), !1)(t)
        }), o.createItem(_("Edit task"), function() {
          var t = e.getCurrentEditor();
          return t.saveCurrentItem(t.editCurrentItem)
        }), o.createSeparator(), r.scheduler_holder = {
          type: "item",
          view: DIV(),
          extra_class: "no_hover"
        }, function() {
          return menu_item = c.createPriorities(function(e) {
            var t = s.getAndResetCurrent(r);
            t && h.updatePriority(t, e)
          }),
          menu_item.extra_class += " sel_priorities",
          menu_item
        }()),
        r.addItems(o.createSeparator(), o.createItem(_("Reminders"), function() {
          var e = s.getAndResetCurrent(r);
          return d.show(e),
          !1
        })),
        r.addItems(o.createSeparator()),
        window.User.is_premium && r.addItems(o.createItem(_("View activity log"), function() {
          var e = s.getAndResetCurrent(r);
          return i.sendSignal("activity_log.show", null , e.json.id),
          !1
        })),
        r.addItems(o.createItem(_("Archive task"), function() {
          var t = e.getCurrentEditor()
            , n = s.getAndResetCurrent(r);
          t && n && t.completeItem(n, {
            shift: !0
          }, !0)
        }), o.createItem(_("Move to another project"), function(e) {
          return f.showMoveTo(e)
        }, {
          extra_class: "sel_move_task"
        }), o.createItem(_("Link to task"), function() {
          var e = s.getAndResetCurrent(r);
          return u.show(e.json),
          !1
        }), o.createSeparator(), o.createItem(_("Delete task"), function() {
          var t = s.getAndResetCurrent(r);
          return e.getCurrentEditor().deleteCurrentItem(t),
          !1
        }, {
          extra_class: "sel_delete_task"
        })),
        r.hide_menu_icon = !0,
        a.miniCalClose(r),
        r.hide_callbacks.push(function() {
          $removeClass($all("li", "on_menu_show"), "on_menu_show")
        }),
        i.connect("hide_editor_menu", function() {
          r.hide()
        }),
        r
      },
      get: function() {
        return r
      },
      toggle: function(e, t, n, o) {
        return !e.disabled && (l.deselectAll(),
        $removeClass($all("li", "on_menu_show"), "on_menu_show"),
        $addClass(e, "on_menu_show"),
        r.current_holder = e,
        a.annotateItemEditMenu(e, r),
        r.toggle(t, e, o),
        !1)
      },
      showMoveTo: function(e) {
        var t = $eventElm(e)
          , n = s.getAndResetCurrent(r, !1);
        return n && l.showMoveItems(t, [n]),
        !1
      }
    };
    t.exports = f
  }
  , {
    "../components/item_selecter/ItemSelecter.js": 43,
    "../components/items_utils/.coffee.ItemCommonEdits.js": 46,
    "../components/items_utils/ItemUniqueLink.js": 49,
    "../components/reminders/Reminders.js": 100,
    "./HelperColorsPriorities.js": 130,
    "./HelperMenuAnnotations.js": 131,
    "./HelpersMenuGeneral.js": 132
  }],
  137: [function(e, t, n) {
    var r, o = window.Signals, i = window.AmiMenu, s = e("../components/items_utils/ItemsSortBy.js"), a = e("../components/project_editor/.coffee.ProjectExtraActions.js"), c = e("../components/templates/.coffee.Templates.js");
    n.get = function() {
      return r
    }
    ,
    n.init = function(e) {
      return r = new i,
      r.addItems(i.createItem(_("Sort by date"), s.sortByDate), i.createItem(_("Sort by priority"), s.sortByPriority), i.createItem(_("Sort by name"), s.sortByName), i.createItem(_("Sort by responsible"), s.sortByResponsible), i.createSeparator()),
      window.User.is_premium && (r.addItems(i.createItem(_("View activity log"), function() {
        return o.sendSignal("activity_log.show", e.getCurrentProjectId()),
        r.hide(null , !0),
        !1
      })),
      i.createSeparator()),
      r.addItems(i.createItem(_("Import from template"), function() {
        return c.showImport(e.getCurrentProjectId()),
        r.hide(),
        !1
      }), i.createItem(_("Export as a template") + " (CSV)", function() {
        return c.showExportTemplate(e.getCurrentProjectId()),
        r.hide(),
        !1
      }), i.createSeparator(), i.createItem(_("Email tasks to this project"), function() {
        return a.showEmails(e.getCurrentProjectId()),
        !1
      })),
      $AEV(document, "click", r.hide),
      o.connect("sort_by_done", function() {
        r.hide()
      }),
      r
    }
  }
  , {
    "../components/items_utils/ItemsSortBy.js": 50,
    "../components/project_editor/.coffee.ProjectExtraActions.js": 82,
    "../components/templates/.coffee.Templates.js": 112
  }],
  138: [function(e, t, n) {
    var r, o = window.AmiMenu, i = e("./HelpersMenuGeneral.js"), s = e("../components/project_list/.coffee.ProjectArchive.js"), a = e("../components/project_editor/.coffee.ProjectExtraActions.js"), c = e("../components/sharing/.coffee.SharingManager.js");
    n.get = function() {
      return r
    }
    ,
    n.init = function(e) {
      var t;
      return r = new o,
      r.addItems(o.createItem(_("Add project above"), i.menuSaveAndAdd(e, !0), {
        extra_class: "project_archive_action project_inbox_action"
      }), o.createItem(_("Add project below"), i.menuSaveAndAdd(e, !1), {
        extra_class: "project_archive_action"
      }), o.createSeparator("project_archive_action"), o.createItem(_("Edit project"), $p(e.saveCurrentItem, e.editCurrentItem), {
        extra_class: "project_archive_action project_inbox_action"
      }), o.createSeparator("project_archive_action project_inbox_action"), o.createItem(_("Share Project"), function() {
        var e = i.getAndResetCurrent(r);
        return e && c.show(e.json.id),
        !1
      }, {
        extra_class: "project_archive_action"
      }), t = o.createItem(_("Email tasks to this project"), function() {
        var e = i.getAndResetCurrent(r);
        return a.showEmails(e.json.id)
      }, {
        extra_class: "project_archive_action"
      }), o.createSeparator("project_archive_action project_inbox_action"), o.createItem(SPAN({
        id: "menu_archive_text"
      }, _("Archive project")), function() {
        var e = i.getAndResetCurrent(r);
        if (e) {
          var t = e.json;
          t.is_archived ? s.unarchive(e) : s.archive(e)
        }
        return !1
      }, {
        extra_class: "project_inbox_action"
      }), o.createItem(SPAN({
        id: "menu_delete_text"
      }, _("Delete project")), function() {
        var t = i.getAndResetCurrent(r);
        return e.deleteCurrentItem(t)
      }, {
        extra_class: "project_inbox_action"
      })),
      r.hide_menu_icon = !0,
      $AEV(document, "click", r.hide),
      r
    }
  }
  , {
    "../components/project_editor/.coffee.ProjectExtraActions.js": 82,
    "../components/project_list/.coffee.ProjectArchive.js": 84,
    "../components/sharing/.coffee.SharingManager.js": 105,
    "./HelpersMenuGeneral.js": 132
  }],
  139: [function(e, t, n) {
    function r() {
      var e = UL({
        class: "menu_buttons priorities"
      });
      $add(e, LI({
        class: "lbl"
      }, _("Apps")));
      var t = LI({
        class: "priorities"
      })
        , n = function(e, n, r) {
        var o = a("cmp_" + e, 22, 22)
          , i = {
          c: "a_priority app_icon fixed_pos",
          href: r,
          target: "_blank"
        }
          , s = A(i, o);
        $AEV(s, "click", function() {
          return !0
        }),
        c.showSimpleText(s, n, null , null , 5),
        $add(t, s)
      }
      ;
      return h() || n("pandroid", _("Android"), "https://play.google.com/store/apps/details?id=com.todoist"),
      n("pios", _("iPhone"), "https://geo.itunes.apple.com/us/app/todoist-to-do-list-task-manager/id572688855"),
      h() || ($isMac() ? n("pmac", _("Mac"), "https://geo.itunes.apple.com/us/app/todoist-to-do-list-task-manager/id585829637?mt=12") : n("pwindows", _("Windows"), "/windows")),
      n("menu_on", _("More") + "...", "/Help/Apps"),
      $add(e, t),
      e
    }
    function o() {
      var e = window.location.href
        , t = {
        onSuccess: function() {
          e.indexOf("?") != -1 ? e = e.replace("?", "?print_mode=1&") : e.indexOf("#") != -1 && (e = e.replace("#", "?print_mode=1#")),
          e.indexOf("#") != -1 && (e = e.split("#")[0] + "#" + f.getCurrentLocation()),
          e = e.replace("mini=1", "minip=0"),
          window.open(e)
        }
      };
      return g.sync(t, !0),
      !1
    }
    var i, s = window.Signals, a = window.imageSprite, c = window.AmiTooltip, d = window.AmiMenu, l = window.GB_show, u = window.DateUtils, h = e("../components/misc/Misc.js").isMacApp, f = e("../components/location_manager/LocationManager.js"), p = e("../components/opener/WindowOpener.js"), m = e("../mini/.coffee.Popout.js"), g = e("../models/.coffee.SyncEngine.js"), y = e("../models/.coffee.VersionUpdater.js");
    n.get = function() {
      return i
    }
    ,
    n.open = function(e) {
      i.toggle($gc(e, "img")),
      window.FLUID_MINI || window.IS_MINI ? $show($all("tr", "menu_mini_only")) : $hide($all("tr", "menu_mini_only")),
      window.User.is_biz_admin ? $show($all("tr", "menu_biz_admin")) : $hide($all("tr", "menu_biz_admin")),
      h() || (window.User.business_account_id ? $hide($all("tr", "menu_no_biz_user")) : $show($all("tr", "menu_no_biz_user")));
      var t = $("last_synced");
      return $replace(t, SPAN(BR(), _("Last synced ") + " " + u.prettyDate(g.last_synced.getTime()))),
      !1
    }
    ,
    BlogURLS = {
      ja: "https://blog.todoist.com/ja",
      ru: "https://blog.todoist.com/ru",
      pt_BR: "https://blog.todoist.com/pt",
      pt_PT: "https://blog.todoist.com/pt",
      es: "https://blog.todoist.com/es",
      it: "https://blog.todoist.com/it",
      ko: "https://blog.todoist.com/ko",
      zh_CN: "https://blog.todoist.com/zh-cn",
      zh_TW: "https://blog.todoist.com/zh-cn"
    },
    n.init = function() {
      i = new d,
      i.with_arrow = !0,
      i.arrow_fixed = !0,
      i.pos_y_offset = 9,
      i.arrow_y_offset = 12;
      var e, t, n, a;
      i.addItems(d.createItem(_("Sync"), function() {
        return g.sync(null , !0, !0),
        i.hide(),
        !1
      }), d.createItem(_("Open Todoist.com"), function() {
        return window.open("https://todoist.com/"),
        !1
      }, {
        extra_class: "menu_mini_only"
      }), a = d.createItem(_("Popout in a window"), function() {
        return m.launch(),
        i.hide(),
        !1
      }), d.createSeparator("menu_mini_only"), d.createItem(_("Todoist Business Admin"), function() {
        return window.open("/business/users"),
        !1
      }, {
        extra_class: "menu_biz_admin"
      }), d.createSeparator("menu_biz_admin"), d.createItem(_("Todoist Settings"), function() {
        return l(_("Todoist Settings"), "/Users/viewPrefs", 550, 750)
      }), d.createItem(_("Print current page"), function() {
        return o(),
        !1
      })),
      window.User.is_premium && i.addItems(d.createItem(_("View activity log"), function() {
        return track("Menu", "MenuUser", "ActivityLog"),
        s.sendSignal("activity_log.show"),
        i.hide(null , !0),
        !1
      })),
      i.addItems(d.createSeparator(), d.createItem(_("Todoist Premium"), function() {
        return window.open("/premium"),
        !1
      }, {
        extra_class: "menu_no_biz_user"
      }), !h() && d.createItem(_("Todoist Business"), function() {
        return window.open("/business"),
        !1
      }, {
        extra_class: "menu_no_biz_user"
      }), d.createSeparator("menu_no_biz_user"), d.createItem(_("Todoist Support"), function() {
        return window.open("/Help"),
        !1
      }), d.createItem(_("Todoist Blog"), function() {
        return window.open(BlogURLS[window.LANG] || "https://blog.todoist.com/"),
        !1
      }), d.createItem(_("Keyboard shortcuts"), function() {
        return p.showKeyboardShortcuts(),
        !1
      }), d.createItem(_("Gift Todoist Premium"), function() {
        return window.open("/gifts"),
        !1
      }), d.createSeparator(), d.createItem(_("Log out"), function() {
        s.sendSignal("logout")
      }), d.createSeparator(), n = {
        type: "item",
        view: r(),
        extra_class: "no_hover"
      }, d.createSeparator(), e = d.createItem(SPAN(_("New version available"), t = SPAN()), y.update, {
        extra_class: "menu_new_version"
      }), n = {
        type: "item",
        view: SPAN(A({
          href: "/changelog",
          target: "_blank"
        }, _("Version ") + " " + $queryArgument("v")), SPAN({
          id: "last_synced"
        })),
        extra_class: "no_hover version"
      }),
      m.isSupported() || $hide(a.view.parentNode),
      $AEV(document, "click", i.hide),
      $hide($all("tr", "menu_new_version")),
      s.connect("new_version_available", function(e) {
        $show($all("tr", "menu_new_version")),
        $setHTML(t, " (" + e + ")")
      })
    }
  }
  , {
    "../components/location_manager/LocationManager.js": 62,
    "../components/misc/Misc.js": 64,
    "../components/opener/WindowOpener.js": 74,
    "../mini/.coffee.Popout.js": 143,
    "../models/.coffee.SyncEngine.js": 167,
    "../models/.coffee.VersionUpdater.js": 173
  }],
  140: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.imageSprite,
    r = function() {
      function e() {
        this.reset = i(this.reset, this),
        this.onContollerHide = i(this.onContollerHide, this),
        this.onContentSave = i(this.onContentSave, this)
      }
      return e.prototype.type = null ,
      e.prototype.email_id = "",
      e.prototype.title = "",
      e.prototype.onContentSave = function(e) {
        var t;
        return e = $strip(e),
        e.indexOf("@") !== -1 && (e = " " + e + " "),
        "gmail_new" === this.type ? (e = e.replace(/\(/g, "["),
        e = e.replace(/\)/g, "]"),
        "" + this.email_id + " (" + e + ")") : "gmail" === this.type ? "[[gmail=" + this.email_id + ", " + e + " ]]" : "thunderbird" === this.type ? t = "[[thunderbird\n " + e.replace(/\n/g, "") + "\n" + this.email_id.replace(/\n/g, "") + " \n ]]" : "outlook" === this.type ? "[[outlook=" + this.email_id + ", " + e + " ]]" : e
      }
      ,
      e.prototype.onContentShow = function() {
        return this.title
      }
      ,
      e.prototype.onContollerHide = function() {
        return this.type = null ,
        this.email_id = "",
        this.title = ""
      }
      ,
      e.prototype.reset = function() {
        return this.onContollerHide()
      }
      ,
      e.prototype.setupByContent = function(e) {
        var t, n;
        if (1 === (null != (n = e.match(/mail.google.com\/mail/g)) ? n.length : void 0) && (t = e.match(/(https?:\/\/mail.google.com\/mail\/[^\s]+) \(([^\)]+)\)/),
        t && (this.email_id = t[1],
        this.title = t[2],
        this.type = "gmail_new")),
        e.indexOf("[[gmail=") !== -1 && (t = e.match(/\[\[gmail=(.+?),\s*(.+?)\]\]/),
        t && (this.email_id = t[1],
        this.title = t[2],
        this.type = "gmail")),
        e.indexOf("[[thunderbird") !== -1 && (t = e.match(/\[\[thunderbird\n?([^\n]+)\n([^\n]+)\n\s*\]\]/),
        t && (this.email_id = t[2],
        this.title = t[1],
        this.type = "thunderbird")),
        e.indexOf("[[outlook=") !== -1 && (t = e.match(/\[\[outlook=(.+?),\s*(.+?)\]\]/)))
          return this.email_id = t[1],
          this.title = t[2],
          this.type = "outlook"
      }
      ,
      e.prototype.annotateWithIcon = function(e) {
        var t;
        if (t = e.parentNode)
          return $addClass(t, "has_content_icon"),
          $ATT(t, o("cmp_email", 16, 16))
      }
      ,
      e
    }(),
    t.exports = {
      GContentTransformers: r,
      ContentTransformers: new r
    }
  }
  , {}],
  141: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    r = function() {
      function e() {
        this._recalculate = i(this._recalculate, this),
        this.recalculate = i(this.recalculate, this)
      }
      return e.prototype.init = function() {
        return $AEV(window, "resize", function(e) {
          return function() {
            var t;
            return e.recalculate(),
            e.timeout_refresh && clearTimeout(e.timeout_refresh),
            t = function() {
              return o.sendSignal("refresh_interface")
            }
            ,
            e.timeout_refresh = setTimeout(t, 15)
          }
        }(this)),
        o.connect("project_archived", this.recalculate),
        o.connect("project_unarchived", this.recalculate)
      }
      ,
      e.prototype.recalculate = function() {
        return this.timeout && clearTimeout(this.timeout),
        this.timeout = setTimeout(this._recalculate, 10)
      }
      ,
      e.prototype._recalculate = function() {
        var e, t, n, r, o, i, s, a, c, d, l, u, h;
        return u = $winSize(),
        e = $body(),
        t = e.offsetHeight,
        c = $("left_menu").offsetHeight,
        l = u.h,
        a = Math.max(c, l),
        n = $("content"),
        h = u.w,
        h < 750 || window.PRINT_MODE ? (window.FLUID_MINI = !0,
        $addClass(e, "mini_version"),
        d = h,
        $setWidth($("editor"), d - 65),
        s = "0px",
        $("all_holder").style.marginLeft = s,
        $("top_bar_inner").style.marginLeft = s) : (window.FLUID_MINI = !1,
        $removeClass(e, "mini_version"),
        $removeClass(e, "left_menu_show"),
        r = $("content").offsetWidth,
        $setWidth($("editor"), r - 85),
        h > 980 ? (o = h - 980,
        s = o / 2 + "px") : s = "0px",
        $("all_holder").style.marginLeft = s,
        $("top_bar_inner").style.marginLeft = s),
        this.isMacAppV6() && (e = $body(),
        $removeClass(e, "content_rounded"),
        $removeClass(e, "content_rounded_big"),
        window.FLUID_MINI || (h > 980 ? $addClass(e, "content_rounded_big") : $addClass(e, "content_rounded"))),
        window.FLUID_MINI ? n.style.minHeight = "0px" : n.style.minHeight = a + "px",
        h < 450 ? $addClass(e, "super_mini") : $removeClass(e, "super_mini"),
        i = $("left_menu"),
        window.FLUID_MINI ? setTimeout(function() {
          return $addClass(i, "left_menu_animated")
        }, 20) : $removeClass(i, "left_menu_animated")
      }
      ,
      e.prototype.isMacAppV6 = function() {
        return navigator.userAgent.indexOf("TDMacApp") !== -1
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {}],
  142: [function(e, t, n) {
    var r, o, i;
    r = e("./PluginVersion.js"),
    o = e("./.coffee.RatingsTooltip.js"),
    window.CUR_HREF = {},
    i = function(e) {
      var t, n;
      if (e && e.data && e.data.indexOf) {
        if (e.data.indexOf("--/--") !== -1) {
          if (n = e.data.split("--/--"),
          window.CUR_HREF.href === n[0])
            return;
          window.CUR_HREF = {
            href: n[0],
            title: n[1]
          },
          r.notifyExternalServices()
        }
        if (e.data.indexOf("GCHROME_MESSAGE") !== -1) {
          if (t = JSON.parse(e.data),
          window.CUR_HREF.href === t.href)
            return;
          window.CUR_HREF = t,
          r.notifyExternalServices()
        }
        if (e.data.indexOf("USER_TOOLTIP") !== -1)
          return t = JSON.parse(e.data),
          o.show(t)
      }
    }
    ,
    n.init = function() {
      return window.attachEvent ? window.attachEvent("onmessage", i) : window.addEventListener("message", i, !1)
    }
  }
  , {
    "./.coffee.RatingsTooltip.js": 144,
    "./PluginVersion.js": 145
  }],
  143: [function(e, t, n) {
    var r;
    r = {
      isSupported: function() {
        var e;
        return e = window.location.host,
        "chrome.todoist.com" === e || "firefox.todoist.com" === e
      },
      launch: function() {
        return r._popout("" + window.location, "Todoist", 500, 560),
        !1
      },
      _popout: function(e, t, n, r) {
        var o, i, s;
        return o = screen.width / 2 - n / 2,
        s = screen.height / 2 - r / 2,
        i = window.open("/app?mini=2", t, "toolbar=no, scrollbars=yes, width=" + n + ", height=" + r + ", top=" + s + ", left=" + o)
      }
    },
    window.Popout = t.exports = r
  }
  , {}],
  144: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Alerts,
    i = window.AmiButton,
    a = window.GB_showHTML,
    s = window.GB_hide,
    d = window.imageSprite,
    r = window.$static_path,
    l = e("../components/misc/Util.js").postMessageToWindow,
    c = function() {
      function e() {
        this.show = u(this.show, this)
      }
      return e.prototype.tooltip_shown = !1,
      e.prototype.show = function(e) {
        var t, n, r, c, l, u;
        if (!this.tooltip_shown && !$queryArgument("print_mode"))
          return c = e.message || "rate_chrome_plugin",
          "rate_chrome_plugin" === c && (r = _("If you enjoy using Todoist for Chrome, would you mind taking a moment and rate us?<br><br>" + _("It won't take more than a minute. Thanks for your support!"))),
          n = o.renderHolder(r),
          $add(n.icon, d("cmp_logo_dark", 35, 35)),
          $add(n.buttons, BR(), t = i.createButton(_("Rate it now"), null , "red")),
          $AEV(t, "click", function(t) {
            return function() {
              return window.open(e.action_url),
              t.disableTooltip()
            }
          }(this)),
          $add(n.buttons, BR(), BR()),
          $add(n.buttons, u = A({
            href: "#",
            c: "cancel",
            s: "margin-right: 10px;"
          }, _("Remind me later")), l = A({
            href: "#",
            c: "cancel"
          }, _("No, Thanks"))),
          $AEV(u, "click", this.reset),
          $AEV(l, "click", this.disableTooltip),
          $AEV([t, u, l], "click", s),
          a("", n.frame, 180, 330, {
            callback_fn: function() {
              return null
            }
          }),
          this.tooltip_shown = !0
      }
      ,
      e.prototype.disableTooltip = function() {
        return l(top, "DISABLE_TOOLTIP:chrome_rating")
      }
      ,
      e.prototype.reset = function() {
        return l(top, "RESET_TOOLTIP:chrome_rating")
      }
      ,
      e
    }(),
    t.exports = new c
  }
  , {
    "../components/misc/Util.js": 65
  }],
  145: [function(e, t, n) {
    function r(e) {
      window.CUR_HREF = e,
      p.notifyExternalServices()
    }
    function o() {
      return window.CUR_HREF ? window.CUR_HREF.href : null
    }
    var i = window.LibEdit
      , s = window.Signals
      , a = e("../external_services/OutlookIntegration.js")
      , c = e("../components/misc/Util.js").postMessageToWindow
      , d = e("../components/quick_add/.coffee.QuickAdd.js")
      , l = e("../components/project_editor/.coffee.ProjectEditorManager.js")
      , u = e("../components/richtext_editor/.coffee.NatrualLanguageParsing.js")
      , h = e("../mini/.coffee.ContentTransformers.js").ContentTransformers;
    window.CURRENT_EXERNAL_SERVICE = null ;
    var f = {
      isGmailDomain: function(e) {
        return e.indexOf("mail.google.com") != -1 || e.indexOf("googlemail.com") != -1
      },
      isCurHrefGmail: function() {
        var e = f
          , t = o();
        if (!t)
          return !1;
        if (e.isGmailDomain(t)) {
          var n = e.getGmailRealId(t);
          if (n)
            return !0
        }
        return !1
      },
      getGmailRealId: function(e) {
        if (!f.isGmailDomain(e))
          return null ;
        try {
          var t = e.split("/")
            , n = t[t.length - 1];
          if (n.indexOf(".") == -1 && n.indexOf("#") == -1 && n.indexOf("/") == -1 && 16 == n.length)
            return n
        } catch (e) {}
        return null
      },
      getThreadId: function(e) {
        var t = e.match(/th=(.{16})/);
        if (t)
          return t[1];
        var t = e.match(/\/([^\/\.]{16})/);
        return t ? t[1] : null
      }
    };
    window.linkRedirecter = function(e) {
      var t = e.getAttribute("thunder_id");
      if (t) {
        var n = JSON.stringify({
          type: "switchEmail",
          id: t
        });
        return top.postMessage(n, "*")
      }
      if (window.CUR_HREF && window.CUR_HREF.href) {
        var r = f.getThreadId(e.href)
          , o = window.CUR_HREF.href.match(/^(.+)#/);
        if (f.isGmailDomain(e.href) && r && o) {
          if ("T_FIREFOX_MESSAGE" == window.CUR_HREF.type) {
            var i = o[1] + "#inbox/" + r
              , n = JSON.stringify({
              type: "switchLocation",
              url: i
            });
            try {
              top.postMessage(n, "*")
            } catch (e) {}
            return !1
          }
          return !top.postMessage || (c(top, "SWITCH_URL:" + e.href),
          !1)
        }
      }
      return !0
    }
    ;
    var p = {
      init: function() {
        try {
          window.addEventListener("message", function(e) {
            if (e) {
              var t = e.data;
              t && t.indexOf("THUNDERBIRD_MESSAGE") != -1 && r(JSON.parse(t)),
              t && t.indexOf("T_FIREFOX_MESSAGE") != -1 && r(JSON.parse(t)),
              t && t.indexOf("GMAIL_MESSAGE_ADD") != -1 && (window.CUR_HREF = JSON.parse(t),
              setTimeout(function() {
                p.addToGenericController(!0)
              }, 100))
            }
          }, !1)
        } catch (e) {}
        s.connect("PluginVersion.notifyExternalServices", this.notifyExternalServices),
        s.connect("PluginVersion.addToGenericController", $p(this.addToGenericController, !0))
      },
      addToGenericController: function(e) {
        void 0 === e && (e = !1);
        var t = l.current_editor;
        if (t && p.force_quick_add === !1)
          t.addNewItem(!1, function() {
            var e = $gc(l.current_form, null , "richtext_editor");
            p.addToTextArea(e)
          });
        else if (!d.shown) {
          d.support_annotation = !1,
          d.toggle();
          var n = $child($("quick_add_task"), null , "richtext_editor");
          a.current_email_obj ? a.addToTextArea(n) : p.addToTextArea(n)
        }
        return !1
      },
      addToTextArea: function(e) {
        if (u.truncate_links = !0,
        window.CUR_HREF && window.CUR_HREF.unique_id) {
          var t = window.CUR_HREF;
          return t.unique_id.indexOf("TODOIST_WARN_USER_MESSAGE_NOT_SELECTED") != -1 ? (alert(_("Please select an email first before adding it as a task.")),
          !1) : (h.type = "thunderbird",
          h.email_id = t.unique_id,
          h.title = t.subject,
          h.annotateWithIcon(e),
          i.insertAtCursor(e, t.subject.replace(/\n/g, ""), !0),
          e.onchanged && e.onchanged(),
          !1)
        }
        if (!o())
          return !1;
        var n = f.getGmailRealId(o());
        if (n) {
          var r = window.CUR_HREF.title;
          r = r.replace(/[-\s]+[^\s]+@[^\s]+ - [^-]+$/, "");
          try {
            r = p._stripTitle(r)
          } catch (e) {}
          h.type = "gmail_new",
          h.email_id = window.CUR_HREF.href,
          h.title = r,
          h.annotateWithIcon(e),
          i.insertAtCursor(e, r, !0)
        } else {
          var s = p.getTitleAndUrl()
            , r = s[0]
            , a = s[1];
          r = a + " (" + r + ")",
          i.insertAtCursor(e, r, !0)
        }
        return !1
      },
      getTitleAndUrl: function() {
        var e = p._stripTitle(window.CUR_HREF.title);
        e.indexOf("(") != -1 && (e = e.replace(/\(/g, "["),
        e = e.replace(/\)/g, "]"));
        var t = o();
        return t.indexOf("teamcom.io") != -1 && (e = e.replace(/^\[\d+\]\s+/, ""),
        e = e.replace(" | TeamCom", "")),
        [e, t]
      },
      notifyExternalServices: function() {
        var e, t = !1, n = !0, r = _("Add email as task");
        if (a.current_email_obj ? (t = !0,
        e = a.addToTextArea) : window.CUR_HREF && window.CUR_HREF.unique_id ? (t = !0,
        e = p.addToTextArea) : o() && (t = !0,
        f.isCurHrefGmail() || (r = _("Add website as task"),
        n = !1),
        e = p.addToTextArea),
        setTimeout(p.notifyExternalServices, 500),
        t) {
          var i = window.CURRENT_EXERNAL_SERVICE;
          if (i && i.annotate_fn == e && i.annotate_text == r)
            return;
          window.CURRENT_EXERNAL_SERVICE = {
            annotate_fn: e,
            annotate_text: r,
            is_email: n
          }
        } else
          window.CURRENT_EXERNAL_SERVICE = null ;
        s.sendSignal("external_service_annotation", window.CURRENT_EXERNAL_SERVICE)
      },
      _stripTitle: function(e) {
        return e = e.replace(/\s\s+/g, " ").replace(/"/g, ""),
        e = e.replace(/\[/g, "(").replace(/\]/g, ")"),
        $strip(e)
      }
    };
    window.PluginVersion = p,
    t.exports = p
  }
  , {
    "../components/misc/Util.js": 65,
    "../components/project_editor/.coffee.ProjectEditorManager.js": 80,
    "../components/quick_add/.coffee.QuickAdd.js": 91,
    "../components/richtext_editor/.coffee.NatrualLanguageParsing.js": 103,
    "../external_services/OutlookIntegration.js": 120,
    "../mini/.coffee.ContentTransformers.js": 140
  }],
  146: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    a = e("./.coffee.TemporaryIds.js"),
    s = e("./.coffee.SyncEngine.js"),
    c = e("../utils/.es6.Utils.js"),
    o = function() {
      function e() {
        this._genericGet = d(this._genericGet, this),
        this.loadCachedData = d(this.loadCachedData, this),
        this.loadData = d(this.loadData, this),
        this.syncCachedData = d(this.syncCachedData, this),
        this.clearCache = d(this.clearCache, this),
        this.getActiveUsers = d(this.getActiveUsers, this),
        this.getInvitedUsers = d(this.getInvitedUsers, this),
        this.getAll = d(this.getAll, this),
        this.isProjectShared = d(this.isProjectShared, this),
        this.getUserById = d(this.getUserById, this),
        this.deleteFromProject = d(this.deleteFromProject, this),
        this.cleanProjectState = d(this.cleanProjectState, this),
        this._addToInvitedList = d(this._addToInvitedList, this),
        this.addInvite = d(this.addInvite, this),
        this.resolveTempId = d(this.resolveTempId, this),
        this.getByEmail = d(this.getByEmail, this),
        this.searchByName = d(this.searchByName, this),
        this.syncLocalModel = d(this.syncLocalModel, this),
        this.initState = d(this.initState, this),
        this.initState(),
        i.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this)),
        i.connect("resolve_temp.collaborator", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n)
          }
        }(this)),
        i.connect("clear_local_data", this.initState)
      }
      return e.prototype.DepItemsModel = null ,
      e.prototype.DepRemindersModel = null ,
      e.prototype.DepProjectsModel = null ,
      e.prototype.initState = function() {
        return this.is_shared_cache = {},
        this.get_all_cache = {},
        this.collaborators = {},
        this.projects_active = {},
        this.projects_invited = {}
      }
      ,
      e.prototype.syncLocalModel = function(e, t, n) {
        var r, o, s, c, d, l, u, h, f, _, p, m, g, y, w, v, j, b, I, $, A, S, C, T, k, D, E, x;
        for (h = this.collaborators,
        $ = 0,
        T = e.length; $ < T; $++)
          b = e[$],
          h[b.id] = b;
        for (m = this.projects_active,
        g = this.projects_invited,
        A = 0,
        k = t.length; A < k; A++)
          v = t[A],
          I = v.user_id,
          p = v.project_id,
          f = v.state,
          n[p] = p,
          s = !1,
          o = !1,
          "active" === f ? (r = m[p],
          r || (r = m[p] = {}),
          r[I] = 1,
          s = !0) : "invited" === f ? (this._addToInvitedList(p, I),
          o = !0) : "deleted" !== f && "inactive" !== f || (o = !0,
          s = !0),
          o && (r = m[p],
          r && r[I] && delete r[I]),
          s && (l = g[p],
          l && l[I] && delete l[I]);
        if (t.length > 0) {
          for (_ in g)
            if (c = g[_],
            d = $keys(c),
            0 !== d.length)
              for (S = 0,
              D = d.length; S < D; S++)
                j = d[S],
                "string" == typeof j && 0 === j.indexOf("_") && (delete c[j],
                y = a.getRealId(j),
                y && (c[y] = 1));
            else
              delete g[_];
          for (x = this.DepItemsModel.getAll(),
          C = 0,
          E = x.length; C < E; C++)
            u = x[C],
            w = u.responsible_uid,
            "string" == typeof w && 0 === w.indexOf("_") && (y = a.getRealId(w),
            y ? u.responsible_uid = y : u.responsible_uid = null );
          i.sendSignal("collaborators_states_updated"),
          this.clearCache()
        }
        return this.syncCachedData()
      }
      ,
      e.prototype.searchByName = function(e) {
        var t;
        return function() {
          var n, r, o, i;
          for (o = $values(this.collaborators),
          i = [],
          n = 0,
          r = o.length; n < r; n++)
            t = o[n],
            c.isNamePartialMatched(t.full_name, e) && i.push(t);
          return i
        }
        .call(this)
      }
      ,
      e.prototype.getByEmail = function(e) {
        var t, n, r, o;
        for (o = $values(this.collaborators),
        n = 0,
        r = o.length; n < r; n++)
          if (t = o[n],
          t.email === e)
            return t;
        return null
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h, f;
        if (s = this.collaborators,
        o = s[e]) {
          for (delete s[e],
          o.id = t,
          r = this.getByEmail(o.email),
          r && (r.id = t),
          h = this.DepItemsModel.getAll(),
          c = 0,
          l = h.length; c < l; c++)
            i = h[c],
            n = !1,
            i.responsible_uid === e && (i.responsible_uid = t,
            n = !0),
            n && this.DepItemsModel.syncCachedData();
          for (f = $values(this.DepRemindersModel.model_data),
          d = 0,
          u = f.length; d < u; d++)
            a = f[d],
            n = !1,
            a.notify_uid === e && (a.notify_uid = t,
            n = !0),
            n && this.DepRemindersModel.syncCachedData();
          return this.syncCachedData()
        }
      }
      ,
      e.prototype.addInvite = function(e, t) {
        var n, r, o;
        if (n = this.getByEmail(t),
        n ? (o = null ,
        this._addToInvitedList(e, n.id)) : (n = {
          email: t,
          full_name: t.split("@")[0]
        },
        o = n.id = a.generate("collaborator"),
        this.collaborators[n.id] = n,
        o = n.id,
        this._addToInvitedList(e, o)),
        r = this.DepProjectsModel.get(e))
          return s.queueUpdate({
            type: "share_project",
            temp_id: o,
            args: {
              project_id: e,
              email: t,
              name: r.name
            }
          }),
          i.sendSignal("project_shared", e, t),
          i.sendSignal("refresh_interface", [this.DepProjectsModel.get(e)])
      }
      ,
      e.prototype._addToInvitedList = function(e, t) {
        var n, r, o;
        if (window.User.id !== t)
          return o = this.projects_invited,
          n = o[e],
          n || (n = o[e] = {}),
          n[t] = 1,
          r = this.DepProjectsModel.get(e),
          r && (r.shared = !0),
          this.clearCache()
      }
      ,
      e.prototype.cleanProjectState = function(e, t) {
        var n;
        if (null == t && (t = !0),
        n = !1,
        this.projects_invited[e] && (delete this.projects_invited[e],
        n = !0),
        this.projects_active[e] && (delete this.projects_active[e],
        n = !0),
        n && t)
          return this.clearCache(),
          this.syncCachedData()
      }
      ,
      e.prototype.deleteFromProject = function(e, t) {
        var n, r, o, c, d;
        return c = this.DepProjectsModel.get(e),
        d = t.id,
        d = a.getRealId(d),
        o = this.projects_invited[e],
        o && o[d] && delete o[d],
        n = this.projects_active[e],
        n && n[d] && delete n[d],
        $keys(n).length + $keys(o).length <= 1 && (this.cleanProjectState(e, r = !1),
        c = this.DepProjectsModel.get(e),
        c && (c.shared = !1)),
        s.queueUpdate({
          type: "delete_collaborator",
          args: {
            project_id: e,
            email: t.email
          }
        }),
        this.clearCache(),
        i.sendSignal("refresh_interface", [c])
      }
      ,
      e.prototype.getUserById = function(e) {
        return this.collaborators[e]
      }
      ,
      e.prototype.isProjectShared = function(e) {
        var t, n, r, o;
        return void 0 !== this.is_shared_cache[e] ? this.is_shared_cache[e] : (o = !1,
        t = this.projects_active[e],
        t && $keys(t).length > 1 && (o = !0),
        n = this.projects_invited[e],
        n && $keys(n).length >= 1 && (o = !0),
        r = this.DepProjectsModel.get(e),
        r && void 0 !== r.shared && (o = r.shared),
        this.is_shared_cache[e] = o,
        o)
      }
      ,
      e.prototype.getAll = function(e) {
        var t, n, r, o, i, s, a, c;
        if (this.get_all_cache[e])
          return this.get_all_cache[e];
        for (r = this.getInvitedUsers(e),
        t = this.getActiveUsers(e),
        o = r.concat(t),
        i = {},
        n = [],
        i[window.User.email] = !0,
        a = 0,
        c = o.length; a < c; a++)
          s = o[a],
          i[s.email] || (n.push(s),
          i[s.email] = !0);
        return n = this.sort(n),
        n.splice(0, 0, window.User),
        this.get_all_cache[e] = n,
        n
      }
      ,
      e.prototype.getInvitedUsers = function(e) {
        return this._genericGet(e, this.projects_invited)
      }
      ,
      e.prototype.getActiveUsers = function(e) {
        return this._genericGet(e, this.projects_active)
      }
      ,
      e.prototype.clearCache = function() {
        return this.is_shared_cache = {},
        this.get_all_cache = {}
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("CollaboratorsU").set(this.collaborators),
        r("CollaboratorsA").set(this.projects_active),
        r("CollaboratorsI").set(this.projects_invited)
      }
      ,
      e.prototype.loadData = function(e) {
        var t, n, r;
        for (n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          this.collaborators[t.id] = t;
        return this.syncCachedData()
      }
      ,
      e.prototype.loadCachedData = function() {
        var e, t, n;
        if (e = r("CollaboratorsU").get(),
        e && (this.collaborators = e),
        t = r("CollaboratorsA").get(),
        t && (this.projects_active = t),
        n = r("CollaboratorsI").get())
          return this.projects_invited = n
      }
      ,
      e.prototype._genericGet = function(e, t) {
        var n, r, o, i, s, a, c;
        if (n = this.collaborators,
        r = [],
        t[e])
          for (c = $keys(t[e]),
          s = 0,
          a = c.length; s < a; s++)
            o = c[s],
            i = n[o],
            i && !i.is_deleted && r.push(i);
        return r = this.sort(r)
      }
      ,
      e.prototype.sort = function(e) {
        return e.sort(function(e, t) {
          var n, r;
          return n = e.full_name.toLowerCase(),
          r = t.full_name.toLowerCase(),
          n.localeCompare(r)
        })
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "../utils/.es6.Utils.js": 185,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170
  }],
  147: [function(e, t, n) {
    var r, o, i;
    i = e("./.coffee.UtilModels.js"),
    o = e("./.coffee.ItemsModel.js"),
    r = function() {
      function e() {}
      return e.prototype.annotate = function(e) {
        var t, n, r, s, a, c, d, l, u;
        for (e = e.sort(i.daySort),
        n = 1e3,
        t = !1,
        c = 0,
        l = e.length; c < l; c++)
          r = e[c],
          r.day_order || (r.day_order = n++,
          t = !0);
        if (t) {
          for (e = e.sort(i.daySort),
          s = {},
          a = 1,
          d = 0,
          u = e.length; d < u; d++)
            r = e[d],
            s[r.id] = a,
            r.day_order = a,
            a++;
          o.updateDayOrders(s)
        }
        return e
      }
      ,
      e
    }(),
    t.exports = new r
  }
  , {
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.UtilModels.js": 172
  }],
  148: [function(e, t, n) {
    var r, o, i, s, a, c, d, l = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    d = e("./.coffee.UtilModels.js"),
    i = e("./.coffee.ItemsModel.js"),
    c = e("./.coffee.TemporaryIds.js"),
    a = e("./.coffee.SyncEngine.js"),
    o = function() {
      function e() {
        this.loadCachedData = l(this.loadCachedData, this),
        this.syncCachedData = l(this.syncCachedData, this),
        this.loadData = l(this.loadData, this),
        this.deleteMany = l(this.deleteMany, this),
        this.updateOrdersIndents = l(this.updateOrdersIndents, this),
        this.update = l(this.update, this),
        this.add = l(this.add, this),
        this.resolveTempId = l(this.resolveTempId, this),
        this.getByName = l(this.getByName, this),
        this.getAll = l(this.getAll, this),
        this.get = l(this.get, this),
        this.getById = l(this.getById, this),
        this.syncLocalModel = l(this.syncLocalModel, this),
        this.initState = l(this.initState, this);
        var e, t, n, r, o, i;
        for (this.initState(),
        s.connect("clear_local_data", this.initState),
        s.connect("load_cached_data", function(e) {
          return function() {
            return e.loadData(e.loadCachedData())
          }
        }(this)),
        s.connect("resolve_temp.filter", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n)
          }
        }(this)),
        this.filters_default = {},
        t = [[_("Assigned to me"), ":to_me:", 12], [_("Assigned to others"), ":to_others:", 12], [_("Priority %s").replace("%s", 1), "priority 1", 6], [_("Priority %s").replace("%s", 2), "priority 2", 6], [_("Priority %s").replace("%s", 3), "priority 3", 6], [_("Priority %s").replace("%s", 4), "priority 4", 6], [_("View all"), "view all", 6], [_("No due date"), "no due date", 6]],
        this.default_free = [],
        r = 0,
        o = 0,
        i = t.length; o < i; o++)
          e = t[o],
          r++,
          n = {
            id: -r,
            item_order: -1,
            name: e[0],
            query: e[1],
            not_editable: e[3],
            color: e[2]
          },
          this.filters_default[-r] = n,
          this.default_free.push(n)
      }
      return e.prototype.max_limit = 150,
      e.prototype.initState = function() {
        return this.model_data = {}
      }
      ,
      e.prototype.syncLocalModel = function(e) {
        if (e.length > 0)
          return d.syncLocalModel(e, this.model_data),
          this.syncCachedData(),
          s.sendSignal("filters_updated", e)
      }
      ,
      e.prototype.getById = function(e) {
        return this.get(e)
      }
      ,
      e.prototype.get = function(e) {
        var t;
        return e = c.getRealId(e),
        t = this.model_data[e],
        t || (t = this.filters_default[e]),
        t
      }
      ,
      e.prototype.getAll = function(e) {
        var t;
        return null == e && (e = !1),
        window.User.is_premium ? (t = $values(this.model_data),
        t = t.sort(d.sortByItemOrder)) : this.default_free
      }
      ,
      e.prototype.getByName = function(e, t) {
        var n, r, o, i, s;
        i = [],
        s = this.model_data;
        for (o in s)
          if (r = s[o],
          n = r.name.toLowerCase(),
          n.indexOf(e) !== -1 && i.push(r),
          i.length >= t)
            break;
        return i
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.model_data[e])
          return n.id = t,
          this.model_data[t] = n,
          delete this.model_data[e],
          this.syncCachedData()
      }
      ,
      e.prototype.add = function(e) {
        var t, n;
        return $keys(this.model_data).length >= this.max_limit ? void alert(_("For performance reasons you can only add %s filters.").replace("%s", this.max_limit)) : (t = e,
        n = t.id = c.generate("filter"),
        e.name && (e.name = this.normalizeName(e.name)),
        this.model_data[t.id] = t,
        a.queueUpdate({
          type: "filter_add",
          temp_id: n,
          args: e
        }),
        this.syncCachedData(),
        t)
      }
      ,
      e.prototype.update = function(e, t) {
        var n;
        return n = this.get(e),
        n && (t.id = n.id,
        t.name && (t.name = this.normalizeName(t.name)),
        $update(n, t),
        a.queueUpdate({
          type: "filter_update",
          args: t
        }),
        this.syncCachedData()),
        n
      }
      ,
      e.prototype.updateOrdersIndents = function(e) {
        var t, n, r, o;
        r = {};
        for (n in e)
          t = e[n],
          o = this.getById(n),
          o && (o.item_order = t[0],
          o.id > 0 && (r[o.id] = o.item_order));
        return $keys(r).length > 0 && a.queueUpdate({
          type: "filter_update_orders",
          args: {
            id_order_mapping: $serialize(r)
          }
        }),
        this.syncCachedData()
      }
      ,
      e.prototype.deleteMany = function(e) {
        var t, n, r, o, i;
        for (n = this.model_data,
        i = [],
        r = 0,
        o = e.length; r < o; r++)
          t = e[r],
          n[t] && delete n[t],
          i.push(a.queueUpdate({
            type: "filter_delete",
            args: {
              id: t
            }
          }));
        return i
      }
      ,
      e.prototype.normalizeName = function(e) {
        return e = e.replace(/[<>"=#+]+/g, "_")
      }
      ,
      e.prototype.loadData = function(e) {
        if (e)
          return this.model_data = e
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Filters").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("Filters").get(),
        e ? e : {}
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  149: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    h = window.Signals,
    a = window.Notes,
    r = e("./.coffee.Storage.js").$storage,
    s = e("./.coffee.ItemsModel.js"),
    l = e("./.coffee.ProjectsModel.js"),
    c = e("./.coffee.NotesModel.js"),
    d = e("./.coffee.NotificationsModel.js"),
    u = e("./.coffee.Reminders.js").RemindersModel,
    i = e("./.coffee.GarbageCollectorTypes.js"),
    o = function() {
      function e() {
        this.loadCachedData = f(this.loadCachedData, this),
        this.syncCachedData = f(this.syncCachedData, this),
        this.schedule = f(this.schedule, this),
        this.clean = f(this.clean, this),
        this.runGC = f(this.runGC, this),
        h.connect("garbage_collect.clean", function(e) {
          return function(t, n, r) {
            return null == r && (r = !1),
            e.clean(t, n, r)
          }
        }(this)),
        h.connect("garbage_collect.schedule", function(e) {
          return function() {
            return e.schedule()
          }
        }(this))
      }
      return e.prototype.gc_cycle = 3e5,
      e.prototype.model_data = [],
      e.prototype.timeout = null ,
      e.prototype.runGC = function() {
        var e, t, n, r, o, a, d, h, f, _, p, m, g, y, w, v, j, b, I, $, A, S, C, T, k, D, E, x, P, M, N;
        if (!this.shouldPostponeGC()) {
          for (b = {},
          E = {},
          v = {},
          k = {},
          N = this.model_data,
          P = 0,
          M = N.length; P < M; P++)
            o = N[P],
            o[0] === i.type_project ? b[o[1]] = o[1] : o[0] === i.type_item ? E[o[1]] = o[1] : o[0] === i.type_note ? v[o[1]] = o[1] : o[0] === i.type_reminder && (k[o[1]] = o[1]);
          this.model_data = [],
          _ = l.model_data,
          h = s.model_data,
          f = c.model_data,
          p = u.model_data,
          $ = !1;
          for (x in b)
            if (j = b[x],
            I = _[j],
            r = I && I.is_archived,
            e = I && (I.is_deleted || I.is_archived),
            e && (delete _[j],
            $ = !0),
            !I || e)
              for (a in h)
                o = h[a],
                o.project_id === j && (r ? o.in_history = 1 : o.is_deleted = 1,
                E[a] = o.id);
          $ && l.syncCachedData(),
          D = !1;
          for (x in E)
            if (a = E[x],
            d = h[a],
            (!d || d.id !== this.currentActiveTask()) && (t = d && d.in_history,
            n = d && (d.is_deleted || d.in_history),
            n && (delete h[a],
            D = !0),
            !d || n)) {
              for (g in f)
                m = f[g],
                m.item_id === a && (t ? m.is_archived = 1 : m.is_deleted = 1,
                v[m.id] = m.id);
              for (C in p)
                A = p[C],
                A.item_id === a && (A.is_deleted = 1,
                k[A.id] = A.id)
            }
          D && (s.clearAllCache(),
          s.syncCachedData()),
          w = !1;
          for (x in v)
            g = v[x],
            y = f[g],
            y && (y.is_deleted || y.is_archived) && (delete f[g],
            w = !0);
          w && c.syncCachedData(),
          S = !1;
          for (x in k)
            C = k[x],
            T = p[C],
            T && (delete p[C],
            S = !0);
          return S ? u.syncCachedData() : void 0
        }
      }
      ,
      e.prototype.clean = function(e, t, n) {
        return null == n && (n = !1),
        this.model_data.push([e, t]),
        this.syncCachedData(),
        n === !0 ? this.runGC() : this.schedule()
      }
      ,
      e.prototype.schedule = function() {
        return this.timeout && clearTimeout(this.timeout),
        this.timeout = setTimeout(this.runGC, this.gc_cycle)
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("GarbageCollector").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("GarbageCollector").get(),
        e ? this.model_data = e : this.model_data = []
      }
      ,
      e.prototype.currentActiveTask = function() {
        return window.Notes && window.Notes.current_task ? window.Notes.current_task.id : null
      }
      ,
      e.prototype.shouldPostponeGC = function() {
        return !(!window.Notes.current_task && !window.Notes.current_project)
      }
      ,
      e
    }(),
    window.GarbageCollector = new o,
    t.exports = window.GarbageCollector
  }
  , {
    "./.coffee.GarbageCollectorTypes.js": 150,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.NotesModel.js": 157,
    "./.coffee.NotificationsModel.js": 158,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Reminders.js": 162,
    "./.coffee.Storage.js": 165
  }],
  150: [function(e, t, n) {
    t.exports = {
      type_project: 1,
      type_item: 2,
      type_note: 3,
      type_reminder: 4
    }
  }
  , {}],
  151: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = e("./.coffee.Storage.js").$storage,
    o = function() {
      function e(e, t) {
        this.resolveTempId = s(this.resolveTempId, this),
        this.commit = s(this.commit, this),
        this.updateIfFound = s(this.updateIfFound, this),
        this.update = s(this.update, this),
        this.hasUnfinished = s(this.hasUnfinished, this),
        this.sync_command = e,
        this.sync_arg = t,
        this.timeout = null ,
        this.pending_updates = {}
      }
      return e.prototype.hasUnfinished = function() {
        return $keys(this.pending_updates).length > 0
      }
      ,
      e.prototype.update = function(e) {
        var t, n;
        for (n in e)
          t = e[n],
          this.pending_updates[n] = t;
        return r(this.sync_command).set(this.pending_updates),
        this.timeout && clearTimeout(this.timeout),
        this.timeout = setTimeout(this.commit, 2e3)
      }
      ,
      e.prototype.updateIfFound = function(e, t) {
        if (this.pending_updates[e])
          return this.pending_updates[e] = t,
          r(this.sync_command).set(this.pending_updates)
      }
      ,
      e.prototype.commit = function() {
        var e;
        if (this.hasUnfinished())
          return e = {},
          e[this.sync_arg] = $serialize(this.pending_updates),
          i().queueUpdate({
            type: this.sync_command,
            args: e
          }),
          this.pending_updates = {},
          r(this.sync_command).set(this.pending_updates)
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.pending_updates[e])
          return this.pending_updates[t] = n,
          delete this.pending_updates[e],
          r(this.sync_command).set(this.pending_updates)
      }
      ,
      e.prototype.loadData = function() {
        if (this.pending_updates = r(this.sync_command).get() || {},
        this.hasUnfinished())
          return this.commit()
      }
      ,
      e
    }(),
    i = function() {
      var t;
      return t = e("./.coffee.SyncEngine.js")
    }
    ,
    t.exports = o
  }
  , {
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167
  }],
  152: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, _;
    i = e("./.coffee.ItemsModel.js"),
    d = e("./.coffee.ProjectsModel.js"),
    h = e("./.coffee.Reminders.js").RemindersModel,
    c = e("./.coffee.NotesModel.js"),
    a = e("./.coffee.ModelUndo.js"),
    s = e("./.coffee.LabelsModel.js"),
    _ = e("./.coffee.UtilModels.js"),
    r = e("./.coffee.Collaborators.js"),
    u = e("./.coffee.QueriesItems.js"),
    l = e("./.coffee.QueriesComplex.js"),
    f = e("./.coffee.SyncEngine.js"),
    o = e("./.coffee.GarbageCollector.js"),
    n.init = function() {
      return _.DepItemsModel = i,
      _.DepSyncEngine = f,
      r.DepItemsModel = i,
      r.DepProjectsModel = d,
      r.DepRemindersModel = h,
      s.DepItemsModel = i,
      s.DepQueriesComplex = l,
      i.DepCollaborators = r,
      i.DepLabelsModel = s,
      i.DepNotesModel = c,
      i.DepRemindersModel = h,
      i.DepQueriesItems = u,
      i.DepModelUndo = a,
      h.DepItemsModel = i,
      h.DepCollaborators = r
    }
  }
  , {
    "./.coffee.Collaborators.js": 146,
    "./.coffee.GarbageCollector.js": 149,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.LabelsModel.js": 154,
    "./.coffee.ModelUndo.js": 156,
    "./.coffee.NotesModel.js": 157,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.QueriesComplex.js": 160,
    "./.coffee.QueriesItems.js": 161,
    "./.coffee.Reminders.js": 162,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.UtilModels.js": 172
  }],
  153: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, p, m, g, y, w, v = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    p = window.Signals,
    a = window.Dateist,
    s = window.DateUtils,
    c = window.DateistDateHelpers,
    r = e("./.coffee.Storage.js").$storage,
    g = e("./.coffee.TemporaryIds.js"),
    h = e("./.coffee.GenericOrderSync.js"),
    y = e("./.coffee.UtilModels.js"),
    f = e("./.coffee.ProjectsModel.js"),
    m = e("./.coffee.SyncEngine.js"),
    u = e("./.coffee.GarbageCollectorTypes.js"),
    i = e("./.coffee.Reminders.js").BufferedRemindersModel,
    d = e("../dispatcher/Dispatcher"),
    o = e("../actions/.es6.ActionTypes.js"),
    l = function() {
      function e() {
        this.getMaxOrder = v(this.getMaxOrder, this),
        this._setNotifications = v(this._setNotifications, this),
        this.convertToDateObject = v(this.convertToDateObject, this),
        this.loadDayOrders = v(this.loadDayOrders, this),
        this.loadCachedData = v(this.loadCachedData, this),
        this.syncCachedData = v(this.syncCachedData, this),
        this._sanitizeArgs = v(this._sanitizeArgs, this),
        this._addToModel = v(this._addToModel, this),
        this.removeLabel = v(this.removeLabel, this),
        this.addLabel = v(this.addLabel, this),
        this._areArgsUpdated = v(this._areArgsUpdated, this),
        this.uncomplete = v(this.uncomplete, this),
        this._completeNonRecurring = v(this._completeNonRecurring, this),
        this.complete = v(this.complete, this),
        this.moveMultiple = v(this.moveMultiple, this),
        this.updateCached = v(this.updateCached, this),
        this.updateDayOrders = v(this.updateDayOrders, this),
        this.updateOrdersIndents = v(this.updateOrdersIndents, this),
        this.update = v(this.update, this),
        this.deleteItem = v(this.deleteItem, this),
        this.add = v(this.add, this),
        this.resolveTempId = v(this.resolveTempId, this),
        this.loadData = v(this.loadData, this),
        this.clearHistoryItems = v(this.clearHistoryItems, this),
        this.clearAllCache = v(this.clearAllCache, this),
        this.clearCache = v(this.clearCache, this),
        this.getByName = v(this.getByName, this),
        this.getParent = v(this.getParent, this),
        this.getChildren = v(this.getChildren, this),
        this.getItemCount = v(this.getItemCount, this),
        this.getByProjectId = v(this.getByProjectId, this),
        this.getBySyncId = v(this.getBySyncId, this),
        this.getById = v(this.getById, this),
        this.getAllCompleted = v(this.getAllCompleted, this),
        this.getNoLabels = v(this.getNoLabels, this),
        this.getAssignedToOthers = v(this.getAssignedToOthers, this),
        this.getAssignedToMe = v(this.getAssignedToMe, this),
        this.getAllOwn = v(this.getAllOwn, this),
        this.getAll = v(this.getAll, this),
        this.syncLocalModel = v(this.syncLocalModel, this),
        this.initState = v(this.initState, this),
        this.initState(),
        p.connect("clear_local_data", this.initState),
        this.item_order_indent_syncer = new h("item_update_orders_indents","ids_to_orders_indents"),
        this.dayorder_syncer = new h("item_update_day_orders","ids_to_orders"),
        p.connect("load_cached_data", function(e) {
          return function() {
            return e.loadData(e.loadCachedData())
          }
        }(this)),
        p.connect("sync_data.items", function(e) {
          return function() {
            return e.syncCachedData()
          }
        }(this)),
        p.connect("resolve_temp.item", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n),
            e.item_order_indent_syncer.resolveTempId(t, n)
          }
        }(this)),
        p.connect("update_project_count", function(e) {
          return function(t) {
            return t.cache_count = e.getItemCount(t.id)
          }
        }(this)),
        this.dispatchToken = d.register(function(e) {
          return function(t) {
            var n, r, i, l, u, h, f, _, m, g, y, w;
            if (t.actionType === o.UPDATE_ITEMS_DATE) {
              for (d.waitFor([e.DepModelUndo.dispatchToken]),
              y = t.items,
              i = f = 0,
              m = y.length; f < m; i = ++f)
                l = y[i],
                n = {},
                h = t.dates instanceof Array ? t.dates[i] : t.dates,
                h ? l.due_date ? (n.due_date = c.inherit_date(h, l.due_date),
                a.is_recurring(l.date_string, {
                  lang: l.date_lang
                }) || (n.date_string = s.format(n.due_date),
                n.date_lang = window.DATEIST_LANG || "en")) : (r = s.dateistResultFromDate(h),
                r.due_date && (n.due_date = r.due_date,
                n.date_string = r.date_string,
                n.date_lang = r.date_lang)) : (n.due_date = null ,
                n.date_string = ""),
                e.update(l.id, n);
              p.sendSignal("refresh_interface", null , !0)
            }
            if (t.actionType === o.UNDO) {
              for (w = t.checkpoint.items,
              _ = 0,
              g = w.length; _ < g; _++)
                l = w[_],
                u = e.getById(l.id),
                u && e.update(u.id, {
                  due_date: l.due_date,
                  date_string: l.date_string,
                  day_order: l.day_order
                });
              return p.sendSignal("refresh_interface", null , !0)
            }
          }
        }(this))
      }
      return e.prototype.DepCollaborators = null ,
      e.prototype.DepLabelsModel = null ,
      e.prototype.DepNotesModel = null ,
      e.prototype.DepRemindersModel = null ,
      e.prototype.DepQueriesItems = null ,
      e.prototype.DepModelUndo = null ,
      e.prototype.max_indent = 5,
      e.prototype.initState = function() {
        return this.model_data = {},
        this.cache_project_items = {},
        this.cache_all_items = {},
        this.cache_all_own_items = null
      }
      ,
      e.prototype.syncLocalModel = function(e, t) {
        var n, r, o, i, s, a, c, d, l, h, f, _, m, g, v, j, b;
        if (e.length > 0) {
          for (c = {},
          o = w().model_data,
          d = 0,
          _ = e.length; d < _; d++)
            n = e[d],
            n.due_date || (n.due_date = n.due_date_utc),
            this.convertToDateObject(n),
            r = this.model_data[n.id],
            r && (c[r.project_id] = r.project_id),
            o[n.project_id] || (n.in_history = 1),
            (n.in_history || n.is_deleted) && p.sendSignal("garbage_collect.clean", u.type_item, n.id);
          for (s = this.item_order_indent_syncer.pending_updates,
          l = 0,
          m = e.length; l < m; l++)
            n = e[l],
            i = s[n.id],
            i && (n.item_order = i[0],
            n.indent = i[1]);
          if (y.syncLocalModel(e, this.model_data),
          this.clearAllCache(),
          this.syncCachedData(),
          e.length > 0) {
            for (h = 0,
            g = e.length; h < g; h++)
              n = e[h],
              c[n.project_id] = n.project_id;
            for (j = $values(c),
            b = [],
            f = 0,
            v = j.length; f < v; f++)
              a = j[f],
              w().updateCount(a),
              b.push(t[a] = a);
            return b
          }
        }
      }
      ,
      e.prototype.getAll = function(e) {
        var t, n, r, o, i;
        if (null == e && (e = !0),
        this.cache_all_items[e])
          return this.cache_all_items[e];
        r = f.model_data,
        o = [],
        i = this.model_data;
        for (n in i)
          t = i[n],
          r[t.project_id] && (!e || 0 === t.in_history && 0 === t.checked) && o.push(t);
        return this.cache_all_items[e] = o,
        o
      }
      ,
      e.prototype.getAllOwn = function(e) {
        var t, n, r, o, i, s, a;
        if (null == e && (e = !0),
        this.cache_all_own_items)
          return this.cache_all_own_items;
        for (o = window.User.id,
        n = [],
        a = this.getAll(e),
        i = 0,
        s = a.length; i < s; i++)
          t = a[i],
          this.DepCollaborators.isProjectShared(t.project_id) && (r = t.responsible_uid,
          r && o !== r) || n.push(t);
        return this.cache_all_own_items = n,
        n
      }
      ,
      e.prototype.getAssignedToMe = function() {
        var e, t, n, r, o, i;
        for (n = window.User.id,
        t = [],
        i = this.getAll(),
        r = 0,
        o = i.length; r < o; r++)
          e = i[r],
          e.responsible_uid === n && this.DepCollaborators.isProjectShared(e.project_id) && t.push(e);
        return t
      }
      ,
      e.prototype.getAssignedToOthers = function() {
        var e, t, n, r, o, i;
        for (n = window.User.id,
        t = [],
        i = this.getAll(),
        r = 0,
        o = i.length; r < o; r++)
          e = i[r],
          e.responsible_uid && e.responsible_uid !== n && e.assigned_by_uid === n && t.push(e);
        return t
      }
      ,
      e.prototype.getNoLabels = function() {
        var e, t, n, r, o;
        for (t = [],
        o = this.getAll(),
        n = 0,
        r = o.length; n < r; n++)
          e = o[n],
          e.labels && 0 !== e.labels.length || t.push(e);
        return t
      }
      ,
      e.prototype.getAllCompleted = function() {
        var e, t, n, r, o;
        for (t = [],
        o = this.getAll(!1),
        n = 0,
        r = o.length; n < r; n++)
          e = o[n],
          0 === e.in_history && 1 === e.checked && t.push(e);
        return t
      }
      ,
      e.prototype.getById = function(e) {
        return this.model_data[e]
      }
      ,
      e.prototype.getBySyncId = function(e) {
        var t, n, r;
        r = this.model_data;
        for (t in r)
          if (n = r[t],
          n.sync_id === e)
            return n;
        return null
      }
      ,
      e.prototype.getByProjectId = function(e) {
        var t, n, r, o, i;
        if (e = g.getRealId(e),
        g.isTemporary(e) || (e = parseInt(e)),
        this.cache_project_items[e])
          return this.cache_project_items[e];
        o = [],
        i = this.model_data;
        for (t in i)
          n = i[t],
          r = g.getRealId(n.project_id),
          r !== e || n.in_history || o.push(n);
        return o.sort(y.sortByItemOrder),
        this.cache_project_items[e] = o,
        o
      }
      ,
      e.prototype.getItemCount = function(e) {
        var t, n, r, o, i;
        for (r = this.getByProjectId(e),
        t = 0,
        o = 0,
        i = r.length; o < i; o++)
          n = r[o],
          0 !== n.checked || y.isBulletItem(n.content) || (t += 1);
        return t
      }
      ,
      e.prototype.getChildren = function(e, t) {
        var n;
        return null == t && (t = !1),
        n = this.getByProjectId(e.project_id),
        y.getChildren(n, e, t)
      }
      ,
      e.prototype.getParent = function(e) {
        var t;
        return t = this.getByProjectId(e.project_id),
        y.getParent(t, e)
      }
      ,
      e.prototype.getByName = function(e, t) {
        var n, r, o, i, s, a;
        for (r = [],
        a = this.getAll(),
        i = 0,
        s = a.length; i < s && (o = a[i],
        n = o.content.toLowerCase(),
        n.indexOf(e) !== -1 && r.push(o),
        !(r.length >= t)); i++)
          ;
        return r
      }
      ,
      e.prototype.clearCache = function(e) {
        var t;
        return e ? (t = this.cache_project_items[e],
        void 0 !== t && delete this.cache_project_items[e]) : this.cache_project_items = {},
        this.cache_all_items = {},
        this.cache_all_own_items = null ,
        this.DepQueriesItems.clearCache()
      }
      ,
      e.prototype.clearAllCache = function() {
        return this.cache_all_items = {},
        this.cache_all_own_items = null ,
        this.cache_project_items = {},
        this.DepQueriesItems.clearCache()
      }
      ,
      e.prototype.clearHistoryItems = function() {
        var e, t, n, r, o, i, s, a, c;
        t = [],
        a = this.model_data;
        for (e in a)
          r = a[e],
          r.in_history && t.push(e);
        for (o = this.model_data,
        c = [],
        i = 0,
        s = t.length; i < s; i++)
          n = t[i],
          o[n] ? c.push(delete o[n]) : c.push(void 0);
        return c
      }
      ,
      e.prototype.loadData = function(e) {
        var t, n, r;
        for (n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          this.convertToDateObject(t),
          this._addToModel(t, !1, !1);
        return this.clearHistoryItems(),
        this.syncCachedData(),
        this.item_order_indent_syncer.loadData(),
        this.dayorder_syncer.loadData()
      }
      ,
      e.prototype.splitItemsIntoDates = function(e, t) {
        var n, r, o, i, s, a, c;
        for (null == t && (t = !1),
        o = {},
        a = 0,
        c = e.length; a < c; a++)
          r = e[a],
          r.due_date && (s = r.due_date.toDateString(),
          n = o[s],
          n || (n = o[s] = {},
          n.items = [],
          n.date = new Date(s),
          n.time = n.date.getTime()),
          n.items.push(r));
        return i = $values(o),
        i.sort(y.sortByDate),
        t && i.reverse(),
        i
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.model_data[e])
          return n.id = t,
          g.isTemporary(n.project_id) && (n.project_id = g.getRealId(n.project_id)),
          g.isTemporary(n.responsible_uid) && (n.responsible_uid = g.getRealId(n.responsible_uid)),
          delete this.model_data[e],
          this._addToModel(n),
          this.syncCachedData()
      }
      ,
      e.prototype.add = function(e, t) {
        var n, r, o, i, s;
        return null == t && (t = {}),
        e.item_order || (e.item_order = this.getMaxOrder(e.project_id)),
        n = {
          content: e.content || "",
          due_date: e.due_date || null ,
          date_string: e.date_string || "",
          priority: e.priority,
          indent: e.indent || 1,
          item_order: e.item_order,
          labels: [],
          checked: 0,
          user_id: window.User.id,
          in_history: 0,
          collapsed: 0,
          date_added: new Date,
          assigned_by_uid: window.User.id,
          responsible_uid: null ,
          all_notes_fetched: !0,
          date_lang: e.date_lang || "en"
        },
        y.normalizeIndent(e, this.max_indent),
        e.content && this.handleTextShortcuts(e),
        e.date_lang || (e.date_lang = "en"),
        n.project_id = e.project_id,
        $update(n, e),
        o = $keys(this.getByProjectId(n.project_id)),
        r = window.User.is_premium ? 200 : 150,
        o.length >= r ? (s = _("For performance reasons you can only add %s tasks pr. project. Please split your tasks in multiple projects.").replace("%s", r),
        t.return_as_error ? {
          error: s
        } : void alert(s)) : (i = n.id = g.generate("item"),
        this.DepLabelsModel.updateLabels(e, n),
        e.content = $strip(e.content),
        0 === e.content.length ? null : (n.due_date && (n.time = n.due_date.getTime()),
        e.parent_id && (e.parent_id = g.getRealId(e.parent_id)),
        p.sendSignal("item_added", n),
        this._addToModel(n),
        this.item_order_indent_syncer.hasUnfinished() && this.item_order_indent_syncer.commit(),
        m.queueUpdate({
          type: "item_add",
          temp_id: i,
          args: this._sanitizeArgs(e)
        }),
        this._setNotifications(n, n.date_string),
        w().updateCount(n.project_id),
        this.syncCachedData(),
        e.note && this.DepNotesModel.addNote(i, e.note, this.DepNotesModel.TYPE_ITEM_NOTE),
        n))
      }
      ,
      e.prototype.deleteItem = function(e, t) {
        var n, r, o;
        if (0 !== e.length) {
          for (m.queueUpdate({
            type: "item_delete",
            args: {
              ids: e,
              project_id: t
            }
          }),
          r = 0,
          o = e.length; r < o; r++)
            n = e[r],
            n = g.getRealId(n),
            this.model_data[n] && delete this.model_data[n];
          return this.syncCachedData(),
          this.clearCache(t),
          w().updateCount(t)
        }
      }
      ,
      e.prototype.update = function(e, t, n) {
        var r, o, i, s, a, d;
        return null == n && (n = !1),
        s = this.getById(e),
        s ? (d = {},
        $update(d, s),
        t.content && this.handleTextShortcuts(t),
        t.indent && y.normalizeIndent(t, this.max_indent),
        t.project_id && t.project_id !== s.project_id ? (a = t.project_id,
        delete t.project_id) : a = !1,
        this.DepLabelsModel.updateLabels(t, s),
        t.content && (t.content = $strip(t.content),
        0 === t.content.length) ? [d, !0] : (t.id = s.id,
        this._areArgsUpdated(t, d) && n === !1 && a === !1 ? [s, !1] : (this.item_order_indent_syncer.hasUnfinished() && this.item_order_indent_syncer.commit(),
        a && (r = {},
        r[s.project_id] = function() {
          var e, t, n, r;
          for (n = this.getChildren(s, !0),
          r = [],
          e = 0,
          t = n.length; e < t; e++)
            o = n[e],
            r.push(o.id);
          return r
        }
        .call(this),
        this.moveMultiple(r, a, !0),
        t.indent && delete t.indent,
        t.item_order && delete t.item_order,
        t.parent_id && delete t.parent_id),
        t.parent_id && (t.parent_id = g.getRealId(t.parent_id)),
        p.sendSignal("item_updated", t),
        this.updateCached(s, t),
        m.queueUpdate({
          type: "item_update",
          args: this._sanitizeArgs(t)
        }),
        this._setNotifications(s, s.date_string),
        (t.indent || t.item_order) && this.item_order_indent_syncer.updateIfFound(s.id, [s.item_order, s.indent]),
        t.date_string && t.date_string !== s.date_string && (s.tz_set = !1,
        s.due_date = new Date(s.due_date.getTime())),
        s.due_date ? s.time = s.due_date.getTime() : s.time && delete s.time,
        w().updateCount(s.project_id),
        i = !1,
        void 0 !== t.due_date && (c.is_same_date(d.due_date, t.due_date) || (i = !0)),
        void 0 !== t.priority && t.priority && t.priority !== d.priority && (i = !0),
        i && (t.day_order = s.day_order = -1),
        t.date_string && this._markLocalRemindersNonProcessed(s),
        this.syncCachedData(),
        [s, !0]))) : [null , !1]
      }
      ,
      e.prototype.updateOrdersIndents = function(e) {
        var t, n, r, o, i, s, a, c;
        n = !1,
        s = {};
        for (r in e)
          t = e[r],
          o = this.model_data[r],
          o && (o.item_order = t[0],
          o.indent = t[1],
          s[o.project_id] = !0,
          n = !0);
        if (n) {
          this.item_order_indent_syncer.update(e),
          this.syncCachedData(),
          c = [];
          for (i in s)
            a = s[i],
            c.push(this.clearCache(i));
          return c
        }
      }
      ,
      e.prototype.updateDayOrders = function(e) {
        var t, n, r, o, i, s, a;
        t = !1,
        s = {};
        for (n in e)
          o = e[n],
          r = this.model_data[n],
          r && (r.day_order = o,
          s[r.project_id] = !0,
          t = !0);
        if (t) {
          for (i in s)
            a = s[i],
            this.clearCache(i);
          return this.dayorder_syncer.update(e),
          this.syncCachedData()
        }
      }
      ,
      e.prototype.updateCached = function(e, t) {
        var n;
        return e.id = g.getRealId(e.id),
        n = this.getById(e.id),
        this.clearCache(e.project_id),
        n && $update(n, t),
        $update(e, t)
      }
      ,
      e.prototype.moveMultiple = function(e, t, n) {
        var r, o, i, s, a, c, d, l, u, h, _, p, g, y;
        if (f = w(),
        u = f.get(t)) {
          if (n) {
            d = this.getMaxOrder(t);
            for (l in e) {
              for (c = e[l],
              i = 0,
              o = this.getById($first(c)),
              o && o.indent > 1 && (i = o.indent - 1),
              h = 0,
              p = c.length; h < p; h++)
                a = c[h],
                s = this.getById(a),
                s && (s.responsible_uid = null ,
                s.indent -= i,
                r = {
                  project_id: t,
                  item_order: d++,
                  indent: s.indent
                },
                1 === s.indent && (r.parent_id = null ),
                this.updateCached(s, r));
              f.updateCount(l)
            }
          }
          for (y = $keys(e),
          _ = 0,
          g = y.length; _ < g; _++)
            l = y[_],
            this.clearCache(l),
            f.updateCount(l);
          return this.clearCache(t),
          f.updateCount(t),
          m.queueUpdate({
            type: "item_move",
            args: {
              project_items: e,
              to_project: t
            }
          }),
          this.syncCachedData()
        }
      }
      ,
      e.prototype.complete = function(e, t) {
        var n, r;
        return null == t && (t = 0),
        r = this.getById(e.id),
        r && (e = r),
        r && 0 === r.checked && p.sendSignal("model_item_completed", r),
        n = a.is_recurring(e.date_string, {
          lang: e.date_lang
        }),
        0 === e.in_history && n && !t ? this._completeRecurring(e) : this._completeNonRecurring(e, t)
      }
      ,
      e.prototype._completeNonRecurring = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h;
        if (!e.checked || t) {
          for (i = e.project_id,
          this.item_order_indent_syncer.hasUnfinished() && this.item_order_indent_syncer.commit(),
          n = this.getChildren(e, c = !0),
          r = 0,
          d = 0,
          u = n.length; d < u; d++)
            s = n[d],
            s.checked && !t || (r += 1);
          for (a = 1 === r ? _("1 item completed").replace("%s", r) : _("%s items completed").replace("%s", r),
          p.sendSignal("mark_for_undo", n, "complete_non_recurring", a),
          1 === e.indent && (t = 1),
          o = [],
          l = 0,
          h = n.length; l < h; l++)
            s = n[l],
            o.push(s.id),
            s.checked = 1,
            (t || 1 === s.indent) && (s.indent = 1,
            s.in_history = 1);
          return o.length > 0 && i && (m.queueUpdate({
            type: "item_complete",
            args: {
              project_id: i,
              ids: o,
              force_history: t,
              content: e.content
            }
          }),
          this.clearCache(i),
          this.syncCachedData(),
          w().updateCount(i)),
          n
        }
      }
      ,
      e.prototype._completeRecurring = function(e) {
        var t, n, r;
        return r = _("Date updated"),
        p.sendSignal("mark_for_undo", [e], "complete_recurring", r),
        t = s.parse(e.date_string, e),
        t.end_reached ? this.complete(e, !0) : (n = t.error ? a.parse("tomorrow").due_date : t.due_date,
        e.due_date = n,
        e.time = e.due_date.getTime(),
        e.checked = 0,
        m.queueUpdate({
          type: "item_update_date_complete",
          args: {
            id: e.id,
            new_date_utc: s.jsonFormat(e.due_date),
            date_string: e.date_string,
            is_forward: 1
          }
        }),
        this.clearCache(e.project_id),
        this.syncCachedData(),
        this._markLocalRemindersNonProcessed(e),
        [e])
      }
      ,
      e.prototype.uncomplete = function(e) {
        var t, n;
        return n = this.getParent(e),
        n && 1 === n.checked && this.uncomplete(n),
        m.queueUpdate({
          type: "item_uncomplete",
          args: {
            project_id: e.project_id,
            ids: [e.id]
          }
        }),
        t = this.getById(e.id),
        t && 1 === t.checked && p.sendSignal("model_item_uncompleted", t),
        t ? e = t : this._addToModel(e, !0, !1),
        e.checked = 0,
        e.in_history && (e.in_history = 0,
        e.indent = 1,
        e.item_order = this.getMaxOrder(e.project_id)),
        this.clearCache(e.project_id),
        this._markLocalRemindersNonProcessed(e),
        this._markLocalNotesAsNotInHistory(e),
        this.syncCachedData(),
        e
      }
      ,
      e.prototype._areArgsUpdated = function(e, t) {
        var n, r, o, i;
        for (i = $keys(e),
        r = 0,
        o = i.length; r < o; r++)
          if (n = i[r],
          "labels" === n || "due_date" === n) {
            if ("" + e[n] != "" + t[n])
              return !1
          } else if (e[n] !== t[n])
            return !1;
        return !0
      }
      ,
      e.prototype.addLabel = function(e, t) {
        var n;
        if (!$isIn(t.id, e.labels))
          return n = [].concat(e.labels),
          n.push(t.id),
          this.update(e.id, {
            labels: n
          })
      }
      ,
      e.prototype.removeLabel = function(e, t) {
        var n, r;
        if ($isIn(t.id, e.labels))
          return r = [].concat(e.labels),
          n = $index(t.id, r),
          r.splice(n, 1),
          this.update(e.id, {
            labels: r
          })
      }
      ,
      e.prototype._addToModel = function(e, t, n) {
        if (null == t && (t = !0),
        null == n && (n = !0),
        this.model_data[e.id] = e,
        this.clearCache(e.project_id),
        n)
          return this.syncCachedData()
      }
      ,
      e.prototype._sanitizeArgs = function(e) {
        var t;
        return e.due_date || e.labels ? (t = {},
        $update(t, e),
        t.due_date && (t.due_date_utc = s.jsonFormat(e.due_date),
        delete t.due_date),
        t.labels && (t.labels = $serialize(e.labels)),
        t) : e
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Items").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e, t, n, o;
        if (n = r("Items").get()) {
          o = [];
          for (t in n)
            e = n[t],
            o.push(e);
          return o
        }
        return []
      }
      ,
      e.prototype.loadDayOrders = function(e) {
        var t, n, r, o;
        o = [];
        for (n in e)
          r = e[n],
          t = this.model_data[n],
          t ? o.push(t.day_order = r) : o.push(void 0);
        return o
      }
      ,
      e.prototype.convertToDateObject = function(e) {
        if (($isString(e.due_date) || e.time) && (e.time ? e.due_date = new Date(e.time) : e.due_date = new Date(e.due_date),
        c.has_time(e.due_date) || (e.due_date = c.date_max(e.due_date)),
        e.time = e.due_date.getTime()),
        $isString(e.date_added) && (e.date_added = new Date(e.date_added)),
        !e.date_string && e.time)
          return delete e.time,
          e.due_date = null
      }
      ,
      e.prototype._setNotifications = function(e, t) {
        var n, r, o, s, a;
        if (n = window.User,
        s = n.default_reminder,
        r = n.auto_reminder,
        this.DepRemindersModel.featureEnabled() && "no_default" !== s && r !== -1 && t && c.has_time(e.due_date)) {
          if (o = this.DepRemindersModel.getRemindersByItemId(e.id),
          o = o.concat(i.reminders),
          o.length > 0)
            return;
          return void 0 === r && (r = 30),
          a = window.User.id,
          e.responsible_uid && (a = e.responsible_uid),
          void this.DepRemindersModel.add({
            item_id: e.id,
            service: s,
            minute_offset: r,
            notify_uid: a
          })
        }
        if (this.DepRemindersModel.featureEnabled() && t && !c.has_time(e.due_date))
          return this.DepRemindersModel.removeRelative(e.id)
      }
      ,
      e.prototype._markLocalRemindersNonProcessed = function(e) {
        var t, n, r, o, i;
        for (t = !1,
        i = this.DepRemindersModel.getRemindersByItemId(e.id),
        r = 0,
        o = i.length; r < o; r++)
          n = i[r],
          n.lprocessed = !1,
          t = !0;
        if (t)
          return this.DepRemindersModel.syncCachedData()
      }
      ,
      e.prototype._markLocalNotesAsNotInHistory = function(e) {
        var t, n, r, o, i, s, a, c;
        for (t = !1,
        a = this.DepNotesModel.getNotes(e.id, this.DepNotesModel.TYPE_ITEM_NOTE),
        r = 0,
        i = a.length; r < i; r++)
          n = a[r],
          n.is_archived = 0,
          t = !0;
        if (e.notes) {
          for (c = e.notes,
          o = 0,
          s = c.length; o < s; o++)
            n = c[o],
            n.is_archived = 0,
            this.DepNotesModel._addToModel(n, !1),
            t = !0;
          e.notes = null
        }
        if (t)
          return this.DepNotesModel.syncCachedData()
      }
      ,
      e.prototype.getMaxOrder = function(e) {
        var t, n;
        return t = $last(this.getByProjectId(e)),
        n = t ? t.item_order + 1 : 1
      }
      ,
      e.prototype.handleTextShortcuts = function(e) {
        var t, n, r;
        return r = /[ ]*(?:![pP]([1234])|!!([1234]))(?:\s|$)/,
        n = e.content.match(r),
        n && (t = n[1] || n[2],
        e.priority = Math.abs(parseInt(t) - 5),
        e.content = e.content.replace(r, " ")),
        e
      }
      ,
      e
    }(),
    w = function() {
      return f = e("./.coffee.ProjectsModel.js")
    }
    ,
    window.ItemsModel = new l,
    t.exports = window.ItemsModel
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../dispatcher/Dispatcher": 118,
    "./.coffee.GarbageCollectorTypes.js": 150,
    "./.coffee.GenericOrderSync.js": 151,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Reminders.js": 162,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  154: [function(e, t, n) {
    var r, o, i, s, a, c, d = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    s = e("./.coffee.SyncEngine.js"),
    c = e("./.coffee.UtilModels.js"),
    a = e("./.coffee.TemporaryIds.js"),
    o = function() {
      function e() {
        this.loadCachedData = d(this.loadCachedData, this),
        this.syncCachedData = d(this.syncCachedData, this),
        this.loadData = d(this.loadData, this),
        this.getLabels = d(this.getLabels, this),
        this.updateOrdersIndents = d(this.updateOrdersIndents, this),
        this.update = d(this.update, this),
        this.deleteLabel = d(this.deleteLabel, this),
        this.deleteMany = d(this.deleteMany, this),
        this.add = d(this.add, this),
        this.resolveTempId = d(this.resolveTempId, this),
        this.updateLabels = d(this.updateLabels, this),
        this.getByName = d(this.getByName, this),
        this.getDataLabels = d(this.getDataLabels, this),
        this.getById = d(this.getById, this),
        this.getAll = d(this.getAll, this),
        this.get = d(this.get, this),
        this.syncLocalModel = d(this.syncLocalModel, this),
        this.initState = d(this.initState, this),
        this.initState(),
        i.connect("clear_local_data", this.initState),
        i.connect("load_cached_data", function(e) {
          return function() {
            return e.loadData(e.loadCachedData())
          }
        }(this)),
        i.connect("resolve_temp.label", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n)
          }
        }(this))
      }
      return e.prototype.DepItemsModel = null ,
      e.prototype.DepQueriesComplex = null ,
      e.prototype.re_labels = /(^|\s+)@([^\s,]+)/g,
      e.prototype.max_limit = 500,
      e.prototype.initState = function() {
        return this.labels = {}
      }
      ,
      e.prototype.syncLocalModel = function(e) {
        var t, n, r, o, s, a, c, d, l, u, h, f, _, p, m, g, y;
        if (e.length > 0) {
          for (s = this.labels,
          o = {},
          d = 0,
          f = e.length; d < f; d++)
            t = e[d],
            o[t.id] = t.id;
          for (g = $keys(s),
          l = 0,
          _ = g.length; l < _; l++)
            c = g[l],
            r = s[c],
            a = "" + r.id,
            (o[r.id] || a.indexOf("_") !== -1) && delete s[c];
          for (u = 0,
          p = e.length; u < p; u++)
            n = e[u],
            s[n.name.toLowerCase()] = n;
          for (y = $keys(s),
          h = 0,
          m = y.length; h < m; h++)
            c = y[h],
            r = s[c],
            r.is_deleted && delete s[c];
          return this.syncCachedData(),
          i.sendSignal("labels_updated", e)
        }
      }
      ,
      e.prototype.get = function(e) {
        return this.labels[e]
      }
      ,
      e.prototype.getAll = function(e) {
        var t, n, r, o;
        if (null == e && (e = !1),
        n = $values(this.labels),
        e) {
          for (r = 0,
          o = n.length; r < o; r++)
            t = n[r],
            t.count = this.DepQueriesComplex.getByLabels([t.id], !0);
          n = n.sort(c.sortByItemOrder)
        }
        return n
      }
      ,
      e.prototype.getById = function(e) {
        var t, n, r;
        e = a.getRealId(e),
        e = "" + e,
        r = this.labels;
        for (n in r)
          if (t = r[n],
          "" + t.id === e)
            return t;
        return null
      }
      ,
      e.prototype.getDataLabels = function(e) {
        var t, n, r, o, i, s;
        if (!e.labels)
          return [];
        for (r = [],
        s = e.labels,
        o = 0,
        i = s.length; o < i; o++)
          t = s[o],
          n = this.getById(t),
          n && r.push("@" + n.name);
        return r
      }
      ,
      e.prototype.getByName = function(e, t) {
        var n, r, o, i, s, a, c, d;
        if (null == t && (t = !0),
        i = [],
        i = $values(this.labels),
        i.sort(function(e, t) {
          return e.item_order - t.item_order
        }),
        0 === e.length)
          return i;
        for (e = e.toLowerCase(),
        s = [],
        c = 0,
        d = i.length; c < d; c++)
          r = i[c],
          o = r.name.toLowerCase(),
          o === e ? s.push([-1, r]) : t && (n = o.indexOf(e),
          n !== -1 && s.push([n, r]));
        return s.sort(function(e, t) {
          return e[0] - t[0]
        }),
        function() {
          var e, t, n;
          for (n = [],
          e = 0,
          t = s.length; e < t; e++)
            a = s[e],
            n.push(a[1]);
          return n
        }()
      }
      ,
      e.prototype.updateLabels = function(e, t) {
        var n, r, o, i, s, a, c, d;
        if (void 0 !== e.content) {
          for (d = this.getLabels(e),
          n = d[0],
          s = d[1],
          r = [],
          a = 0,
          c = s.length; a < c; a++)
            o = s[a],
            i = this.get(o),
            i && r.push(i.id);
          return e.labels = r,
          e.content = n,
          t.labels = r,
          t.content = n
        }
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h, f;
        for (s = null ,
        h = $values(this.labels),
        c = 0,
        l = h.length; c < l; c++)
          if (i = h[c],
          i.id === e) {
            s = i;
            break
          }
        if (s) {
          for (s.id = t,
          o = !1,
          f = this.DepItemsModel.getAll(),
          d = 0,
          u = f.length; d < u; d++)
            r = f[d],
            a = r.labels,
            a.length > 0 && (n = $index(e, a),
            n !== -1 && (a.splice(n, 1, t),
            o = !0));
          return o && this.DepItemsModel.syncCachedData(),
          this.syncCachedData()
        }
      }
      ,
      e.prototype.normalizeName = function(e) {
        return e = e.replace(/[<>"=#+\s%!?~:@,()]+/g, "_")
      }
      ,
      e.prototype.add = function(e) {
        var t, n;
        return $keys(this.labels).length >= this.max_limit ? void alert(_("For performance reasons you can only add %s labels.").replace("%s", this.max_limit)) : (void 0 === e.color && (e.color = 7),
        e.name = this.normalizeName(e.name),
        t = e,
        this.labels[t.name.toLowerCase()] = t,
        n = t.id = a.generate("label"),
        s.queueUpdate({
          type: "label_register",
          temp_id: n,
          args: e
        }),
        this.syncCachedData(),
        t)
      }
      ,
      e.prototype.deleteMany = function(e) {
        var t, n, r, o;
        for (o = [],
        n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          o.push(this.deleteLabel(t));
        return o
      }
      ,
      e.prototype.deleteLabel = function(e) {
        var t;
        if (t = this.getById(e))
          return delete this.labels[t.name.toLowerCase()],
          s.queueUpdate({
            type: "label_delete",
            args: {
              id: t.id
            }
          }),
          this.syncCachedData()
      }
      ,
      e.prototype.update = function(e, t) {
        var n, r;
        return t.name && (t.name = this.normalizeName(t.name)),
        n = this.getById(e),
        n && (r = n.name.toLowerCase(),
        t.id = n.id,
        $update(n, t),
        t.name && (this.labels[r] && delete this.labels[r],
        this.labels[t.name.toLowerCase()] = n,
        n.name = t.name),
        s.queueUpdate({
          type: "label_update",
          args: t
        }),
        this.syncCachedData()),
        n
      }
      ,
      e.prototype.updateOrdersIndents = function(e) {
        var t, n, r, o;
        r = {};
        for (n in e)
          t = e[n],
          o = this.getById(n),
          o && (o.item_order = t[0],
          o.id > 0 && (r[o.id] = o.item_order));
        return $keys(r).length > 0 && s.queueUpdate({
          type: "label_update_orders",
          args: {
            id_order_mapping: $serialize(r)
          }
        }),
        this.syncCachedData()
      }
      ,
      e.prototype.getLabels = function(e) {
        var t, n, r;
        return t = e.content,
        n = [],
        r = function(t) {
          return function(r, o, i) {
            var s;
            return e.labels_to_ignore && e.labels_to_ignore[i] ? r : (i = t.normalizeName(i.toLowerCase()),
            s = t.get(i),
            s ? (n.push(i),
            "") : r)
          }
        }(this),
        t = t.replace(this.re_labels, r),
        [t, n]
      }
      ,
      e.prototype.loadData = function(e) {
        var t, n, r, o;
        if (e) {
          for (this.labels = {},
          o = [],
          n = 0,
          r = e.length; n < r; n++)
            t = e[n],
            o.push(this.labels[t.name.toLowerCase()] = t);
          return o
        }
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Labels").set(this.labels)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e, t, n, o;
        if (n = r("Labels").get()) {
          o = [];
          for (t in n)
            e = n[t],
            o.push(e);
          return o
        }
        return []
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  155: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    a = e("./.coffee.TemporaryIds.js"),
    c = e("./.coffee.UtilModels.js"),
    d = e("./.coffee.VersionUpdater.js"),
    s = e("./.coffee.SyncData.js"),
    o = function() {
      function e() {
        this.logout = h(this.logout, this),
        this.clearLocalData = h(this.clearLocalData, this),
        this.loadData = h(this.loadData, this),
        i.connect("syncing_data", function(e) {
          return function() {
            return e.fetched_data_from_server = !0
          }
        }(this)),
        i.connect("logout", function(e) {
          return function() {
            return e.logout()
          }
        }(this))
      }
      return e.prototype.fetched_data_from_server = !1,
      e.prototype.loadCachedData = function() {
        return i.sendSignal("load_cached_data")
      }
      ,
      e.prototype.loadData = function(e, t) {
        var n, o, a;
        return null === r("TimestampS2").get() && this.clearLocalData(),
        this.loadCachedData(),
        n = !1,
        l().getAll().length > 0 ? ($isFunction(t) && t(!0),
        o = function(e) {
          return s.cleanLocalModel(),
          d.check(e),
          i.sendSignal("garbage_collect.schedule")
        }
        ) : (o = function(e) {
          if (s.cleanLocalModel(),
          d.check(e),
          i.sendSignal("garbage_collect.schedule"),
          $isFunction(t))
            return t(!0)
        }
        ,
        n = !0),
        a = function(e) {
          return function(t, r) {
            var o;
            if (!c.checkIfErrorIsLogout(t, r))
              return n ? (e.clearLocalData(),
              o = _("Could not sync with Todoist. Please try again later."),
              window.oldAlert(o),
              window.location.reload()) : void 0
          }
        }(this),
        u().sync({
          onSuccess: o,
          onError: a
        }, !0, !0)
      }
      ,
      e.prototype.clearLocalData = function() {
        return window.localStorage.clear(),
        i.sendSignal("clear_local_data")
      }
      ,
      e.prototype.logout = function(e) {
        var t;
        if (null == e && (e = !0),
        this.clearLocalData(),
        e)
          return t = "/Users/logout?csrf=" + $cookie.get("csrf"),
          (window.IS_MINI || window.FLUID_MINI) && (t += "&mini=1"),
          window.location = t
      }
      ,
      e
    }(),
    l = function() {
      var t;
      return t = e("./.coffee.ProjectsModel.js")
    }
    ,
    u = function() {
      var t;
      return t = e("./.coffee.SyncEngine.js")
    }
    ,
    t.exports = new o
  }
  , {
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncData.js": 166,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172,
    "./.coffee.VersionUpdater.js": 173
  }],
  156: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, _, p, m = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    , g = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
          return t;
      return -1
    }
    ;
    o = window.DateUtils,
    d = e("./.coffee.ItemsModel.js"),
    f = e("./.coffee.Reminders.js").RemindersModel,
    h = e("./.coffee.ProjectsModel.js"),
    u = e("./.coffee.NotesModel.js"),
    _ = e("./.coffee.SyncEngine.js"),
    i = e("../dispatcher/Dispatcher.js"),
    r = e("../actions/.es6.ActionTypes.js"),
    c = e("../actions/.es6.ItemActions.js"),
    a = e("events"),
    s = "EVENT_CHECKPOINT_UPDATED",
    p = [c.ORIGIN_SMART_SCHEDULE],
    l = function() {
      function e() {
        this.clear = m(this.clear, this),
        this.restoreCustom = m(this.restoreCustom, this),
        this.restore = m(this.restore, this),
        this.markCheckpoint = m(this.markCheckpoint, this),
        this.getCurrentCheckpoint = m(this.getCurrentCheckpoint, this),
        this.removeCheckpointUpdateListener = m(this.removeCheckpointUpdateListener, this),
        this.addCheckpointUpdateListener = m(this.addCheckpointUpdateListener, this),
        this.INTENT_DUE_REMOVE = "INTENT_DUE_REMOVE",
        this.INTENT_DUE_UPDATE = "INTENT_DUE_UPDATE",
        this._eventEmitter = new a,
        this.dispatchToken = i.register(function(e) {
          return function(t) {
            var n, o;
            if (t.actionType === r.UPDATE_ITEMS_DATE && (o = t.origin,
            g.call(p, o) >= 0))
              return n = null === t.dates ? e.INTENT_DUE_REMOVE : e.INTENT_DUE_UPDATE,
              e.markCheckpoint(t.items, n),
              e._eventEmitter.emit(s, e.currentCheckpoint)
          }
        }(this))
      }
      return e.prototype.addCheckpointUpdateListener = function(e) {
        return this._eventEmitter.addListener(s, e)
      }
      ,
      e.prototype.removeCheckpointUpdateListener = function(e) {
        return this._eventEmitter.removeListener(s, e)
      }
      ,
      e.prototype.getCurrentCheckpoint = function() {
        return this.currentCheckpoint
      }
      ,
      e.prototype.markCheckpoint = function(e, t) {
        var n, r, o, i, s;
        for (n = {},
        n.items = [],
        i = 0,
        s = e.length; i < s; i++)
          o = e[i],
          r = {},
          $update(r, o),
          n.items.push(r);
        return n.intent = t,
        this.currentCheckpoint = n,
        n
      }
      ,
      e.prototype.restore = function() {
        return this.restoreCustom(this.currentCheckpoint)
      }
      ,
      e.prototype.restoreCustom = function(e) {
        var t, n, r, i, s, a, c, l, f, p, m, g, y, w, v, j, b, I, $, A, S, C, T, k, D, E, x, P, M, N;
        if ("postpone" === (S = e.intent) || S === this.INTENT_DUE_UPDATE || S === this.INTENT_DUE_REMOVE) {
          for (C = e.items,
          M = [],
          c = 0,
          m = C.length; c < m; c++)
            r = C[c],
            i = d.getById(r.id),
            i ? (d.update(i.id, {
              due_date: r.due_date,
              date_string: r.date_string,
              day_order: r.day_order
            }),
            M.push(d.syncCachedData())) : M.push(void 0);
          return M
        }
        if ("complete_recurring" === e.intent) {
          for (T = e.items,
          N = [],
          l = 0,
          g = T.length; l < g; l++)
            a = T[l],
            i = d.getById(a.id),
            i && (i.due_date = a.due_date,
            i.time = a.time,
            i.checked = 0,
            i.day_order = a.day_order,
            d.clearAllCache(),
            d.syncCachedData()),
            N.push(_.queueUpdate({
              type: "item_update_date_complete",
              args: {
                id: a.id,
                new_date_utc: o.jsonFormat(a.due_date),
                date_string: a.date_string,
                is_forward: 0
              }
            }));
          return N
        }
        if ("complete_non_recurring" === e.intent) {
          if (e.items.length > 0) {
            for (t = {},
            k = e.items,
            f = 0,
            y = k.length; f < y; f++)
              a = k[f],
              t[a.id] = [0, a.checked, a.item_order, a.indent],
              i = d.getById(a.id),
              i ? (i.in_history = 0,
              i.checked = a.checked,
              i.item_order = a.item_order,
              i.indent = a.indent) : d._addToModel(a, !1, !1);
            for (_.queueUpdate({
              type: "item_uncomplete_update_meta",
              args: {
                project_id: e.items[0].project_id,
                ids_to_metas: $serialize(t)
              }
            }),
            D = e.items,
            p = 0,
            w = D.length; p < w; p++)
              for (r = D[p],
              E = u.getNotes(r.id, u.TYPE_ITEM_NOTE),
              I = 0,
              v = E.length; I < v; I++)
                s = E[I],
                s.is_archived = 0;
            return d.clearAllCache(),
            d.syncCachedData()
          }
        } else {
          if ("reorder_project_editor" === e.intent) {
            for (n = {},
            x = e.items,
            $ = 0,
            j = x.length; $ < j; $++)
              r = x[$],
              i = d.getById(r.id),
              i && (n[i.id] = [r.item_order, r.indent]),
              i.parent_id !== r.parent_id && d.update(i.id, {
                parent_id: r.parent_id
              });
            return d.updateOrdersIndents(n)
          }
          if ("reorder_project_list" === e.intent) {
            for (n = {},
            P = e.items,
            A = 0,
            b = P.length; A < b; A++)
              r = P[A],
              i = h.get(r.id),
              i && (n[i.id] = [r.item_order, r.indent]),
              i.parent_id !== r.parent_id && h.update(i.id, {
                parent_id: r.parent_id
              });
            return h.updateOrdersIndents(n)
          }
        }
      }
      ,
      e.prototype.clear = function() {
        return this.currentCheckpoint = {
          items: [],
          notes: [],
          reminders: [],
          intent: null
        }
      }
      ,
      e
    }(),
    t.exports = new l
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../actions/.es6.ItemActions.js": 4,
    "../dispatcher/Dispatcher.js": 118,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.NotesModel.js": 157,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Reminders.js": 162,
    "./.coffee.SyncEngine.js": 167,
    events: "events"
  }],
  157: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    d = window.Signals,
    o = window.ElementStore,
    r = e("./.coffee.Storage.js").$storage,
    h = e("./.coffee.UtilModels.js"),
    l = e("./.coffee.SyncEngine.js"),
    u = e("./.coffee.TemporaryIds.js"),
    i = e("./.coffee.GarbageCollectorTypes.js"),
    s = e("./.coffee.ItemsModel.js"),
    c = e("./.coffee.ProjectsModel.js"),
    a = function() {
      function e() {
        this.clearCache = f(this.clearCache, this),
        this.loadCachedData = f(this.loadCachedData, this),
        this.syncCachedData = f(this.syncCachedData, this),
        this.updateNote = f(this.updateNote, this),
        this.deleteNote = f(this.deleteNote, this),
        this._addToModel = f(this._addToModel, this),
        this.addNote = f(this.addNote, this),
        this.resolveTempId = f(this.resolveTempId, this),
        this.getNotes = f(this.getNotes, this),
        this.ajaxGetProjectNotesData = f(this.ajaxGetProjectNotesData, this),
        this.ajaxGetTaskNotesData = f(this.ajaxGetTaskNotesData, this),
        this.resolvePostedDate = f(this.resolvePostedDate, this),
        this.syncLocalModel = f(this.syncLocalModel, this),
        this.initState = f(this.initState, this),
        this.initState(),
        d.connect("clear_local_data", this.initState),
        d.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this)),
        d.connect("resolve_temp.note", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n)
          }
        }(this))
      }
      return e.prototype.initState = function() {
        return this.model_data = {},
        this.TYPE_PROJECT_NOTE = "project_note",
        this.TYPE_ITEM_NOTE = "item_note"
      }
      ,
      e.prototype.syncLocalModel = function(e, t) {
        var n, r, o, s;
        if (e.length > 0) {
          for (r = [],
          o = 0,
          s = e.length; o < s; o++)
            n = e[o],
            n && (r.push(n),
            this.resolvePostedDate(n),
            this.model_data[n.id] && (n.posted = this.model_data[n.id].posted),
            n.is_archived ? d.sendSignal("garbage_collect.clean", i.type_note, n.id) : n.project_id && (t[n.project_id] = n.project_id));
          return h.syncLocalModel(r, this.model_data),
          d.sendSignal("notes_updated", r),
          this.syncCachedData()
        }
      }
      ,
      e.prototype.resolvePostedDate = function(e) {
        if ($isString(e.posted))
          return e.posted = new Date(e.posted)
      }
      ,
      e.prototype.ajaxGetTaskNotesData = function(e, t, n, r) {
        var o;
        return null == t && (t = 0),
        e = u.getRealId(e),
        o = $requestJSON("/API/v7/get_item"),
        o.offline_message = !0,
        o.addErrback(r),
        o.addCallback(function(e) {
          return function(t) {
            var r, o, i, a, c;
            for (r = s.model_data[t.item.id] = t.item,
            r.all_notes_fetched = !0,
            r.has_more_notes = !1,
            c = t.notes,
            i = 0,
            a = c.length; i < a; i++)
              o = c[i],
              e.resolvePostedDate(o),
              e.model_data[o.id] = o;
            return s.clearCache(),
            e.clearCache(),
            s.syncCachedData(),
            e.syncCachedData(),
            n(t)
          }
        }(this)),
        o.sendReq({
          token: window.User.token,
          item_id: e,
          sync_id: t,
          all_data: 1
        })
      }
      ,
      e.prototype.ajaxGetProjectNotesData = function(e, t, n) {
        var r;
        return e = u.getRealId(e),
        r = $requestJSON("/API/v7/get_project"),
        r.offline_message = !0,
        r.addErrback(n),
        r.addCallback(function(e) {
          return function(n) {
            var r, o, i, s, a;
            for (o = c.model_data[n.project.id] = n.project,
            o.all_notes_fetched = !0,
            o.has_more_notes = !1,
            a = n.notes,
            i = 0,
            s = a.length; i < s; i++)
              r = a[i],
              e.resolvePostedDate(r),
              e.model_data[r.id] = r;
            return e.clearCache(),
            e.syncCachedData(),
            c.syncCachedData(),
            t(n)
          }
        }(this)),
        r.sendReq({
          token: window.User.token,
          project_id: e,
          all_data: 1
        })
      }
      ,
      e.prototype.getNotes = function(e, t) {
        var n, r, o;
        if (t !== this.TYPE_ITEM_NOTE && t !== this.TYPE_PROJECT_NOTE)
          throw new Error("Programming error: incorrect note type. (note_type=" + t + ")");
        return e = u.getRealId(e),
        o = function() {
          var e, t;
          e = this.model_data,
          t = [];
          for (r in e)
            n = e[r],
            t.push(n);
          return t
        }
        .call(this),
        o = t === this.TYPE_ITEM_NOTE ? o.filter(function(t) {
          return t.item_id === e
        }) : o.filter(function(t) {
          return t.project_id === e && !t.item_id
        }),
        o.forEach(this.resolvePostedDate),
        o.sort(function(e, t) {
          return e.posted.getTime() === t.posted.getTime() ? e.id - t.id : e.posted.getTime() - t.posted.getTime()
        }),
        o
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.model_data[e])
          return delete this.model_data[e],
          n.id = t,
          this.model_data[n.id] = n,
          u.isTemporary(n.item_id) && (n.item_id = u.getRealId(n.item_id)),
          this.clearCache(n.item_id),
          this.syncCachedData()
      }
      ,
      e.prototype.addNote = function(e, t, n, r, o) {
        var i, s, a, c;
        if (null == r && (r = null ),
        null == o && (o = null ),
        n !== this.TYPE_ITEM_NOTE && n !== this.TYPE_PROJECT_NOTE)
          throw new Error("Programming error: incorrect note type. (note_type=" + n + ")");
        return s = window.User.id,
        i = {
          content: t,
          posted_uid: s
        },
        n === this.TYPE_ITEM_NOTE ? i.item_id = e : i.project_id = e,
        r && (i.uids_to_notify = r),
        o && o.file_server_info && (i.file_attachment = o.file_server_info),
        a = {
          posted: new Date
        },
        $update(a, i),
        c = a.id = u.generate("note"),
        this.model_data[a.id] = a,
        n === this.TYPE_ITEM_NOTE && this.clearCache(e),
        l.queueUpdate({
          type: "note_add",
          temp_id: c,
          args: i
        }),
        a
      }
      ,
      e.prototype._addToModel = function(e, t) {
        if (null == t && (t = !0),
        this.model_data[e.id] = e,
        t)
          return this.clearCache(e.item_id)
      }
      ,
      e.prototype.deleteNote = function(e) {
        var t, n;
        return e = u.getRealId(e),
        n = this.model_data[e],
        n && (t = o.get(n, "file"),
        t && (t.reset(),
        o.remove(t)),
        delete this.model_data[e]),
        l.queueUpdate({
          type: "note_delete",
          args: {
            note_id: e
          }
        })
      }
      ,
      e.prototype.updateNote = function(e, t, n) {
        var r, o;
        return null == t && (t = null ),
        null == n && (n = null ),
        e = u.getRealId(e),
        o = this.model_data[e],
        o && null !== t && (o.content = t),
        r = {
          note_id: e
        },
        null !== t && (r.content = t),
        null !== n && (r.file_attachment = n),
        l.queueUpdate({
          type: "note_update",
          args: r
        }),
        $update(o, r),
        o.item_id && this.clearCache(o.item_id),
        this.syncCachedData()
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Notes").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("Notes").get(),
        e ? this.model_data = e : this.model_data = {}
      }
      ,
      e.prototype.clearCache = function(e) {
        var t;
        return t = s.getById(e),
        t && (s.clearCache(t.project_id),
        s.syncCachedData()),
        this.syncCachedData()
      }
      ,
      e
    }(),
    window.NotesModel = new a,
    t.exports = window.NotesModel
  }
  , {
    "./.coffee.GarbageCollectorTypes.js": 150,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  158: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    s = e("./.coffee.SyncEngine.js"),
    a = e("./.coffee.SyncEngineExt.js"),
    o = function() {
      function e() {
        this.loadCachedData = c(this.loadCachedData, this),
        this.resync_notifications = c(this.resync_notifications, this),
        this.syncCachedData = c(this.syncCachedData, this),
        this.doInvitationGeneric = c(this.doInvitationGeneric, this),
        this.rejectInvitation = c(this.rejectInvitation, this),
        this.acceptInvitation = c(this.acceptInvitation, this),
        this.doInvitationGenericBiz = c(this.doInvitationGenericBiz, this),
        this.rejectInvitationBiz = c(this.rejectInvitationBiz, this),
        this.acceptInvitationBiz = c(this.acceptInvitationBiz, this),
        this.markAsRead = c(this.markAsRead, this),
        this.getLastRead = c(this.getLastRead, this),
        this.syncLastRead = c(this.syncLastRead, this),
        this.markNotesAsRead = c(this.markNotesAsRead, this),
        this.getUnreadCount = c(this.getUnreadCount, this),
        this.getNotifications = c(this.getNotifications, this),
        this.syncLocalModel = c(this.syncLocalModel, this),
        this.initState = c(this.initState, this),
        this.initState(),
        i.connect("clear_local_data", this.initState),
        i.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this))
      }
      return e.prototype.initState = function() {
        return this.noti_model = {},
        this.last_read_id = 0,
        this.initial_sync = !0
      }
      ,
      e.prototype.syncLocalModel = function(e) {
        var t, n, r, o, s, c, d, l, u, h, f;
        for (o = this.noti_model,
        s = !0,
        this.initial_sync ? s = !1 : a.isInitialSync() && (s = !1),
        d = 0,
        u = e.length; d < u; d++)
          r = e[d],
          o[r.notification_key] = r,
          r.is_deleted ? (t = o[r.notification_key],
          t && delete o[r.notification_key]) : s && i.sendSignal("notify", r);
        if (c = this.getNotifications(),
        c.length > 120)
          for (f = c.slice(120),
          l = 0,
          h = f.length; l < h; l++)
            n = f[l],
            o[n.notification_key] && delete o[n.notification_key];
        return this.syncCachedData(),
        this.initial_sync = !1
      }
      ,
      e.prototype.getNotifications = function() {
        var e;
        return e = $values(this.noti_model),
        e = e.sort(function(e, t) {
          return t.id - e.id
        })
      }
      ,
      e.prototype.getUnreadCount = function() {
        var e, t, n, r, o, i;
        for (t = this.last_read_id,
        e = 0,
        i = this.getNotifications(),
        r = 0,
        o = i.length; r < o; r++)
          n = i[r],
          n.id > t && !n.is_read && (e += 1);
        return e
      }
      ,
      e.prototype.markNotesAsRead = function(e) {
        var t, n, r, o, s, a, c, d, l, u;
        for (o = {},
        u = this.getNotifications(),
        a = 0,
        d = u.length; a < d; a++)
          r = u[a],
          r.note_id && (o[r.note_id] = r);
        for (t = !1,
        c = 0,
        l = e.length; c < l; c++)
          n = e[c],
          s = o[n.id],
          s && !s.is_read && (s.is_read = !0,
          t = !0,
          i.sendSignal("noti_updated", s));
        return t && (i.sendSignal("notifications_updated"),
        this.syncCachedData()),
        o = null
      }
      ,
      e.prototype.syncLastRead = function(e) {
        return this.last_read_id = e,
        this.syncCachedData(),
        i.sendSignal("notifications_updated")
      }
      ,
      e.prototype.getLastRead = function() {
        return this.last_read_id
      }
      ,
      e.prototype.markAsRead = function(e) {
        if (e.id !== this.last_read_id && (this.last_read_id = e.id,
        this.last_read_id))
          return this.syncCachedData(),
          s.queueUpdate({
            type: "live_notifications_set_last_read",
            args: {
              id: this.last_read_id
            }
          })
      }
      ,
      e.prototype.acceptInvitationBiz = function(e, t, n) {
        var r;
        return r = "biz_accept_invitation",
        this.doInvitationGenericBiz(r, e, t, n)
      }
      ,
      e.prototype.rejectInvitationBiz = function(e, t, n) {
        var r;
        return r = "biz_reject_invitation",
        this.doInvitationGenericBiz(r, e, t, n)
      }
      ,
      e.prototype.doInvitationGenericBiz = function(e, t, n, r) {
        var o, i, a;
        if (a = function() {
          if (n)
            return n()
        }
        ,
        o = {
          onSuccess: a,
          onError: r
        },
        s.queueUpdate({
          type: e,
          args: {
            invitation_id: t.invitation_id,
            invitation_secret: t.invitation_secret
          }
        }),
        s.sync(o, !0),
        i = this.noti_model[t.notification_key])
          return delete this.noti_model[t.notification_key],
          this.syncCachedData()
      }
      ,
      e.prototype.acceptInvitation = function(e, t, n) {
        var r;
        return r = "accept_invitation",
        this.doInvitationGeneric(r, e, t, n)
      }
      ,
      e.prototype.rejectInvitation = function(e, t, n) {
        var r, o;
        if (r = "reject_invitation",
        this.doInvitationGeneric(r, e, t, n),
        o = this.noti_model[e.notification_key])
          return delete this.noti_model[e.notification_key],
          this.syncCachedData()
      }
      ,
      e.prototype.doInvitationGeneric = function(e, t, n, r) {
        var o, i;
        return i = function() {
          if (n)
            return n()
        }
        ,
        o = {
          onSuccess: i,
          onError: r
        },
        s.queueUpdate({
          type: e,
          args: {
            invitation_id: t.invitation_id,
            invitation_secret: t.invitation_secret
          }
        }),
        s.sync(o, !0)
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Notifications").set(this.noti_model),
        r("NotificationsLastReadId").set(this.last_read_id)
      }
      ,
      e.prototype.resync_notifications = function() {
        var e;
        return e = $requestJSON("/API/v7/sync"),
        e.addCallback(function(e) {
          return function(t) {
            return t.live_notifications && (e.noti_model = {},
            e.syncLocalModel(t.live_notifications)),
            void 0 !== t.live_notifications_last_read_id && e.syncLastRead(t.live_notifications_last_read_id),
            console.log("notification resync succeeded")
          }
        }(this)),
        e.addErrback(function(e) {
          return console("notification resync failed", e)
        }),
        e.sendReq({
          resource_types: $serialize(["live_notifications"]),
          sync_token: "*"
        })
      }
      ,
      e.prototype.loadCachedData = function() {
        var e, t, n, o, i, s;
        o = r("Notifications").get(),
        o ? this.noti_model = o : this.noti_model = {},
        i = !1,
        s = this.noti_model;
        for (e in s)
          if (n = s[e],
          !n.id) {
            i = !0;
            break
          }
        return i && this.resync_notifications(),
        t = r("NotificationsLastReadId").get(),
        t ? this.last_read_id = t : this.last_read_id = 0
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.SyncEngineExt.js": 168
  }],
  159: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    c = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    l = e("./.coffee.TemporaryIds.js"),
    d = e("./.coffee.SyncEngine.js"),
    u = e("./.coffee.UtilModels.js"),
    s = e("./.coffee.GenericOrderSync.js"),
    i = e("./.coffee.GarbageCollectorTypes.js"),
    o = e("./.coffee.Collaborators.js"),
    a = function() {
      function e() {
        this.loadCachedData = h(this.loadCachedData, this),
        this.syncCachedData = h(this.syncCachedData, this),
        this.unarchive = h(this.unarchive, this),
        this.archive = h(this.archive, this),
        this.updateCached = h(this.updateCached, this),
        this.updateOrdersIndents = h(this.updateOrdersIndents, this),
        this.updateCount = h(this.updateCount, this),
        this.update = h(this.update, this),
        this.deleteFromModel = h(this.deleteFromModel, this),
        this.deleteProjects = h(this.deleteProjects, this),
        this.deleteMany = h(this.deleteMany, this),
        this.add = h(this.add, this),
        this.resolveTempId = h(this.resolveTempId, this),
        this.loadData = h(this.loadData, this),
        this.getByRegExp = h(this.getByRegExp, this),
        this.getByName = h(this.getByName, this),
        this.getParent = h(this.getParent, this),
        this.getChildren = h(this.getChildren, this),
        this.getAll = h(this.getAll, this),
        this.getIds = h(this.getIds, this),
        this.getTeamInbox = h(this.getTeamInbox, this),
        this.getInbox = h(this.getInbox, this),
        this.get = h(this.get, this),
        this.syncLocalModel = h(this.syncLocalModel, this),
        this.initState = h(this.initState, this),
        this.initState(),
        c.connect("clear_local_data", this.initState),
        this.project_order_indent_syncer = new s("project_update_orders_indents","ids_to_orders_indents"),
        c.connect("load_cached_data", function(e) {
          return function() {
            return e.loadData(e.loadCachedData())
          }
        }(this)),
        c.connect("resolve_temp.project", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n),
            e.project_order_indent_syncer.resolveTempId(t, n)
          }
        }(this))
      }
      return e.prototype.temporary_projects = {},
      e.prototype.max_indent = 4,
      e.prototype.initState = function() {
        return this.model_loaded = !1,
        this.model_data = {}
      }
      ,
      e.prototype.syncLocalModel = function(e, t) {
        var n, r, s, a, d, l, h, f, _, p, m, g, y, w;
        if (e.length > 0) {
          for (n = {},
          y = $values(this.model_data),
          d = 0,
          _ = y.length; d < _; d++)
            a = y[d],
            n[a.id] = a.cache_count;
          for (s = this.project_order_indent_syncer.pending_updates,
          l = 0,
          p = e.length; l < p; l++)
            a = e[l],
            r = s[a.id],
            r && (a.item_order = r[0],
            a.indent = r[1]);
          for (u.syncLocalModel(e, this.model_data),
          w = $values(this.model_data),
          h = 0,
          m = w.length; h < m; h++)
            a = w[h],
            n[a.id] && (a.cache_count = n[a.id]),
            a.shared === !1 && o.cleanProjectState(a.id),
            (a.is_archived || a.is_deleted) && c.sendSignal("garbage_collect.clean", i.type_project, a.id);
          for (f = 0,
          g = e.length; f < g; f++)
            a = e[f],
            t[a.id] = a.id;
          return this.syncCachedData()
        }
      }
      ,
      e.prototype.get = function(e) {
        return this.model_data[e]
      }
      ,
      e.prototype.getInbox = function() {
        return this.model_data[window.User.inbox_project]
      }
      ,
      e.prototype.getTeamInbox = function() {
        return this.model_data[window.User.team_inbox]
      }
      ,
      e.prototype.getIds = function() {
        return $keys(this.model_data)
      }
      ,
      e.prototype.getAll = function() {
        var e, t, n, r;
        n = [],
        r = this.model_data;
        for (e in r)
          t = r[e],
          t.is_archived || n.push(t);
        return n.sort(u.sortByItemOrder),
        n
      }
      ,
      e.prototype.getChildren = function(e, t) {
        var n;
        return null == t && (t = !1),
        n = this.getAll(),
        u.getChildren(n, e, t)
      }
      ,
      e.prototype.getParent = function(e) {
        var t;
        return t = this.getAll(),
        u.getParent(t, e)
      }
      ,
      e.prototype.getByName = function(e, t) {
        var n, r, o, i, s, a;
        null == t && (t = !0),
        i = [],
        a = this.model_data;
        for (r in a)
          o = a[r],
          t ? (n = o.name.toLowerCase().indexOf(e.toLowerCase()),
          n !== -1 && i.push([n, o])) : e === o.name && i.push([-1, o]);
        return i.sort(function(e, t) {
          return e[0] - t[0]
        }),
        function() {
          var e, t, n;
          for (n = [],
          e = 0,
          t = i.length; e < t; e++)
            s = i[e],
            n.push(s[1]);
          return n
        }()
      }
      ,
      e.prototype.getByRegExp = function(e) {
        var t, n, r, o;
        r = [],
        o = this.model_data;
        for (t in o)
          n = o[t],
          n.name && n.name.match(e) && r.push(n);
        return r
      }
      ,
      e.prototype.loadData = function(e) {
        var t, n, r, o;
        for (n = window.User && window.User.team_inbox,
        r = 0,
        o = e.length; r < o; r++)
          t = e[r],
          this.model_data[t.id] = t,
          t.inbox_project && (t.name = _("Inbox")),
          t.team_inbox && (t.name = _("Team Inbox")),
          t.name = $strip(t.name.replace(/^\*\s+/, ""));
        return this.project_order_indent_syncer.loadData(),
        this.syncCachedData(),
        this.model_loaded = !0
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.model_data[e])
          return n.id = t,
          this.model_data[n.id] = n,
          delete this.model_data[e],
          this.syncCachedData()
      }
      ,
      e.prototype.normalizeName = function(e) {
        return e = e.replace(/[<>"=#+@]+/g, "_")
      }
      ,
      e.prototype.add = function(e) {
        var t, n, r, o;
        return r = {
          user_id: window.User.id,
          color: 1,
          collapsed: 0,
          indent: e.indent || 1,
          cache_count: 0
        },
        e.name = this.normalizeName(e.name),
        u.normalizeIndent(e, this.max_indent),
        t = this.getAll(),
        n = window.User.is_premium ? 201 : 81,
        t.length >= n ? void alert(_("For performance reasons you can only add %s projects. Please archive or delete some of your finished projects.").replace("%s", n)) : (t.length > 0 ? r.item_order = $last(t).item_order + 1 : r.item_order = 1,
        e.parent_id && (e.parent_id = l.getRealId(e.parent_id)),
        $update(r, e),
        o = r.id = l.generate("project"),
        this.project_order_indent_syncer.hasUnfinished() && this.project_order_indent_syncer.commit(),
        this.model_data[r.id] = r,
        this.syncCachedData(),
        d.queueUpdate({
          type: "project_add",
          temp_id: o,
          args: e
        }),
        r)
      }
      ,
      e.prototype.deleteMany = function(e) {
        return this.deleteProjects(e)
      }
      ,
      e.prototype.deleteProjects = function(e) {
        var t, n, r;
        for (d.queueUpdate({
          type: "project_delete",
          args: {
            ids: e
          }
        }),
        n = 0,
        r = e.length; n < r; n++)
          t = e[n],
          this.deleteFromModel(t, !1);
        return c.sendSignal("sync_data.items"),
        this.syncCachedData()
      }
      ,
      e.prototype.deleteFromModel = function(e, t) {
        if (null == t && (t = !0),
        this.model_data[e] && delete this.model_data[e],
        c.sendSignal("garbage_collect.clean", i.type_project, e, !0),
        t)
          return this.syncCachedData()
      }
      ,
      e.prototype.update = function(e, t) {
        var n;
        if (n = this.get(e))
          return t.name && (t.name = this.normalizeName(t.name)),
          t.parent_id && (t.parent_id = l.getRealId(t.parent_id)),
          t.indent && u.normalizeIndent(t, this.max_indent),
          $update(n, t),
          t.id = n.id,
          d.queueUpdate({
            type: "project_update",
            args: t
          }),
          (t.indent || t.item_order) && this.project_order_indent_syncer.updateIfFound(t.id, [n.item_order, n.indent]),
          t.name && c.sendSignal("project.name.changed", n),
          this.syncCachedData(),
          n
      }
      ,
      e.prototype.updateCount = function(e) {
        var t;
        if (t = this.get(e))
          return c.sendSignal("update_project_count", t),
          this.syncCachedData()
      }
      ,
      e.prototype.updateOrdersIndents = function(e) {
        var t, n, r, o;
        n = !1;
        for (r in e)
          t = e[r],
          o = this.model_data[r],
          o && (o.item_order = t[0],
          o.indent = t[1],
          n = !0);
        if (n)
          return this.project_order_indent_syncer.update(e),
          this.syncCachedData()
      }
      ,
      e.prototype.updateCached = function(e, t) {
        var n;
        return e.id = l.getRealId(e.id),
        n = this.get(e.id),
        n && $update(n, t),
        $update(e, t)
      }
      ,
      e.prototype.archive = function(e) {
        var t, n, r, o, s;
        if (n = this.get(e)) {
          for (c.sendSignal("garbage_collect.clean", i.type_project, n.id),
          d.queueUpdate({
            type: "project_archive",
            args: {
              id: e
            }
          }),
          s = this.getChildren(n, !0),
          r = 0,
          o = s.length; r < o; r++)
            t = s[r],
            this.deleteFromModel(t.id, !1);
          return c.sendSignal("sync_data.items"),
          this.syncCachedData(),
          n.indent = 1,
          n.is_archived = !0
        }
      }
      ,
      e.prototype.unarchive = function(e) {
        var t;
        return t = this.get(e),
        t && (t.is_archived = !1),
        d.queueUpdate({
          type: "project_unarchive",
          args: {
            id: e
          }
        })
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Projects").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("Projects").get(),
        e ? $values(e) : []
      }
      ,
      e
    }(),
    window.ProjectsModel = new a,
    t.exports = window.ProjectsModel
  }
  , {
    "./.coffee.Collaborators.js": 146,
    "./.coffee.GarbageCollectorTypes.js": 150,
    "./.coffee.GenericOrderSync.js": 151,
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  160: [function(e, t, n) {
    var r, o, i, s, a, c, d, l = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    d = e("./.coffee.TemporaryIds.js"),
    r = e("./.coffee.DayOrders.js"),
    o = e("./.coffee.ItemsModel.js"),
    s = e("./.coffee.ProjectsModel.js"),
    i = e("./.coffee.LabelsModel.js"),
    c = e("./.coffee.QueriesItems.js"),
    a = function() {
      function e() {
        this.query = l(this.query, this)
      }
      return e.prototype.query = function(e, t) {
        var n, o, s, a, d;
        if (s = [],
        0 === e.length && t.length > 0)
          s.push({
            type: "label",
            data: this.getByLabels(t)
          });
        else
          for (a = 0,
          d = e.length; a < d; a++)
            o = e[a],
            n = {},
            o.raw && (n.query = n.query_query),
            n.type = o.type,
            "overdue" === o.type ? n.data = c.getOverdue() : "date" === o.type ? (n.date = o.query_data,
            n.data = c.getByDate(n.date),
            n.data = r.annotate(n.data)) : "priority" === o.type ? (n.priority = o.query_data,
            n.data = this.getByPriority(o.query_data)) : "no date" === o.type ? n.data = this.getNoDueDate() : "viewall" === o.type ? n.data = this.getAllByProject() : "labels" === o.type && (n.data = i.getAll(!0)),
            t.length > 0 && (n.data = this.filterByLabels(n.data, t)),
            s.push(n);
        return s
      }
      ,
      e.prototype.getByPriority = function(e) {
        var t, n, r, i, s;
        for (e = 5 - e,
        n = [],
        s = o.getAllOwn(),
        r = 0,
        i = s.length; r < i; r++)
          t = s[r],
          t.priority === e && n.push(t);
        return n
      }
      ,
      e.prototype.getByLabels = function(e, t) {
        var n, r, i, s, a, c, l, u, h;
        for (null == t && (t = !1),
        s = t ? 0 : [],
        h = o.getAllOwn(),
        a = 0,
        l = h.length; a < l; a++) {
          for (r = h[a],
          n = !0,
          c = 0,
          u = e.length; c < u; c++)
            if (i = e[c],
            !$isIn(i, d.getRealIds(r.labels))) {
              n = !1;
              break
            }
          n && (t ? s += 1 : s.push(r))
        }
        return s
      }
      ,
      e.prototype.getAllByProject = function() {
        var e, t, n, r, i, a;
        for (n = [],
        a = s.getAll(),
        r = 0,
        i = a.length; r < i; r++)
          t = a[r],
          e = o.getByProjectId(t.id),
          e.length > 0 && n.push({
            project_id: t.id,
            uncompleted: e
          });
        return n
      }
      ,
      e.prototype.getNoDueDate = function() {
        var e, t, n, r, i;
        for (t = [],
        i = o.getAllOwn(),
        n = 0,
        r = i.length; n < r; n++)
          e = i[n],
          e.due_date || t.push(e);
        return t
      }
      ,
      e.prototype.filterByLabels = function(e, t) {
        var n, r, o, i, s, a, c, d, l;
        for (i = [],
        a = 0,
        d = e.length; a < d; a++)
          if (r = e[a],
          o = r.labels,
          o && o.length > 0) {
            for (n = !0,
            c = 0,
            l = t.length; c < l; c++)
              if (s = t[c],
              !$isIn(s, o)) {
                n = !1;
                break
              }
            n && i.push(r)
          }
        return i
      }
      ,
      e
    }(),
    t.exports = new a
  }
  , {
    "./.coffee.DayOrders.js": 147,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.LabelsModel.js": 154,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.QueriesItems.js": 161,
    "./.coffee.TemporaryIds.js": 170
  }],
  161: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    a = window.Signals,
    r = window.DateistDateHelpers,
    o = e("./.coffee.ItemsModel.js"),
    i = e("./.coffee.ProjectsModel.js"),
    s = function() {
      function e() {
        this.clearCache = c(this.clearCache, this),
        a.connect("clear_local_data", function(e) {
          return function() {
            return e.cache = {}
          }
        }(this))
      }
      return e.prototype.cache = {},
      e.prototype.getCounts = function(e) {
        var t;
        return null == e && (e = null ),
        e || (e = o.getAllOwn()),
        t = {
          today: this.getToday(e).length,
          overdue: this.getOverdue(e).length
        }
      }
      ,
      e.prototype._hourlyCache = function(e) {
        return "" + e + "-" + (new Date).getHours()
      }
      ,
      e.prototype.getToday = function(e) {
        return null == e && (e = null ),
        this.getByDate(new Date, e)
      }
      ,
      e.prototype.getOverdue = function(e) {
        var t, n, i, s, a, c, d, l;
        if (null == e && (e = null ),
        e || (e = o.getAll()),
        t = this._hourlyCache("overdue-" + (e && e.length)),
        this.cache[t])
          return $arrayCopy(this.cache[t]);
        for (a = window.User.id,
        s = [],
        c = new Date,
        d = 0,
        l = e.length; d < l; d++)
          i = e[d],
          n = i.due_date,
          n && r.is_overdue(c, n) && (r.is_same_date(c, n) || s.push(i));
        return s.sort(function(e, t) {
          return e.time - t.time
        }),
        this.cache[t] = s,
        $arrayCopy(s)
      }
      ,
      e.prototype.getNextXdays = function(e, t, n) {
        var i, s, a, c, d, l, u, h, f;
        if (null == e && (e = !1),
        null == t && (t = 7),
        null == n && (n = null ),
        n || (n = o.getAll()),
        i = this._hourlyCache("next-" + e + "-" + t + "-" + (n && n.length)),
        this.cache[i])
          return this.cache[i];
        for (d = r.date_max(new Date),
        a = [],
        c = u = 0; 0 <= t ? u <= t : u >= t; c = 0 <= t ? ++u : --u)
          a.push(d),
          d = new Date(d.getTime() + 864e5);
        for (l = {},
        h = 0,
        f = a.length; h < f; h++)
          s = a[h],
          l[s] = this.getByDate(s, n);
        return l = e ? $arrayFlatten($values(l)) : l,
        this.cache[i] = l,
        l
      }
      ,
      e.prototype.getByDate = function(e, t) {
        var n, i, s, a, c, d, l;
        if (null == t && (t = null ),
        c = window.User.id,
        t || (t = o.getAll()),
        n = this._hourlyCache("next-" + e + "-" + (t && t.length)),
        this.cache[n])
          return this.cache[n];
        for (a = window.User.id,
        s = [],
        d = 0,
        l = t.length; d < l; d++)
          i = t[d],
          i.due_date && r.is_same_date(i.due_date, e) && s.push(i);
        return this.cache[n] = s,
        s
      }
      ,
      e.prototype.clearCache = function() {
        return this.cache = {}
      }
      ,
      e
    }(),
    t.exports = new s
  }
  , {
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.ProjectsModel.js": 159
  }],
  162: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    c = window.Signals,
    i = window.DateUtils,
    r = e("./.coffee.Storage.js").$storage,
    l = e("./.coffee.TemporaryIds.js"),
    d = e("./.coffee.SyncEngine.js"),
    u = e("./.coffee.UtilModels.js"),
    s = function() {
      function e() {
        this.loadCachedData = h(this.loadCachedData, this),
        this.syncCachedData = h(this.syncCachedData, this),
        this.loadData = h(this.loadData, this),
        this.removeRelative = h(this.removeRelative, this),
        this.remove = h(this.remove, this),
        this._addToModel = h(this._addToModel, this),
        this.addLocation = h(this.addLocation, this),
        this.add = h(this.add, this),
        this.resolveTempId = h(this.resolveTempId, this),
        this.getRemindersByItemId = h(this.getRemindersByItemId, this),
        this.hasReminders = h(this.hasReminders, this),
        this.getAllReminders = h(this.getAllReminders, this),
        this.syncLocalModel = h(this.syncLocalModel, this),
        this.initState = h(this.initState, this),
        this.initState(),
        c.connect("clear_local_data", this.initState),
        c.connect("load_cached_data", function(e) {
          return function() {
            return e.loadData(e.loadCachedData())
          }
        }(this)),
        c.connect("resolve_temp.reminder", function(e) {
          return function(t, n) {
            return e.resolveTempId(t, n)
          }
        }(this))
      }
      return e.prototype.DepItemsModel = null ,
      e.prototype.DepCollaborators = null ,
      e.prototype.loaded = !1,
      e.prototype.initState = function() {
        return this.model_data = {},
        this.cache_has_reminders = {}
      }
      ,
      e.prototype.syncLocalModel = function(e, t) {
        var n, r, o, i, s, a, c, d, l;
        if (e.length > 0) {
          for (u.syncLocalModel(e, this.model_data),
          i = {},
          a = 0,
          d = e.length; a < d; a++)
            n = e[a],
            n && (n.due_date || (n.due_date = n.due_date_utc),
            i[n.item_id] = n.item_id);
          if (o = $values(i),
          o.length > 0) {
            for (c = 0,
            l = o.length; c < l; c++)
              s = o[c],
              r = this.DepItemsModel.getById(s),
              r && (this.DepItemsModel.clearCache(r.project_id),
              t[r.project_id] = r.project_id);
            this.DepItemsModel.syncCachedData()
          }
          return this.syncCachedData()
        }
      }
      ,
      e.prototype.getAllReminders = function() {
        return $values(this.model_data)
      }
      ,
      e.prototype.hasReminders = function(e) {
        var t;
        return void 0 === this.cache_has_reminders[e] && (t = this.getRemindersByItemId(e),
        t.length > 0 ? this.cache_has_reminders[e] = !0 : this.cache_has_reminders[e] = !1),
        this.cache_has_reminders[e]
      }
      ,
      e.prototype.getRemindersByItemId = function(e, t) {
        var n, r, o, i, s;
        for (null == t && (t = null ),
        e = l.getRealId(e),
        r = [],
        s = $values(this.model_data),
        o = 0,
        i = s.length; o < i; o++)
          if (n = s[o],
          n.item_id === e) {
            if (null !== t && n.type !== t)
              continue;r.push(n)
          }
        return r
      }
      ,
      e.prototype.resolveTempId = function(e, t) {
        var n;
        if (n = this.model_data[e])
          return n.id = t,
          delete this.model_data[e],
          this.model_data[t] = n,
          l.isTemporary(n.notify_uid) && (n.notify_uid = l.getRealId(n.notify_uid)),
          l.isTemporary(n.item_id) && (n.item_id = l.getRealId(n.item_id)),
          this.syncCachedData()
      }
      ,
      e.prototype.add = function(e) {
        var t, n;
        return t = {},
        n = t.id ? t.id : t.id = l.generate("reminder"),
        void 0 !== e.minute_offset ? t.type = "relative" : t.type = "absolute",
        e.type = t.type,
        e.notify_uid && (t.notify_uid = e.notify_uid),
        e.date_lang || (e.date_lang = "en"),
        e.date_lang && (t.date_lang = e.date_lang),
        e.service ? t.service = e.service : (e.service = "default",
        t.service = "default"),
        this.model_data[n] = t,
        $update(t, e),
        d.queueUpdate({
          type: "reminder_add",
          args: e,
          temp_id: n
        }),
        this.syncCachedData(),
        t
      }
      ,
      e.prototype.addLocation = function(e) {
        var t, n;
        return t = {},
        n = t.id ? t.id : t.id = l.generate("reminder"),
        this.model_data[n] = t,
        $update(t, e),
        d.queueUpdate({
          type: "reminder_add",
          args: e,
          temp_id: n
        }),
        this.syncCachedData(),
        t
      }
      ,
      e.prototype._addToModel = function(e, t) {
        if (null == t && (t = !0),
        this.model_data[e.id] = e,
        t)
          return this.syncCachedData()
      }
      ,
      e.prototype.featureEnabled = function() {
        var e;
        return !!window.User.is_premium || (e = window.User.features.restriction || window.User.restriction || 0,
        e > 0)
      }
      ,
      e.prototype.remove = function(e) {
        return e = l.getRealId(e),
        this.model_data[e] && delete this.model_data[e],
        d.queueUpdate({
          type: "reminder_delete",
          args: {
            id: e
          }
        }),
        this.syncCachedData()
      }
      ,
      e.prototype.removeRelative = function(e) {
        var t, n, r, o, i;
        for (o = this.getRemindersByItemId(e, "relative"),
        i = [],
        n = 0,
        r = o.length; n < r; n++)
          t = o[n],
          i.push(this.remove(t.id));
        return i
      }
      ,
      e.prototype.loadData = function(e) {
        return this.model_data = e,
        this.syncCachedData()
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("Reminders").set(this.model_data),
        this.cache_has_reminders = {}
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return this.loaded = !0,
        e = r("Reminders").get(),
        e ? this.model_data = e : this.model_data = {}
      }
      ,
      e
    }(),
    o = function() {
      function e() {
        this.getCurrentReminders = h(this.getCurrentReminders, this),
        this.commitBuffered = h(this.commitBuffered, this),
        this.getCurItem = h(this.getCurItem, this)
      }
      return e.prototype.use_buffered = !1,
      e.prototype.cur_item = null ,
      e.prototype.current_project_id = null ,
      e.prototype.reminders = [],
      e.prototype.getCurItem = function() {
        var e, t, n;
        if (t = {},
        this.cur_item ? $update(t, this.cur_item) : (t.id = "_buf_rem",
        t.project_id = this.current_project_id),
        e = $all("input", "input_due_date"),
        e.length > 0) {
          n = e[0].value,
          t.date_string = n;
          try {
            t.due_date = i.parse(n).due_date
          } catch (e) {
            t.due_date = null
          }
        }
        return t
      }
      ,
      e.prototype.commitBuffered = function(e) {
        var t, n, r, o, i;
        if (this.reminders.length > 0) {
          for (o = this.reminders,
          i = [],
          n = 0,
          r = o.length; n < r; n++)
            t = o[n],
            t.item_id = e.id,
            "location" === t.type ? i.push(a.addLocation(t)) : i.push(a.add(t));
          return i
        }
      }
      ,
      e.prototype.getCurrentReminders = function() {
        var e;
        try {
          return this.getRemindersByItemId(this.getCurItem().id)
        } catch (t) {
          return e = t,
          []
        }
      }
      ,
      e.prototype.getRemindersByItemId = function(e) {
        return this.use_buffered ? this.reminders : a.getRemindersByItemId(e)
      }
      ,
      e.prototype.add = function(e) {
        return this.use_buffered ? (e.id = l.generate("reminder"),
        this.reminders.push(e)) : e = "location" === e.type ? a.addLocation(e) : a.add(e),
        e
      }
      ,
      e.prototype.remove = function(e) {
        var t, n, r, o, i;
        if (this.use_buffered) {
          for (t = [],
          i = this.reminders,
          r = 0,
          o = i.length; r < o; r++)
            n = i[r],
            n.id !== e && t.push(n);
          return this.reminders = t
        }
        return a.remove(e)
      }
      ,
      e.prototype.reset = function() {
        return this.reminders = [],
        this.cur_item = null ,
        this.use_buffered = !1
      }
      ,
      e
    }(),
    a = new s,
    t.exports = {
      RemindersModel: a,
      BufferedRemindersModel: new o
    }
  }
  , {
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngine.js": 167,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172
  }],
  163: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    i = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    o = function() {
      function e() {
        this.loadCachedData = s(this.loadCachedData, this),
        this.syncCachedData = s(this.syncCachedData, this),
        this.getLastLocations = s(this.getLastLocations, this),
        this.syncLocalModel = s(this.syncLocalModel, this),
        this.initState = s(this.initState, this),
        this.initState(),
        i.connect("clear_local_data", this.initState),
        i.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this))
      }
      return e.prototype.initState = function() {
        return this.model_data = []
      }
      ,
      e.prototype.syncLocalModel = function(e) {
        return this.model_data = e,
        this.syncCachedData()
      }
      ,
      e.prototype.getLastLocations = function() {
        return this.model_data
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("RemindersLocation").set(this.model_data)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("RemindersLocation").get(),
        e ? this.model_data = e : this.model_data = []
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {
    "./.coffee.Storage.js": 165
  }],
  164: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = {
      waiting: 1,
      reordering: 2
    },
    o = function() {
      function e() {
        this.get = i(this.get, this),
        this.set = i(this.set, this)
      }
      return e.prototype.DragMode = r,
      e.prototype.model_data = {
        drag_and_drop_mode: r.waiting
      },
      e.prototype.set = function(e, t) {
        return this.model_data[e] = t
      }
      ,
      e.prototype.get = function(e) {
        return this.model_data[e]
      }
      ,
      e
    }(),
    t.exports = new o
  }
  , {}],
  165: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = function() {
      function e() {
        this._commitAll = s(this._commitAll, this),
        this._commit = s(this._commit, this),
        this.commitAll = s(this.commitAll, this),
        this.storeLocally = s(this.storeLocally, this)
      }
      return e.prototype.cache = {},
      e.prototype.timeouts = {},
      e.prototype.manual_commit = !1,
      e.prototype.storeLocally = function(e, t) {
        var n;
        return this.cache[e] = t,
        this.timeouts[e] && (clearTimeout(this.timeouts[e]),
        delete this.timeouts[e]),
        this.manual_commit !== !0 && (n = function(t) {
          return function() {
            if (t._commit(e, t.cache[e]),
            t.timeouts[e])
              return delete t.timeouts[e]
          }
        }(this),
        this.timeouts[e] = setTimeout(n, .3)),
        t
      }
      ,
      e.prototype.commitAll = function() {
        return setTimeout(this._commitAll, 5)
      }
      ,
      e.prototype._commit = function(e, t) {
        if (t = window.JSON ? JSON.stringify(t) : $serialize(t),
        t !== localStorage.getItem(e))
          return localStorage.setItem(e, t)
      }
      ,
      e.prototype._commitAll = function() {
        var e, t, n, r;
        n = this.cache,
        r = [];
        for (e in n)
          t = n[e],
          r.push(this._commit(e, t));
        return r
      }
      ,
      e
    }(),
    i = new o,
    r = function(e) {
      return {
        set: function(t) {
          return i.storeLocally(e, t),
          t
        },
        get: function() {
          var t, n;
          return t = i.cache[e],
          void 0 !== t ? t : (n = localStorage.getItem(e),
          n && (n = window.JSON ? JSON.parse(n) : $eval(n),
          i.cache[e] = n),
          n)
        },
        remove: function() {
          if (window.localStorage && localStorage.removeItem(e),
          i.cache[e])
            return delete i.cache[e]
        }
      }
    }
    ,
    i = i,
    window.$storage = r,
    window.GlobalStorage = i,
    "undefined" != typeof n && null !== n && (n.$storage = r,
    n.GlobalStorage = i)
  }
  , {}],
  166: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u, h, f, _, p, m, g, y, w = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    _ = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    y = e("../components/misc/Misc.js").isAsianLang,
    s = e("./.coffee.Storage.js").GlobalStorage,
    o = e("./.coffee.Collaborators.js"),
    c = e("./.coffee.LabelsModel.js"),
    i = e("./.coffee.FiltersModel.js"),
    u = e("./.coffee.ProjectsModel.js"),
    a = e("./.coffee.ItemsModel.js"),
    f = e("./.coffee.Reminders.js").RemindersModel,
    h = e("./.coffee.RemindersLocationModel.js"),
    d = e("./.coffee.NotesModel.js"),
    l = e("./.coffee.NotificationsModel.js"),
    g = e("./.coffee.UserModel.js"),
    p = e("../actions/.es6.SyncActions.js"),
    m = function() {
      function e() {
        this.cleanLocalModel = w(this.cleanLocalModel, this),
        this.syncLocalData = w(this.syncLocalData, this),
        _.connect("sync_local_data", function(e) {
          return function(t) {
            return e.syncLocalData(t)
          }
        }(this))
      }
      return e.prototype.syncLocalData = function(e) {
        var t, n, m, y, w, v, j, b;
        for (s.manual_commit = !0,
        _.sendSignal("syncing_data", e),
        p.receiveSyncUpdate(e),
        e.user && g.update(e.user),
        e.day_orders_timestamp && r("DayOrdersTimestamp").set(e.day_orders_timestamp),
        n = {},
        e.day_orders && a.loadDayOrders(e.day_orders),
        e.projects && u.syncLocalModel(e.projects, n),
        e.collaborators && o.syncLocalModel(e.collaborators, e.collaborator_states, n),
        e.items && a.syncLocalModel(e.items, n),
        e.labels && c.syncLocalModel(e.labels, n),
        w = [].concat(e.notes, e.project_notes),
        w && d.syncLocalModel(w, n),
        e.reminders && f.syncLocalModel(e.reminders, n),
        e.locations && h.syncLocalModel(e.locations),
        e.filters && i.syncLocalModel(e.filters, n),
        e.live_notifications && l.syncLocalModel(e.live_notifications),
        void 0 !== e.live_notifications_last_read_id && l.syncLastRead(e.live_notifications_last_read_id),
        y = [],
        b = $values(n),
        v = 0,
        j = b.length; v < j; v++)
          t = b[v],
          m = u.model_data[t],
          m && (y.push(m),
          m.cache_count = a.getItemCount(m.id)),
          u.syncCachedData();
        return s.manual_commit = !1,
        s.commitAll(),
        _.sendSignal("refresh_interface", y)
      }
      ,
      e.prototype.cleanLocalModel = function() {
        var e, t, n, r, o, i, s, c, l, h, _, p, m, g, y, w, v, j;
        for (o = {},
        v = $keys(u.model_data),
        m = 0,
        y = v.length; m < y; m++)
          l = v[m],
          o[l] = !0;
        n = a.model_data;
        for (e in n)
          t = n[e],
          o[t.project_id] || delete n[e];
        for (r = {},
        j = $keys(a.model_data),
        g = 0,
        w = j.length; g < w; g++)
          e = j[g],
          r[e] = !0;
        i = d.model_data;
        for (s in i)
          c = i[s],
          c.item_id || c.project_id || delete i[s];
        _ = f.model_data;
        for (p in _)
          h = _[p],
          r[h.item_id] || delete _[p];
        return a.syncCachedData(),
        d.syncCachedData(),
        f.syncCachedData()
      }
      ,
      e
    }(),
    t.exports = new m
  }
  , {
    "../actions/.es6.SyncActions.js": 5,
    "../components/misc/Misc.js": 64,
    "./.coffee.Collaborators.js": 146,
    "./.coffee.FiltersModel.js": 148,
    "./.coffee.ItemsModel.js": 153,
    "./.coffee.LabelsModel.js": 154,
    "./.coffee.NotesModel.js": 157,
    "./.coffee.NotificationsModel.js": 158,
    "./.coffee.ProjectsModel.js": 159,
    "./.coffee.Reminders.js": 162,
    "./.coffee.RemindersLocationModel.js": 163,
    "./.coffee.Storage.js": 165,
    "./.coffee.UserModel.js": 171
  }],
  167: [function(e, t, n) {
    var r, o, i, s, a, c, d, l, u = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    c = e("./.coffee.TemporaryIds.js"),
    l = e("./.coffee.VersionUpdater.js"),
    a = e("./.coffee.SyncQueue.js"),
    s = e("./.coffee.SyncEngineExt.js"),
    d = e("./.coffee.UtilModels.js"),
    i = function() {
      function e() {
        this._queueWithoutErrorMeta = u(this._queueWithoutErrorMeta, this),
        this._processSyncQueue = u(this._processSyncQueue, this),
        this._setGlobalError = u(this._setGlobalError, this),
        this._setSyncingState = u(this._setSyncingState, this),
        this.setUpdateTimeout = u(this.setUpdateTimeout, this),
        this.sync = u(this.sync, this),
        this.queueIncludesErrors = u(this.queueIncludesErrors, this),
        this.getQueueErrorLength = u(this.getQueueErrorLength, this),
        this.getQueueSuccessLength = u(this.getQueueSuccessLength, this),
        this.getQueueAllLength = u(this.getQueueAllLength, this),
        this.getSyncState = u(this.getSyncState, this),
        this.scheduleSync = u(this.scheduleSync, this),
        this.queueUpdate = u(this.queueUpdate, this),
        this.sync_queue = new a,
        this.number_of_errors = 0,
        window.ONLY_PRELOAD || this.scheduleSync()
      }
      return e.prototype.max_notes = 5,
      e.prototype.sync_states = {
        idle: 1,
        syncing: 2
      },
      e.prototype.sync_timeouts = {
        mini: 400,
        full: 1500
      },
      e.prototype.last_synced = new Date,
      e.prototype.queueUpdate = function(e) {
        return this.sync_queue.add(e),
        this.scheduleSync()
      }
      ,
      e.prototype.scheduleSync = function(e, t, n) {
        return null == e && (e = null ),
        null == t && (t = null ),
        null == n && (n = !1),
        e || (e = window.FLUID_MINI ? this.sync_timeouts.mini : this.sync_timeouts.full),
        0 === this.getQueueSuccessLength() ? this.sync(t) : this.setUpdateTimeout(e, t),
        !1
      }
      ,
      e.prototype.getSyncState = function() {
        return this.sync_state
      }
      ,
      e.prototype.getQueueAllLength = function() {
        return this.sync_queue.get().length
      }
      ,
      e.prototype.getQueueSuccessLength = function() {
        var e, t, n, r, o;
        for (t = 0,
        o = this.sync_queue.get(),
        n = 0,
        r = o.length; n < r; n++)
          e = o[n],
          e.last_error || t++;
        return t
      }
      ,
      e.prototype.getQueueErrorLength = function() {
        var e, t, n, r, o;
        for (t = 0,
        o = this.sync_queue.get(),
        n = 0,
        r = o.length; n < r; n++)
          e = o[n],
          e.last_error && e.retry_count > 3 && t++;
        return t
      }
      ,
      e.prototype.queueIncludesErrors = function() {
        var e, t, n, r;
        for (r = this.sync_queue.get(),
        t = 0,
        n = r.length; t < n; t++)
          if (e = r[t],
          e.last_error)
            return !0;
        return !1
      }
      ,
      e.prototype.sync = function(e, t, n) {
        var r, i, a, u, h, f, _;
        if (null == e && (e = null ),
        null == t && (t = !1),
        null == n && (n = !1),
        this.sync_timeout && (clearTimeout(this.sync_timeout),
        this.sync_timeout = null ),
        this.current_req)
          return void (this.sync_timeout = setTimeout($p(this.sync, e, !1), this.sync_timeouts.full));
        if (0 === this.getQueueSuccessLength() && t === !1)
          return void (e && e.onSuccess && e.onSuccess());
        for (n === !0 && this._setSyncingState(this.sync_states.syncing),
        r = this.sync_queue.get(),
        r = r.slice(0, 100),
        this.sync_queue.assignUnqiueIds(r),
        u = $arrayCopy(r),
        h = "/API/v7/sync",
        this.current_req = a = $requestJSON(h),
        a.addCallback(function(t) {
          return function(n) {
            var r, i, a;
            return t.current_req = null ,
            t._setGlobalError(null ),
            i = n.temp_id_mapping,
            i && c.setRealIds(i),
            a = n.user && n.user.id,
            a && window.User && a !== window.User.id ? d.checkIfErrorIsLogout("Not logged in") : (n.full_sync && o.sendSignal("clear_local_data"),
            l.check(n),
            t._processSyncQueue(u, n),
            t._setSyncingState(t.sync_states.idle),
            t.number_of_errors = 0,
            0 === t.getQueueSuccessLength() ? (o.sendSignal("sync_local_data", n),
            s.syncData(n),
            n.projects && n.projects.length > 0 && o.sendSignal("refresh_interface", n.projects),
            o.sendSignal("sync_engine_synced")) : t.scheduleSync(),
            i && (r = t.getQueueAllLength() - u.length,
            0 === r && c.clearOld()),
            e && e.onSuccess && e.onSuccess(n),
            t.last_synced = new Date)
          }
        }(this)),
        a.addErrback(function(t) {
          return function(n, r) {
            var o, i;
            if (t.current_req = null ,
            !d.checkIfErrorIsLogout(n, r))
              return t._setGlobalError([n, r]),
              t._setSyncingState(t.sync_states.idle),
              t.number_of_errors++,
              i = t.number_of_errors * (1e3 + 1e3 * Math.floor(11 * Math.random())),
              i > 6e4 && (i = 6e4),
              t.timeout = i,
              t.scheduleSync(i, null , o = !0),
              e && e.onError ? e.onError(n) : void 0
          }
        }(this)),
        f = 0,
        _ = u.length; f < _; f++)
          i = u[f],
          this._setRealIds(i);
        return a.sendReq({
          resource_types: $serialize(["all"]),
          commands: $serialize(this._queueWithoutErrorMeta(u)),
          day_orders_timestamp: this._getDayOrdersTimestamp(),
          collaborators_timestamp: this._getCollaboratorsTimestamp(),
          sync_token: s.sync_token || "*",
          with_web_static_version: !0,
          limit_notes: 1,
          max_notes: this.max_notes,
          with_dateist_version: 1
        })
      }
      ,
      e.prototype.setUpdateTimeout = function(e, t) {
        var n;
        return null == e && (e = 500),
        null == t && (t = null ),
        this._update_timeout && clearTimeout(this._update_timeout),
        n = function(e) {
          return function() {
            return e.sync(t)
          }
        }(this),
        this._update_timeout = setTimeout(n, e)
      }
      ,
      e.prototype._setSyncingState = function(e) {
        return this.sync_state = e,
        o.sendSignal("sync_state_changed")
      }
      ,
      e.prototype._setGlobalError = function(e) {
        return this.global_error = e,
        o.sendSignal("sync_state_changed")
      }
      ,
      e.prototype._setRealIds = function(e) {
        var t, n, r, o, i, s;
        t = c.getRealId,
        e.temp_id && (e.temp_id = t(e.temp_id)),
        i = e.args,
        s = [];
        for (r in i)
          switch (o = i[r],
          r) {
          case "id":
            s.push(e.args.id = t(e.args.id));
            break;
          case "ids":
            s.push(e.args.ids = function() {
              var r, o, i, s;
              for (i = e.args.ids,
              s = [],
              r = 0,
              o = i.length; r < o; r++)
                n = i[r],
                s.push(t(n));
              return s
            }());
            break;
          case "project_id":
            s.push(e.project_id = t(e.project_id));
            break;
          default:
            s.push(void 0)
          }
        return s
      }
      ,
      e.prototype._getDayOrdersTimestamp = function() {
        return r("DayOrdersTimestamp").get() || ""
      }
      ,
      e.prototype._getCollaboratorsTimestamp = function() {
        return r("CollaboratorsTimestamp").get() || ""
      }
      ,
      e.prototype._processSyncQueue = function(e, t) {
        var n, r, o, i, s, a, c, d, l;
        if (o = [],
        i = t.sync_status)
          for (s = 0,
          c = e.length; s < c; s++)
            if (n = e[s],
            r = i[n.uuid],
            r && r.error_tag) {
              if ("ALREADY_PROCESSED" === r.error_tag)
                continue;n.last_error || (n.last_error = r),
              n.retry_count ? n.retry_count++ : n.retry_count = 1,
              n.retry_count < 100 && o.push(n)
            }
        for (this.sync_queue.deleteItems(e),
        l = [],
        a = 0,
        d = o.length; a < d; a++)
          n = o[a],
          l.push(this.sync_queue.add(n));
        return l
      }
      ,
      e.prototype._queueWithoutErrorMeta = function(e) {
        var t, n, r, o, i;
        for (r = [],
        o = 0,
        i = e.length; o < i; o++)
          t = e[o],
          n = $update({}, t),
          n.last_error && delete n.last_error,
          r.push(n);
        return r
      }
      ,
      e
    }(),
    window.SyncEngine = new i,
    t.exports = window.SyncEngine
  }
  , {
    "./.coffee.Storage.js": 165,
    "./.coffee.SyncEngineExt.js": 168,
    "./.coffee.SyncQueue.js": 169,
    "./.coffee.TemporaryIds.js": 170,
    "./.coffee.UtilModels.js": 172,
    "./.coffee.VersionUpdater.js": 173
  }],
  168: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    i = function() {
      function e() {
        this.loadCachedData = s(this.loadCachedData, this),
        this.syncCachedData = s(this.syncCachedData, this),
        this.syncData = s(this.syncData, this),
        o.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this)),
        o.connect("clear_local_data", function(e) {
          return function() {
            return r("TimestampS2").remove(),
            e.sync_token = "*"
          }
        }(this))
      }
      return e.prototype.isInitialSync = function() {
        return null === r("TimestampS2").get()
      }
      ,
      e.prototype.syncData = function(e) {
        if (e.sync_token)
          return this.sync_token = e.sync_token,
          this.syncCachedData()
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("TimestampS2").set(this.sync_token)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e;
        return e = r("TimestampS2").get(),
        e ? this.sync_token = e : this.sync_token = "*"
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "./.coffee.Storage.js": 165
  }],
  169: [function(e, t, n) {
    var r, o, i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    r = e("./.coffee.Storage.js").$storage,
    o = function() {
      function e() {
        this.clear = i(this.clear, this),
        this.deleteItems = i(this.deleteItems, this),
        this.save = i(this.save, this),
        this.assignUnqiueIds = i(this.assignUnqiueIds, this),
        this.add = i(this.add, this),
        this.get = i(this.get, this),
        this.get() || this.clear()
      }
      return e.prototype.get = function() {
        return r("Queue").get()
      }
      ,
      e.prototype.add = function(e) {
        var t;
        return t = this.get(),
        e.uuid || (e.uuid = this.guid()),
        t.push(e),
        this.save(t)
      }
      ,
      e.prototype.assignUnqiueIds = function(e) {
        var t, n, r, o;
        for (n = !1,
        r = 0,
        o = e.length; r < o; r++)
          t = e[r],
          t.uuid || (t.uuid = this.guid(),
          n = !0);
        if (n)
          return this.save(e)
      }
      ,
      e.prototype.save = function(e) {
        return r("Queue").set(e)
      }
      ,
      e.prototype.deleteItems = function(e) {
        var t, n, r, o, i;
        for (t = this.get(),
        o = 0,
        i = e.length; o < i; o++)
          r = e[o],
          n = function(e) {
            return e.uuid === r.uuid
          }
          ,
          $arrayRemove(t, r, n);
        return this.save(t)
      }
      ,
      e.prototype.clear = function() {
        return r("Queue").set([])
      }
      ,
      e.prototype.guid = function() {
        var e;
        return e = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        ,
        e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
      }
      ,
      e
    }(),
    t.exports = o
  }
  , {
    "./.coffee.Storage.js": 165
  }],
  170: [function(e, t, n) {
    var r, o, i, s = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Signals,
    r = e("./.coffee.Storage.js").$storage,
    i = function() {
      function e() {
        this.loadCachedData = s(this.loadCachedData, this),
        this.syncCachedData = s(this.syncCachedData, this),
        this.waitToResolve = s(this.waitToResolve, this),
        this.listenAll = s(this.listenAll, this),
        this.clearOld = s(this.clearOld, this),
        this.setRealIds = s(this.setRealIds, this),
        this.getRealIds = s(this.getRealIds, this),
        this.getRealId = s(this.getRealId, this),
        this.generate = s(this.generate, this),
        this.temp_counter = (new Date).getTime(),
        o.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData()
          }
        }(this))
      }
      return e.prototype.listeners_all = [],
      e.prototype.generate = function(e) {
        var t;
        return t = "_" + this.temp_counter++,
        this.cur_temp_ids[t] = e,
        this.syncCachedData(),
        t
      }
      ,
      e.prototype.isTemporary = function(e) {
        if ($isString(e)) {
          if (0 === e.indexOf("_"))
            return !0;
          if (0 === e.indexOf("$"))
            return !0
        }
        return !1
      }
      ,
      e.prototype.getRealId = function(e) {
        var t;
        return t = this.real_id_mapping[e],
        t && t || e
      }
      ,
      e.prototype.getRealIds = function(e) {
        var t, n, r, o;
        for (t = [],
        r = 0,
        o = e.length; r < o; r++)
          n = e[r],
          t.push(this.real_id_mapping[n] || n);
        return t
      }
      ,
      e.prototype.setRealIds = function(e) {
        var t, n, r, i, s, a, c, d;
        for (i in e)
          r = e[i],
          this.real_id_mapping[i] = r,
          this.real_id_list.push(i);
        for (i in e)
          if (r = e[i],
          s = this.cur_temp_ids[i],
          o.sendSignal("resolve_temp." + s, i, r),
          this.listeners_all.length > 0)
            for (d = this.listeners_all,
            a = 0,
            c = d.length; a < c; a++)
              (t = d[a])(i, r);
        for (; this.real_id_list.length > 250; )
          n = this.real_id_list.shift(),
          this.real_id_mapping[n] && delete this.real_id_mapping[n];
        return this.syncCachedData()
      }
      ,
      e.prototype.clearOld = function() {
        return this.cur_temp_ids = {},
        this.syncCachedData()
      }
      ,
      e.prototype.listenAll = function(e) {
        return this.listeners_all.push(e)
      }
      ,
      e.prototype.waitToResolve = function(e, t) {
        var n;
        return n = this.getRealId(e),
        this.isTemporary(n) ? setTimeout($p(this.waitForResolve, e, t), 500) : t(n),
        !1
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("RealIdMapping").set(this.real_id_mapping),
        r("RealIdList").set(this.real_id_list),
        r("CurTempIds").set(this.cur_temp_ids)
      }
      ,
      e.prototype.loadCachedData = function() {
        var e, t, n;
        return n = r("RealIdMapping").get(),
        n ? this.real_id_mapping = n : this.real_id_mapping = {},
        t = r("RealIdList").get(),
        t ? this.real_id_list = t : this.real_id_list = [],
        e = r("CurTempIds").get(),
        e ? this.cur_temp_ids = e : this.cur_temp_ids = {}
      }
      ,
      e
    }(),
    t.exports = new i
  }
  , {
    "./.coffee.Storage.js": 165
  }],
  171: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    s = window.Signals,
    o = window.DateistDateHelpers,
    a = e("../components/misc/Misc.js").isAsianLang,
    r = e("./.coffee.Storage.js").$storage,
    i = function() {
      function e() {
        this.updateUserSettings = c(this.updateUserSettings, this),
        this.update = c(this.update, this),
        this.hasFreeTrial = c(this.hasFreeTrial, this),
        s.connect("load_cached_data", function(e) {
          return function() {
            return e.loadCachedData(),
            e.updateUserSettings(window.User)
          }
        }(this)),
        s.connect("model_item_completed", function() {
          return window.User.completed_today++,
          window.User.completed_count++
        }),
        s.connect("model_item_uncompleted", function() {
          return window.User.completed_today--,
          window.User.completed_count--
        })
      }
      return e.prototype.hasFreeTrial = function() {
        return !1
      }
      ,
      e.prototype.update = function(e) {
        var t, n;
        return t = $update({}, window.User),
        n = window.User = window.User || {},
        $update(n, e),
        n.team_inbox = e.team_inbox,
        e.karma_disabled || (n.karma_disabled = !1),
        e.karma_vacation || (n.karma_vacation = !1),
        this.updateUserSettings(n),
        s.sendSignal("user_updated", n, t),
        this.syncCachedData()
      }
      ,
      e.prototype.updateUserSettings = function(e) {
        if (e || (e = {}),
        window.Settings = {
          AMPM: 1 === e.time_format,
          US_DATES: 1 === e.date_format,
          START_PAGE: e.start_page,
          START_DAY: e.start_day || 1,
          NEXT_WEEK: e.next_week || 1
        },
        a())
          return window.Settings.US_DATES = !0
      }
      ,
      e.prototype.loadCachedData = function() {
        return window.User = r("User").get()
      }
      ,
      e.prototype.syncCachedData = function() {
        return r("User").set(window.User)
      }
      ,
      e
    }(),
    window.UserModel = new i,
    t.exports = window.UserModel
  }
  , {
    "../components/misc/Misc.js": 64,
    "./.coffee.Storage.js": 165
  }],
  172: [function(e, t, n) {
    var r, o, i, s, a, c = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }
    ;
    o = window.Dateist,
    i = window.DateistDateHelpers,
    r = window.DateUtils,
    a = window.Signals,
    s = function() {
      function e() {
        this.normalizeIndent = c(this.normalizeIndent, this),
        this.checkIfErrorIsLogout = c(this.checkIfErrorIsLogout, this),
        this.gSortByGeneric = c(this.gSortByGeneric, this),
        this.daySort = c(this.daySort, this),
        this.sortByDate = $p(this.gSortByGeneric, "time"),
        this.sortByPriority = $p(this.gSortByGeneric, "priority"),
        this.sortByResponsible = $p(this.gSortByGeneric, "assigned_by_uid")
      }
      return e.prototype.DepItemsModel = null ,
      e.prototype.DepSyncEngine = null ,
      e.prototype.getChildren = function(e, t, n) {
        var r, o, i, s, a, c;
        if (null == n && (n = !1),
        r = [],
        n && r.push(t),
        o = $index(t, e, function(e) {
          return e.id === t.id
        }),
        o !== -1)
          for (s = e.slice(o + 1, +e.length + 1 || 9e9),
          a = 0,
          c = s.length; a < c && (i = s[a],
          !(i.indent <= t.indent)); a++)
            r.push(i);
        return r
      }
      ,
      e.prototype.getParent = function(e, t) {
        var n, r, o, i, s, a, c;
        for (r = [],
        i = 0,
        a = e.length; i < a && (n = e[i],
        n.id !== t.id); i++)
          r.push(n);
        for (r.reverse(),
        s = 0,
        c = r.length; s < c; s++)
          if (o = r[s],
          o.indent < t.indent)
            return o;
        return null
      }
      ,
      e.prototype.daySort = function(e, t) {
        return e.priority > t.priority ? -1 : e.priority < t.priority ? 1 : e.day_order !== -1 && t.day_order !== -1 ? this.gSortByGeneric("day_order", t, e) : e.project_id !== t.project_id ? this.gSortByGeneric("project_id", t, e) : this.sortByItemOrder(e, t)
      }
      ,
      e.prototype.sortByItemOrder = function(e, t) {
        return e.item_order < t.item_order ? -1 : e.item_order === t.item_order ? 0 : 1
      }
      ,
      e.prototype.gSortByGeneric = function(e, t, n) {
        var r, o;
        return t[e] && n[e] ? (r = t[e],
        o = n[e],
        r === o ? this.sortByItemOrder(t, n) : r > o ? -1 : 1) : 1
      }
      ,
      e.prototype.isBulletItem = function(e) {
        return e && 0 === e.indexOf("* ")
      }
      ,
      e.prototype.syncLocalModel = function(e, t) {
        var n, r, o, i, s, a, c, d, l, u, h, f;
        for (c = 0,
        l = e.length; c < l; c++)
          s = e[c],
          s && (r = t[s.id],
          r ? $update(r, s) : r = s,
          t[s.id] = r);
        if (i = !0,
        this.DepSyncEngine.queueIncludesErrors() && (i = !1),
        i) {
          for (n = this.DepItemsModel.model_data,
          h = $keys(t),
          f = [],
          d = 0,
          u = h.length; d < u; d++)
            o = h[d],
            r = t[o],
            a = !1,
            o.indexOf && o.indexOf("_") !== -1 && (a = !0),
            r.is_deleted && (a = !0),
            a ? f.push(delete t[o]) : f.push(void 0);
          return f
        }
      }
      ,
      e.prototype.checkIfErrorIsLogout = function(e, t) {
        var n;
        if (n = !1,
        e.indexOf("Not logged in") !== -1 && (n = !0),
        e.indexOf("Token not correct") !== -1 && (n = !0),
        e.indexOf("403 Forbidden") !== -1 && (n = !0),
        t && 403 === t.status && (n = !0),
        n && !window.ACCOUNT_DELETED)
          return alert(_("It seems like our session has expired. Please re-login."), function() {
            return a.sendSignal("logout")
          }),
          !0
      }
      ,
      e.prototype.getNewDate = function(e, t) {
        var n, s, a, c, d, l, u, h, f;
        if (null == t && (t = !1),
        f = new Date,
        n = e.due_date,
        l = o.is_recurring(e.date_string, {
          lang: e.date_lang
        }),
        d = i.is_overdue(f, n),
        n && l) {
          if (s = r.parse(e.date_string, e),
          s.end_reached)
            throw "END_REACHED";
          if (s.error || !s.due_date)
            throw "INVALID_DATE";
          h = s.due_date
        } else
          n && !d ? (h = new Date(e.due_date.getTime()),
          h.setDate(h.getDate() + 1)) : (h = o.parse("tomorrow").due_date,
          e.due_date && (h = i.inherit_date(h, e.due_date)));
        return u = r.jsonFormat(h),
        c = "",
        t && (a = i.day_diff(new Date, h),
        c = r.humanizeDayDiff(a, h)),
        [h, u, c, l]
      }
      ,
      e.prototype.normalizeIndent = function(e, t) {
        if (e.indent >= t && (e.indent = t),
        e.indent < 1)
          return e.indent = 1
      }
      ,
      e
    }(),
    window.UtilModels = t.exports = new s
  }
  , {}],
  173: [function(e, t, n) {
    var r;
    r = window.Signals,
    window.SERVER_VERSION = 0,
    n.check = function(e) {
      var t, n, o;
      return n = $queryArgument("v"),
      window.SERVER_VERSION = e.web_static_version,
      o = window.User,
      o && (t = o.features.beta || o.beta,
      10 === t && "beta.todoist.com" !== window.location.host && (window.SERVER_VERSION = e.web_static_version + "beta")),
      n && window.SERVER_VERSION && (n = parseFloat(n),
      n !== window.SERVER_VERSION && r.sendSignal("new_version_available", window.SERVER_VERSION)),
      !0
    }
    ,
    n.update = function() {
      var e;
      try {
        window.applicationCache && window.applicationCache.update()
      } catch (e) {}
      return window.SERVER_VERSION.toString().indexOf("beta") !== -1 ? (e = window.location.toString().replace(window.location.host, "beta.todoist.com"),
      e = e.replace(/v=[^;&]+/, "v="),
      window.location = e) : window.location = window.location.href.replace(/v=\d+/, "v=" + window.SERVER_VERSION),
      !1
    }
  }
  , {}],
  174: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e, t) {
      var n = e instanceof Array;
      e = n ? e : [e];
      for (var r = $requestJSON("https://ai.todoist.com/predict_date", "POST"), o = e.map(l), s = new Map, a = o.entries(), u = Array.isArray(a), h = 0, a = u ? a : a[Symbol.iterator](); ; ) {
        var f;
        if (u) {
          if (h >= a.length)
            break;
          f = a[h++]
        } else {
          if (h = a.next(),
          h.done)
            break;
          f = h.value
        }
        var _ = f
          , p = _[0]
          , m = _[1];
        m.item_id || (m.item_id = -1 * (p + 1)),
        s.set(m.item_id, p)
      }
      var y = d(new Date)
        , w = {
        access_token: g,
        user_id: window.User.id,
        items: o,
        weekly_items: i(),
        user_time: y
      };
      r.addCallback(function(r) {
        r.predictions.sort(function(e, t) {
          return s.get(e.item_id) - s.get(t.item_id)
        });
        for (var o = r.predictions.map(function(e) {
          return c(e.due_date)
        }), i = new Date, a = e.entries(), d = Array.isArray(a), l = 0, a = d ? a : a[Symbol.iterator](); ; ) {
          var u;
          if (d) {
            if (l >= a.length)
              break;
            u = a[l++]
          } else {
            if (l = a.next(),
            l.done)
              break;
            u = l.value
          }
          var h = u
            , f = h[0]
            , _ = h[1]
            , p = DateistDateHelpers.is_overdue(i, _.due_date);
          if (!p && Dateist.is_recurring(_.date_string, {
            lang: _.date_lang
          })) {
            var m = DateUtils.parse(_.date_string, _);
            m.due_date && (o[f] = m.due_date)
          }
        }
        n ? t(o, null ) : t(o[0], null )
      }),
      r.addErrback(function(e, n) {
        t(null , new Error(e))
      }),
      r.sendReq($serialize(w), !0, "application/json")
    }
    function i() {
      var e = h.filter("7 days")
        , t = e.map(function(e) {
        return e.items
      }).reduce(function(e, t) {
        return e.concat(t)
      }, []).map(l);
      return t
    }
    function s(e) {
      return e < 10 ? "0" + e : e
    }
    function a(e) {
      return e.getFullYear() + "-" + s(e.getMonth() + 1) + "-" + s(e.getDate())
    }
    function c(e) {
      var t = y.exec(e);
      if (!t)
        return console.log("Date parsing error " + e),
        new Date;
      try {
        var n = parseInt(t[1])
          , r = parseInt(t[2]) - 1
          , o = parseInt(t[3]);
        return new Date(n,r,o)
      } catch (t) {
        return console.log("Date parsing error " + e, t),
        new Date
      }
    }
    function d(e) {
      var t = e.getFullYear()
        , n = s(e.getMonth() + 1)
        , r = s(e.getDate())
        , o = s(e.getHours())
        , i = s(e.getMinutes())
        , a = s(e.getSeconds())
        , c = e.getTimezoneOffset()
        , d = s(Math.abs(Math.floor(c / 60)))
        , l = s(Math.abs(c % 60))
        , u = c > 0 ? "-" : "+"
        , h = "" + u + d + ":" + l;
      return t + "-" + n + "-" + r + "T" + o + ":" + i + ":" + a + h
    }
    function l(e) {
      var t = null ;
      if (e.due_date) {
        var n = 59 === e.due_date.getSeconds();
        t = n ? a(e.due_date) : d(e.due_date)
      }
      var r = e.date_added ? new Date(e.date_added) : new Date
        , o = d(r)
        , i = _.get(e.project_id).name
        , s = e.labels.map(function(e) {
        var t = m.getById(e);
        return t ? t.name : null
      }).filter(function(e) {
        return e
      });
      return {
        item_id: e.id ? e.id : null ,
        content: e.content,
        due_date: t,
        date_added: o,
        postpone_count: 0,
        priority: e.priority,
        label_names: s,
        project_name: i
      }
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.predictItemDuedate = o,
    n.isoDateStr = a,
    n.isoDateStrToDate = c;
    var u = e("../components/filterist/.es6.engine.js")
      , h = r(u)
      , f = e("./.coffee.ProjectsModel.js")
      , _ = r(f)
      , p = e("./.coffee.LabelsModel.js")
      , m = r(p)
      , g = "123321"
      , y = /\s*(\d\d\d\d)-(\d\d)-(\d\d)\s*/i
  }
  , {
    "../components/filterist/.es6.engine.js": 28,
    "./.coffee.LabelsModel.js": 154,
    "./.coffee.ProjectsModel.js": 159
  }],
  175: [function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
      , c = e("react")
      , d = r(c)
      , l = function(e) {
      function t(n) {
        return o(this, t),
        i(this, e.call(this, n))
      }
      return s(t, e),
      t.prototype.render = function() {
        return d.default.createElement("img", a({}, this.props, {
          width: this.props.width,
          height: this.props.height,
          className: this.props.className,
          src: "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif"
        }))
      }
      ,
      t
    }(d.default.Component);
    n.default = l
  }
  , {
    react: "react"
  }],
  176: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = e("react")
      , i = r(o)
      , s = e("react-dom")
      , a = (r(s),
    i.createClass({
      displayName: "ResourcePreloader",
      render: function() {
        return i.createElement("div", {
          className: "ResourcePreloader"
        }, i.createElement("img", {
          src: "static/images/offline_warning.png",
          alt: ""
        }), i.createElement("img", {
          src: "static/images/dali_clock.jpg"
        }))
      }
    }));
    n.default = a
  }
  , {
    react: "react",
    "react-dom": "react-dom"
  }],
  177: [function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function o(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function i(e, t) {
      if (!M.hasSeen(M.FNAME_SMART_SCHEDULE)) {
        var n = function() {
          x.markAsSeen(M.FNAME_SMART_SCHEDULE)
        }
          , r = function() {
          x.markAsSeen(M.FNAME_SMART_SCHEDULE),
          i(e, t)
        }
        ;
        return void U.show(r, n)
      }
      if (L.isOffline()) {
        var o = function() {
          i(e, t)
        }
        ;
        return void V.show(o)
      }
      var s = DIV()
        , c = GB_showHTML(_("Suggested dates"), s, 500, 600, {
        close_validator_fn: function() {
          return u.unmountComponentAtNode(s),
          !0
        }
      })
        , d = function() {
        t && t.onSubmitted && t.onSubmitted(),
        c.hide()
      }
      ;
      u.render(a.createElement(q, {
        items: e,
        onUpdateSubmit: d,
        onCancel: function() {
          return c.hide()
        }
      }), s)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.openSmartSchedule = i;
    var s = e("react")
      , a = o(s)
      , c = e("react-addons-css-transition-group")
      , d = r(c)
      , l = e("react-dom")
      , u = o(l)
      , h = e("../components/project_list/.coffee.ProjectColors.js")
      , f = o(h)
      , p = e("../models/.coffee.ProjectsModel.js")
      , m = o(p)
      , g = e("../models/.coffee.QueriesItems.js")
      , y = r(g)
      , w = e("../models/.es6.SmartSchedule")
      , v = o(w)
      , j = e("./.es6.ImageSprite.js")
      , b = r(j)
      , I = e("./chart/.es6.ItemBarChart.js")
      , $ = r(I)
      , A = e("../components/minical_ext/.coffee.MiniCalExt.js")
      , S = r(A)
      , C = e("../components/formatter/Formatter.js")
      , T = r(C)
      , k = e("../actions/.es6.ItemActions.js")
      , D = o(k)
      , E = e("../actions/.es6.FeatureTipActions.js")
      , x = o(E)
      , P = e("../stores/.es6.FeatureTipStore.js")
      , M = o(P)
      , N = e("../stores/.es6.SystemStatusStore.js")
      , L = o(N)
      , R = e("./.es6.SmartScheduleTip.js")
      , U = o(R)
      , O = e("./.es6.SmartScheduleOffline.js")
      , V = o(O)
      , B = e("../dispatcher/Dispatcher")
      , H = (o(B),
    a.PropTypes)
      , F = a.createClass({
      displayName: "DaySectionListItem",
      propTypes: {
        item: H.object.isRequired,
        rescheduleFn: H.func.isRequired,
        removeFn: H.func.isRequired
      },
      componentDidMount: function() {
        AmiTooltip.showSimpleText(this.rescheduleBtnDom, _("Re-schedule")),
        AmiTooltip.showSimpleText(this.removeBtnDom, _("Remove task from Smart Scheduling"))
      },
      componentWillUnmount: function() {
        AmiTooltip.hide()
      },
      recheduleClicked: function() {
        var e = this;
        AmiTooltip.hide();
        var t = function(t) {
          e.props.rescheduleFn(e.props.item, t)
        }
        ;
        this.listItemDom.classList.add("on_rescheduling"),
        MiniCal.offset_x = -18,
        MiniCal.offset_y = 0,
        MiniCal.arrow_left = !1,
        MiniCal.with_arrow_top = !0,
        S.default.create(this.rescheduleBtnDom, t, {
          with_today: !0,
          with_tomorrow: !0,
          with_postpone: !0,
          with_next_week: !0,
          with_month: !0,
          with_no_date: !0,
          items: [this.props.item],
          on_removed: function() {
            e.listItemDom && e.listItemDom.classList.remove("on_rescheduling")
          }
        })
      },
      removeClicked: function() {
        this.props.removeFn(this.props.item),
        AmiTooltip.hide()
      },
      render: function() {
        var e = this
          , t = this.props.item
          , n = m.get(t.project_id)
          , r = {
          backgroundColor: f.getHexCode(n)
        }
          , o = T.default.format(t.content)
          , i = T.default.format(n.name)
          , s = null ;
        if (this.props.item.due_date) {
          var c = _("Current: {item_due_date}").replace("{item_due_date}", DateUtils.formatView(this.props.item.due_date, !1));
          s = a.createElement("span", {
            className: "current_due"
          }, c)
        }
        return a.createElement("li", {
          ref: function(t) {
            return e.listItemDom = t
          }
        }, a.createElement("div", {
          className: "task_content"
        }, a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: o
          }
        }), s), a.createElement("div", {
          className: "project_label"
        }, a.createElement("span", {
          className: "project_label_name",
          dangerouslySetInnerHTML: {
            __html: i
          }
        }), a.createElement("span", {
          className: "project_label_color",
          style: r
        })), a.createElement("div", {
          className: "control"
        }, a.createElement("span", {
          ref: function(t) {
            return e.rescheduleBtnDom = t
          },
          onClick: this.recheduleClicked
        }, a.createElement(b.default, {
          className: "cmp_quick_sch_calendar"
        })), a.createElement("span", {
          ref: function(t) {
            return e.removeBtnDom = t
          },
          onClick: this.removeClicked
        }, a.createElement(b.default, {
          className: "cmp_quick_sch_cross_thunder"
        }))))
      }
    })
      , G = a.createClass({
      displayName: "DaySection",
      propTypes: {
        items: H.array.isRequired,
        newDueDate: H.instanceOf(Date),
        rescheduleFn: H.func.isRequired,
        removeFn: H.func.isRequired
      },
      render: function() {
        var e = this
          , t = void 0
          , n = void 0
          , r = void 0
          , o = void 0;
        if (this.props.newDueDate) {
          var i = new Date
            , s = DateistDateHelpers.day_diff(i, this.props.newDueDate);
          switch (s) {
          case 0:
            t = _("Today"),
            n = DateUtils.formatView(this.props.newDueDate, !0);
            break;
          case 1:
            t = _("Tomorrow"),
            n = DateUtils.formatView(this.props.newDueDate, !0);
            break;
          default:
            t = DateUtils.getWeekDay(this.props.newDueDate.getDay()),
            n = DateUtils.formatView(this.props.newDueDate, !1)
          }
          r = y.default.getByDate(this.props.newDueDate, ItemsModel.getAllOwn()),
          o = r.length > 0 ? a.createElement($.default, {
            items: r,
            withTooltip: !0,
            className: "day_section__item_bar"
          }) : null
        } else
          t = _("No due date");
        return a.createElement("div", {
          className: "day_section"
        }, a.createElement("h2", null , t, a.createElement("small", null , n), o), a.createElement("ul", null , a.createElement(d.default, {
          transitionName: "list_item",
          transitionEnterTimeout: 300,
          transitionLeave: !1
        }, this.props.items.map(function(t) {
          return a.createElement(F, {
            key: t.id,
            item: t,
            rescheduleFn: e.props.rescheduleFn,
            removeFn: e.props.removeFn
          })
        }))))
      }
    })
      , q = a.createClass({
      displayName: "SmartSchedule",
      propTypes: {
        items: H.array.isRequired,
        onUpdateSubmit: H.func,
        onCancel: H.func
      },
      getInitialState: function() {
        return {
          items: this.props.items,
          newDueDates: null ,
          error: null
        }
      },
      componentDidMount: function() {
        var e = this;
        v.predictItemDuedate(this.state.items, function(t, n) {
          if (e.isMounted()) {
            if (console.log("modal result", t),
            n)
              return e.setState({
                error: n
              }),
              void console.log("SmartSchedule error: ", n);
            e.setState({
              newDueDates: t
            })
          }
        })
      },
      reschedule: function(e, t) {
        var n = this.state.items.indexOf(e)
          , r = Array.from(this.state.newDueDates);
        r[n] = t,
        this.setState({
          newDueDates: r
        })
      },
      removeFromSmartSchedule: function(e) {
        var t = this.state.items.indexOf(e)
          , n = Array.from(this.state.items)
          , r = Array.from(this.state.newDueDates);
        n.splice(t, 1),
        r.splice(t, 1),
        0 == n.length && this.props.onCancel && this.props.onCancel(),
        this.setState({
          items: n,
          newDueDates: r
        })
      },
      submitSuggestion: function() {
        D.updateDate(this.state.items, this.state.newDueDates, D.ORIGIN_SMART_SCHEDULE),
        this.props.onUpdateSubmit()
      },
      render: function() {
        var e = this;
        if (this.state.error)
          return a.createElement("div", {
            className: "SmartSchedule"
          }, a.createElement("div", {
            className: "error_display"
          }, a.createElement("img", {
            src: "static/images/dali_clock.jpg"
          }), a.createElement("p", null , "Opps...Something went wrong with our service. Please try again later.")));
        if (!this.state.newDueDates)
          return a.createElement("div", {
            className: "SmartSchedule"
          }, a.createElement("div", {
            className: "smart_schedule_loader"
          }, a.createElement("img", {
            src: "static/images/spin_loader.gif"
          })));
        for (var t = [], n = this.state.newDueDates.entries(), r = Array.isArray(n), o = 0, n = r ? n : n[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (o >= n.length)
              break;
            i = n[o++]
          } else {
            if (o = n.next(),
            o.done)
              break;
            i = o.value
          }
          var s = i
            , c = s[0]
            , l = s[1];
          l || t.push(this.state.items[c])
        }
        var u = void 0;
        t.length > 0 && (u = a.createElement(G, {
          key: "",
          items: t,
          newDueDate: null ,
          rescheduleFn: this.reschedule,
          removeFn: this.removeFromSmartSchedule
        }));
        for (var h = new Map, f = this.state.newDueDates.entries(), p = Array.isArray(f), m = 0, f = p ? f : f[Symbol.iterator](); ; ) {
          var g;
          if (p) {
            if (m >= f.length)
              break;
            g = f[m++]
          } else {
            if (m = f.next(),
            m.done)
              break;
            g = m.value
          }
          var y = g
            , c = y[0]
            , l = y[1];
          if (l) {
            var w = this.state.items[c]
              , j = v.isoDateStr(l);
            h.has(j) ? h.get(j).push(w) : h.set(j, [w])
          }
        }
        var b = Array.from(h).sort().map(function(t) {
          var n = t[0]
            , r = t[1]
            , o = v.isoDateStrToDate(n);
          return o.setHours(23),
          o.setMinutes(59),
          o.setSeconds(59),
          a.createElement(G, {
            key: n,
            items: r,
            newDueDate: o,
            rescheduleFn: e.reschedule,
            removeFn: e.removeFromSmartSchedule
          })
        });
        return a.createElement("div", {
          className: "SmartSchedule"
        }, a.createElement("div", {
          className: "day_sections_holder"
        }, a.createElement(d.default, {
          transitionName: "section_transition",
          transitionEnterTimeout: 500,
          transitionLeave: !1
        }, a.createElement("div", {
          className: "desc"
        }, _("Smart Schedule is an AI that helps you schedule tasks."), a.createElement("a", {
          href: "https://todoist.com/smartSchedule",
          target: "_blank"
        }, _("Learn more"))), u, b)), a.createElement("div", {
          className: "action_holder"
        }, a.createElement("a", {
          onClick: this.props.onCancel,
          className: "cancel_btn"
        }, _("Cancel")), a.createElement("a", {
          onClick: this.submitSuggestion,
          className: "amibutton amibutton_red submit_btn"
        }, _("Update"))))
      }
    })
  }
  , {
    "../actions/.es6.FeatureTipActions.js": 3,
    "../actions/.es6.ItemActions.js": 4,
    "../components/formatter/Formatter.js": 38,
    "../components/minical_ext/.coffee.MiniCalExt.js": 63,
    "../components/project_list/.coffee.ProjectColors.js": 85,
    "../dispatcher/Dispatcher": 118,
    "../models/.coffee.ProjectsModel.js": 159,
    "../models/.coffee.QueriesItems.js": 161,
    "../models/.es6.SmartSchedule": 174,
    "../stores/.es6.FeatureTipStore.js": 183,
    "../stores/.es6.SystemStatusStore.js": 184,
    "./.es6.ImageSprite.js": 175,
    "./.es6.SmartScheduleOffline.js": 178,
    "./.es6.SmartScheduleTip.js": 179,
    "./chart/.es6.ItemBarChart.js": 181,
    react: "react",
    "react-addons-css-transition-group": "react-addons-css-transition-group",
    "react-dom": "react-dom"
  }],
  178: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      var t = DIV()
        , n = GB_showHTML(_("Smart Schedule"), t, 500, 500, {
        close_validator_fn: function() {
          return c.unmountComponentAtNode(t),
          !0
        }
      })
        , r = function(t) {
        n.hide(),
        e && e(),
        t.preventDefault()
      }
      ;
      c.render(s.createElement(d, {
        onTryClick: r
      }), t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.show = o;
    var i = e("react")
      , s = r(i)
      , a = e("react-dom")
      , c = r(a)
      , d = s.createClass({
      displayName: "SmartScheduleOffline",
      propTypes: {
        onTryClick: s.PropTypes.func
      },
      render: function() {
        return s.createElement("div", {
          className: "smart_schedule_offline"
        }, s.createElement("div", {
          className: "banner_img_wrap"
        }, s.createElement("img", {
          src: "static/images/offline_warning.png",
          alt: ""
        })), s.createElement("h1", null , _("Smart Schedule requires an Internet connection")), s.createElement("p", null , _("Please check your connection and try again")), s.createElement("div", {
          className: "action_holder"
        }, s.createElement("a", {
          className: "amibutton amibutton_red try_btn",
          onClick: this.props.onTryClick
        }, _("Try Again"))))
      }
    })
  }
  , {
    react: "react",
    "react-dom": "react-dom"
  }],
  179: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e, t) {
      var n = DIV()
        , r = GB_showHTML(_("Smart Schedule"), n, 500, 500, {
        close_validator_fn: function() {
          return c.unmountComponentAtNode(n),
          t && t(),
          !0
        }
      })
        , o = function(t) {
        r.hide(),
        e && e(),
        t.preventDefault()
      }
      ;
      c.render(s.createElement(d, {
        onTryClick: o
      }), n)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.show = o;
    var i = e("react")
      , s = r(i)
      , a = e("react-dom")
      , c = r(a)
      , d = s.createClass({
      displayName: "SmartScheduleTip",
      propTypes: {
        onTryClick: s.PropTypes.func
      },
      render: function() {
        return s.createElement("div", {
          className: "smart_schedule_tip"
        }, s.createElement("div", {
          className: "banner_img_wrap"
        }, s.createElement("img", {
          src: "static/images/smart_schedule_illustration.png",
          alt: ""
        })), s.createElement("h1", null , _("Manage your workload faster than ever!")), s.createElement("p", null , _("The AI-powered Smart Schedule suggests the best due dates for your tasks based on:")), s.createElement("ul", null , s.createElement("li", null , _("Task urgency")), s.createElement("li", null , _("Your current task load")), s.createElement("li", null , _("Your productivity habits"))), s.createElement("p", null , _("And more...")), s.createElement("div", {
          className: "action_holder"
        }, s.createElement("a", {
          className: "more_link",
          href: "https://todoist.com/smartSchedule",
          target: "_blank"
        }, _("Learn more")), s.createElement("a", {
          className: "amibutton amibutton_red try_btn",
          onClick: this.props.onTryClick
        }, _("Try it"))))
      }
    })
  }
  , {
    react: "react",
    "react-dom": "react-dom"
  }],
  180: [function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function o(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = e("react")
      , s = o(i)
      , a = e("./.es6.ResourcePreloader.js")
      , c = r(a)
      , d = s.createClass({
      displayName: "TodoistApp",
      render: function() {
        return s.createElement("div", null , s.createElement(c.default, null ))
      }
    });
    n.default = d
  }
  , {
    "./.es6.ResourcePreloader.js": 176,
    react: "react"
  }],
  181: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = e("react")
      , s = o(i)
      , a = e("../../models/.coffee.ProjectsModel.js")
      , c = r(a)
      , d = e("../../components/project_list/.coffee.ProjectColors.js")
      , l = r(d)
      , u = s.default.createClass({
      displayName: "ItemBarChart",
      propTypes: {
        items: s.default.PropTypes.array.isRequired,
        withTooltip: s.default.PropTypes.bool
      },
      componentDidMount: function() {
        if (this.props.withTooltip) {
          var e = 1 == this.props.items.length ? _("1 task due") : _("%s tasks due").replace("%s", this.props.items.length);
          AmiTooltip.showSimpleText(this.ref, e)
        }
      },
      render: function() {
        var e = this
          , t = this.props.items.map(function(e) {
          var t = c.get(e.project_id);
          return l.getHexCode(t)
        }).sort()
          , n = t.map(function(t, n) {
          var r, o = (r = {
            backgroundColor: t,
            width: e.props.baseWidth,
            display: "inline-block"
          },
          r.width = 8,
          r.height = 11,
          r);
          return s.default.createElement("span", {
            key: n,
            className: "item-bar-chart-unit",
            style: o
          })
        })
          , r = "item-bar-chart";
        return this.props.className && (r += " " + this.props.className),
        s.default.createElement("div", {
          ref: function(t) {
            return e.ref = t
          },
          className: r
        }, n)
      }
    });
    n.default = u
  }
  , {
    "../../components/project_list/.coffee.ProjectColors.js": 85,
    "../../models/.coffee.ProjectsModel.js": 159,
    react: "react"
  }],
  182: [function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
      t
    }
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      v.addListener(w, e)
    }
    function s(e) {
      v.removeListener(w, e)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.addStateUpdateListener = i,
    n.removeStateUpdateListener = s;
    var a = e("events")
      , c = o(a)
      , d = e("../dispatcher/Dispatcher.js")
      , l = o(d)
      , u = e("../actions/.es6.ActionTypes.js")
      , h = r(u)
      , f = e("../actions/.es6.ItemActions.js")
      , _ = r(f)
      , p = e("../models/.coffee.ItemsModel.js")
      , m = r(p)
      , g = e("../components/agenda/Agenda.js")
      , y = (o(g),
    "overdue, 7 days")
      , w = "EVENT_STATE_UPDATE"
      , v = new c.default;
    l.default.register(function(e) {
      if (e.actionType == h.UPDATE_ITEMS_DATE) {
        l.default.waitFor([m.dispatchToken]);
        var t = {};
        e.origin === _.ORIGIN_SMART_SCHEDULE && (t.highlightedItemIds = e.items.map(function(e) {
          return e.id
        }),
        t.query = y),
        v.emit(w, t)
      }
      e.actionType == h.UNDO && (l.default.waitFor([m.dispatchToken]),
      v.emit(w, {}))
    })
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../actions/.es6.ItemActions.js": 4,
    "../components/agenda/Agenda.js": 19,
    "../dispatcher/Dispatcher.js": 118,
    "../models/.coffee.ItemsModel.js": 153,
    events: "events"
  }],
  183: [function(e, t, n) {
    "use strict";
    function r() {
      var e = a(u).get();
      if (e)
        h = e;
      else {
        var t = $requestJSON("/API/v6/tooltips/get_seen_list");
        t.addCallback(function(e) {
          e.result && e.result instanceof Array && (h = e.result)
        }),
        t.addErrback(function(e, t) {
          console.log("FeatureTipStore.load error", e, t)
        }),
        t.sendReq({
          token: window.User.token
        })
      }
    }
    function o(e) {
      return h == l || h.indexOf(e) != -1
    }
    function i(e) {
      if (h != l && !o()) {
        h.push(e),
        a(u).set(h);
        var t = $requestJSON("/API/v6/tooltips/mark_as_seen");
        t.addCallback(function(e) {
          !e.result
        }),
        t.addErrback(function(e, t) {}),
        t.sendReq({
          name: e,
          token: window.User.token
        })
      }
    }
    function s(e) {
      if (o(e)) {
        h = h.filter(function(t) {
          return t != e
        }),
        a(u).set(h);
        var t = $requestJSON("/API/v6/tooltips/reset_seen");
        t.addCallback(function(e) {
          !e.result
        }),
        t.addErrback(function(e, t) {}),
        t.sendReq({
          name: e,
          token: window.User.token
        })
      }
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.hasSeen = o;
    var a = e("../models/.coffee.Storage.js").$storage
      , c = e("../dispatcher/Dispatcher")
      , d = e("../actions/.es6.ActionTypes.js")
      , l = (n.FNAME_SMART_SCHEDULE = "smart_schedule",
    n.FNAME_SHARING = "sharing",
    "UNINITIALZIED")
      , u = "FeatureTipSeenList"
      , h = l;
    window && (window.resetSeen = s),
    c.register(function(e) {
      e.actionType == d.LOAD_CACHED_DATA && r(),
      e.actionType == d.FEATURE_TIP_MARK_AS_SEEN && i(e.featureName)
    })
  }
  , {
    "../actions/.es6.ActionTypes.js": 2,
    "../dispatcher/Dispatcher": 118,
    "../models/.coffee.Storage.js": 165
  }],
  184: [function(e, t, n) {
    "use strict";
    function r() {
      if (navigator.onLine) {
        var e = o.global_error || o.getQueueErrorLength() || !i.fetched_data_from_server;
        return e
      }
      return !0
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.isOffline = r;
    var o = e("../models/.coffee.SyncEngine.js")
      , i = e("../models/.coffee.LoadEngine.js")
  }
  , {
    "../models/.coffee.LoadEngine.js": 155,
    "../models/.coffee.SyncEngine.js": 167
  }],
  185: [function(e, t, n) {
    "use strict";
    function r(e, t) {
      e = e.trim().toLowerCase(),
      t = t.trim().toLowerCase();
      var n = t.split(" ").filter(function(e) {
        return "" !== e
      });
      if (n.length > 1)
        return 0 === e.indexOf(t);
      var r = e.split(" ").filter(function(e) {
        return "" !== e
      });
      return r.filter(function(e) {
        return 0 === e.indexOf(t)
      }).length > 0
    }
    function o(e, t) {
      for (var n = e, r = Object.keys(t), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var s;
        if (o) {
          if (i >= r.length)
            break;
          s = r[i++]
        } else {
          if (i = r.next(),
          i.done)
            break;
          s = i.value
        }
        var a = s
          , c = new RegExp("\\{\\s*" + a + "\\s*\\}","g")
          , d = t[a];
        n = n.replace(c, d)
      }
      return n
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
    n.isNamePartialMatched = r,
    n.format = o
  }
  , {}],
  186: [function(e, t, n) {
    var r;
    r = window.imageSprite,
    window.getKarmaImage = function(e) {
      var t;
      return t = SPAN({
        c: "" + getKarmaFontClass(e) + " karma-icon"
      })
    }
    ,
    window.getKarmaFontClass = function(e) {
      var t;
      return e.karma_vacation ? "icon-karmavacation" : (t = e.karma,
      t < 500 ? "icon-karmaprofile1" : t >= 500 && t < 2500 ? "icon-karmaprofile2" : t >= 2500 && t < 5e3 ? "icon-karmaprofile3" : t >= 5e3 && t < 7500 ? "icon-karmaprofile4" : t >= 7500 && t < 1e4 ? "icon-karmaprofile5" : t >= 1e4 && t < 2e4 ? "icon-karmaprofile6" : t >= 2e4 && t < 5e4 ? "icon-karmaprofile7" : "icon-karmaprofile8")
    }
  }
  , {}]
}, {}, [1]);
