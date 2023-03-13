const _ = require('lodash')
module.exports = _.template(`
<template>
  <div>
    app
  </div>
</template>
<script>
  export default {
    name:"<%=cname%>"
  }
</script>
<style lang="scss" scoped>

</style>
`)
