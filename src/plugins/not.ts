import { directValues } from '@/utils';
import createPlugin from 'tailwindcss/plugin';
import { KeyValuePair } from 'tailwindcss/types/config';

/**
 * Add not variants
 *
 * [Documentation](#)
 */
const notPlugin = createPlugin((tw) => {
  const negationMap: KeyValuePair = {
    'first': '&:not(:first-child)',
    'last': '&:not(:last-child)',
    'first-of-type': '&:not(:first-of-type)',
    'last-of-type': '&:not(:last-of-type)',
  };

  tw.matchVariant(
    'not',
    (value) => {
      if (value in negationMap) return negationMap[value];
      return `&:not(${value})`;
    },
    { values: directValues(Object.keys(negationMap)) },
  );
});

export default notPlugin;
