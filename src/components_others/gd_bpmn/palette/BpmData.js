/**
 * 存储流程设计相关参数
 */
export default class BpmData {
  constructor() {
    this.controls = [] // 设计器控件
    this.init()
  }

  init() {
    this.controls = [
      {
        sort: 1,
        action: 'create.start-event',
        title: '开始事件',
        tooltip: '开始事件'
      },
      {
        sort: 20,
        action: 'create.intermediate-event',
        title: '中间事件'
      },
      {
        sort: 2,
        action: 'create.end-event',
        title: '结束事件',
        tooltip: '结束事件'
      },
      {
        sort: 2,
        action: 'create.end-event-none',
        title: '结束事件11',
        tooltip: '结束事件11'
      },
      {
        sort: 3,
        action: 'create.exclusive-gateway',
        title: '单一网关',
        tooltip: '审批流经过网关后只有一条后续路径会执行'
      },
      {
        sort: 4,
        action: 'create.parallel-gateway',
        title: '并行网关',
        tooltip: '审批流经过网关后执行所有后续路径'
      },
      {
        sort: 5,
        action: 'create.inclusive-gateway',
        tooltip: '审批流经过网关后根据条件会执行一个或多个后续路径（默认是用户发送时选择执行哪些后续路径）',
        title: '包含网关'
      },
      {
        sort: 21,
        action: 'create.call-activity',
        title: '调用活动'
      },
      {
        sort: 22,
        action: 'create.sub-process',
        title: '子流程'
      },
      {
        sort: 6,
        action: 'create.user-task',
        title: '人工任务',
        tooltip: '人工任务'
      },
      {
        sort: 8,
        action: 'create.user-sign-task',
        title: '会签任务'
      },
      {
        sort: 9,
        action: 'create.subprocess-expanded',
        title: '子流程'
      },
      // {
      //   action: 'create.data-object',
      //   title: '数据对象'
      // },
      // {
      //   action: 'create.data-store',
      //   title: '数据存储'
      // },
      {
        sort: 10,
        action: 'create.participant-expanded',
        title: '泳道'
      }
      // {
      //   sort: 11,
      //   action: 'create.group',
      //   title: '分组'
      // }
    ]
  }

  //  获取控件配置信息
  getControl(action) {
    const result = this.controls.filter(item => item.action === action)
    return result[0] || {}
  }
}
