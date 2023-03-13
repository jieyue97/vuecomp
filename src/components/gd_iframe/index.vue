<template>
  <div id="frameCt" class="gd_content-iframe" v-loading="ifLoading">
    <iframe v-show="showIf" :id="iframeName" :style="iframeStyle" :name="iframeName" :src="iframeSrc" @load="handleLoad" />
    <slot name="extra"></slot>

    <div id="iframeDialog"></div>
  </div>
</template>

<script>
/**
 * @description iframe抽象
 */
export default {
  name: 'GdIframe',
  props: {
    src: {
      type: String,
      default: ''
    },
    showIframe: {
      type: Boolean,
      default: true
    },
    token: {
      type: String,
      default: ''
    },
    iframeStyle: {
      type: Object,
      default: () => {
        return {
          border: 'none',

          width: '100px',
          height: '100px'
        }
      }
    }

  },
  data() {
    return {
      ifLoading: true,
      messList: {},
      time: 0,
      // 多个iframe区别名
      iframeName: 'contentIframe' + new Date().valueOf(),
      taskId: ''
    }
  },
  computed: {
    iframeSrc() {
      return `${this.src}${this.src.includes('?') ? '&&' : '?'}token=${encodeURI(this.token)}&&t=${this.time}`
    },
    showIf() {
      return this.showIframe
    },
  },
  watch: {
    src(newVal) {
      if (newVal) {
        this.ifLoading = true
      }
    },
    ifParams(newVal) {
      if (Object.keys(newVal).length) {
        this.setIframeMessage('setParams', newVal)
      }
    }
  },
  beforeDestroy() {
    this.ifLoading = false

  },
  methods: {
    handleLoad() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.ifLoading = false
        }, 500)
      })
      const messKeys = Object.keys(this.messList)
      if (messKeys.length) {
        messKeys.forEach(key => {
          this.iframeMessage(key, this.messList[key])
        })
      }
    },
    setIframeMessage(funcName, params) {
      this.messList[funcName] = params
      this.time = new Date().valueOf()
    },
    iframeMessage(funcName, params) {
      const iframe = this.getIframeWindow()
      if (iframe && iframe[funcName]) {
        params.token = this.token
        params.appUrl = this.VUE_APP_BASE_API
        params.designUrl = this.VUE_APP_DESIGNER_URL
        params.iframeName = this.iframeName
        params.baseUrl = window.location.href.split('/#/')[0]
        iframe[funcName](params)
      } else {
        console.error(`找不到iframe[${this.iframeName}]的${funcName}方法实体`)
      }
    },
    getIframeWindow() {
      // 通过iframe区别名找到对应的iframe
      return document[this.iframeName] ? document[this.iframeName].window : document.getElementById(this.iframeName).contentWindow
    }
  }
}
</script>

<style lang="scss" scoped>
.gd_content-iframe {
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  overflow: hidden;

  .content-attach {
    padding: 3px 0 3px 3px;
  }
}
</style>
