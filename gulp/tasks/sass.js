/**
 * Compiles SASS files to CSS.
 */

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var size = require('gulp-size');

var config = require('../config').sass;

gulp.task('sass', function() {

  // TODO(leah): Add AutoPrefixer
  //   .pipe($.autoprefixer("last 1 version", { cascade: true }))
  // TODO(leah): Add asset revision versions

  gulp.src(config.paths)
    .pipe(sass({includePaths: config.includePaths, errLogToConsole: true}))
    .pipe(rename(config.fileName))
    .pipe(size({title: config.fileName}))
    .pipe(gulp.dest(config.dest));
});
