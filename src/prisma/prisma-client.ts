import {connectToDatabase, initDatabase} from '../better-sqlite-3/sqlite3.js';
import {PrismaClient} from '../generated/prisma/index.js';
import {prismaDatabaseFilePath} from '../repo-paths.js';
import {PrismaBetterSQLite3AdapterFactory} from './better-sqlite3-adapter.js';

export function createPrismaClient() {
    initDatabase(prismaDatabaseFilePath);

    const adapter = new PrismaBetterSQLite3AdapterFactory({
        url: `file:${prismaDatabaseFilePath}`,
        database: connectToDatabase(prismaDatabaseFilePath),
    });
    const prismaClient = new PrismaClient({adapter});

    return prismaClient;
}
