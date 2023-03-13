const rm = require('rimraf')
const path = require('path')
var outPathApp = path.join(__dirname, '../node_modules/_vue-server-renderer@2.7.8@vue-server-renderer')
rm.sync(outPathApp)
