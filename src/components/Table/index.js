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
var Header_1 = require("./Header");
var Body_1 = require("./Body");
require("./style");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c;
        return React.createElement("table", { className: "bd-table" },
            React.createElement(Header_1["default"], { columns: columns }),
            React.createElement(Body_1["default"], { columns: columns, data: data }));
    };
    return Table;
}(React.Component));
exports.Table = Table;
