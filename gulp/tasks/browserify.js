/**
 * Bundle application js and component js to a single file.
 */

var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyify = require('minifyify');
var path = require('path');
var source = require('vinyl-source-stream');
var watchify  = require('watchify');


var bundleLogger = require('../util/bundle_logger');
var config = require('../config');
var handleErrors = require('../util/handle_errors');


gulp.task('browserify', function() {

  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: [
      path.join(config.ASSETS_DIR, 'js/site.js')
    ],
    debug: !gutil.env.production
  });

  if (gutil.env.production) {
    bundler.plugin('minifyify', {
      map: '/static/js/bundle.map.js',
      output: path.join(config.BUILD_DIR, 'assets/js/bundle.map.js')
    });
  }

  var reportFinished = function() {
    bundleLogger.end('l12s.min.js');
  };

  var bundle = function() {
    bundleLogger.start('l12s.min.js');

    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('l12s.min.js'))
      .pipe(gulp.dest(path.join(config.BUILD_DIR, 'assets/js')))
      .on('end', reportFinished);
  };

  // If in watch mode, turn on watchify to re-bundle on changes
  if (global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
