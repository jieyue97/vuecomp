<template>
  <div class="project-iconlist">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(itemtab, indextab) in svgNameList" :key="indextab" :label="itemtab.sysName" :name="itemtab.sysName">
        <ul class="project-ul" :style="ulBg">
          <li v-for="(item, index) in itemtab.svgList" :key="index">
            <svg :class="svgClass" :style="iconStyle" aria-hidden="true" v-on="$listeners">
              <use :xlink:href="`#icon-${item.name}`" />
            </svg>
            <span style="font-size: 12px">{{ item.name }}</span>
            <el-button size="mini" style="padding: 4px 9px" @click="copyBtn(item.name)"> 复制 </el-button>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import svgNameList from '../../icons'
export default {
  name: 'GdSvg',
  data() {
    return {
      activeName: '',
      svgNameList: svgNameList
    }
  },
  props: {
    iconClass: {
      type: String,
      required: true
    },
    iconStyle: {
      type: Object,
      default: () => {
        return { width: '2em', height: '2em' }
      }
    },
    ulBg: {
      type: Object,
      default: () => {
        return { background: 'cadetblue' }
      }
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgClass() {
      return 'svg-icon'
    }
  },
  methods: {
    copyBtn(val) {
      let oInput = document.createElement('input')
      oInput.value = val
      document.body.appendChild(oInput)
      oInput.select() // 选择对象;
      document.execCommand('Copy') // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()
    },
    getSvg() {
      // const aa = this.svgNameList
      // debugger
      this.svgNameList = this.svgNameList.map(res => {
        return {
          ...res,
          iconName: `#icon-${res.name}`
        }
      })
      this.activeName = this.svgNameList[0].sysName
    }
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
.project-ul {
  float: left;
  background: cadetblue;
}
.project-ul li {
  list-style: none;
  float: left;
  padding: 5px;
  height: 100px;
  text-align: center;
}
.project-ul li span {
  width: 80px;
  padding: 5px 0;
  display: block;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
