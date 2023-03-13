# iframe 组件 gd-iframe

直接传入对应的 src 即可

### 基本用法

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <div>iframe测试</div>
    <gd-Iframe src="http://10.0.1.186:8898/#/login" :iframeStyle="iframeStyle" :token="token" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        token: '12axdaq',
        iframeStyle: {
          width: '100%',
          height: '50vh',
          border: 'none'
        }
      }
    }
  }
</script>
```

:::

#####

<mdtable mdname='iframe'></mdtable>
