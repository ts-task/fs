import { Task } from '@ts-task/task';
import * as fs from 'fs';
import { liftErrbackOverride } from './lifterrback';
export * from './read';
export * from './write';

/**
 * @ignore
 */
type Access =
    /**
     * Asynchronously tests a user's permissions for the file specified by path.
     * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * @see https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback
     */
    (path: fs.PathLike, mode?: number) => Task<void, NodeJS.ErrnoException>
;

export const access = liftErrbackOverride<Access>(fs.access);

/**
 * @ignore
 */
type AppendFile =
    /**
     * Asynchronously append data to a file, creating the file if it does not exist.
     * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
     * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
     * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
     * If `encoding` is not supplied, the default of `'utf8'` is used.
     * If `mode` is not supplied, the default of `0o666` is used.
     * If `mode` is a string, it is parsed as an octal integer.
     * If `flag` is not supplied, the default of `'a'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback
     */
    (file: fs.PathLike | number, data: any, options?: fs.WriteFileOptions) => Task<void, NodeJS.ErrnoException>
;

export const appendFile = liftErrbackOverride<AppendFile>(fs.appendFile);

/**
 * @ignore
 */
type Chmod =
    /**
     * Asynchronous chmod(2) - Change permissions of a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
     * @see https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback
     */
    (path: fs.PathLike, mode: string | number) => Task<void, NodeJS.ErrnoException>
;


export const chmod = liftErrbackOverride<Chmod>(fs.chmod);

/**
 * @ignore
 */
type Chown =
    /**
     * Asynchronous chown(2) - Change ownership of a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/api/fs.html#fs_fs_chown_path_uid_gid_callback
     */
    (path: fs.PathLike, uid: number, gid: number) => Task<void, NodeJS.ErrnoException>
;

export const chown = liftErrbackOverride<Chown>(fs.chown);

/**
 * @ignore
 */
type Close =
    /**
     * Asynchronous close(2) - close a file descriptor.
     * @param fd A file descriptor.
     * @see https://nodejs.org/api/fs.html#fs_fs_close_fd_callback
     */
    (fd: number) => Task<void, NodeJS.ErrnoException>
;

export const close = liftErrbackOverride<Close>(fs.close);

/**
 * @ignore
 */
type CopyFile =
    /**
     * Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
     * No arguments other than a possible exception are given to the callback function.
     * Node.js makes no guarantees about the atomicity of the copy operation.
     * If an error occurs after the destination file has been opened for writing, Node.js will attempt
     * to remove the destination.
     * @param src A path to the source file.
     * @param dest A path to the destination file.
     * @param flags An integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.
     * @see https://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_flags_callback
     */
    (src: fs.PathLike, dest: fs.PathLike, flags?: number) => Task<void, NodeJS.ErrnoException>
;

export const copyFile = liftErrbackOverride<CopyFile>(fs.copyFile);

/**
 * @ignore
 */
type Fchmod =
    /**
     * Asynchronous fchmod(2) - Change permissions of a file.
     * @param fd A file descriptor.
     * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
     * @see https://nodejs.org/api/fs.html#fs_fs_fchmod_fd_mode_callback
     */
    (fd: number, mode: string | number) => Task<void, NodeJS.ErrnoException>
;

export const fchmod = liftErrbackOverride<Fchmod>(fs.fchmod);

/**
 * @ignore
 */
type Fchown =
    /**
     * Asynchronous fchown(2) - Change ownership of a file.
     * @param fd A file descriptor.
     * @see https://nodejs.org/api/fs.html#fs_fs_fchown_fd_uid_gid_callback
     */
    (fd: number, uid: number, gid: number) => Task<void, NodeJS.ErrnoException>
;

export const fchown = liftErrbackOverride<Fchown>(fs.fchown);

/**
 * @ignore
 */
type Fdatasync =
    /**
     * Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
     * @param fd A file descriptor.
     * @see https://nodejs.org/api/fs.html#fs_fs_fdatasync_fd_callback
     */
    (fd: number) => Task<void, NodeJS.ErrnoException>
;

export const fdatasync = liftErrbackOverride<Fdatasync>(fs.fdatasync);

/**
 * @ignore
 */
type Fstat =
    /**
     * Asynchronous fstat(2) - Get file status.
     * @param fd A file descriptor.
     * @see https://nodejs.org/api/fs.html#fs_fs_fstat_fd_options_callback
     */
    (fd: number) => Task<fs.Stats, NodeJS.ErrnoException>
;

export const fstat = liftErrbackOverride<Fstat>(fs.fstat);

/**
 * @ignore
 */
type Fsync =
    /**
     * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
     * @param fd A file descriptor.
     * @see https://nodejs.org/api/fs.html#fs_fs_fsync_fd_callback
     */
    (fd: number) => Task<void, NodeJS.ErrnoException>
;

export const fsync = liftErrbackOverride<Fsync>(fs.fsync);

/**
 * @ignore
 */
type Ftruncate =
    /**
     * Asynchronous ftruncate(2) - Truncate a file to a specified length.
     * @param fd A file descriptor.
     * @param len If not specified, defaults to `0`.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_ftruncate_fd_len_callback
     */
    (fd: number, len?: number) => Task<void, NodeJS.ErrnoException>
;

export const ftruncate = liftErrbackOverride<Ftruncate>(fs.ftruncate);

/**
 * @ignore
 */
type Futimes =
    /**
     * Asynchronously change file timestamps of the file referenced by the supplied file descriptor.
     * @param fd A file descriptor.
     * @param atime The last access time. If a string is provided, it will be coerced to number.
     * @param mtime The last modified time. If a string is provided, it will be coerced to number.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback
     */
    (fd: number, atime: string | number | Date, mtime: string | number | Date) => Task<void, NodeJS.ErrnoException>
;

export const futimes = liftErrbackOverride<Futimes>(fs.futimes);

/**
 * @ignore
 */
type Lchmod =
    /**
     * Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_lchmod_path_mode_callback
     */
    (path: fs.PathLike, mode: string | number) => Task<void, NodeJS.ErrnoException>
;

export const lchmod = liftErrbackOverride<Lchmod>(fs.lchmod);

/**
 * @ignore
 */
type Lchown =
    /**
     * Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_lchown_path_uid_gid_callback
     */
    (path: fs.PathLike, uid: number, gid: number) => Task<void, NodeJS.ErrnoException>
;

export const lchown = liftErrbackOverride<Lchown>(fs.lchown);

/**
 * @ignore
 */
type Link =
    /**
     * Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.
     * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_link_existingpath_newpath_callback
     */
    (existingPath: fs.PathLike, newPath: fs.PathLike) => Task<void, NodeJS.ErrnoException>
;

export const link = liftErrbackOverride<Link>(fs.link);


/**
 * @ignore
 */
type Lstat =
    /**
     * Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_lstat_path_options_callback
     */
    (path: fs.PathLike) => Task<fs.Stats, NodeJS.ErrnoException>
;

export const lstat = liftErrbackOverride<Lstat>(fs.lstat);

/**
 * @ignore
 */
type Mkdir =
    /**
     * Asynchronous mkdir(2) - create a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
     * should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_mkdir_path_options_callback
     */
    (path: fs.PathLike, options?: number | string | fs.MakeDirectoryOptions | null) => Task<void, NodeJS.ErrnoException>
;

export const mkdir = liftErrbackOverride<Mkdir>(fs.mkdir);

/**
 * @ignore
 */
type Mkdtemp = {
    /**
     * Asynchronously creates a unique temporary directory.
     * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_mkdtemp_prefix_options_callback
     */
    (prefix: string, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Task<string, NodeJS.ErrnoException>;

    /**
     * Asynchronously creates a unique temporary directory.
     * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_mkdtemp_prefix_options_callback
     */
    (prefix: string, options: 'buffer' | { encoding: 'buffer' }): Task<Buffer, NodeJS.ErrnoException>;

    /**
     * Asynchronously creates a unique temporary directory.
     * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_mkdtemp_prefix_options_callback
     */
    (prefix: string, options: { encoding?: string | null } | string | undefined | null): Task<string | Buffer, NodeJS.ErrnoException>;
};

export const mkdtemp = liftErrbackOverride<Mkdtemp>(fs.mkdtemp);

/**
 * @ignore
 */
type Open =
    /**
     * Asynchronous open(2) - open and possibly create a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
     * @see https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_fs_open_path_flags_mode_callback
     */

    (path: fs.PathLike, flags: string | number, mode?: string | number | null) => Task<number, NodeJS.ErrnoException>
;

export const open = liftErrbackOverride<Open>(fs.open);

/**
 * @ignore
 */
type Readdir = {
    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
     */
    (
        path: fs.PathLike,
        options?: { encoding: BufferEncoding | null; withFileTypes?: false } | BufferEncoding | null
    ): Task<string[], NodeJS.ErrnoException>;

    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
     */
    (
        path: fs.PathLike,
        options: { encoding: 'buffer'; withFileTypes?: false } | 'buffer'
    ): Task<Buffer[], NodeJS.ErrnoException>;

    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
     */
    (
        path: fs.PathLike,
        options: { encoding?: string | null; withFileTypes?: false } | string | undefined | null
    ): Task<string[] | Buffer[], NodeJS.ErrnoException>;

    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options If called with `withFileTypes: true` the result data will be an array of Dirent.
     * @see https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
     */
    (path: fs.PathLike, options: { withFileTypes: true }): Task<fs.Dirent[], NodeJS.ErrnoException>;

};

export const readdir = liftErrbackOverride<Readdir>(fs.readdir);

/**
 * @ignore
 */
type ReadFile = {
    /**
     * Asynchronously reads the entire contents of a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
     * @param options An object that may contain an optional flag.
     * If a flag is not provided, it defaults to `'r'`.
     * @see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
     */
    (path: fs.PathLike | number): Task<Buffer, NodeJS.ErrnoException>;
    /**
     * Asynchronously reads the entire contents of a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
     * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
     * If a flag is not provided, it defaults to `'r'`.
     * @see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
     */
    (path: fs.PathLike | number, options: { encoding: string; flag?: string; } | string): Task<string, NodeJS.ErrnoException>;
    /**
     * Asynchronously reads the entire contents of a file.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
     * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
     * If a flag is not provided, it defaults to `'r'`.
     * @see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
     */
    (path: fs.PathLike | number, options: { encoding?: string | null; flag?: string; } | string | undefined | null): Task<Buffer | string, NodeJS.ErrnoException>;
};
export const readFile = liftErrbackOverride<ReadFile>(fs.readFile);

/**
 * @ignore
 */
type Readlink = {
    /**
     * Asynchronous readlink(2) - read value of a symbolic link.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readlink_path_options_callback
     */
    (path: fs.PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Task<string, NodeJS.ErrnoException>;

    /**
     * Asynchronous readlink(2) - read value of a symbolic link.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readlink_path_options_callback
     */
    (path: fs.PathLike, options: { encoding: 'buffer' } | 'buffer'): Task<Buffer, NodeJS.ErrnoException>;

    /**
     * Asynchronous readlink(2) - read value of a symbolic link.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_readlink_path_options_callback
     */
    (path: fs.PathLike, options: { encoding?: string | null } | string | undefined | null): Task<string | Buffer, NodeJS.ErrnoException>;

};
export const readlink = liftErrbackOverride<Readlink>(fs.readlink);

/**
 * @ignore
 */
type Realpath = {
    /**
     * Asynchronous realpath(3) - return the canonicalized absolute pathname.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_realpath_path_options_callback
     */
    (path: fs.PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Task<string, NodeJS.ErrnoException>;

    /**
     * Asynchronous realpath(3) - return the canonicalized absolute pathname.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_realpath_path_options_callback
     */
    (path: fs.PathLike, options: { encoding: 'buffer' } | 'buffer'): Task<Buffer, NodeJS.ErrnoException>;

    /**
     * Asynchronous realpath(3) - return the canonicalized absolute pathname.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_realpath_path_options_callback
     */
    (path: fs.PathLike, options: { encoding?: string | null } | string | undefined | null): Task<string | Buffer, NodeJS.ErrnoException>;
};

export const realpath = liftErrbackOverride<Realpath>(fs.realpath);

/**
 * @ignore
 */
type Rename =
    /**
     * Asynchronous rename(2) - Change the name or location of a file or directory.
     * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * @see https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback
     */
    (oldPath: fs.PathLike, newPath: fs.PathLike) => Task<void, NodeJS.ErrnoException>
;

export const rename = liftErrbackOverride<Rename>(fs.rename);


/**
 * @ignore
 */
type Rmdir =
    /**
     * Asynchronous rmdir(2) - delete a directory.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/api/fs.html#fs_fs_rmdir_path_callback
     */
    (path: fs.PathLike) => Task<void, NodeJS.ErrnoException>
;

export const rmdir = liftErrbackOverride<Rmdir>(fs.rmdir);

/**
 * @ignore
 */
type Stat =
    /**
     * Asynchronous stat(2) - Get file status.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback
     */
    (path: fs.PathLike) => Task<fs.Stats, NodeJS.ErrnoException>
;

export const stat = liftErrbackOverride<Stat>(fs.stat);


/**
 * @ignore
 */
type Symlink =
    /**
     * Asynchronous symlink(2) - Create a new symbolic link to an existing file.
     * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
     * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
     * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
     * When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
     * @see https://nodejs.org/api/fs.html#fs_fs_symlink_target_path_type_callback
     */
    (target: fs.PathLike, path: fs.PathLike, type?: fs.symlink.Type | null) => Task<void, NodeJS.ErrnoException>
;

export const symlink = liftErrbackOverride<Symlink>(fs.symlink);

/**
 * @ignore
 */
type Truncate =
    /**
     * Asynchronous truncate(2) - Truncate a file to a specified length.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param len If not specified, defaults to `0`.
     * @see https://nodejs.org/api/fs.html#fs_fs_truncate_path_len_callback
     */
    (path: fs.PathLike, len?: number | null) => Task<void, NodeJS.ErrnoException>
;

export const truncate = liftErrbackOverride<Truncate>(fs.truncate);

/**
 * @ignore
 */
type Unlink =
    /**
     * Asynchronous unlink(2) - delete a name and possibly the file it refers to.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @see https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback
     */
    (path: fs.PathLike) => Task<void, NodeJS.ErrnoException>
;

export const unlink = liftErrbackOverride<Unlink>(fs.unlink);

/**
 * @ignore
 */
type Utimes =
    /**
     * Asynchronously change file timestamps of the file referenced by the supplied path.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param atime The last access time. If a string is provided, it will be coerced to number.
     * @param mtime The last modified time. If a string is provided, it will be coerced to number.
     * @see https://nodejs.org/api/fs.html#fs_fs_utimes_path_atime_mtime_callback
     */
    (path: fs.PathLike, atime: string | number | Date, mtime: string | number | Date) => Task<void, NodeJS.ErrnoException>
;

export const utimes = liftErrbackOverride<Utimes>(fs.utimes);


/**
 * @ignore
 */
type WriteFile =
    /**
     * Asynchronously writes data to a file, replacing the file if it already exists.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * URL support is _experimental_.
     * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
     * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
     * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
     * If `encoding` is not supplied, the default of `'utf8'` is used.
     * If `mode` is not supplied, the default of `0o666` is used.
     * If `mode` is a string, it is parsed as an octal integer.
     * If `flag` is not supplied, the default of `'w'` is used.
     * @see https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
     */
    (path: fs.PathLike | number, data: any, options?: fs.WriteFileOptions) => Task<void, NodeJS.ErrnoException>;

export const writeFile = liftErrbackOverride<WriteFile>(fs.writeFile);

