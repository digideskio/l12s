/**
 * Cleans up the build and staging directories.
 */

var del = require('del');
var gulp = require('gulp');

var config = require('../config');

gulp.task('clean', function(cb) {
  del([config.BUILD_DIR], cb);
});
