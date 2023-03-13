### 子工程管理

## 拉取 sys-ui 前端框架

- 想要使用 system 工程模块的时候需要先拉取前端框架 sys-ui,如果没有拉取权限,可以直接找 OA 组负责人授权

```js
git clone http://10.0.1.250:9090/rdcenter/basersdep/flowengine/product/basemng/newversion/source/sys-ui.git
```

## 拉取 system 工程模块

- 在下载 sys-ui 框架的时候,是要先 cnpm i 下载所有的依赖包,注:要使用 cnpm 避免不知名报错,然后在进入 projects 使用拉取 tag 命令,也可以直接下载压缩包放在 system 目录下面

```js
//在sys-ui 进入src
cd src
//进入projects
cd projects
//拉取最新分支的基础运维
//                  [git Tag名称] [git地址]
git clone --branch 4.0.2.RELEASE http://10.0.1.250:9090/rdcenter/basersdep/flowengine/product/basemng/newversion/source/system.git
```

## 创建子系统

- 创建子系统，运行该命令后会在 projects 的目录下创建对应的子系统文件夹，并在文件夹下面生成纯净版的 vue 模板

```js
// 方式一
npm run addSys 子系统的名称
// 方式二，直接点击下面下载链接下载，并放在projects目录下
```

:::demo

```js
<a href="/gdui/app.zip" download="app.zip" style="color: #409eff ">
  下载子系统
</a>
```

:::

## 运行子系统

- 创建好子系统后 发现进去会报错,并且系统页面会报 404,这时候只需要配置 permission.js 文件就可以了

```js
npm run dev
```

- 这是在基础运维新建的工程模块如图所示:

![An image](/gdui/guideImg/add-system1.png)

- 需要在新建的工程模块,找到 permission.js 文件,并且按照下图修改,即可成功运行

![An image](/gdui/guideImg/add-system3.jpg)

## 删除子系统

- 删除子系统，运行该命令后会删除 projects 的目录下对应名称的文件夹

```js
npm run removeSys 子系统的名称
```

## 配置子系统

- 配置子系统，运行该命令后会在添加 webpack 相关的配置，并在 package.json 里面添加运行以及打包的命令

```js
npm run setSys
```
