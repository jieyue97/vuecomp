<template>
  <div class="addcomp">
    <p v-show="isLimit" style="text-align: center; color: #bb2e3e">暂无新增组件文档权限</p>
    <el-button v-show="isEdit" type="primary" @click="getDataFromLocal">同步本地数据</el-button>
    <el-button v-show="isEdit" type="primary" @click="toServe">推送到服务器</el-button>
    <el-container v-show="isEdit" style="height: 100%; padding-top: 20px">
      <el-aside width="200px" style="padding-top: 20px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>菜单列表</span>
          </div>
          <div v-for="item in sidebar" :key="JSON.stringify(item)" class="text item">
            <div>{{ item.title }} <i class="el-icon-circle-plus-outline" style="color: #409eff" @click="open(item)"></i></div>
            <div v-for="(tag, index) in item.children" :key="tag">
              <el-tag closable="" style="margin-top: 8px" @close="closeTag(item, index, tag)" @click="tagClick(tag)">
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-aside>
      <el-main style="position: relative">
        <client-only> <mavon-editor v-model="value" style="height: 100%; padding: 0" @save="saveMd" /> </client-only>
      </el-main>
    </el-container>
  </div>
</template>

<script>
let sidebar = require('../json/sidebar.json')
export default {
  name: `GdAddCopm`,
  data() {
    return {
      compname: '',
      value: '',
      sidebar: [],
      activeName: 1,
    }
  },
  computed: {
    isLimit() {
      return this.$route.query.type !== 'edit'
    },
    isEdit() {
      return this.$route.query.type === 'edit'
    },
  },
  mounted() {
    for (let i in sidebar) {
      this.sidebar.push(...sidebar[i])
    }
    this.sidebar = this.sidebar.filter((res) => res.title === '基础组件' || res.title === '特殊组件')

    // const copmName = localStorage.getItem('copmName')
    // if (copmName) {
    //   this.getcomp(copmName)
    // } else {
    //   this.getcomp(this.sidebar[0].children[0])
    // }
  },
  methods: {
    toServe() {
      window.open('http://10.0.1.247:8088/view/%E5%9F%BA%E7%A1%80%E8%BF%90%E7%BB%B4/job/gdui/', '_black')
    },
    getDataFromLocal() {
      this.$axios.post('http://10.1.6.140:3000/localcomp').then((res) => {
        this.$message.success('同步本地数据成功，尽量10秒后再推送到服务器')
      })
    },
    saveMd(val) {
      if (this.compname === '') {
        this.$message.warning('请选择需要保存的组件文档')
        return
      }
      this.$axios.post('http://10.1.6.140:3000/savecomp', { data: val, name: this.compname }).then((res) => {
        this.$message.success('保存组件文档成功')
      })
    },
    tagClick(tag) {
      this.getcomp(tag)
    },
    getcomp(name) {
      this.compname = name
      this.$axios.post('http://10.1.6.140:3000/getcomp', { data: name }).then((res) => {
        this.value = res.data.data
      })
    },
    open(item) {
      this.$prompt('请输入组件名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.value = ''
        this.addClick(item, value)
      })
    },
    closeTag(item, index, tag) {
      this.$confirm('此操作将永久删除该组件文档, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        if (item.title === '基础组件') {
          sidebar['/ui/components/'][1].children.splice(index, 1)
        } else {
          sidebar['/ui/components/'][2].children.splice(index, 1)
        }
        this.$axios.post('http://10.1.6.140:3000/deletecomp', { data: sidebar, name: tag }).then((res) => {
          this.$message.success('删除组件文档成功')
          this.getcomp(this.sidebar[0].children[0])
        })
      })
    },
    addClick(item, value) {
      if (item.title === '基础组件') {
        sidebar['/ui/components/'][1].children.push(value)
      } else {
        sidebar['/ui/components/'][2].children.push(value)
      }
      this.compname = value
      this.$axios.post('http://10.1.6.140:3000/createcomp', { data: { sidebar: sidebar, val: this.value, name: value } }).then((res) => {
        localStorage.setItem('copmName', value)
        this.$message.success('创建组件文档成功')
      })
    },
  },
}
</script>
<style>
.lang-html {
  color: #409eff !important;
}
</style>
<style lang="scss" scoped>
.text {
  font-size: 16px;
  padding: 5px;
}
.item {
  margin-bottom: 18px;
  text-align: left;
  cursor: pointer;
}
.active {
  background-color: #409eff;
  color: white;
}
.addcomp {
  // position: fixed;
  // width: 100%;
  // height: 100%;
  // left: 0;
  // top: 0;
  // z-index: 100;
  // padding: 0;
}
</style>
