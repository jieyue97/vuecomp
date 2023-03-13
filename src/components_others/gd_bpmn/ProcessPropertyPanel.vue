<template>
  <div class="property-panel" ref="processPropertyPanel">
    <el-form :inline="false"
             :model="form"
             label-width="100px"
             size="small"
             label-position="left">
      <el-form-item label="流程名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="流程Key">
        <el-input v-model="form.process_id"></el-input>
      </el-form-item>
      <slot name="process" :row="form"></slot>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "ProcessPropertyPanel",
    props: {
      processData: {
        type: Object,
        required: true
      },
      processForm: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        process: {
          name: this.processData.name,
          id: '',
          description: ''
        },
        form: {
          ...this.processData,
          ...this.processForm
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
