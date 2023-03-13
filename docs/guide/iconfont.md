# 图标的使用

**介绍**

- 通用图标库。可以按需加载所需要的图标，这里要注意图标的命名规范，具体规范可查看规范模块的 iconfont 规范

**iconfont 使用方法**

- 在 main.js 里面引入并使用，函数接收的是一个数组，不传参默认加载全部图标，数组里面的值是对应每个系统的名称，需要哪几个就传哪几个
- 图标统一放在 modularize 下面 iconfont-common 文件夹下面

```js
// 引入iconfont方法
import { setIconFontMethod } from '@modularize'
setIconFontMethod(['index'])
```

**svg 使用方法**

- 在 main.js 里面引入并使用
- 图标统一放在 modularize 下面 icons 文件夹下面

```js
// 引入svg
import '@modularize/icons'
```

```js
// 使用svg
<svg-icon icon-class="名称"></svg-icon>
```
