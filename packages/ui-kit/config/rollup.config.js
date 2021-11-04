/*
 * @LastEditors: John
 * @Date: 2021-11-02 15:17:24
 * @LastEditTime: 2021-11-04 10:01:53
 * @Author: John
 */
import linaria from "@linaria/rollup";
import RollupAlias from "@rollup/plugin-alias";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupImage from "@rollup/plugin-image";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import rollup from "rollup";
import RollupCopy from "rollup-plugin-copy";
import RollupCss from "rollup-plugin-css-only";
import scss from "rollup-plugin-scss";
import RollupTypescript from "rollup-plugin-typescript2";
import Package from "../package.json";
const resolveFile = (_path) => path.resolve(__dirname, "..", _path);

const externalPackages = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

const styles = {};
const styleNodes = {};

const options = {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: "es",
      sourcemap: true,
    },
  ],
  watchOptions: {
    include: "src/**", // 监听的文件夹
    exclude: "node_modules/**", // 排除监听的文件夹
  },
  external: externalPackages,
  plugins: [
    /* rest of your plugins */
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
      evaluate: true,
      preprocessor: (selector, cssText) => {
        styles[`\n${selector}`] = `{${cssText}}`;
        return "";
      },
    }),
    RollupCss({
      // output: "style.css",
      output: function (_styles, _styleNodes, build) {
        if (!fs.existsSync("dist")) fs.mkdirSync("dist");
        fs.writeFileSync(
          path.join(__dirname, "../dist/css/linaria.css"),
          Object.keys(styles)
            .map((v) => `${v}${styles[v]}`)
            .join(" ")
          // .replace(/\s*/g, "")
        );
      },
    }),

    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    getBabelOutputPlugin(),
    RollupJson(),
    RollupTypescript({
      check: false,
      // tsconfig: resolveFile("tsconfig.rollup.json"),
    }),
    RollupCopy({
      targets: [],
    }),
    RollupImage(),
    RollupAlias({
      entries: [
        {
          find: "@",
          replacement: path.join(__dirname, "../src"),
        },
      ],
    }),
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: path.join(__dirname, "../dist/css/index.css"),
      failOnError: true,
    }),
  ],
};

export default options;

//@ts-ignore
const watcher = rollup.watch(options); // 调用rollup的api启动监听

watcher.on("event", (event) => {
  console.log("重新打包中...", event.code);
  if (event.code == "END") {
    console.log("执行tsc。。。");
    exec("yarn run tsc", (err) => {
      console.log("执行tsc完毕");
      if (err) {
        // console.error(err);
        // return;
      }
    });
  }
}); // 处理监听事件
