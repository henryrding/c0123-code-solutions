import * as fs from 'node:fs/promises';

const [, , original, copy] = process.argv;

async function readOriginal(originalPath) {
  try {
    const data = await fs.readFile(originalPath, 'utf-8');
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

async function writeCopy(originalData) {
  try {
    await fs.writeFile(copy, originalData);
  } catch (err) {
    console.error(err.message);
  }
}

Promise.all([readOriginal(original)])
  .then((data) => {
    const copyData = data.join('\n');
    writeCopy(copyData);
  })
  .catch((err) => console.error(err.message));
