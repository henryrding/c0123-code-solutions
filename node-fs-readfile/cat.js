import * as fs from 'node:fs/promises';

const [, , ...filePaths] = process.argv;
const promiseArray = filePaths.map((filePath) => fs.readFile(filePath, 'utf8'));
Promise.all(promiseArray)
  .then((result) => console.log(result.join('\n')))
  .catch((error) => console.error(error.message));
