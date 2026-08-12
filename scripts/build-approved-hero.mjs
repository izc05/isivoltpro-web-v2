import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(root, 'scripts', 'hero-approved');
const output = join(root, 'public', 'images', 'hero', 'hero-approved.avif');
const expectedBytes = 40711;
const expectedSha256 = 'c4c0842e7c0334b934a023147ee828362c951095356a61dacc1511c2537ac647';

const parts = [];
for (let index = 0; index < 7; index += 1) {
  const filename = `part-${String(index).padStart(2, '0')}.txt`;
  parts.push((await readFile(join(sourceDir, filename), 'utf8')).trim());
}

const binary = Buffer.from(parts.join(''), 'base64');
if (binary.length !== expectedBytes) {
  throw new Error(`Approved hero size mismatch: expected ${expectedBytes}, got ${binary.length}`);
}

const signature = binary.subarray(4, 12).toString('ascii');
if (signature !== 'ftypavif') {
  throw new Error(`Approved hero is not a valid AVIF container: ${signature}`);
}

const sha256 = createHash('sha256').update(binary).digest('hex');
if (sha256 !== expectedSha256) {
  throw new Error(`Approved hero checksum mismatch: ${sha256}`);
}

await mkdir(dirname(output), { recursive: true });
await writeFile(output, binary);
console.log(`Approved Hero ready: ${binary.length} bytes · ${sha256.slice(0, 12)}…`);
