import * as fs from 'node:fs';

fs.writeFile('random.txt', `${Math.random()}\n`, (err, data) => {
  if (err) throw err;
});
