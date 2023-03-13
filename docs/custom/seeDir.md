# 目录结构解析

项目文件目录部分解析

## 组件 src 目录解析

编写组件主要用到的文件夹有 components , examples , assets

src 目录结构如下:

![An image](/gdui/guideImg/src.png)

--<font color='red'> assets</font> 存放 iconfont 文件,以及图片

--<font color='red'> components</font> 编写的组件存放的文件夹,组件命名是以 gd\_线开头的文件夹,具体名称是驼峰命名,如下图所示:

![An image](/gdui/guideImg/components.png)

--<font color='red'> examples</font> 组件例子编写测试文件存放目录

--<font color='red'> untils</font> 组件需要用到的公共工具存放目录

## 国地组件开发组件库文档 docs 目录解析

docs 文件文档编写主要是面对使用国地组件库的同事,
每个开发完自己组件的同事应当及时补充文档内容,方便其他同事使用你的组件

docs 目录详解:

![An image](/gdui/guideImg/docs.png)

<font color='red'> .vuepress</font> 存放文档首页,导航栏以及公共样式和图片目录,如下图:

![An image](/gdui/guideImg/docs-.vuepress.png)

<font color='red'> components</font> 存放文档 vue 界面

--<font color='red'> Icon.vue</font> 遍历图标 icon 库界面

--<font color='red'> setup.vue</font> 文档首页界面

![An image](/gdui/guideImg/docs-index.png)

<font color='red'> public</font> 存放图片

![An image](/gdui/guideImg/docs-public.png)

<font color='red'> style</font> 当文档内的样式 影响了编写组件的样式可在此目录下的 <font color='red'> index.styl</font> 添加样式,避免污染

<font color='red'> tips:只针对当前文档</font>

![An image](/gdui/guideImg/docs-style.png)

--<font color='red'> nav.js</font> 文档头部导航栏文件,如需添加菜单请参考里面文件添加方式

![An image](/gdui/guideImg/docs-nav1.png)

--<font color='red'> sidebar.js</font> 左侧菜单文件目录,对应下图说明:

![An image](/gdui/guideImg/docs-sidebar.png)

<font color='red'> assets</font> 该目录存放 icon 各项目 icon 包,关于 icon 使用说明以及放置说明请参考=><font color='red'> 规范</font>=><font color='red'> iconfont 规范</font>

![An image](/gdui/guideImg/docs-asset.png)

<font color='red'> guide</font> 该目录存放的是指南模块下面的文件

![An image](/gdui/guideImg/docs-guide.png)

<font color='red'> icon</font> 该目录存放的是图标模块下面的文件

![An image](/gdui/guideImg/docs-icon.png)

<font color='red'> standard</font> 该目录存放的是规范模块下面的文件

![An image](/gdui/guideImg/docs-standard.png)

<font color='red'> ui</font> 该目录存放的是组件和 echart 模块下面的文件,其中是 --<font color='red'> components</font> 和 --<font color='red'> echart</font>

![An image](/gdui/guideImg/docs-ui.png)

<font color='red'> untils</font> 该目录存放的是工具函数模块下的文件

![An image](/gdui/guideImg/docs-untils.png)
