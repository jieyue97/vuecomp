<!-- # 项目运行

## 项目运行前置

进入项目根目录 gd_components,安装依赖,并且保证项目能运行起来

<font color='red'> 注意: 一定要用 cnpm install 安装依赖,避免不知名报错</font>

```js
cnpm install

//项目运行命令
npm run dev
```

安装完依赖之后运行如果报以下错误:
![An image](/gdui/guideImg/error1.png)

需要再次安装插件

```js
cnpm install babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime

cnpm install  @babel/plugin-proposal-optional-chaining -S

```

安装好依赖后即可运行项目,运行命令:

```js
npm run dev
```

<font color='red'> tips: 有些人可能会报 jquery 依赖错误,这时候只需要安装 jquery 包即可,没报错请忽略</font>

```js
cnpm install jquery -save
``` -->
