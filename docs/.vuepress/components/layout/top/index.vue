<template>
  <!-- 
      添加判断设置的时候方便预览
      navObjs 是父节点传的参数,
      navObj 是缓存计算属性
   -->
  <div :style="{ background: navObjs.background }" class="top" id="top">
    <div class="info_title_left" id="info_title_left">
      <img v-show="navObjs.isLogo" :src="navObjs.logoUrl" class="logo" />
      <span class="navTitle">
        {{ navObjs.menuTitle }}
      </span>
      <span v-if="navObjs.needChildTitle" style="margin-left: 10px">|</span>
      <span v-if="navObjs.needChildTitle" class="navSysTitle">
        {{ navObjs.menuChildTitle }}
      </span>
    </div>
    <div v-if="navObjs.menuShowType === 'topList'" class="top-bar__title" id="top-bar__title">
      <div class="top-bar__item" style="background:none">
        <top-list ref="topMenu" />
      </div>
    </div>
    <div class="top-bar__right" id="top-bar__right">
      <div v-if="navObjs.menuShowType === 'topMenu'" class="top-bar__item" title="切换" style="background: none">
        <top-menu ref="topMenu" />
      </div>
      <div v-if="navObjs.needFullScreen" class="top-bar__item circle">
        <i class="iconfont-hainan iconzuidahua1" />
      </div>
      <div class="top-bar__item" style="background: none">|</div>
      <div class="top-bar__item user-info">
        <el-dropdown trigger="click">
          <div style="padding-right: 10px">
            <i class="iconfont-sys icoywyonghuguanli" style="padding: 0 6px 0 15px; color: #fff" />
            <span class="el-dropdown-link">
              管理员
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item />
            <el-dropdown-item>
              <router-link to="/info/index">管理员</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div :title="'退出'" class="top-bar__item circle">
        <i class="el-icon-switch-button" />
      </div>
    </div>
  </div>
</template>
<script>
import topMenu from './top-menu'
import topList from './top-list'
import { menuList } from '../menu'
import siberMenuConfig from '../siber-menu.config'
export default {
  name: 'Top',
  components: {
    topMenu,
    topList
  },
  filters: {},
  props: {
    // navObjs: {
    //   type: Object,
    //   default: () => {
    //     return siberMenuConfig
    //   }
    // }
  },
  data() {
    return {
      navObjs: siberMenuConfig
    }
  },
  computed: {},
  created() {},
  mounted() {
    menuList('top', 'info_title_left', 'top-bar__title', 'top-bar__right', this)
    window.onresize = () => {
      menuList('top', 'info_title_left', 'top-bar__title', 'top-bar__right', this)
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.top {
  padding: 0 20px;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.65);
  font-size: 28px;
  height: 54px;
  line-height: 54px;
  box-sizing: border-box;
  white-space: nowrap;
  display: flex;
  align-items: center;
  .info_title_left {
    color: #fff;
    display: flex;
    align-items: center;
    // position: fixed;
    // left: 14px;
    font-size: 26px;
    // span {
    //   font-weight: 200;
    //   font-size: 18px;
    // }
    .navTitle {
      font-size: 24px;
      font-weight: 700;
      margin-left: 10px;
      font-family: 'Microsoft YaHei';
    }
    .navSysTitle {
      margin-left: 10px;
      font-size: 14px;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
  .el-menu-item {
    i,
    span {
      font-size: 13px;
    }
  }
  .el-menu--horizontal > .el-menu-item {
    height: 54px;
    line-height: 54px;
  }
}
.avue-breadcrumb {
  height: 100%;
  i {
    font-size: 30px !important;
  }
  &--active {
    transform: rotate(90deg);
  }
}

.top-menu {
  box-sizing: border-box;
  .el-menu-item {
    padding: 0 10px;
    border: none !important;
  }
}

.top-search {
  line-height: 54px;
  position: absolute !important;
  left: 20px;
  top: 0;
  width: 400px !important;
  .el-input__inner {
    font-size: 13px;
    border: none;
    background-color: transparent;
  }
}

.top-bar__img {
  margin: 0 8px 0 5px;
  padding: 2px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid #eee;
  vertical-align: middle;
}

.top-bar__left,
.top-bar__right {
  height: 54px;
  position: absolute;
  top: 0;
  i {
    line-height: 54px;
  }
}

.top-bar__system-list {
  width: calc(100% - 250px);
}

.top-bar__right {
  right: 20px;
  display: flex;
  align-items: center;
}

.top-bar__item {
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  color: #fff;
  // margin:0 10px;
  font-size: 16px;
  background: #4b9af3;
  &--show {
    display: inline-block !important;
  }
  .el-badge__content.is-fixed {
    top: 12px;
    right: 5px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
  transition: background 0.3s;
  .el-dropdown-link {
    color: #fff;
    font-size: 16px;
  }
}
.circle {
  height: 30px;
  width: 30px;
  font-size: 20px;
  border-radius: 50%;
}
.user-info {
  padding-right: 8px;
  height: 30px;
  border-radius: 15px;
  img {
    position: relative;
    border: none;
    top: -2px;
    padding: 0;
    margin: 0;
  }
}

.top-bar__title {
  height: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  font-weight: 400;
}
</style>
