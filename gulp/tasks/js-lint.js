/**
 * Lints all .js files.
 */

var gulp = require('gulp');
var jsHint = require('gulp-jshint')
var stylish = require('jshint-stylish');

var config = require('../config');


gulp.task('jsLint', function() {
  var jsHintConfig = {
    node: true,
    browser: true,
    esnext: true,
    bitwise: false,
    curly: false,
    eqeqeq: true,
    eqnull: true,
    immed: true,
    latedef: true,
    lookup: false,
    newcap: true,
    noarg: true,
    quotmark: 'single',
    undef: true,
    strict: false,
    trailing: true,
    smarttabs: true
  };

  gulp.src(path.join(config.ASSETS_DIR, 'js/**/*.js'))
    .pipe(jsHint(jsHintConfig))
    .pipe(jsHint.reporter(stylish));
});
