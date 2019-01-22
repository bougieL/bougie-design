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
var components_1 = require("@/components");
require("./style");
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputRef = React.createRef();
        _this.state = {
            files: []
        };
        _this.handleButtonClick = function () {
            var current = _this.inputRef.current;
            if (current) {
                current.click();
            }
        };
        _this.handleInputChange = function (e) {
            e.persist();
            var files = Array.from(e.target.files);
            _this.setState({ files: files });
        };
        _this.handleRemove = function (i) {
            var files = _this.state.files.slice();
            files.splice(i, 1);
            _this.setState({ files: files });
        };
        return _this;
    }
    Upload.prototype.render = function () {
        var _this = this;
        var files = this.state.files;
        var multiple = this.props.multiple;
        return React.createElement("div", { className: utils_1.classNames('bd-upload') },
            React.createElement(components_1.Button, { type: "primary", onClick: this.handleButtonClick, icon: "cloud-upload" }, "Click to Upload"),
            React.createElement("div", { className: "bd-upload-files" }, files.map(function (_a, i) {
                var name = _a.name;
                return React.createElement("div", { className: "bd-upload-file", key: i },
                    React.createElement("span", null, name),
                    React.createElement("span", { className: "remove", onClick: _this.handleRemove.bind(_this, i) }, "\u00D7"));
            })),
            React.createElement("input", { ref: this.inputRef, type: "file", className: "hide", multiple: multiple, onChange: this.handleInputChange }));
    };
    Upload.defaultProps = {
        multiple: true
    };
    return Upload;
}(React.Component));
exports.Upload = Upload;
