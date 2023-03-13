<template>
  <div>
    <div style="padding: 68px" class="comment-textarea">
      <!--评论区-->
      <div class="avatar-flex">
        <img class="img-avatar" :src="imgUrl" alt="" />
        <div style="flex: 1">
          <el-input
            type="textarea"
            @keydown.enter.native="onSend('-1')"
            style="background-color: #fafafa"
            :autosize="{ minRows: 5, maxRows: 10 }"
            v-model="textareaContent"
            placeholder="写下你的评论..."
          >
          </el-input>
          <div style="padding: 10px">
            <el-row>
              <el-col :span="12">
                <div style="color: #7e8c8d;text-align: left;">
                  Ctrl + Enter 发表
                </div>
              </el-col>
              <el-col :span="12">
                <div style="text-align: right;">
                  <el-button type="primary" size="small" @click="onSend('-1')">发布</el-button>
                  <el-button size="small">取消</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in avatarList" :key="item.text" :label="item.text" :name="item.text"></el-tab-pane>
      </el-tabs>
      <!--评论数量操作-->
      <div class="avatar-num">
        <span style="margin-left: 10px">全部评论</span>
        <span style="margin: 0 10px;font-size: 14px;color: #7e8c8d">{{ total }}</span>
        <el-radio-group v-model="timeSort" size="mini" @change="onTimeSort">
          <el-radio-button type="text" plain label="1">时间正序</el-radio-button>
          <el-radio-button type="text" plain label="2">时间倒叙</el-radio-button>
        </el-radio-group>
      </div>
      <!--评论区展示-->
      <div v-for="(item, index) in data" :key="index" class="avatar-flex avatar-class">
        <img class="img-avatar" :src="imgUrl" alt="" />
        <div style="flex: 1">
          <div>{{ item.creator }}</div>
          <div style="font-size: 10px;color: #7e8c8d;margin-top: 2px">{{ item.numSort }} 楼 | {{ item.create_time }}</div>
          <div style="margin-top: 10px">
            <span v-if="item.contentA" style="color: #66b1ff">{{ item.contentA }}</span>
            {{ item.contentB }}
          </div>
          <!--操作-->
          <div class="avatar-button">
            <el-row>
              <el-col :span="12">
                <el-button type="text" @click="onTextareaShow(item)">
                  <span style="color: #b0b0b0;font-size: 16px"> <i class="el-icon-chat-dot-square"></i>&nbsp;回复 </span>
                </el-button>
                <el-divider v-if="hasChildren(item, unfoldNum)" direction="vertical"></el-divider>
                <el-button v-if="hasChildren(item, unfoldNum)" type="text" @click="onShowChildren(item)">
                  <span style="font-size: 16px"> &nbsp;{{ unfoldList.includes(item.id) ? '收起' : '更多评论' }} </span>
                </el-button>
              </el-col>
              <el-col :span="12" style="text-align: right">
                <div class="avatar-del">
                  <el-button type="text" @click="onDelete(item)">
                    <span style="color: #b0b0b0;font-size: 16px"> <i class="el-icon-delete"></i>&nbsp;删除 </span>
                  </el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--回复textarea-->
          <div v-if="item['id'] === keyId" class="avatar-flex">
            <div style="flex: 1">
              <el-input
                type="textarea"
                style="background-color: #fafafa"
                @keydown.enter.native="onSend(item.id)"
                :autofocus="true"
                :key="keyId"
                :autosize="{ minRows: 5, maxRows: 10 }"
                placeholder="写下你的评论..."
                v-model="query.content"
              >
              </el-input>
              <div style="padding: 10px">
                <el-row>
                  <el-col :span="12">
                    <div style="color: #7e8c8d;text-align: left;">
                      Ctrl + Enter 发表
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div style="text-align: right;">
                      <el-button type="primary" size="small" @click="onSend(item.id)">发布</el-button>
                      <el-button size="small" @click="onTextareaHide">取消</el-button>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <!--是否有子集-->
          <div v-if="hasChildren(item)" class="children-bg">
            <template v-for="(item1, index1) in item['children']">
              <div v-if="showAll(item.id, unfoldList, unfoldNum, index1)" :key="item1.id" class="avatar-flex">
                <img class="img-avatar" :src="imgUrl" alt="" />
                <div style="flex: 1">
                  <div>{{ item1.creator }}</div>
                  <div style="font-size: 10px;color: #7e8c8d;margin-top: 2px">{{ item1.create_time }}</div>
                  <div style="margin-top: 10px">
                    <span v-if="item1.contentA" style="color: #66b1ff">{{ item1.contentA }}</span>
                    {{ item1.contentB }}
                  </div>
                  <div class="avatar-button">
                    <el-row>
                      <el-col :span="12">
                        <el-button type="text" @click="onTextareaShow(item, item1)">
                          <span style="color: #b0b0b0;font-size: 16px"> <i class="el-icon-chat-dot-square"></i>&nbsp;回复 </span>
                        </el-button>
                      </el-col>
                      <el-col :span="12" style="text-align: right">
                        <div class="avatar-del">
                          <el-button type="text" @click="onDelete(item1)">
                            <span style="color: #b0b0b0;font-size: 16px"> <i class="el-icon-delete"></i>&nbsp;删除 </span>
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div v-if="item1['id'] === keyId" class="avatar-flex">
                    <div style="flex: 1">
                      <el-input
                        type="textarea"
                        style="background-color: #fafafa"
                        :autosize="{ minRows: 5, maxRows: 10 }"
                        @keydown.enter.native="onSend(item.id)"
                        placeholder="写下你的评论..."
                        v-model="query.content"
                      >
                      </el-input>
                      <div style="padding: 10px">
                        <el-row>
                          <el-col :span="12">
                            <div style="color: #7e8c8d;text-align: left;">
                              Ctrl + Enter 发表
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <div style="text-align: right;">
                              <el-button type="primary" size="small" @click="onSend(item.id)">发布</el-button>
                              <el-button size="small" @click="onTextareaHide">取消</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!--前端分页-->
      <!-- <gd-pagination
        :total="totalNum"
        :layout="layout"
        :page="page"
        :limit="limit"
        :background="background"
        :autoScroll="autoScroll"
        :textAlight="'left'"
        @pagination="onChangePage"
        :hidden="hidden"
      /> -->
    </div>
    <gd-dialog
      :title="'评论者昵称'"
      size="default"
      btnTextAlign="right"
      :z-index="201"
      :closed.sync="prinftShow"
      :append-to-body="true"
      height="300px"
      raggable
      maximizable
      :maximized.sync="maximized"
    >
      <el-form :model="query" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="请输入昵称" prop="creator">
          <el-input v-model="query.creator" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="意见模块" prop="comp">
          <el-select v-model="query.comp" placeholder="请选择意见模块">
            <el-option v-for="item in avatarList" :key="item.text" :label="item.text" :value="item.text"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <div>
          <el-button size="small" type="primary" @click="onSave">确定</el-button>
          <el-button size="small" @click="prinftShow = false">取消</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import imgUrl from './guodi.png'
export default {
  name: 'GitComment',
  components: {},
  props: {
    avatarList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      prinftShow: false,
      activeName: '',
      avatarType: '',
      allChildrenShow: false,
      imgUrl: imgUrl,
      maximized: false,
      keyId: '',
      total: 0,
      unfoldNum: 2, // 默认展开子集数量
      unfoldList: [], // 展开子集评论数组
      data: [],
      timeSort: '1',
      query: {
        id: '',
        comp: '',
        content: '',
        creator: '',
        parent_id: '-1'
      },
      textareaContent: '',
      rules: {
        creator: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        comp: [{ required: true, message: '请选择意见模块', trigger: 'blur' }]
      },
      params: {
        size: 10,
        current: 1
      },
      totalNum: 0,
      page: 1,
      limit: 10,
      //分页背景颜色 默认灰色
      background: true,
      autoScroll: true,
      layout: 'prev, pager, next, total, jumper',
      hidden: false
    }
  },
  created() {
    this.getAvatarList()
  },
  computed: {
    hasChildren() {
      return (item, num) => {
        if (!num) {
          if (item['children'] && item['children'].length) {
            return true
          }
          return false
        } else {
          if (item['children'] && item['children'].length && item['children'].length >= num) {
            return true
          }
          return false
        }
      }
    },
    showAll() {
      return (id, arr, item, index) => {
        if (arr.includes(id)) {
          return true
        }

        if (item > index) {
          return true
        }

        return false
      }
    }
  },
  methods: {
    handleClick(val) {
      this.getAvatarList()
    },
    // 获取评论list
    getAvatarList() {
      axios.get('http://10.0.1.86:8000/list').then(res => {
        if (res.data.data.length) {
          let data = res.data.data
          this.activeName = this.activeName === '' || this.activeName === '0' ? this.avatarList[0].text : this.activeName
          this.query.comp = this.activeName
          // 找出评论分类
          if (this.activeName) {
            data = data.filter(item => item.comp === this.activeName)
          }
          // content分类
          data = data.map(res => {
            res['contentA'] = ''
            res['contentB'] = res.content
            const cont = res.content.trim().split(' ')
            if (cont.length > 0 && cont[0].includes('@')) {
              res['contentA'] = cont[0]
              res['contentB'] = cont.splice(1, cont.length - 1).join(' ')
            }
            return res
          })
          // 评论总数
          this.total = data.length
          // 父子项递归
          this.dataListAll = this.getListTreeData(data, { id: 'id', pid: 'parent_id', children: 'children' }).map((item, index) => {
            item['numSort'] = index + 1
            return item
          })
          this.totalNum = this.dataListAll.length
          if (this.timeSort === '2') {
            this.dataListAll.reverse()
          }
          this.pageData()
        }
      })
    },
    // show回复评论框
    onTextareaShow(row, res) {
      const creator = res ? res.creator : row.creator
      this.query.content = '@' + creator + ' '
      this.keyId = res ? res.id : row.id
    },
    // 隐藏回复评论框
    onTextareaHide() {
      this.keyId = ''
    },
    // 重置
    onReset() {
      this.query = {
        id: '',
        comp: this.avatarType,
        content: '',
        creator: '',
        parent_id: '-1'
      }
    },
    // 展开更多
    onShowChildren(item) {
      if (this.unfoldList.includes(item.id)) {
        this.unfoldList = this.unfoldList.filter(i => i !== item.id)
      } else {
        this.unfoldList.push(item.id)
      }
      this.allChildrenShow = !this.allChildrenShow
    },
    // 发布
    onSend(row) {
      this.query.parent_id = row
      // 判断是否top评论者
      if (row === '-1') {
        this.query.content = this.textareaContent
      }
      if (!this.query.content) {
        this.keyId = ''
        return
      }
      this.prinftShow = true
    },
    // 校验请求新增数据
    onSave() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          axios.get('http://10.0.1.86:8000/save', { params: this.query }).then(res => {
            if (res.data.code === 200) {
              this.keyId = ''
              this.textareaContent = ''
              this.prinftShow = false
              this.onReset()
              this.getAvatarList()
            }
          })
        } else {
          return false
        }
      })
    },
    // 删除某条数据
    onDelete(item) {
      this.$prompt('请输入删除代码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          if (value === '54678423') {
            axios.get('http://10.0.1.86:8000/delete', { params: { id: item.id, authid: value } }).then(res => {
              if (res.data.code === 200) {
                this.keyId = ''
                this.textareaContent = ''
                this.prinftShow = false
                this.onReset()
                this.getAvatarList()
                this.$message({
                  type: 'success',
                  message: '删除成功'
                })
              }
            })
          } else {
            this.$message({
              type: 'error',
              message: '删除代码错误'
            })
          }
        })
        .catch(() => {})
    },
    // 数据树状化
    getListTreeData(data, config = { id: 'id', pid: 'parentId', children: 'children' }) {
      var id = config.id || 'id'
      var pid = config.pid || 'pid'
      var children = config.children || 'children'
      // var label=config.label || 'LctnName';
      var idMap = {}
      var jsonTree = []
      data.forEach(function(v) {
        idMap[v[id]] = v
      })
      data.forEach(function(v) {
        var parent = idMap[v[pid]]
        if (parent) {
          !parent[children] && (parent[children] = [])
          parent[children].push(v)
        } else {
          jsonTree.push(v)
        }
      })
      return jsonTree
    },
    // 评论数据排序
    onTimeSort(row) {
      this.dataListAll.reverse()
      this.pageData()
    },
    // 翻页
    onChangePage(row) {
      this.page = row.page
      this.pageData()
    },
    // 数据分割
    pageData() {
      this.data = this.dataListAll.slice(this.limit * (this.page - 1), this.limit * this.page - 1)
    }
  }
}
</script>
<style>
.avatar-del {
  opacity: 0;
}
.avatar-button:hover .avatar-del {
  opacity: 1;
  transition: opacity 0.5s;
}
.comment-textarea span:hover {
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
.avatar-flex {
  display: flex;
}
.img-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #eee;
  margin-right: 20px;
  vertical-align: middle;
  box-sizing: border-box;
}
.el-textarea {
  /deep/ textarea {
    background-color: #fafafa;
  }
}
.avatar-num {
  border-left: 4px solid #008ce5;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
}
.avatar-class {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.children-bg {
  background: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
}
</style>
