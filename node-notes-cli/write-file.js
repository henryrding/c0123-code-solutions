import * as fs from 'node:fs/promises';

export default async function write(data) {
  try {
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
