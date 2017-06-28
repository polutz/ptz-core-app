import { IBaseApp, IBaseAppArgs } from '@alanmarcell/ptz-core-domain';

export const createBaseApp = (baseAppArgs: IBaseAppArgs): IBaseApp => {
    const logFunc = baseAppArgs.log;
    return {
        log: (...args: any[]): void => {
            if (logFunc)
                logFunc(...args);
        }
    };
};
