
<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-button type="success" @click="getPanelData">获取流程数据</el-button>
      </el-col>
      <el-col :span="20">
        <div style="padding: 10px">
          <gdBpmn
            :simulation="true"
            :processOtherForm="{ age: 28, process_version: 1 }"
            isLookXml
            @onSave="onSave"
            ref="bpmnDom"
            ifSyntaxCheck
            @syntaxCheckClick="syntaxCheckClick"
            :errorList="errorList"
            :callActivityData="callActivityData"
            :callActivityObj="callActivityObj"
          >
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import gdBpmn from 'gd_vue_components/src/components_others/gd_bpmn' // 引入 bpmn-js
import gdBpmn from '../components_others/gd_bpmn'
export default {
  name: "gd_bpmn_item",
  data() {
    return {
      //语法校验错误信息
      errorList: [],
      callActivityObj:
      {
        id: 'id',
        label: 'title',
        children: 'children',
      }
      ,
      callActivityData: [
        {
          id: 2231,
          title: '一级 1',
          children: [
            {
              id: 4,
              title: '二级 1-1',
              children: [
                {
                  id: 9,
                  title: '三级 1-1-1'
                },
                {
                  id: 10,
                  title: '三级 1-1-2'
                }
              ]
            }
          ]
        },
      ]
    }
  },
  components: { gdBpmn },
  methods: {
    onProperties(key, value) {
      this.$refs.bpmnDom.updateProperties(key, value)
    },
    onSave(xml, data, type) {
      console.log(xml, data, type, '111');
    },
    getPanelData() {
      console.log(this.$refs.bpmnDom.getPanelData());
    },
    setChildShapes(data) {
      const params = {}
      return params
    },
    //获取画布xml 抛出
    syntaxCheckClick(val) {
      this.errorList = [
        {
          "msg": "可能xml格式有误,解析错误",
          "code": "XMLException"
        }, {
          "msg": "他头条",
          "code": "ttt"
        }
      ]
    }
  },
  created() {
    window.demo = this
  },
}
</script>
<style lang="scss">
</style>
