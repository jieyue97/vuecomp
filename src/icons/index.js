const reqJs = require.context('.', true, /\.js$/)
const requireJs = requireContext => requireContext.keys().map(requireContext)
const svgJs = requireJs(reqJs).filter(res => res.default)
const svgList = []
svgJs.forEach(el => {
  svgList.push(el.default)
})
export default svgList
