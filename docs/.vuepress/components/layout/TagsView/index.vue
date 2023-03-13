<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <hamburger v-show="siberMenuConfig.isNeedCollage" id="hamburger-container" :is-active="ifSideBar" class="hamburger-container" />
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.title"
        :data-id="tag.title"
        :to="{ path: tag.title, query: tag.title }"
        :title="tag.title"
        tag="span"
        class="tags-view-item"
      >
        <span> {{ tag.title }}</span>
        <span class="el-icon-close" />
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane'
import path from 'path'
import Hamburger from './hamburger'
import siberMenuConfig from '../siber-menu.config'
export default {
  components: { ScrollPane, Hamburger },
  // mixins: [Mixin],
  props: {
    showTag: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      siberMenuConfig: siberMenuConfig,
      visitedList: [],
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },

  computed: {
    ifSideBar() {
      return false
    },
    visitedViews() {
      return [{ title: 'demo' }]
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dcdfe6;
      color: gray;
      border-radius: 5px;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      max-width: calc(100% / 2);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:first-of-type {
        margin-left: 5px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        // background-color: rgba(85, 128, 235, 0.1);
        color: #1e81f1;
        border-color: #1e81f1;
        &::before {
          content: '';
          background: #1e81f1;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .detail-font {
        font-size: 14px;
      }
    }

    .hamburger-container {
      line-height: 33px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      // &:hover {
      //   background: #1e81f1;
      // }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    padding-right: 18px !important;

    .el-icon-close {
      position: absolute;
      right: 3px;
      top: 8px;
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #1e81f1;
        color: #fff;
      }
    }
  }
}
</style>
