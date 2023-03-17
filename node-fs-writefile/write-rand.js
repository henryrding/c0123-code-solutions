import * as fs from 'node:fs';

fs.writeFile('random.txt', `${Math.random()}\n`, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
});
