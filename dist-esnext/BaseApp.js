export const createBaseApp = (baseAppArgs) => {
    const logFunc = baseAppArgs.log;
    return {
        log: (...args) => {
            if (logFunc)
                logFunc(...args);
        }
    };
};
//# sourceMappingURL=BaseApp.js.map