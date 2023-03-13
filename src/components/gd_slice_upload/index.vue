<template>
  <div class="GdSliceUpload">
    <el-button type="primary" :size="size" plain icon="el-icon-upload2" @click="handleUploads">{{ btnName }} </el-button>
    <gd-dialog :title="btnName" append-to-body :closed.sync="attachBoxs" width="555px" themeColor="#409EFF" draggable>
      <div style="padding: 10px">
        <el-upload class="upload-demo" :action="actionUrl" :http-request="httpRequests" multiple :limit="1" :file-list="fileList" :show-file-list="false">
          <el-button :size="size" type="primary">点击上传</el-button>
        </el-upload>
        <div v-if="files.flag" class="files_name">
          <div class="files_names">
            {{ files.name }}
          </div>
          <div>
            <el-progress :percentage="files.pro" :show-text="false"></el-progress>
          </div>
        </div>
      </div>
    </gd-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import SparkMD5 from 'spark-md5'
export default {
  name: "GdSliceUpload",
  props: {
    size: {
      type: String,
      default: 'small'
    },
    btnName: {
      type: String,
      default: '分片上传'
    },
    //上传的miniio ip地址
    uploadIp: {
      type: String,
      default: 'http://10.3.1.60:9000'
    },
    //分片上传的url
    actionUrl: {
      type: String,
      default: 'http://10.3.1.60/sys-system/minio/multipart/init-chunk-upload'
    },
    //分片合并的url
    composeUrl: {
      type: String,
      default: 'http://10.3.1.60/sys-system/minio/multipart/compose-file'
    },
    //定义分片的大小
    chunkSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    token: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      attachBoxs: false,
      files: {
        name: '',
        flag: false,
        pro: 0
      },
      fileList: [],

    }
  },
  methods: {
    //多片上传 自定义
    httpRequests(param) {
      this.files.name = param.file.name
      this.files.pro = 0
      this.files.flag = true
      this.uploadFile(param.file)
    },
    handleUploads() {
      this.attachBoxs = true
      this.files.flag = false
    },
    /**
     * 获取文件MD5
     * @param file
     * @returns {Promise<unknown>}
     */
    getFileMd5(file) {
      let fileReader = new FileReader()
      fileReader.readAsBinaryString(file)
      let spark = new SparkMD5()
      return new Promise(resolve => {
        fileReader.onload = e => {
          spark.appendBinary(e.target.result)
          resolve(spark.end())
        }
      })
    },
    //上传调用
    async uploadFile(data) {
      const _self = this
      //获取用户选择的文件
      const file = data
      //文件大小(大于5m再分片哦，否则直接走普通文件上传的逻辑就可以了，这里只实现分片上传逻辑)
      const fileSize = file.size

      if (fileSize <= this.chunkSize) {
        console.log('上传的文件大于5m才能分片上传')
      }
      //计算当前选择文件需要的分片数量
      const chunkCount = Math.ceil(fileSize / this.chunkSize)
      // console.log("文件大小：", (file.size / 1024 / 1024) + "Mb", "分片数：", chunkCount)
      //获取文件md5
      const fileMd5 = await this.getFileMd5(file)
      //向后端请求本次分片上传初始化
      // const initUploadParams = JSON.stringify({ chunkCount: chunkCount, fileMd5: fileMd5 })
      const initUploadParams = { chunkCount: chunkCount, fileMd5: fileMd5 }
      axios({
        method: 'post',
        url: this.actionUrl,
        data: initUploadParams,
        timeout: 60 * 1000,
        headers: this.token ? {
          "Token-Auth": this.token
        } : {}
      }).then(
        res => {
          console.log(res.data, 'res');
          // code = 200 则仅需要合并文件 当前文件上传情况：所有分片已在之前上传完成，仅需合并
          if (res.data.code === 200) {
            _self.files.pro = 100
            this.composeFile(fileMd5, file.name)
            return
            //code = 205 文件在之前已经上传完成，直接走秒传逻辑；code = 100 文件上传过，但未完成，走续传逻辑;
          } else if (res.data.code === 205) {
            //自行处理逻辑
            this.$emit('uploadComplete', res)
            this.attachBoxs = false
            this.$message.success(res.msg)
            return
          } else if (res.data.code === 100) {

            //定义变量 让for循环里面的请求都完成之后在进行合并
            let arr = []
            const chunkUploadUrls = res.data.data
            //定义每个分片的百分比
            const proNum = 100 / chunkUploadUrls.length
            console.log(proNum, 'proNum')
            //若使用并发上传方式，当前分片上传完成后打印出来的完成提示是不准确的，但这并不影响最终运行结果；原因是由ajax请求本身是异步导致的
            for (let item of chunkUploadUrls) {
              //分片开始位置
              let start = (item.partNumber - 1) * this.chunkSize
              //分片结束位置
              let end = Math.min(fileSize, start + this.chunkSize)
              //取文件指定范围内的byte，从而得到分片数据
              let _chunkFile = file.slice(start, end)
              //ip 前缀传进来
              let url = this.uploadIp + item.uploadUrl
              arr.push(
                new Promise(async function (resolve, reject) {
                  await axios({
                    method: 'put',
                    url: url,
                    data: _chunkFile,
                    headers: {
                      'Content-Type': false,
                      processData: false,
                      "Token-Auth": _self.token
                    },
                    onUploadProgress(progress) {
                      // console.log(progress, '....');
                      // console.log(Math.round(progress.loaded / progress.total * 100) + '%');
                    }
                  })
                    .then(res => {
                      // 每一个请求都会进来赋值
                      _self.files.pro = _self.files.pro + proNum
                      resolve(res)
                    })
                    .catch(res => {
                      reject(res)
                    })
                })
              )
            }
            //请求后端合并文件
            Promise.all(arr).then(result => {
              this.composeFile(fileMd5, file.name)
            })
          }
        }
      ).catch(resp => {
        console.log(resp);

      })
    },
    /**
     * 请求后端合并文件
     * @param fileMd5
     * @param fileName
     */
    composeFile(fileMd5, fileName) {
      axios({
        method: 'post',
        url: this.composeUrl,
        timeout: 60 * 1000,
        data: { fileMd5: fileMd5, fileName: fileName },
        headers: this.token ? {
          "Token-Auth": this.token
        } : {}
      }).then(res => {
        this.attachBoxs = false
        this.$emit('uploadComplete', res)
      }).catch(res => {
        this.$emit('uploadComplete', res)
      })

    },
  }
}
</script>
<style lang="scss" scoped>
.GdSliceUpload {
  display: inline-block;
  .files_name {
    font-size: 14px;
    .files_names {
      padding: 5px;
    }
  }
}
</style>