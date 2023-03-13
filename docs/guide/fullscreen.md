# 全屏相关函数

包括全屏，退出全屏，是否可以全屏

## 浏览器全屏

**源码**

```js
/**
 * 浏览器全屏
 * @param {HTMLElement} [el=document] 全屏元素
 */
export function fullScreen(el) {
  el = el || document.documentElement
  const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
  if (typeof rfs !== 'undefined' && rfs) {
    rfs.call(el)
  }
}
```

**使用方法**

```js
// 使用
this.fullScreen()
```

## 退出全屏

**源码**

```js
/**
 * 退出全屏
 */
export function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
```

**使用方法**

```js
// 使用
this.exitFullScreen()
```

## 判断浏览器当前是否全屏

**源码**

```js
/**
 * 浏览器当前是否全屏
 * @return {*|boolean}
 */
export function isFullScreen() {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}
```

**使用方法**

```js
// 使用
let isFull = this.isFullScreen()

//输出 true or false
console.log(isFull)
```
