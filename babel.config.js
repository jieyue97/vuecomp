module.exports = {
  presets: ['@vue/app'],
  // es2019 组合链,  双问号支持
  plugins: [
    '@vue/babel-plugin-transform-vue-jsx',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-nullish-coalescing-operator'
    // '@babel/plugin-proposal-optional-chaining',
    // [
    //   'import',
    //   {
    //     libraryName: 'vxe-table',
    //     style: true // 样式是否也按需加载
    //   }
    // ]
  ]
}
