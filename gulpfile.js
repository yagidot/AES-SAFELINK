var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss   = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');

gulp.task('scripts', function() {
  gulp.src(['./assets/js/vendors.min.js', './assets/js/material.min.js', './assets/js/app.min.js', './assets/js/aes.js', './assets/js/nyanlibs.js', './assets/js/nyanlibs-security.min.js'])
    .pipe(concat('master.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function() {
    return gulp.src(['./assets/css/vendors.min.css', './assets/css/material.min.css', './assets/css/style.min.css'])
    	.pipe(concatCss('maste.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});
