
<template>
  <div class="gd-width-100" :class="[leftType ? 'gd-' + leftType : '']">
    <div :style="{background: bgColor, borderColor: borderColor}" class="gd-title1" :class="[isPadding ? 'gd-padding-t-b-9' : '']">
      <el-row>
        <el-col :span="isRight ? 24 - Number(colSpan) : 24">
          <slot name="label" v-if="$slots.label">
          </slot>
          <span style="padding-left: 10px" v-else>{{ title }}</span>
        </el-col>
        <el-col :span="isRight ? Number(colSpan) : 0" style="text-align: right; padding-right: 10px">
          <slot v-if="isRight" name="isRight"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name:"GdTitleTool",
    props: {
      title: {
        type: String,
        default: () => ('标题')
      }, // 标题文字
      isRight: {
        type: Boolean,
        default: () => {
          return false
        }
      }, // 右边内容
      bgColor: {
        type: String,
        default: () => {
          return '#f7fafd'
        }
      },// 背景颜色
      borderColor: {
        type: String,
        default: () => {
          return '#CBD0D4FF'
        }
      },// 边框颜色
      colSpan: {
        type: Number,
        default: () => (8)
      },// 右边的宽度
      leftType: {
        type: String,
        default: () => {
          return ''
        }
      }, // 左边边框
      isPadding: {
        type: Boolean,
        default: () => {
          return true
        }
      }, // 上下内边距
    }
  }
</script>
<style lang="scss" scoped>
.gd-title1{
  width: 100%;
  font-size: 16px;
  border-top: 1px solid #CBD0D4FF;
  border-bottom: 1px solid #CBD0D4FF;
}
.gd-padding-t-b-9{
  padding: 9px 0;
}
.gd-width-100{
  width: 100%;
}
.gd-primary{
  border-left: 3px solid #409eff;
}
.gd-success{
  border-left: 3px solid #67c23a;
}
.gd-info{
  border-left: 3px solid #909399;
}
.gd-warning{
  border-left: 3px solid #e6a23c;
}
.gd-danger{
  border-left: 3px solid #f56c6c;
}
</style>
