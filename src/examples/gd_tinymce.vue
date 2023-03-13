<template>
  <div>
    <gdTinyMCE ref="gdTinyMCE" @keyupEditor="keyupEditor" @setUploadImg="setUploadImg" :isSetSelf="isSetSelf" :customEdite="customEdite"></gdTinyMCE>
  </div>
</template>

<script>
import gdTinyMCE from '../components_others/gd_tinymce/tinymce'
// import gdTinyMCE from 'gd_vue_components/src/components_others/gd_tinymce/tinymce'
export default {
  name: "gd_tinyMCE_item",
  data() {
    return {
      tinymecShow: false,
      maximizedMce: true,
      isSetSelf: true,
      imgUploadUrl: '',
      customEdite: ''
    }
  },
  components: {gdTinyMCE},
  computed: {
  },
  methods: {
    keyupEditor(params) {
      console.log(params);
    },
    setUploadImg(file, type, isChrome, index) {
      const that = this
      let formData = new FormData();
      formData.append('file', file);
      formData.append('isAddFileName', 'Y');
      formData.append('objectName', 'sys-plat');
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://10.3.1.87:7001/sys-system/minio/upload');
      xhr.setRequestHeader('Token-Auth', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiLnrqHnkIblkZgiLCJyb2xlX2NvZGUiOiJhZG1pbmlzdHJhdG9yIiwiYXZhdGFyIjoiaHR0cDovLzEwLjMuMS42MDo5MDAwL2d1b2RpL3N5cy1wbGF0L2JiLnBuZyIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6IlBvd2VyZWQgQnkgR3VvRGkiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInNjb3BlIjpbImFsbCJdLCJvYXV0aF9pZCI6IiIsImRlcHRfaWQiOiIxNDU4MzU3MDIyNTM4MjAzMTM4IiwidW5pdF9pZCI6IjEzNjUyMjY3MjgyMTkyMTM4MjUiLCJqdGkiOiJhMjliNzNhYS04YjVjLTQzMzAtOWJhYS00MjhkYTZjYzgwN2IiLCJhY2NvdW50IjoiYWRtaW4ifQ.WymFjGu9WbDCiZc6LToGD7Np2gx8nad3bhlX2Ovyt64')
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText)
            if (isChrome) {
              setTimeout(() => {
                that.setImgSrc(data.data, index)
              }, 500)
            }
          }
        }
      };
      xhr.onerror = function (e) {
        console.log(xhr.statusText);
      }
      xhr.send(formData);
    },
    setImgSrc(data, index) {
      this.$refs.gdTinyMCE.setImgSrc(data, index)
    }
  }
}
</script>

<style scoped>

</style>
