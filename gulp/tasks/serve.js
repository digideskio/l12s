/**
 * Serves the Jekyll app.
 */

var browserSync = require('browser-sync');
var gulp = require('gulp');

var config = require('../config');


gulp.task('serve', ['build'], function() {

  browserSync({
    notify: true,
    server: {
      baseDir: config.BUILD_DIR
    }
  });

});
