/**
 * @description 得分页面，利于微信分享，做成独立页面，规避前端router问题
 * @author shijianguo
 * @time 2016.12.3 16:24
 */

'use strict';

var scoreView = require('../view/score_view.js');
this.scoreInstanceView = new scoreView();
this.scoreInstanceView.render();