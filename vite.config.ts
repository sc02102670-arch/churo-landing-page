import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 빌드 시 상대 경로 사용 강제
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
