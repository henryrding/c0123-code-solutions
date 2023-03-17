import * as fs from 'node:fs';

const [, , note] = process.argv;

fs.writeFile('note.txt', `${note}\n`, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
});
