import readNotes from './read.js';
import addNote from './add.js';
import deleteNote from './delete.js';
import updateNote from './update.js';

const [,, feature, ...args] = process.argv;

try {
  switch (feature) {
    case 'read': await readNotes(); break;
    case 'add': await addNote(args); break;
    case 'delete': await deleteNote(args); break;
    case 'update': await updateNote(args[0], args.slice(1)); break;
    default: throw new Error(`${feature} is not a feature!`);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
