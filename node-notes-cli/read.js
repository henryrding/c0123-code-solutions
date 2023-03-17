import * as fs from 'node:fs/promises';

export default async function readNotes(boolean) {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    const dataObject = JSON.parse(data);
    const { notes } = dataObject;
    if (boolean) {
      for (const noteId in notes) {
        console.log(`${noteId}: ${notes[noteId]}`);
      }
    }
    return dataObject;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// using promise instead of async\

// export default function readNotes(boolean) {
//   fs.readFile('data.json', 'utf8')
//     .then((data) => {
//       const dataObject = JSON.parse(data);
//       const { notes } = dataObject;
//       if (boolean) {
//         for (const noteId in notes) {
//           console.log(`${noteId}: ${notes[noteId]}`);
//         }
//       }
//       return dataObject;
//     })
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     });
// }
