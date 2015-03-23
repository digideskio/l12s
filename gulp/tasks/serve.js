/**
 * Serves the Jekyll app.
 */

var browserSync = require('browser-sync');
var gulp = require('gulp');

var config = require('../config').serve;


gulp.task('serve', function() {

  browserSync({
    notify: true,
    server: {
      baseDir: config.baseDir
    }
  });

});