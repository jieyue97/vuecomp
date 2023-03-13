<template>
  <div style="height: 100vh; width: 100%">
    <div>iframe测试</div>
    <gd-Iframe src="http://10.0.1.186:8898/#/login" :iframeStyle="iframeStyle" :token="token" />
  </div>
</template>
<script>
// import GdIframe from '../components/gd_iframe'
export default {
  data() {
    return {
      token: '12axdaq',
      iframeStyle: {
        width: '100%',
        height: '900px',
        border: 'none'
      }
    }
  },
  //   components: {
  //     GdIframe
  //   }
}
</script>