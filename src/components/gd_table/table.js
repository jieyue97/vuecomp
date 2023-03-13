var realTop = 0
export const tableMethod = function (_this) {
  if (_this.isTableAuto) {
    _this.$nextTick(() => {
      // 表格行高
      let rowH = _this.rowHeight === '' ? '44px' : _this.rowHeight
      if (rowH.includes('px')) {
        rowH = rowH.replace('px', '')
      }
      // 计划的高度
      let planH = _this.pageParam.size * Number(rowH)
      // 实际总高度
      let containerH = 0
      // 头部高度
      let headerH = 0
      // 总行数
      let totalNum = 0
      // let newNum = 0
      const tableRef = _this.$refs.elTable.$el
      const pageRef = _this.$refs.pagination.$el
      const pageH = pageRef.offsetHeight === undefined ? 42 : pageRef.offsetHeight
      const totalH = getClientHeight()
      const tableTop = getTopHeight(tableRef)
      const headerDom = tableRef.children
      if (headerDom.length > 0) {
        headerH = headerDom[1].offsetHeight
      }
      const hasPageH = _this.hiddenPage ? 0 : pageH
      containerH = totalH - tableTop - headerH - hasPageH - _this.tablePaddingOffset
      if (containerH - planH > 50) {
        totalNum = Math.ceil(containerH / Number(rowH))
        _this.initPageSize = [..._this.pageSizes, ...[totalNum - 1]]
        totalNum = totalNum - 1
      } else {
        totalNum = _this.pageParam.size
        _this.initPageSize = [..._this.pageSizes, ...[totalNum]]
      }
      _this.pageParam.size = totalNum
      _this.initPageSize = [...new Set(_this.initPageSize)]
      _this.initPageSize.sort(function (a, b) {
        return a - b
      })
      _this.$emit('getReallySize', totalNum)
      realTop = 0
    })
  }
}
function getClientHeight() {
  var clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    var clientHeight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight
  } else {
    var clientHeight = document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight
  }
  return clientHeight
}

function getTopHeight(dom) {
  let selectDom = dom
  realTop = realTop + selectDom.offsetTop
  if (selectDom.offsetParent) {
    getTopHeight(selectDom.offsetParent)
  }
  return realTop
}
