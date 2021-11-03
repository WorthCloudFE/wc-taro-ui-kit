/*
 * @LastEditors: John
 * @Date: 2021-11-02 16:43:41
 * @LastEditTime: 2021-11-03 16:29:30
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
        ts: true,
        flow: false,
      },
    ],
    // ["react-app", { flow: false, typescript: true }],
    "linaria/babel",
  ],
};
