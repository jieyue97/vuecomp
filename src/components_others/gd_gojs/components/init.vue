<template>
  <div class="myDiagramDiv" ref="myDiagramDiv" :style="diagramStyle"></div>
</template>
<script>
import { go, $ } from '../utils/lib'
const defalutOptionObj = {
  initialContentAlignment: go.Spot.Center,
  initialPosition: new go.Point(0, 0),
  autoScale: go.Diagram.Uniform, //自适应
  // LinkDrawn: showLinkLabel,
  // LinkRelinked: showLinkLabel,
  // 'draggingTool.dragsLink': true,
  'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom, // 有鼠标滚轮事件放大和缩小，而不是向上和向下滚动
  allowCopy: false,
  // an unbound Part
  'draggingTool.isGridSnapEnabled': true,
  'linkingTool.isUnconnectedLinkValid': true,
  'linkingTool.portGravity': 20,
  'relinkingTool.isUnconnectedLinkValid': true,
  'relinkingTool.portGravity': 20,
  'rotatingTool.handleAngle': 270,
  'rotatingTool.handleDistance': 30,
  'rotatingTool.snapAngleMultiple': 15,
  'rotatingTool.snapAngleEpsilon': 15,
  'undoManager.isEnabled': true,
}
export default {
  name: 'GoInit',
  data() {
    return {
      myDiagram: {},
    }
  },
  props: {
    domId: {
      type: String,
      default: 'myDiagramDiv',
    },
    diagramStyle: {
      type: Object,
      default: () => {
        return {
          with: '100%',
          height: '100%',
        }
      },
    },
  },
  components: {},
  methods: {
    // 清除画布
    clearDiagram(diagram) {
      if (typeof diagram !== 'undefined') {
        diagram.div = null
      }
    },
    init(callBack) {
      console.log(typeof callBack)
      if (typeof callBack !== 'function') {
        console.error('初始化函数的入参必须是函数')
        return
      }

      var $ = go.GraphObject.make
      const argmentObj = callBack($, go)
      let defalutOption = argmentObj.defalutOption ? argmentObj.defalutOption : defalutOptionObj
      let domId = argmentObj.domId ? argmentObj.domId : 'myDiagramDiv'
      let style = argmentObj.style ? argmentObj.style : { width: '100%', height: '100%' }
      let goType = argmentObj.goType ? argmentObj.goType : go.Diagram
      const myDiagramDiv = this.$refs.myDiagramDiv
      var element = document.createElement('div')
      element.id = domId
      for (let i in style) {
        element.style[i] = style[i]
      }
      myDiagramDiv.appendChild(element)

      let myDiagram = $(goType, domId, defalutOption)

      this.myDiagram = myDiagram
      return {
        godata: go,
        myDiagram: this.myDiagram,
        $,
      }
    },
  },
  mounted() {},
}
</script>
<style lang="scss" scoped></style>
