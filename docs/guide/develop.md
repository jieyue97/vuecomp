# 开发

### 组件编写及发布

- 安装完依赖之后,确保项目能跑起来之后开始编写组件

   运行命令 npm run comp gd_xxx,同时创建组件库以及例子的文件夹和 vue 文件

   举例:<font color='red'> npm run comp gd_demo</font>

这时你会发现 <font color='red'> components </font> 文件夹下会多出来一个 <font color='red'>gd_demo </font> 的文件目录和 <font color='red'>index.vue </font>文件,该文件就是你编写改组件的文件

<font color='red'>examples </font> 文件夹下会多出来一个 <font color='red'> gd_demo.vue </font> ,该文件是你写完该组件后要在此组件测试你刚刚写的组件是否通过使用测试验证的例子

```js
npm run comp gd_demo
```

如图所示:

![An image](/vuecomp/guideImg/docs-demo1.png)

- 该文件就是你刚刚运行命令 npm run comp gd_demo 创建的实例

![An image](/vuecomp/guideImg/docs-demo2.png)

写好测试用例之后如何访问,就是你的 ip 和端口,以及刚刚<font color='red'> gd_demo.vue </font>文件的 <font color='red'> name</font> 属性访问,如图所示:

![An image](/vuecomp/guideImg/docs-demo3.png)

![An image](/vuecomp/guideImg/docs-demo4.png)

- 如果该组件测试通过之后即可上传到库中

上传之前查看是否登录了 npm

```js
npm who am i
```

- 如果没有登陆的话,则运行登录命令 npm login,

  运行命令之后会提示登录用户名, Username: 请输入: <font color='red'> a1218331130 </font>

  紧接着是提示输入密码, Password : 请输入 : <font color='red'> gdzjk@2021 </font> ,这时候你会发现密码输入是没有显示出来的,也没有显示\*\*

  这是正常的,输入之后,按 enter 确认

这时候会提示输入邮箱, Email: (this IS public) : 请输入: <font color='red'> 1218331130@qq.com </font>

- 登录成功之后会提示:

Logged in as a1218331130 on https://registry.npmjs.org/.

完整的 npm 登录流程就走完了

```js
npm login
```

如图所示:

![An image](/vuecomp/guideImg/docs-npmLogin.png)

- 到这一步了是不是很激动,以为就要发布了,别急,请看下自己的 package.json 文件,版本是不是最新的,保证自己发布的时候代码是最新的,如图所示:

![An image](/vuecomp/guideImg/docs-package.png)

- 本地的 package.json 确认之后,再去 npm 官网 ( https://www.npmjs.com/package/gd_vue_components ) 看下对应的版本,如图所示:

![An image](/vuecomp/guideImg/docs-npm.png)

如果本地版本低于线上的版本,这时发布的话会失败的,理论上不可以往低版本发布,

所以需要手动更改自己本地的 package.json 文件里面的版本即可

更改完成之后执行可以尝试本地打包一次,如果打包不成功需要先解决打包不成功引起的问题,最后在执行发布命令

```js
//打包命令
npm run build
//发布命令
npm run tonpm
```

发布成功,如图所示:

![An image](/vuecomp/guideImg/docs-npmSuccess.png)

- 当发布成功之后自己变可以测试最新的线上组件了,需要把本地的 node 包更新,主要也是需要使用 cnpm 执行该命令的

```js
//@ 后面则是对应的版本信息
cnpm i gd_vue_components@0.1.37 --save
```