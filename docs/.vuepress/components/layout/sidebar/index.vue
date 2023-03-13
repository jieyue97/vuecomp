<template>
  <div class="avue-sidebar" :style="style">
    <el-scrollbar style="height:100%">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import siberMenuConfig from '../siber-menu.config'
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
      siberMenuConfig: siberMenuConfig
    }
  },
  created() {},
  computed: {
    ifSideBar() {
      return false
    },
    style() {
      return {
        background: this.siberMenuConfig.backgroundLeft
      }
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style>
.el-menu {
  border-right: none !important;
  background: transparent;
}
.el-dropdown-menu__item--divided:before,
.el-menu,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent !important;
}
.el-submenu__title:hover {
  background-color: transparent;
}
.el-submenu__title {
  font-size: 14px;
  color: white;
}
.el-menu-item {
  font-size: 14px;
  color: white;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
<style lang="scss" scoped>
.el-menu--popup {
  .el-menu-item {
    background-color: #20222a;
    i,
    span {
      color: hsla(0, 0%, 100%, 0.7);
    }
    &:hover {
      i,
      span {
        color: #fff;
      }
    }
    &.is-active {
      background-color: rgba(0, 0, 0, 0.8);
      &:before {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: 4px;
        background: #409eff;
        position: absolute;
      }
      i,
      span {
        color: #fff;
      }
    }
  }
}
.avue-sidebar {
  user-select: none;
  position: relative;
  padding-top: 0px;
  height: 100%;
  position: relative;
  background-color: #20222a;
  transition: width 0.2s;
  box-sizing: border-box;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  &--tip {
    width: 90%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    top: 5px;
    left: 5%;
    color: #ccc;
    z-index: 2;
    text-align: center;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .el-menu-item,
  .el-submenu__title {
    i {
      margin-right: 10px;
    }
    i,
    span {
      color: hsla(0, 0%, 100%, 0.7);
    }
    &:hover {
      background: transparent;
      i,
      span {
        color: #fff;
      }
    }
    &.is-active {
      &:before {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: 4px;
        background: #409eff;
        position: absolute;
      }
      background-color: rgba(0, 0, 0, 0.8);
      i,
      span {
        color: #fff;
      }
    }
  }
}
</style>
