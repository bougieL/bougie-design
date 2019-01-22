"use strict";
exports.__esModule = true;
var React = require("react");
var MessageBox_1 = require("./MessageBox");
var ReactDOM = require("react-dom");
function confirm(props) {
    return next(props);
}
function next(_a) {
    var _b = _a.title, title = _b === void 0 ? '提示' : _b, _c = _a.message, message = _c === void 0 ? '确定' : _c;
    return new Promise(function (resolve, reject) {
        var div = document.createElement('div');
        var component = React.createElement(MessageBox_1.MessageBox, {
            onCancel: function () {
                ReactDOM.unmountComponentAtNode(div);
                div = null;
            },
            promise: {
                reject: reject,
                resolve: resolve
            },
            title: title
        }, message);
        ReactDOM.render(component, div);
    });
}
exports.MessageBox = {
    confirm: confirm
};
