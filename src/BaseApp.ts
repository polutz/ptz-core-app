import { IBaseApp, IBaseAppArgs } from 'ptz-core-domain';

export const createBaseApp = (baseAppArgs: IBaseAppArgs): IBaseApp => {
    const logFunc = baseAppArgs.log;
    return {
        log: (...args: any[]): void => {
            if (logFunc)
                logFunc(...args);
        }
    };
};
