// 配置具体的修改规则
// module.exports = function override(config, env) {
//   return config;
// }

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports('import', {  // 按需引入
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    lessOptions:{
      javascriptEnabled: true, // 允许js修改底层文件颜色
      modifyVars: {'@primary-color' : '#ddd'}  //  修改按钮变量颜色
    }
  })
);
