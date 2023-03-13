# svg 和 icon 的组件

提供 iconfont 图标库对应的图标展示形式以及 svg 的展示形式

#### 注意事项

<font style="color:red">该组件只针对组件库 icontfont 模块的所有图标有效，且组件库版本要在@0.3.74 以及以上版本<br/>
</font>
<font style="color:blue">其中包括：<br/>
前端组件库公共图标<br/>
海南一体化<br/>
应用业务-国土空间基础信息平台<br/>
二维一张图-国土空间基础信息平台<br/>
恩施州自然资源一体化信息平台<br/>
基础运维<br/>
图标的使用
</font>

### 引入方式

在 main.js 里面引入全部图标，然后注册为全局组件，也可以在单个组件里面引入，如：

```js
import GdIcon from 'gd_vue_components/src/components_others/gd_icon/index.vue'
Vue.component('GdIcon', GdIcon)
```

在 main.js 里面按需引入对应模块的图标，然后注册为全局组件，也可以在单个组件里面引入，如：

```js
// 单独引入海南图标库
import GdIconHaiNan from 'gd_vue_components/src/components_others/gd_icon_hainan/index.vue'
Vue.component('GdIconHaiNan', GdIconHaiNan)

// 单独引入组件库图标库
import GdIconUi from 'gd_vue_components/src/components_others/gd_icon_ui/index.vue'
Vue.component('GdIconUi', GdIconUi)

// 单独引入应用业务-国土空间基础信息平台图标库
import GdIconLandBusiness from 'gd_vue_components/src/components_others/gd_icon_landBusiness/index.vue'
Vue.component('GdIconLandBusiness', GdIconLandBusiness)

// 单独引入二维一张图-国土空间基础信息平台图标库
import GdIconLandOneMap from 'gd_vue_components/src/components_others/gd_icon_landOneMap/index.vue'
Vue.component('GdIconLandOneMap', GdIconLandOneMap)

// 单独引入恩施州自然资源一体化信息平台图标库
import GdIconNs from 'gd_vue_components/src/components_others/gd_icon_ns/index.vue'
Vue.component('GdIconNs', GdIconNs)

// 单独引入海南图标库
import GdIconSys from 'gd_vue_components/src/components_others/gd_icon_sys/index.vue'
Vue.component('GdIconSys', GdIconSys)
```

### 基本用法

1，icon-class 的值直接在 iconfont 模块复制粘贴即可<br/>
2，show-type 需要的展示形式，iconfont 的话值为 iconfont，svg 的话值为 svg

```js
<gd-icon icon-class="iconfont-hainan iconhainan-jianzhuzongmianji" show-type="svg"></gd-icon>
```

<mdtable mdname='svgIcon'></mdtable>
