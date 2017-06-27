'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDbCollection = exports.createRepository = exports.entities = undefined;
exports.save = save;
exports.getById = getById;
exports.getByIds = getByIds;
exports.find = find;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a fake repository to be used with subs/mocks
var entities = exports.entities = [];
var fakeDbCollection = { collectionName: 'collectionName' };
var createRepository = exports.createRepository = _ramda2.default.curry(function (collectionName, url) {
    exports.entities = entities = [];
    var db = url;
    fakeDbCollection.collectionName = collectionName;
    return {
        db: db,
        collectionName: collectionName,
        getDbCollection: getDbCollection,
        save: save,
        getById: getById,
        getByIds: getByIds,
        find: find
    };
});
var getDbCollection = exports.getDbCollection = function getDbCollection() {
    return fakeDbCollection;
};
function save(entity) {
    entities.push(entity);
    return Promise.resolve(entity);
}
function getById(id) {
    return Promise.resolve(entities[0]);
}
function getByIds(ids) {
    return Promise.resolve(entities);
}
function find(query, options) {
    return Promise.resolve(entities);
}
// }
//# sourceMappingURL=BaseRepositoryFake.js.map
//# sourceMappingURL=BaseRepositoryFake.js.map