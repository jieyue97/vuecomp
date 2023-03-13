<template>
  <div>
    <div class="wrapper" id="target">
      <GdList :data-list="resOptions"> </GdList>
    </div>
  </div>
</template>
<script>
import GdList from '../components/gd_list/index.vue'
export default {
  name: 'gd_list_item',
  data() {
    return {
      initValue: '选择0',
      resOptions: []
    }
  },
  components: { GdList },
  mounted() {
    // 测试数据15000条数据, 这里数据多少条无所谓,options.slice(0, rangeNumber)方法只会默认加载初始的10条数据
    for (let i = 0; i < 25000; i++) {
      this.resOptions.push({ label: '选择了' + i, value: '选择了' + i })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 300px;
  border: 2px solid #0c5cb3;
}
.demo {
  width: 80px;
  height: 80px;
  padding: 0;
  background: red;
}
</style>
