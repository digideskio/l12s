/**
 *
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');

gulp.task('buildJekyll', shell.task('jekyll build'));

gulp.task('build', function(cb) {
  runSequence('clean', 'buildJekyll', ['browserify', 'sass'], cb);
});
