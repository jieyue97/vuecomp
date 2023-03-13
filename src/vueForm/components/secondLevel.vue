<template>
  <h2 :style="style">{{ data }}</h2>
</template>

<script>
export default {
  name: 'SecondLevel',
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
h2 {
  margin: 18px 0;
}
</style>
