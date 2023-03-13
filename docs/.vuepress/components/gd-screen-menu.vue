<template>
  <div class="screen">
    <el-container style="height: 100%;">
      <el-aside width="200px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>大屏模板列表</span>
          </div>
          <div v-for="o in 2" :key="o" class="text item" :class="activeName === o ? 'active' : ''" @click="tabChange(o)">
            {{ '模板 ' + o }} <a :href="`/gdui/bigscreen/gd-screen${o}.zip`" :download="`gd-screen${o}.zip`" style="color: #083b70;float:right;font-size:14px">下载</a>
          </div>
        </el-card>
      </el-aside>
      <el-main style="position: relative;">
        <gd-screen1 v-show="activeName === 1"></gd-screen1>
        <gd-screen2 v-show="activeName === 2"></gd-screen2>
        <!-- <gd-screen3 v-show="activeName === 3"></gd-screen3> -->
        <!-- <div v-show="activeName === 2">暂无模板</div> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: `BigSrceenMenu`,
  data() {
    return {
      activeName: 1
    }
  },
  mounted() {},
  methods: {
    tabChange(num) {
      this.activeName = num
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  font-size: 16px;
  padding: 5px;
}
.item {
  margin-bottom: 18px;
  text-align: left;
  cursor: pointer;
}
.active {
  background-color: #409eff;
  color: white;
}
.screen {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  height: calc(100% - 60px);
}
</style>
