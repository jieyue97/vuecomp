<template>
  <div class="my-icon">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in jsonList" :key="index" :label="item.name" :name="item.name">
        <div class="project-iconlist">
          <ul class="project-ul">
            <li v-for="(item_icon, index_icon) in item.glyphs" :key="index_icon">
              <!-- <span
                :class="
                  `${item.css_prefix_text} ${item.font_family} ${item.css_prefix_text}${item_icon.font_class}`
                "
                style="font-size: 30px !important"
              >
              </span> -->
              <svg aria-hidden="true" class="svg-icon" style="width: 2em; height: 2em;">
                <use :xlink:href="`#${item.css_prefix_text}-${item_icon.font_class}`"></use>
              </svg>
              <span>{{ item_icon.name }}</span>
              <span style="font-size: 12px"> {{ item.font_family }} {{ item.css_prefix_text }}-{{ item_icon.font_class }} </span>
              <el-button size="mini" style="padding: 4px 9px" @click="copyBtn(item.font_family + ' ' + item.css_prefix_text + '-' + item_icon.font_class)">
                复制
              </el-button>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: `Icon`,
  data() {
    return {
      activeName: 'first',
      jsonList: []
    }
  },
  mounted() {
    this.getIcons()
  },
  methods: {
    // 获取所有图标信息
    getIcons() {
      const requireAll = requireContext => requireContext.keys().map(requireContext)
      const requireComponent = require.context('../../assets', true, /.json$/)
      this.jsonList = requireAll(requireComponent).map(res => {
        return {
          ...res,
          name: res.name
        }
      })
      this.activeName = this.jsonList[0].name
      // debugger
    },
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
    handleClick() {}
  }
}
</script>
<style lang="scss" scoped>
.project-ul li {
  list-style: none;
  float: left;
  padding: 5px;
  height: 135px;
  text-align: center;
}
.project-ul li span {
  width: 120px;
  display: block;
  text-align: center;
}
</style>
