<template>
  <ul class="my-contextmenu__menu">
    <Item v-for="(item, index) in items" :key="index" v-bind="item" @click="handleClick(item, $event)" @submenu="handleActive">
      <template v-slot="{ children, active }">
        <Menu v-if="children && active" :items="children" :class="menuClass"></Menu>
      </template>
    </Item>
  </ul>
</template>

<script>
import Item from './MenuItem'

export default {
  name: 'Menu',
  inject: ['wrapper'],
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    this.rect = null
    return {
      left: false,
      bottom: false
    }
  },
  computed: {
    menuClass() {
      return {
        'is-left': this.left,
        'is-bottom': this.bottom
      }
    }
  },
  methods: {
    handleClick(item, e) {
      /**
       * 点击菜单项时触发
       * @event click
       * @param {Object} item 菜单项数据
       * @param {Object} vm 菜单项实例
       */
      this.wrapper.$emit('click', item, e)
      this.wrapper.visible = false
    },
    handleActive(vm) {
      const itemRect = vm.$el.getBoundingClientRect()
      const rect = this.rect
      const targetRect = this.wrapper.triggerTarget.getBoundingClientRect()
      const x = itemRect.x + itemRect.width
      const y = itemRect.y
      this.bottom = rect.height + y - targetRect.top >= targetRect.height
      this.left = rect.width + x - targetRect.left >= targetRect.width
    }
  },
  mounted() {
    this.rect = this.$el.getBoundingClientRect()
  }
}
</script>

<style lang="scss" scoped>
.my-contextmenu__menu {
  display: block;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 100px;
  border-radius: 2px;
  background: #fff;
}
</style>
