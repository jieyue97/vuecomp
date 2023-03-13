<template>
  <h1 :style="style">{{ data }}</h1>
</template>

<script>
export default {
  name: 'FirstLevel',
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
h1 {
  margin-bottom: 21px;
}
</style>
