# 工具函数的使用

**介绍**

- 通用工具函数。直接挂载在 vue 的原型上，可以直接通过 this.method()调用

**使用方法**

- 在 main.js 里面引入并使用，直接挂载在 vue 的原型上，可以直接通过 this.method()调用
- 工具函数统一放在 modularize 下面 util/common 文件夹下面,工具函数模块的所有函数都可以直接调用

```js
// 引入工具函数
import { utilListMethod } from '@modularize'
// 传入vue对象
utilListMethod()
```
