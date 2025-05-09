import {defineConfig} from '@virmator/deps/configs/dep-cruiser.config.base';
import {type IConfiguration} from 'dependency-cruiser';

const baseConfig = defineConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': {
            from: [
                'src/generated/prisma/runtime/',
            ],
        },
        'no-deprecated-core': {
            from: [
                'src/generated/prisma/runtime/',
            ],
        },
    },
    omitRules: [
        // enter rule names here to omit
    ],
});

const depCruiserConfig: IConfiguration = {
    ...baseConfig,
};

module.exports = depCruiserConfig;
