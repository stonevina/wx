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

    router.get('/quiz/v1/api/util/import', ctrs.question.excelToDb);

    // router.post('/v1/api/questions', ctrs.question.add);
    // router.put('/v1/api/questions/:questionId', ctrs.question.update);
    // router.del('/v1/api/questions/:questionId', ctrs.question.del);
    // router.get('/v1/api/questions/:questionId', ctrs.question.showItemById);
    router.get('/quiz/v1/api/questions', ctrs.question.showRandomList);
    
    router.get('/quiz/v1/api/corrections/:userid', ctrs.correction.showList);
    router.post('/quiz/v1/api/corrections', ctrs.correction.add);

    router.get('/quiz/v1/api/scores', ctrs.score.showList);
    router.post('/quiz/v1/api/scores', ctrs.score.add);
}

module.exports = set;