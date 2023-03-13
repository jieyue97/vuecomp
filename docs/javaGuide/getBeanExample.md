# 如何获取 bean 实例?

bean 是计算机自动生成的类，bean 是一个由 Spring IoC 容器实例化、组装和管理的对象。也就是说，bean 并不是程序员编辑的，而是程序运行时，由 spring 通过反射生成的。

bean 和类是什么关系？

一个 bean 对应一个类,它们是一对一的。

     @Resource
      private IRedisDictCleanClient redisDictCleanClient;

     IRedisDictCleanClient iRedisDictCleanClient = (iRedisDictCleanClient) SpringUtil.getBean(iRedisDictCleanClient.class);
