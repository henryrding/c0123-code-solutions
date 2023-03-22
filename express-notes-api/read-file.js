import * as fs from 'node:fs/promises';

export default async function read() {
  const data = await fs.readFile('data.json', 'utf8');
  return JSON.parse(data);
}
