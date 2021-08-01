const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
/*
{
  root: '/',
  dir: '/Users/narendrajha/nodejs-workspace/first-app',
  base: 'path-test.js',
  ext: '.js',
  name: 'path-test'
}
*/