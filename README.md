# Tailwindcss Pluggables

![Tests](https://github.com/oviirup/tailwindcss-pluggables/workflows/Release/badge.svg)
[![NPM Version](https://img.shields.io/npm/v/tailwindcss-pluggables)](https://www.npmjs.com/package/tailwindcss-pluggables)

A collection of Tailwind plugins with additional theme defaults, utilities, variants, and more.

## Installation

Install the plugin with your preferred package manager...

```bash
pnpm i tailwindcss-pluggables
```

Add it to the plugins array in `tailwind.config.js`

```js
import pluggables from 'tailwindcss-pluggables';

const tailwindConfig = {
  plugins: [
    ...pluggables({
      // plugin options ...
    }),
  ],
};

export default tailwindConfig;
```

> [!NOTE]
> The `pluggables` function returns all plugins as an `Array`, so you may need to destructure the array depending to your use case.

You can also use the plugins individually...

```js
import { animatePlugin, scrollbarPlugin } from 'tailwindcss-pluggables/plugins';

const tailwindConfig = {
  plugins: [
    animatePlugin,
    scrollbarPlugin,
    // add other plugins if you need...
  ],
};

export default tailwindConfig;
```

## Configuration

The plugin is type-safe and well-documented with inline jsdoc, so don't need wot worry about configuration mismatch.

Most of the plugins are enabled by default, and some of the plugins come with options to configure them separately.

```js
pluggables({
  drag: false, // disable plugin
  scroll: true, // enable plugin with default options
  hocus: {
    DEFAULT: [':hover', ':focus'],
    visible: [':hover', ':focus-visible'],
    within: [':hover', ':focus-within'],
  },
});
```

## Contributing & Development

You are welcome to contribute to the project. Please follow the [contributing guidelines](/.github/contributing.md) before making any contribution.

This project uses [bun.js](https://bun.sh/) as package manager. Though you can use any other package manager of your choice, but bun is preferred for development.
