import readNotes from './read.js';
import addNote from './add.js';
import deleteNote from './delete.js';
import updateNote from './update.js';

const [,, feature, ...args] = process.argv;
switch (feature) {
  case 'read': readNotes(1); break;
  case 'add': addNote(args); break;
  case 'delete': deleteNote(args); break;
  case 'update': updateNote(args[0], args.slice(1)); break;
  default: console.error(`${feature} is not a feature!`); process.exit(1);
}
