<template>
  <div class="gd_selectTree">
    <el-popover
      ref="popoverTree"
      :disabled="disabled"
      popper-class="selectTree"
      placement="bottom-start"
      trigger="manual"
      v-model="isShowSelect"
      @hide="popoverHide"
    >
      <div class="pdlr_1">
        <el-input class="mb_5" v-if="filterable" v-model="filterText" :placeholder="placeholder" :size="size"></el-input>
      </div>
      <div class="mt_5" v-if="selectAll">
        <el-checkbox v-model="checkedAll" :indeterminate="returnDataKeys.length == 0 ? false : !checkedAll" @change="selectedAll">全选</el-checkbox>
      </div>
      <!-- :indent="multiple ? 46 : 24" -->
      <el-tree
        class="common-tree"
        ref="tree"
        :data="treeData"
        :props="obj"
        :filter-node-method="filterNode"
        :show-checkbox="multiple"
        :node-key="obj.id"
        :check-strictly="checkStrictly"
        :default-expanded-keys="defaultKeyList"
        :default-expand-all="defaulexpand"
        :expand-on-click-node="multiple && expandClickNode"
        :check-on-click-node="checkClickNode"
        :highlight-current="true"
        @check-change="nodeClick"
        @node-click="nodeClick"
      ></el-tree>

      <el-select
        :disabled="disabled"
        slot="reference"
        ref="select"
        :size="size"
        v-model="returnDataKeys"
        :multiple="multiple"
        :clearable="clearable"
        :collapse-tags="collapseTags"
        @click.native="selectClick"
        @remove-tag="removeTag"
        @clear="clean"
        class="tree-select"
        :placeholder="placeholder"
        :style="{ width: width }"
      >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-popover>
  </div>
</template>

<script>
// import Clickoutside from './js/clickoutside'
export default {
  name: 'GdSelectTree',
  // directives: { Clickoutside },
  props: {
    popoverMaxWidth: {
      type: String,
      default: 'calc(100vw - 100px)'
    },
    //全选
    selectAll: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 树结构数据
    data: {
      type: Array,
      default() {
        return []
      }
    },
    obj: {
      type: Object,
      required: false,
      default: () => {
        return {
          id: '', // id
          pid: '', //父级id
          label: '', // 显示名称
          children: '' //子级字段名
        }
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    //配置是否可以搜索
    filterable: {
      type: Boolean,
      default() {
        return false
      }
    },
    //输入框占位值
    placeholder: {
      type: String,
      default() {
        return '请选择'
      }
    },
    //配置是否可多选
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 配置是否可清空选择
    clearable: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 配置多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 显示复选框情况下，是否严格遵循父子不互相关联
    checkStrictly: {
      type: Boolean,
      default() {
        return false
      }
    },
    radioStrictly: {
      type: Boolean,
      default() {
        return false
      }
    },
    //多选是设置点击节点是否可以选中
    checkClickNode: {
      type: Boolean,
      default() {
        return true
      }
    },
    //多选时：点击节点展开还是点三角标
    expandClickNode: {
      type: Boolean,
      default() {
        return false
      }
    },
    //默认展开
    defaulexpand: {
      type: Boolean,
      default() {
        return true
      }
    },
    // 默认选中的节点key
    defaultKey: {
      type: [Number, String, Array, Object],
      default() {
        return []
      }
    },
    size: {
      type: String,
      default() {
        return 'small'
      }
    },
    width: {
      type: String,
      default() {
        return '100%'
      }
    },
    height: {
      type: String,
      default() {
        return '300px'
      }
    },
    curValue: {
      default() {
        return ''
      }
    }
  },

  //上面是父组件可传入参数
  data() {
    return {
      // popoverWidth: '', // 气泡宽度
      isShowSelect: false, // 是否显示树状选择器
      options: [], //select option选项
      returnDatas: [], //返回给父组件数组对象
      returnDataKeys: [], //返回父组件数组主键值
      filterText: '', //筛选绑定值
      checkedAll: false, //是否有全选按钮(只有在多选下才能配置)
      treeArrId: []
    }
  },
  mounted() {
    // var that = this; //this的指向问题
    // document.addEventListener("click", function (e) {
    //   console.log(e);
    //   that.isShowSelect = false; //这里that代表组件，this代表document
    // });
    this.$nextTick(() => {
      const curSelectTreePopoverDom = this.$el.getElementsByClassName('selectTree')[0]
      if (curSelectTreePopoverDom) {
        curSelectTreePopoverDom.style['maxWidth'] = this.popoverMaxWidth
      }
      if (this.curValue) {
        if (typeof this.curValue != 'string' && typeof this.curValue != 'number') {
          this.setKeys(this.curValue)
        } else {
          this.setKey(this.curValue)
        }
      }
      window.addEventListener('click', this.handleClickOutside)
    })
  },

  computed: {
    defaultKeyList(){
      return Array.isArray(this.defaultKey) ? this.defaultKey : [this.defaultKey]
    },
    treeData() {
      // 若非树状结构，则转化为树状结构数据
      if (this.obj.children != '') {
        // return JSON.stringify(this.data).indexOf(this.obj.children) !== -1
        //   ? this.data
        //   : this.switchTree();
        return this.data
      } else {
        return this.data
      }
    }
  },
  watch: {
    returnDataKeys(newValue, oldValue) {
      if (newValue.length === this.treeArrId.length) {
        this.checkedAll = true
      } else {
        this.checkedAll = false
      }
    },
    curValue(val) {
      this.$nextTick(() => {
        if (val) {
          if (typeof val != 'string' && typeof val != 'number') {
            this.setKeys(val)
          } else {
            this.setKey(val)
          }
        }
      })
    },

    filterText(val) {
      this.$refs.tree.filter(val)
    },
    // eslint-disable-next-line no-unused-vars
    isShowSelect() {
      // 隐藏select自带的下拉框
      this.$refs.select.blur()
    },
    treeData() {
      //监听tree数据
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  created() {
    this.treeArrId = []
    this.originTree(this.treeData)
  },
  methods: {
    originTree(treeData) {
      treeData.forEach(item => {
        this.treeArrId.push(item[this.obj.id])
        if (item.children && item.children.length > 0) {
          this.originTree(item.children)
        }
      })
    },
    // 点击外部关闭
    handleClickOutside(e) {
      // console.log(this.$refs.popoverTree, '...');
      if (this.$refs.popoverTree && this.$refs.popoverTree.$el) {
        if (!this.$refs.popoverTree.$el.contains(e.target)) {
          this.isShowSelect = false
        }
      }
    },
    filterNode(value, data) {
      if (!value) return true
      return data[this.obj.label].indexOf(value) !== -1
    },

    init() {
      // debugger
      if (this.defaultKey != undefined && this.defaultKey.length > 0) {
        if (this.multiple) {
          // 多选
          if (Object.prototype.toString.call(this.defaultKey).indexOf('Array') != -1) {
            if (Object.prototype.toString.call(this.defaultKey[0]).indexOf('Object') != -1) {
              //对象
              this.setDatas(this.defaultKey)
            } else if (Object.prototype.toString.call(this.defaultKey[0]).indexOf('Number') != -1 || Object.prototype.toString.call(this.defaultKey[0]).indexOf('String') != -1) {
              this.setKeys(this.defaultKey)
            } else {
              console.log('多选：传入参数类型不匹配')
              return
            }
          } else {
            console.log('多选：传入参数类型不匹配')
            return
          }
        } else {
          // 单选
          if (
            Object.prototype.toString.call(this.defaultKey).indexOf('Number') != -1 ||
            Object.prototype.toString.call(this.defaultKey).indexOf('String') != -1 ||
            Object.prototype.toString.call(this.defaultKey).indexOf('Object') != -1
          ) {
            this.setKey(this.defaultKey)
          } else {
            console.log('单选：传入参数类型不匹配')
            return
          }
        }
      }
    },
    //下拉框select点击[入口]
    selectClick() {
      // this.$nextTick(function () {
      //   //设置下拉框自适应宽度
      //   this.popoverWidth = this.$refs.select.$el.clientWidth - 25
      // })
      //显示下拉框
      return (this.isShowSelect = !this.isShowSelect)
    },
    //单选: 树点击方法
    nodeClick(data, node) {
      if (!this.multiple) {
        //单选父子节点不关联
        if (this.radioStrictly) {
          this.setKey(node.key)
        } else {
          if (node.level != 1) {
            this.setKey(node.key)
          } else if (node.level == 1 || this.obj.children == '') {
            this.setKey(node.key)
          }
        }
        this.isShowSelect = false
      } else {
        //多选
        var checkedKeys = this.$refs.tree.getCheckedKeys() // 所有被选中的节点的 key 所组成的数组数据

        checkedKeys = checkedKeys.filter(function(s) {
          if (typeof s == 'String') {
            return s && s.trim()
          } else {
            return s
          }
        })
        var t = []
        checkedKeys = this.unique(checkedKeys)
        this.options = checkedKeys.map(item => {
          if (item !== undefined) {
            var node = this.$refs.tree.getNode(item) // 所有被选中的节点对应的node
            t.push(node.data)
          }
          //设置option选项
          return { label: node.label, value: node.key }
        })

        this.returnDataKeys = this.options.map(item => {
          return item.value
        })
        this.returnDatas = t
        this.popoverHide()
      }
    },
    unique(arr) {
      return arr.filter(function(item, index, arr) {
        return arr.indexOf(item, 0) === index
      })
    },
    //单选:清空选中
    clean() {
      this.$refs.tree.setCurrentKey(null) //清除树选中key
      this.returnDatas = null
      this.returnDataKeys = ''
      this.popoverHide()
    },
    //单选:设置、初始化值 key
    setKey(thisKey) {
      this.$refs.tree.setCurrentKey(thisKey)
      var node = this.$refs.tree.getNode(thisKey)
      if (node) {
        this.setData(node.data)
      }
    },
    //单选：设置、初始化对象
    setData(data) {
      this.options = []
      this.options.push({
        label: data[this.obj.label],
        value: data[this.obj.id]
      })
      this.returnDatas = data
      this.returnDataKeys = data[this.obj.id]
    },
    //多选:设置、初始化值 keys
    setKeys(thisKeys) {
      this.$refs.tree.setCheckedKeys(thisKeys)
      this.returnDataKeys = thisKeys
      var t = []
      thisKeys.map(item => {
        //设置option选项
        var node = this.$refs.tree.getNode(item) // 所有被选中的节点对应的node
        t.push(node.data)
        return { label: node.label, value: node.key }
      })
      this.returnDatas = t
      this.popoverHide()
    },
    //多选:设置、初始化对象
    setDatas(data) {
      this.$refs.tree.setCheckedNodes(data)
      this.returnDatas = data
      var t = []
      data.map(item => {
        //设置option选项
        t.push(item[this.obj.id])
      })
      this.returnDataKeys = t
      this.popoverHide()
    },
    // 多选,删除任一select选项的回调
    removeTag(val) {
      this.$refs.tree.setChecked(val, false) //设置为未选中
      var node = this.$refs.tree.getNode(val) //获取节点
      if (!this.checkStrictly && node.childNodes.length > 0) {
        this.treeToList(node).map(item => {
          if (item.childNodes.length <= 0) {
            this.$refs.tree.setChecked(item, false)
          }
        })
      }
      this.nodeClick()
      this.popoverHide()
    },
    //下拉框关闭执行
    popoverHide() {
      this.$emit('getValue', this.returnDataKeys, this.returnDatas)
    },
    // 多选，清空所有勾选
    clearSelectedNodes() {
      var checkedKeys = this.$refs.tree.getCheckedKeys() // 所有被选中的节点的 key 所组成的数组数据
      for (let i = 0; i < checkedKeys.length; i++) {
        this.$refs.tree.setChecked(checkedKeys[i], false)
      }
    },
    //多选  全选
    selectedAll(val) {
      if (val) {
        this.setKeys(this.treeArrId)
      } else {
        this.clearSelectedNodes()
      }
    },
    //树形转为集合
    treeToList(tree) {
      var queen = []
      var out = []
      queen = queen.concat(tree)
      while (queen.length) {
        var first = queen.shift()
        if (first.childNodes) {
          queen = queen.concat(first.childNodes)
        }
        out.push(first)
      }
      return out
    },
    switchTree() {
      return this.buildTree(this.data, this.defaultValue)
    },
    // 将一维的扁平数组转换为多层级对象
    buildTree(data, id) {
      const fa = id => {
        const temp = []
        for (let i = 0; i < data.length; i++) {
          const n = data[i]
          if (n[this.obj.pid] === id) {
            n[this.obj.children] = fa(n[this.obj.id])
            temp.push(n)
          }
        }
        return temp
      }
      return fa(id)
    }
  },
  destroyed() {
    window.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style lang="scss" scoped>
.el-popover {
  min-width: 250px;
  max-width: 500px;
}
.selectTree {
  overflow-x: auto;
  .mt_5 {
    padding: 5px 0;
  }
}
.tree-select {
  width: 100%;
}
.common-tree {
  overflow: auto;
  max-height: 300px;
  height: auto;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.common-tree::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
.common-tree::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
.common-tree::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
// .common-tree /deep/ .el-tree-node__expand-icon.is-leaf {
//   display: none !important;
// }
.common-tree /deep/ .el-tree-node__content > .el-tree-node__expand-icon {
  padding: 0;
  margin-left: 6px;
  margin-right: 3px;
}
.el-checkbox {
  margin-left: 10px !important;
}
.el-row {
  padding-top: 0px !important;
}
</style>
