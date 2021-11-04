/*
 * @LastEditors: John
 * @Date: 2021-11-02 16:43:41
 * @LastEditTime: 2021-11-04 13:54:30
 * @Author: John
 */
import { Component } from "react";
import "./app.scss";
import "./app.css";
class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
