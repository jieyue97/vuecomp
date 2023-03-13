# 可能遇到的问题

#### 1、流程定制模块列表页一进去并不加载数据，而是切换或者点击查询才出来数据

原因：<font style="color:red">组件库存在更新</font>

解决方法：<font style="color:red">查看国地组件库 gd_vue_components 的版本是不是 0.4.37 及以上</font>

#### 2、拉取子系统的时候出现 'src/projects/system' already exists in the index and is not a submodule

原因：<font style="color:red">之前有拉取过代码，存在缓存</font>

解决方法：<font style="color:red">git rm -r --cached 'src/projects/system'</font>
