import createPlugin from 'tailwindcss/plugin';

/**
 * Add Show / Hide element
 *
 * [Documentation](#)
 */
const visibilityPlugin = createPlugin((tw) => {
  tw.addUtilities({
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

export default visibilityPlugin;
