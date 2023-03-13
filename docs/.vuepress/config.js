const nav = require('./nav')
const sidebar = require('./sidebar')
const path = require('path')
module.exports = {
  title: '前端开发组件库',
  base: '/vuepressblog/', // 设置站点根路径
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  repo: 'http://10.0.1.250:9090/dept-base/product/frame/source/gdeleui.git', // 添加 github 链接
  description: '基于Vue + ElementUI 的web项目工程框架，',
  port: 8888,
  dest: path.join(__dirname, '../../dist'),
  // base: config.docsBaseUrl,
  head: [['link', { rel: 'icon', href: '/img/guodi.png' }]],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/img/guodi.png',
    lastUpdated: false, // string | boolean
    sidebarDepth: 3,
    nav: nav,
    sidebar: sidebar,
  },
  plugins: {
    'demo-container': true,
    // '@vssue/vuepress-plugin-vssue': {
    //   baseURL: 'http://10.0.1.250:9090/',
    //   platform: 'gitlab',
    //   owner: 'dept-base/product/frame/source',
    //   repo: 'gd-eleui',
    //   autoCreateIssue: true,
    //   clientId: 'ed8017e1d4b0f064bf1665eb898c2397d59153352dd29a1eb2df0af35c4d5d3c'
    // }
    // '@vssue/vuepress-plugin-vssue': {
    //   platform: 'gitee',
    //   owner: 'weituo123',
    //   repo: 'gd_issue',
    //   clientId: '7c791af022e8c73d9886e91753d49223e247da59c547d5616b164155fbee606a',
    //   clientSecret: 'e3721be88496c4761b2767ed888e3b3af3713139b552f18f3b9a719b6fc0ce6a'
    // }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-container'))
    },
  },
  // chainWebpack: webpackExtend,
  extraWatchFiles: ['nav.js', 'sidebar.js'],
}
