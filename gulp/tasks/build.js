

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('buildJekyll',  shell.task('jekyll build'));

gulp.task('build', ['buildJekyll', 'browserify', 'sass']);
