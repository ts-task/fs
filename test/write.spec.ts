/// <reference types="jest" />
/// <reference types="node" />

import { write } from "../src/fs";
import { jestAssertUntypedNeverCalled, assertFork } from "./helpers";

jest.mock('fs', () => {
    const mock = {
        write: (...args: any[]) => {
            const cb = args[args.length - 1];
            cb.apply(null, mock.cbArgs);
        },
        cbArgs: null
    };
    return mock;
});

describe("write", () => {
    it("should return an object with the written information when successful", cb => {
        const buff = Buffer.alloc(50);
        require('fs').cbArgs = [null, 10, buff];
        write(9, buff, 0, 0, 0).fork(
            jestAssertUntypedNeverCalled(cb),
            assertFork(cb, writeObj => {
                expect(writeObj.value).toBe(buff);
                expect(writeObj.written).toBe(10);
            })
        );
    });

    it("should reject when there is a problem", cb => {
        const buff = Buffer.alloc(50);
        require('fs').cbArgs = [{code: 'ENOENT'}];
        write(9, buff, 0, 0, 0).fork(
            assertFork(cb, err => {
                expect(err.code).toBe('ENOENT');
            }),
            jestAssertUntypedNeverCalled(cb)
        );
    });
});
