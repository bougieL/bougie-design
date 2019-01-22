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
var ReactDOM = require("react-dom");
var utils_1 = require("@/utils");
var react_transition_group_1 = require("react-transition-group");
var Notice = /** @class */ (function (_super) {
    __extends(Notice, _super);
    function Notice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            entered: false
        };
        return _this;
    }
    Notice.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({
            entered: true
        });
        var onCancel = this.props.onCancel;
        setTimeout(function () {
            _this.setState({
                entered: false
            }, function () {
                setTimeout(function () {
                    onCancel();
                }, 300);
            });
        }, 3000);
    };
    Notice.prototype.render = function () {
        var _a = this.props, type = _a.type, children = _a.children, wrapper = _a.wrapper;
        var entered = this.state.entered;
        return ReactDOM.createPortal(React.createElement(react_transition_group_1.CSSTransition, { classNames: "bd-notice", timeout: 0, "in": entered, exit: !entered },
            React.createElement("div", { className: utils_1.classNames('bd-notice', "bd-notice-" + type) }, children)), wrapper);
    };
    return Notice;
}(React.Component));
exports.Notice = Notice;
