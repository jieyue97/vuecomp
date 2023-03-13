import { getSvgList } from '../icon'
const req = require.context(`.`, true, /\.svg$/)
const ns = {
  sysName: '恩施一体化',
  svgList: getSvgList(req)
}
export default ns
