<template>
  <div v-loading="tinymceLoading" ref="editorWord" class="editor-word">
    <el-form ref="editorModel" :model="editorModel" :rules="editorRules" label-position="top">
      <el-form-item prop="content">
        <textarea id="tinymceEditer" class="tinymce-textarea" @paste="onPaste" style="height: 800px"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import tinymce from 'tinymce'
import 'tinymce/themes/modern/theme'
import 'gd_vue_components/src/components_others/gd_tinymce/tinymce/langs/zh_CN.GB2312'
import 'tinymce/skins/lightgray/skin.min.css'
import 'tinymce/skins/lightgray/content.min.css'
import 'tinymce/plugins/fullpage/plugin'
import 'tinymce/plugins/advlist/plugin'
import 'tinymce/plugins/anchor/plugin'
import 'tinymce/plugins/autolink/plugin'
import 'tinymce/plugins/autoresize/plugin'
import 'tinymce/plugins/autosave/plugin'
import 'tinymce/plugins/bbcode/plugin'
import 'tinymce/plugins/code/plugin'
import 'tinymce/plugins/codesample/plugin'
import 'tinymce/plugins/colorpicker/plugin'
import 'tinymce/plugins/contextmenu/plugin'
import 'tinymce/plugins/directionality/plugin'
import 'tinymce/plugins/emoticons/plugin'
import 'tinymce/plugins/fullpage/plugin'
import 'tinymce/plugins/fullscreen/plugin'

import 'tinymce/plugins/charmap/plugin'
import 'tinymce/plugins/hr/plugin'
import 'tinymce/plugins/help/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/imagetools/plugin'
import 'tinymce/plugins/importcss/plugin'
import 'tinymce/plugins/insertdatetime/plugin'
import 'tinymce/plugins/legacyoutput/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/media/plugin'
import 'tinymce/plugins/nonbreaking/plugin'
import 'tinymce/plugins/noneditable/plugin'
import 'tinymce/plugins/pagebreak/plugin'

import 'tinymce/plugins/paste/plugin'
import 'tinymce/plugins/preview/plugin'
import 'tinymce/plugins/print/plugin'
import 'tinymce/plugins/save/plugin'
import 'tinymce/plugins/searchreplace/plugin'
import 'tinymce/plugins/spellchecker/plugin'
import 'tinymce/plugins/tabfocus/plugin'
import 'tinymce/plugins/table/plugin'
import 'tinymce/plugins/template/plugin'
import 'tinymce/plugins/textcolor/plugin'
import 'tinymce/plugins/textpattern/plugin'
import 'tinymce/plugins/toc/plugin'
import 'tinymce/plugins/visualblocks/plugin'
import 'tinymce/plugins/visualchars/plugin'
import 'tinymce/plugins/wordcount/plugin'
import './plugins/wordcount/plugin'
import 'tinymce-imageupload'
import pluginAPI from 'tinymce-imageupload/js/main'
import style from 'tinymce-imageupload/css/style'
// import { uploadFile } from '@/projects/system/api/resource/attach'

export default {
  name: 'Index',
  props: {
    // 原tinyMCE的主参数
    tinyObj: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 初始化的html
    customEdite: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 上传的路由
    imgUploadUrl: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 上传的参数
    imgUploadData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 上传的token
    imgUploadToken: {
      type: Object,
      default: () => {
        return {
          headerName: 'Token-Auth',
          headerValue: '',
        }
      }
    },
    // 是否自己调接口上传图片
    isSetSelf: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    officeType: {
      type: String,
      default: () => {
        return 'word' // excel word
      }
    }
  },
  data() {
    return {
      spinShow: true,
      tinymceLoading: false,
      editorModel: {
        content: ''
      },
      editorRules: {
        content: [
          {
            type: 'string',
            min: 5,
            message: 'the username size shall be no less than 5 chars ',
            trigger: 'blur'
          }
        ]
      },
      imgList: { length: 0 },
      tinymceObj: {},
      customEditor: '',
      stratEditor: '<html xmlns="http://www.w3.org/1999/xhtml"><head ><meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8"><title xml:lang="en-US">- no title specified</title><meta name="DCTERMS.title" content="" xml:lang="en-US"><meta name="DCTERMS.language" content="en-US" scheme="DCTERMS.RFC4646"><meta name="DCTERMS.source" content="http://xml.openoffice.org/odf2xhtml"><meta name="DCTERMS.creator" content="86135"><meta name="DCTERMS.issued" content="2021-06-23T07:07:50" scheme="DCTERMS.W3CDTF"><meta name="DCTERMS.contributor" content="86135"><meta name="DCTERMS.modified" content="2021-06-23T07:12:23" scheme="DCTERMS.W3CDTF"><meta name="DCTERMS.provenance" content="" xml:lang="en-US"><meta name="DCTERMS.subject" content="," xml:lang="en-US"><link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" hreflang="en"><link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" hreflang="en"><link rel="schema.DCTYPE" href="http://purl.org/dc/dcmitype/" hreflang="en"><link rel="schema.DCAM" href="http://purl.org/dc/dcam/" hreflang="en"><style type="text/css">\n' +
        '    @page {  }\n' +
        '    table { border-collapse:collapse; border-spacing:0; empty-cells:show }\n' +
        '    td, th { vertical-align:top; font-size:12pt;}\n' +
        '    h1, h2, h3, h4, h5, h6 { clear:both;}\n' +
        '    ol, ul { margin:0; padding:0;}\n' +
        '    li { list-style: none; margin:0; padding:0;}\n' +
        '    /* "li span.odfLiEnd" - IE 7 issue*/\n' +
        '    li span. { clear: both; line-height:0; width:0; height:0; margin:0; padding:0; }\n' +
        '    span.footnodeNumber { padding-right:1em; }\n' +
        '    span.annotation_style_by_filter { font-size:95%; font-family:Arial; background-color:#fff000;  margin:0; border:0; padding:0;  }\n' +
        '    span.heading_numbering { margin-right: 0.8rem; }* { margin:0;}\n' +
        '    .fr1 { font-size:10pt; font-family:Times New Roman; text-align:center; vertical-align:top; writing-mode:horizontal-tb; direction:ltr; margin-left:0in; margin-right:0in; margin-top:0in; margin-bottom:0in; background-color:transparent; padding:0in; border-style:none; }\n' +
        '    .P1 { font-size:12pt; margin-bottom:0in; margin-top:0in; text-align:justify ! important; font-family:宋体; writing-mode:horizontal-tb; direction:ltr; }\n' +
        '    .P2 { font-size:10.5pt; margin-bottom:0in; margin-top:0in; text-align:justify ! important; font-family:Calibri; writing-mode:horizontal-tb; direction:ltr; }\n' +
        '    .Standard { font-size:10.5pt; font-family:Calibri; writing-mode:horizontal-tb; direction:ltr; margin-top:0in; margin-bottom:0in; text-align:justify ! important; }\n' +
        '    /* ODF styles with no properties representable as CSS */\n' +
        '     { }\n' +
        '    </style></head>' +
        '<body dir="ltr" style="max-width:8.2681in;margin-top:1in; margin-bottom:1in; margin-left:1.25in; margin-right:1.25in; ">' +
        '<div id="tinyId"><p></p></div>' +
        '</body></html>'
      ,
      globalTiny: null,
      htmlDom: null
    }
  },
  created() {
    const vm = this
    this.globalTiny = tinymce.util.Tools.resolve('tinymce.PluginManager')
    this.globalTiny.add('imageupload1', function(editor) {
      vm.componentRegister(editor)
    })
    const height = document.body.offsetHeight - 300
    this.customEditor = this.customEdite  || this.stratEditor
    const obj = {
      selector: '#tinymceEditer',
      branding: false,
      elementpath: false,
      paste_data_images: true,
      powerpaste_word_import: 'propmt',
      powerpaste_html_import: 'propmt',
      powerpaste_allow_local_images: true,
      height: height,
      language: 'zh_CN.GB2312',
      menubar: 'edit view format table tools', // edit insert view format table tools
      // menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools imageupload1',
        'searchreplace visualblocks visualchars code fullpage',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons paste textcolor colorpicker textpattern imagetools codesample'
      ],
      toolbar1: ' newnote print preview | undo redo | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link emoticons media codesample',
      imageupload_url: '/sys-system/minio/upload?isAddFileName=Y&objectName=sys-plat', //| insert
      convert_urls: false,
      table_default_styles: {
        width: '100%',
        height: '100%',
        borderCollapse: 'collapse'
      },
      setup: function(editor) {
        editor.on('init', function(e) {
          vm.spinShow = false
          if (localStorage.editorContent) {
            tinymce.get('tinymceEditer').setContent(localStorage.editorContent)
          }
        })
        editor.on('keydown', function(e) {
          localStorage.editorContent = tinymce.get('tinymceEditer').getContent()
          vm.editorModel.content = tinymce.get('tinymceEditer').getContent()
          const params = {editorContent: localStorage.editorContent, content: vm.editorModel.content}
          vm.$emit('keydownEditor', params)
        })
        editor.on('keyup', function(e) {
          vm.setHeight()
          localStorage.editorContent = tinymce.get('tinymceEditer').getContent()
          vm.editorModel.content = tinymce.get('tinymceEditer').getContent()
          const params = {editorContent: localStorage.editorContent, content: vm.editorModel.content}
          vm.$emit('keyupEditor', params)
        })
        editor.addCommand('mceImageUpload', function() {
          vm.open(editor)
          const imgFile = document.getElementById('imgFile1')
          const mceBoxContent = document.getElementById('mceBoxContent1')
          imgFile.addEventListener('change', (e) => {
            const filesLise = Array.prototype.slice.call(e.target.files)
            const orignalLen = 0

            pluginAPI.imagePreview(filesLise, orignalLen, mceBoxContent)

            filesLise.forEach((item, index) => {
              vm.imgList[vm.imgList.length] = item
              vm.imgList.length = vm.imgList.length + 1
            })
          })

          pluginAPI.on(mceBoxContent, 'del-btn', 'click', (e) => {
            const elemIndex = e.target.getAttribute('index')
            const parentNode = pluginAPI.parentNodes(e.target, 'prev-img-out-box')
            parentNode.remove()
            delete vm.imgList[elemIndex]
            vm.imgList.length = vm.imgList.length - 1
          })
        })
      }
    }
    this.tinymceObj = Object.assign(obj, this.tinyObj)
  },
  mounted() {
    this.tinymceLoading = true
    this.init()
    window.addEventListener("scroll",this.scrollEvent)
  },
  destroyed() {
    tinymce.get('tinymceEditer').destroy()
    document.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    // 粘贴事件
    onPaste(event) {
      let isChrome = false;
      if ( event.clipboardData || event.originalEvent ) {
        //not for ie11  某些chrome版本使用的是event.originalEvent
        const clipboardData = (event.clipboardData || event.originalEvent.clipboardData);
        if (clipboardData.items) {
          // for chrome
          const items = clipboardData.items
            let len = items.length
            let blob = null;
          isChrome = true;
          //阻止默认行为即不让剪贴板内容在div中显示出来
          // event.preventDefault();
          //在items里找粘贴的image,据上面分析,需要循环
          for (let i = 0; i < len; i++) {
            if (items[i].type.indexOf("image") !== -1) {
              //getAsFile() 此方法只是living standard firefox ie11 并不支持
              blob = items[i].getAsFile();
              this.uploadImgFromPaste(blob, 'paste', isChrome, i);
            }
          }
        }
      }
    },
    //调用图片上传接口,将file文件以formData形式上传
    uploadImgFromPaste (file, type, isChrome, index){
      if (this.isSetSelf) {
        this.$emit('setUploadImg', file, type, isChrome, index)
      } else {
        const that = this
        let formData = new FormData();
        formData.append('file', file);
        formData.append('isAddFileName', 'Y');
        formData.append('objectName', 'sys-plat');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.imgUploadUrl);
        xhr.setRequestHeader(this.imgUploadToken.headerName, this.imgUploadToken.headerValue)
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
      }
    },
    // 设置img的src参数值
    setImgSrc(src, index) {
      const dom = this.htmlDom.getElementsByTagName('img')
      dom[index].src = src
    },
    // 设置编辑word文本高度
    setHeight() {
      document.getElementById('tinymceEditer_ifr').style.height = (this.htmlDom.offsetHeight > 1134 ? this.htmlDom.offsetHeight : 1134) + 'px'
    },
    // 下拉滚动条事件
    scrollEvent(e) {
      const scrollTopC = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.setClass(scrollTopC)
    },
    // 设置css
    setClass(scrollTop) {
      const dom = document.getElementsByClassName('mce-top-part')[0].getElementsByClassName('mce-container-body')[0]
      if (!dom.classList.contains('box-shadow-bottom') && scrollTop > 0) {
        dom.classList.add('box-shadow-bottom')
      }
      if (scrollTop === 0 && dom.classList.contains('box-shadow-bottom')) {
        dom.classList.remove('box-shadow-bottom')
      }
    },
    // 初始化tinymce
    init() {
      const that = this
      this.$nextTick(() => {
        tinymce.init(this.tinymceObj)
        setTimeout(() => {
          const editerIn = tinymce.get('tinymceEditer')
          editerIn.setContent(this.customEditor)
          // const ui1 = document.getElementById('tinymceEditer_ifr')
          this.htmlDom = document.getElementById('tinymceEditer_ifr').contentWindow.document.getElementsByTagName('html')[0]
          this.setHeight()
          this.htmlDom.style.overflow = 'hidden'
          this.tinymceLoading = false
          const divDome = document.getElementsByClassName('mce-tinymce')[0].firstChild
          const newNodeTop = document.createElement("div");
          newNodeTop.style.height = '139px'
          newNodeTop.style.width = '100%'
          divDome.parentNode.insertBefore(newNodeTop, divDome)
          // 监听粘贴事件
          document.getElementById('tinymceEditer_ifr').contentWindow.document.addEventListener('paste', that.onPaste)
          this.setOfficeType()
        }, 2000)
      })
    },
    // 设置文档类型
    setOfficeType() {
      const typeList = {
        word: '792px',
        excel: '90%',
      }
      const editArea = document.getElementsByClassName('mce-edit-area')[0]
      editArea.style.width = typeList[this.officeType] ? typeList[this.officeType] : '792px'
    },
    // 上传图片事件
    componentRegister(editor) {
      editor.addButton('imageupload1', {
        title: '上传图片',
        icon: 'image',
        cmd: 'mceImageUpload'
        // image : url + '/img/icon.png'
      })
      editor.addMenuItem('imageupload1', {
        icon: 'image',
        context: 'insert',
        cmd: 'mceImageUpload'
      })
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {

      })
    },
    // 打开上传弹窗事件
    open(editor) {
      const self = this
      this.imgList = { length: 0 }
      editor.windowManager.open({
        title: '本地图片上传',
        width: 500,
        height: 400,
        html: `
                ${style}
                <div class="mce-box-content" id="mceBoxContent1">
                    <label class="add-img">
                        <input type="file" id="imgFile1" name="file" multiple="multiple" hidden>
                    </label>
                </div>
            `,
        buttons: [{
          text: 'Ok',
          subtype: 'primary',
          onclick: function(e) {
            self.uploadFileTest(self.imgList, editor)
            editor.windowManager.close()
          }
        }, {
          text: 'Close',
          onclick: function() {
            editor.windowManager.close()
          }
        }]
      })
    },
    // 请求接口
    async uploadFileTest(row, editor) {
      const formData = new FormData()
      delete row['length']
      for (const key in row) {
        const file = row[key]
        formData.append('file', file, file.name) // 通过append向form对象添加数据
      }
      formData.append('isAddFileName', 'Y')
      formData.append('objectName', 'sys-plat')
      /*const { data, code } = await uploadFile(formData)
      if (this.callCodeJudge(code)) {
        const tpl = '<img src="%s" />'
        editor.insertContent(tpl.replace('%s', data))
        editor.focus()
      }*/
    },
    // 清空表单
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style>
.editor-word{
  height: calc(100%);
  overflow-y: auto;
  overflow-x: hidden;
}
.mce-container .mce-container-body{
  text-align: center!important;
}
.mce-top-part > .mce-container-body{
  position: fixed;
  width: calc(100%);
  background: #f2f4f7;
  top: 0;
}
.box-shadow-bottom{
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%)
}
.mce-menubar .mce-menubtn:hover .mce-txt{
  color: white!important;
}
.mce-menubar .mce-menubtn:hover, .mce-menubar .mce-menubtn.mce-active, .mce-menubar .mce-menubtn:focus {
  background-color: #4991f2!important;
  color: white!important;
  border-color:white!important;
  border-radius: 5px;
  font-size: 12px;
}

/*鼠标出现标签*/
.mce-tooltip-arrow{
  border-color: rgba(255, 255, 255, 0)!important;

}
.mce-tooltip-inner{
  background-color: #ffffff!important;
  border-radius: 3px!important;
  box-shadow: 0px 2px 10px 0px #c9c9c9!important;
  color: #505050!important;
}
.mce-colorbutton button .mce-preview{
  background: rgb(65, 127, 249);
  margin-left: -16px;
  height: 3px;
}
/*鼠标经过图标*/
.mce-btn:hover, .mce-btn:active{
  background: rgba(25,55,88,.04)!important;
  border-color: rgba(255, 255, 255, 0)!important;
  border-radius: 5px;
}
.mce-btn{
  background-color: rgba(255, 255, 255, 0)!important;
}
.mce-panel{
  border: 0!important;
  background-color: #f2f4f7!important;
}
.mce-top-part::before{
  border: none!important;
  box-shadow: none!important;
}
.mce-panel.mce-last{
  margin: 10px 0 10px 0;

}
.mce-container-body.mce-flow-layout {
  padding: 10px 0;
}
.mce-container-body .mce-btn-group:not(:first-child) {
  border-left: 1px solid #d9d9d93d
}
.mce-tinymce, .ivu-card-shadow{
  box-shadow: none!important;
}
.mce-container-body .mce-edit-area{
  margin: 0 auto;
  background: rgb(255, 255, 255)!important;
  box-shadow: rgb(158 161 165 / 40%) 0px 2px 12px 0px;
}

.mce-floatpanel.mce-popover.mce-bottom>.mce-arrow{
  border-bottom-color: rgba(0,0,0,0)!important;
}
.mce-floatpanel.mce-popover.mce-bottom>.mce-arrow:after {
  border: none;
}
</style>
