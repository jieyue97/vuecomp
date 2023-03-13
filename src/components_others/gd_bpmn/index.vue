
<template>
  <div ref="jsDropZone">
    <div class="gd-flow-all" :style="{ height: flowHeight }">
      <div :style="{ height: flowHeight }">
        <!--头部事件-->
        <gd-title-tool :is-padding="false" :bgColor="'#fff'">
          <template slot="label">
            <div class="btn-padding">
              <el-button type="text" size="small" icon="el-icon-document" @click="onSave">保存</el-button>
              <el-button type="text" size="small" icon="el-icon-download" @click="onDownloadXml">下载XML</el-button>
              <el-button type="text" size="small" icon="el-icon-download" @click="onDownloadSvg">下载Svg</el-button>
              <el-button type="text" size="small" icon="el-icon-picture-outline-round" @click="onResetAll">重置</el-button>
              <!-- <el-button type="text" size="small" :icon="isLookXml ? 'el-icon-edit-outline' : 'el-icon-view'" @click="onLook">{{ isLookXml ? '编辑xml' : '查看流程图' }}</el-button> -->
            </div>
          </template>
        </gd-title-tool>
        <!--画布-->
        <el-tabs v-model="tabName" type="card" class="bpmn-tab-contain" @tab-click="hanldChange">
          <el-tab-pane label="流程绘制" name="bpmn">
            <div class="containers" :class="{ 'containers-scale': scaleShow }" ref="containers">
              <!-- 右侧工具栏 -->
              <div class="tool_bpmn">
                <el-button-group>
                  <el-button type="primary" size="small" icon="el-icon-finished" @click="onHandleSyntaxCheck" title="语法校验" style="color: #fff" v-if="ifSyntaxCheck">
                  </el-button>
                  <el-button
                    v-if="simulation"
                    type="text"
                    size="small"
                    :icon="this.simulationStatus ? 'el-icon-video-pause' : 'el-icon-video-play'"
                    @click="processSimulation"
                    :title="this.simulationStatus ? '退出模拟运行' : '模拟运行'"
                  ></el-button>
                  <el-button type="text" size="small" icon="el-icon-refresh-left" @click="onHandleUndo" title="撤销"></el-button>
                  <el-button type="text" size="small" icon="el-icon-refresh-right" @click="onHandleRedo" title="恢复"></el-button>
                  <el-button type="text" size="small" icon="el-icon-zoom-in" @click="onHandleZoom('in')" title="放大"></el-button>
                  <el-button type="text" size="small" icon="el-icon-zoom-out" @click="onHandleZoom('out')" title="缩小"></el-button>
                  <el-button type="text" size="small" icon="el-icon-refresh" @click="onHandleZoom('lowering')" title="还原"></el-button>
                  <el-button type="text" size="small" icon="el-icon-open" @click="scaleShow = !scaleShow" title="刻度"></el-button>
                  <el-button type="text" size="small" icon="el-icon-map-location" @click="onOpenMinMap" title="鹰眼"></el-button>

                  <!-- <el-button type="text" size="small" icon="el-icon-setting" title="设置颜色">
                    <el-color-picker class="el-color_btn" @active-change="colorChange" @change="onChangeColor"></el-color-picker>
                  </el-button> -->
                </el-button-group>

                <div class="bpmn-error-box" v-if="newErrorList.length" v-loading="errorLoading">
                  <div class="header">
                    错误总数:
                    <span style="font-weight: bold; color: rgb(245, 108, 108)"> {{ newErrorList.length }} </span>
                    <el-button class="closeBtn" type="text" size="small" icon="el-icon-circle-close" @click="closeBtn" title="关闭"> </el-button>
                  </div>
                  <div class="box-conten">
                    <div v-for="(o, index) in newErrorList" :key="index" class="list">
                      <div style="margin-right: 5px">
                        <i class="el-icon-error" style="color: rgb(245, 108, 108)"></i>
                      </div>
                      <div>
                        {{ o.msg }}
                      </div>
                    </div>
                  </div>
                  <div style="padding: 5px; clear: both; height: 25px">
                    <el-button type="primary" size="mini" style="color: #fff; font-size: 12px; float: right" @click="onHandleSyntaxCheck">再次校验</el-button>
                  </div>
                </div>
              </div>
              <div class="canvas" :class="{ 'canvas-scale': scaleShow }" ref="canvas" @mousewheel="mousewheel"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="编辑源码" name="seeXml" v-if="isLookXml">
            <MonacoEditor theme="vs-dark" :key="randomkey" language="xml" @mounted="onEditorMounted" :editorOptions="options" @codeChange="onChange" :code="code"></MonacoEditor>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div :style="{ height: flowHeight }" class="gd-flow-right">
      <!--右边栏-->
      <div class="gd-right">
        <el-tabs v-model="activeName">
          <el-tab-pane label="节点属性" name="first">
            <div class="active-class">
              <node-property-panel
                v-if="bpmnModeler"
                :modeler="bpmnModeler"
                :processData="processData"
                :callActivityData="callActivityData"
                :callActivityObj="callActivityObj"
                @elementClick="elementClick"
                ref="processNode"
              >
                <template slot="extend" slot-scope="scope">
                  <!-- 额外补充插槽 -->
                  <div>
                    <slot name="extendNode" :row="scope.row"></slot>
                  </div>
                </template>
              </node-property-panel>
            </div>
          </el-tab-pane>
          <el-tab-pane label="流程属性" name="second">
            <div class="active-class">
              <process-property-panel ref="panel" :process-data="process" :process-form="processOtherForm">
                <template slot="process" slot-scope="scope">
                  <div>
                    <slot name="process" :row="scope.row"></slot>
                  </div>
                </template>
              </process-property-panel>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler' // 引入 bpmn-js
// 模拟流转流程
import tokenSimulation from 'tl-hh-bpmn-js-simulation';
import minimapModule from 'diagram-js-minimap' // 引入 小地图
import "diagram-js-minimap/assets/diagram-js-minimap.css";
// import customPalette from './palette'
import customModule from './palette'
import BpmData from "./palette/BpmData"
import NodePropertyPanel from "./NodePropertyPanel"; // 属性面板
import ProcessPropertyPanel from "./ProcessPropertyPanel";
// 翻译方法
import customTranslate from "./translate/Translate";
import translationsCN from "./translate/TranslationsGerman";

// 其他工具
import vkbeautify from 'vkbeautify'
import Hljs from 'highlight.js'

// highlight.css
import 'highlight.js/styles/atom-one-dark.css'

/*左边工具栏以及编辑节点的样式*/
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

//引入 在线编辑工具 以及美化代码工具
import MonacoEditor from 'vue-monaco-editor';
let bpmnText = ''

export default {
  props: {
    downloadFileName: {
      type: String,
      default: () => {
        return new Date().getTime().toString()
      }
    },
    processName: {
      type: String,
      default: '流程gd-flow',
    },
    processKey: {
      type: String,
      default: 'processGdKeys',
    },
    processDescription: {
      type: String,
      default: '',
    },
    // 流程其他屬性初始值
    processOtherForm: {
      type: Object,
      default: () => {
        return {}
      }
    },
    //是否开启模拟流转
    simulation: {
      type: Boolean,
      default: true
    },
    bpmnXmlStr: {
      type: String,
      default: '',
    },
    flowHeight: {
      type: String,
      default: () => {
        return window.screen.height - 182 + 'px'
      }
    },
    isLookXml: {
      type: Boolean,
      default: false
    },
    //是否需要语法校验
    ifSyntaxCheck: {
      type: Boolean,
      default: false
    },
    //语法校验错误信息
    /**
     * 返回的数据格式
     * [{
     * msg:'123'
     * },{
     * msg:456}
     * ]
     */
    errorList: {
      type: Array,
      default: () => {
        return []
      }
    },
    //调用活动数据
    callActivityData: {
      type: Array,
      default: () => {
        return []
      }
    },
    //调用活动数据的配置选项 转换树节点
    callActivityObj: {
      type: Object,
      default: () => {
        return {
          id: 'id',
          label: 'label',
          children: 'children',
        }
      }
    }
  },
  components: {
    NodePropertyPanel,
    ProcessPropertyPanel,
    vkbeautify,
    MonacoEditor
  },
  name: "GdBpmn",
  // 自定义指令
  directives: {
    highlight: (el) => {
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        Hljs.highlightBlock(block)
      })
    }
  },
  data() {
    return {
      //模拟运行按钮状态
      simulationStatus: false,
      showColor: false,  //颜色取值框
      code: '', //编码值
      editor: null, //定义编辑器
      randomkey: 1231234, //随机取值 生成key  一定要key 唯一,否则编辑器的数据渲染不出来
      options: {  //编辑器属性
        selectOnLineNumbers: false,
        readOnly: false,

      },
      xmlTitle: '查看Xml',
      xmlContent: '',
      // xmlOpen: false,
      processData: [],
      scaleShow: true,
      activeName: 'first',
      tabName: 'bpmn',
      isShowFrom: true,
      bpmData: new BpmData(),
      process: {
        name: this.processName,
        process_id: this.processKey,
        description: this.processDescription,
      },
      xml: '',
      svg: '',
      newScale: 1,
      configTab: 'node',
      nodeProcessSelect: null,
      xmlVisible: false,
      element: null,
      bpmnModeler: null,
      bpmnXml: '',
      xmlZoom: 1,
      htmlCode: '',
      //定义数据 两次数据不一致可赋值编辑
      editKey: 1,
      newEditKey: 1,
      //缓存 报错信息
      newErrorList: [],
      errorLoading: false,
      minMap: false,
    }
  },
  created() {
    bpmnText = `<?xml version="1.0" encoding="UTF-8"?>
        <bpmn2:definitions
         xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
          xmlns:flowable="http://flowable.org/bpmn"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:xsd="http://www.w3.org/2001/XMLSchema"
           xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC"
            xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0"
            xmlns:flowable="http://flowable.org/bpmn"
            xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
             xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn"
              xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
          <bpmn2:process id="${this.processKey}" name="${this.processName}">
            <bpmn2:documentation>${this.processDescription}</bpmn2:documentation>
          </bpmn2:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process1567044459787">
              <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                <dc:Bounds x="242" y="212" width="36" height="36"/>
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="247" y="263" width="25" height="14"/>
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        <processType id="test"/></bpmn2:definitions> `
  },
  mounted() {
    let flag = true
    this.$nextTick(() => {
      this.init()
      this.addDom()
      this.canvasViewBox()
      // 点击切换 不同的icon 控制元素面板隐藏显示
      if (document.getElementsByClassName("djs-palette-toggle")) {
        document.getElementsByClassName("djs-palette-toggle")[0].addEventListener("click", function () {
          if (flag) {
            document.getElementsByClassName("bpmn-toogle-icon")[0].classList.remove('el-icon-caret-top')
            flag = false
            document.getElementsByClassName("bpmn-toogle-icon")[0].classList.add('el-icon-caret-bottom')
            document.getElementsByClassName("djs-palette")[0].style['width'] = '60px'
          } else {
            document.getElementsByClassName("bpmn-toogle-icon")[0].classList.remove('el-icon-caret-bottom')
            flag = true
            document.getElementsByClassName("bpmn-toogle-icon")[0].classList.add('el-icon-caret-top')
            document.getElementsByClassName("djs-palette")[0].style['width'] = '130px'
          }
        });
      }
    })
  },
  methods: {
    onOpenMinMap() {
      this.minMap = !this.minMap
      if (this.minMap) {
        this.bpmnModeler.get("minimap").open();
      } else {
        this.bpmnModeler.get("minimap").close();
      }
    },
    //模拟运行
    processSimulation() {
      this.simulationStatus = !this.simulationStatus;
      this.bpmnModeler.get("toggleMode").toggleMode();
      //初始化工具栏
      this.adjustPalette()
    },
    // 关闭语法校验弹窗
    closeBtn() {
      this.newErrorList = []
    },
    //语法校验
    onHandleSyntaxCheck() {
      this.errorLoading = true
      let _self = this
      //获取画布的xml 抛出
      this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        if (err) { return }
        _self.$emit('syntaxCheckClick', xml)
      })
    },
    //tab面板切换
    hanldChange(val) {
      if (val.name == 'seeXml') {
        this.onLook()
      } else {
        //根据 editKey 是否修改过 判断里面的值是否变过
        if (this.editKey != this.newEditKey) {
          this.bpmnXml = this.code
          //初始化画布;
          this.createNewDiagram()
          //改变值 下次判断可用
          this.newEditKey = this.editKey
        }
      }
    },
    //编辑器修改的数据 保存起来 赋值给画布
    onChange(value) {
      this.editKey++
      this.code = this.editor.getValue()
    },

    onEditorMounted(editor) {
      this.editor = editor
    },
    //生成随机key
    createRamdomKey() {
      return Math.floor(Math.random() * (10, 1000000012313));
    },
    //获取编码数据
    onLook() {
      const vm = this
      vm.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        if (err) { return }
        vm.xmlContent = xml
        vm.code = xml
        vm.randomkey = this.createRamdomKey()
        // vm.xmlOpen = true;
      })
    },
    elementClick(row) {
      this.$emit('elementClick', row)
    },
    canvasViewBox() {
      const box = {
        x: 0,
        y: 0,
        width: 500,
        height: 500
      }
      this.bpmnModeler.get("canvas").getAbsoluteBBox(box)
    },
    // 动态生成dom
    addDom() {
      const canvas = this.$refs.canvas;
      const djsPalette = canvas.children[0].children[1]
      // const djsContainer = document.getElementsByClassName('bjs-container')[0]
      let dom = document.createElement("div");
      dom.id = 'dragLeft'
      dom.style = 'position: absolute;left: 0;top: 0;width: 10px;height: 10px;background-color: #00afff;display: none'
      djsPalette.appendChild(dom)
    },
    // 获取整个流程节点form
    getPanelData() {
      return this.$refs.panel.form
    },
    // 为节点设置参数
    updateProperties(key, value) {
      const params = {}
      params[key] = value
      this.$refs.processNode.updateProperties(params)
    },
    // 初始化
    init() {
      this.bpmnXml = this.bpmnXmlStr || bpmnText
      // // // 去除默认工具栏
      // const modules = BpmnModeler.prototype._modules
      // const index = modules.findIndex(it => it.paletteProvider)
      // modules.splice(index, 1)

      this.bpmnModeler = new BpmnModeler({
        container: this.$refs.canvas,

        additionalModules: [
          minimapModule,
          customModule,
          //注入模拟流程扭转的插件
          tokenSimulation,
          {
            // // 禁用滚轮滚动
            zoomScroll: ['value', ''],
            // // 禁止拖动线
            // bendpoints: ['value', ''],
            translate: ["value", customTranslate(translationsCN)]
          }
        ],

      })
      try {
        this.createNewDiagram()
        // 调整在正中间
        this.bpmnModeler.get('canvas').zoom('fit-viewport', 'auto')
      } catch (err) {
        console.log('error rendering', err)
      }
      // // 新增流程定义
    },
    // 创建画布
    async createNewDiagram() {
      // console.log('111', this.bpmnModeler);
      this.processData = []
      const bpmnXmlStr = this.bpmnXml
      // 将字符串转换成图显示出来   
      // this.bpmnModeler.importXML(bpmnXmlStr, (err) => {
      //   if (err) {
      //     console.error(err, 'err')
      //   } else {
      //     console.log('....');
      //     this.adjustPalette();
      //   }
      // })
      //换一个方式加载 避免数据加载 报异常

      // const modeler = new BpmnJS();

      try {
        const result = await this.bpmnModeler.importXML(bpmnXmlStr);
        const { warnings } = result;
        this.adjustPalette();
        console.log(warnings);
      } catch (err) {
        console.log(err.message, '报错');
      }
    },
    // 调整左侧工具栏排版
    adjustPalette() {
      try {
        // 获取 bpmn 设计器实例
        const canvas = this.$refs.canvas;
        //找到当前组件,更改样式
        const djsPalette = canvas.children[0].children[1].children[10];
        const djsPalStyle = {
          width: "130px",
          padding: "5px",
          background: "white",
          left: "20px",
          borderRadius: "8px"
        };
        for (var key in djsPalStyle) {
          djsPalette.style[key] = djsPalStyle[key];
        }
        const palette = djsPalette.children[0];
        //创建新icon 控制元素栏 显示隐藏
        const togglePalette = djsPalette.children[1]
        togglePalette.style['display'] = 'block';
        togglePalette.title = '显示/隐藏工具栏'
        //判断当前元素是否存在 避免创建多个
        if (!document.getElementsByClassName("bpmn-toogle-icon")[0]) {
          const toogleIcon = document.createElement('i');
          toogleIcon.className = 'bpmn-toogle-icon el-icon-caret-top'
          togglePalette.appendChild(toogleIcon)
        }
        const allGroups = palette.children;
        allGroups[0].style["display"] = "none";
        // 修改控件样式
        for (let gKey in allGroups) {
          const group = allGroups[gKey];
          for (let cKey in group.children) {
            const control = group.children[cKey];
            const controlStyle = {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              padding: "5px"
            };
            if (
              control.className &&
              control.dataset &&
              control.className.indexOf("entry") !== -1
            ) {
              const controlProps = this.bpmData.getControl(
                control.dataset.action
              );
              control.innerHTML = `<div style='font-size: 14px;font-weight:500;margin-left:15px;'>${controlProps["title"]}</div>`;
              if (controlProps['tooltip']) {
                control.title = controlProps['tooltip'];
              }
              //隐藏部分组件
              if (controlProps["title"] === '中间事件') {
                controlStyle.display = 'none'
              }
              if (cKey === '0' && !controlProps["title"]) {
                allGroups[gKey].style["display"] = 'none'
              }
              for (var csKey in controlStyle) {
                control.style[csKey] = controlStyle[csKey];
              }
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    // 实时保存
    onSave() {
      if (this.simulationStatus) {
        this.$message.error('请先退出模拟运行,再保存!')
        return
      }
      const vm = this
      vm.bpmnModeler.saveXML({ format: true }, (err, xml) => {
        if (err) { return }
        vm.bpmnXml = xml
        const elementRegistry = vm.bpmnModeler.get('elementRegistry');
        vm.$emit('onSave', xml, elementRegistry, 'saveXML')
      })
      vm.bpmnModeler.saveSVG({ format: true }, (err, data) => {
        if (err) { return }
        const elementRegistry = vm.bpmnModeler.get('elementRegistry');
        vm.$emit('onSave', data, elementRegistry, 'saveSVG')
      })
    },
    // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(type, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data);
      if (data) {
        if (type === 'XML') {
          // 获取到图的xml，保存就是把这个xml提交给后台
          this.xml = data;
          return {
            filename: this.downloadFileName + '.xml',
            href: "data:application/bpmn20-xml;charset=UTF-8," + encodedData,
            data: data
          }
        }
        if (type === 'SVG') {
          this.svg = data;
          return {
            filename: this.downloadFileName + '.svg',
            href: "data:application/text/xml;charset=UTF-8," + encodedData,
            data: data
          }
        }
      }
    },
    // 下载xml
    onDownloadXml() {
      if (this.simulationStatus) {
        this.$message.error('请先退出模拟运行,下载xml!')
        return
      }
      const that = this;
      this.bpmnModeler.saveXML({ format: true }, function (err, xml) {
        if (err) {
          console.error(err);
          return
        }
        let { filename, href } = that.setEncoded('XML', xml);
        if (href && filename) {
          let a = document.createElement('a');
          a.download = filename; //指定下载的文件名
          a.href = href; //  URL对象
          a.click(); // 模拟点击
          URL.revokeObjectURL(a.href); // 释放URL 对象
        }
      });
    },
    // 下载svg
    onDownloadSvg() {
      if (this.simulationStatus) {
        this.$message.error('请先退出模拟运行,下载svg!')
        return
      }
      const that = this;
      this.bpmnModeler.saveSVG(function (err, svg) {
        if (err) {
          console.error(err);
          return
        }
        let { filename, href } = that.setEncoded('SVG', svg);
        if (href && filename) {
          let a = document.createElement('a');
          a.download = filename;
          a.href = href;
          a.click();
          URL.revokeObjectURL(a.href);
        }
      });
    },
    // 前进
    onHandleRedo() {
      //由于初始化颜色边框等需要3步 所以前进的时候运行三遍 用个for循环
      for (let index = 0; index < 3; index++) {
        this.bpmnModeler.get('commandStack').redo(2)
      }
    },
    // 后退
    onHandleUndo() {
      //由于初始化颜色边框等需要3步 所以回退的时候运行三遍 用个for循环
      for (let index = 0; index < 3; index++) {
        this.bpmnModeler.get('commandStack').undo(2)
      }
    },
    // 放大缩小
    onHandleZoom(radio) {
      // 放大
      if (radio === 'in') {
        this.newScale += 0.2
      }
      // 缩小
      if (radio === 'out') {
        this.newScale -= 0.2
      }
      // 还原为最初
      if (radio === 'lowering') {
        this.newScale = 1
      }
      this.bpmnModeler.get('canvas').zoom(this.newScale)
    },
    // 画布鼠标滚轮事件
    mousewheel() {
      // 获取画布缩放登记
      this.newScale = this.bpmnModeler.get('canvas').zoom()
      // 最小等级0.6
      if (this.newScale <= 0.6) {
        this.newScale = 0.6
      }
    },
    // 重置为空白
    onResetAll() {
      if (this.simulationStatus) {
        this.$message.error('请先退出模拟运行,下载xml!')
        return
      }
      //重置的时候同时把数据初始化
      this.code = ''
      this.bpmnXml = this.bpmnXmlStr || bpmnText
      this.createNewDiagram()
    },
    // 节点颜色设置
    // colorChange(color) {
    //   this.$refs.processNode.colorChange(color)
    // },
    // onChangeColor(row) {
    //   if (!row) {
    //     this.$refs.processNode.colorChange('')
    //   }
    // },
  },
  watch: {
    'process.newScale': {
      handler(val) {
        this.$nextTick(() => {
          // // 设置刻度尺放大缩小等级
          this.$refs.containers.style.backgroundSize = val * 50 + 'px ' + val * 50 + 'px'
          this.$refs.canvas.style.backgroundSize = val * 10 + 'px ' + val * 10 + 'px'
        })
      }
    },
    'errorList': {
      handler(val) {
        this.newErrorList = []
        if (val.length) {
          this.newErrorList = val
        }
        this.errorLoading = false
      },
      immediate: true
    }
  }
}
</script>
<style>
@import 'tl-hh-bpmn-js-simulation/assets/css/bpmn-js-token-simulation.css';
@import 'tl-hh-bpmn-js-simulation/assets/css/font-awesome.min.css';
@import 'tl-hh-bpmn-js-simulation/assets/css/normalize.css';
.djs-cursor-grab {
  cursor: default;
}
</style>
<style lang="scss">
@font-face {
  font-family: 'bpmn';
  src: url('./font/bpmn.eot?60831326');
  src: url('./font/bpmn.eot?60831326#iefix') format('embedded-opentype'), url('./font/bpmn.woff?60831326') format('woff'), url('./font/bpmn.ttf?60831326') format('truetype'),
    url('./font/bpmn.svg?60831326#bpmn') format('svg');
  font-weight: normal;
  font-style: normal;
}
.bpmn-tab-contain {
  background-color: #ffffff;
  width: 100%;
  height: calc(100% - 40px);
  .containers {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    position: relative;
    // 隐藏工具栏右侧任务按钮 //事件网关 //复杂网关
    .bpmn-icon-task,
    .bpmn-icon-gateway-complex,
    .bpmn-icon-gateway-eventbased {
      display: none;
    }
    .toggle-mode {
      display: none;
    }
    .djs-palette {
      .djs-palette-entries {
        //隐藏第一个手抓 创建子任务组
        .group:nth-of-type(1),
        .group:nth-of-type(4) {
          display: none;
        }
        //隐藏部分组件
        .group {
          // 创建中间事件  任务节点 创建对象引用 创建数据存储引用 创建组
          .bpmn-icon-intermediate-event-none,
          .bpmn-icon-task,
          .bpmn-icon-data-object,
          .bpmn-icon-data-store,
          .bpmn-icon-group {
            display: none;
          }
        }
      }
    }
    .djs-palette .djs-palette-toggle {
      cursor: pointer;
      &:hover {
        background: #fff;
      }
      i {
        &:hover {
          color: #4d90ff;
        }
      }
    }
    .canvas {
      width: 99.98%;
      height: 100%;
    }
    .bjs-powered-by {
      display: none;
    }
    .tool_bpmn {
      z-index: 1;
      position: absolute;
      background: #fff;
      border: 1px solid #eee;
      right: 10px;
      top: 10px;
      opacity: 0.9; //透明度, 避免遮挡流程图
      border-radius: 4px;
      border-right: none;
      .el-button {
        font-size: 16px;
        padding: 5px;
        border-right: 1px solid #eee;
        color: #666;
        &:hover {
          color: #4d90ff;
        }
      }
    }
  }
}
//tab 标签样式修改
.bpmn-tab-contain > .el-tabs__content {
  width: 99.98%;
  height: calc(100% - 56px);
}
.bpmn-tab-contain > .el-tabs__content > .el-tab-pane {
  height: 100%;
}
.bpmn-tab-contain > .el-tabs__header .el-tabs__nav {
  border-top: none !important;
}
/* app.css */
.icon-custom {
  /* 定义一个公共的类名 */
  border-radius: 50%;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-custom.lindaidai-task {
  /* 加上背景图 */
  background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png');
}
.bjs-container {
  height: 100%;
}
.canvas-scale {
  background-image: linear-gradient(90deg, rgba(241, 243, 244, 1) 10%, transparent 0), linear-gradient(rgba(241, 243, 244, 1) 10%, transparent 0);
  background-size: 10px 10px;
}
.containers-scale {
  background-image: linear-gradient(90deg, rgba(241, 243, 244, 1) 5%, transparent 0), linear-gradient(rgba(241, 243, 244, 1) 5%, transparent 0);
  background-size: 50px 50px;
}
.gd-flow-all {
  width: 79.3%;
  position: relative;
  overflow: hidden;
  border: 1px solid #cbd0d4;
  border-top: 0;
  float: left;
  /deep/ .el-color-picker--small .el-color-picker__trigger {
    width: 36px;
  }
}
.gd-flow-right {
  width: 20.3%;
  border: 1px solid #cbd0d4;
  border-left: none;
  border-top: none;
  float: left;
}
.gd-flow-right {
  .gd-right {
    .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
      padding-left: 10px !important;
    }
  }
}

.btn-padding {
  padding: 3px 0px 3px 10px;
}
.gd-right {
  height: 100%;
  border-top: 1px solid #cbd0d4;
}
.active-class {
  padding: 0 10px;
  height: 100%;
}
// .el-color_btn {
//   position: absolute !important;
//   bottom: 0;
//   left: 0;
//   opacity: 0;
//   .el-color-picker__trigger {
//     height: 30px;
//     width: 33px;
//     top: 12px;
//   }
// }
.bpmn-error-box {
  position: absolute;
  left: -4px;
  top: 31px;
  max-width: 230px;
  z-index: 2;
  color: #666;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  font-size: 14px;
  text-align: left;
  font-family: 'Microsoft YaHei';
  .header {
    font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    min-width: 200px;
    clear: both;
    .closeBtn {
      color: rgb(245, 108, 108) !important;
      float: right;
      padding: 2px 0 !important;
      border-right: none !important;
      &:hover {
        i {
          color: rgb(255, 0, 0);
          font-weight: bold;
        }
      }
    }
  }
  .box-conten {
    max-height: 250px;
    overflow-y: auto;
    .list {
      border-bottom: 1px dashed #eee;
      padding: 5px;
      display: flex;
    }
  }
}
.containers.with-error .canvas {
  visibility: hidden;
}

.containers.with-diagram .canvas {
  visibility: visible;
}
.djs-minimap.open {
  width: 400px !important;
  height: 260px !important;
  right: 5px !important;
  top: 38px !important;
}
.djs-minimap > .toggle {
  display: none;
}
</style>
