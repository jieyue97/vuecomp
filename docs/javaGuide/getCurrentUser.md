# 如何获取当前用户？

<!-- ![An image](/vuecomp/guideImg/example1.png)

![An image](/vuecomp/guideImg/example2.png) -->

有两种方式:

1.AuthUtil.getUserName()

            ApiRequest apiRequest=new ApiRequest();
            apiRequest.setUserName(AuthUtil.getUserId());

2.LoginUser 作为参数

     import com.guodi.core.secure.LoginUser;//引入依赖

    @PostMapping("/saveTree")
    @ApiOperation(value = "新增(树结构数据)")
    public R saveTree(@RequestBody BiDbResourceServiceImpl.BiDbResourceTree biDbResourceTree, LoginUser loginUser) {
        List<Map<String, String>> result = new ArrayList<>();
        biDbResourceTree.setModifier(loginUser.getUserId().toString());
        biDbResourceService.saveingTree(biDbResourceTree, result);
        return R.data(result);
    }
