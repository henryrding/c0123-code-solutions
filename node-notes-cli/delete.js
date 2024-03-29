import read from './read-file.js';
import write from './write-file.js';

export default async function deleteNote(ids) {
  const dataCopyObject = await read();
  ids.forEach((id) => {
    if (dataCopyObject.notes[id]) {
      delete dataCopyObject.notes[id];
    } else {
      throw new Error(`Note ${id} doesn't exist!`);
    }
  });
  await write(dataCopyObject);
}
