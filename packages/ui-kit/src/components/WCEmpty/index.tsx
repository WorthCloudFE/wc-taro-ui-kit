/*
 * @LastEditors: John
 * @Date: 2021-11-02 14:47:54
 * @LastEditTime: 2021-11-04 17:48:02
 * @Author: John
 */
import { Text, View, Image } from "@tarojs/components";
import React from "react";
import { css } from "linaria";
import empty from "../../assets/images/empty@2x.png";
import "./index.scss";
import { multipleCss } from "@/utils";
type EmptyProps = {
  tip: string;
  slot?: any;
};
/**
 * 空数据
 * @returns
 */
const Empty = (props: EmptyProps) => {
  return (
    <View
      className={multipleCss(
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
        `,
        "WCEmpty"
      )}
    >
      <Image
        className={css`
          width: 292px;
          height: 292px;
        `}
        src={empty}
      ></Image>
      <Text
        className={css`
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #6a6e82;
          line-height: 34px;
        `}
      >
        {props.tip}
      </Text>
      {props.slot}
    </View>
  );
};

export default Empty;
