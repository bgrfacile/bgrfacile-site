import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@root': fileURLToPath(new URL('./', import.meta.url)),
        }
    },
    server: {
        // port: 5000,
        // open: true,
        // host: true, // '0.0.0.0'
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext'
        }
    }
})
