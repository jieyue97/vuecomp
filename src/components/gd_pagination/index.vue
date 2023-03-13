<template>
  <!--显示分页有条件限制(total > pageSize && total > 0) || sizeChange -->
  <div v-if="total > 0" :class="{ hidden: hidden }" class="gd-pagination-container" :style="{ 'text-align': textAlight }">
    <el-pagination
      :small="small"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <!-- 无论多少条都显示分页
  <div :class="{ hidden: hidden }" class="gd-pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div> -->
</template>

<script>
import { scrollTo } from '../../untils/scroll-to'

export default {
  name: 'GdPagination',
  props: {
    textAlight: {
      type: String,
      default: "right"
    },
    small: {
      type: Boolean,
      default: false
    },
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, sizes, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sizeChange: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  mounted() {

  },
  methods: {
    handleSizeChange(val) {
      if (val > this.total) {
        this.sizeChange = true
      } else {
        this.sizeChange = false
      }
      this.$emit('pagination', { page: 1, limit: val, target: 'wait' })
      console.log(this.autoScroll);
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize, target: 'done' })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gd-pagination-container {
  background: #fff;
  padding-top: 10px;

  .btn-prev,
  .btn-next,
  /deep/.el-pagination.is-background .el-pager li {
    border-radius: 5px;
  }
}
.gd-pagination-container.hidden {
  display: none;
}
</style>
