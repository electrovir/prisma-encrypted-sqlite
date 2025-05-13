import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {testUser} from '../better-sqlite-3/queries.js';
import {createPrismaClient} from './generic.js';

describe('prisma with prisma-generic-better-sqlite3', () => {
    it('can read an encrypted database', async () => {
        const prismaClient = createPrismaClient();

        assert.deepEquals(
            await prismaClient.user.findFirst({
                where: {
                    id: 1,
                },
            }),
            testUser,
        );
    });
});
