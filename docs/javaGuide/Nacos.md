# Nacos 配置、启动

- Nacos 的官网地址为： https://nacos.io

Nacos（Name and Config Service） 它是阿里开源的 SpringCloud Alibaba 项目下的一项技术，可以实现服务注册中心、分布式配置中心。

Nacos 的 2 个核心作用：服务发现、配置管理。

- 安装方法也可通过 JDK 第二种安装途径获取

![An image](/gdui/guideImg/nacos.png)

- nacos 解压

- nacos 启动：在所在文件夹下 bin/startup.cmd 启动

![An image](/gdui/guideImg/nacos1.png)

- 验证是否成功

地址：http://ip:port/nacos 出现以下页面，登录名\密码：nacos\nacos

![An image](/gdui/guideImg/nacos2.png)

在所在文件夹下 conf/application.properties 中可看到默认端口,如图:

![An image](/gdui/guideImg/nacos3.png)
