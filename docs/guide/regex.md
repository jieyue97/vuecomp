# 正则相关函数

正则表达式模块，常用的表达式集合

## 检测字符串是否 url

**源码**

```js
/**
 * 检测字符串是否url
 * @param {string} str 需要检测的字符串
 * @returns {boolean}
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}
```

**使用方法**

```js
// 使用
this.isUrl(str)
```

## 检测字符串是否邮箱

**源码**

```js
/**
 * 检测字符串是否邮箱
 * @param {string} str 需要检测的字符串
 * @returns {boolean}
 */
export function isEmail(str) {
  const EMAIL = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  return EMAIL.test(str)
}
```

**使用方法**

```js
// 使用
this.isEmail(str)
```

## 校验身份证号码

**源码**

```js
/**
 * 检测字符串是否身份证号码
 * @param {string} str 需要检测的字符串
 * @returns {boolean}
 */
export function isId(str) {
  const ID = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  return ID.test(str)
}
```

**使用方法**

```js
// 使用
this.isId(str)
```

## 校验手机号码

**源码**

```js
/**
 * 检测字符串是否手机号码
 * @param {string} str 需要检测的字符串
 * @returns {boolean}
 */
export function isMobilePhone(str) {
  const MOBILE_PHONE = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
  return MOBILE_PHONE.test(str)
}
```

**方法**

```js
// 使用
this.isMobilePhone(str)
```

## 校验是否为空

**源码**

```js
/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') {
      return true
    }
    return false
  }
  return false
}
```

**方法**

```js
let str = '111'
// 使用
this.validatenull(str)
```

## 校验名字是否正确

**源码**

```js
/**
 * 判断姓名是否正确
 * 因为少数民族姓名原因放松到12位
 */
export function validatename(name) {
  var regName = /^[\u4e00-\u9fa5]{2,12}$/
  if (!regName.test(name)) return false
  return true
}
```

**方法**

```js
let str = '111'
// 使用
this.validatename(str)
```
