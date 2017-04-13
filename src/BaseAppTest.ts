import { notOk, ok } from 'ptz-assert';
import { spy } from 'sinon';
import { BaseApp, IAppFuncArgs } from './index';

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
