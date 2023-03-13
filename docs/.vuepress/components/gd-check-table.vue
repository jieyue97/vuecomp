<template>
  <div>
    <gdCheckTableItem ref="gdCheckTable" v-bind="$attrs" v-on="$listeners"></gdCheckTableItem>
  </div>
</template>

<script>
import gdCheckTableItem from '../../../src/components_others/gd_check_table'
export default {
  name: 'GdCheckTable',
  components: {
    gdCheckTableItem
  },
  methods: {
    setCheckedKeys(data) {
      this.$refs.gdCheckTable.setCheckedKeys(data)
    },
    onGetSelectTable() {
      return this.$refs.gdCheckTable.getCheckedData()
    }
  }
}
</script>

<style scoped></style>
