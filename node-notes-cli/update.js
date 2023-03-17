import * as fs from 'node:fs/promises';
import read from './read-file.js';

export default async function updateNote(id, notes) {
  const dataCopyObject = await read();
  if (dataCopyObject.notes[id]) {
    dataCopyObject.notes[id] = notes.join(' ');
    await fs.writeFile('data.json', JSON.stringify(dataCopyObject, null, 2));
  } else {
    console.error(`Note ${id} doesn't exist!`);
    process.exit(1);
  }
}
