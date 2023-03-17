import * as fs from 'node:fs/promises';

export default async function write(data) {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2));
}
