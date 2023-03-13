import { getSvgList } from '../icon'
const req = require.context(`.`, true, /\.svg$/)
const hainan = {
  sysName: '海南一体化',
  svgList: getSvgList(req)
}
export default hainan
