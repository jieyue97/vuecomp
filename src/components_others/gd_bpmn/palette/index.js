import CustomPalette from './CustomPalette'
import CustomRenderer from './CustomRenderer'
// import ContextPadProvider from './CustomContextPadProvider'
export default {
  __init__: ['customPalette', 'customRenderer'],
  customPalette: ['type', CustomPalette],
  customRenderer: ['type', CustomRenderer]
  // contextPadProvider: ['type', ContextPadProvider]
}
