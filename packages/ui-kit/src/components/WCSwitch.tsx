import { css } from "@linaria/core";
import { ViewProps } from "@tarojs/components/types/View";
import { View } from "@tarojs/components";
import { vibrateShort } from "@tarojs/taro";
import React from "react";
import { useEffect, useState } from "react";
import { multipleCss } from "@/utils";

/*
 * @LastEditTime: 2021-11-03 15:18:36
 * @Date: 2021-10-22 18:22:32
 * @Author: John
 * @LastEditors: John
 */
export type WCSwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  disable?: boolean;
} & Pick<ViewProps, "className">;
export default function WCSwitch(props: WCSwitchProps) {
  const { value = false } = props;

  const [switchValue, setSwitchValue] = useState(value);
  useEffect(() => {
    setSwitchValue(value);
    console.log("初始化switch", value);
    return () => {};
  }, [value]);

  return (
    <>
      <View
        className={multipleCss(
          css`
            width: 87px;
            height: 40px;
            border-radius: 36px;
            display: flex;
            align-items: center;
            background: #d9d9d9;
            border: 2px solid #e9e9e9;
            margin-left: auto;
          `,
          switchValue
            ? css`
                background: #e34c34;
                border: 2px solid #e56c59;
              `
            : ""
        )}
        onClick={(e) => {
          e.stopPropagation();
          if (props.disable) return;
          vibrateShort();
          setSwitchValue(!switchValue);
          props.onChange?.(!switchValue);
        }}
      >
        <View
          className={multipleCss(
            css`
              width: 36px;
              height: 36px;
              background: #ffffff;
              box-shadow: -2px 0px 2px 0px rgba(0, 0, 0, 0.18);
              border-radius: 50%;
              margin-left: 2px;
              transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
              transform: translate3d(0, 0, 0);
            `,
            switchValue
              ? css`
                  /* margin-left: auto; */
                  transform: translate3d(calc(88px - 36px - 4px), 0, 0);
                  margin-right: 2px;
                `
              : ""
          )}
        ></View>
      </View>
    </>
  );
}
