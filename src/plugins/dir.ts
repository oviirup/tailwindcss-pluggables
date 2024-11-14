import createPlugin from 'tailwindcss/plugin.js';

export default createPlugin(({ addUtilities }) => {
  addUtilities({
    '.dir-rtl': {
      direction: 'rtl',
    },
    '.dir-ltr': {
      direction: 'ltr',
    },
  });
});
