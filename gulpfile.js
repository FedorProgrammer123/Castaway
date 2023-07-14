const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
gulp.task('minify', () => {
    return gulp.src('app/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./'));
});
gulp.task('mincss', async function () {
    gulp.src('app/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./Css'));
});