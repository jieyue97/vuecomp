# 如何把字典编码转为值？

    private static final String USER_CODE = "$user";//用户
    private static final String ORG_CODE = "$org";//机构
    private static final String REGION_CODE = "$region";//区划

那字典怎么转码呢?

直接美元符加上字典类型\$dicType 就可以啦

- 转单个实体 【单个】

      @Resource
      private IRedisDictCleanClient redisDictCleanClient;

      redisDictCleanClient.toEntity(records,keys);

- 转单个实体构成的列表【批量】

       @Resource
       private IRedisDictCleanClient redisDictCleanClient;

       redisDictCleanClient.toEntityList(records,keys);
