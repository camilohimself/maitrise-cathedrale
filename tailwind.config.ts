import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PALETTE OFFICIELLE MAQUETTES UNIQUEMENT
        gold: '#D4A574',    // Or/Doré - Boutons CTA, accents
        navy: '#1a1340',    // Navy foncé - Backgrounds sombres  
        red: '#E33241',     // Rouge - Logo, accents
        cream: '#F5F0E8',   // Crème/Beige - Sections backgrounds
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],   // UI/Navigation
        spectral: ['var(--font-spectral)', 'Spectral', 'Georgia', 'serif'],   // Titres/Content
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config