# 接口相关函数

## 取消请求

取消全部接口请求或者单独某个接口请求

**源码**

```js
const cancel = function(key = '', deleteAll = true) {
  const cancelArr = window.axiosCancel
  // 是不是需要删除全部请求
  if (deleteAll) {
    cancelArr.forEach((ele, index) => {
      delete window.axiosCancel[index]
      // 取消请求的方法
      ele.cancel({
        duration: 100
      })
    })
  } else {
    cancelArr.forEach((ele, index) => {
      if (ele.url.includes(key)) {
        delete window.axiosCancel[index]
        // 取消请求的方法
        ele.cancel({
          duration: 100
        })
      }
    })
  }
}
```

**使用方法**

```js
/**
 * 参数
 * @key 如果是单独的取消请求，需要将当前的请求url传过来
 * @deleteAll 是否取消全部请求
 */
this.cancel()
```
