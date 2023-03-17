import * as fs from 'node:fs/promises';
import readNotes from './read.js';

export default async function addNote(note) {
  try {
    const dataCopyObject = await readNotes(0);
    const noteId = dataCopyObject.nextId.toString();
    dataCopyObject.notes[noteId] = note.join(' ');
    dataCopyObject.nextId++;
    await fs.writeFile('data.json', JSON.stringify(dataCopyObject, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
