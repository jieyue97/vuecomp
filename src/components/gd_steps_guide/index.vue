<template>
  <virtual-list style="height: 360px; overflow-y: auto;" :data-key="'id'" :data-sources="items" :data-component="itemComponent" />
</template>

<script>
import itemComponent from './Item'
import VirtualList from 'vue-virtual-scroll-list'
export default {
  name: 'GdStepsGuide',
  components: { VirtualList, itemComponent },
  data() {
    return {}
  },
  props: {},
  computed: {},
  methods: {},
  mounted() {}
}
</script>
