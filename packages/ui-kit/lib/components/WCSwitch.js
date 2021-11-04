"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var core_1 = require("@linaria/core");
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var react_1 = require("react");
var react_2 = require("react");
var utils_1 = require("@/utils");
function WCSwitch(props) {
    var _a = props.value, value = _a === void 0 ? false : _a;
    var _b = (0, react_2.useState)(value), switchValue = _b[0], setSwitchValue = _b[1];
    (0, react_2.useEffect)(function () {
        setSwitchValue(value);
        console.log("初始化switch", value);
        return function () { };
    }, [value]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.View, { className: (0, utils_1.multipleCss)((0, core_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            width: 87px;\n            height: 40px;\n            border-radius: 36px;\n            display: flex;\n            align-items: center;\n            background: #d9d9d9;\n            border: 2px solid #e9e9e9;\n            margin-left: auto;\n          "], ["\n            width: 87px;\n            height: 40px;\n            border-radius: 36px;\n            display: flex;\n            align-items: center;\n            background: #d9d9d9;\n            border: 2px solid #e9e9e9;\n            margin-left: auto;\n          "]))), switchValue
                ? (0, core_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                background: #e34c34;\n                border: 2px solid #e56c59;\n              "], ["\n                background: #e34c34;\n                border: 2px solid #e56c59;\n              "]))) : ""), onClick: function (e) {
                var _a;
                e.stopPropagation();
                if (props.disable)
                    return;
                (0, taro_1.vibrateShort)();
                setSwitchValue(!switchValue);
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, !switchValue);
            } },
            react_1["default"].createElement(components_1.View, { className: (0, utils_1.multipleCss)((0, core_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n              width: 36px;\n              height: 36px;\n              background: #ffffff;\n              box-shadow: -2px 0px 2px 0px rgba(0, 0, 0, 0.18);\n              border-radius: 50%;\n              margin-left: 2px;\n              transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n              transform: translate3d(0, 0, 0);\n            "], ["\n              width: 36px;\n              height: 36px;\n              background: #ffffff;\n              box-shadow: -2px 0px 2px 0px rgba(0, 0, 0, 0.18);\n              border-radius: 50%;\n              margin-left: 2px;\n              transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n              transform: translate3d(0, 0, 0);\n            "]))), switchValue
                    ? (0, core_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                  /* margin-left: auto; */\n                  transform: translate3d(calc(88px - 36px - 4px), 0, 0);\n                  margin-right: 2px;\n                "], ["\n                  /* margin-left: auto; */\n                  transform: translate3d(calc(88px - 36px - 4px), 0, 0);\n                  margin-right: 2px;\n                "]))) : "") }))));
}
exports["default"] = WCSwitch;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=WCSwitch.js.map