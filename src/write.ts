import { Task } from '@ts-task/task';
import * as fs from 'fs';

/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @see https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
 */
export function write<TBuffer extends fs.BinaryData> (
    fd: number,
    buffer: TBuffer,
    offset?: number | null,
    length?: number | null,
    position?: number | null
): Task<{written: number, value: TBuffer}, NodeJS.ErrnoException>;


/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 * @see https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
 */
export function write (
    fd: number,
    str: any,
    position?: number | null,
    encoding?: string | null
): Task<{written: number, value: string}, NodeJS.ErrnoException>;

export function write (...args: any[]) {
    return new Task<any, any> ((resolve, reject) => {
        const newArgs = [
            ...args,
            (err: NodeJS.ErrnoException, written: number, value: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({written, value});
                }
            }
        ];
        fs.write.apply(fs, newArgs);
    });
}