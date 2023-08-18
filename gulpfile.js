const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}

function taskA(cb) {
    console.log('任務A');
    cb();
}
function taskB(cb) {
    console.log('任務B');
    cb();
}

exports.sync = parallel(taskA,taskB); //同時執行A,B
exports.async = series(taskA,taskB); //執行A再執行B

//檔案搬家

function move(){
    return src('src/index.html').pipe(dest('dist'))
}
exports.m = move;


//html 架構整合
const fileinclude = require('gulp-file-include');  //引入套件

function includeHTML() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}

exports.template = includeHTML