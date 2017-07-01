import { equal } from 'ptz-assert';
import * as BaseRepositoryFake from './index';

const collectionName = 'test';
const db = 'fakeDb';
let repository;

describe('BaseRepositoryFake', () => {
    beforeEach('', () => {
        repository = BaseRepositoryFake.createRepository(collectionName, db);
    });
    it('set collectionName and db', () => {

        equal(repository.collectionName, collectionName, 'wrong collectionsName');
        equal(repository.db, db, 'wrong db');
    });

    it('save', () => {
        const entity = {
            name: 'entity'
        };
        repository.save(entity);

        equal(BaseRepositoryFake.entities[0], entity);
    });

    it('getById', async () => {
        const entity = {
            id: 'testid',
            name: 'entity'
        };
        repository.save(entity);

        const dbEntity = await repository.getById(entity.id);
        equal(dbEntity, entity);
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

        equal(dbEntities.length, 2);
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

        equal(dbEntities.length, 2);
    });

    it('getDbCollection', () => {
        const dbCollectionName = BaseRepositoryFake.getDbCollection();
        equal(dbCollectionName.collectionName, collectionName);
    });
});
