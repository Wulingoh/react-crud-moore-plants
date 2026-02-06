import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { transformWithEsbuild } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const reactAppEnv = {};
  // Always define REACT_APP_ vars used in the app so process.env is never referenced at runtime
  const reactAppKeys = ['REACT_APP_GOOGLE_CLIENT_ID'];
  reactAppKeys.forEach((key) => {
    reactAppEnv[`process.env.${key}`] = JSON.stringify(env[key] ?? '');
  });
  Object.keys(env).forEach((key) => {
    if (key.startsWith('REACT_APP_') && !reactAppEnv[`process.env.${key}`]) {
      reactAppEnv[`process.env.${key}`] = JSON.stringify(env[key]);
    }
  });

  return {
    plugins: [
      react({ include: /\.(jsx|tsx)$/ }),
      svgr(),
      {
        name: 'jsx-in-js',
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) return null;
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
          });
        },
      },
    ],
    optimizeDeps: {
      esbuildOptions: {
        loader: { '.js': 'jsx' },
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
        },
      },
    },
    define: {
      ...reactAppEnv,
    },
    build: {
      outDir: 'build',
    },
  };
});
