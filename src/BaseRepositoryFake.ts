import { IBaseRepository, IEntityMinBase } from 'ptz-core-domain';

// This is a fake repository to be used with subs/mocks
export default class BaseRepositoryFake implements IBaseRepository<IEntityMinBase> {
    db;
    collectionName: string;
    entities: IEntityMinBase[] = [];

    constructor(db: {}, collectionName: string) {
        this.db = db;
        this.collectionName = collectionName;
    }

    getDbCollection() {
        return { collectionName: this.collectionName };
    }

    save(entity: IEntityMinBase): Promise<IEntityMinBase> {
        this.entities.push(entity);
        return Promise.resolve(entity);
    }

    getById(id: string): Promise<IEntityMinBase> {
        return Promise.resolve(this.entities[0]);
    }

    getByIds(ids: string[]): Promise<IEntityMinBase[]> {
        return Promise.resolve(this.entities);
    }

    find(query: any, options: { limit: number }): Promise<IEntityMinBase[]> {
        return Promise.resolve(this.entities);
    }
}
