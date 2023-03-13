# 持续集成

## Jenkins 自动化部署

- Jenkins 服务器上创建项目和配置

大体步骤：General(基础配置)→ 源码管理 → 构建 → 构建后操作

1.创建一个工程

![An image](/vuecomp/guideImg/Jenkins.png)

2.General(基础配置)

选择构建一个 maven 项目，任务名称可以随便写，自己能区别即可

![An image](/vuecomp/guideImg/Jenkins1.png)

3.描述

此步可选，这个是为了防止时间过长产生过多的内容，因此设置构建记录保留天数和保留的最大构建个数

![An image](/vuecomp/guideImg/Jenkins2.png)

4.源码管理

设置 Git 信息

![An image](/vuecomp/guideImg/Jenkins3.png)

5.Build

这是设置构建的一个选项，如 maven 版本和使用工程的 pom 文件及构建命令

![An image](/vuecomp/guideImg/Jenkins4.png)

6.构建后操作

构建后操作的意思是，jar 打包好后，要将 jar 发送到哪里去，发送后去和启动等。

这里需要提前在需要部署的服务器上配置好路径，写好启动和停止项目的脚本，并设置为可以执行的脚本。

![An image](/vuecomp/guideImg/Jenkins5.png)

7.最后点击 build 就可以部署到指定服务器啦

![An image](/vuecomp/guideImg/Jenkins6.png)
