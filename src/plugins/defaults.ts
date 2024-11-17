import { directValues, remSizes } from '@/utils';
import createPlugin from 'tailwindcss/plugin';

const extendedBorderWidth = {
  3: '3px',
  5: '5px',
};

/**
 * Extended theme defaults
 *
 * [Documentation](#)
 */
const defaultsPlugin = createPlugin(() => {}, {
  theme: {
    extend: {
      spacing: remSizes([4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 13, 15, 17, 18, 19, 21, 22, 23]),
      zIndex: directValues([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      blur: { px: '1px', xs: '2px' },
      borderWidth: extendedBorderWidth,
      ringWidth: extendedBorderWidth,
      ringOffsetWidth: extendedBorderWidth,
      outlineOffset: extendedBorderWidth,
    },
  },
});

export default defaultsPlugin;
