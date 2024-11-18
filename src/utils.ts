import { KeyValuePair, RecursiveKeyValuePair } from 'tailwindcss/types/config';
// @ts-expect-error
import _flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
// @ts-expect-error
import _toColorValue from 'tailwindcss/lib/util/toColorValue';

/** Convert size value to rem value */
export function remSizes(sizes: number[]) {
  return sizes.reduce<KeyValuePair>((acc, size) => {
    acc[size] = `${size / 4}rem`;
    return acc;
  }, {});
}

/** Transform array value as value record */
export function directValues(arr: Array<string | number>) {
  return arr.reduce<KeyValuePair>((acc, entry) => {
    acc[entry] = entry.toString();
    return acc;
  }, {});
}

/** Sanitize recursive key-value-pairs in simple object */
export function flattenColorPalette(colors: RecursiveKeyValuePair): KeyValuePair {
  return _flattenColorPalette(colors);
}

/** Convert color value initiator to simple color value */
export function toColorValue(value: string | ((e: any) => string)) {
  return _toColorValue(value);
}
