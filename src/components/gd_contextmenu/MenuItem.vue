<template>
  <li v-if="divider" class="my-contextmenu__divider"></li>
  <li v-else class="my-contextmenu__item" :class="classes" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click.prevent.stop="handleClick">
    <div class="my-contextmenu__left">
      <span class="my-contextmenu__icon">
        <i v-if="iconProps" :class="iconProps.name"></i>
      </span>
      <span class="my-contextmenu__label">{{ label }}</span>
    </div>
    <div class="my-contextmenu__right">
      <span v-if="info" class="my-contextmenu__info">{{ info }}</span>
      <i v-if="hasChild" class="my-contextmenu__arrow el-icon-caret-right"></i>
    </div>
    <slot v-if="active" :active="active" :children="children"></slot>
  </li>
</template>

<script>
export default {
  components: {},
  props: {
    icon: [String, Object],
    label: String,
    info: String,
    disabled: Boolean,
    divider: Boolean,
    children: Array
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    iconProps() {
      if (!this.icon) return null
      return typeof this.icon === 'object'
        ? this.icon
        : {
            name: this.icon
          }
    },
    classes() {
      if (this.disabled) {
        if (this?.children) {
          this.children.forEach(item => {
            item['disabled'] = true
          })
        }
      }
      return {
        'is-disabled': this.disabled,
        'is-has-child': this.hasChild
      }
    },
    hasChild() {
      return this.children && this.children.length > 0
    }
  },
  methods: {
    handleMouseEnter(e) {
      this.active = true
      if (this.hasChild) {
        this.$nextTick(() => {
          this.$emit('submenu', this)
        })
      }
    },
    handleMouseLeave(e) {
      this.active = false
    },
    handleClick(e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', this)
    }
  }
}
</script>
<style lang="scss" scoped>
.my-contextmenu__item {
  position: relative;
  padding: 0 8px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  clear: both;
  color: rgba(0, 0, 0, 0.85);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.my-contextmenu__item:hover {
  background: #1890ff;
  color: #e6f7ff;
}
.my-contextmenu__item.is-disabled {
  color: rgba(0, 0, 0, 0.45);
  cursor: not-allowed;
}
.my-contextmenu__item.is-disabled:hover {
  background: inherit;
  color: rgba(0, 0, 0, 0.45);
}
.my-contextmenu__item.is-has-child .my-contextmenu__info {
  padding-right: 0;
}
.my-contextmenu__item > .my-contextmenu__menu {
  position: absolute;
  left: 100%;
  top: 0;
  white-space: nowrap;
}
.my-contextmenu__item > .my-contextmenu__menu.is-left {
  left: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.my-contextmenu__item > .my-contextmenu__menu.is-bottom {
  bottom: 0;
  top: auto;
}
.my-contextmenu__divider {
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  margin: 2px 0;
  clear: both;
}
.my-contextmenu__label {
  margin-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: top;
}
.my-contextmenu__icon {
  width: 20px;
  display: inline-block;
  vertical-align: top;
}
.my-contextmenu__icon .my-icon.is-svg {
  vertical-align: middle;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}
.my-contextmenu__info {
  padding-right: 10px;
  opacity: 0.7;
}
.my-contextmenu__arrow {
  margin-right: -4px;
}
.my-contextmenu.is-dark .my-contextmenu__menu {
  background: rgba(0, 0, 0, 0.85);
}
.my-contextmenu.is-dark .my-contextmenu__item {
  color: #e6f7ff;
}
.my-contextmenu.is-dark .my-contextmenu__item.is-disabled {
  color: hsla(0, 0%, 100%, 0.45);
  cursor: not-allowed;
}
.my-contextmenu.is-dark .my-contextmenu__item.is-disabled:hover {
  background: transparent;
}
.my-contextmenu.is-dark .my-contextmenu__divider {
  border-top: 1px solid hsla(0, 0%, 100%, 0.15);
}
</style>
