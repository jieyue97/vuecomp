<template>
  <div class="changelogs_body">
    <div class="btn-group">
      <el-button-group>
        <el-button v-for="item in moduleList" :key="item.value" :type="currentModule === item.value ? 'primary' : ''" size="medium" @click="currentModule = item.value">{{
          item.label
        }}</el-button>
      </el-button-group>
      <el-button v-if="isEdit" type="primary" size="medium" icon="el-icon-edit" @click="prinftShow = true">编辑更新记录</el-button>
    </div>
    <div v-for="(item, index) in logList" :key="index" class="logList">
      <div class="bgTitle">
        <img v-if="index === 0" src="./img/hot1.png" alt="" style="margin-right: 10px; width: 30px; position: relative; top: 3px" />
        <span>{{ item.title }}</span>
        <span>
          {{ item.time }}
        </span>
      </div>
      <template v-if="item.content">
        <div v-for="(e, index) in item.content" :key="index" class="content vision-box">
          <div class="content_title">
            <span>
              {{ e.title }}
            </span>
            <span v-if="e.remark" @click="open(e.url)" class="openUrl" :style="{ color: setColor(e.url) }"> ({{ e.remark }}) </span>
          </div>
          <div class="content_body" v-if="e.chil">
            <div v-for="(j, index) in e.chil" :key="index">
              <div v-if="j.bigTitle" class="item">
                <div>
                  <span style="font-size: 16px; font-weight: bold">{{ j.bigTitle }}</span>
                  <span v-if="j.url" @click="open(j.url)" class="openUrl" :style="{ color: setColor(j.url) }"> ({{ j.remark }}) </span>
                </div>
                <div v-if="j.con" class="con_con">
                  <div v-for="(s, index) in j.con" :key="index">
                    <div class="item">
                      <span>{{ s.title }} </span>
                      <span v-if="s.remark" @click="open(s.url, s.title)" class="openUrl" :style="{ color: setColor(s.url) }">{{ s.remark }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="j.title">
                <div class="item">
                  <span :class="e.key + '-item'">{{ j.title }} </span
                  ><span v-if="j.url" @click="open(j.url)" class="openUrl" :style="{ color: setColor(j.url) }">
                    {{ j.remark }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <gd-dialog
      :titleColor="'#000'"
      title="编辑数据"
      width="900px"
      height="600px"
      size="small"
      :themeColor="'#fff'"
      :z-index="201"
      :closed.sync="prinftShow"
      :append-to-body="true"
      headerHeight="50px"
      :headerStyle="{ lineHeight: '50px', padding: 0, paddingRight: '15px', paddingLeft: '15px' }"
      draggable
      maximizable
      :maximized.sync="maximized"
    >
      <!-- <b-code-editor
        ref="vueJsonEditor"
        style="height: 100%"
        v-model="jsonDataStr"
        :auto-format="true"
        :smart-indent="true"
        theme="dracula"
        :indent-unit="4"
        :line-wrap="true"
      ></b-code-editor> -->
      <vue-json-editor ref="vueJsonEditor" style="height: 100%" v-model="jsonDataStr" :mode="'code'" @has-error="onError"></vue-json-editor>
      <template slot="footer">
        <div>
          <el-button size="medium" type="primary" @click="onSave">保存</el-button>
          <el-button size="medium" @click="prinftShow = false">取消</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>
<script>
const logJson = require('./data/log.json')
export default {
  name: 'changelogs',
  data() {
    return {
      jsonDataStr: '',
      currentModule: 'system',
      moduleList: [
        { label: '基础运维', value: 'system' },
        { label: '工作流平台', value: 'wfmng' },
        { label: 'KKFile', value: 'KKFile' },
      ],
      prinftShow: false,
      maximized: false,
      logData: logJson,
    }
  },
  computed: {
    isEdit() {
      return this.$route.query.type === 'edit'
    },
    logList() {
      return this.logData[this.currentModule]
    },
  },
  mounted() {
    this.queryLogData()
  },
  methods: {
    queryLogData() {
      this.$axios
        .post('http://10.1.6.140:3000/getLog')
        .then((res) => {
          if (res.status === 200) {
            res.data.data && (this.logData = res.data.data)
            this.jsonDataStr = JSON.parse(JSON.stringify(this.logData))
          }
        })
        .catch((err) => {
          this.jsonDataStr = JSON.parse(JSON.stringify(this.logData))
        })
    },
    onError(val) {
      this.$message.warning('格式错误')
    },
    // 检测json格式
    isJSON(str) {
      if (typeof str == 'string') {
        try {
          var obj = JSON.parse(str)
          if (typeof obj == 'object' && obj) {
            return true
          } else {
            return false
          }
        } catch (e) {
          return false
        }
      } else if (typeof str == 'object' && str) {
        return true
      }
    },
    onSave() {
      // if (!this.isJSON(this.jsonDataStr)) {
      //   return this.$message.warning('json格式错误')
      // }
      // console.log(this.jsonDataStr)
      this.$axios.post('http://10.1.6.140:3000/createLog', { data: JSON.stringify(this.jsonDataStr) }).then((res) => {
        if (res.status === 200) {
          this.$message.success('更新成功')
          this.prinftShow = false
          this.queryLogData()
        }
      })
    },
    open(url, name) {
      if (url) window.open(url)
    },
    setColor(url) {
      if (url) {
        // return '#626E7A'
      } else {
        return '#eee'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
/deep/.jsoneditor-vue {
  height: 100%;
}
/deep/.jsoneditor-btns {
  display: none;
}
/deep/.bin-json-editor {
  & > label {
    height: 100%;
  }
  .CodeMirror {
    height: 100%;
  }
}
.changelogs_body {
  height: 100%;
  width: 100%;
  font-family: 'Microsoft YaHei';
  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  span {
    cursor: auto;
  }
  .logList {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-bottom: 15px;
    margin-top: 50px;
    .vision-box {
      padding: 15px 30px;
    }
    .openUrl {
      cursor: pointer;
      color: #409eff;
      &::before {
        content: '(';
        color: #606266;
      }
      &::after {
        content: ')';
        color: #606266;
      }
    }
    .bgTitle {
      clear: both;
      padding: 15px 30px;
      border-bottom: 1px solid #ddd;
      span:nth-of-type(1) {
        font-size: 20px;
        font-weight: bold;
      }
      span:nth-of-type(2) {
        float: right;
        font-size: 16px;
        line-height: 38px;
      }
    }
    .content {
      .content_title {
        padding-bottom: 15px;
        span:nth-of-type(1) {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .content_body {
        margin-left: 20px;
        .con_con {
          margin-left: 20px;
        }
        .item {
          padding: 5px;
        }
        .character-item {
          color: #69c749;
        }
      }
    }
  }
}
</style>
