import { ok } from 'ptz-assert';
import * as Core from './index';

describe('ptz-core-app', () => {
    describe('exports', () => {
        it('createBaseApp', () => ok(Core.createBaseApp));
        it('createFakeRepository', () => ok(Core.createRepository));
    });
});
