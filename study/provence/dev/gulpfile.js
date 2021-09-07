
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

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