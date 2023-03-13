/**
 * 修复 GOJS 存在水印的问题
 */
const fs = require('fs')
const chalk = require('chalk')

const GOJS_FILE = 'node_modules/gojs/release/go.js'

function fixGojs(file) {
  try {
    let content = fs.readFileSync(file, 'utf-8')
    if (content.includes('/*flag*/')) {
      console.log(`fix ${file} ${chalk.yellow('fixed')}`)
      return
    }
    // 破解gojs
    const flag = '7eba17a4ca3b1a8346'
    const index = content.indexOf(flag)
    if (index > 0) {
      const start = index - 8,
        end = index + 32 + flag.length
      const section = content.substring(start, end)
      content = content.replace(section, 'function(){return true;};/*flag*/')
      content = content.replace('bfunction(){return true;}', 'function(){return true;}')
      fs.writeFileSync(file, content, 'utf-8')

      console.log(`fix ${file} ${chalk.green('success')}`)
    } else {
      console.log(`fix ${file} ${chalk.red('fail')}`)
    }
  } catch (e) {
    console.log(`fix ${file} ${chalk.red('fail')}`)
  }
}

fixGojs(GOJS_FILE)
fixGojs(GOJS_FILE.replace('go.js', 'go-module.js'))
fixGojs(GOJS_FILE.replace('go.js', 'go-debug.js'))
fixGojs(GOJS_FILE.replace('go.js', 'go-debug-module.js'))
fixGojs(GOJS_FILE.replace('go.js', 'go.mjs'))
fixGojs(GOJS_FILE.replace('go.js', 'go-debug.mjs'))
