'use strict';

var _ptzAssert = require('ptz-assert');

var _sinon = require('sinon');

var _index = require('./index');

describe('BaseApp', function () {
    describe('log', function () {
        it('log if console.log sent', function () {
            var logSpy = (0, _sinon.spy)();
            var baseApp = (0, _index.createBaseApp)({ log: logSpy });
            baseApp.log('Hi!');
            (0, _ptzAssert.ok)(logSpy.called);
        });
        it('DO NOT log if console.log NOT sent', function () {
            var baseApp = (0, _index.createBaseApp)({});
            baseApp.log('Hi!');
        });
    });
});
//# sourceMappingURL=BaseAppTest.js.map
//# sourceMappingURL=BaseAppTest.js.map