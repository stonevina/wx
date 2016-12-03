/**
 * @file index.js
 * @desc router配置
 * @author shijianguo
 * @time 2016.12.1 14:37
 */
var router = require('koa-router')();
var ctrs = [];
function getC(app) {
    return new Promise(function (resovel, reject) {
        try {
            ctrs = require('../libs/ctrs.js').getCtrs();
            resovel(ctrs);
        }
        catch (e) {
            reject(e);
        }
    });
}

function set(app) {
    app.use(router.routes());
    getC(app).then(function (ctrs) {
        setMap(ctrs);
    }).catch(function (e) {
        console.log(e);
    });
}

function setMap(ctrs) {
    router.get('/quiz/', ctrs.index.redirect);
    router.get('/quiz/blank', ctrs.index.blank);
    router.get('/quiz/portal', ctrs.index.show);
    router.get('/quiz/score', ctrs.index.showScore);

    router.get('/quiz/v1/api/util/import', ctrs.question.excelToDb);

    router.get('/quiz/v1/api/questions/:userid', ctrs.question.showRandomList);
    
    router.get('/quiz/v1/api/corrections/:userid', ctrs.correction.showList);
    router.post('/quiz/v1/api/corrections', ctrs.correction.add);

    router.get('/quiz/v1/api/scores', ctrs.score.showRanks);
    router.post('/quiz/v1/api/scores', ctrs.score.add);
    router.get('/quiz/v1/api/scores/:userid', ctrs.score.getScore);

    //获取微信签名
    router.get('/quiz/v1/api/signature', ctrs.share.getSignature);
    //增加答题次数
    router.put('/quiz/v1/api/questions/add/:userid', ctrs.question.addCount);
    //查看是否还有答题机会
    router.get('/quiz/v1/api/questions/checkExamable/:userid', ctrs.question.checkExamable);
}

module.exports = set;