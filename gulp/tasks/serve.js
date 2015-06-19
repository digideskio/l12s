/**
 * Serves the Jekyll app.
 */

var browserSync = require('browser-sync');
var gulp = require('gulp');
var path = require('path');

var config = require('../config');


gulp.task('serve', ['build:dev', 'watch'], function() {

  browserSync({
    notify: true,
    server: {
      baseDir: config.BUILD_DIR
    },
    files: [
      path.join(config.BUILD_DIR, '/assets/**/*'),
      path.join(config.BUILD_DIR, '/**/*.html')
    ]
  });

});
