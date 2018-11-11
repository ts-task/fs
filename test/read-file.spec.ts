import {readFile} from "../src/fs"
import {join} from 'path';
import { jestAssertUntypedNeverCalled, assertFork } from "./helpers";

const cwd = process.cwd();

describe("readFile", () => {
    it("should read the contents of this file", cb => {
        readFile(join(cwd, 'test/read-file.spec.ts'))
            .fork(
                jestAssertUntypedNeverCalled(cb),
                assertFork(cb, text => {
                    text; // ExpectType Buffer
                    expect(
                        text.toString().includes('should read the contents of this file')
                    ).toBe(true);
                })
            );
    });

    it('should fail if the file is not found', cb => {
        readFile('unreachablefile')
            .fork(
                assertFork(cb, err => {
                    err; // ExpectType NodeJS.ErrnoException
                    expect(err.code).toBe('ENOENT');
                }),
                jestAssertUntypedNeverCalled(cb)
            );
    })

    it("should have infer as a string if encoding is passed", cb => {
        readFile(join(cwd, 'test/read-file.spec.ts'), {encoding: 'UTF-8'})
            .fork(
                jestAssertUntypedNeverCalled(cb),
                assertFork(cb, text => {
                    text; // ExpectType string
                    expect(
                        text.includes('should have infer as a string if encoding is passed')
                    ).toBe(true);
                })
            );
    });
})
