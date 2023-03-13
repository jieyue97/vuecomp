# 打包

- 点击菜单栏 View→Tool Windows→Maven，之后右侧便出现 Maven 窗口，依次点击 clean→package。

![An image](/vuecomp/guideImg/package.png) ![An image](/vuecomp/guideImg/package1.png)

- 打包成功后就会出现 target 文件夹

![An image](/vuecomp/guideImg/package2.png)

## Maven 简介

- Apache Maven 是个项目管理和自动构建工具，基于项目对象模型（POM）的概念。

作用：完成项目的相关操作，如：编译，构建，单元测试，安装，网站生成和基于 Maven 部署项目。

<font style="color:red">clean： </font>用于清除之前构建生成的所有文件,其中具体为清除了 Target 目录中的所有文件，包括该目录,删除了 install 生成的所有文件,一般在需要重新构建和打包项目前使用。

<font style="color:red">validate： </font>用于验证项目是否正确，并且其中有必要信息是否都可用。

<font style="color:red">compile： </font>编译项目的源代码，主要是 java 文件,一般是编译 scr/main/java 或是 scr/test/java 里面的文件。

<font style="color:red">test： </font>对项目进行运行测试。

<font style="color:red">package： </font>将一个包含诸多文件的工程封装为一个压缩文件用于安装或部署。Java 工程对应 jar 包，Web 工程对应 war 包。打包文件并存放到项目的 target 目录下，打包好的文件通常都是编译后的 class 文件。

<font style="color:red">install： </font>在 Maven 环境下特指将打包的结果——jar 包或 war 包安装到本地仓库中。

<font style="color:red">site： </font>生成项目的站点文档。

<font style="color:red">deploy： </font>用来把本地 jar 包版本上传到远程仓库中去，一般在项目版本升级和更新中使用，外部和内部所有项目使用到该更新的版本都需要使用此步骤和命令。
