<template>
  <div></div>
</template>
<script>
export default {
  name: 'GitComment',
  components: {},
  props: {
    avatarList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}
</script>
<style>
.avatar-del {
  opacity: 0;
}
.avatar-button:hover .avatar-del {
  opacity: 1;
  transition: opacity 0.5s;
}
.comment-textarea span:hover {
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
.avatar-flex {
  display: flex;
}
.img-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #eee;
  margin-right: 20px;
  vertical-align: middle;
  box-sizing: border-box;
}
.el-textarea {
  /deep/ textarea {
    background-color: #fafafa;
  }
}
.avatar-num {
  border-left: 4px solid #008ce5;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
}
.avatar-class {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.children-bg {
  background: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
}
</style>
