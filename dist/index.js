'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseRepositoryFake = require('./BaseRepositoryFake');

Object.keys(_BaseRepositoryFake).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BaseRepositoryFake[key];
    }
  });
});
//# sourceMappingURL=index.js.map