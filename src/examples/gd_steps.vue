<template>
  <div>
    <gd-steps :data="stepsData" :current="currentStep"></gd-steps>
    <el-button @click="currentStep++">下一步</el-button>
    <el-button @click="currentStep--">上一步</el-button>
  </div>
</template>

<script>
export default {
  name: "gd_steps",
  data() {
    return {
      stepsData: [{
        id: "1",
        value: "1",
        label: "基本信息",
        icon: "el-icon-delete-solid",
      }, {
        id: "2",
        value: "2",
        label: "功能服务",
        icon: "el-icon-platform-eleme",
      }, {
        id: "3",
        value: "3",
        label: "数据服务服务",
        icon: "el-icon-s-tools",

      }],
      currentStep: 0
    };
  },
  components: {
  },
  methods: {
  }
};
</script>
