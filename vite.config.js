import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  root: 'src',
  // En producción (GitHub Pages) la URL incluye el nombre del repo.
  // Cámbialo por el nombre exacto de tu repositorio en GitHub.
  // Ejemplo: si tu repo se llama "mi-appstore" → base: '/mi-appstore/'
  // Si usas un dominio propio o usuario.github.io → base: '/'
  base: command === 'build' ? '/Tienda-de-apps-2008-2017/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
}))
