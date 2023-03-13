<template>
  <div class="my-setup">
    <div class="info-body">
      <div class="left-panner">
        <div class="title">GuoDi在线辅助平台</div>
        <div class="info-content-first">项目快速成型工具</div>
        <div class="info-content">
          国地科技多年来沉淀了不少关于项目设计开发的的经验和方法，我们将这些经验总结起来形成一些稳定且复用性高的内容，搭建一套服务于项目的设计开发模式，希望可以帮助大家提高产品设计和研发效率。
        </div>
        <div style="margin-top: 50px">
          <el-button type="primary" @click="startBtn"> 开始使用 </el-button>
        </div>
      </div>
      <div class="right-panner">
        <slot>
          <img src="/vuecomp/img/shouye.png" alt="" />
        </slot>
      </div>
    </div>
    <!-- <div class="footer">
      <slot name="">
        <p class="copyright">国地前端团队出品 @ 2021</p>
      </slot>
    </div> -->
  </div>
</template>

<script>
export default {
  name: `Setup`,
  methods: {
    startBtn() {
      this.$router.push('/ui/components/quickstart')
    },
    useGuideBtn() {
      this.$router.push('/guide/useFlow')
    },
  }
}
</script>
<style lang="scss" scoped>
.my-setup {
  position: absolute;
  top: 50%;
  margin-top: -260px;
  width: 1200px;
  height: 77.5vh;
  // height: 100vh;
  .info-body {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    .left-panner {
      width: 47%;
      .title:nth-of-type(1) {
        margin-top: 20px;
      }
      .info-content-first {
        height: 65px;
        line-height: 65px;
      }
      .title {
        font-size: 40px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #303133;
        line-height: 48px;
      }
      .info-content-first,
      .info-content {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #606266;
      }
    }
    .right-panner {
      width: 50%;
      img {
        width: 621px;
        height: 457px;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0px;
    background: #f2f6fc;
    border-top: 1px solid #e4e7ed;
    width: 100%;
    text-align: center;
  }
}
</style>
