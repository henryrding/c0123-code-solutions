import * as fs from 'node:fs/promises';
import handleError from './handle-error.js';

export default async function write(data) {
  try {
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    return handleError(500, 'An unexpected error occured.');
  }
}
