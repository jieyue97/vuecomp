<template>
  <p :style="style">{{ data }}</p>
</template>

<script>
export default {
  name: 'ContentPage',
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
  margin: 5px 0;
  font-size: 15px;
}
</style>
