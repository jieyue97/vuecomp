import {go, $} from './lib'

/**
 * 清理无效的参数选项，排除undefined的项
 * @param props
 * @returns {Object}
 */
function cleanProps(props) {
  const opts = Object.create(null)
  if (!props) return opts
  const propArray = Object.entries(props).filter(([k, v]) => v !== undefined)
  propArray.forEach(([k, v]) => {
    opts[k] = v
  })
  return opts
}

/**
 * 清理数组，排除 null和 undefined的项
 * @param array
 * @returns {*[]}
 */
function cleanArray(array = []) {
  return array.filter(n => !!n)
}

/**
 * 解析Graph配置参数，转换为标准格式
 * @param props
 * @returns {Object}
 */
function parseProps(props = {}) {
  const opts = {...props}
  const {$gray, $hover, $selected, $bindings, $events, $disabled} = opts
  delete opts.$gray
  delete opts.$hover
  delete opts.$selected
  delete opts.$bindings
  delete opts.$events
  delete opts.$disabled
  return {
    $normal: {...cleanProps(opts), ...$events},
    $gray: cleanProps($gray),
    $hover: cleanProps($hover),
    $selected: cleanProps($selected),
    $bindings: $bindings,
    $disabled: cleanProps($disabled)
  }
}

/**
 * 绑定鼠标经过状态
 * @param $normal
 * @param $hover
 * @param $selected
 * @param $disabled
 * @returns {Array}
 */
function createHoverBindings({$normal, $hover, $selected, $disabled}) {
  if (!$hover) return []
  return Object.entries($hover).map(([name, value]) => {
    return new go.Binding(name, 'isHighlighted', (yes, obj) => {
      const isEnabled = obj.part?.isEnabled
      const disabledValue = $disabled ? $disabled[name] : undefined
      // 禁用状态不响应 hover
      if (!isEnabled && disabledValue !== undefined) {
        return disabledValue
      }
      const isSelected = obj.part?.isSelected
      const selectedValue = $selected[name]
      // 已选中状态不响应hover
      if (isSelected && selectedValue !== undefined) {
        return selectedValue
      }
      return yes ? value : $normal[name]
    }).ofObject()
  })
}
/**
 * 通过modelData里的参数绑定值，控制节点样式
 * @param $normal
 * @param $hover
 * @param $gray
 * @param $selected
 * @param $disabled
 * @returns {Array}
 */
function createGrayBindings({$normal, $gray, $hover, $selected, $disabled}) {
  if (!$hover) return []
  return Object.entries($gray).map(([name, value]) => {
    return new go.Binding(name, '', (modelData, obj) => {
      const isEnabled = obj.part?.isEnabled
      const disabledValue = $disabled ? $disabled[name] : undefined
      if (!isEnabled && disabledValue !== undefined) {
        return disabledValue
      }
      const isSelected = obj.part?.isSelected
      const selectedValue = $selected[name]
      if (isSelected && selectedValue !== undefined) {
        return selectedValue
      }
      if(modelData.myGoHighlightMode === 'none') {
        return $normal[name]
      } else {
        return modelData.myGoIsHighlighting ? $gray[name] : $normal[name]
      }
    }).ofModel()
  })
}

/**
 * 绑定选中状态
 * @param $normal
 * @param $selected
 * @param $disabled
 * @returns {Array}
 */
function createSelectedBindings({$normal, $selected, $disabled}) {
  if (!$selected) return []
  return Object.entries($selected).map(([name, value]) => {
    return new go.Binding(name, 'isSelected', (yes, obj) => {
      const isEnabled = obj.part?.isEnabled
      const disabledValue = $disabled ? $disabled[name] : undefined
      // 禁用状态不响应选中
      if (!isEnabled && disabledValue !== undefined) {
        return disabledValue
      }
      return yes ? value : $normal[name]
    }).ofObject()
  })
}

/**
 * 绑定禁用状态
 * @param $normal
 * @param $selected
 * @param $hover
 * @param $disabled
 * @returns {Array}
 */
function createDisabledBindings({$normal, $selected, $hover, $disabled}) {
  if (!$disabled) return []
  return Object.entries($disabled).map(([name, value]) => {
    return new go.Binding(name, 'isEnabled', (yes, obj) => {
      if (!yes) {
        return value
      }
      const isSelected = obj.part?.isSelected
      const selectedValue = $selected[name]
      if (isSelected && selectedValue !== undefined) {
        return selectedValue
      }
      const isHighlighted = obj.part?.isHighlighted
      const hoverValue = $hover[name]
      if (isHighlighted && hoverValue !== undefined) {
        return hoverValue
      }
      return $normal[name]
    }).ofObject()
  })
}

function transformBindings(bindings = []) {
  if (Array.isArray(bindings)) {
    return bindings.map(n => typeof n === 'string' ? new go.Binding(n, n) : n)
  }
  return Object.entries(bindings)
    .map(([key, src]) => new go.Binding(key, src))
}


/**
 * GraphObject 模板构造器
 * @param {GraphObject} name GraphObject 类名
 * @param {Object} [props] 配置属性, {...props, $hover, $selected, $events, $bindings, $disabled}
 * @param {GraphObject|GraphObject[]} [children] 子 GraphObject
 * @returns {GraphObject}
 */
export default function ({name, props, children} = {}) {
  const opts = parseProps(props || {})
  const items = [].concat(children || [])
  return $(name,
    opts.$normal,
    ...cleanArray(items),
    ...transformBindings(opts.$bindings),
    ...createGrayBindings(opts),
    ...createHoverBindings(opts),
    ...createSelectedBindings(opts),
    ...createDisabledBindings(opts)
  )
}
