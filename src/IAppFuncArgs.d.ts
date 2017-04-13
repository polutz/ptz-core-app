import { ICreatedBy } from 'ptz-core-domain';

interface IAppFuncArgs<TUser> {
    createdBy: ICreatedBy<TUser>;
}
