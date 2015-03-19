/**
 * Lints all .js files.
 */

var gulp = require('gulp');
var jsHint = require('gulp-jshint')
var stylish = require('jshint-stylish');

var config = require('../config').jsLint;

gulp.task('jsLint', function() {
  var jsHintConfig = config.jsHintConfig;
  jsHintConfig.lookup = false;

  gulp.src(config.paths)
    .pipe(jsHint(jsHintConfig))
    .pipe(jsHint.reporter(stylish));
});
