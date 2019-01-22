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
var utils_1 = require("@/utils");
require("./style");
var FormItem = /** @class */ (function (_super) {
    __extends(FormItem, _super);
    function FormItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormItem.prototype.render = function () {
        var _a = this.props, label = _a.label, labelWith = _a.labelWith, children = _a.children, vertical = _a.vertical;
        return React.createElement("div", { className: utils_1.classNames("bd-formitem", "bd-formitem-vertical" + vertical) },
            React.createElement("div", { className: "bd-formitem-label", style: {
                    width: labelWith + 'px'
                } }, label),
            children);
    };
    FormItem.defaultProps = {
        vertical: 'center'
    };
    return FormItem;
}(React.Component));
exports.FormItem = FormItem;
