const go = process.env.NODE_ENV === 'production' ? require('gojs/release/go') : require('gojs/release/go-debug')

const $ = go.GraphObject.make

// 对segmentFraction 设置自定义动画
go.AnimationManager.defineAnimationEffect('fraction', function(obj, startValue, endValue, easing, currentTime, duration, animation) {
  obj.segmentFraction = easing(currentTime, startValue, endValue - startValue, duration)
})

go.Shape.defineFigureGenerator('Terminator', function(shape, w, h) {
  console.log(w, h)
  const geo = new go.Geometry()
  const fig = new go.PathFigure(0.25 * w, 0, true)
  geo.add(fig)

  fig.add(new go.PathSegment(go.PathSegment.Arc, 270, 180, 0.75 * w, 0.5 * h, 0.25 * w, 0.5 * h))
  fig.add(new go.PathSegment(go.PathSegment.Arc, 90, 180, 0.25 * w, 0.5 * h, 0.25 * w, 0.5 * h))
  geo.spot1 = new go.Spot(0.23, 0)
  geo.spot2 = new go.Spot(0.77, 1)
  return geo
})

export default go
export { go, $ }
