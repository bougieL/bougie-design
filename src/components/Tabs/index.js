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
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refHeader = React.createRef();
        _this.refScroll = React.createRef();
        _this.state = {
            active: 0,
            barStyle: {},
            contentStyle: {}
        };
        return _this;
    }
    Tabs.prototype.updateBarStyle = function () {
        if (!this.refHeader) {
            return;
        }
        var active = this.state.active;
        var gutter = this.props.gutter;
        var items = this.refHeader.current.querySelectorAll('.bd-tabs-item');
        var offset = gutter / 2;
        for (var i = 0; i < active; i++) {
            offset += parseFloat(items[i].offsetWidth) + gutter;
        }
        var barWidth = parseFloat(items[active].offsetWidth);
        this.setState({
            barStyle: {
                transform: "translate3d(" + offset + "px, 0, 0)",
                width: barWidth + "px"
            }
        });
    };
    Tabs.prototype.updateContentStyle = function () {
        if (!this.refScroll) {
            return;
        }
        var scrollWidth = parseFloat(this.refScroll.current.offsetWidth);
        var active = this.state.active;
        this.setState({
            contentStyle: {
                transform: "translate3d(-" + scrollWidth * active + "px, 0, 0)"
            }
        });
    };
    Tabs.prototype.handleItemClick = function (idx) {
        var _this = this;
        var _a = this.props, onChange = _a.onChange, list = _a.list;
        this.setState({
            active: idx
        }, function () {
            _this.updateBarStyle();
            _this.updateContentStyle();
            if (onChange) {
                onChange(list[idx]);
            }
        });
    };
    Tabs.prototype.componentDidMount = function () {
        this.updateBarStyle();
        this.updateContentStyle();
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, children = _a.children, gutter = _a.gutter;
        var _b = this.state, active = _b.active, barStyle = _b.barStyle, contentStyle = _b.contentStyle;
        return React.createElement("div", { className: "bd-tabs" },
            React.createElement("div", { className: "bd-tabs-header" },
                React.createElement("ul", { className: "bd-tabs-list", ref: this.refHeader }, list.map(function (_a, i) {
                    var label = _a.label;
                    return React.createElement("li", { className: utils_1.classNames('bd-tabs-item', {
                            'active': i === active
                        }), style: {
                            margin: "0 " + gutter / 2 + "px"
                        }, onClick: _this.handleItemClick.bind(_this, i), key: i }, label);
                })),
                React.createElement("div", { className: "bd-tabs-bar", style: barStyle })),
            children ? React.createElement("div", { ref: this.refScroll, className: "bd-tabs-scroll" },
                React.createElement("div", { className: "bd-tabs-content", style: contentStyle }, children)) : null);
    };
    Tabs.defaultProps = {
        gutter: 10
    };
    Tabs.TabPane = components_1.TabPane;
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
