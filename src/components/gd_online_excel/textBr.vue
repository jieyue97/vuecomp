<template>
  <div>
    <div v-for="item in textList">
        {{item}}
    </div>
    <div v-if="isShowRulesMessage" style="color: #b61616;">
      <span v-if="rulesObj['rules']">
        {{ setRulesName(rulesObj['rules'], scopeObj) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "textBr",
  props: {
    textareaName: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    isShowRulesMessage: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    scopeObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    setRulesName(){
      return (row, res) =>{
        const arr = row.message.filter(item => item.row === Number(res.index))
        if (arr.length) {
          const obj = arr[0].check
          if (obj.required) {
            return obj.message
          }
        }
        return ''
      }
    }
  },
  data() {
    return {
      textList: [],
      rulesObj: {}
    }
  },
  created() {
    this.rulesObj = JSON.parse(JSON.stringify(this.item))
    const name = this.textareaName
    let textareaName = name
    if (typeof name === 'number') {
      textareaName = name.toString() + ' '
    }
    this.textList = textareaName?.split(/[(\r\n)\r\n]+/)
  }
}
</script>

<style scoped>

</style>
