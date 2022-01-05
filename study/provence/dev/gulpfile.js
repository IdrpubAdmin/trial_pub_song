
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();


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



//liveserver

gulp.task('browserSync', function() {
    browserSync.init({
    server: {
        baseDir: "../dist/page", // 서버에 띄울 폴더 위치 지정
        directory: true
    }
});
gulp.watch("page/*").on("change", browserSync.reload);
// page 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행
});
gulp.task( "default", gulp.parallel("browserSync") );




//sass

const sass = require('gulp-sass')(require('sass'));

// compile scss into css
gulp.task('sass', function(){
    return gulp.src('../css_dev/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', gulp.parallel('sass', 'browserSync'), function(){
    gulp.watch('../css_dev/*.scss', gulp.parallel('sass'));
});


/* gulp.task(
    "default",
    gulp.parallel("sass", "watch", "browserSync") // ★★★★ add browserSync
);
 */

