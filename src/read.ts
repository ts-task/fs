import { Task } from '@ts-task/task';
import * as fs from 'fs';

/**
 * Asynchronously reads data from the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 * @see https://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback
 */
export function read<TBuffer extends fs.BinaryData> (
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null
) {
    return new Task<{bytesRead: number, buffer: TBuffer}, NodeJS.ErrnoException>((resolve, reject) => {
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve({bytesRead, buffer});
            }
        });
    });
}