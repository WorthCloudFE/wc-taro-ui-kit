/*
 * @LastEditors: John
 * @Date: 2021-11-02 15:17:24
 * @LastEditTime: 2021-11-03 17:20:55
 * @Author: John
 */
import path from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupCopy from "rollup-plugin-copy";
import RollupImage from "@rollup/plugin-image";
import Package from "../package.json";
import linaria from "@linaria/rollup";
import RollupCss from "rollup-plugin-css-only";
import fs from "fs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import RollupAlias from "@rollup/plugin-alias";
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

export default {
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
      output: function (_styles, styleNodes) {
        // console.log(styleNodes);
        if (!fs.existsSync("dist")) fs.mkdirSync("dist");
        fs.writeFileSync(
          "dist/style.css",
          Object.keys(styles)
            .map((v) => `${v}${styles[v]}`)
            .join(" ")
            .replace(/\s*/g, "")
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
  ],
};
