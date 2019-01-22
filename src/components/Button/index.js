"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var components_1 = require("@/components");
var utils_1 = require("@/utils");
require("./style");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, onClick = _a.onClick, type = _a.type, icon = _a.icon;
        return React.createElement("button", { className: utils_1.classNames('bd-button', "bd-button-" + type), onClick: onClick, type: "button", disabled: type === 'disable' },
            icon ? React.createElement(components_1.Icon, { type: icon }) : null,
            React.createElement("span", null, children));
    };
    Button.defaultProps = {
        type: 'default'
    };
    return Button;
}(React.Component));
exports.Button = Button;
