"use strict";
exports.__esModule = true;
var React = require("react");
var Notice_1 = require("./Notice");
var ReactDOM = require("react-dom");
require("./style");
function info(props) {
    return next(props);
}
function next(_a) {
    var _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.message, message = _c === void 0 ? '确定' : _c;
    var wrapper = document.querySelector('.bd-notice-wrapper');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.classList.add('bd-notice-wrapper');
        document.body.appendChild(wrapper);
    }
    var div = document.createElement('div');
    var component = React.createElement(Notice_1.Notice, {
        type: type,
        wrapper: wrapper,
        onCancel: function () {
            ReactDOM.unmountComponentAtNode(div);
        }
    }, message);
    ReactDOM.render(component, div);
}
exports.Notice = {
    info: info
};
