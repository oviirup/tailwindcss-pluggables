import { StyleObject } from '@/types';
import { directValues } from '@/utils';
import createPlugin from 'tailwindcss/plugin.js';

export default createPlugin(({ matchVariant }) => {
  const negationMap: StyleObject = {
    'first': '&:not(:first-child)',
    'last': '&:not(:last-child)',
    'first-of-type': '&:not(:first-of-type)',
    'last-of-type': '&:not(:last-of-type)',
  };
  matchVariant(
    'not',
    (value) => {
      if (value in negationMap) return negationMap[value];
      return `&:not(${value})`;
    },
    { values: directValues(Object.keys(negationMap)) },
  );
});
