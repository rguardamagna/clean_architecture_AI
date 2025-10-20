import { defineConfig} from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    test: {
        include: ['test/**/*.spec.ts', 'src/**/*.spec.ts'],
        environment: 'node',
        globals: true,
    },
    resolve: {
        alias: {
            '@domains': resolve(__dirname, './src/domains/'),
            '@application': resolve(__dirname, './src/application/'),
            '@infrastructure': resolve(__dirname, './src/infrastructure/'),
            '@shared': resolve(__dirname, './src/shared/'),
        },
    },
});