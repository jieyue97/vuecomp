var realTop = 0
export const extendColMethod = function (_this) {
  if (_this.isColAuto) {
    _this.$nextTick(() => {
      // 表格行高
      let rowH = _this.rowHeight === '' ? '44px' : _this.rowHeight
      if (rowH.includes('px')) {
        rowH = rowH.replace('px', '')
      }
      // 实际总高度
      let containerH = 0
      // 头部高度
      let headerH = 0
      let totalNum = 0
      // 计划的高度
      let planH = _this.pageParam.size * Number(rowH)
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
      _this.realPage = Math.floor(containerH / Number(rowH))
      if (containerH - planH > 50) {
        totalNum = Math.ceil(containerH / Number(rowH))
        totalNum = totalNum - 1
      } else {
        totalNum = _this.pageParam.size
      }
      realTop = 0
      realPageChange(_this, totalNum)
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
export function realPageChange(_this, totalNum) {
  let tableRef = _this.$refs.elTable.$el
  let tableColumn = _this.tableColumns
  if (tableRef && tableColumn instanceof Array) {
    let gutter = totalNum > _this.realPage ? 16 : 0
    setTableColMinWidth(tableRef, tableColumn, gutter)
  }
}
// 设置自动宽度的列最大宽度，拖拽产生横向滚动
function setTableColMinWidth(table, tableColumn, gutter) {
  tableColumn.forEach((item) => {
    if (item.width && typeof item.width === 'string' && item.width.includes('px')) {
      item.width = Number(item.width.replace('px', ''))
    }
  })
  const offsetWidth = table.offsetWidth || table.$el.offsetWidth
  // 固定宽度的列 必须设定宽度
  const fixCols = tableColumn.filter((item) => item.width).map((item) => item.width)
  // 自由宽度的列 不许设置宽度
  const flexCols = tableColumn.filter((item) => !item.width)
  // 所有固定宽度列总宽
  const fixColsWidth = fixCols.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  if (offsetWidth > fixColsWidth) {
    // 剩余宽度
    // eltable 默认border-width=1
    const rest = offsetWidth - fixColsWidth - gutter - 1
    let minWidth = Math.floor(rest / flexCols.length)
    let decimal = rest - minWidth * flexCols.length
    flexCols.forEach((item, index) => {
      item.minWidth = minWidth
      if (!index) {
        // 小数点处理
        item.minWidth = minWidth + decimal
      }
    })
  }
}
