import createPlugin from 'tailwindcss/plugin';

/**
 * Specify direction per element
 *
 * [Documentation](#)
 */
const dirPlugin = createPlugin((tw) => {
  tw.addUtilities({
    '.dir-rtl': { direction: 'rtl' },
    '.dir-ltr': { direction: 'ltr' },
  });
});

export default dirPlugin;
