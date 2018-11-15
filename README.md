# Tasks File System

This library is a wrapper of async functions of Node.js [fs module](https://nodejs.org/docs/latest-v10.x/api/fs.html) using [@ts-task](https://github.com/ts-task/task) instead of Promises.

### Use


** Install it **
```bash
npm i @ts-task/fs
```

** Use it **

```typescript
import * as fs from '@ts-task/fs';


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
```

You can see the API reference here

You can see more example usages in the [types test file](./test/types/index.ts).