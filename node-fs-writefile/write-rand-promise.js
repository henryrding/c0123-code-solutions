import * as fs from 'node:fs/promises';

async function writeRandPromise() {
  try {
    await fs.writeFile('random.txt', `${Math.random()}\n`);
  } catch (err) {
    console.error(err.message);
  }
}

writeRandPromise();
