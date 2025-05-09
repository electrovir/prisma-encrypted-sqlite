import {mkdir} from 'node:fs/promises';
import {join, resolve} from 'node:path';

export const repoDirPath = resolve(import.meta.dirname, '..');
export const notCommittedDirPath = join(repoDirPath, '.not-committed');
export const sqlite3DatabaseFilePath = join(notCommittedDirPath, 'sqlite3-dev.db');

await mkdir(notCommittedDirPath, {recursive: true});
