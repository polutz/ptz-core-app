'use strict';

var _ptzAssert = require('ptz-assert');

var _ptzCoreDomain = require('ptz-core-domain');

var _index = require('./index');

describe('BaseRepositoryFake', function () {
    it('set collectionName and db', function () {
        var collectionName = 'test';
        var db = {};
        var repository = new _index.BaseRepositoryFake(db, collectionName);
        (0, _ptzAssert.equal)(repository.collectionName, collectionName, 'wrong collectionsName');
        (0, _ptzAssert.equal)(repository.db, db, 'wrong db');
    });
    it('save', function () {
        var repository = new _index.BaseRepositoryFake(null, null);
        var entity = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity);
        (0, _ptzAssert.equal)(repository.entities[0], entity);
    });
    it('getById', async function () {
        var repository = new _index.BaseRepositoryFake(null, null);
        var entity = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity);
        var dbEntity = await repository.getById(entity.id);
        (0, _ptzAssert.equal)(dbEntity, entity);
    });
    it('getByIds', async function () {
        var repository = new _index.BaseRepositoryFake(null, null);
        var entity1 = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity1);
        var entity2 = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity2);
        var dbEntities = await repository.getByIds([entity1.id, entity2.id]);
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('find', async function () {
        var repository = new _index.BaseRepositoryFake(null, null);
        var entity1 = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity1);
        var entity2 = new _ptzCoreDomain.EntityMinBase({});
        repository.save(entity2);
        var dbEntities = await repository.find({}, { limit: 2 });
        (0, _ptzAssert.equal)(dbEntities.length, 2);
    });
    it('getDbCollection', function () {
        var repository = new _index.BaseRepositoryFake(null, 'test');
        var dbCollection = repository.getDbCollection();
        (0, _ptzAssert.equal)(dbCollection.collectionName, 'test');
    });
});
//# sourceMappingURL=BaseRepositoryFake.test.js.map
//# sourceMappingURL=BaseRepositoryFake.test.js.map