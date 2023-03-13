// const req = require.context(`./svg-hainan`, true, /\.svg$/)
export function getSvgList(req) {
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  const svgNameList = requireAll(req)
    .map(module => module.default)
    .map(svg => ({
      ...svg,
      name: svg.id.replace('icon-', '')
    }))
  return svgNameList
}
