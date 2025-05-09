export const databaseEncryptionSecret = 'secret key goes here';

export const initQueries = [
    `
        CREATE TABLE user (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            email TEXT NOT NULL
        );
    `,
    `INSERT INTO user (email, username) VALUES ('test@example.com', 'test');`,
];
export const testQuery = `SELECT * FROM user WHERE id = 1;`;
export const testUser = {
    id: 1,
    username: 'test',
    email: 'test@example.com',
} as const;
