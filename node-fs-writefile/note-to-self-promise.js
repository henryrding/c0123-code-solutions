import * as fs from 'node:fs/promises';

const [, , note] = process.argv;

// async function writeRandPromise() {
//   try {
//     await fs.writeFile('note.txt', `${note}\n`);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// writeRandPromise();

fs.writeFile('note.txt', `${note}\n`)
  .catch((err) => console.error(err.message));
