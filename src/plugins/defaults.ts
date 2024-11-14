import { directValues, remSizes } from '@/utils';
import plugin from 'tailwindcss/plugin.js';

const extendedBorderWidth = {
  3: '3px',
  5: '5px',
};

export default plugin(() => {}, {
  theme: {
    extend: {
      spacing: remSizes([4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 13, 15, 17, 18, 19, 21, 22, 23]),
      zIndex: directValues([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      blur: { px: '1px', xs: '2px' },
      borderWidth: extendedBorderWidth,
      ringWidth: extendedBorderWidth,
      ringOffsetWidth: extendedBorderWidth,
      outlineOffset: extendedBorderWidth,
      fontSize: { '2xs': ['0.625rem', { lineHeight: '0.75rem' }] },
    },
  },
});
