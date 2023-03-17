import * as fs from 'node:fs/promises';
import readNotes from './read.js';

export default async function updateNote(id, notes) {
  try {
    const dataCopyObject = await readNotes(0);
    if (dataCopyObject.notes[id]) {
      dataCopyObject.notes[id] = notes.join(' ');
      await fs.writeFile('data.json', JSON.stringify(dataCopyObject, null, 2));
    } else {
      console.error(`Note ${id} doesn't exist!`);
      process.exit(1);
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
