// This is a fake repository to be used with subs/mocks
export default class BaseRepositoryFake {
    constructor(db, collectionName) {
        this.entities = [];
        this.db = db;
        this.collectionName = collectionName;
    }
    getDbCollection() {
        return { collectionName: this.collectionName };
    }
    save(entity) {
        this.entities.push(entity);
        return Promise.resolve(entity);
    }
    getById(id) {
        return Promise.resolve(this.entities[0]);
    }
    getByIds(ids) {
        return Promise.resolve(this.entities);
    }
    find(query, options) {
        return Promise.resolve(this.entities);
    }
}
//# sourceMappingURL=BaseRepositoryFake.js.map