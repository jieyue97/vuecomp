import loadScript from './loadScript'
import pluginsConfig from './pluginsConfig'
// monaco-editor单例
let monacoEidtor

/**
 * 动态加载monaco-editor cdn资源
 * @param {Function} cb 回调，必填
 */
export default function loadMonaco(cb) {
  if (monacoEidtor) {
    cb(monacoEidtor)
    return
  }

  const { monacoEditorUrl: vs } = pluginsConfig

  // 使用element ui实现加载提示
  // const loading = ELEMENT.Loading.service({
  //   fullscreen: true,
  //   lock: true,
  //   text: '编辑器资源初始化中...',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(255, 255, 255, 0.5)'
  // })

  !window.require && (window.require = {})
  !window.require.paths && (window.require.paths = {})
  window.require.paths.vs = vs
  // /node_modules/gd_vue_components/static/libs/monaco-editor/vs/loader.js
  loadScript(`${process.env.VUE_FORM_DESIBN_PATH}/monaco-editor/vs/loader.js`, () => {
    window.require(['vs/editor/editor.main'], () => {
      // loading.close()
      monacoEidtor = window.monaco
      cb(monacoEidtor)
    })
  })
}
