/*
 * @LastEditTime: 2021-10-19 10:22:39
 * @Date: 2021-10-19 10:22:38
 * @Author: John
 * @LastEditors: John
 */
// linaria 配置详见 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options
module.exports = {
  rules: [
    {
      action: require("linaria/evaluators").shaker,
    },
    {
      test: /node_modules[\/\\](?!@tarojs)/,
      action: "ignore",
    },
  ],
};
