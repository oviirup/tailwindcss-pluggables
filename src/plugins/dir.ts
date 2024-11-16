import createPlugin from 'tailwindcss/plugin.js';

/**
 * Specify direction per element
 *
 * [Documentation](#)
 */
const dirPlugin = createPlugin(({ addUtilities }) => {
  addUtilities({
    '.dir-rtl': { direction: 'rtl' },
    '.dir-ltr': { direction: 'ltr' },
  });
});

export default dirPlugin;
