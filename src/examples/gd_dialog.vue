<template>
  <div>
    <!-- <gdDialog :titleColor="titleColor" size="small" :themeColor="'#fff'" :z-index="201" :closed.sync="prinftShow" :append-to-body="true" draggable maximizable :maximized.sync="maximized">
      <el-row>
        <el-col :span="2">
          <icon class="el-icon-success" style="color: #5daf34;font-size: 30px"></icon>
        </el-col>
        <el-col :span="22">
          <div style="padding:0 5px;font-size: 20px">这里是成功提示</div>
        </el-col>
      </el-row>
      <template slot="footer">
        <div>
          <el-button type="primary">主要按钮</el-button>
        </div>
      </template>
    </gdDialog> -->
    <gd-dialog size="small" :titleColor="'#000'" :z-index="201" :closed.sync="prinftShow" :append-to-body="true" height="144px" draggable maximizable :maximized.sync="maximized">
      <el-row>
        <el-col :span="2">
          <i :class="icons[isNum]" style="font-size: 30px" :style="{ color: colors[isNum] }"></i>
        </el-col>
        <el-col :span="22">
          <div style="padding:0 10px;font-size: 20px;font-weight: bolder">这里是操作{{ text }}提示信息</div>
        </el-col>
      </el-row>
      <template slot="footer">
        <div>
          <el-button size="small" type="primary" @click="prinftShow = false">我知道了</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>

<script>
import gdDialog from '../components/gd_dialog'
export default {
  name: 'gd-dialogs',
  data() {
    return {
      prinftShow: true,
      maximized: false,
      text: '成功',
      isNum: 0,
      icons: ['el-icon-success', 'el-icon-error', 'el-icon-warning'],
      colors: ['#67C23A', '#FF5E5E', '#F69E1B']
    }
  },
  components: { gdDialog },
  methods: {}
}
</script>
