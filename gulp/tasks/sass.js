/**
 * Compiles SASS files to CSS.
 */

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var size = require('gulp-size');

var config = require('../config');


gulp.task('sass', function() {

  // TODO(leah): Add AutoPrefixer
  //   .pipe($.autoprefixer("last 1 version", { cascade: true }))
  // TODO(leah): Add asset revision versions

  gulp.src(path.join(config.ASSETS_DIR, 'sass/site.scss'))
    .pipe(sass({
      includePaths: [config.NPM_DIR],
      errLogToConsole: true
    }))
    .pipe(rename('l12s.min.css'))
    .pipe(size({title: config.fileName}))
    .pipe(gulp.dest(path.join(config.STATIC_DIR, 'css')));
});
