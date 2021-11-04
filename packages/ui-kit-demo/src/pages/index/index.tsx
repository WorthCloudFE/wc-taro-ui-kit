/*
 * @LastEditors: John
 * @Date: 2021-11-02 16:43:41
 * @LastEditTime: 2021-11-04 12:09:11
 * @Author: John
 */
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { WCEmpty, WCSwitch } from "@worth-cloud-fe/wc-taro-ui-kit";
import "./index.scss";

const Index = () => {
  return (
    <View className="wrapper">
      <WCEmpty tip="123" />
      <WCSwitch />
    </View>
  );
};

export default Index;
