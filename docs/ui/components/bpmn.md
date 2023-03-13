# 流程引擎组件 gd-bpmn

-- 业务流程图由一系列的图形化元素组成。这些元素简化了模型的开发，且业务分析者看上去非常熟悉。这些元素每个都有各自的特性，且与大多数的建模器类似。

### 基本用法

-- 基本的 xmlStr 传入，可更改节点颜色属性、可保存流程信息、自定义节点属性表单、自定义流程属性表单、下载 xml、下载 SVG 等操作,用法

![An image](/vuecomp/img/bpnm-js.png)

```js
/*
* 展示流程用法。
* 
*<template>
   <div>
     <gdBpmn :bpmnXmlStr='bpmnXmlStr'></gdBpmn>
   </div>
</template>
* 
* data() {
*    return {
*       bpmnXmlStr: '
      <?xml version="1.0" encoding="UTF-8"?>
        <bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
          <bpmn2:process id="id" name="name">
            <bpmn2:documentation>documentation</bpmn2:documentation>
            <bpmn2:startEvent id="StartEvent_01ydzqe" />
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
        <processType id="test"/></bpmn2:definitions>
      '
*    }
* }
* */

/*
基础用法
<template>
   <div>
     <gdBpmn @onSave="onSave">
       <template slot="extendNode" slot-scope="scope">
        <div>
          <el-form-item label="流程作者">
            <el-input v-model="scope.row.creater" @input="onProperties('creater', scope.row.creater)"></el-input>
          </el-form-item>
        </div>
       </template>
       <template slot="process" slot-scope="scope">
         <div>
           <el-form-item label="年龄">
              <el-input v-model="scope.row.age"></el-input>
           </el-form-item>
         </div>
      </template>
     </gdBpmn>
   </div>
</template>
 */

import gdBpmn from 'gd_vue_components/src/components_others/gd_bpmn' // 引入 bpmn-js
export default {
  name: 'gd-bpmn',
  data() {
    return {}
  },
  components: { gdBpmn },
  methods: {
    // 属性变更传值
    onProperties(key, value) {
      this.$refs.bpmnDom.updateProperties(key, value)
    },
    // 保存返回所有数据。
    onSave(xml, data, type) {
      console.log(xml, data, type)
    },
    // 获取流程属性参数
    getPanelData() {
      console.log(this.$refs.bpmnDom.getPanelData())
    },
  },
}
```

(<mdtable mdname='bpmn'></mdtable>)
