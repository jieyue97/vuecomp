function sort(array) {
  array.sort(function (a, b) {
    return a > b
  })
  return array
}

function createMenus(title, children) {
  return {
    title: title,
    collapsable: true,
    children: sort(children),
  }
}

module.exports = {
  '/untils/': [createMenus('基础方法', ['base', 'request', 'timedate', 'fullscreen', 'dom', 'regex', 'url'])],
  '/ui/components/': [
    createMenus('快速上手', ['quickstart']),
    createMenus('基础组件', ['dialog', 'table', 'pagination', 'steps', 'iframe', 'customForm', 'selectTree', 'title', 'drag', 'slice-upload']),
    createMenus('特殊组件', ['bpmn', 'tinymce', 'online-excel']),
    createMenus('通用实例', ['searchPage']),
  ],
  '/ui/echart/': [createMenus('echarts', ['detail', 'line', 'bar', 'pie', 'scatter', 'map'])],
  '/guide/': [
    createMenus('框架相关', ['useFlow', 'system', 'frame', 'iconfont', 'utils', 'request']),
    createMenus('组件库相关', ['install', 'seeDir', 'createdComp', 'createdDocs']),
  ],
  '/standard/': [createMenus('规范', ['webpack', 'config', 'compname', 'note', 'props'])],
}
