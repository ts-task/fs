import { Task } from '@ts-task/task';
import * as fs from 'fs';


/**
* Asynchronously reads the entire contents of a file.
* @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
* If a file descriptor is provided, the underlying file will _not_ be closed automatically.
* @param options An object that may contain an optional flag.
* If a flag is not provided, it defaults to `'r'`.
*/
export function readFile(path: fs.PathLike | number, options: { encoding?: null; flag?: string; } | undefined | null): Task<Buffer, NodeJS.ErrnoException>;
/**
* Asynchronously reads the entire contents of a file.
* @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
* URL support is _experimental_.
* If a file descriptor is provided, the underlying file will _not_ be closed automatically.
* @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
* If a flag is not provided, it defaults to `'r'`.
*/
export function readFile(path: fs.PathLike | number, options: { encoding: string; flag?: string; } | string): Task<string, NodeJS.ErrnoException>;
/**
* Asynchronously reads the entire contents of a file.
* @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
* URL support is _experimental_.
* If a file descriptor is provided, the underlying file will _not_ be closed automatically.
* @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
* If a flag is not provided, it defaults to `'r'`.
*/
export function readFile(path: fs.PathLike | number, options: { encoding?: string | null; flag?: string; } | string | undefined | null): Task<Buffer | string, NodeJS.ErrnoException>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 */
export function readFile(path: fs.PathLike | number): Task<Buffer, NodeJS.ErrnoException>;

export function readFile(path: fs.PathLike | number, options?: any): Task<Buffer | string, NodeJS.ErrnoException> {
    return new Task((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}




