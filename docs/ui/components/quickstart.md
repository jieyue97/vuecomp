# 安装以及使用

### 安装

```js
cnpm i gd_vue_components --save
```

### 使用

-- 可以在 main.js 中全局引入

```js
import 'gd_vue_components/dist/gd-components.min.css'
import components from 'gd_vue_components'
vue.use(components)
```

<!-- -- 可以在需要引入的组件里面引入

```js
import { gd_dialog } from 'gd_vue_components'
components: {
  gd_dialog
}
``` -->

### 快速使用

-- 全功能引入

```js
// 引入通用功能
import { modularizeMethod } from '@modularize'
modularizeMethod(Vue)
```
