# 通用函数

## 平铺数组

将多维数组平铺成一维数组

**源码**

```js
/**
 * 遍历树数据节点，查找符合条件的节点
 * @param {Array|Object} data 数据树，如 {id:1, children:[{id:2}]}
 * @param {Boolean} isFindOne 是否只找最先符合条件的一个
 * @param {Function} fn 查找回调函数，回调参数：item 节点，index节点当前兄弟节点中的索引，data 查找的数据树，函数返回true表示符合条件
 * @param {string} [field=children] 子级字段名称
 * @returns {Array|Object} 查找结果，isFindOne为true时返回Object， false时返回Array
 */
export function traverse(data = [], isFindOne, fn, field = 'children') {
  // alert(12);
  let result = []
  data = Array.isArray(data) ? data : [data]
  for (let i = 0, len = data.length; i < len; i++) {
    const item = data[i]
    const checked = fn(item, i, data)
    const children = item[field]
    if (checked) {
      result.push(item)
      if (isFindOne) break
    }
    if (children) {
      const child = traverse(children, isFindOne, fn, field)
      if (child) result = result.concat(child)
    }
  }
  return isFindOne ? result[0] || null : result
}
```

**使用方法**

```js
const list = []
this.traverse(data, false, function (item) {
  list.push(item)
})
return list
```

## 递归函数

主要将一维数组拼接成树的格式

**源码**

```js
// 使用递归形式拼接树格式
Vue.prototype.getListData = function (
  data,
  config = {
    id: 'id',
    pid: 'parentId',
    children: 'children',
  }
) {
  var id = config.id || 'id'
  var pid = config.pid || 'pid'
  var children = config.children || 'children'
  // var label=config.label || 'LctnName';
  var idMap = {}
  var jsonTree = []
  data.forEach(function (v) {
    idMap[v[id]] = v
  })
  data.forEach(function (v) {
    var parent = idMap[v[pid]]
    if (parent) {
      !parent[children] && (parent[children] = [])
      parent[children].push(v)
    } else {
      jsonTree.push(v)
    }
  })
  return jsonTree
}
```

**使用方法**

```js
// 如果是默认配置，第二个参数可以不传
this.dataList = this.getListData(this.nodeList, {
  id: 'id',
  pid: 'parentId',
  children: 'children',
})
```

## json.parse 解析

判断 json 字符串能否被解析

**源码**

```js
const isJsonString = function (str) {
  try {
    if (typeof JSON.parse(str) === 'object') {
      return true
    }
  } catch (e) {
    console.log(e)
  }
  return false
}
```

**使用方法**

```js
this.isJsonString(str) // true or false
```

## 深拷贝

深拷贝

**源码**

```js
const deepClone = function (obj) {
  const result = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          result[key] = Vue.prototype.deepClone(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
  }
  return result
}
```

**使用方法**

```js
const obj = this.deepClone(obj)
```

## 防抖函数

防抖函数

```js
/**
 * 防抖函数
 * @param {function} fn 事件处理函数
 * @param {number} [delay=20] 延迟时间
 * @param {boolean} [isImmediate=false] 是否立刻执行
 * @param {object} [context=this] 上下文对象
 * @returns {Function} 事件处理函数
 */
export function debounce(fn, delay = 20, isImmediate = false, context = this) {
  // 使用闭包，保存执行状态，控制函数调用顺序
  let timer

  return function () {
    const _args = [].slice.call(arguments)

    clearTimeout(timer)

    const _fn = function () {
      timer = null
      if (!isImmediate) fn.apply(context, _args)
    }

    // 是否滚动时立刻执行
    const callNow = !timer && isImmediate

    timer = setTimeout(_fn, delay)

    if (callNow) fn.apply(context, _args)
  }
}
// 使用
this.debounce(fn, delay, isImmediate, context)()
```

## 节流函数

防抖函数

```js
/**
 * 节流函数
 * @param {function} fn 事件处理函数
 * @param {object} [context=this] 上下文对象
 * @param {boolean} [isImmediate=false] 是否立刻执行
 * @returns {Function} 事件处理函数
 */
export function throttle(fn, context = this, isImmediate = false) {
  let isLocked
  return function () {
    const _args = arguments

    if (isLocked) return

    isLocked = true
    raFrame(function () {
      isLocked = false
      fn.apply(context, _args)
    })

    isImmediate && fn.apply(context, _args)
  }
}
// 使用
this.throttle(fn, context, isImmediate)()
```

## 生成随机 GUID

生成随机 GUID

```js
/**
 * 生成随机GUID
 * @return {string}
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    .toUpperCase()
}
// 使用
this.guid()
```

## 生成随机 ID

生成随机 ID

```js
/**
 * 生成唯一id
 * @return {string}
 */
export function uid() {
  const rnd = Math.floor(Math.random() * 1000)
  const timestamp = new Date().getTime()
  return [timestamp, rnd].join('')
}
// 使用
this.uid()
```

## 对数组按制定字段名称进行分组

对数组按制定字段名称进行分组

```js
/**
 * 对数组按制定字段名称进行分组
 * @param {Array} data 数组数组
 * @param {string} [field=group] 分组字段名称
 * @returns {object} 结果
 *
 * @example
 * [{name:1, group:'a'},{name:2, group:'a'}, {name:3, group:'b'}]  ->
 * {
 *  'a':[{name:1, group:'a'}, {name:2, group:'a'}]
 *  'b': [{name:3, group:'b'}]
 * }
 */
export function grouping(data = [], field = 'group') {
  const result = {
    default: [],
  }
  data.forEach((item) => {
    const group = item[field]
    if (group) {
      if (!result[group]) {
        result[group] = []
      }
      result[group].push(item)
    } else {
      result.default.push(item)
    }
  })
  return result
}
// 使用
this.grouping()
```

## 原始浏览器弹窗

**源码**

```js
/**
 * 打开小窗口
 *@param {string} url 浏览器地址
 *@param {string} title title
 *@param {string} w 宽
 *@param {string} h 高
 */
export const openWindow = (url, title, w, h) => {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop
  const newWindow = window.open(
    url,
    title,
    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left
  )

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
}
```

**使用方法**

```js
let url = 'http://localhost:8888/untils/url.html#%E8%8E%B7%E5%8F%96-url-%E7%9A%84-host-%E6%AE%B5'
this.openWindow(url, 'title', 200, 200)
```
