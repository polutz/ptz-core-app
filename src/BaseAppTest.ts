import { ok } from 'ptz-assert';
import { spy } from 'sinon';
import { createBaseApp } from './index';

describe('BaseApp', () => {
    describe('log', () => {
        it('log if console.log sent', () => {
            const logSpy = spy();
            const baseApp = createBaseApp({ log: logSpy });
            baseApp.log('Hi!');
            ok(logSpy.called);
        });

        it('DO NOT log if console.log NOT sent', () => {
            const baseApp = createBaseApp({});
            baseApp.log('Hi!');
        });
    });
});
