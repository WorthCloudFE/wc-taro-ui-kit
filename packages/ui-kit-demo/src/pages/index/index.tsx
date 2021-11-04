/*
 * @LastEditors: John
 * @Date: 2021-11-02 16:43:41
 * @LastEditTime: 2021-11-03 19:07:14
 * @Author: John
 */
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { WCEmpty, WCSwitch } from "@worth-cloud-ui-kit/taro";
import "@worth-cloud-ui-kit/taro/css/linaria.css";
import "@worth-cloud-ui-kit/taro/css/index.css";
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
