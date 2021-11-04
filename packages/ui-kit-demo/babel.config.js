/*
 * @LastEditors: John
 * @Date: 2021-11-02 16:43:41
 * @LastEditTime: 2021-11-04 14:49:41
 * @Author: John
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const path = require("path");
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: true
      }
    ],
    "linaria/babel"
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "taro-hooks",
        camel2DashComponentName: false
      },
      "taro-hooks"
    ]
  ],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".tsx", ".ts", ".js", ".json"],
        alias: {
          // For development, we want to alias the library to the source
          "@worth-cloud-fe/wc-taro-ui-kit": path.join(
            __dirname,
            "../ui-kit/dist"
          )
        }
      }
    ]
  ]
};
