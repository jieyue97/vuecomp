(window.webpackJsonp=window.webpackJsonp||[]).push([[8,65],{1047:function(e,t,n){"use strict";n(608)},1133:function(e,t,n){"use strict";n.r(t);var i=n(1076),o=n(616),l=n(619),s=n(531),a={components:{top:o.default,tags:i.default,sidebar:l.default},provide:function(){return{}},data:function(){return{activeName:"first",siberMenuConfig:s.a,ruleForm:{isNeedTag:!0,isNeedCollage:!0,menuTitle:"基础运维",needChildTitle:!0,menuChildTitle:"基础运维4.0",background:"rgb(50, 87, 153)",needFullScreen:!0,menuShowType:"平铺",backgroundLeft:"#20222a"}}},created:function(){},mounted:function(){},computed:{ifSideBar:function(){return!1}},props:[],methods:{reset:function(){this.ruleForm={isNeedTag:!0,isNeedCollage:!0,menuTitle:"基础运维",needChildTitle:!0,menuChildTitle:"基础运维4.0",background:"rgb(50, 87, 153)",needFullScreen:!0,menuShowType:"平铺",backgroundLeft:"#20222a"},this.$refs.top.navObjs.background="rgb(50, 87, 153)",this.$refs.top.navObjs.backgroundLeft="#20222a",this.$refs.top.navObjs.menuShowType="topMenu",this.$refs.top.navObjs.menuTitle="基础运维",this.$refs.top.navObjs.menuChildTitle="基础运维4.0",this.$refs.top.navObjs.needFullScreen=!0,this.siberMenuConfig.isNeedTag=!0,this.$refs.tagRef.siberMenuConfig.isNeedCollage=!0},topColorChange:function(e){this.$refs.top.navObjs.background=this.ruleForm.background},leftColorChange:function(e){this.$refs.top.navObjs.backgroundLeft=this.ruleForm.backgroundLeft},radioChange:function(e){this.$refs.top.navObjs.menuShowType="平铺"===this.ruleForm.menuShowType?"topMenu":"topList"},menuTitleChange:function(e){this.$refs.top.navObjs.menuTitle=this.ruleForm.menuTitle},menuChildTitleChange:function(e){this.$refs.top.navObjs.menuChildTitle=this.ruleForm.menuChildTitle},switchFullScreen:function(e){this.$refs.top.navObjs.needFullScreen=this.ruleForm.needFullScreen},switchChildTitle:function(e){this.ruleForm.menuChildTitle=e?"基础运维4.0":"",this.$refs.top.navObjs.menuChildTitle=this.ruleForm.menuChildTitle},switchChange:function(e){this.siberMenuConfig.isNeedTag=this.ruleForm.isNeedTag},switchChangeCollage:function(e){this.$refs.tagRef.siberMenuConfig.isNeedCollage=this.ruleForm.isNeedCollage}}},r=(n(1047),n(27)),u=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"avue-contail"},[n("div",{staticClass:"avue-header"},[n("top",{ref:"top"})],1),e._v(" "),n("div",{staticClass:"avue-layout"},[n("div",{staticClass:"avue-left"},[n("sidebar")],1),e._v(" "),n("div",{staticClass:"avue-main"},[n("tags",{directives:[{name:"show",rawName:"v-show",value:e.siberMenuConfig.isNeedTag,expression:"siberMenuConfig.isNeedTag"}],ref:"tagRef"}),e._v(" "),n("div",{staticStyle:{height:"calc(100% - 48px)","overflow-y":"auto",padding:"20px","overflow-x":"hidden"},attrs:{id:"avue-view"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px",inline:!0}},[n("el-row",[n("el-form-item",{attrs:{label:"系统标题",prop:"menuTitle"}},[n("el-input",{staticStyle:{width:"100%"},on:{input:e.menuTitleChange},model:{value:e.ruleForm.menuTitle,callback:function(t){e.$set(e.ruleForm,"menuTitle",t)},expression:"ruleForm.menuTitle"}})],1)],1),e._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"需要子标题",prop:"needChildTitle"}},[n("el-switch",{on:{change:e.switchChildTitle},model:{value:e.ruleForm.needChildTitle,callback:function(t){e.$set(e.ruleForm,"needChildTitle",t)},expression:"ruleForm.needChildTitle"}})],1),e._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.ruleForm.needChildTitle,expression:"ruleForm.needChildTitle"}],attrs:{label:"子标题",prop:"menuTitle"}},[n("el-input",{on:{input:e.menuChildTitleChange},model:{value:e.ruleForm.menuChildTitle,callback:function(t){e.$set(e.ruleForm,"menuChildTitle",t)},expression:"ruleForm.menuChildTitle"}})],1)],1),e._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"头部背景颜色",prop:"background"}},[n("el-color-picker",{on:{change:e.topColorChange},model:{value:e.ruleForm.background,callback:function(t){e.$set(e.ruleForm,"background",t)},expression:"ruleForm.background"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"左边背景颜色",prop:"backgroundLeft"}},[n("el-color-picker",{on:{change:e.leftColorChange},model:{value:e.ruleForm.backgroundLeft,callback:function(t){e.$set(e.ruleForm,"backgroundLeft",t)},expression:"ruleForm.backgroundLeft"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"需要tag",prop:"isNeedTag"}},[n("el-switch",{on:{change:e.switchChange},model:{value:e.ruleForm.isNeedTag,callback:function(t){e.$set(e.ruleForm,"isNeedTag",t)},expression:"ruleForm.isNeedTag"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"需要伸缩按钮",prop:"isNeedCollage"}},[n("el-switch",{on:{change:e.switchChangeCollage},model:{value:e.ruleForm.isNeedCollage,callback:function(t){e.$set(e.ruleForm,"isNeedCollage",t)},expression:"ruleForm.isNeedCollage"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"需要全屏",prop:"needFullScreen"}},[n("el-switch",{on:{change:e.switchFullScreen},model:{value:e.ruleForm.needFullScreen,callback:function(t){e.$set(e.ruleForm,"needFullScreen",t)},expression:"ruleForm.needFullScreen"}})],1)],1),e._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"菜单展示方式",prop:"menuShowType"}},[n("el-radio-group",{on:{change:e.radioChange},model:{value:e.ruleForm.menuShowType,callback:function(t){e.$set(e.ruleForm,"menuShowType",t)},expression:"ruleForm.menuShowType"}},[n("el-radio",{attrs:{label:"平铺"}}),e._v(" "),n("el-radio",{attrs:{label:"下拉"}})],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)])])}),[],!1,null,null,null);t.default=u.exports},534:function(e,t,n){},535:function(e,t,n){},541:function(e,t,n){"use strict";n(534)},542:function(e,t,n){"use strict";n(535)},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},550:function(e,t,n){"use strict";n.r(t);n(80);var i={name:"TopNavBar",data:function(){return{show:!1}},computed:{menuList:function(){return[{name:"首页",source:"el-icon-s-home",path:"/home"}].map((function(e){return e.background="",e}))}},watch:{},created:function(){},methods:{toPage:function(e){window.location.href=window.origin+(process.env.PRO_NAME?"/"+process.env.PRO_NAME:"")+"/#/login"}}},o=(n(541),n(27)),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-nav-bar"},[n("div",{staticClass:"nav-btn",on:{mouseenter:function(t){e.show=!0},mouseleave:function(t){e.show=!1}}},[n("div",{staticClass:"active-menu menu-item-title",style:{background:e.show?"#008CE5":""}},[e._m(0)]),e._v(" "),n("transition",{attrs:{name:"el-fade-in-linear"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"menu-wrapper"},e._l(e.menuList,(function(t,i){return n("div",{key:i,staticClass:"menu-item menu-item-box",style:{background:"url("+t.background+")"},on:{click:function(n){return e.toPage(t)}}},[n("i",{class:t.source}),e._v(" "),n("span",{attrs:{title:t.name}},[e._v(e._s(t.name))])])})),0)])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("\n        基础运维系统\n        "),t("i",{staticClass:"el-icon-arrow-down"})])}],!1,null,"4b05192f",null);t.default=l.exports},551:function(e,t,n){"use strict";n.r(t);var i=n(531),o={data:function(){return{apps:[],activeSystem:"",siberMenuConfig:i.a}},computed:{style:function(){return{background:this.siberMenuConfig.topListbg,color:this.siberMenuConfig.topListColor}}},created:function(){},methods:{jumpTo:function(e,t){window.location.href=window.location.origin+"/"+e.path}}},l=(n(542),n(27)),s=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-list"},[t("div",{staticClass:"top-list-item",style:this.style},[t("span",[this._v("基础运维系统")])])])}),[],!1,null,"5274dab4",null);t.default=s.exports},566:function(e,t,n){"use strict";n(543)},567:function(e,t,n){"use strict";n(544)},568:function(e,t,n){"use strict";n(545)},608:function(e,t,n){},616:function(e,t,n){"use strict";n.r(t);var i=n(550),o=n(551);function l(e,t,n,i,o){var l=document.getElementById(e),s=document.getElementById(t),a=document.getElementById(n),r=document.getElementById(i),u=(null==l?void 0:l.offsetWidth)-(null==s?void 0:s.offsetWidth)-(null==r?void 0:r.offsetWidth);a&&(a.style.width=u+"px")}var s=n(531),a={name:"Top",components:{topMenu:i.default,topList:o.default},filters:{},props:{},data:function(){return{navObjs:s.a}},computed:{},created:function(){},mounted:function(){l("top","info_title_left","top-bar__title","top-bar__right"),window.onresize=function(){l("top","info_title_left","top-bar__title","top-bar__right")}},methods:{}},r=(n(566),n(27)),u=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top",style:{background:e.navObjs.background},attrs:{id:"top"}},[n("div",{staticClass:"info_title_left",attrs:{id:"info_title_left"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.navObjs.isLogo,expression:"navObjs.isLogo"}],staticClass:"logo",attrs:{src:e.navObjs.logoUrl}}),e._v(" "),n("span",{staticClass:"navTitle"},[e._v("\n      "+e._s(e.navObjs.menuTitle)+"\n    ")]),e._v(" "),e.navObjs.needChildTitle?n("span",{staticStyle:{"margin-left":"10px"}},[e._v("|")]):e._e(),e._v(" "),e.navObjs.needChildTitle?n("span",{staticClass:"navSysTitle"},[e._v("\n      "+e._s(e.navObjs.menuChildTitle)+"\n    ")]):e._e()]),e._v(" "),"topList"===e.navObjs.menuShowType?n("div",{staticClass:"top-bar__title",attrs:{id:"top-bar__title"}},[n("div",{staticClass:"top-bar__item",staticStyle:{background:"none"}},[n("top-list",{ref:"topMenu"})],1)]):e._e(),e._v(" "),n("div",{staticClass:"top-bar__right",attrs:{id:"top-bar__right"}},["topMenu"===e.navObjs.menuShowType?n("div",{staticClass:"top-bar__item",staticStyle:{background:"none"},attrs:{title:"切换"}},[n("top-menu",{ref:"topMenu"})],1):e._e(),e._v(" "),e.navObjs.needFullScreen?n("div",{staticClass:"top-bar__item circle"},[n("i",{staticClass:"iconfont-hainan iconzuidahua1"})]):e._e(),e._v(" "),n("div",{staticClass:"top-bar__item",staticStyle:{background:"none"}},[e._v("|")]),e._v(" "),n("div",{staticClass:"top-bar__item user-info"},[n("el-dropdown",{attrs:{trigger:"click"}},[n("div",{staticStyle:{"padding-right":"10px"}},[n("i",{staticClass:"iconfont-sys icoywyonghuguanli",staticStyle:{padding:"0 6px 0 15px",color:"#fff"}}),e._v(" "),n("span",{staticClass:"el-dropdown-link"},[e._v("\n            管理员\n          ")])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item"),e._v(" "),n("el-dropdown-item",[n("router-link",{attrs:{to:"/info/index"}},[e._v("管理员")])],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"top-bar__item circle",attrs:{title:"退出"}},[n("i",{staticClass:"el-icon-switch-button"})])])])}),[],!1,null,"2b7f80a0",null);t.default=u.exports},619:function(e,t,n){"use strict";n.r(t);var i=n(531),o={name:"Sidebar",components:{},data:function(){return{siberMenuConfig:i.a}},created:function(){},computed:{ifSideBar:function(){return!1},style:function(){return{background:this.siberMenuConfig.backgroundLeft}}},watch:{},mounted:function(){},methods:{}},l=(n(567),n(568),n(27)),s=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"avue-sidebar",style:e.style},[n("el-scrollbar",{staticStyle:{height:"100%"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",[e._v("导航一")])]),e._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")]),e._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[e._v("选项4")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],2)],2),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])]),e._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-setting"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航四")])])],1)],1)],1)}),[],!1,null,"0ac0cb05",null);t.default=s.exports}}]);