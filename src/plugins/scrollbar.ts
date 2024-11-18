import { flattenColorPalette, toColorValue } from '@/utils';
import createPlugin from 'tailwindcss/plugin';
import { KeyValuePair } from 'tailwindcss/types/config';

/** Options for scrollbar utility classes */
export type ScrollbarPluginOptions = {
  gutter?: boolean;
  color?: boolean;
  width?: boolean | KeyValuePair<string, string | number>;
};

/**
 * Stylize scrollbar ui
 *
 * Adds utility classes for `scrollbar-gutter`, `scrollbar-color`, `scrollbar-width`
 *
 * [Documentation](#)
 */
const scrollbarPlugin = createPlugin.withOptions((opts: ScrollbarPluginOptions) => (tw) => {
  opts ??= {};
  opts.gutter ??= true;
  opts.color ??= true;
  opts.width ??= {
    light: '0.375em',
    thin: '0.5rem',
    medium: '0.625rem',
    thick: '0.75rem',
  };

  // Base properties -----------------------------------------------------------
  tw.addBase({
    '*': {
      scrollbarColor: 'initial',
      scrollbarWidth: 'initial',
    },
  });

  tw.addUtilities({
    '.scrollbar-hidden': {
      'scrollbar-width': 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    },
  });

  // Scrollbar gutter ----------------------------------------------------------
  if (opts.gutter) {
    tw.matchUtilities(
      {
        'scrollbar-gutter': (value) => ({
          scrollbarGutter: value,
        }),
      },
      {
        values: {
          initial: 'initial',
          inherit: 'inherit',
          auto: 'auto',
          stable: 'stable',
          both: 'stable both-edges',
        },
      },
    );
  }

  // Scrollbar color -----------------------------------------------------------
  if (opts.color) {
    const colorValues = flattenColorPalette(tw.theme('colors'));

    // TODO: add 'scrollbar-color' property, currently adding it brings the native scrollbar colors in chrome

    // track color
    tw.matchUtilities(
      {
        'scrollbar-track': (value) => ({
          '--tw-scrollbar-track': toColorValue(value),
          // 'scrollbar-color': 'var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)',
          '&::-webkit-scrollbar': {
            'background-color': 'var(--tw-scrollbar-track)',
          },
          '&::-webkit-scrollbar-corner': {
            'background-color': 'var(--tw-scrollbar-track)',
          },
        }),
      },
      { values: colorValues, type: 'color' },
    );
    // thumb color
    tw.matchUtilities(
      {
        'scrollbar-thumb': (value) => ({
          '--tw-scrollbar-thumb': toColorValue(value),
          // 'scrollbar-color': 'var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)',
          '&::-webkit-scrollbar-thumb': {
            'background-color': 'var(--tw-scrollbar-thumb)',
          },
        }),
      },
      { values: colorValues, type: 'color' },
    );
  }

  // Scrollbar width -----------------------------------------------------------
  if (!!opts.width) {
    const scrollbarWidthValues = typeof opts.width === 'boolean' ? {} : opts.width;
    // predefined scrollbar width
    tw.matchUtilities(
      {
        scrollbar: (value) => ({
          '--tw-scrollbar-width': value,
          'scrollbar-width': 'var(--tw-scrollbar-width)',
          '&::-webkit-scrollbar': {
            width: 'var(--tw-scrollbar-width)',
            height: 'var(--tw-scrollbar-width)',
          },
        }),
      },
      { values: { auto: 'auto', ...scrollbarWidthValues } },
    );
  }
});

export default scrollbarPlugin;
