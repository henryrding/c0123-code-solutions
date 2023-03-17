import * as fs from 'node:fs/promises';
import readNotes from './read.js';

export default async function deleteNote(ids) {
  try {
    const dataCopyObject = await readNotes(0);
    ids.forEach((id) => {
      if (dataCopyObject.notes[id]) {
        delete dataCopyObject.notes[id];
      } else {
        console.error(`Note ${id} doesn't exist!`);
        process.exit(1);
      }
    });
    await fs.writeFile('data.json', JSON.stringify(dataCopyObject, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
