<template>
  <span class="project-iconlist">
    <span v-if="showType === 'iconfont'" :class="`icon ${this.iconClass}`" :style="iconStyle"></span>
    <svg v-else :class="svgClass" :style="iconStyle" aria-hidden="true">
      <use :xlink:href="`#${svgClass}`"></use>
    </svg>
  </span>
</template>

<script>
import './iconfont-landBusiness/iconfont.css'
import './iconfont-landBusiness/iconfont.js'
export default {
  name: 'GdIconLandBusiness',
  data() {
    return {
      activeName: ''
    }
  },
  props: {
    iconClass: {
      type: String,
      required: true,
      default: 'iconfont-gdicon icongdui-zhibiao'
    },
    iconStyle: {
      type: Object,
      default: () => {
        return { width: '2em', height: '2em', color: '' }
      }
    },
    showType: {
      type: String,
      default: 'iconfont'
    }
  },
  computed: {
    svgClass() {
      const svgName = this.iconClass.split(' ')
      return svgName[1]
    },
    className() {
      return `icon ${this.iconClass}`
    }
  },
  methods: {
    getSvg() {}
  },
  mounted() {
    this.getSvg()
  }
}
</script>

<style scoped>
.svg-icon {
  width: 5em;
  height: 5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
