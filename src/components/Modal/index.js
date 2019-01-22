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
var ReactDom = require("react-dom");
var utils_1 = require("@/utils");
var react_transition_group_1 = require("react-transition-group");
require("./style");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            entered: false
        };
        _this.handleOnCancel = function () {
            var onCancel = _this.props.onCancel;
            _this.setState({
                entered: false
            }, function () {
                if (onCancel) {
                    setTimeout(onCancel, 300);
                }
            });
        };
        return _this;
    }
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        var visible = nextProps.visible;
        if (visible) {
            this.setState({
                entered: visible
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, children = _a.children, title = _a.title, visible = _a.visible, footer = _a.footer;
        var entered = this.state.entered;
        return ReactDom.createPortal(React.createElement(react_transition_group_1.CSSTransition, { classNames: "bd-modal-mask", timeout: 0, "in": entered, exit: !entered },
            React.createElement("div", { className: utils_1.classNames("bd-modal-mask", {
                    hide: !visible
                }) },
                React.createElement(react_transition_group_1.CSSTransition, { classNames: "bd-modal", timeout: 0, "in": entered, exit: !entered },
                    React.createElement("div", { className: "bd-modal" },
                        React.createElement("div", { className: "bd-modal-header" },
                            React.createElement("span", { className: "bd-modal-title" }, title),
                            React.createElement("span", { className: "bd-modal-close", onClick: this.handleOnCancel }, "\u00D7")),
                        React.createElement("div", { className: utils_1.classNames("bd-modal-content", {
                                "bd-modal-content-bordernone": !footer
                            }) }, children),
                        footer ? React.createElement("div", { className: "bd-modal-footer" }, footer()) : null)))), document.body);
    };
    Modal.defaultProps = {
        type: 'primary',
        visible: false
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
