import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {sqlite3DatabaseFilePath} from '../repo-paths.js';
import {testQuery, testUser} from './queries.js';
import {connectToDatabase} from './sqlite3.js';

describe('better-sqlite3-multiple-ciphers', () => {
    it('can read an encrypted database', () => {
        const database = connectToDatabase(sqlite3DatabaseFilePath);

        assert.deepEquals(database.prepare(testQuery).get(), testUser);
    });
});
