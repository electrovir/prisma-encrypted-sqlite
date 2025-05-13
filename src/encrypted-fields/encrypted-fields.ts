import {PrismaBetterSQLite3} from '@prisma/adapter-better-sqlite3';
import internals from '@prisma/internals';
import {fieldEncryptionExtension} from 'prisma-field-encryption';
import {type DMMFDocument} from 'prisma-field-encryption/dist/types.js';
import {PrismaClient} from '../generated/prisma/client.js';
import {encryptedFieldsDatabaseFilePath} from '../repo-paths.js';

async function extractDmmf(prismaClient: PrismaClient): Promise<DMMFDocument> {
    return await internals.getDMMF({
        datamodel:
            // @ts-expect-error: _engineConfig does not exist in the types
            prismaClient._engineConfig.inlineSchema,
    });
}

export async function createPrismaClient() {
    const databaseUrl = 'file:' + encryptedFieldsDatabaseFilePath;

    const basePrismaClient = new PrismaClient({
        adapter: new PrismaBetterSQLite3({
            url: databaseUrl,
        }),
        errorFormat: 'pretty',
    });

    const prismaClient = basePrismaClient.$extends(
        fieldEncryptionExtension({
            encryptionKey: generateEncryptionKey(),
            dmmf: await extractDmmf(basePrismaClient),
        }),
    );

    return prismaClient as PrismaClient;
}

function generateEncryptionKey() {
    const key = globalThis.crypto.getRandomValues(new Uint8Array(32));

    return [
        'k1',
        'aesgcm256',
        Buffer.from(key, 0, key.length).toString('base64').replace(/\+/g, '-').replace(/\//g, '_'),
    ].join('.');
}
