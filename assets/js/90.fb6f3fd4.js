(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1155:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"持续集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[t._v("#")]),t._v(" 持续集成")]),t._v(" "),a("h3",{attrs:{id:"jenkins-构建-非必须仅供参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-构建-非必须仅供参考"}},[t._v("#")]),t._v(" jenkins 构建--非必须仅供参考")]),t._v(" "),a("h4",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提：")]),t._v(" "),a("ul",[a("li",[a("font",{staticStyle:{color:"red"}},[t._v("如果引入的框架代码不是子 git 工程，而是硬编码，不用考虑线上构建版本问题")])],1),t._v(" "),a("li",[a("font",{staticStyle:{color:"red"}},[t._v("如果业务系统引用的基础框架的 system|wfmng|wfruntime 系统是 git 子工程，并且子工程是以 branch 分支方式拉取，直接配置.gitmodules 文件 branch 参数即可")])],1),t._v(" "),a("li",[a("font",{staticStyle:{color:"red"}},[t._v("否则：若引用 system|wfmng|wfruntime 当中稳定版本 tag，需参考如下配置，否则构建将拉取的主分支最新代码，在框架更新时会出错。")])],1)]),t._v(" "),a("h4",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuecomp/img/jenkins-guide-submodule.png",alt:"An image"}})]),t._v(" "),a("h4",{attrs:{id:"添加额外指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加额外指令"}},[t._v("#")]),t._v(" 添加额外指令：")]),t._v(" "),a("p",[t._v("npm run pullGit 将 pull 所依赖的框架子系统代码。\n"),a("img",{attrs:{src:"/vuecomp/img/jenkins-guide-submodule-shell.png",alt:"An image"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);