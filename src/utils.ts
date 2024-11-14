import { StyleObject } from '@/types';

/** Convert size value to rem value */
export function remSizes(sizes: number[]) {
  return sizes.reduce<StyleObject>((acc, size) => {
    acc[size] = `${size / 4}rem`;
    return acc;
  }, {});
}

export function directValues(arr: Array<string | number>) {
  return arr.reduce<StyleObject>((acc, entry) => {
    acc[entry] = entry.toString();
    return acc;
  }, {});
}
