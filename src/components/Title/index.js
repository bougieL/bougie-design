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
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.render = function () {
        var _a = this.props, level = _a.level, children = _a.children;
        return React.createElement("h" + level, {
            className: utils_1.classNames('bd-title', "bd-title-" + level)
        }, children);
    };
    Title.defaultProps = {
        level: 2
    };
    return Title;
}(React.Component));
exports.Title = Title;
