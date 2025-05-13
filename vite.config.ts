import vue from '@vitejs/plugin-vue2';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	esbuild: {
		target: 'esnext',
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://rickandmortyapi.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
});
