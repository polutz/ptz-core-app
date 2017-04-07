export default class BaseApp {
    constructor(baseAppArgs) {
        this.logFunc = baseAppArgs.log;
    }
    log(...args) {
        if (this.logFunc)
            this.logFunc(...args);
    }
}
//# sourceMappingURL=BaseApp.js.map