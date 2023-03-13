<template>
  <div v-if="currentClosed" v-show="!currentMinimized" class="ns-dialog__wrapper" :class="wrapperClasses" :style="wrapperStyles" @click="handleClick">
    <transition name="el-fade-in">
      <div v-if="currentClosed && !currentMinimized && modal && !inline" class="ns-dialog__modal"></div>
    </transition>
    <transition name="el-fade-in" @after-enter="afterEnter" @after-leave="afterLeave">
      <el-container
        v-if="currentClosed"
        v-show="!currentMinimized"
        v-resizable="resizableOptions"
        v-draggable="draggableOptions"
        class="ns-dialog"
        :class="classes"
        :style="styles"
      >
        <el-header
          v-if="hasHeader"
          class="ns-dialog__header"
          :height="headerHeight"
          :style="{
            cursor: 'pointer',
            'background-color': themeColor,
            ...headerStyle,
          }"
        >
          <slot name="icon" />
          <div class="ns-dialog__title">
            <slot name="title" />
            <span :style="{ color: titleColor ? titleColor : '#fff' }" style="font-weight: bolder">{{ title }}</span>
          </div>
          <div class="ns-dialog__tools">
            <slot name="tools"></slot>
            <span v-if="collapsible" class="ns-dialog__tool" @click="handleCollapsed">
              <i :style="{ color: titleColor ? titleColor : '#fff' }" v-if="currentCollapsed" :class="icons[0]"></i>
              <i :style="{ color: titleColor ? titleColor : '#fff' }" v-else :class="icons[1]"></i>
            </span>

            <span v-if="minimizable" class="ns-dialog__tool" @click="handleMinimized">
              <i :style="{ color: titleColor ? titleColor : '#fff' }" :class="icons[2]">最小</i>
            </span>
            <span v-if="maximizable" class="ns-dialog__tool" @click="handleMaximized">
              <!-- <img v-if="currentMaximized" style="width: 16px" src="./images/normal-svg.svg" alt="" />
              <img v-else style="width: 16px" src="./images/max-svg.svg" alt="" /> -->
              <i
                :style="{ color: titleColor ? titleColor : '#fff' }"
                :class="currentMaximized ? 'icon iconfont-gdzjk icon-gdzjkzuixiaohua' : 'icon iconfont-gdzjk icon-gdzjkzuidahua'"
              ></i>
            </span>

            <span v-if="closable" class="ns-dialog__tool" @click="handleClosed">
              <!-- <img style="width: 16px; margin-top: 4px; margin-left: 5px" src="./images/close.svg" alt="" /> -->
              <i :style="{ color: titleColor ? titleColor : '#fff' }" :class="icons[5]"></i>
            </span>
          </div>
        </el-header>
        <el-main class="ns-dialog__body" :style="gdDialogBody">
          <div v-if="!hasHeader" class="ns-dialog__tool" style="text-align: right" @click="handleClosed">
            <i :style="{ color: titleColor ? titleColor : '#fff' }" :class="icons[5]"></i>
          </div>
          <slot></slot>
        </el-main>
        <el-footer
          v-if="$slots.footer"
          class="ns-dialog__footer"
          :class="{ 'ns-dialog-border-top': hasHeader }"
          :height="footerHeight"
          :style="{ textAlign: btnTextAlign, lineHeight: '36px' }"
        >
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </transition>
  </div>
</template>

<script>
import '../../assets/iconfont-gdzjk/iconfont.css'
import '../../assets/iconfont-gdzjk/iconfont'
import '../../assets/iconfont-gdzjk/iconfont.js'
/**
 * 窗体弹框组件
 * @module widgets/ns-dialog
 * @author 程卫拓
 */
import draggable from '../../untils/draggable/draggable'
import resizable from '../../untils/draggable/resizable'

/**
 * 插槽
 * @member slots
 * @property {string} default 窗体内容
 * @property {string} title 定义标题内容，设置了改插槽，参数title将无效
 * @property {string} tools 定义操作按钮
 * @property {string} footer 定义底部内容
 */

/**
 * @export
 */
export default {
  name: 'GdDialog',
  directives: {
    draggable,
    resizable,
  },
  /**
   * 属性参数
   * @property {string} [title] 标题文字, 为null时即不显示头部
   * @property {string} [icon] 标题旁边的图标样式名称
   * @property {string} [width=auto] 窗体宽度
   * @property {string} [height=auto] 窗体高度
   * @property {string} [left=null] 窗体左位置，inline为true是无效， left、top同时为null时，自动居中
   * @property {string} [top=null] 窗体顶位置，inline为true是无效， left、top同时为null时，自动居中
   * @property {boolean} [closable=true] 是否显示关闭按钮
   * @property {boolean} [collapsible=false] 是否显示折叠按钮
   * @property {boolean} [maximizable=false] 是否显示最大化按钮
   * @property {boolean} [minimizable=false] 是否显示最小化按钮
   * @property {boolean} [closed=false] 是否关闭状态，支持sync修饰符进行双向绑定
   * @property {boolean} [collapsed=false] 是否折叠收起状态，支持sync修饰符进行双向绑定
   * @property {boolean} [minimized=false] 是否最小化状态，支持sync修饰符进行双向绑定
   * @property {boolean} [maximized=false] 是否最大化状态，支持sync修饰符进行双向绑定
   * @property {boolean} [modal=true] 是否显示遮罩层，inline为true是无效
   * @property {boolean|object} [draggable=true] 窗体支持拖拽配置参数, 参数对象参考[v-draggable]{@link module:utils/directives/draggable}
   * @property {boolean|object} [resizable=true] 窗体支持改变尺寸配置参数, 设置该参数，必须要设置width和height 参数对象参考[v-resizable]{@link module:utils/directives/resizable}
   * @property {string} [headerHeight=40px] 头部高度
   * @property {string} [footerHeight=40px] 底部高度
   * @property {number} [zIndex=1000] 窗体层级
   * @property {boolean} [shadow=true] 是否显示窗体阴影
   * @property {boolean} [inline=false] 是否以内联方式显示
   * @property {Array} [icons] 图标数组
   * @property {string} [titleColor] 标题与图标颜色
   * @property {string} [btnTextAlign] 底部按钮的位置left center right
   */
  props: {
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 标题图标
    icon: {
      type: String,
      default: '',
    },
    // 宽度
    width: {
      type: [String, Number],
      default: 'auto',
    },
    themeColor: {
      type: String,
      default: 'rgb(30, 129, 241)',
    },
    // 高度
    height: {
      type: [String, Number],
      default: 'auto',
    },
    // 最大高度
    maxHeight: {
      type: [String, Number],
      default: 'auto',
    },
    // 左位置
    left: {
      type: [String, Number],
      default: null,
    },
    // 上位置
    top: {
      type: [String, Number],
      default: null,
    },
    // 能否关闭
    closable: {
      type: Boolean,
      default: true,
    },
    // 能否折叠
    collapsible: {
      type: Boolean,
      default: false,
    },
    // 能否最大化
    maximizable: {
      type: Boolean,
      default: false,
    },
    // 能否最小化
    minimizable: {
      type: Boolean,
      default: false,
    },
    // 是否关闭
    closed: {
      type: Boolean,
      default: true,
    },
    // 是否折叠
    collapsed: {
      type: Boolean,
      default: false,
    },
    // 是否最小化
    minimized: {
      type: Boolean,
      default: false,
    },
    // 是否最大化
    maximized: {
      type: Boolean,
      default: false,
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: true,
    },
    // 是否开启拖拽
    draggable: {
      type: [Boolean, Object],
      default: false,
    },
    // 是否能改变尺寸
    resizable: {
      type: [Boolean, Object],
      default: false,
    },
    // 头部高度
    headerHeight: {
      type: String,
      default: '50px',
    },
    // 底部高度
    footerHeight: {
      type: String,
      default: '50px',
    },
    // 层级
    zIndex: {
      type: Number,
      default: 2000,
    },
    // 边框是否需要阴影
    shadow: {
      type: Boolean,
      default: true,
    },
    // 是否以内联方式显示
    inline: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    icons: {
      type: Array,
      default() {
        return ['el-icon-caret-bottom', 'el-icon-caret-top', 'iconfont icon-mini', 'iconfont icon-mid', 'iconfont icon-full', 'el-icon-close']
      },
    },
    // 标题的内容的颜色（文字与图标）
    titleColor: {
      type: String,
      default: () => {
        return ''
      },
    },
    // footer的位置（左left，中center，右right）
    btnTextAlign: {
      type: String,
      default: () => {
        return 'right'
      },
    },
    // 尺寸大小固定值，big（800px）、default（600px）、small（400px）、
    size: {
      type: String,
      default: () => {
        return 'default'
      },
    },
    // 自定义头部样式
    headerStyle: {
      type: Object,
      default: () => {},
    },
    // 自定义头部样式
    gdDialogBody: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currentCollapsed: this.collapsed,
      currentMinimized: this.minimized,
      currentMaximized: this.maximized,
      currentClosed: this.closed,
    }
  },
  computed: {
    hasHeader() {
      let isFalse = true
      if (!this.title) {
        isFalse = false
      }
      return isFalse
    },
    wrapperClasses() {
      return {
        'is-inline': this.inline,
      }
    },
    wrapperStyles() {
      return {
        'z-index': this.zIndex,
        height: this.inline ? this.height : 'auto',
      }
    },
    classes() {
      return {
        'is-center': !this.inline && !this.resizable && this.left === null && this.top === null,
        'is-minimized': this.currentMinimized,
        'is-maximized': this.currentMaximized,
        'is-collapsed': this.currentCollapsed,
        'is-shadow': this.shadow,
        'is-inline': this.inline,
      }
    },
    styles() {
      let style = {}
      if (this.currentMaximized) {
        style = {
          left: 0,
          top: 0,
        }
        if (this.currentCollapsed) {
          style.height = this.headerHeight
        }
        return style
      }

      style = {
        width: this.width,
        height: this.currentCollapsed ? this.headerHeight : this.height,
        'max-height': this.maxHeight,
      }
      if (this.width === 'auto') {
        style['width'] = this.size === 'big' ? '800px' : this.size === 'default' ? '600px' : '400px'
      }
      if (this.resizable) {
        const clientWidth = window.innerWidth
        const clientHeight = window.innerHeight
        // style.height = style.height === 'auto' ? 500 : style.height
        // style.width = style.width === 'auto' ? 500 : style.width
        style.left = this.left || `${(clientWidth - parseInt(style.width) || 0) / 2}px`
        style.top = this.top || `${(clientHeight - (parseInt(style.height) || 0)) / 2}px`
      } else {
        if (this.left !== null) style.left = this.left
        if (this.top !== null) style.top = this.top
      }
      return style
    },
    draggableOptions() {
      if (this.title === null || this.inline) {
        return false
      }
      /* eslint-disable */
      return this.draggable
        ? Object.assign(
            {
              handle: '.ns-dialog__header',
              onStartDrag: (e) => {
                /**
                 * 开始拖拽时触发
                 * @event on-start-drag
                 * @param {object} e 拖拽事件对象
                 */
                this.$emit('on-start-drag', e)
              },
              onStopDrag: (e) => {
                /**
                 * 拖拽结束时触发
                 * @event on-stop-drag
                 * @param {object} e 拖拽事件对象
                 */
                this.$emit('on-stop-drag', e)
              },
              onDrag: (e) => {
                /**
                 * 正在拖拽时触发
                 * @event on-drag
                 * @param {object} e 拖拽事件对象
                 */
                this.$emit('on-drag', e)
              },
            },
            this.draggable
          )
        : false
    },
    resizableOptions() {
      /* eslint-disable */
      return this.resizable
        ? Object.assign(
            {
              // minWidth: 100,
              // minHeight: 41,
              onStartResize: (e) => {
                /**
                 * 开始改变尺寸时触发
                 * @event on-start-resize
                 * @param {object} e resize事件对象
                 */
                this.$emit('on-start-resize', e)
              },
              onStopResize: (e) => {
                /**
                 * 改变尺寸结束时触发
                 * @event on-stop-resize
                 * @param {object} e resize事件对象
                 */
                this.$emit('on-stop-resize', e)
              },
              onResize: (e) => {
                /**
                 * 正在改变尺寸时触发
                 * @event on-resize
                 * @param {object} e resize事件对象
                 */
                this.$emit('on-resize', e)
              },
            },
            this.resizable
          )
        : false
    },
  },
  watch: {
    collapsed(val) {
      this.currentCollapsed = val
    },
    minimized(val) {
      this.currentMinimized = val
    },
    maximized(val) {
      this.currentMaximized = val
    },
    closed(val) {
      this.currentClosed = val
      if (val) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
      if (!val && this.appendToBody && this.$el && !this.inline) {
        document.body.appendChild(this.$el)
      }
    },
  },
  mounted() {
    // debugger
    if (this.appendToBody && this.$el && !this.inline) {
      document.body.appendChild(this.$el)
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode && !this.inline) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    handleCollapsed() {
      this.currentCollapsed = !this.currentCollapsed
      this.$emit('update:collapsed', this.currentCollapsed)
      /**
       * collapsed改变时触发
       * @event on-collapsed
       * @param {boolean} collapsed 当前的collapsed
       */
      this.$emit('on-collapsed', this.currentCollapsed, this)
    },
    handleMinimized() {
      this.currentMinimized = true
      this.$emit('update:minimized', this.currentMinimized)
      /**
       * 最小化时触发
       * @event on-minimized
       */
      this.$emit('on-minimized', this)
    },
    handleMaximized() {
      this.currentMaximized = !this.currentMaximized
      this.$emit('update:maximized', this.currentMaximized)
      /**
       * 最化时触发
       * @event on-minimized
       */
      this.$emit('on-maximized', this.currentMaximized, this)
    },
    handleClosed() {
      this.currentClosed = false
      this.$emit('update:closed', this.currentClosed)
    },
    handleClick() {
      this.$emit('click', this)
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    },
  },
}
</script>
<style lang="scss" scoped>
.ns-dialog {
  position: fixed;
  background: #fff;
  z-index: 1001;
  border-radius: 4px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.dialog-footer {
  text-align: center;
}

.ns-dialog.is-inline {
  position: static;
}

.ns-dialog.is-shadow {
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.ns-dialog.is-center {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.ns-dialog.is-collapsed {
  overflow: hidden;
}

.ns-dialog.is-maximized {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: none !important;
  transform: none !important;
}

.ns-dialog.xdh-draggable--dragging,
.ns-dialog.xdh-resizable--resizing {
  -webkit-transition: unset;
  transition: unset;
}

.ns-dialog__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.ns-dialog__wrapper.is-inline {
  position: static;
}

.ns-dialog__modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.ns-dialog__header {
  clear: both;
  // height: 40px;
  // line-height: 40px;
  padding: 13px 20px;
  border-bottom: 1px solid #efefef;
  border-radius: 4px 4px 0 0;
}

.ns-dialog__header:after {
  content: '';
  display: table;
  clear: both;
}

.ns-dialog__icon {
  float: left;
  margin-right: 8px;
}

.ns-dialog__title {
  float: left;
  font-size: 16px;
}

.ns-dialog__tools {
  float: right;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ns-dialog__tools [class*=' el-icon-'],
.ns-dialog__tools [class^='el-icon-'] {
  font-size: 14px;
  top: 2px;
  padding: 0 3px;
  cursor: pointer;
}

.ns-dialog__tools .iconfont {
  font-size: 14px;
  padding: 0 3px;
  cursor: pointer;
}

.ns-dialog__tool {
  color: #606266;
  height: 16px;
  text-align: center;
  cursor: pointer;
}

.ns-dialog__tool:hover {
  color: #409eff;
}

.ns-dialog__tool [class*=' el-icon-'],
.ns-dialog__tool [class^='el-icon-'] {
  font-size: 18px;
  position: relative;
  top: 2px;
  padding: 0 2px;
  cursor: pointer;
}

.ns-dialog__tool .iconfont {
  font-size: 14px;
  padding: 0 5px;
  cursor: pointer;
  color: white;
}

.ns-dialog__body {
  padding: 12px 20px;
  height: calc(100% - 20px);
  position: relative;
}
.ns-dialog__close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.ns-dialog__footer {
  padding: 10px;
  margin: 10px 0;
  border-radius: 0 0 4px 4px;
  padding-right: 20px;
}
.ns-dialog-border-top {
  border-top: 1px solid #efefef;
}
</style>
