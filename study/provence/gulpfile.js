const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const babel = require("gulp-babel");
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
// const sass = require('gulp-ruby-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const pcFocus = require('postcss-focus');
const pcFontpath = require('postcss-fontpath');
const stylelint = require('stylelint');
const extender = require('gulp-html-extend');

gulp.task('sass', function() {
	return gulp.src('css_dev/*.scss')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sassGlob())
	.pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
	.pipe(postcss(
		[pcFontpath({
			formats: [
	    {	type:'embedded-opentype', ext: 'eot' },
	    {	type: 'woff2', ext: 'woff2' },
	    {	type: 'woff', ext: 'woff' },
	    {	type: 'truetype', ext: 'ttf' }    
	  ]
	 })],
		//[autoprefixer({browsers: ['last 2 versions']})],
		[autoprefixer()],
		[pcFocus()]
		))	
	.pipe(sourcemaps.write('../css'))
	.pipe(gulp.dest('../css'))
});

gulp.task('extend', function () {
	return gulp.src('page_dev/**/*.html')
	.pipe(extender({annotations:false,verbose:false,root:"../"}))
	.pipe(plumber())
	.pipe(gulp.dest('../page/'));
});

gulp.task('babel', function () {
	return gulp.src('js_dev/*.js')
		.pipe(babel({
			//presets: ["@babel/preset-env"]
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
		.pipe(plumber())
		.pipe(gulp.dest('../js/'));
});

gulp.task('watch', function() {
	gulp.watch('page_dev/**/*.html', gulp.series('extend'));
	gulp.watch('page/**/*.html', gulp.series('extend'));
	gulp.watch('js/*.js', gulp.series('babel'));
});

var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');
 
gulp.task('fileinclude', function() {
    gulp.src(['./provence/page/index.html', './provence/page/*.html'], {base : './'})
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});
 
gulp.task('default',gulp.parallel(['watch']));
