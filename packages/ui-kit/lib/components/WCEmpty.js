"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/*
 * @LastEditors: John
 * @Date: 2021-11-02 14:47:54
 * @LastEditTime: 2021-11-04 15:15:45
 * @Author: John
 */
var components_1 = require("@tarojs/components");
var react_1 = require("react");
var linaria_1 = require("linaria");
var empty_2x_png_1 = require("../assets/images/empty@2x.png");
var index_1 = require("../utils/index");
require("./WCEmpty.scss");
/**
 * 空数据
 * @returns
 */
var Empty = function (props) {
    return (react_1["default"].createElement(components_1.View, { className: (0, index_1.multipleCss)((0, linaria_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          padding: 12px;\n        "], ["\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          padding: 12px;\n        "]))), "WCEmpty") },
        react_1["default"].createElement(components_1.Image, { className: (0, linaria_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          width: 292px;\n          height: 292px;\n        "], ["\n          width: 292px;\n          height: 292px;\n        "]))), src: empty_2x_png_1["default"] }),
        react_1["default"].createElement(components_1.Text, { className: (0, linaria_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          font-size: 24px;\n          font-family: PingFangSC-Regular, PingFang SC;\n          font-weight: 400;\n          color: #6a6e82;\n          line-height: 34px;\n        "], ["\n          font-size: 24px;\n          font-family: PingFangSC-Regular, PingFang SC;\n          font-weight: 400;\n          color: #6a6e82;\n          line-height: 34px;\n        "]))) }, props.tip),
        props.slot));
};
exports["default"] = Empty;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=WCEmpty.js.map