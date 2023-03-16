import * as fs from 'node:fs';

const [, , note] = process.argv;

fs.writeFile('note.txt', `${note}\n`, (err, data) => {
  if (err) throw err;
});
