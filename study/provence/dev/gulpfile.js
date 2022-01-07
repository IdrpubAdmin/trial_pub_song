
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));


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
gulp.task('include:watch', function () {
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
    gulp.watch("page/**/*.html").on("change", browserSync.reload);
    // page 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행
});
gulp.task( "browser:watch", gulp.series("browserSync") );



// compile scss into css
gulp.task('sass', function(){
    return gulp.src('../css_dev/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'))
        .pipe(browserSync.reload({stream: true}));
});

// 파일 변경 감지
gulp.task('sass:watch', function(){
    gulp.watch('../css_dev/**/*.scss', gulp.series('sass'));
});


/* =========================================================================== */
gulp.task(
    "default",
    gulp.parallel("include:watch", "browser:watch" , "sass:watch")
);


