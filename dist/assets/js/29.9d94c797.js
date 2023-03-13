(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1071:function(t){t.exports=JSON.parse('{"system":[],"wfmng":[{"question":"流程定制模块列表页一进去并不加载数据，而是切换或者点击查询才出来数据","reason":"组件库存在更新","solve":"查看国地组件库 gd_vue_components 的版本是不是 0.4.37 及以上","errPic":[],"sucessPic":[]}],"formDesigner":[],"base":[{"question":"拉取子系统的时候出现 \'src/projects/system\' already exists in the index and is not a submodule","reason":"之前有拉取过代码，存在缓存","solve":"git rm -r --cached \'src/projects/system\'","errPic":[],"sucessPic":[]}],"linecode":[]}')},1072:function(t,e,a){"use strict";a(611)},1083:function(t,e,a){"use strict";a.r(e);a(45),a(48),a(7),a(86),a(25),a(29),a(34);var c=a(107);function s(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(c.a)(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,i=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return r=t.done,t},e:function(t){i=!0,o=t},f:function(){try{r||null==a.return||a.return()}finally{if(i)throw o}}}}var n=a(8),o=a(23),r=(a(80),a(81),a(158),a(109),a(1071)),i={name:"UsuallyQuestion",data:function(){return{loading:!1,form:{question:"",reason:"",solve:"",errPic:[],sucessPic:[]},show:!1,formData:{},showDialog:!1,list:[{name:"基础运维",code:"system",desc:"",colorStyle:{color:"#ff6a00"},style:{backgroundImage:"linear-gradient(to right bottom,#fd4617,#ff6d12,#ff8d19,#ffaa2c,#ffc445)"}},{name:"工作流",code:"wfmng",desc:"",colorStyle:{color:"#ff6a00"},style:{backgroundImage:"linear-gradient(to right bottom,#fff05a,#ffde56,#ffcc55,#ffbb57,#ffaa5a)"}},{name:"表单定制",code:"formDesigner",desc:"",colorStyle:{color:"#ffbc00"},style:{backgroundImage:"linear-gradient(to right, #96c93d, #00b09b)"}},{name:"基础框架",code:"base",desc:"",colorStyle:{color:"#06af23"},style:{backgroundImage:"linear-gradient(to right bottom,#3da5d9,#2eb9e4,#29ccec,#38dff1,#54f2f2)"}},{name:"在线代码",code:"linecode",desc:"",colorStyle:{color:"#06a7af"},style:{backgroundImage:"linear-gradient(to right bottom,#fd4617,#ff6d12,#ff8d19,#ffaa2c,#ffc445)"}}],questionData:[]}},computed:{isLimit:function(){return"edit"!==this.$route.query.type},isEdit:function(){return"edit"===this.$route.query.type}},mounted:function(){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryLogData();case 2:(a=localStorage.getItem("hasAdd"))&&t.showRight(JSON.parse(a));case 4:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{getList:function(t){return t.map((function(t){return"/vuecomp/question/".concat(t.name)}))},closedrawer:function(){localStorage.removeItem("hasAdd")},fileToBase64Async:function(t){return new Promise((function(e,a){var c=new FileReader;c.readAsDataURL(t),c.onload=function(t){e(t.target.result)}}))},submit:function(){var t=this;this.loading=!0,this.form.code=this.formData.code,this.$axios.post("http://10.1.6.140:3000/upimages",this.form).then((function(e){200===e.status&&(localStorage.setItem("hasAdd",JSON.stringify(t.formData)),t.show=!1,t.loading=!1)}))},commonMethod:function(t,e){var a=this;return Object(o.a)(Object(n.a)().mark((function c(){var r,i,l,u,f;return Object(n.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=[],i=t.map(function(){var t=Object(o.a)(Object(n.a)().mark((function t(c){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=c.name,t.next=4,a.fileToBase64Async(c.raw);case 4:return t.t2=t.sent,t.abrupt("return",{type:t.t0,name:t.t1,base64Cont:t.t2});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c.t0=s,c.next=5,i;case 5:c.t1=c.sent,l=(0,c.t0)(c.t1),c.prev=7,l.s();case 9:if((u=l.n()).done){c.next=18;break}return f=u.value,c.t2=r,c.next=14,f;case 14:c.t3=c.sent,c.t2.push.call(c.t2,c.t3);case 16:c.next=9;break;case 18:c.next=23;break;case 20:c.prev=20,c.t4=c.catch(7),l.e(c.t4);case 23:return c.prev=23,l.f(),c.finish(23);case 26:a.form[e]=r;case 27:case"end":return c.stop()}}),c,null,[[7,20,23,26]])})))()},onChange:function(t,e){this.commonMethod(e,"errPic")},onChangeSuccess:function(t,e){var a=this;return Object(o.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.commonMethod(e,"sucessPic");case 1:case"end":return t.stop()}}),t)})))()},getBaseData:function(){},add:function(){this.show=!0},queryLogData:function(){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("http://10.1.6.140:3000/getQuestion").then((function(e){200===e.status&&e.data.data&&(t.questionData=e.data.data)})).catch((function(e){t.questionData=r}));case 2:case"end":return e.stop()}}),e)})))()},showRight:function(t){this.showDialog=!0,this.formData.title=t.name||t.title,this.formData.code=t.code,this.formData[t.code]=this.questionData[t.code]},toServe:function(){window.open("http://10.0.1.247:8088/view/%E5%9F%BA%E7%A1%80%E8%BF%90%E7%BB%B4/job/vuecomp/","_black")},getDataFromLocal:function(){var t=this;this.$axios.post("http://10.1.6.140:3000/localcomp").then((function(e){t.$message.success("同步本地数据成功，尽量10秒后再推送到服务器")}))}}},l=(a(1072),a(27)),u=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addcomp"},[a("el-button",{attrs:{type:"primary"},on:{click:t.getDataFromLocal}},[t._v("同步本地数据")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.toServe}},[t._v("推送到服务器")]),t._v(" "),a("el-drawer",{attrs:{title:t.formData.title+"问题列表",visible:t.showDialog,direction:"rtl",size:"50%"},on:{"update:visible":function(e){t.showDialog=e},close:t.closedrawer}},[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.add}},[t._v("添加问题")]),t._v(" "),t._l(t.formData[t.formData.code],(function(e,c){return a("div",{key:c,staticStyle:{padding:"10px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.question))])]),t._v(" "),a("div",{staticClass:"textItem"},[t._v("原因")]),t._v(" "),a("div",{staticClass:"textItemValue"},[t._v(t._s(e.reason))]),t._v(" "),0!==e.errPic.length?a("div",{staticClass:"textItem"},[t._v("错误截图")]):t._e(),t._v(" "),0!==e.errPic.length?a("div",{staticClass:"textItemValue"},[a("div",t._l(e.errPic,(function(c,s){return a("el-image",{key:s,staticStyle:{width:"100px",height:"100px","margin-right":"8px"},attrs:{src:"/vuecomp/question/"+c.name,"preview-src-list":t.getList(e.errPic)}})})),1)]):t._e(),t._v(" "),a("div",{staticClass:"textItem"},[t._v("解决方法")]),t._v(" "),a("div",{staticClass:"textItemValue"},[t._v(t._s(e.solve))]),t._v(" "),0!==e.sucessPic.length?a("div",{staticClass:"textItem"},[t._v("解决截图")]):t._e(),t._v(" "),0!==e.sucessPic.length?a("div",{staticClass:"textItemValue"},[a("div",t._l(e.sucessPic,(function(c,s){return a("el-image",{key:s,staticStyle:{width:"100px",height:"100px","margin-right":"8px"},attrs:{src:"/vuecomp/question/"+c.name,"preview-src-list":t.getList(e.sucessPic)}})})),1)]):t._e()])],1)}))],2),t._v(" "),a("div",{staticClass:"htmleaf-container"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"15%"}},[a("div",{staticStyle:{display:"flex"}},t._l(t.list,(function(e,c){return a("div",{key:c,staticClass:"box",staticStyle:{"margin-right":"20px"},on:{click:function(a){return t.showRight(e)}}},[a("div",{staticClass:"box1",style:e.style},[a("div",{staticClass:"box1-inner"},[a("span",{staticClass:"icon-set i1"},[a("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"80",height:"80",viewBox:"0 0 172 172"}},[a("g",{attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1"}},[a("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none"}}),t._v(" "),a("g",{attrs:{fill:"#ff6a00"}},[a("path",{attrs:{d:"M101.05,17.2c-4.72427,0 -8.6,3.87573 -8.6,8.6v34.4c0,4.72427 3.87573,8.6 8.6,8.6h10.75v13.79023l13.79023,-13.79023h31.35977c4.72427,0 8.6,-3.87573 8.6,-8.6v-34.4c0,-4.72427 -3.87573,-8.6 -8.6,-8.6zM101.05,21.5h55.9c2.40083,0 4.3,1.89917 4.3,4.3v34.4c0,2.40083 -1.89917,4.3 -4.3,4.3h-33.14023l-7.70977,7.70977v-7.70977h-15.05c-2.40083,0 -4.3,-1.89917 -4.3,-4.3v-34.4c0,-2.40083 1.89917,-4.3 4.3,-4.3zM19.35,27.95c-2.35009,0 -4.3,1.94991 -4.3,4.3v86c0,2.35009 1.94991,4.3 4.3,4.3h49.45v8.6h-6.45c-4.72427,0 -8.6,3.87573 -8.6,8.6v4.3h64.5v-4.3c0,-4.72427 -3.87573,-8.6 -8.6,-8.6h-6.45v-8.6h49.45c2.35009,0 4.3,-1.94991 4.3,-4.3v-43h-4.3v43h-49.45h-34.4h-49.45v-86h66.65v-4.3zM111.8,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM129,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM146.2,38.7c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM25.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM34.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM43,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM51.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM60.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM68.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM77.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM86,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM94.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM103.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM111.8,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM120.4,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM129,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM137.6,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM146.2,105.35c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM73.1,122.55h25.8v8.6h-25.8zM62.35,135.45h47.3c2.40083,0 4.3,1.89917 4.3,4.3h-55.9c0,-2.40083 1.89917,-4.3 4.3,-4.3z"}})])])])])])]),t._v(" "),a("div",{staticClass:"text-heading color1"},[a("h3",{style:e.colorStyle},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.code))])])])})),0)])]),t._v(" "),a("gd-dialog",{attrs:{title:"添加问题","z-index":5e3,closed:t.show,"append-to-body":!0,width:"800px",height:"800px",draggable:""},on:{"update:closed":function(e){t.show=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"问题描述"}},[a("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"问题原因"}},[a("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"解决方法"}},[a("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.form.solve,callback:function(e){t.$set(t.form,"solve",e)},expression:"form.solve"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"错误截图"}},[a("el-upload",{attrs:{action:"","list-type":"picture-card","auto-upload":!1,"on-change":t.onChange,multiple:""}},[a("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"解决截图"}},[a("el-upload",{attrs:{action:"","list-type":"picture-card","auto-upload":!1,"on-change":t.onChangeSuccess,multiple:""}},[a("i",{staticClass:"el-icon-plus"})])],1)],1),t._v(" "),a("template",{slot:"footer"},[a("div",[a("el-button",{attrs:{size:"small",type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.show=!1}}},[t._v("取消")])],1)])],2)],1)}),[],!1,null,null,null);e.default=u.exports},611:function(t,e,a){}}]);