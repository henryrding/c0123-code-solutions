import read from './read-file.js';

export default async function readNotes() {
  const { notes } = await read();
  for (const noteId in notes) {
    console.log(`${noteId}: ${notes[noteId]}`);
  }
}
