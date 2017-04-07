import { ok } from 'ptz-assert';
import { spy } from 'sinon';
import BaseApp from './BaseApp';
describe('BaseApp', () => {
    describe('log', () => {
        it('log if console.log sent', () => {
            const logSpy = spy();
            const baseApp = new BaseApp({ log: logSpy });
            baseApp.log('Hi!');
            ok(logSpy.called);
        });
        it('DO NOT log if console.log NOT sent', () => {
            const baseApp = new BaseApp({});
            baseApp.log('Hi!');
        });
    });
});
//# sourceMappingURL=BaseAppTest.js.map