<!-- 自定义步骤条 -->
<template>
  <div class="gd-steps-wrap">
    <div v-for="(item, index) in data" :key="index" :style="stepItemStyle" :class="{ 'is-active': index === current, 'is-finish': index < current }" class="step-item-context">
      <div class="step-item-head">
        <div class="step-item-icon">
          <div class="step-item-icon__innerbox">
            <i :class="item[stepProps.icon || 'icon'] || ''" class="step-icon" />
          </div>
        </div>
        <div v-if="index !== data.length - 1" class="step-item-line">
          <i class="step-item-line__arrow el-icon-d-arrow-right" />
          <i class="step-item-line__inner" />
        </div>
      </div>
      <div class="step-item-label">{{ item[stepProps.label || 'label'] || '' }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GdSteps',
  props: {
    // 圆环背景颜色
    iconRadiuColor: {
      type: String,
      default: 'rgba(230, 162, 60, 0.1)'
    },
    // icon 颜色
    iconBgColor: {
      type: String,
      default: '#e6a23c'
    },
    // 选中的字体颜色以及icon颜色
    actvieColor: {
      type: String,
      default: '#007af5'
    },
    data: {
      type: Array,
      default: () => []
    },
    stepProps: {
      type: Object,
      default: () => {
        return {
          id: 'id',
          label: 'label',
          value: 'value',
          icon: 'icon'
        }
      }
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      finishIndexes: []
    }
  },
  computed: {
    stepItemStyle() {
      if (this.data && this.data.length >= 2) {
        const widthPercent = 100 / this.data.length
        return {
          'flex-basis': widthPercent + '%'
        }
      } else {
        return {}
      }
    }
  },
  mounted() {
    if (this.data && this.data.length > 0 && this.current > 0) {
      for (let i = 0; i <= this.current; i++) this.finishIndexes.push(i)
    }
    // 设置icon颜色
    this.$el.style.setProperty('--iconBgColor', this.iconBgColor)
    // 设置未选中圆环颜色 iconRadiuColor
    this.$el.style.setProperty('--iconRadiuColor', this.iconRadiuColor)
    // 选中的颜色 actvieColor
    this.$el.style.setProperty('--actvieColor', this.actvieColor)
  }
}
</script>
<style lang="scss" scoped >
.gd-steps-wrap {
  display: flex;
  box-sizing: border-box;
  div {
    box-sizing: inherit;
  }
  .step-item-context {
    display: inline-block;
    &.is-active {
      .step-icon {
        color: #fff;
      }
      .step-item-icon {
        background-color: var(--iconRadiuColor);
        .step-item-icon__innerbox {
          background-color: var(--iconBgColor);
        }
      }
      .step-item-label {
        color: var(--iconBgColor);
      }
    }
    &.is-finish {
      .step-icon {
        color: #fff;
      }
      .step-item-icon {
        .step-item-icon__innerbox {
          background-color: var(--actvieColor);
        }
      }
      .step-item-line {
        .step-item-line__arrow {
          position: absolute;
          left: 50%;
          top: -7px;
          font-size: 14px;
          color: var(--actvieColor);
        }
        .step-item-line__inner {
          border-top: 1px dashed var(--actvieColor);
        }
      }
      .step-item-label {
        color: var(--actvieColor);
      }
    }
    .step-item-head {
      position: relative;
      text-align: center;
    }
    .step-icon {
      font-size: 24px;
      color: rgb(192, 196, 204);
      line-height: 1;
    }
    .step-item-icon {
      display: inline-block;
      padding: 6px;
      border-radius: 50%;
      background-color: #fff;
      position: relative;
      z-index: 1;
      .step-item-icon__innerbox {
        padding: 16px;
        background-color: #f6f6f6;
        border-radius: 50%;
      }
    }
    .step-item-line {
      position: absolute;
      left: 50%;
      right: -50%;
      top: 35px;
      z-index: 0;
      .step-item-line__arrow {
        position: absolute;
        left: 50%;
        top: -7px;
        font-size: 14px;
        color: #dcdfe6;
        transform: translateX(-50%);
      }
      .step-item-line__inner {
        display: block;
        width: 100%;
        border-top: 1px dashed #dcdfe6;
      }
    }
    .step-item-label {
      padding: 0px 15px;
      font-size: 14px;
      color: #606266;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
