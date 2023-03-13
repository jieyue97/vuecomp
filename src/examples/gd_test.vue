<template>
  <div>
    <div style="height: 100px">
      1
    </div>
    <div style="height:200px">
      <div class="action-box">
        <div>
          daklhsdkjashdjkhas
        </div>
      </div>
      <gd_contextmenu target=".action-box" :data="menu" @click="handleClick"></gd_contextmenu>
    </div>
  </div>
</template>

<script>
import gd_contextmenu from '../components/gd_contextmenu'

export default {
  name: "gd_test",
  components: { gd_contextmenu },
  data() {
    return {
      menu: [
        { icon: 'el-icon-view', label: '查看' },
        { icon: 'el-icon-edit', label: '编辑' },
        {
          icon: 'el-icon-finished',
          label: '完成',
          disabled: true,
          children: [{ label: '二级菜单1' }, { label: '二级菜单2' }, { label: '二级菜单3' }, { label: '二级菜单4' }]
        },
        { icon: 'el-icon-delete', label: '删除' },
        { divider: true },
        { icon: 'el-icon-document', label: '属性' }
      ]
    }
  },
  methods: {
    handleClick(item, vm) {
      // 处理点击菜单后的触发动作
      this.$message.success(`点击了${item.label}`)
    }
  }
}
</script>

<style scoped>
.action-box {
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 150px;
  font-size: 3rem;
  font-weight: bold;
}
</style>
