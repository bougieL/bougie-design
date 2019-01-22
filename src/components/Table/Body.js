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
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRow = function (data, i) {
            var columns = _this.props.columns;
            return React.createElement("tr", { key: i }, columns.map(function (obj, oi) {
                var dataIndex = obj.dataIndex, render = obj.render;
                if (dataIndex) {
                    return React.createElement("td", { key: oi }, data[dataIndex]);
                }
                else if (render) {
                    return React.createElement("td", { key: oi }, render(data));
                }
                else {
                    return React.createElement("td", { key: oi });
                }
            }));
        };
        return _this;
    }
    Body.prototype.render = function () {
        var _a = this.props.data, data = _a === void 0 ? [] : _a;
        return React.createElement("tbody", null, data.map(this.renderRow));
    };
    return Body;
}(React.Component));
exports["default"] = Body;
