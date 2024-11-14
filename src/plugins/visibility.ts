import createPlugin from 'tailwindcss/plugin';

export default createPlugin(({ addUtilities }) => {
  addUtilities({
    '.hide': {
      visibility: 'hidden',
      opacity: '0',
      pointerEvents: 'none',
    },
    '.show': {
      visibility: 'visible',
      opacity: '1',
      pointerEvents: 'auto',
    },
  });
});
