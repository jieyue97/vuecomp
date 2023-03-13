<template>
  <h3 :style="style">{{ data }}</h3>
</template>

<script>
export default {
  name: 'ThirdLevel',
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
h3 {
  margin: 18px 0;
}
</style>
