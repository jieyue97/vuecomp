const commander = require('commander')
require('shelljs/global')
const path = require('path')
const utils = require('./utils')
commander.option('-f, --force', '清除目录再创建').parse(process.argv)
var packJson = path.join(__dirname, '../package.json')
let jsonObj = require('../package.json')
let versionArr = jsonObj.version.split('.')
let arr0 = versionArr[0]
let arr1 = versionArr[1]
let arr2 = versionArr[2]

if (parseInt(arr2) >= 100) {
  arr2 = 0
  arr1 = parseInt(arr1) + 1
}
if (parseInt(arr1) >= 100) {
  arr1 = 0
  arr0 = parseInt(arr0) + 1
}
console.log(versionArr)
jsonObj.version = `${arr0}.${arr1}.${arr2}`
utils.writeFile(packJson, JSON.stringify(jsonObj, null, 2))
exec(`git add ./`)
exec(`git commit -m 'packageJson'`)
exec(`git pull`)
exec(`git push`)
