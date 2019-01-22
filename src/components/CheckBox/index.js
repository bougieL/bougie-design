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
require("./style");
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, children = _a.children, onChange = _a.onChange;
        return React.createElement("label", { className: "bd-checkbox" },
            React.createElement("input", { type: "checkbox", onChange: onChange, checked: checked }),
            React.createElement("div", { className: "bd-checkbox-icon" },
                React.createElement(components_1.Icon, { type: "checkmark" })),
            React.createElement("span", null, children));
    };
    return CheckBox;
}(React.Component));
exports.CheckBox = CheckBox;
