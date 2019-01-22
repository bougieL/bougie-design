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
require("./style");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnChange = function (evt) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(evt.target.value, evt.target);
            }
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, value = _a.value, name = _a.name, placeholder = _a.placeholder, type = _a.type;
        return React.createElement("input", { className: "bd-input", type: type, placeholder: placeholder, name: name, value: value, onChange: this.handleOnChange });
    };
    Input.defaultProps = {
        type: 'text'
    };
    return Input;
}(React.Component));
exports.Input = Input;
