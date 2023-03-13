# 目录结构说明

## 主应用模块

```js
   ├── build                           构建脚本目录
   │   ├── build.js                    生产环境构建脚本
   │   ├── check-versions.js           版本
   │   ├── utils.js                    构建相关工具方法
   │   ├── vue-loader.conf.js          vue的相关loader
   │   ├── webpack.base.conf.js        wabpack基础配置
   │   ├── webpack.dev.conf.js         wabpack开发环境配置
   │   └── webpack.prod.conf.js        wabpack生产环境配置
   ├── coder                           构建相关命令目录
   │   ├── commonJs                    构建通用js目录
   │   ├── templates                   构建模板，包括纯净版子系统等
   │   ├── addSystem.js                新增纯净版子系统脚本
   │   ├── removeSystem.js             删除子系统脚本
   │   ├── setSystemConfig.js          设置子系统相关配置脚本
   │   ├── indexNew.js                 生成文件目录树脚本
   │   └── utils.js                    相关工具方法
   │   └── system.json                 系统名称集合
   ├── config                          项目配置
   │   ├── index.js                    项目配置文件
   │   ├── webpack.dll.conf.js         生成dll文件脚本
   ├── src                             项目源码目录
       ├── projects                        子系统目录
           ├── index                       子系统，多个系统并行
           ├── system                      运维系统
       ├── modularize                      多个子系统通用的模块
           ├── assets                      相关静态文件目录
           ├── config                      通用配置文件目录
           ├── directive                   通用指令
           ├── helper                      通用请求方式处理目录
           ├── iconfont-common             通用iconfont目录，具体规范请查看规范iconfont模块
           ├── icons                       通用svg目录
           ├── util                        通用工具函数
           ├── index.js                    暴露通用功能
           ├── modularize.js               通用功能集合
   ├── static                          纯静态资源，不会被wabpack构建。
   │   ├── common                      通用的静态文件
   │   ├── index                       子系统的静态文件，文件夹名称和系统名称要一致，多个系统并行
   ├── favicon.ico                     页面图标
   ├── .babelrc                        babel规则
   ├── .editorconfig                   编辑器配置
   ├── .eslintignore                   eslint忽略规律
   ├── .eslintrc.js                    eslint规则
   ├── .gitignore                      git忽略规则
   ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   ├── readmd.md                       项目描述文件

```

## 子应用模块

```js
   ├── api                             接口目录
   ├── assets                          相关静态文件目录
   ├── components                      业务组件目录
   ├── config                          项目配置
   ├── mixin                           mixin目录
   ├── router                          router目录
   ├── store                           store目录
   ├── styles                          styles样式目录
   ├── utils                           子系统相关函数
   ├── views                           页面模块，这里注意，层级尽量不要超过三层
   ├── App.vue                         根组件
   ├── main.js                         入口 js 文件
   ├── index.html                      入口html页面

```
