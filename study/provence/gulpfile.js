"use strict";

// Load plugins
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

// html파일 인클루드
gulp.task('fileinclude', async function () {
    gulp.src(['**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./page_include'));
});

gulp.task('default', function () {
    gulp.watch('./css_dev/**/*.scss', gulp.series('sass')),
    gulp.watch('**/*.html', gulp.series('fileinclude'));
    return
});