'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var moreCSS = require('gulp-more-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {

});

gulp.task('sass', function() {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(moreCSS())
        .pipe(gulp.dest('./web/assets/css'));
});

gulp.task('javascript', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery.countdown/jquery.countdown.js',
        'src/javascript/site.js'
    ])
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./web/assets/js'));
});

gulp.task('watch', function () {
  gulp.watch('./src/style/**/*.scss', ['sass']);
  gulp.watch('./src/javascript/site.js', ['javascript']);
});
