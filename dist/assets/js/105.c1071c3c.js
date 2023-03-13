(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1173:function(s,n,a){"use strict";a.r(n);var t=a(27),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"目录结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构说明"}},[s._v("#")]),s._v(" 目录结构说明")]),s._v(" "),a("h2",{attrs:{id:"主应用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主应用模块"}},[s._v("#")]),s._v(" 主应用模块")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("   ├── build                           构建脚本目录\n   │   ├── build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    生产环境构建脚本\n   │   ├── check"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("versions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js           版本\n   │   ├── utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    构建相关工具方法\n   │   ├── vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js          vue的相关loader\n   │   ├── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js        wabpack基础配置\n   │   ├── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js         wabpack开发环境配置\n   │   └── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js        wabpack生产环境配置\n   ├── coder                           构建相关命令目录\n   │   ├── commonJs                    构建通用js目录\n   │   ├── templates                   构建模板，包括纯净版子系统等\n   │   ├── addSystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                新增纯净版子系统脚本\n   │   ├── removeSystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js             删除子系统脚本\n   │   ├── setSystemConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js          设置子系统相关配置脚本\n   │   ├── indexNew"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                 生成文件目录树脚本\n   │   └── utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    相关工具方法\n   │   └── system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json                 系统名称集合\n   ├── config                          项目配置\n   │   ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    项目配置文件\n   │   ├── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js         生成dll文件脚本\n   ├── src                             项目源码目录\n       ├── projects                        子系统目录\n           ├── index                       子系统，多个系统并行\n           ├── system                      运维系统\n       ├── modularize                      多个子系统通用的模块\n           ├── assets                      相关静态文件目录\n           ├── config                      通用配置文件目录\n           ├── directive                   通用指令\n           ├── helper                      通用请求方式处理目录\n           ├── iconfont"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("common             通用iconfont目录，具体规范请查看规范iconfont模块\n           ├── icons                       通用svg目录\n           ├── util                        通用工具函数\n           ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    暴露通用功能\n           ├── modularize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js               通用功能集合\n   ├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("                          纯静态资源，不会被wabpack构建。\n   │   ├── common                      通用的静态文件\n   │   ├── index                       子系统的静态文件，文件夹名称和系统名称要一致，多个系统并行\n   ├── favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ico                     页面图标\n   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("babelrc                        babel规则\n   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("editorconfig                   编辑器配置\n   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintignore                   eslint忽略规律\n   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                    eslint规则\n   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gitignore                      git忽略规则\n   ├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息\n   ├── readmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md                       项目描述文件\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"子应用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子应用模块"}},[s._v("#")]),s._v(" 子应用模块")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("   ├── api                             接口目录\n   ├── assets                          相关静态文件目录\n   ├── components                      业务组件目录\n   ├── config                          项目配置\n   ├── mixin                           mixin目录\n   ├── router                          router目录\n   ├── store                           store目录\n   ├── styles                          styles样式目录\n   ├── utils                           子系统相关函数\n   ├── views                           页面模块，这里注意，层级尽量不要超过三层\n   ├── App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue                         根组件\n   ├── main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                         入口 js 文件\n   ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html                      入口html页面\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);