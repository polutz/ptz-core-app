'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var Core = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('ptz-core-app', () => {
    describe('exports', () => {
        it('createFakeRepository', () => (0, _ptzAssert.ok)(Core.createRepository));
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map