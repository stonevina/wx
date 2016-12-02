/**
 * @file gulpfile.js
 * @desc 自动化脚本
 * @author xiaoguang01
 * @date 2015/9/25
 */
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var fecs = require('fecs-gulp');
var fs = require('fs');
var opn = require('opn');
var gulpSequence = require('gulp-sequence');

var through = require('through2');
var browserify = require('./app/libs/browserify');
var shell = require('shelljs');
var path = require('path');

function browserifyAction() {
    return through.obj(function(obj, enc, cb) {
        var self = this;

        browserify.browserifyStream(obj.path).bundle(function(err, contents) {
            if (err) console.error(err);
            obj.contents = new Buffer(contents);
            self.push(obj);
            cb();
        });
    });
}

// 监听静态文件和模板以及pid修改，并刷新页面
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch([
        './pid',
        'app/template/**/*.*',
        'client/src/**/*.*'
    ], function (event) {
        gulp.src('').pipe(livereload());
    })
});

gulp.task('open', function () {
	opn('http://127.0.0.1:8000', {app: ['google chrome']})
})

gulp.task('start', function () {
    gulp.src('conf/dev/index.js')
        .pipe(gulp.dest('conf'));
    nodemon({
        script: './app/bootStrap.js',
        ext: 'js',
        execMap: {
            js: 'node --harmony'
        },
        args: [
            '--color'
        ],
        ignore: [
            'conf/index.js'
        ]
    });
});
gulp.task('startTest', function () {
    gulp.src('conf/test/index.js')
        .pipe(gulp.dest('conf'));
    nodemon({
        script: './app/bootStrap.js',
        ext: 'js',
        execMap: {
            js: 'node --harmony'
        },
        args: [
            '--color'
        ],
        ignore: [
            'conf/index.js'
        ]
    });
});

gulp.task('build', function () {
    // page部分的压缩合并
    gulp.src('client/src/js/page/**/*.js')
        .pipe(browserifyAction())
        .pipe(gulp.dest('client/build/js/page'))
        .pipe(uglify())
        .pipe(gulp.dest('client/build/js/page'));

    // 拷贝bower_components
    gulp.src('client/bower_components/*')
        .pipe(gulp.dest('client/build/bower_components'));

    // //压缩编译less
    gulp.src(['client/src/less/page/**/*.less'])
    	.pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('client/build/css/page'));

    // 拷贝图片
    gulp.src('client/src/img/*.{png,jpg,jpeg}')
        .pipe(gulp.dest('client/build/img'));

    // 拷贝iconfont文件
    gulp.src('client/src/font/*.{ttf,woff,eot,svg}')
        .pipe(gulp.dest('client/build/font'));
});

// livereload
gulp.task('reload', function () {
    gulp.src('')
        .pipe(livereload());
});

//部署pm2 启动服务
gulp.task('deploy-start', ['build'], () => {
  shell.exec('rm ./conf/index.js');
  shell.exec('cp ./conf/online/index.js ./conf/index.js');
  shell.exec('pm2 start ./app/bootStrap.js -i 0 --name quiz');
});

//部署pm2 停止服务
gulp.task('deploy-stop', () => {
  let bootstrapPath = path.join(__dirname, 'app/bootStrap.js');
  shell.exec('pm2 stop ' + bootstrapPath);
});

// 运行Gulp时，默认的Task
gulp.task('dev', gulpSequence(
    'start',
    'watch',
    'open'
));
gulp.task('test', gulpSequence(
    'build',
    'startTest',
    'watch',
    'open'
));