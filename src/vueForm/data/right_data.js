const requireComponent = require.context('../content', true, /\w+\.js$/)

let rightContent = {}

requireComponent.keys().map((fileName) => {
  let content = requireComponent(fileName)
  for (let i in content) {
    rightContent[i] = content[i]
  }
})

export default rightContent
