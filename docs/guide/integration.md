# 持续集成
### jenkins 构建--非必须仅供参考

#### 前提：

- <font style="color:red">如果引入的框架代码不是子 git 工程，而是硬编码，不用考虑线上构建版本问题</font>
- <font style="color:red">如果业务系统引用的基础框架的 system|wfmng|wfruntime 系统是 git 子工程，并且子工程是以 branch 分支方式拉取，直接配置.gitmodules 文件 branch 参数即可</font>
- <font style="color:red">否则：若引用 system|wfmng|wfruntime 当中稳定版本 tag，需参考如下配置，否则构建将拉取的主分支最新代码，在框架更新时会出错。</font>

#### 配置：

![An image](/vuecomp/img/jenkins-guide-submodule.png)

#### 添加额外指令：

npm run pullGit 将 pull 所依赖的框架子系统代码。
![An image](/vuecomp/img/jenkins-guide-submodule-shell.png)
