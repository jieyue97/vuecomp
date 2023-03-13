<template>
  <div>
    <template v-for="item in option"
      ><div style="padding-bottom: 10px" class="title">
        {{ item.title }}
      </div>
      <div style="margin-bottom:15px">{{ item.subtitle }}</div>
      <div class="demo_tables">
        <gd-table
          ref="gdtable"
          :header-cell-style="{ background: '#f2f6f7' }"
          :columns="item.tableColumn"
          :data="item.tableData"
          :hiddenPage="false"
          :border="item.border"
          :stripe="item.stripe"
        >
          <template slot="name" slot-scope="scope">
            <span class="gdtable_row">{{ scope.row.name }}</span>
          </template>
        </gd-table>
      </div></template
    >
  </div>
</template>

<script>
export default {
  name: 'md_table',
  props: {
    mdname: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      option: []
    }
  },
  components: {},
  created() {
    this.option = require(`./data/${this.mdname}.js`)
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: #262626;
  margin-top: 40px;
  font-weight: 600;
}
.gdtable_row {
  color: #0172fc;
}
</style>
