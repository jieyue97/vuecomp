<template>
  <div class="property-panel" ref="propertyPanel">
    <el-form :inline="false" :model="form" size="small" label-position="left" label-width="100px">
      <template v-if="hideGateway(isNeedHideFlow, form.$type)">
        <div>
          <el-form-item label="节点类型">
            <el-input v-model="form.$type" disabled></el-input>
          </el-form-item>
          <el-form-item label="节点ID">
            <el-input v-model="form.id" @input="onProperties('id', form.id)"></el-input>
          </el-form-item>
          <el-form-item label="节点名称">
            <el-input v-model="form.name" @input="onProperties('name', form.name)"></el-input>
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="form.bgColor" @change="colorChange"></el-color-picker>
          </el-form-item>
          <el-form-item label="边框颜色">
            <el-color-picker v-model="form.fontColor" @change="fontColorChange"></el-color-picker>
          </el-form-item>
          <!-- 只有人工任务 和子流程 才需要多实例类型 -->
          <el-form-item v-if="['bpmn:UserTask', 'bpmn:SubProcess'].includes(elementModel.type)" label="多实例类型">
            <el-select v-model="form.multiinstanceType" @change="onMultiInstance('multiinstanceType', form.multiinstanceType, elementModel.type)">
              <el-option value="None" label="无"></el-option>
              <el-option value="Paranell" label="并行"></el-option>
              <el-option value="Sequential" label="顺序"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点排序">
            <el-input type="Number" v-model="form.sequencefloworder" @input="onProperties('sequencefloworder', form.sequencefloworder)"></el-input>
          </el-form-item>

          <el-form-item v-if="['bpmn:CallActivity'].includes(elementModel.type)" label="选择子流程">
            <gd-selectTree
              ref="selectTree"
              @getValue="checkChange"
              :curValue="form.calledElement"
              :data="callActivityData"
              :obj="callActivityObj"
              checkStrictly
              filterable
              collapseTags
              :defaulexpand="false"
            />
          </el-form-item>
          <slot name="extend" :row="form"></slot>
        </div>
      </template>
      <!-- 额外补充插槽 -->
    </el-form>
  </div>
</template>

<script>
import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate,
  classes as svgClasses
} from 'tiny-svg';
import bpmnRenderer from 'bpmn-js/lib/draw/BpmnRenderer'
export default {
  name: "NodePropertyPanel",
  props: {
    /**
     * BpmnModeler设计器对象
     */
    modeler: {
      type: Object,
      required: true
    },
    isNeedHideFlow: {
      type: Array,
      default: () => {
        return ['bpmn:SequenceFlow']
      }
    },
    processData: {
      type: Array,
      default: () => {
        return []
      }
    },
    callActivityData: {
      type: Array,
      default: () => {
        return []
      }
    },
    callActivityObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    hideGateway() {
      return (data, res) => {
        if (data.includes(res)) {
          return false
        }
        return true
      }
    }
  },
  data() {
    return {
      form: {
        id: '',
        overrideid: "",
        name: "",
        sequencefloworder: "",
        //调用活动绑定数据
        calledElement: '',
        multiinstanceType: "None",
        color: null
      },
      elementModel: {},
      fontElement: null,
    };
  },
  mounted() {
    this.handleModeler();
  },
  methods: {
    //下拉树
    checkChange(val) {
      // this.onProperties
      this.onProperties('calledElement', val)
    },
    // 任务
    onMultiInstance(keys, value, type) {
      console.log(type, 'onMultiInstance');
      let loopCharacteristics = this.modeler.get('moddle').create('bpmn:MultiInstanceLoopCharacteristics')
      //并行
      if (value === 'Paranell') {
        loopCharacteristics['isSequential'] = false
        loopCharacteristics['$attrs']['isSequential'] = false
      }
      //顺序
      if (value === 'Sequential') {
        loopCharacteristics['isSequential'] = true
        // loopCharacteristics['$attrs']['isSequential'] = true
      }
      if (value === 'None') {
        delete this.elementModel.businessObject.loopCharacteristics
      } else {
        loopCharacteristics['$attrs']['flowable:collection'] = '${counterSignService.getUsers(execution)}'
        const completionCondition = this.modeler.get('moddle').create('bpmn:Expression', { body: '${counterSignService.isComplete(execution)}' })
        loopCharacteristics['completionCondition'] = completionCondition
        this.updateProperties({ loopCharacteristics: loopCharacteristics })
      }
      if (type == 'bpmn:UserTask') {
        const obj = {}
        obj[keys] = value
        this.updateProperties(obj)
      }
    },
    // 节点联动表单
    onProperties(key, value) {
      const params = {}
      params[key] = value
      this.updateProperties(params)
    },
    // 节点参数回调
    handleModeler() {
      const self = this

      //点击组件事件
      this.modeler.on("selection.changed", e => {
        const elementModel = e.newSelection[0];
        if (!elementModel) {
          return;
        }
        this.elementModel = elementModel;
        this.form = {
          ...elementModel.businessObject,
          ...elementModel.businessObject.$attrs
        };
        if (!this.form.sequencefloworder) {
          this.onProperties('sequencefloworder', 999)
        }
        if (this.form.userType === "candidateUsers") {
          this.form["candidateUsers"] = this.form["candidateUsers"].split(",") || [];
        }
        //开始节点赋值
        if (elementModel.type == 'bpmn:StartEvent') {
          if (!this.form.name) {
            this.onProperties('name', '开始')
          }
        }
        //结束节点赋值
        if (elementModel.type == 'bpmn:EndEvent') {
          if (!this.form.name) {
            this.onProperties('name', '结束')
          }
        }
        //调用活动添加自定义属性
        if (elementModel.type === 'bpmn:CallActivity') {
          this.onProperties('flowable:calledElementType', 'id')
        }
        //颜色初始化
        this.form.bgColor = elementModel.businessObject.di.fill || '#ffffff';
        this.form.fontColor = elementModel.businessObject.di.stroke || '#000000';
        this.fontElement = elementModel
      });

      //组件创建之后执行 这样初始化之后,依然可以通过控制面板更改颜色
      this.modeler.on("commandStack.shape.create.postExecuted", e => {
        //开始事件
        if (e.context.shape.type === 'bpmn:StartEvent') {
          this.initColor(e.context.shape, '#10F250', '#169310')
          //结束事件
        } else if (e.context.shape.type === 'bpmn:EndEvent') {
          this.initColor(e.context.shape, '#F50000', '#AA0F0F')
          // 人工任务 设置默认颜色
        } else if (e.context.shape.type === 'bpmn:UserTask') {
          this.initColor(e.context.shape, '#F1D8D8', '#000000')
        }
        //设置子流程默认展开状态    isExpanded
        else if (e.context.shape.type === 'bpmn:SubProcess') {
          e.context.shape.businessObject.di['isExpanded'] = true
          //设置子流程默认的大小
          e.context.shape.width = 300
          e.context.shape.height = 200
        }


      })
      //监听连线删除完成时 connection.removed
      this.modeler.on("connection.remove", e => {
        //遍历所有元素,判断单一网关和包含网关的连线是否只有一条,如果是的话 则删除return 语句和自定义标签
        const modeling = this.modeler.get("modeling");
        const allEl = self.modeler.get('elementRegistry')['_elements']
        for (let key in allEl) {
          if (allEl[key].element.type == 'bpmn:ExclusiveGateway' || allEl[key].element.type == 'bpmn:InclusiveGateway') {
            //需要延时,不然会存在非法调用报错
            this.$nextTick(() => {
              if (allEl[key].element.outgoing.length == 1) {
                //删除对象
                modeling.updateProperties(allEl[key].element.outgoing[0], { conditionExpression: null })
              }
            })

          }
        }
      })
      //连线创建后执行
      this.modeler.on("commandStack.connection.create.postExecuted", e => {
        //从哪里出来
        // 获取 所有的元素
        // const allEl = self.modeler.get('elementRegistry')['_elements']
        //只有单一网关和包含网关添加语句
        if (e.context.connection.source.type === 'bpmn:ExclusiveGateway' || e.context.connection.source.type === 'bpmn:InclusiveGateway') {
          if (e.context.connection.source.outgoing.length != 1) {
            const conditionExpression = this.modeler.get('moddle').create('bpmn:FormalExpression', { body: 'return exclusiveGatewayScript.handleMultiSend(nodeId,excutionId,mutliSendJSONData);' });
            const modeling = this.modeler.get("modeling");
            const arrEl = e.context.connection.source.outgoing
            arrEl.forEach((i) => {
              console.log(i, 'i');
              modeling.updateProperties(i, { conditionExpression: conditionExpression });
            })
          }
        }
      })
      //  监听节点属性变化
      this.modeler.on("element.changed", e => {
        const { element } = e;
        if (!element) {
          return;
        }
        //  新增节点需要更新回属性面板
        if (element.id === this.form.id) {
          this.form.name = element.businessObject.name;
          this.form = { ...this.form };
          // 是否是人工任务或者调用活动
        }
      });
    },

    // 查找匹配的节点元素
    getElementByAttr(tag, dataAttr, reg) {
      const aElements = document.getElementsByTagName(tag);
      const aEle = []
      for (var i = 0; i < aElements.length; i++) {
        const ele = aElements[i].getAttribute(dataAttr);
        if (ele === reg) {
          aEle.push(aElements[i]);
        }
      }
      return aEle;
    },
    // 初始化颜色调用
    /**
    * elemt  当前元素
    * bgcolor 背景颜色
    *  color 边框颜色 以及字体颜色
    */
    initColor(elemt, bgcolor, color) {
      const modeling = this.modeler.get("modeling");
      modeling.setColor(elemt, {
        fill: bgcolor,
        stroke: color
      });
      // modeling.updateProperties(elemt, { color: color });
    },

    // 属性面板颜色，更新回流程节点 //背景颜色
    colorChange(color) {
      const modeling = this.modeler.get("modeling");
      //设置背景颜色
      modeling.setColor(this.elementModel, {
        fill: color
      });
      // modeling.updateProperties(this.elementModel, { color: color });
    },
    //字体颜色,
    fontColorChange(color) {
      const modeling = this.modeler.get("modeling");
      //人工任务  调用活动 子流程
      // if (this.fontElement.type == 'bpmn:UserTask' || this.fontElement.type == 'bpmn:CallActivity' || this.fontElement.type == 'bpmn:SubProcess') {
      modeling.setColor(this.elementModel, {
        stroke: color
      });
      // }
      // this.fontElement.businessObject.di.label['color'] = color
    },
    // 在这里我们封装一个通用的更新节点属性的方法
    updateProperties(data) {
      const modeling = this.modeler.get("modeling");
      modeling.updateProperties(this.elementModel, data);
    }
  }
};
</script>

<style lang="scss">
.property-panel {
  width: 100%;
  height: 100%;
  .el-form-item {
    border-bottom: solid 1px #e1e1e1;
    padding-bottom: 10px;
  }
}
</style>
