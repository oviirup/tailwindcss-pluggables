import createPlugin from 'tailwindcss/plugin';

/**
 * Options for hocus variants
 *
 * Add css pseudo classes to hocus state variants. All pseudo classes must start with ":"
 *
 * @default { DEFAULT: [':hover', ':focus-visible'] }
 */
export type HocusPluginOptions = Record<string, string[]>;

/**
 * Use multiple pseudo classes at once
 *
 * Tailwind docs [handling element states](https://tailwindcss.com/docs/hover-focus-and-other-states)
 *
 * [Documentation](#)
 */
const hocusPlugin = createPlugin.withOptions((opts?: HocusPluginOptions) => (tw) => {
  // use default options
  opts ??= {
    DEFAULT: [':hover', ':focus-visible'],
  };

  for (const [suffix, pseudoClasses] of Object.entries(opts)) {
    const variant = suffix === 'DEFAULT' ? `hocus` : `hocus-${tw.e(suffix)}`;

    tw.addVariant(
      variant,
      pseudoClasses.map((state) => `&${state}`),
    );

    // parent selector
    tw.matchVariant(
      'group',
      (_, { modifier: modifier }) => {
        const parent = modifier ? `group\\/${tw.e(modifier)}` : `group`;
        return pseudoClasses.map((state) => `:merge(.${parent})${state} &`);
      },
      { values: { [variant]: variant } },
    );

    // parent selector
    tw.matchVariant(
      'peer',
      (_, { modifier: modifier }) => {
        const peer = modifier ? `peer\\/${tw.e(modifier)}` : `peer`;
        return pseudoClasses.map((state) => `:merge(.${peer})${state} ~ &`);
      },
      { values: { [variant]: variant } },
    );
  }
});

export default hocusPlugin;
