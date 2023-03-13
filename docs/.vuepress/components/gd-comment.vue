<template>
  <div>
    <gd-issue v-bind="$attrs" :avatar-list="list"> </gd-issue>
  </div>
</template>

<script>
import GdIssue from '../../../src/components/gd_comment'
import NavList from '../nav'
const nav = NavList.filter(res => res.text !== '主页')
export default {
  components: {
    GdIssue
  },
  data() {
    return {
      list: nav
    }
  },
  name: `GdCommentIssue`
}
</script>
