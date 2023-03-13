<template>
  <div class="addcomp">
    <el-button type="primary" @click="getDataFromLocal">同步本地数据</el-button>
    <el-button type="primary" @click="toServe">推送到服务器</el-button>

    <el-drawer :title="formData.title + '问题列表'" :visible.sync="showDialog" direction="rtl" size="50%" @close="closedrawer">
      <el-button type="primary" size="small" style="margin-left: 10px" @click="add">添加问题</el-button>
      <div style="padding: 10px" v-for="(item, index) in formData[formData.code]" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.question }}</span>
          </div>
          <div class="textItem">原因</div>
          <div class="textItemValue">{{ item.reason }}</div>
          <div class="textItem" v-if="item.errPic.length !== 0">错误截图</div>
          <div class="textItemValue" v-if="item.errPic.length !== 0">
            <div>
              <el-image
                style="width: 100px; height: 100px; margin-right: 8px"
                :src="`/gdui/question/${pic.name}`"
                v-for="(pic, picIndex) in item.errPic"
                :key="picIndex"
                :preview-src-list="getList(item.errPic)"
              >
              </el-image>
              <!-- <img :src="`/gdui/question/${pic.name}`" alt="" v-for="(pic, picIndex) in item.errPic" :key="picIndex" style="margin-right: 8px; width: 100px; height: 100px" /> -->
            </div>

            <!-- <el-upload action list-type="picture-card" :auto-upload="false" multiple :file-list="getList(item)">
              <i class="el-icon-plus"></i>
            </el-upload> -->
          </div>
          <div class="textItem">解决方法</div>
          <div class="textItemValue">{{ item.solve }}</div>
          <div class="textItem" v-if="item.sucessPic.length !== 0">解决截图</div>
          <div class="textItemValue" v-if="item.sucessPic.length !== 0">
            <div>
              <el-image
                style="width: 100px; height: 100px; margin-right: 8px"
                :src="`/gdui/question/${pic.name}`"
                v-for="(pic, picIndex) in item.sucessPic"
                :key="picIndex"
                :preview-src-list="getList(item.sucessPic)"
              >
              </el-image>
            </div>
          </div>
        </el-card>
      </div>
    </el-drawer>
    <div class="htmleaf-container">
      <div class="container" style="margin-top: 15%">
        <div style="display: flex">
          <div class="box" style="margin-right: 20px" v-for="(item, index) in list" :key="index" @click="showRight(item)">
            <div class="box1" :style="item.style">
              <div class="box1-inner">
                <span class="icon-set i1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172" style="fill: #000000">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1">
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ff6a00">
                        <path
                          d="M101.05,17.2c-4.72427,0 -8.6,3.87573 -8.6,8.6v34.4c0,4.72427 3.87573,8.6 8.6,8.6h10.75v13.79023l13.79023,-13.79023h31.35977c4.72427,0 8.6,-3.87573 8.6,-8.6v-34.4c0,-4.72427 -3.87573,-8.6 -8.6,-8.6zM101.05,21.5h55.9c2.40083,0 4.3,1.89917 4.3,4.3v34.4c0,2.40083 -1.89917,4.3 -4.3,4.3h-33.14023l-7.70977,7.70977v-7.70977h-15.05c-2.40083,0 -4.3,-1.89917 -4.3,-4.3v-34.4c0,-2.40083 1.89917,-4.3 4.3,-4.3zM19.35,27.95c-2.35009,0 -4.3,1.94991 -4.3,4.3v86c0,2.35009 1.94991,4.3 4.3,4.3h49.45v8.6h-6.45c-4.72427,0 -8.6,3.87573 -8.6,8.6v4.3h64.5v-4.3c0,-4.72427 -3.87573,-8.6 -8.6,-8.6h-6.45v-8.6h49.45c2.35009,0 4.3,-1.94991 4.3,-4.3v-43h-4.3v43h-49.45h-34.4h-49.45v-86h66.65v-4.3zM111.8,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM129,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM146.2,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM25.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM34.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM43,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM51.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM60.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM68.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM77.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM86,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM94.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM103.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM111.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM120.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM129,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM137.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM146.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM73.1,122.55h25.8v8.6h-25.8zM62.35,135.45h47.3c2.40083,0 4.3,1.89917 4.3,4.3h-55.9c0,-2.40083 1.89917,-4.3 4.3,-4.3z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div class="text-heading color1">
              <h3 :style="item.colorStyle">{{ item.name }}</h3>
              <p>{{ item.code }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <gd-dialog :title="'添加问题'" :z-index="5000" :closed.sync="show" :append-to-body="true" width="800px" height="800px" draggable>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="问题描述">
          <el-input type="textarea" :rows="3" v-model="form.question"></el-input>
        </el-form-item>
        <el-form-item label="问题原因">
          <el-input type="textarea" :rows="3" v-model="form.reason"></el-input>
        </el-form-item>
        <el-form-item label="解决方法">
          <el-input type="textarea" :rows="3" v-model="form.solve"></el-input>
        </el-form-item>
        <el-form-item label="错误截图">
          <el-upload action list-type="picture-card" :auto-upload="false" :on-change="onChange" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="解决截图">
          <el-upload action list-type="picture-card" :auto-upload="false" :on-change="onChangeSuccess" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <div>
          <el-button size="small" type="primary" @click="submit" :loading="loading">确定</el-button>
          <el-button size="small" @click="show = false">取消</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>

<script>
const questionJson = require('../../../json/question.json')
export default {
  name: `UsuallyQuestion`,
  data() {
    return {
      loading: false,
      form: {
        question: '',
        reason: '',
        solve: '',
        errPic: [],
        sucessPic: [],
      },
      show: false,
      formData: {},
      showDialog: false,
      list: [
        {
          name: '基础运维',
          code: 'system',
          desc: '',
          colorStyle: {
            color: '#ff6a00',
          },
          style: {
            backgroundImage: 'linear-gradient(to right bottom,#fd4617,#ff6d12,#ff8d19,#ffaa2c,#ffc445)',
          },
        },
        {
          name: '工作流',
          code: 'wfmng',
          desc: '',
          colorStyle: {
            color: '#ff6a00',
          },
          style: {
            backgroundImage: 'linear-gradient(to right bottom,#fff05a,#ffde56,#ffcc55,#ffbb57,#ffaa5a)',
          },
        },
        {
          name: '表单定制',
          code: 'formDesigner',
          desc: '',
          colorStyle: {
            color: '#ffbc00',
          },
          style: {
            backgroundImage: 'linear-gradient(to right, #96c93d, #00b09b)',
          },
        },
        {
          name: '基础框架',
          code: 'base',
          desc: '',
          colorStyle: {
            color: '#06af23',
          },
          style: {
            backgroundImage: 'linear-gradient(to right bottom,#3da5d9,#2eb9e4,#29ccec,#38dff1,#54f2f2)',
          },
        },
        {
          name: '在线代码',
          code: 'linecode',
          desc: '',
          colorStyle: {
            color: '#06a7af',
          },
          style: {
            backgroundImage: 'linear-gradient(to right bottom,#fd4617,#ff6d12,#ff8d19,#ffaa2c,#ffc445)',
          },
        },
      ],
      questionData: [],
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
  async mounted() {
    await this.queryLogData()
    const hasAdd = localStorage.getItem('hasAdd')
    if (hasAdd) {
      this.showRight(JSON.parse(hasAdd))
    }

    // const copmName = localStorage.getItem('copmName')
    // if (copmName) {
    //   this.getcomp(copmName)
    // } else {
    //   this.getcomp(this.sidebar[0].children[0])
    // }
  },
  destroyed() {
    // localStorage.removeItem('hasAdd')
  },
  methods: {
    getList(data) {
      return data.map((res) => {
        return `/gdui/question/${res.name}`
      })
    },
    closedrawer() {
      localStorage.removeItem('hasAdd')
    },
    fileToBase64Async(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          resolve(e.target.result)
        }
      })
    },
    submit() {
      this.loading = true
      this.form.code = this.formData.code
      this.$axios.post('http://10.1.6.140:3000/upimages', this.form).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('hasAdd', JSON.stringify(this.formData))
          this.show = false
          this.loading = false
        }
      })
      // debugger
    },
    async commonMethod(fileList, type) {
      let arr = []
      const newData = fileList.map(async (res) => {
        return {
          type,
          name: res.name,
          base64Cont: await this.fileToBase64Async(res.raw),
        }
      })
      for (let i of await newData) {
        arr.push(await i)
      }
      this.form[type] = arr
    },
    onChange(file, fileList) {
      this.commonMethod(fileList, 'errPic')
    },
    async onChangeSuccess(file, fileList) {
      this.commonMethod(fileList, 'sucessPic')
    },
    getBaseData() {},
    add() {
      this.show = true
    },
    async queryLogData() {
      await this.$axios
        .post('http://10.1.6.140:3000/getQuestion')
        .then((res) => {
          if (res.status === 200) {
            res.data.data && (this.questionData = res.data.data)
            // this.jsonDataStr = JSON.parse(JSON.stringify(this.logData))
          }
        })
        .catch((err) => {
          this.questionData = questionJson
        })
    },
    showRight(data) {
      this.showDialog = true
      this.formData['title'] = data.name || data.title
      this.formData['code'] = data.code
      this.formData[data.code] = this.questionData[data.code]
      // this.form = JSON.parse(JSON.stringify(data))
    },
    toServe() {
      window.open('http://10.0.1.247:8088/view/%E5%9F%BA%E7%A1%80%E8%BF%90%E7%BB%B4/job/gdui/', '_black')
    },
    getDataFromLocal() {
      this.$axios.post('http://10.1.6.140:3000/localcomp').then((res) => {
        this.$message.success('同步本地数据成功，尽量10秒后再推送到服务器')
      })
    },
  },
}
</script>
<style>
.textItem {
  margin: 10px 0;
  color: rgb(255, 106, 0);
}
.box1 {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 10px solid white;
  overflow: hidden;
  margin: auto;
  box-shadow: 11px 11px 12px -9px rgba(27, 14, 0, 0.28);
}

.box1-inner {
  background-color: #ffffff;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 31px auto;
  background-image: linear-gradient(to right bottom, #ffffff, #fffefe, #fbfbfb, #f1ecec, #d2d2d2);
  box-shadow: 36px 27px 11px -5px rgba(27, 14, 0, 0.16);
  border: 1px solid #e6e5e4;
  transition: 1s;
  cursor: pointer;
  animation: swing ease-in-out 0.3s infinite alternate;
  transform-origin: top;
  transform-box: fill-box;
  left: calc(42% - 0rem);
}

.box1-inner:hover {
  box-shadow: -25px 50px 11px -5px rgba(27, 14, 0, 0.16);
  transition: 1s;
}

.icon-set {
  text-align: center;
  width: 100%;
  margin: auto;
  padding-top: 24px;
  float: left;
}

.text-heading {
}
.text-heading h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
}
.text-heading p {
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
}

/* .color1 div {
  background-image: linear-gradient(to right bottom, #fd4617, #ff6d12, #ff8d19, #ffaa2c, #ffc445);
} */

/*************swing************/
@keyframes swing {
  0% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
</style>
