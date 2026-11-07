import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { profile } from './src/content/profile.ts'

function htmlTitle(title: string): Plugin {
  const safe = title
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
  return {
    name: 'html-title',
    transformIndexHtml(html) {
      return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safe}</title>`)
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), htmlTitle(profile.name)],
})
