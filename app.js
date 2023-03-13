require('shelljs/global')
const path = require('path')
const utils = require('./core/utils')

// require("shelljs/global");
var configJson = path.join(__dirname, `./json/log.json`)
var questionJson = path.join(__dirname, `./json/question.json`)
const questionObj = require(`./json/question.json`)
// let jsonObj = require(`../json/log.json`);
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
let fs = require('fs')
const rm = require('rimraf')
const { exec } = require('child_process')
//修改限制大小
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
// 在所有路由前调用配置cors中间件
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/getLog', async (req, res) => {
  fs.readFile('./json/log.json', (err, data) => {
    const json = data ? JSON.parse(data) : {}
    res.send({
      code: 200,
      msg: '获取数据成功',
      data: json,
    })
  })
})
app.post('/createLog', (req, res) => {
  const params = JSON.parse(req.body.data)

  // console.log(params, "paramsparams");
  utils.writeFile(configJson, JSON.stringify(params, null, 2))
  // exec('npm run tonpm')
  res.send({
    code: 200,
    msg: '数据更新成功',
  })

  // updataJson();
})
// 常见问题
app.post('/getQuestion', async (req, res) => {
  fs.readFile(questionJson, (err, data) => {
    const json = data ? JSON.parse(data) : {}
    res.send({
      code: 200,
      msg: '获取数据成功',
      data: json,
    })
  })
})

app.post('/upimages', function (req, res, next) {
  let { code, errPic, sucessPic, question, reason, solve } = req.body
  let allPic = [...errPic, ...sucessPic]
  if (allPic.length > 0) {
    allPic.forEach((item) => {
      let imgData = item.base64Cont
      let base64Data = imgData.replace(/^data:image\/\w+;base64,/, '')
      let dataBuffer = Buffer.from(base64Data, 'base64')
      //写入到该目录上一级assets文件夹中名字叫image.png
      fs.writeFile('./docs/.vuepress/public/question/' + item.name, dataBuffer, function (err) {
        if (err) console.log(err)
      })
    })
  }

  let formData = {
    question,
    reason,
    solve,
    errPic: errPic.map((el) => {
      return {
        name: el.name,
        path: `question/${el.name}`,
      }
    }),
    sucessPic: sucessPic.map((el) => {
      return {
        name: el.name,
        path: `question/${el.name}`,
      }
    }),
  }
  fs.readFile(questionJson, (err, data) => {
    const copyData = data ? JSON.parse(data) : {}
    copyData[code].push(formData)
    utils.writeFile(questionJson, JSON.stringify(copyData))
    // utils.writeFile(questionJson, JSON.stringify(questionObj))
  })
  res.send({
    code: 200,
    msg: '保存成功',
  })
})
// 组件
var sysPath = path.join(__dirname, `./docs/.vuepress/json/sidebar.json`)
// var sysPath = path.join(__dirname, `./json/log.json`);
app.post('/getcomp', async (req, res) => {
  const params = req.body.data
  fs.readFile(`./docs/ui/components/${params}.md`, 'utf8', (err, data) => {
    const json = data ? data : ''
    // console.log(json, 'jsonjson')
    res.send({
      code: 200,
      msg: '获取数据成功',
      data: json,
    })
  })
})
app.post('/savecomp', async (req, res) => {
  const params = req.body.data
  const name = req.body.name
  var compPath = path.join(__dirname, `./docs/ui/components/${name}.md`)
  utils.writeFile(compPath, params)
  res.send({
    code: 200,
    msg: '保存组件文档成功',
  })
})
app.post('/createcomp', async (req, res) => {
  const params = req.body.data
  var compPath = path.join(__dirname, `./docs/ui/components/${params.name}.md`)

  utils.writeFile(sysPath, JSON.stringify(params.sidebar, null, 2))
  utils.writeFile(compPath, params.val)
  res.send({
    code: 200,
    msg: '创建组件文档成功',
  })
})
app.post('/deletecomp', async (req, res) => {
  const params = req.body.data
  const name = req.body.name

  utils.writeFile(sysPath, JSON.stringify(params, null, 2))
  var outPathApp = path.join(__dirname, `./docs/ui/components/${name}.md`)
  rm.sync(outPathApp)
  res.send({
    code: 200,
    msg: '删除组件文档成功',
  })
})
app.post('/localcomp', async (req, res) => {
  await exec('npm run pullGit')
  res.send({
    code: 200,
    msg: '同步本地数据成功',
  })
})
app.listen(3000, () => {
  console.log('开启服务器')
})
