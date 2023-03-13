<template>
  <div>
    <el-radio-group v-model="direction">
      <el-radio v-for="(item, index) in directionArray" :label="item" :key="index">{{ item }}</el-radio>
    </el-radio-group>

    <gd-flex :direction="direction">
      <gd-flex-item v-for="n in 4" :key="n">{{ n }}</gd-flex-item>
    </gd-flex>
    <el-radio-group v-model="wrap">
      <el-radio v-for="(item, index) in wrapArray" :label="item" :key="index">{{ item }}</el-radio>
    </el-radio-group>
    <gd-flex :wrap="wrap">
      <gd-flex-item v-for="n in 9" :key="n">{{ n }}</gd-flex-item>
    </gd-flex>
    <el-radio-group v-model="justify">
      <el-radio v-for="(item, index) in justifyArray" :label="item" :key="index">{{ item }}</el-radio>
    </el-radio-group>
    <gd-flex :justify="justify">
      <gd-flex-item v-for="n in 4" :key="n">{{ n }}</gd-flex-item>
    </gd-flex>
    <gd-flex>
      <gd-flex-item v-for="(item, index) in items" :order="item.order" :key="index">
        {{ index + 1 }} <span>order: {{ item.order }}</span>
      </gd-flex-item>
    </gd-flex>
    <gd-flex>
      <gd-flex-item v-for="(item, index) in grow" :key="index" :grow="item.grow">
        {{ index + 1 }}
        <span>grow: {{ item.grow }}</span>
      </gd-flex-item>
    </gd-flex>
    <gd-flex>
      <gd-flex-item v-for="(item, index) in basis" :key="index" :basis="item.basis">
        {{ index + 1 }}
        <span>basis: {{ item.basis }}</span>
      </gd-flex-item>
    </gd-flex>
    <gd-flex :column="4" wrap="wrap" border>
      <gd-flex-item v-for="n in 8" :key="n">{{ n }}</gd-flex-item>
    </gd-flex>
  </div>
</template>

<script>
import GdFlex from '../components/gd_flex/src/Flex.vue'
import GdFlexItem from '../components/gd_flex/src/FlexItem.vue'

export default {
  name: 'gd_flex_item',
  components: {
    GdFlex,
    GdFlexItem,
  },
  data() {
    return {
      basis: [
        {
          basis: '200px',
        },
        {
          basis: '400px',
        },
        {
          basis: '200px',
        },
      ],
      alignItems: 'stretch',
      grow: [
        {
          grow: 1,
        },
        {
          grow: 2,
        },
        {
          grow: 1,
        },
      ],
      items: [
        {
          order: 4,
        },
        {
          order: 1,
        },
        {
          order: -1,
        },
        {
          order: 3,
        },
      ],
      justify: 'flex-start',
      justifyArray: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      wrap: 'nowrap',
      wrapArray: ['nowrap', 'wrap', 'wrap-reverse'],
      direction: 'row',
      directionArray: ['row', 'row-reverse', 'column', 'column-reverse'],
    }
  },
}
</script>

<style lang="scss" scoped>
.gd-flex-item {
  width: 200px;
  height: 200px;
  line-height: 200px;
  margin: 5px;
  background-color: #ffd200;
  font-size: 100px;
  color: white;
  text-align: center;
  span {
    font-size: 16px;
  }
}
</style>
