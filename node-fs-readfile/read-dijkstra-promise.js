import * as fs from 'node:fs/promises';

fs.readFile('dijkstra.txt', 'utf8')
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
