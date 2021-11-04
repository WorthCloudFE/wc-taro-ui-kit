/*
 * @LastEditors: John
 * @Date: 2021-11-02 14:47:54
 * @LastEditTime: 2021-11-03 19:15:02
 * @Author: John
 */
import { Text, View, Image } from "@tarojs/components";
import React from "react";
import { css } from "linaria";
import empty from "../assets/images/empty@2x.png";
import { multipleCss } from "../utils/index";
import "./WCEmpty.scss";
/**
 * 空数据
 * @returns
 */
const Empty = (props) => {
    return (React.createElement(View, { className: multipleCss(css `
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
        `, "WCEmpty") },
        React.createElement(Image, { className: css `
          width: 292px;
          height: 292px;
        `, src: empty }),
        React.createElement(Text, { className: css `
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #6a6e82;
          line-height: 34px;
        ` }, props.tip),
        props.slot));
};
export default Empty;
//# sourceMappingURL=WCEmpty.js.map