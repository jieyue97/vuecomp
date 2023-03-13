<template>
  <div class="demo-image__lazy">
    <el-image :style="style" v-for="url in data" :key="url" :src="url" lazy :preview-src-list="data"></el-image>
  </div>
</template>

<script>
export default {
  name: 'ContentImage',
  props: ['moduleObj', 'moduleId'],
  data() {
    return {
      data: '',
      style: {},
    }
  },
  mounted() {
    const moduleObj = this.$parent.moduleObj[this.moduleId]
    this.data = moduleObj.content
    if (moduleObj.style) {
      this.style = moduleObj.style
    }
  },
}
</script>

<style lang="scss" scoped></style>
