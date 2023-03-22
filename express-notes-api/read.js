import read from './read-file.js';
import handleError from './handle-error.js';

export default async function readNotes(id) {
  const { notes } = await read();
  const notesArray = Object.values(notes);
  if (!id) {
    return [200, notesArray];
  } else if (isNaN(Math.floor(id)) || Math.floor(id) !== Number(id) || id <= 0) {
    return handleError(400, 'id must be a positive integer');
  } else if (notesArray.includes(notes[id])) {
    return [200, notes[id]];
  } else if (!notesArray.includes(notes[id])) {
    return handleError(404, `cannot find note with id ${id}`);
  }
}
