# JDK(Java Development Kit)

JDK 是 Java 语言的软件开发工具包，主要用于移动设备、嵌入式设备上的 java 应用程序。JDK 是整个 java 开发的核心，它包含了 JAVA 的运行环境（JVM+Java 系统类库）和 JAVA 工具。

没有 JDK 的话，无法编译 Java 程序（指 java 源码.java 文件），如果想只运行 Java 程序（指 class 或 jar 或其它归档文件），要确保已安装相应的 JRE。

- 在进行 java 开发前，我们需要下载 JDK(JAVA DEVELOPMENT KIT)即 JAVA 开发工具，JDK 中包含了 JRE 和 java 开发包。那么什么是 JRE 呢？

<font style="color:red">JRE</font>：java 运行环境（java runtime environment）又分 jvm 和 java 核心的类库。

<font style="color:red">JVM</font>：java 虚拟机（java virtual machine）java 程序就是在 jvm 中运行的。

<font style="color:red">java 核心类库</font> ：JRE 提供让程序运行的 java 库。

## JDK 安装途径

1.直接官网下载：http://www.oracle.com/

2.拷贝

拷贝完成后,放到本地目录

3.代码拉取

git 地址:http://10.0.1.250:9090/rdcenter/basersdep/flowengine/product/basemng/newversion/tools/back-end

![An image](/gdui/guideImg/JDK3.png)

首先，找到管理员授权 git 工程 A 权限。

找到本地盘目录，搜索框输入 cmd 打开 DOS 命令行

输入 git clone + （工程 A 的 git 地址）就可以了

- 安装后，配置环境变量

安装好 JDK 之后，原本必须要到安装目录下才能执行，为了实现在计算机任意目录下都能执行，所以才需要配置环境变量。

## 配置环境变量

- 右键单击计算机->属性->高级系统设置，选择“环境变量”。在“系统变量”栏下单击“新建”，创建新的系统环境变量。
- 点击新建：变量名"JAVA_HOME"，变量值"C:\Program Files\Java\jdk1.8.0_91"（变量值为 jdk 在你电脑的位置）点击确定就可以啦；

![An image](/gdui/guideImg/JDK2.png)

- 使用 java 命令确认环境是否配置成功

win+R 打开运行，输入 CMD 打打命令提示符窗口（有以下显示，则环境配置成功)

![An image](/gdui/guideImg/JDK4.png)
