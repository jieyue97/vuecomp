<!-- # 流程定制安装步骤

1、通过工作流增强版地址（下面有）拉取基础代码，这个一定要拉，不能用自己以前的项目地址
<a target="_blank" href="http://10.0.1.250:9090/rdcenter/basersdep/flowengine/product/flowengine/newversion/source/gdbpm/tree/1.1.0.RELEASE">基础版地址</a>

2、安装完依赖后（建议用 cnpm）,执行 npm run pullGit system wfmng wfruntime

3、运行 npm run setSys 添加配置信息

4、运行 npm run dev

<font style="color:red">注意！注意！注意！,一定要基于我们的基础版来安装子系统，因为 webpack 等配置都需要更新来适应流程定制模块，如果直接将子系统安装到你们已经有的项目，会造成很多问题</font> -->
