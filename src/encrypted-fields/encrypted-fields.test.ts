import {assert} from '@augment-vir/assert';
import {prisma} from '@augment-vir/node';
import {describe, it} from '@augment-vir/test';
import {rm} from 'node:fs/promises';
import {testUser} from '../better-sqlite-3/queries.js';
import {encryptedFieldsDatabaseFilePath, schemaFilePath} from '../repo-paths.js';
import {createPrismaClient} from './encrypted-fields.js';

describe('prisma with encrypted fields', () => {
    it('can read an encrypted database', async () => {
        await rm(encryptedFieldsDatabaseFilePath, {force: true});
        const databaseUrl = 'file:' + encryptedFieldsDatabaseFilePath;
        await prisma.database.resetDev(
            schemaFilePath,
            {withMigrations: false},
            {
                ...process.env,
                DATABASE_URL: databaseUrl,
            },
        );

        const prismaClient = await createPrismaClient();

        assert.deepEquals(
            await prismaClient.user.create({
                data: {
                    ...testUser,
                },
                select: {
                    email: true,
                    id: true,
                    username: true,
                },
            }),
            testUser,
        );
    });
});
