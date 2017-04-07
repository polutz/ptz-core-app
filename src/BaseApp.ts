import { IBaseApp, IBaseAppArgs } from 'ptz-core-domain';

export default class BaseApp implements IBaseApp {

    private logFunc;

    constructor(baseAppArgs: IBaseAppArgs) {
        this.logFunc = baseAppArgs.log;
    }

    log(...args: any[]): void {
        if (this.logFunc)
            this.logFunc(...args);
    }
}
