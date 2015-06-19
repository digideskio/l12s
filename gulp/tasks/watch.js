/**
 * Sets up watches on templates and CSS files.
 *
 * NOTE: watchify is used for .js files, so they're not watched here.
 */

var gulp = require('gulp');
var path = require('path');

var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(path.join(config.ASSETS_DIR, 'sass/**.scss'), ['sass']);
  gulp.watch(path.join(config.SRC_DIR, '**/*.html'), ['buildJekyll:dev']);
});
