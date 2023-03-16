import * as fs from 'node:fs/promises';

const [, , ...filePaths] = process.argv;
filePaths.forEach((filePath) => {
  fs.readFile(filePath, 'utf8')
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));
});
