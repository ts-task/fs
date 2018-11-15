/// <reference types="jest" />
/// <reference types="node" />

import { read } from "../src/fs";
import { jestAssertUntypedNeverCalled, assertFork } from "./helpers";

jest.mock('fs', () => {
    const mock = {
        read: (fd: number, buffer: any, o: number, l: number, p: number, cb: any) => {
            cb.apply(null, mock.cbArgs);
        },
        cbArgs: null
    };
    return mock;
});

describe("read", () => {
    it("should return an object with the read information when successful", cb => {
        const buff = Buffer.alloc(50);
        require('fs').cbArgs = [null, 10, buff];
        read(9, buff, 0, 0, 0).fork(
            jestAssertUntypedNeverCalled(cb),
            assertFork(cb, readObj => {
                expect(readObj.buffer).toBe(buff);
                expect(readObj.bytesRead).toBe(10);
            })
        );
    });

    it("should reject when there is a problem", cb => {
        const buff = Buffer.alloc(50);
        require('fs').cbArgs = [{code: 'ENOENT'}];
        read(9, buff, 0, 0, 0).fork(
            assertFork(cb, err => {
                expect(err.code).toBe('ENOENT');
            }),
            jestAssertUntypedNeverCalled(cb)
        );
    });
});
