import * as fs from 'node:fs';

// using spread operator and forEach to handle more than one filepath argument.
const [, , ...filePaths] = process.argv;
filePaths.forEach((filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
