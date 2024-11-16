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
const hocusPlugin = createPlugin.withOptions((variants?: HocusPluginOptions) => ({ e, addVariant, matchVariant }) => {
  variants ??= {
    DEFAULT: [':hover', ':focus-visible'],
  };

  for (const [suffix, pseudoClasses] of Object.entries(variants)) {
    const variant = suffix === 'DEFAULT' ? `hocus` : `hocus-${e(suffix)}`;

    addVariant(
      variant,
      pseudoClasses.map((state) => `&${state}`),
    );

    // parent selector
    matchVariant(
      'group',
      (_, { modifier: modifier }) => {
        const parent = modifier ? `group\\/${e(modifier)}` : `group`;
        return pseudoClasses.map((state) => `:merge(.${parent})${state} &`);
      },
      { values: { [variant]: variant } },
    );

    // parent selector
    matchVariant(
      'peer',
      (_, { modifier: modifier }) => {
        const peer = modifier ? `peer\\/${e(modifier)}` : `peer`;
        return pseudoClasses.map((state) => `:merge(.${peer})${state} ~ &`);
      },
      { values: { [variant]: variant } },
    );
  }
});

export default hocusPlugin;
