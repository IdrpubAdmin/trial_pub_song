
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
/* const webserver = require('gulp-webserver');
const connect =connect = require('gulp-connect'); */

// html파일 인클루드
gulp.task('fileinclude', async function () {
gulp.src(['**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('../dist'));
});

// 파일 변경 감지
gulp.task('default', function () {
    gulp.watch('**/*.html', gulp.series('fileinclude'));
    return
})


// 실시간 반영
// gulp.task('connect', function(){
//     connect.server({
//         root: '**/*.html',
//         livereload: true,
//         port: 8001
//     });
// });

// gulp.task('html', function(){
//     gulp.src('**/*.html')
//     .pipe(connect.reload());
// });

// gulp.task('watch', function(){
//     gulp.watch(['**/*.html'], ['html']); // html 리로드
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));

