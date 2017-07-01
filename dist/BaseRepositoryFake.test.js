'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var BaseRepositoryFake = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var collectionName = 'test';
var db = 'fakeDb';
var repository = void 0;
describe('BaseRepositoryFake', function () {
    beforeEach('', function () {
        repository = BaseRepositoryFake.createRepository(collectionName, db);
    });
    it('set collectionName and db', function () {
        (0, _ptzAssert.equal)(repository.collectionName, collectionName, 'wrong collectionsName');
        (0, _ptzAssert.equal)(repository.db, db, 'wrong db');
    });
    it('save', function () {
        var entity = {
            name: 'entity'
        };
        repository.save(entity);
        (0, _ptzAssert.equal)(BaseRepositoryFake.entities[0], entity);
    });
    it('getById', async function () {
        var entity = {
            id: 'testid',
            name: 'entity'
        };
        repository.save(entity);
        var dbEntity = await repository.getById(entity.id);
        (0, _ptzAssert.equal)(dbEntity, entity);
    });
    it('getByIds', async function () {
        var entity1 = {
            id: 'testid',
            name: 'entity1'
        };
        repository.save(entity1);
        var entity2 = {
            id: 'testid1',
            name: 'entity2'
        };
        repository.save(entity2);
        var dbEntities = await repository.getByIds([entity1.id, entity2.id]);
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('find', async function () {
        var entity1 = {
            id: 'testid',
            name: 'entity1'
        };
        repository.save(entity1);
        var entity2 = {
            id: 'testid1',
            name: 'entity2'
        };
        repository.save(entity2);
        var dbEntities = await repository.find({}, { limit: 2 });
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('getDbCollection', function () {
        var dbCollectionName = BaseRepositoryFake.getDbCollection();
        (0, _ptzAssert.equal)(dbCollectionName.collectionName, collectionName);
    });
});
//# sourceMappingURL=BaseRepositoryFake.test.js.map
//# sourceMappingURL=BaseRepositoryFake.test.js.map