import * as fs from 'node:fs/promises';

export default async function read() {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    const dataObject = JSON.parse(data);
    return dataObject;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
