// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⬇️ replace REPO_NAME with your GitHub repo name
  base: '/My_portfolio/'
})