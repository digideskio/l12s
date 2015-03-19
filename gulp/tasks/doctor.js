/**
 * Runs Jekyll doctor to check for any errors.
 */

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('doctor', shell.task('jekyll doctor'));
