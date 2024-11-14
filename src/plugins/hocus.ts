import createPlugin from 'tailwindcss/plugin';

export default createPlugin(({ e, addVariant, matchVariant }) => {
  addVariant('hocus', ['&:hover', '&:focus-visible']);
  // parent selector
  matchVariant(
    'group',
    (_, { modifier: m }) => {
      const b = m ? `group\\/${e(m)}` : `group`;
      return [`:merge(.${b}):hover &`, `:merge(.${b}):focus-visible &`];
    },
    { values: { hocus: 'hocus' } },
  );
  // peer selector
  matchVariant(
    'peer',
    (_, { modifier: m }) => {
      const b = m ? `peer\\/${e(m)}` : `peer`;
      return [`:merge(.${b}):hover ~ &`, `:merge(.${b}):focus-visible ~ &`];
    },
    { values: { hocus: 'hocus' } },
  );
});
