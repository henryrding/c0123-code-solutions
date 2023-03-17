import * as fs from 'node:fs/promises';

const [, , original, copy] = process.argv;

async function readOriginal(originalPath) {
  try {
    const data = await fs.readFile(originalPath, 'utf-8');
    return data;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

async function writeCopy(originalData) {
  try {
    await fs.writeFile(copy, originalData);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

Promise.all([readOriginal(original)])
  .then((data) => {
    const copyData = data.join('\n');
    return writeCopy(copyData);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

//  instructor solution
//  try {
//   const data = await fs.readFile(original);
//   await fs.writeFile(copy + '_await', data);
// } catch (err) {
//   console.error(err);
//   process.exit(1);
// }
