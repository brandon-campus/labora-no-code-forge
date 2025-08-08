// Sistema de diseño consistente para toda la aplicación
export const designTokens = {
  colors: {
    primary: 'text-labora-neon',
    secondary: 'text-labora-red', 
    accent: 'text-labora-neon/80',
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      accent: 'bg-labora-neon/10',
      gradient: 'bg-gradient-to-b from-gray-900 to-black'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      muted: 'text-gray-400'
    }
  },
  spacing: {
    section: 'py-16 sm:py-20',
    container: 'px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-4xl mx-auto',
    card: 'p-6 sm:p-8'
  },
  borderRadius: {
    card: 'rounded-xl',
    button: 'rounded-full',
    small: 'rounded-lg'
  },
  shadows: {
    card: 'shadow-2xl',
    button: 'shadow-lg shadow-labora-neon/25',
    hover: 'hover:shadow-xl hover:shadow-labora-neon/40'
  }
}; 