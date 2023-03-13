<template>
  <el-table-column :label="coloumnHeader.label" :prop="coloumnHeader.label" v-bind="coloumnHeader">
    <template v-if="coloumnHeader.isHeader" v-slot:header="scope">
      <slot :name="`${coloumnHeader.prop}_handle` || '_handle'" v-bind="scope" :column="coloumnHeader"></slot>
    </template>
    <template v-for="item in coloumnHeader.children">
      <tableColumn v-if="item.children && item.children.length" :key="item.id" :coloumn-header="item">
        <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope" /></template>
      </tableColumn>
      <el-table-column v-else :key="item.name" :label="item.label" :prop="item.prop" v-bind="item">
        <!-- <template v-if="!coloumnHeader.isHeader" v-slot="scope">
          <span v-if="$scopedSlots[coloumnHeader.prop]">
            <slot :name="coloumnHeader.prop || '_handle'" v-bind="scope" :column="coloumnHeader"></slot>
          </span>
          <span v-else>{{ scope.row[coloumnHeader.prop] }}</span>
        </template> -->
        <!-- <slot name="district2" :row="scope.row" /> -->

        <template v-slot="scope">
          <span v-if="item.slotFlag">
            <slot :name="item.prop" :row="scope.row" v-bind="scope" />
          </span>
          <span v-else-if="item.headerHtml" v-html="item.headerHtml(scope.row, item)"></span>
          <span v-else>
            {{ scope.row[item.prop] }}
          </span>
        </template>
      </el-table-column>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'tableColumn',
  props: {
    coloumnHeader: {
      type: Object,
      required: true,
    },
    scopedSlots: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style scoped></style>
