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
var components_2 = require("@/components");
var MessageBox = /** @class */ (function (_super) {
    __extends(MessageBox, _super);
    function MessageBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false
        };
        _this.ref = React.createRef();
        _this.renderFooter = function () {
            return React.createElement(React.Fragment, null,
                React.createElement(components_2.Button, { onClick: _this.handleFooterClick.bind(_this, 'cancel') }, "\u53D6\u6D88"),
                React.createElement("span", { className: "b-s" }),
                React.createElement(components_2.Button, { type: "primary", onClick: _this.handleFooterClick.bind(_this, 'confirm') }, "\u786E\u5B9A"));
        };
        return _this;
    }
    MessageBox.prototype.handleFooterClick = function (action) {
        var _a = this.props, _b = _a.promise, resolve = _b.resolve, reject = _b.reject, onCancel = _a.onCancel;
        if (onCancel) {
            this.ref.current.handleOnCancel();
        }
        if (action === 'cancel' && reject) {
            reject();
        }
        else if (action === 'confirm' && resolve) {
            resolve();
        }
    };
    MessageBox.prototype.componentDidMount = function () {
        this.setState({
            visible: true
        });
    };
    MessageBox.prototype.render = function () {
        var _a = this.props, children = _a.children, title = _a.title, onCancel = _a.onCancel;
        var visible = this.state.visible;
        return React.createElement(components_1.Modal, { ref: this.ref, title: title, visible: visible, footer: this.renderFooter, onCancel: onCancel }, children);
    };
    return MessageBox;
}(React.Component));
exports.MessageBox = MessageBox;
