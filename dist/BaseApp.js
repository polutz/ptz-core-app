"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createBaseApp = exports.createBaseApp = function createBaseApp(baseAppArgs) {
    var logFunc = baseAppArgs.log;
    return {
        log: function log() {
            if (logFunc) logFunc.apply(undefined, arguments);
        }
    };
};
//# sourceMappingURL=BaseApp.js.map
//# sourceMappingURL=BaseApp.js.map