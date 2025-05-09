const {baseConfig} = require('@virmator/spellcheck/configs/cspell.config.base.cjs');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        'src/generated/',
        'src/prisma/better-sqlite3-adapter.ts',
    ],
    words: [
        ...baseConfig.words,
    ],
};
