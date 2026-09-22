import { defineConfig } from 'vite';

// Attempt to load @vitejs/plugin-react if installed, otherwise fallback to esbuild automatic JSX
let plugins = [];
try {
  const react = (await import('@vitejs/plugin-react')).default;
  plugins.push(react());
} catch {
  // Fallback to Vite native esbuild JSX transformation
}

export default defineConfig({
  plugins,
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    port: 5173,
    open: false,
  },
});
