/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' // 👈 新增這行，掃描兵工廠！
  ],
  theme: {
    extend: {
      // 1. 定義關鍵影格 (Keyframes)
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(20%)' },
        }
      },
      // 2. 註冊為 Tailwind 原生動畫 Class
      animation: {
        'zoom-in': 'zoom-in 10s ease-out forwards',
        'bounce-slow': 'bounce-slow 2s infinite ease-in-out',
      },
      // 3. 註冊客製化霓虹陰影 (Neon Shadow)
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.2)',
        'neon-cyan-hover': '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 15px rgba(34, 211, 238, 0.3)',
      }
    },
  },
  plugins: [],
}