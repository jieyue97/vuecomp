const requireComponent = require.context('./components', false, /\w+\.vue$/)

let comps = {}

requireComponent.keys().map((fileName) => {
  let comp = requireComponent(fileName).default
  comps[comp.name] = comp
})
export default comps
