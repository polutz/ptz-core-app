'use strict';

var _ptzAssert = require('ptz-assert');

var _sinon = require('sinon');

var _BaseApp = require('./BaseApp');

var _BaseApp2 = _interopRequireDefault(_BaseApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BaseApp', function () {
    describe('log', function () {
        it('log if console.log sent', function () {
            var logSpy = (0, _sinon.spy)();
            var baseApp = new _BaseApp2.default({ log: logSpy });
            baseApp.log('Hi!');
            (0, _ptzAssert.ok)(logSpy.called);
        });
        it('DO NOT log if console.log NOT sent', function () {
            var baseApp = new _BaseApp2.default({});
            baseApp.log('Hi!');
        });
    });
});
//# sourceMappingURL=BaseAppTest.js.map