// requestAnimationFrame 适配函数
const raFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function(callback) {
    return window.setTimeout(callback, 1000 / 60)
  }
/**
 * 节流函数
 * @param {function} fn 事件处理函数
 * @param {object} [context=this] 上下文对象
 * @param {boolean} [isImmediate=false] 是否立刻执行
 * @returns {Function} 事件处理函数
 */
export function throttle(fn, context = this, isImmediate = false) {
  let isLocked
  return function() {
    const _args = arguments
    if (isLocked) return

    isLocked = true
    raFrame(function() {
      isLocked = false
      fn.apply(context, _args)
    })

    isImmediate && fn.apply(context, _args)
  }
}
