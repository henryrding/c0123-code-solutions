import read from './read-file.js';
import write from './write-file.js';
import handleError from './handle-error.js';

export default async function addNote(note) {
  if (!Object.hasOwn(note, 'content')) {
    return handleError(400, 'content is a required field');
  } else if (Object.hasOwn(note, 'content')) {
    const dataCopyObject = await read();
    const noteId = dataCopyObject.nextId.toString();
    note.id = dataCopyObject.nextId;
    dataCopyObject.notes[noteId] = note;
    dataCopyObject.nextId++;
    const exists = await write(dataCopyObject);
    if (!exists) {
      return [201, note];
    } else {
      return exists;
    }
  }
}
