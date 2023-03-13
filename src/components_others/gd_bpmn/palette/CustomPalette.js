export default class CustomPalette {
  constructor(create, elementFactory, palette) {
    this.create = create
    this.elementFactory = elementFactory
    palette.registerProvider(this)
  }

  // 这个是绘制palette的核心，函数名不要变
  getPaletteEntries() {
    const elementFactory = this.elementFactory
    const create = this.create

    function dragEventFactory(type) {
      return function(event) {
        const taskShape = elementFactory.create('shape', {
          type: type
        })
        create.start(event, taskShape)
      }
    }

    return {
      /*'create.end-event-none': {
        title: '结束',    // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-end-event-none',   // 样式名
        action: {      // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:EndEventNone')
        }
      },*/
      'create.exclusive-gateway': {
        group: 'gateway',
        title: '单一网关', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-gateway-none', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:ExclusiveGateway')
        }
      },
      'create.parallel-gateway': {
        group: 'gateway',
        title: '并行网关', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-gateway-parallel', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:ParallelGateway')
        }
      },
      'create.inclusive-gateway': {
        group: 'gateway',
        title: '包含网关', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-gateway-or', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:InclusiveGateway')
        }
      },
      'create.call-activity': {
        group: 'gateway',
        title: '调用活动', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-call-activity', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:CallActivity')
        }
      },
      'create.user-task': {
        group: 'gateway',
        title: '人工任务', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-user-task', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:UserTask')
        }
      },
      'create.sub-process': {
        group: 'gateway',
        title: '子流程', // 鼠标悬浮到节点上显示的文字
        className: 'icon-custom bpmn-icon-subprocess-expanded', // 样式名
        action: {
          // 操作该节点时会触发的事件，此时只注册一个拖动事件即可，否则拖动时没有效果
          dragstart: dragEventFactory('bpmn:SubProcess')
        }
      }
    }
  }
}
CustomPalette.$inject = ['create', 'elementFactory', 'palette']
