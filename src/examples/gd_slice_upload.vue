<template>
  <div>
    <GdSliceUpload
      :token="token"
      :size="size"
      @uploadComplete="uploadComplete"
      :actionUrl="actionUrl"
      :uploadIp="uploadIp"
      :btnName="btnName"
      :composeUrl="composeUrl"
      :chunkSize="chunkSize"
    />
  </div>
</template>
<script>
import GdSliceUpload from "../components/gd_slice_upload/index.vue"
export default {
  name: 'gd_slice_upload',
  data() {
    return {
      //按键大小
      size: 'small',
      //按键名称以及弹窗名称
      btnName: '分片上传',
      //上传的miniio ip地址
      uploadIp: "http://10.3.1.60:9000",
      //分片上传的url地址:
      actionUrl: 'http://10.3.1.60/sys-system/minio/multipart/init-chunk-upload',
      //请求后端合并文件地址
      composeUrl: "http://10.3.1.60/sys-system/minio/multipart/compose-file",
      //分片大小 用于判断是否大文件可以分片
      chunkSize: 10 * 1024 * 1024,
      //请求token
      token: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLnrqHnkIblkZgiLCJyb2xlX2NvZGUiOiJhZG1pbmlzdHJhdG9yIiwiZGVwdF9uYW1lIjoi5bqU55So5LqM6YOoIiwiYXZhdGFyIjoiaHR0cDovLzEwLjMuMS42MDo5MDAwL2d1b2RpL3N5cy1wbGF0L2JiLnBuZyIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInBvc3RfbmFtZSI6IiIsInNjb3BlIjpbImFsbCJdLCJwb3N0X2NvZGUiOiIiLCJvYXV0aF9pZCI6IiIsInJlZ2lvbl9uYW1lIjoi5rGV5bC-5biCIiwiZGVwdF9pZCI6IjE0NTgzNTcwMjI1MzgyMDMxMzgiLCJ1bml0X2lkIjoiMTM2NTIyNjcyODIxOTIxMzgyNSIsImp0aSI6ImJlNjdiNzZmLWI5MGYtNGVhOC1iNTQ4LWI3MWZlMzljNzBiMCIsImFjY291bnQiOiJhZG1pbiIsInJlZ2lvbl9jb2RlIjoiNDQxNSJ9.-xn9WMZaCxlk-9DQhXMK2JktZq_l-J4ID8pf0SQiVRI'
    }
  },
  components: {
    GdSliceUpload
  },
  methods: {
    //合并成功之后返回的数据自行逻辑处理
    uploadComplete(res) {
      console.log(res);
    }
  }
}
</script>