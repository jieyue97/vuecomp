const commander = require('commander')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
commander.option('-f, --force', '清除目录再创建').parse(process.argv)
// 操作类型
// const action = commander.args[0]
// 组件名称
const compName = commander.args[0]
// const desc = commander.args[2] || ''
// const author = commander.args[3] || ''
var outPathComp = path.join(__dirname, '../src/components/')
var outPathExamle = path.join(__dirname, '../src/examples/')
var templatePath = path.join(__dirname, './templates/')
const apiRender = getRender('comp.js')
add(compName, outPathComp)
/**
 * 读取模板渲染函数
 * @param file
 */
function getRender(file) {
  return require(path.join(templatePath, file))
}
/**
 * 新增组件
 * @param name 应用名称
 */
function add(name, url) {
  if (!name.includes('_')) {
    log(`>>>组件名【 ${name} 】不合规。请以下划线连接，以gd开头，如gd_xx`, 'error')
    return
  }
  const arr = name.split('_').map(res => {
    return res.charAt(0).toUpperCase() + res.slice(1)
  })
  if (!fs.existsSync(url + name)) {
    fs.mkdirSync(url + name)
  }
  // 写入配置文件
  writeCompAndExample('comp', name, url, arr)
  log(`>>>【 ${name} 】组件创建成功！`, 'success')
  writeCompAndExample('example', name)
  log(`>>>【 ${name} 】组件实例创建成功！`, 'success')
}
function writeCompAndExample(type = 'comp', name, url, arr = []) {
  if (type === 'comp') {
    // 写入配置文件
    writeFile(
      url + name + '/',
      'index',
      apiRender({
        cname: arr.join('')
      })
    )
  } else {
    // 写入配置文件
    writeFile(
      outPathExamle,
      name,
      apiRender({
        cname: name + '_item'
      })
    )
  }
}
/**
 * 创建文件
 * @param path
 * @param fileName
 * @param content
 */
function writeFile(path, fileName, content) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
  fs.writeFileSync(path + fileName + '.vue', content, {
    encoding: 'utf8'
  })
}
/**
 * 输出控制台信息
 * @param {string} msg
 * @param {string} type
 */
function log(msg, type = 'primary') {
  const colors = {
    success: chalk.green,
    warning: chalk.keyword('orange'),
    error: chalk.bold.red,
    primary: chalk.blue
  }
  console.log(colors[type](msg))
}
