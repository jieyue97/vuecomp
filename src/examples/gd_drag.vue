<template>
  <div>
    <!-- <div style="height:200px">
      <GdDrag class="demo"></GdDrag>
    </div>
    <GdDrag class="demo" handle=".demo_header">
      <div class="demo_header" style="height:30px;background:red">拖动</div>
      <div class="demo_header1">内容</div>
    </GdDrag>
    <el-row>
      <el-col :span="12">
        <div class="wrapper">
          <GdDrag class="demo" axis="h">
            <div>水平方向</div>
          </GdDrag>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="wrapper">
          <GdDrag class="demo" axis="v">
            <div>垂直方向</div>
          </GdDrag>
        </div>
      </el-col>
    </el-row> -->
    <div class="wrapper" id="target">
      <GdDrag target="#target">
        <div>锁定访问</div>
      </GdDrag>
    </div>
  </div>
</template>
<script>
import GdDrag from '../components/gd_drag'
export default {
  name: 'gd_drag_item',
  components: { GdDrag }
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
