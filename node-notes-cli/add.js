import read from './read-file.js';
import write from './write-file.js';

export default async function addNote(notes) {
  const dataCopyObject = await read();
  const noteId = dataCopyObject.nextId.toString();
  dataCopyObject.notes[noteId] = notes.join(' ');
  dataCopyObject.nextId++;
  await write(dataCopyObject);
}
