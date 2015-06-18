/**
 * Gulp task configuration.
 */

var path = require('path');

var BUILD_DIR = path.join(__dirname, '../.build');
var SRC_DIR = path.join(__dirname, '../src');

module.exports = {

  BUILD_DIR: BUILD_DIR,
  STATIC_DIR: path.join(BUILD_DIR, 'assets'),
  SRC_DIR: SRC_DIR,
  ASSETS_DIR: path.join(SRC_DIR, 'assets'),
  // TODO(leah): UPDATE THIS
  STAGING_DIR: path.join(__dirname, '../.build'),
  NPM_DIR: path.join(__dirname, '../node_modules')

};
