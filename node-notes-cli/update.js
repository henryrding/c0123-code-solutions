import read from './read-file.js';
import write from './write-file.js';

export default async function updateNote(id, notes) {
  const dataCopyObject = await read();
  if (dataCopyObject.notes[id]) {
    dataCopyObject.notes[id] = notes.join(' ');
    await write('data.json', JSON.stringify(dataCopyObject, null, 2));
  } else {
    throw new Error(`Note ${id} doesn't exist!`);
  }
}
