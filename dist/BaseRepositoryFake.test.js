'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var BaseRepositoryFake = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const collectionName = 'test';
const db = 'fakeDb';
let repository;
describe('BaseRepositoryFake', () => {
    beforeEach('', () => {
        repository = BaseRepositoryFake.createRepository(collectionName, db);
    });
    it('set collectionName and db', () => {
        (0, _ptzAssert.equal)(repository.collectionName, collectionName, 'wrong collectionsName');
        (0, _ptzAssert.equal)(repository.db, db, 'wrong db');
    });
    it('save', () => {
        const entity = {
            name: 'entity'
        };
        repository.save(entity);
        (0, _ptzAssert.equal)(BaseRepositoryFake.entities[0], entity);
    });
    it('getById', async () => {
        const entity = {
            id: 'testid',
            name: 'entity'
        };
        repository.save(entity);
        const dbEntity = await repository.getById(entity.id);
        (0, _ptzAssert.equal)(dbEntity, entity);
    });
    it('getByIds', async () => {
        const entity1 = {
            id: 'testid',
            name: 'entity1'
        };
        repository.save(entity1);
        const entity2 = {
            id: 'testid1',
            name: 'entity2'
        };
        repository.save(entity2);
        const dbEntities = await repository.getByIds([entity1.id, entity2.id]);
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('find', async () => {
        const entity1 = {
            id: 'testid',
            name: 'entity1'
        };
        repository.save(entity1);
        const entity2 = {
            id: 'testid1',
            name: 'entity2'
        };
        repository.save(entity2);
        const dbEntities = await repository.find({}, { limit: 2 });
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('getDbCollection', () => {
        const dbCollectionName = BaseRepositoryFake.getDbCollection();
        (0, _ptzAssert.equal)(dbCollectionName.collectionName, collectionName);
    });
});
//# sourceMappingURL=BaseRepositoryFake.test.js.map
//# sourceMappingURL=BaseRepositoryFake.test.js.map