<template>
  <div class="top-nav-bar">
    <div class="nav-btn" @mouseenter="show = true" @mouseleave="show = false">
      <div class="active-menu menu-item-title" :style="{ background: show ? '#008CE5' : '' }">
        <span>
          基础运维系统
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
      <transition name="el-fade-in-linear">
        <div v-show="show" class="menu-wrapper">
          <div @click="toPage(item)" class="menu-item menu-item-box" :style="{ background: `url(${item.background})` }" v-for="(item, index) in menuList" :key="index">
            <i :class="item.source"></i>
            <span :title="item.name">{{ item.name }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  data() {
    return {
      show: false
    }
  },
  computed: {
    menuList() {
      return [{ name: '首页', source: 'el-icon-s-home', path: '/home' }].map(item => {
        item.background = ''
        return item
      })
    }
  },
  watch: {},
  created() {
    //console.log(this.subMemu, 'subMemu')
  },
  methods: {
    // 判断是什么页面 决定跳转
    toPage(menu) {
      window.location.href = window.origin + (process.env.PRO_NAME ? '/' + process.env.PRO_NAME : '') + '/#/login'
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav-bar {
  display: flex;
  padding-left: 20px;
  align-items: center;
  color: #fff;
  justify-content: center;
  .nav-btn {
    width: 96px;
    height: 100%;
    position: relative;
    justify-content: center;
    display: flex;
    .active-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 20px;
    }
  }
  .active {
    background: #008ce5;
  }
  .menu-item-box {
    min-width: 100px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 5px;
    }
    span {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      overflow: hidden;
      width: 120px;
      line-height: 14px;
    }
  }
  .menu-item-title {
    i {
      margin-left: 5px;
    }
  }
  .menu-wrapper {
    width: 515px;
    display: flex;
    flex-wrap: wrap;
    z-index: 9999;
    min-height: 150px;
    top: 54px;
    right: 0;
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(20, 23, 53, 0.15);
    border-radius: 0px 0px 4px 4px;
    padding: 10px;
    .menu-item {
      height: 75px;
      // padding: 0 5px;
      position: relative;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      width: calc(25% - 20px);
      border-radius: 5px;
      display: flex;
      margin: 10px;
      flex-direction: column;
      background-size: 100% 100%;
      &:hover {
        &::after {
          content: '';
          position: absolute;
          height: 14px;
          width: 14px;
          // background: url(~@index/assets/images/nav/go.png);
          background-size: 100% 100%;
          display: block;
          bottom: 5px;
          right: 10px;
        }
      }
    }
  }
}
</style>
