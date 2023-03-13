



<template>
  <div class="avue-contail">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top ref="top" />
    </div>
    <div class="avue-layout">
      <div class="avue-left">
        <sidebar />
      </div>
      <div class="avue-main">
        <tags ref="tagRef" v-show="siberMenuConfig.isNeedTag" />
        <div
          style="
            height: calc(100% - 48px);
            overflow-y: auto;
            padding:20px;
            overflow-x: hidden;
          "
          id="avue-view"
        >
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" :inline="true" class="demo-ruleForm">
            <el-row>
              <el-form-item label="系统标题" prop="menuTitle">
                <el-input v-model="ruleForm.menuTitle" @input="menuTitleChange" style="width:100%"></el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="需要子标题" prop="needChildTitle">
                <el-switch v-model="ruleForm.needChildTitle" @change="switchChildTitle"></el-switch>
              </el-form-item>
              <el-form-item v-show="ruleForm.needChildTitle" label="子标题" prop="menuTitle">
                <el-input v-model="ruleForm.menuChildTitle" @input="menuChildTitleChange"></el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="头部背景颜色" prop="background">
                <el-color-picker v-model="ruleForm.background" @change="topColorChange"></el-color-picker>
              </el-form-item>
              <el-form-item label="左边背景颜色" prop="backgroundLeft">
                <el-color-picker v-model="ruleForm.backgroundLeft" @change="leftColorChange"></el-color-picker>
              </el-form-item>
              <el-form-item label="需要tag" prop="isNeedTag">
                <el-switch v-model="ruleForm.isNeedTag" @change="switchChange"></el-switch>
              </el-form-item>
              <el-form-item label="需要伸缩按钮" prop="isNeedCollage">
                <el-switch v-model="ruleForm.isNeedCollage" @change="switchChangeCollage"></el-switch>
              </el-form-item>
              <el-form-item label="需要全屏" prop="needFullScreen">
                <el-switch v-model="ruleForm.needFullScreen" @change="switchFullScreen"></el-switch>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="菜单展示方式" prop="menuShowType">
                <el-radio-group v-model="ruleForm.menuShowType" @change="radioChange">
                  <el-radio label="平铺"></el-radio>
                  <el-radio label="下拉"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click="reset" size="small">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- <div class="avue-shade" @click="showCollapse"></div> -->
  </div>
</template>

<script>
import tags from './layout/TagsView'
import top from './layout/top/'
import sidebar from './layout/sidebar/'
import siberMenuConfig from './layout/siber-menu.config'
export default {
  components: {
    top,
    tags,
    sidebar
  },
  provide() {
    return {}
  },
  data() {
    return {
      activeName: 'first',
      siberMenuConfig: siberMenuConfig,
      ruleForm: {
        isNeedTag: true,
        isNeedCollage: true,
        menuTitle: '基础运维',
        needChildTitle: true,
        menuChildTitle: '基础运维4.0',
        background: 'rgb(50, 87, 153)',
        needFullScreen: true,
        menuShowType: '平铺',
        backgroundLeft: '#20222a'
      }
    }
  },
  created() {},
  mounted() {},
  computed: {
    ifSideBar() {
      return false
    }
  },
  props: [],
  methods: {
    reset() {
      this.ruleForm = {
        isNeedTag: true,
        isNeedCollage: true,
        menuTitle: '基础运维',
        needChildTitle: true,
        menuChildTitle: '基础运维4.0',
        background: 'rgb(50, 87, 153)',
        needFullScreen: true,
        menuShowType: '平铺',
        backgroundLeft: '#20222a'
      }
      this.$refs.top.navObjs.background = 'rgb(50, 87, 153)'
      this.$refs.top.navObjs.backgroundLeft = '#20222a'
      this.$refs.top.navObjs.menuShowType = 'topMenu'
      this.$refs.top.navObjs.menuTitle = '基础运维'
      this.$refs.top.navObjs.menuChildTitle = '基础运维4.0'
      this.$refs.top.navObjs.needFullScreen = true
      this.siberMenuConfig.isNeedTag = true
      this.$refs.tagRef.siberMenuConfig.isNeedCollage = true
    },
    topColorChange(val) {
      this.$refs.top.navObjs.background = this.ruleForm.background
    },
    leftColorChange(val) {
      this.$refs.top.navObjs.backgroundLeft = this.ruleForm.backgroundLeft
    },
    radioChange(val) {
      this.$refs.top.navObjs.menuShowType = this.ruleForm.menuShowType === '平铺' ? 'topMenu' : 'topList'
    },
    menuTitleChange(val) {
      this.$refs.top.navObjs.menuTitle = this.ruleForm.menuTitle
    },
    menuChildTitleChange(val) {
      this.$refs.top.navObjs.menuChildTitle = this.ruleForm.menuChildTitle
    },
    switchFullScreen(val) {
      this.$refs.top.navObjs.needFullScreen = this.ruleForm.needFullScreen
    },
    switchChildTitle(val) {
      if (!val) {
        this.ruleForm.menuChildTitle = ''
      } else {
        this.ruleForm.menuChildTitle = '基础运维4.0'
      }
      this.$refs.top.navObjs.menuChildTitle = this.ruleForm.menuChildTitle
    },
    switchChange(val) {
      this.siberMenuConfig.isNeedTag = this.ruleForm.isNeedTag
    },
    switchChangeCollage(val) {
      this.$refs.tagRef.siberMenuConfig.isNeedCollage = this.ruleForm.isNeedCollage
    }
  }
}
</script>
<style>
.avue-contail {
  width: 100%;
  height: 600px;
  background: #f0f2f5;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
.avue-left {
  position: absolute;
  left: 0;
  top: 54px;
  width: 240px;
  height: calc(100% - 54px);
  z-index: 1025;
}
.avue-main {
  position: absolute;
  left: 240px;
  padding: 0;
  width: calc(100% - 240px);
  height: calc(100% - 54px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background: #f0f2f5;
  z-index: 1026;
}
</style>
