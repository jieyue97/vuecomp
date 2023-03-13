# 子系统

## 预览

子系统的新增改查以及相关配置

<layout></layout>

## 创建子系统

- 创建子系统，运行该命令后会在 projects 的目录下创建对应的子系统文件夹，并在文件夹下面生成纯净版的 vue 模板

```js
// 方式一
npm run addSys 子系统的名称
// 方式二，直接点击下面下载链接下载，并放在projects目录下
```

:::demo

```js
<a href="/vuepressblog/app.zip" download="app.zip" style="color: #409eff ">
  下载子系统
</a>
```

:::

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
