import sqlite, {type Database} from 'better-sqlite3-multiple-ciphers';
import {existsSync} from 'node:fs';
import {databaseEncryptionSecret, initQueries} from './queries.js';

export function connectToDatabase(filePath: string): Database {
    initDatabase(filePath);

    const database = sqlite(filePath, {});
    database.pragma(`key='${databaseEncryptionSecret}'`);

    return database;
}

export function initDatabase(filePath: string) {
    if (existsSync(filePath)) {
        return;
    }
    const database = sqlite(filePath, {});
    database.pragma('journal_mode = WAL');
    database.pragma(`rekey='${databaseEncryptionSecret}'`);
    database.transaction(() => {
        initQueries.forEach((query) => {
            try {
                database.prepare(query).run();
            } catch (error) {
                console.error(`Failed on ${query}`);
                throw error;
            }
        });
    })();

    database.close();
}
