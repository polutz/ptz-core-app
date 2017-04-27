import { equal } from 'ptz-assert';
import { EntityMinBase } from 'ptz-core-domain';
import { BaseRepositoryFake } from './index';

describe('BaseRepositoryFake', () => {
    it('set collectionName and db', () => {
        const collectionName = 'test';
        const db = {};
        const repository = new BaseRepositoryFake(db, collectionName);

        equal(repository.collectionName, collectionName, 'wrong collectionsName');
        equal(repository.db, db, 'wrong db');
    });

    it('save', () => {
        const repository = new BaseRepositoryFake(null, null);
        const entity = new EntityMinBase({});
        repository.save(entity);

        equal(repository.entities[0], entity);
    });

    it('getById', async () => {
        const repository = new BaseRepositoryFake(null, null);
        const entity = new EntityMinBase({});
        repository.save(entity);

        const dbEntity = await repository.getById(entity.id);

        equal(dbEntity, entity);
    });

    it('getByIds', async () => {
        const repository = new BaseRepositoryFake(null, null);

        const entity1 = new EntityMinBase({});
        repository.save(entity1);

        const entity2 = new EntityMinBase({});
        repository.save(entity2);

        const dbEntities = await repository.getByIds([entity1.id, entity2.id]);

        equal(dbEntities.length, 2);
    });

    it('find', async () => {
        const repository = new BaseRepositoryFake(null, null);

        const entity1 = new EntityMinBase({});
        repository.save(entity1);

        const entity2 = new EntityMinBase({});
        repository.save(entity2);

        const dbEntities = await repository.find({}, { limit: 2 });

        equal(dbEntities.length, 2);
    });

    it('getDbCollection', () => {
        const repository = new BaseRepositoryFake(null, 'test');
        const dbCollection = repository.getDbCollection();

        equal(dbCollection.collectionName, 'test');
    });
});
