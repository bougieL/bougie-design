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
var TabPane = /** @class */ (function (_super) {
    __extends(TabPane, _super);
    function TabPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabPane.prototype.render = function () {
        var children = this.props.children;
        return React.createElement("div", { className: "bd-tabpane" }, children);
    };
    return TabPane;
}(React.Component));
exports.TabPane = TabPane;
