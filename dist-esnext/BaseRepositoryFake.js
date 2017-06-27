import R from 'ramda';
// This is a fake repository to be used with subs/mocks
export let entities = [];
const fakeDbCollection = { collectionName: 'collectionName' };
export const createRepository = R.curry((collectionName, url) => {
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
export function save(entity) {
    entities.push(entity);
    return Promise.resolve(entity);
}
export function getById(id) {
    return Promise.resolve(entities[0]);
}
export function getByIds(ids) {
    return Promise.resolve(entities);
}
export function find(query, options) {
    return Promise.resolve(entities);
}
// }
//# sourceMappingURL=BaseRepositoryFake.js.map