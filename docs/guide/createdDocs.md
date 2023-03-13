# 组件文档编写

组件测试通过之后以及发布成功之后需要完善组件文档

进入项目根目录 gd_components,运行命令 npm run docs:dev

```js
npm run docs:dev
```

运行成功之后,在浏览器访问 <font color="red"> http://localhost:8888 </font>

对于你刚刚发布的组件是 ui 组件还是工具函数或是对应的 echart?

需要在对应的文件夹中创建文档,

找到 <font color="red"> sidebar.js </font>文件,在此文件上添加对应的名称

举例说明:添加一个组件文档编写,添加 <font color="red"> createdDocs </font>

同时要注意自己是在哪个文件夹下面建的文档,需要去对应的文件目录下建一个 md 文件,如 <font color="red"> createdDocs.md </font> 如图:

![An image](/vuepressblog/guideImg/docs-createdDocs.png)

当你创建完之后发现,文档上面不会马上出现刚刚你新建的文档,或者以下报错,如图:

![An image](/vuepressblog/guideImg/docs-docsError.png)

这时候可以执行停止命令,重新运行命令 npm run docs:dev

<font color="red"> createdDocs.md </font> 文件就是你要编写的文档内容了
