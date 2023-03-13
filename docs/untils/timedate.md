# 日期相关函数

## 获取当前日期前后日期

获取当前日期或者指定日期的前（后）的 n(天、月、年)

**源码**

```js
/**
 * 日期处理模块
 * @module utils/date
 */

/**
 * 日期格式转换函数
 * @param  {String|Date} dateStr 日期时间对象
 * @param  {String} [format] 输出格式，yyyy-MM-dd hh:mm:ss
 * @param  {Object} [options] 时间偏移对象，可选 {y,M,d,h,m,s}
 * @param {Number} options.y 年偏移量，+增加， -减少
 * @param {Number} options.M 月偏移量，+增加， -减少
 * @param {Number} options.d 日偏移量，+增加， -减少
 * @param {Number} options.h 时偏移量，+增加， -减少
 * @param {Number} options.m 分偏移量，+增加， -减少
 * @param {Number} options.s 秒偏移量，+增加， -减少
 * @returns {String|Date} 如不传递format，即返回Date类型
 *
 * @example
 * // 当前时间减少一天, 并转换格式
 *  date(new Date(), 'yyyy-MM-dd', {d: -1})
 */
export function date(dateStr, format, options) {
  if (!dateStr) {
    return new Date()
  }
  let obj = typeof dateStr === 'string' ? new Date(dateStr.replace(/-/g, '/')) : dateStr
  const setting = {
    y: 0, // 年
    M: 0, // 月
    d: 0, // 日
    h: 0, // 时
    m: 0, // 分
    s: 0 // 秒
  }
  Object.assign(setting, options || {})

  obj = new Date(
    setting.y + obj.getFullYear(),
    setting.M + obj.getMonth(),
    setting.d + obj.getDate(),
    setting.h + obj.getHours(),
    setting.m + obj.getMinutes(),
    setting.s + obj.getSeconds()
  )
  const o = {
    'M+': obj.getMonth() + 1,
    'd+': obj.getDate(),
    'h+': obj.getHours(),
    'm+': obj.getMinutes(),
    's+': obj.getSeconds(),
    'q+': Math.floor((obj.getMonth() + 3) / 3),
    S: obj.getMilliseconds()
  }
  if (format) {
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 4 ? obj.getFullYear() : (obj.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  } else {
    return obj
  }
}
```

**使用方法**

```js
// 当前时间减少一天, 并转换格式
this.date(new Date(), 'yyyy-MM-dd', { d: -1 })
```

## 获取时间差

传入不同的时间段,返回两个时间段的时间差,包括天数,时,分,秒

<font color="red">tirps: 传入的数据应为 13 位的时间戳 </font>

**源码**

```js
/**
 * 时间差 函数
 * @param  {number} date1 时间戳
 * @param  {number} date2 时间戳
 *
 * 注: date2 应比 date1 大,不然无法计算
 */
export const calcDate = (date1, date2) => {
  console.log(date1, '....')
  const date3 = date2 - date1

  const days = Math.floor(date3 / (24 * 3600 * 1000))

  const leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000))

  const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000))

  const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  const seconds = Math.round(date3 / 1000)
  return {
    leave1,
    leave2,
    leave3,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}
```

**使用方法**

```js
/**
 * 返回的格式
 * @param  {number} days 天数
 * @param  {number} hours 小时数
 * @param  {number} minutes 分钟
 * @param  {number} minutes 秒钟
 * @param  {number} leave1 计算天数后剩余的毫秒数
 * @param  {number} leave2 计算小时数后剩余的毫秒数
 * @param  {number} leave3 计算分钟数后剩余的毫秒数
 *
 * 注: date2 应比 date1 大,不然无法计算
 */
this.calcDate(1580289004000, 1627550284000)
```

## 时间戳格式化

时间戳以毫秒为准,传入 13 位的时间戳

**源码**

```js
/**
 * 时间戳格式化函数
 * @param  {string} fmt    格式
 * @param  {num}    value 要格式化的时间 注意如果时间戳不满13位需要*1000
 * @return {string}           格式化的时间字符串
 */
export function strDateFormat(value, fmt) {
  let getDate = new Date(value)
  let o = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    S: getDate.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}
```

**使用方法**

```js
// 返回的格式 2021-07-29
const times = 1627549499 * 1000
this.strDateFormat(times, 'yyyy-MM-dd')
```

## 日期格式化

传入日期格式化

**源码**

```js
export function dateFormat(date, format) {
  format = format || 'yyyy-MM-dd hh:mm:ss'
  if (date !== 'Invalid Date') {
    const o = {
      'M+': date.getMonth() + 1, // month
      'd+': date.getDate(), // day
      'h+': date.getHours(), // hour
      'm+': date.getMinutes(), // minute
      's+': date.getSeconds(), // second
      'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
      S: date.getMilliseconds() // millisecond
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  }
  return ''
}
```

**使用方法**

```js
//返回格式2021/7/21
this.dateFormat(new Date(), 'yyyy/MM/dd')
```
