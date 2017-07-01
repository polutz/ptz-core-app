import { IEntityMinBase } from 'ptz-core-domain';
import R from 'ramda';
// This is a fake repository to be used with subs/mocks
export let entities: IEntityMinBase[] = [];
const fakeDbCollection = { collectionName: 'collectionName' };

export const createRepository = R.curry((collectionName: string, url: string) => {
    entities = [];
    const db = url;
    fakeDbCollection.collectionName = collectionName;
    return {
        db,
        collectionName,
        getDbCollection,
        save,
        getById,
        getByIds,
        find,
    };
});

export const getDbCollection = () => fakeDbCollection;

export function save(entity: IEntityMinBase): Promise<IEntityMinBase> {
    entities.push(entity);
    return Promise.resolve(entity);
}

export function getById(id: string): Promise<IEntityMinBase> {
    return Promise.resolve(entities[0]);
}

export function getByIds(ids: string[]): Promise<IEntityMinBase[]> {
    return Promise.resolve(entities);
}

export function find(query: any, options: { limit: number }): Promise<IEntityMinBase[]> {
    return Promise.resolve(entities);
}
// }
