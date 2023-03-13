<template>
  <div>
    <gdp :total="total" :page="page" :limit="limit" :background="background" :autoScroll="autoScroll" :hidden="hidden" textAlight="lect"> </gdp>
  </div>
</template>
<script>
import gdp from '../components/gd_pagination/index.vue'
export default {
  name: "gd_pagin",
  components: {
    gdp
  },
  data() {
    return {
      total: 100,
      page: 1,
      limit: 10,
      //分页背景颜色 默认灰色
      background: true,
      autoScroll: true,
      hidden: false
    }
  }
}
</script>