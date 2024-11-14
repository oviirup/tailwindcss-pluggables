import createPlugin from 'tailwindcss/plugin.js';

export default createPlugin(({ addUtilities }) => {
  addUtilities({
    '.drag-none': {
      'user-drag': 'none',
      '-webkit-user-drag': 'none',
    },
    '.drag-element': {
      'user-drag': 'element',
      '-webkit-user-drag': 'element',
    },
    '.drag-auto': {
      'user-drag': 'auto',
      '-webkit-user-drag': 'auto',
    },
  });
});
