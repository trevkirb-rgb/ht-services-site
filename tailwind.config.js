/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8FAFC',
        ink: '#0B1220',
        panel: '#111827',
        accent: '#3BA5FF',
        amberGlow: '#F5B65A'
      },
      boxShadow: {
        glowBlue: '0 0 24px rgba(59, 165, 255, 0.35)',
        glowAmber: '0 0 28px rgba(245, 182, 90, 0.28)'
      },
      backgroundImage: {
        radialGlow: 'radial-gradient(circle at 20% 20%, rgba(59, 165, 255, 0.20), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245, 182, 90, 0.15), transparent 38%)'
      }
    }
  },
  plugins: []
};