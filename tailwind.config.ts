const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');

// Load the material theme JSON file
const themeJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'app', 'material-theme.json'), 'utf8')
);


module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all App Router files
    './components/**/*.{js,ts,jsx,tsx}', // Include all components
    './features/**/*.{js,ts,jsx,tsx}', // Include feature-specific components
    './pages/**/*.{js,ts,jsx,tsx}', // Fallback for any legacy pages if used
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: themeJson.schemes.light.primary,
        onPrimary: themeJson.schemes.light.onPrimary,
        primaryContainer: themeJson.schemes.light.primaryContainer,
        onPrimaryContainer: themeJson.schemes.light.onPrimaryContainer,
        tertiary: themeJson.schemes.light.tertiary,
        background: themeJson.schemes.light.background,
        onBackground: themeJson.schemes.light.onBackground,
        surface: themeJson.schemes.light.surface,
        onSurface: themeJson.schemes.light.onSurface,
        surfaceContainer: themeJson.schemes.light.surfaceContainer,
        surfaceContainerLow: themeJson.schemes.light.surfaceContainerLow,
        outline: themeJson.schemes.light.outline,
        outlineVariant: themeJson.schemes.light.outlineVariant,
        error: themeJson.schemes.light.error,
        onError: themeJson.schemes.light.onError,

        // Dark mode colors (flattened with `dark-` prefix)
        'dark-primary': themeJson.schemes.dark.primary,
        'dark-onPrimary': themeJson.schemes.dark.onPrimary,
        'dark-primaryContainer': themeJson.schemes.dark.primaryContainer,
        'dark-onPrimaryContainer': themeJson.schemes.dark.onPrimaryContainer,
        'dark-tertiary': themeJson.schemes.light.tertiary,
        'dark-background': themeJson.schemes.dark.background,
        'dark-onBackground': themeJson.schemes.dark.onBackground,
        'dark-surface': themeJson.schemes.dark.surface,
        'dark-surfaceContainer': themeJson.schemes.dark.surfaceContainer,
        'dark-surfaceContainerLow': themeJson.schemes.dark.surfaceContainerLow,
        'dark-onSurface': themeJson.schemes.dark.onSurface,
        'dark-outline': themeJson.schemes.dark.outline,
        'dark-outlineVariant': themeJson.schemes.dark.outlineVariant,
        'dark-error': themeJson.schemes.dark.error,
        'dark-onError': themeJson.schemes.dark.onError,
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Use the CSS variable
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }:{ addUtilities: Function }) {
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
      });
    }),
  ],
};