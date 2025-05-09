import {PrismaGenericBetterSQLite3} from 'prisma-generic-better-sqlite3';
import {connectToDatabase, initDatabase} from '../better-sqlite-3/sqlite3.js';
import {PrismaClient} from '../generated/prisma/index.js';
import {prismaDatabaseFilePath} from '../repo-paths.js';

export function createPrismaClient() {
    initDatabase(prismaDatabaseFilePath);

    const adapter = new PrismaGenericBetterSQLite3({
        database: connectToDatabase(prismaDatabaseFilePath),
    });
    const prismaClient = new PrismaClient({adapter});

    return prismaClient;
}
