import read from './read-file.js';
import write from './write-file.js';
import handleError from './handle-error.js';

export default async function updateNote(id, note) {
  const dataCopyObject = await read();
  if (isNaN(Math.floor(id)) || Math.floor(id) !== Number(id) || id <= 0) {
    return handleError(400, 'id must be a positive integer');
  } else if (!Object.hasOwn(note, 'content')) {
    return handleError(400, 'content is a required field');
  } else if (!Object.hasOwn(dataCopyObject.notes, id)) {
    return handleError(404, `cannot find note with id ${id}`);
  } else if (Object.hasOwn(dataCopyObject.notes, id)) {
    dataCopyObject.notes[id] = note;
    const exists = await write(dataCopyObject);
    if (!exists) {
      return [201, ''];
    } else {
      return exists;
    }
  }
}
