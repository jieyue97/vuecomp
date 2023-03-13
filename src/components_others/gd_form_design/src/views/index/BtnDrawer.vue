<template>
  <div v-show="editOpen" :class="editOpen ? 'showPrew' : ''">
    <!-- <el-drawer v-bind="$attrs" v-on="$listeners" @opened="onOpen" @close="onClose" :modal="false"> -->
    <div style="height:100%">
      <el-row style="height:100%;overflow:auto" ref="rowRef">
        <el-col :md="24" :lg="24" class="left-editor">
          <!-- @click="showResource" -->
          <div class="setting" title="资源引用">
            <span class="tooSpan">
              <span class="bar-btn" @click="viewCode">
                <i class="el-icon-view" />
                预览
              </span>
              <span class="bar-btn" @click="runCode">
                <i class="el-icon-refresh" />
                刷新（ctrl + s）
              </span>
              <!-- <span class="bar-btn" @click="exportFile">
                <i class="el-icon-download" />
                导出vue文件
              </span> -->
              <span ref="copyBtn" class="bar-btn copy-btn">
                <i class="el-icon-document-copy" />
                复制代码
              </span>
              <span class="bar-btn" @click="saveCode">
                保存
              </span>
              <span class="bar-btn delete-btn" @click="onClose">
                <i class="el-icon-circle-close" />
                关闭
              </span>
            </span>
            <!-- <el-badge :is-dot="!!resources.length" class="item">
                <i class="el-icon-setting" />
              </el-badge> -->
          </div>
          <div class="tabSpan">
            <span :class="activeTab === 'html' ? 'activeSpan' : ''" @click="changeSapn('html')">
              <i v-if="activeTab === 'html'" class="el-icon-edit" />
              <i v-else class="el-icon-document" />
              template
            </span>
            <span :class="activeTab === 'js' ? 'activeSpan' : ''" @click="changeSapn('js')">
              <i v-if="activeTab === 'js'" class="el-icon-edit" />
              <i v-else class="el-icon-document" />
              script
            </span>
            <span :class="activeTab === 'css' ? 'activeSpan' : ''" @click="changeSapn('css')">
              <i v-if="activeTab === 'css'" class="el-icon-edit" />
              <i v-else class="el-icon-document" />
              css
            </span>
            <span :class="activeTab === 'EjS' ? 'activeSpan' : ''" @click="changeSapn('EjS')">
              <i v-if="activeTab === 'EjS'" class="el-icon-edit" />
              <i v-else class="el-icon-document" />
              otherScript
            </span>
          </div>
          <div>
            <div v-show="activeTab === 'html'" id="editorHtml" class="tab-editor" />
            <div v-show="activeTab === 'js'" id="editorJs" class="tab-editor" />
            <div v-show="activeTab === 'css'" id="editorCss" class="tab-editor" />
            <div v-show="activeTab === 'EjS'" id="editorOtherJs" class="tab-editor" />
          </div>
        </el-col>
        <div v-show="isView" class="action-bar">
          <div v-show="isView">
            <span class="bar-btn delete-btn" @click="isView = false">
              <i class="el-icon-circle-close" />
              关闭
            </span>
          </div>
          <div class="view">
            <!-- <div style="padding: 10px">
                <RowTest :data-js="vueTemplateObj.js" :data-html="vueTemplateObj.html" :data-css="vueTemplateObj.css"></RowTest>
              </div> -->
          </div>
        </div>
      </el-row>
    </div>
    <!-- </el-drawer> -->
    <resource-dialog :visible.sync="resourceVisible" :origin-resource="resources" @save="setResource" />
  </div>
</template>
<script>
import { parse } from '@babel/parser'
import ClipboardJS from 'clipboard'
// import { saveAs } from 'file-saver'
import { makeUpHtml, vueTemplate, vueScript, cssStyle } from '../../components/generator/html'
import { makeUpJs } from '../../components/generator/js'
import { makeUpCss } from '../../components/generator/css'
import { defaultHtml, defaultJs, defaultCss } from '../../utils/defaultBtnCode'
import { exportDefault, beautifierConf, titleCase } from '../../utils/index'
import ResourceDialog from './ResourceDialog'
import loadMonaco from '../../utils/loadMonaco'
import loadBeautifier from '../../utils/loadBeautifier'
// import RowTest from './templateData'
var editorObj = {
  html: null,
  js: null,
  EjS: null,
  css: null
}
const mode = {
  html: 'html',
  js: 'javascript',
  EjS: 'javascript',
  css: 'css'
}
let beautifier
let monaco

export default {
  components: { ResourceDialog },
  props: ['formData', 'generateConf', 'compData'],
  data() {
    return {
      editOpen: false,
      isView: false,
      activeTab: 'html',
      htmlCode: '',
      jsCode: '',
      cssCode: '',
      EjSCode: '',
      codeFrame: '',
      isIframeLoaded: false,
      isInitcode: false, // 保证open后两个异步只执行一次runcode
      isRefreshCode: false, // 每次打开都需要重新刷新代码
      resourceVisible: false,
      scripts: [],
      links: [],
      vueTemplateObj: {
        html: '',
        css: '',
        js: ''
      }
    }
  },
  computed: {
    resources() {
      return this.scripts.concat(this.links)
    }
  },
  watch: {},
  created() {},
  mounted() {
    window.addEventListener('keydown', this.preventDefaultSave)
    const clipboard = new ClipboardJS('.copy-btn', {
      text: trigger => {
        const codeStr = this.generateCode()
        this.$notify({
          title: '成功',
          message: '代码已复制到剪切板，可粘贴。',
          type: 'success'
        })
        return codeStr
      }
    })
    clipboard.on('error', e => {
      this.$message.error('代码复制失败')
    })
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.preventDefaultSave)
  },
  methods: {
    initDom() {},
    viewCode() {
      this.isView = true
    },
    // 点击span页签
    changeSapn(type) {
      this.activeTab = type
    },
    saveCode() {
      const jsCode = editorObj.js.getValue() !== '' ? editorObj.js.getValue().replace('export default', '') : editorObj.js.getValue()
      const otherJsCode = editorObj.EjS.getValue() !== '' ? editorObj.EjS.getValue().replace('export default', '') : editorObj.EjS.getValue()
      this.$emit('saveCodeData', { htmlCode: editorObj.html.getValue(), jsCode: jsCode, cssCode: editorObj.css.getValue(), otherJsCode: otherJsCode })
      this.onClose()
    },
    preventDefaultSave(e) {
      if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
      }
    },
    onOpen(row, readOnlyHtml = false, readOnlyJs = false, readOnlyCss = false, readOnlyEjS = false) {
      this.editOpen = true
      let jsCode = ''
      let otherJsCode = ''
      if (row.compJavascript.includes('#code#')) {
        const arr = row.compJavascript.split('#code#')
        jsCode = 'export default' + arr[0]
        otherJsCode = 'export default' + arr[1]
      }
      if (row === undefined) {
        return
      }

      const { type } = this.generateConf
      this.htmlCode = row.compView === '' ? defaultHtml() : row.compView
      this.jsCode = jsCode === '' ? defaultJs() : jsCode
      this.cssCode = row.compCss === '' ? defaultCss() : row.compCss
      this.EjSCode = otherJsCode === '' ? 'export default {}' : otherJsCode
      // debugger
      loadBeautifier(btf => {
        beautifier = btf
        this.htmlCode = beautifier.html(this.htmlCode, beautifierConf.html)
        this.jsCode = beautifier.js(this.jsCode, beautifierConf.js)
        this.cssCode = beautifier.css(this.cssCode, beautifierConf.html)
        loadMonaco(val => {
          monaco = val

          this.setEditorValue('editorHtml', 'html', this.htmlCode, readOnlyHtml)
          this.setEditorValue('editorJs', 'js', this.jsCode, readOnlyJs)
          this.setEditorValue('editorCss', 'css', this.cssCode, readOnlyCss)
          this.setEditorValue('editorOtherJs', 'EjS', this.EjSCode, readOnlyEjS)
          if (!this.isInitcode) {
            this.isRefreshCode = true
            this.isIframeLoaded && (this.isInitcode = true) && this.runCode()
          }
        })
      })
    },
    onClose() {
      this.editOpen = false
      //       this.$emit('update:visible', false)
      //       const aa = document.getElementById('editorHtml')
      //         debugger
      for (let i in editorObj) {
        if (editorObj[i]) {
          if (editorObj[i].getModel()) {
            editorObj[i].getModel().dispose()
          }
          editorObj[i].dispose()
          editorObj[i] = null
        }
      }

      // editorObj = {
      //   html: null,
      //   js: null,
      //   EjS: null,
      //   css: null
      // }
      // editorObj.html.dispose()
      // editorObj.css.dispose()
      // editorObj.js.dispose()
      // editorObj.Ejs.dispose()
      this.isInitcode = false
      this.isRefreshCode = false
      this.$emit('closedPreview')
    },
    iframeLoad() {
      if (!this.isInitcode) {
        this.isIframeLoaded = true
        this.isRefreshCode && (this.isInitcode = true) && this.runCode()
      }
    },
    setEditorValue(id, type, codeStr, readOnlyType) {
      // if (editorObj[type]) {
      //   editorObj[type].setValue(codeStr)
      // } else {
      editorObj[type] = monaco.editor.create(document.getElementById(id), {
        value: codeStr,
        theme: 'vs-dark',
        language: mode[type],
        automaticLayout: true,
        readOnly: readOnlyType
      })
      editorObj[type].setValue(codeStr)
      // }
      // this.vueTemplateObj = {
      //   html: this.htmlCode,
      //   css: this.cssCode,
      //   js: this.jsCode !== '' ? eval(`(${this.jsCode.replace(exportDefault, '')})`) : this.jsCode
      // }
      // ctrl + s 刷新
      editorObj[type].onKeyDown(e => {
        if (e.keyCode === 49 && (e.metaKey || e.ctrlKey)) {
          this.runCode()
        }
      })
    },
    runCode() {
      const jsCodeStr = editorObj.js.getValue()
      editorObj[this.activeTab].getAction(['editor.action.formatDocument'])._run()
      try {
        const ast = parse(jsCodeStr, { sourceType: 'module' })
        const astBody = ast.program.body
        if (astBody.length > 1) {
          this.$confirm('js格式不能识别，仅支持修改export default的对象内容', '提示', {
            type: 'warning'
          })
          return
        }
        if (astBody[0].type === 'ExportDefaultDeclaration') {
          const postData = {
            type: 'refreshFrame',
            data: {
              generateConf: this.generateConf,
              html: editorObj.html.getValue(),
              js: jsCodeStr.replace(exportDefault, ''),
              css: editorObj.css.getValue(),
              scripts: this.scripts,
              links: this.links
            }
          }
          this.vueTemplateObj = {
            html: editorObj.html.getValue(),
            css: editorObj.css.getValue(),
            js: eval(`(${jsCodeStr.replace(exportDefault, '')})`)
          }
        } else {
          this.$message.error('请使用export default')
        }
      } catch (err) {
        this.$message.error(`js错误：${err}`)
        console.error(err)
      }
    },
    generateCode() {
      const html = vueTemplate(editorObj.html.getValue())
      const script = vueScript(editorObj.js.getValue())
      const css = cssStyle(editorObj.css.getValue())
      return beautifier.html(html + script + css, beautifierConf.html)
    },
    // exportFile() {
    //   this.$prompt('文件名:', '导出文件', {
    //     inputValue: `${+new Date()}.vue`,
    //     closeOnClickModal: false,
    //     inputPlaceholder: '请输入文件名'
    //   }).then(({ value }) => {
    //     if (!value) value = `${+new Date()}.vue`
    //     const codeStr = this.generateCode()
    //     const blob = new Blob([codeStr], { type: 'text/plain;charset=utf-8' })
    //     saveAs(blob, value)
    // import { nextTick } from 'vue/types/umd'

    // },
    showResource() {
      this.resourceVisible = true
    },
    setResource(arr) {
      const scripts = []
      const links = []
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          if (item.endsWith('.css')) {
            links.push(item)
          } else {
            scripts.push(item)
          }
        })
        this.scripts = scripts
        this.links = links
      } else {
        this.scripts = []
        this.links = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.showPrew {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2000;
}
@import '../../styles/mixin.scss';
@import '../../styles/index';
.tooSpan {
  display: inline-block;
  padding: 0 6px;
  line-height: 32px;
  color: #8285f5;
  cursor: pointer;
  font-size: 14px;
}
.tabSpan {
  background: #121315;
}
.tabSpan .activeSpan {
  background: #1e1e1e;
  border-bottom-color: #1e1e1e !important;
  color: #fff;
  i {
    color: #f1fa8c;
  }
}
.tabSpan span {
  height: 32px;
  line-height: 32px;
  color: #888a8e;
  padding: 5px 20px;
  border-left: 1px solid #121315 !important;
  background: #363636;
  margin-right: 5px;
  font-size: 14px;
  i {
    color: #a95812;
  }
}
.editor-tabs .el-tabs__item {
  height: 32px;
  line-height: 32px;
  color: #888a8e;
  border-left: 1px solid #121315 !important;
  background: #363636;
  margin-right: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.action-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #f2fafb;
  padding: 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 33px;
}
.action-bar .bar-btn {
  display: inline-block;
  padding: 0 6px;
  line-height: 32px;
  color: #8285f5;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.action-bar .delete-btn {
  color: #f56c6c;
}
/deep/ {
  .el-drawer__header {
    display: none;
  }
}
.tab-editor {
  position: absolute;
  top: 33px;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
}
.left-editor {
  position: relative;
  height: 100%;
  background: #1e1e1e;
  overflow: hidden;
}
.setting {
  position: absolute;
  right: 15px;
  top: 3px;
  color: #a9f122;
  font-size: 18px;
  cursor: pointer;
  z-index: 1;
}
.right-preview {
  height: 100%;
  .result-wrapper {
    height: calc(100vh - 33px);
    width: 100%;
    overflow: auto;
    padding: 12px;
    box-sizing: border-box;
  }
}
// @include action-bar;
::v-deep .el-drawer__header {
  display: none;
}
</style>
