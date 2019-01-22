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
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioGroup.prototype.render = function () {
        var children = this.props.children;
        return React.createElement("div", { className: "bd-radiogroup" }, children);
    };
    RadioGroup.Radio = components_1.Radio;
    return RadioGroup;
}(React.Component));
exports.RadioGroup = RadioGroup;
