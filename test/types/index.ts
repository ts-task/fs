import * as fs from '@ts-task/fs';

fs.appendFile('README.md', 'waat').fork(
    err => {
        // $ExpectType ErrnoException
        err;
    },
    val => {
        // $ExpectType void
        val;
    }
);

fs.mkdir('newdir', null).fork(
    err => {
        // $ExpectType ErrnoException
        err;
    },
    val => {
        // $ExpectType void
        val;
    }
);

fs.readFile('./README.md')
    .fork(
        err => {
            err; // $ExpectType ErrnoException
            if (err.code === 'ENOENT') {
                console.error('Buu, the file does not exists');
            }
        },
        buffer => {
            buffer; // ExpectType Buffer
            console.log(buffer.toString());
        }
    )
;

fs.open('./README.md', 'r')
    .chain(fd => {
        // $ExpectType number
        fd;

        const buf = Buffer.alloc(25);
        return fs.read(fd, buf, 0, 24, 0)
            .chain(_ => fs.close(fd))
            .map(_ => buf)
        ;
    }).fork(
        err => {
            // $ExpectType ErrnoException | UnknownError
            err;
            console.log('buu', err);
        },
        buff => {
            // $ExpectType Buffer
            buff;
            console.log('wii', buff.toString());
        }
    );