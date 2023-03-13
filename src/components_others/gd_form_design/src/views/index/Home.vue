<template>
  <div class="container" id="formDesignId">
    <div class="left-board">
      <div class="logo-wrapper">
        <div class="logo"><img :src="logo" alt="logo" /> 国地表单设计器</div>
      </div>
      <el-scrollbar class="left-scrollbar">
        <div class="components-list">
          <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
            <div class="components-title">
              <!-- <svg-icon icon-class="component" /> -->
              {{ item.title }}
            </div>
            <draggable
              class="components-draggable"
              :list="item.list"
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
              :clone="cloneComponent"
              draggable=".components-item"
              :sort="false"
              @end="onEnd"
            >
              <div v-for="(element, index) in item.list" :key="index" class="components-item" @click="addComponent(element)">
                <div class="components-body">
                  <!-- <svg-icon :icon-class="element.__config__.tagIcon" /> -->
                  <span v-if="element.__config__.layout !== 'gdTable'">{{ element.__config__.label }}</span>
                  <el-popover v-else placement="right" width="300" trigger="hover">
                    <div class="gridDataFormLeft" @mouseleave="hightlightArr = []">
                      <div style="padding:5px 0">{{ parseNum + 1 }}行{{ mod + 1 }}列</div>
                      <span
                        v-for="(item, index) in 100"
                        :key="index"
                        :class="hasIncludeIndex(index) ? 'hightLightActive' : ''"
                        @mouseover="mouseoverSpan(index)"
                        @click="clickSpan(element)"
                      >
                      </span>
                    </div>
                    <div slot="reference">{{ element.__config__.label }}</div>
                  </el-popover>
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div class="center-board">
      <div class="action-bar">
        <el-button icon="el-icon-video-play" type="text" @click="run">
          预览
        </el-button>
        <!-- <el-button icon="el-icon-view" type="text" @click="showJson">
          查看json
        </el-button> -->
        <el-button class="copy-btn-main" icon="el-icon-document-copy" type="text" @click="copy">
          复制代码
        </el-button>
        <el-button class="delete-btn" icon="el-icon-delete" type="text" @click="empty">
          清空
        </el-button>
        <el-button type="text" @click="productionMetadata">
          生成元数据
        </el-button>
        <el-button icon="el-icon-download" type="text" @click="download">
          保存
        </el-button>
      </div>
      <el-scrollbar class="center-scrollbar">
        <!-- {{ drawingList }} -->
        <el-row class="center-board-row" :gutter="formConf.gutter">
          <el-form :size="formConf.size" :label-position="formConf.labelPosition" :disabled="formConf.disabled" :label-width="formConf.labelWidth + 'px'">
            <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
              <template v-for="(item, index) in drawingList">
                <div :key="index">
                  <draggable-item
                    v-if="item.__config__.layout !== 'gdTable'"
                    :key="item.renderKey"
                    :drawing-list="drawingList"
                    :current-item="item"
                    :index="index"
                    :active-id="activeId"
                    :form-conf="formConf"
                    @activeItem="activeFormItem"
                    @copyItem="drawingItemCopy"
                    @deleteItem="drawingItemDelete"
                  ></draggable-item>
                  <RowFormTable ref="formTable" v-else :parseNum="parseNum + 1" :parseMod="mod + 1"> </RowFormTable>
                </div>
              </template>
            </draggable>
            <div v-show="!drawingList.length" class="empty-info">
              从左侧拖入或点选组件进行表单设计
            </div>
          </el-form>
        </el-row>
        <!-- <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup"> </draggable> -->
      </el-scrollbar>
    </div>

    <right-panel :active-data="activeData" :form-conf="formConf" :show-field="!!drawingList.length" @tag-change="tagChange" @fetch-data="fetchData" />

    <form-drawer :visible.sync="drawerVisible" :form-data="formData" size="100%" :generate-conf="generateConf" />
    <!-- <json-drawer size="60%" :visible.sync="jsonDrawerVisible" :json-str="JSON.stringify(formData)" @refresh="refreshJson" /> -->
    <code-type-dialog :visible.sync="dialogVisible" title="选择生成类型" :show-file-name="showFileName" @confirm="generate" />
    <gdDialog title="表格设置" size="small" :z-index="201" :closed.sync="rowTableDialog" :append-to-body="true" width="200px" draggable>
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="表格行数">
          <el-input size="small" v-model="formInline.spanNum" type="number" placeholder="表格行数"></el-input>
        </el-form-item>
        <el-form-item label="表格列数">
          <el-input size="small" type="number" v-model="formInline.colNum" placeholder="表格行数"></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <div>
          <el-button type="primary" @click="onSubmit">设置</el-button>
        </div>
      </template> -->
      <!-- {{ generateCode() }} -->
      {{ formInline }}
    </gdDialog>
    <input id="copyNode" type="hidden" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { debounce } from 'throttle-debounce'
// import { saveAs } from 'file-saver'
import ClipboardJS from 'clipboard'
import render from '../../components/render/render'
import FormDrawer from './FormDrawer'
// import JsonDrawer from './JsonDrawer'
import RightPanel from './RightPanel'
import { inputComponents, selectComponents, layoutComponents, formConf } from '../../components/generator/config'
import { exportDefault, beautifierConf, isNumberStr, titleCase, deepClone, isObjectObject } from '../../utils/index'
import { makeUpHtml, vueTemplate, vueScript, cssStyle } from '../../components/generator/html'
import { makeUpJs } from '../../components/generator/js'
import { makeUpCss } from '../../components/generator/css'
import drawingDefalut from '../../components/generator/drawingDefalut'
import logo from '../../assets/guodi.png'
import CodeTypeDialog from './CodeTypeDialog'
import DraggableItem from './DraggableItem'
import { getDrawingList, saveDrawingList, getIdGlobal, saveIdGlobal, getFormConf } from '../../utils/db'
import loadBeautifier from '../../utils/loadBeautifier'
import axios from 'axios'
import GdTableTest from '../../../../../components/gd_table'
import RowFormTable from './rowFormTable'
// import RowTest from './templateData'
let beautifier
const emptyActiveData = { style: {}, autosize: {} }
let oldActiveId
let tempActiveData
const drawingListInDB = getDrawingList()
const formConfInDB = getFormConf()
const idGlobal = getIdGlobal()
export default {
  components: {
    draggable,
    render,
    FormDrawer,
    // JsonDrawer,
    RightPanel,
    CodeTypeDialog,
    DraggableItem,
    GdTableTest,
    RowFormTable
    // RowTest
  },
  props: ['configList'],
  data() {
    return {
      logo,
      idGlobal,
      formConf,
      inputComponents,
      selectComponents,
      layoutComponents,
      labelWidth: 100,
      parseNum: 0,
      mod: 0,
      dragObj: {},
      formTableList: [],
      rowItemObj: {},
      formInline: {
        spanNum: 1,
        colNum: 1
      },
      hightlightArr: [],
      rowTableDialog: false,
      drawingList: [],
      drawingData: {},
      activeId: '',
      drawerVisible: false,
      formData: {},
      dialogVisible: false,
      jsonDrawerVisible: false,
      generateConf: { fileName: '', type: 'file' },
      showFileName: false,
      activeData: JSON.parse(JSON.stringify(drawingDefalut))[0],
      saveDrawingListDebounce: debounce(340, saveDrawingList),
      saveIdGlobalDebounce: debounce(340, saveIdGlobal),
      leftComponents: [
        {
          title: '输入型组件',
          list: inputComponents
        },
        {
          title: '选择型组件',
          list: selectComponents
        },
        {
          title: '布局型组件',
          list: layoutComponents
        }
      ]
    }
  },
  computed: {},
  watch: {
    // eslint-disable-next-line func-names
    'activeData.__config__.label': function(val, oldVal) {
      if (this.activeData.placeholder === undefined || !this.activeData.__config__.tag || oldActiveId !== this.activeId) {
        return
      }
      this.activeData.placeholder = this.activeData.placeholder.replace(oldVal, '') + val
    },
    activeId: {
      handler(val) {
        oldActiveId = val
      },
      immediate: true
    },
    drawingList: {
      handler(val) {
        this.saveDrawingListDebounce(val)
        if (val.length === 0) this.idGlobal = 100
      },
      deep: true
    },
    idGlobal: {
      handler(val) {
        this.saveIdGlobalDebounce(val)
      },
      immediate: true
    }
  },
  mounted() {
    // const aa = this.configList
    // console.log(aa, 'configListconfigListconfigListconfigList')
    // if (Array.isArray(drawingListInDB) && drawingListInDB.length > 0) {
    //   this.drawingList = drawingListInDB
    // } else {
    //   this.drawingList = drawingDefalut
    // }
    // this.activeFormItem(this.drawingList[0])
    // if (formConfInDB) {
    //   this.formConf = formConfInDB
    // }
    loadBeautifier(btf => {
      beautifier = btf
    })
    const clipboard = new ClipboardJS('#copyNode', {
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
  methods: {
    hasIncludeIndex(index) {
      const indexNum = this.hightlightArr.indexOf(index)
      return indexNum > -1
    },
    // 画表
    mouseoverSpan(index) {
      this.hightlightArr = []
      const arr = []
      this.parseNum = parseInt(index / 10)
      this.mod = index % 10
      for (let i = 0; i <= this.parseNum; i++) {
        for (let j = 0; j <= this.mod; j++) {
          arr.push(i.toString() + j.toString())
        }
      }
      this.hightlightArr = arr.map(res => {
        return parseInt(res)
      })
    },
    clickSpan(element) {
      this.addComponentItem(element)
    },
    // 生成元数据
    productionMetadata() {
      this.$emit('productionMetadata', this.drawingList)
    },
    // 设置回显的值
    setEditData(list = [], formList = []) {
      this.drawingList = list
      this.activeFormItem(this.drawingList[0])
    },
    // 设置宽度
    setColWidth() {
      let arr = []
      for (let i = 0; i < this.formInline.colNum; i++) {
        arr.push({
          name: '',
          color: 'none',
          colSpan: 12,
          borderStyle: '1px solid red',
          widthStr: 100 / this.formInline.colNum + '%',
          children: [
            { name: '', color: 'none', colSpan: 12, borderStyle: '1px solid red', widthStr: 100 + '%' },
            { name: '', color: 'none', colSpan: 12, borderStyle: '1px solid red', widthStr: 100 + '%' },
            { name: '', color: 'none', colSpan: 12, borderStyle: '1px solid red', widthStr: 100 + '%' }
          ]
        })
      }
      return arr
    },
    onSubmit() {
      this.formTableList = []
      for (let i = 0; i <= this.formInline.spanNum - 1; i++) {
        this.formTableList.push({
          name: '',
          color: 'none',
          colSpan: 12,
          widthStr: '100%',
          borderStyle: '1px solid red',
          children: this.setColWidth()
        })
      }
      this.rowItemObj.isDrag ? this.onEndItem(this.dragObj) : this.addComponentItem(this.rowItemObj)
      this.rowTableDialog = false
    },
    setObjectValueReduce(obj, strKeys, data) {
      const arr = strKeys.split('.')
      arr.reduce((pre, item, i) => {
        if (arr.length === i + 1) {
          pre[item] = data
        } else if (!isObjectObject(pre[item])) {
          pre[item] = {}
        }
        return pre[item]
      }, obj)
    },
    setRespData(component, resp) {
      const { dataPath, renderKey, dataConsumer } = component.__config__
      if (!dataPath || !dataConsumer) return
      const respData = dataPath.split('.').reduce((pre, item) => pre[item], resp)

      // 将请求回来的数据，赋值到指定属性。
      // 以el-tabel为例，根据Element文档，应该将数据赋值给el-tabel的data属性，所以dataConsumer的值应为'data';
      // 此时赋值代码可写成 component[dataConsumer] = respData；
      // 但为支持更深层级的赋值（如：dataConsumer的值为'options.data'）,使用setObjectValueReduce
      this.setObjectValueReduce(component, dataConsumer, respData)
      const i = this.drawingList.findIndex(item => item.__config__.renderKey === renderKey)
      if (i > -1) this.$set(this.drawingList, i, component)
    },
    fetchData(component) {
      const { dataType, method, url } = component.__config__
      if (dataType === 'dynamic' && method && url) {
        this.setLoading(component, true)
        axios({
          method,
          url
        }).then(resp => {
          this.setLoading(component, false)
          this.setRespData(component, resp.data)
        })
      }
    },
    setLoading(component, val) {
      const { directives } = component
      if (Array.isArray(directives)) {
        const t = directives.find(d => d.name === 'loading')
        if (t) t.value = val
      }
    },
    activeFormItem(currentItem) {
      this.activeData = currentItem
      this.activeId = currentItem.__config__.formId
    },
    onEnd(obj) {
      if (tempActiveData.__config__.layout === 'gdTable') {
        this.rowTableDialog = true
        this.rowItemObj = JSON.parse(JSON.stringify(tempActiveData))
        this.dragObj = obj
        this.rowItemObj.isDrag = true
        return
      }
      // debugger
      this.onEndItem(obj)
    },
    onEndItem(obj) {
      if (obj.from !== obj.to) {
        this.fetchData(tempActiveData)
        this.activeData = tempActiveData
        this.activeId = this.idGlobal
      }
    },
    addComponent(item) {
      if (item.__config__.layout === 'gdTable') {
        this.rowItemObj = JSON.parse(JSON.stringify(item))
        this.rowItemObj.isDrag = false
        return
      }
      this.addComponentItem(item)
    },
    addComponentItem(item) {
      const clone = this.cloneComponent(item)
      this.fetchData(clone)
      this.drawingList.push(clone)
      this.activeFormItem(clone)
    },
    cloneComponent(origin) {
      const clone = deepClone(origin)
      const config = clone.__config__
      config.span = this.formConf.span // 生成代码时，会根据span做精简判断
      this.createIdAndKey(clone)
      clone.placeholder !== undefined && (clone.placeholder += config.label)
      tempActiveData = clone
      return tempActiveData
    },
    createIdAndKey(item) {
      const config = item.__config__
      config.formId = ++this.idGlobal
      config.renderKey = `${config.formId}${+new Date()}` // 改变renderKey后可以实现强制更新组件
      if (config.layout === 'colFormItem') {
        item.__vModel__ = `field${this.idGlobal}`
      } else if (config.layout === 'rowFormItem') {
        config.componentName = `row${this.idGlobal}`
        !Array.isArray(config.children) && (config.children = [])
        delete config.label // rowFormItem无需配置label属性
      }
      if (Array.isArray(config.children)) {
        config.children = config.children.map(childItem => this.createIdAndKey(childItem))
      }
      return item
    },
    AssembleFormData() {
      this.formData = {
        fields: deepClone(this.drawingList),
        ...this.formConf
      }
    },
    generate(data) {
      const func = this[`exec${titleCase(this.operationType)}`]
      // this.generateConf = data
      func && func(data)
    },
    execRun(data) {
      this.AssembleFormData()
      this.drawerVisible = true
    },
    execDownload(data) {
      // const codeStr = this.generateCode()
      this.generateCode()
      // this.rowTableDialog = true
      // return
      // const blob = new Blob([codeStr], { type: 'text/plain;charset=utf-8' })
      // saveAs(blob, data.fileName)
    },
    execCopy(data) {
      document.getElementById('copyNode').click()
    },
    empty() {
      this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(() => {
        this.drawingList = []
        this.idGlobal = 100
      })
    },
    drawingItemCopy(item, list) {
      let clone = deepClone(item)
      clone = this.createIdAndKey(clone)
      list.push(clone)
      this.activeFormItem(clone)
    },
    drawingItemDelete(index, list) {
      list.splice(index, 1)
      this.$nextTick(() => {
        const len = this.drawingList.length
        if (len) {
          this.activeFormItem(this.drawingList[len - 1])
        }
      })
    },
    generateCode() {
      const { type } = this.generateConf
      this.AssembleFormData()
      const scriptTemplate = vueScript(makeUpJs(this.formData, type))
      const htmlTemplate = vueTemplate(makeUpHtml(this.formData, type))
      const cssTemplate = cssStyle(makeUpCss(this.formData))
      const script = beautifier.js(makeUpJs(this.formData, type), beautifierConf.js)
      const html = beautifier.html(makeUpHtml(this.formData, type), beautifierConf.html)
      const css = beautifier.css(makeUpCss(this.formData, type), beautifierConf.html)
      const vueTemlate = beautifier.html(htmlTemplate + scriptTemplate + cssTemplate, beautifierConf.html)
      this.$emit('templateData', { html, css, script, drawingList: this.drawingList, vueTemlate })
      localStorage.setItem('templateHtml', html)
      localStorage.setItem('templateCss', css)
      localStorage.setItem('templateJs', script)
      return vueTemlate
    },
    showJson() {
      this.AssembleFormData()
      this.jsonDrawerVisible = true
    },
    download() {
      this.execDownload()
    },
    run() {
      this.showFileName = false
      this.operationType = 'run'
      this.generate(this.generateConf)
    },
    copy() {
      // this.dialogVisible = true
      this.showFileName = false
      this.operationType = 'copy'
      this.generate(this.generateConf)
    },
    tagChange(newTag) {
      newTag = this.cloneComponent(newTag)
      const config = newTag.__config__
      newTag.__vModel__ = this.activeData.__vModel__
      config.formId = this.activeId
      config.span = this.activeData.__config__.span
      this.activeData.__config__.tag = config.tag
      this.activeData.__config__.tagIcon = config.tagIcon
      this.activeData.__config__.document = config.document
      if (typeof this.activeData.__config__.defaultValue === typeof config.defaultValue) {
        config.defaultValue = this.activeData.__config__.defaultValue
      }
      Object.keys(newTag).forEach(key => {
        if (this.activeData[key] !== undefined) {
          newTag[key] = this.activeData[key]
        }
      })
      this.activeData = newTag
      this.updateDrawingList(newTag, this.drawingList)
    },
    updateDrawingList(newTag, list) {
      const index = list.findIndex(item => item.__config__.formId === this.activeId)
      if (index > -1) {
        list.splice(index, 1, newTag)
      } else {
        list.forEach(item => {
          if (Array.isArray(item.__config__.children)) this.updateDrawingList(newTag, item.__config__.children)
        })
      }
    },
    refreshJson(data) {
      this.drawingList = deepClone(data.fields)
      delete data.fields
      this.formConf = data
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/home';
@import '../../styles/index';
.gridDataFormLeft span {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  background: #f8f8f8;
  border: 1px solid #e9e9e9;
}
.gridDataFormLeft .hightLightActive {
  background: #ddeafb;
  border: 1px solid #c3d9ff;
}
</style>
