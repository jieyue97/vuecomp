<template>
  <div v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
    <el-cascader-panel v-model="selectVal" :options="options" @change="closeMenu"></el-cascader-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      selectVal: [],
      top: 0,
      left: 0,
      options: [
        {
          value: 'yizhi',
          label: '一致'
        },
        {
          value: 'fankui',
          label: '反馈'
        },
        {
          value: 'xiaolv',
          label: '效率'
        }
      ]
    }
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    openMenu(e, item) {
      let x = e.clientX
      let y = e.clientY
      this.top = y
      this.left = x
      this.visible = true
    },
    closeMenu(val) {
      if (Array.isArray(val) || val.target.className === 'cellClass') {
        this.visible = false
        this.selectVal = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: fixed;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
}

// .contextmenu li {
//   margin: 0;
//   padding: 7px 16px;
//   cursor: pointer;
// }

// .contextmenu li:hover {
//   background-color: rgb(3, 125, 243);
//   color: white;
// }
</style>
