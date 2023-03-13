# 如何一键生成前后端代码？

<font style="color:red"> 在数据库表建好以及都有注释的基础上才可以一键生成前后端代码</font>

- 先下载模板文件，点击下载：<a href="/vuecomp/direct/EasyCodeConfig.json" download="EasyCodeConfig.json" style="color: #409eff ">EasyCodeConfig.json</a>

- 安装完 EasyCode-MybatisCodeHelperPro 组件后(安装步骤参考环境准备下 IDEA 安装下安装插件),从本地导入模板。

依次点击 File->Settings...->EasyCode-MybatisCodeHelperPro

![An image](/vuecomp/guideImg/createCode.png)

- 连接数据库

第一步：打开 IDEA，在右上侧栏找到 Database，然后点击左上角的“+”

![An image](/vuecomp/guideImg/createCode1.png)

第二步：点击上述加号标志后，选择“Data Source”，然后选择“PostgreSQL”，

![An image](/vuecomp/guideImg/createCode2.png)

第三步：在下述界面填写了 postgreSQL 的基础信息，点击“Test Connection”进行测试，如果出现“Successful”，则表示连接成功

<font style="color:red">第一次连接的时候，会提示 Driver files are not download. ，驱动为下载，点击下载即可。</font>

![An image](/vuecomp/guideImg/createCode3.png)

最后点击 OK!

- 生成代码

右键点击表,依次点击 EasyCode-MybatisCodeHelperPro->Generate Code

![An image](/vuecomp/guideImg/createCode4.png)

选择包路径选择路径,选择要生成的文件

![An image](/vuecomp/guideImg/createCode5.png)

最后点击 OK 就可以啦

生成的前端代码复制到前端对应的页面<font style="color:red">(用完建议删除此文件)</font>

![An image](/vuecomp/guideImg/createCode6.png)
