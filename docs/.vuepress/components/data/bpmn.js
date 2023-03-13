const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'downloadFileName',
        desc: '下载文件名称',
        paramsType: 'string',
        value: '--',
        defaultValue: '实时时间戳'
      },
      {
        name: 'processName',
        desc: '流程名称',
        paramsType: 'string',
        value: '--',
        defaultValue: '流程gd-flow'
      },
      {
        name: 'processKey',
        desc: '流程key',
        paramsType: 'string',
        value: '--',
        defaultValue: 'processGd-keys'
      },
      {
        name: 'processDescription',
        desc: '流程描述',
        paramsType: 'string',
        value: '--',
        defaultValue: '流程描述'
      },
      {
        name: 'ifSyntaxCheck',
        desc: '控制当前组件是否需要语法校验,当前语法校验是由后端进行校验,如果后端没有进行语法校验,建议此功能不要开启',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'simulation',
        desc: '是否开启模拟流转流程,默认是开启的',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'errorList',
        desc: '校验信息,数据格式为[{msg:报错}]',
        paramsType: 'array',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'callActivityData',
        desc: '调用活动的数据,数据格式树节点,数据为[{id:"",title:"",chlidren:[{}]}]',
        paramsType: 'array',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'callActivityObj',
        desc: '转义树节点数据格式,方便调用活动选择树形数据,数据为{id:"",label:"",children:""}',
        paramsType: 'object',
        value: '--',
        defaultValue: '{id: "id", label: "label", children: "children",}'
      },
      {
        name: 'bpmnXmlStr',
        desc: 'xmlStr字段，可根据后端传回来的xml字段进行set回显或者初始化',
        paramsType: 'string',
        value: '--',
        defaultValue: `
      <?xml version="1.0" encoding="UTF-8"?>
        <bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
          <bpmn2:process id="${this.processKey}" name="${this.processName}">
            <bpmn2:documentation>${this.processDescription}</bpmn2:documentation>
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
      `
      },
      {
        name: 'flowHeight',
        desc: ' 窗体高度， 可自定义',
        paramsType: 'string',
        value: '--',
        defaultValue: "window.screen.height - 182 + 'px'"
      }
    ]
  },
  {
    title: '插槽',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'extendNode',
        desc: '节点属性， 可自行添加，目前有节点类型，节点id，节点名称，节点排序四个固定属性',
        paramsType: 'string',
        value:
          '用法：<template slot="extendNode" slot-scope="scope">\n' +
          '               <div>\n' +
          '                 <el-form-item label="流程作者">\n' +
          '                   <el-input v-model="scope.row.creater" @input="onProperties(\'creater\', scope.row.creater)"></el-input>\n' +
          '                 </el-form-item>\n' +
          '               </div>\n' +
          '            </template>',
        defaultValue: ''
      },
      {
        name: 'process',
        desc: '流程属性， 目前有流程名称、流程Key属性，可自行添加',
        paramsType: 'string',
        value:
          '<template slot="process" slot-scope="scope">\n' +
          '              <div>\n' +
          '                <el-form-item label="年龄">\n' +
          '                  <el-input v-model="scope.row.age"></el-input>\n' +
          '                </el-form-item>\n' +
          '              </div>\n' +
          '            </template>',
        defaultValue: '--'
      }
    ]
  },
  {
    title: '事件',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'onSave',
        desc: '保存事件，返回三个参数(xml, data, type),xml:流程图的dom节点数据，data:流程图的节点属性数据，type：返回类型目前saveXml',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'syntaxCheckClick',
        desc: '点击校验按钮的回调,返回当前流程图的数据xml,需要自己进行数据校验,把校验信息回传到组件errorList',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'elementClick',
        desc: '点击节点回调，回调参数：当前选中节点的所含参数',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: '$refs[yourRefName].updateProperties',
        desc:
          '属性变更传参，比如“年龄”属性，如需绑定跟随节点变化，侧需要this.$refs[yourRefName].updateProperties(key, value)去同步节点参数，其中key：{age: 20}的age,value{age: 20}的20参数',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: '$refs[yourRefName].getPanelData',
        desc: '流程所有数据获取this.$refs[yourRefName].getPanelData()，返回流程数据Object',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
