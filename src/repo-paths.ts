import {mkdir} from 'node:fs/promises';
import {join, resolve} from 'node:path';

export const repoDirPath = resolve(import.meta.dirname, '..');
export const notCommittedDirPath = join(repoDirPath, '.not-committed');
export const sqlite3DatabaseFilePath = join(notCommittedDirPath, 'sqlite3-dev.db');
export const prismaDatabaseFilePath = join(notCommittedDirPath, 'prisma-dev.db');
export const genericDatabaseFilePath = join(notCommittedDirPath, 'generic-dev.db');
export const encryptedFieldsDatabaseFilePath = join(notCommittedDirPath, 'encrypted-fields.db');
export const schemaFilePath = join(repoDirPath, 'prisma', 'schema.prisma');

await mkdir(notCommittedDirPath, {recursive: true});
