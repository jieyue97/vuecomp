<template>
  <div>
    <p :style="style" v-for="(item, index) in data" :key="index">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContentList',
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

<style lang="scss" scoped>
p {
  margin: 8px 0;
  padding-left: 15px;
  position: relative;
}
p::before {
  content: '';
  position: absolute;
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #000;
  left: 0;
  top: 6px;
  border-radius: 3px;
}
</style>
