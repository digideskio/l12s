/**
 * Gulp task configuration.
 */

var path = require('path');

var BUILD_DIR = path.join(__dirname, '../.build');
var SRC_DIR = path.join(__dirname, '../src');

module.exports = {

  BUILD_DIR: BUILD_DIR,
  SRC_DIR: SRC_DIR,
  ASSETS_DIR: path.join(SRC_DIR, 'assets'),
  NPM_DIR: path.join(__dirname, '../node_modules')

};
