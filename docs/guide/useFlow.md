<!-- # 使用流程

### 第一步

- 生成子系统

运行 npm run addSys 工程名，运行该指令后会在 projects 下面生成该工程名文件夹并在文件夹下面生成纯净版的 vue 工程模板，同时静态文件 static 下面也会生成已该工程名命名的文件夹
如
<font style="color:red">npm run addSys demo</font>

- 设置子系统

<font style="color:red">npm run setSys</font>

- 如果需要删除子系统，则运行

<font style="color:red">npm run removeSys demo</font>

### 第二步

- 修改菜单编码以及路由编码，用来获取对应工程的菜单以及路由

1,菜单编码为获取菜单数据的编码，工程编码就是工程名

![An image](/gdui/img/menu.jpg)

### 指令使用

> <font style="color:red;font-size:16px;font-weight:bold">npm run addSys</font>

- 指令作用：生成子系统并生成对应工程静态文件，如 npm run addSys demo，最新的指令新建工程的时候默认设置工程配置，无需运行 npm run setSys
- 指令地址：coder/addSystem.js
- 下载地址：<a href="/gdui/direct/addSystem.js" download="addSystem.js" style="color: #409eff ">addSystem.js</a>

> <font style="color:red;font-size:16px;font-weight:bold">npm run setSys</font>

- 指令作用：生成子系统后运行该指令设置工程配置，如果是最新的添加指令，无需运行 npm run setSys
- 指令地址：coder/setSystemConfig.js
- 下载地址：<a href="/gdui/direct/setSystemConfig.js" download="setSystemConfig.js" style="color: #409eff ">setSystemConfig.js</a>

> <font style="color:red;font-size:16px;font-weight:bold">npm run removeSys</font>

- 指令作用：删除子系统以及对应工程静态文件，如 npm run removeSys demo，最新的指令删除工程的时候默认删除工程配置，无需运行 npm run setSys，如果删除后显示找不到 main.js 重新启动项目即可
- 指令地址：coder/removeSystem.js
- 下载地址：<a href="/gdui/direct/removeSystem.js" download="removeSystem.js" style="color: #409eff ">removeSystem.js</a>

> <font style="color:red;font-size:16px;font-weight:bold">npm run pullGit（新）/ npm run shell（旧）</font>

- 指令作用：拉取子系统，如 npm run pullGit system wfmng wfruntime，参数 system wfmng wfruntime 对应的是工程名，可以指定拉取某个项目名，如 npm run pullGit system
- 指令地址：coder/shell.js
- 下载地址：<a href="/gdui/direct/shell.js" download="shell.js" style="color: #409eff ">shell.js</a>

> <font style="color:red;font-size:16px;font-weight:bold">npm run setPackJson（新）/ npm run setJson（旧）</font>

- 指令作用：在 jenkins 中运用该指令动态修改后端地址，工程名，该指令接收三个参数，第一个参数是后端的 ip 地址，第二个参数是工程名，第三个参数是 config.json 的路径，第一个必传，其他的可以不传，如 npm run setJson http://10.0.0.1 sys static/config
- 指令地址：coder/setConfigJson.js
- 下载地址：<a href="/gdui/direct/setConfigJson.js" download="setConfigJson.js" style="color: #409eff ">shsetConfigJsonell.js</a>

> <font style="color:red;font-size:16px;font-weight:bold">npm run coder</font>

- 指令作用：生成左边文件夹目录树，如果运行报错，在 packJson 里面添加 node coder/indexNew.js 即可
- 指令地址：coder/indexNew.js
- 下载地址：<a href="/gdui/direct/indexNew.js" download="indexNew.js" style="color: #409eff ">indexNew.js</a>

### 注意事项

- <font style="color:red">如果工程下面的 projects/system 目录下面没有东西，则需要运行 npm run shell system 将 system 的代码拉下来再启动</font>
- <font style="color:red">尽量避免工程之间的相互引用，对打包以及编译的速度都会造成影响，特别是大的子系统</font>
- <font style="color:red">运行完 npm run removeSys 后需要重新 npm run setSys 修改运行配置，否则会因为找不到子系统而报错</font>
- <font style="color:red">尽量在基础框架上进行子系统的新增修改，避免将已经对原框架进行过多次修改的业务系统直接复制过来操作，可能会造成很多未知的问题</font>

### jenkins 构建--非必须仅供参考

#### 前提：

- <font style="color:red">如果引入的框架代码不是子 git 工程，而是硬编码，不用考虑线上构建版本问题</font>
- <font style="color:red">如果业务系统引用的基础框架的 system|wfmng|wfruntime 系统是 git 子工程，并且子工程是以 branch 分支方式拉取，直接配置.gitmodules 文件 branch 参数即可</font>
- <font style="color:red">否则：若引用 system|wfmng|wfruntime 当中稳定版本 tag，需参考如下配置，否则构建将拉取的主分支最新代码，在框架更新时会出错。</font>

#### 配置：

![An image](/gdui/img/jenkins-guide-submodule.png)

#### 添加额外指令：

npm run pullGit 将 pull 所依赖的框架子系统代码。
![An image](/gdui/img/jenkins-guide-submodule-shell.png) -->
