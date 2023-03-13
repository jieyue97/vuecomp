<!-- # axios 请求方式

## 方法一

全局使用，将请求方法挂载到 vue 的原型上

**example**

- 需要在一个文件夹下创建对应的 js 文件，比如 modules/approval.js,内容如下

```js
// approval模块
// API按模块统一规范
/**
 * @module name // 模块的名称,相当于方法名，命名方式建议当前模块名称+接口名称，避免命名重复的问题 必填
 * @method post/get // 请求方式 必填
 * @method desc // 接口简介 必填
 * @method path // 接口地址 必填
 * @method otherReauestParams // 其余参数 如header可以写为 otherReauestParams:{header: ''} f非必填
 */
// import Vue from 'vue'
// console.log(Vue.prototype.workflow, 'Vue.prototype.workflow')
export default [
  {
    name: "ApprovalDoExport",
    method: "post",
    desc: "查询导出",
    path: "/workflow/search/doExport",
    otherReauestParams: {
      responseType: "blob"
    }
  }
];
```

**使用**

- 可以在 main.js 中全局引入

```js
import { requestMethod } from "@modularize";
import request from "@index/utils/request";
/**
 * @module Vue // Vue对象
 * @method request // 子系统封装的请求方法
 * @method  require.context // 存放js的文件夹路径
 * @method httpName // 需要赋值的全局对象，默认为$http
 */
requestMethod(
  Vue,
  request,
  require.context(`@index/api/modules`, true, /\.js$/)
);

// 接口调用方式
/**
 * this.$http[ApprovalDoExport](queryForm).then(res => {
 *   this.tableData = res.data.entityList
 *   this.total = res.data.total
 * })
 *
 * */
```

## 方法二

单独模块使用，需要在每个页面引入需要请求的 js

**example**

- 需要在一个文件夹下创建对应的 js 文件，比如 modules/approval.js,内容如下

```js
import request from "@index/utils/request";
import Vue from "vue";
const Qs = require("qs");
// 查询附件树
export function attachTreeFileList(data) {
  return request({
    url: getBaseUrl() + `/sys/core/sysFileInfo/getFileList`,
    method: "get"
    // data: Qs.stringify(data)
  });
}
```

**使用**

- 可以在需要引入的组件里面引入

```js
import { attachTreeFileList } from "@/api/spgl-xmqtfjxxb-controller";
await attachTreeFileList({
  token: this.token,
  solId: this.solId,
  actDefId: this.formInfo.actDefId,
  procInstId: ""
});
``` -->
