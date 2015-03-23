/**
 * Gulp task configuration.
 */

var gutil = require('gulp-util');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '../.build');
var STATIC_DIR = path.join(BUILD_DIR, 'assets');
var SRC_DIR = path.join(__dirname, '../src');
var ASSETS_DIR = path.join(SRC_DIR, 'assets')
var NPM_DIR = path.join(__dirname, '../node_modules');

module.exports = {

  browserify: {
    debug: !gutil.env.production,
    entries: [
      path.join(ASSETS_DIR, 'js/site.js')
    ],
    dest: path.join(STATIC_DIR, 'js'),
    outputName: 'l12s.min.js'
  },

  deploy: {

  },

  fonts: {

  },

  html: {

  },

  img: {
    dest: path.join(STATIC_DIR, 'img'),
    paths: [
      path.join(ASSETS_DIR, 'img/**/*')
    ]
  },

  jsLint: {
    jsHintConfig: {
      node: true,
      browser: true,
      esnext: true,
      bitwise: false,
      curly: false,
      eqeqeq: true,
      eqnull: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      quotmark: 'single',
      undef: true,
      strict: false,
      trailing: true,
      smarttabs: true
    },
    paths: [
      path.join(ASSETS_DIR, 'js/**/*.js')
    ]
  },

  sass: {
    dest: path.join(STATIC_DIR, 'css'),
    fileName: 'l12s.min.css',
    paths: [
      path.join(ASSETS_DIR, 'sass/site.scss')
    ],
    includePaths: [
      NPM_DIR
    ]
  },

  sassLint: {

  },

  serve: {
    baseDir: BUILD_DIR
  }

};
