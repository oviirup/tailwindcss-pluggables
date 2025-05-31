# Tailwindcss Pluggables [![](https://img.shields.io/npm/v/tailwindcss-pluggables)](https://www.npmjs.com/package/tailwindcss-pluggables)

A collection of Tailwind CSS plugins that extend functionality with additional theme defaults, utilities, variants, and more.

> Supports Tailwind v4

## Installation

Install the package using your preferred package manager:

```bash
pnpm add tailwindcss-pluggables
# or
bun add tailwindcss-pluggables
```

To include all plugins globally, add the following to your `global.css`:

```css
@import 'tailwindcss';
@import 'tailwindcss-pluggables';
```

Alternatively, you may import plugins individually as needed:

```css
@import 'tailwindcss-pluggables/animate';
@import 'tailwindcss-pluggables/drag';
@import 'tailwindcss-pluggables/inset-center';
@import 'tailwindcss-pluggables/hocus';
```

You can also configure the plugins in your `tailwind.config.js` (ESM syntax shown):

```js
import pluggables from 'tailwindcss-pluggables';

const tailwindConfig = {
  plugins: [
    ...pluggables({
      // Configure plugin options here
    }),
  ],
};

export default tailwindConfig;
```

> [!NOTE]
> The `pluggables` function returns an array of plugins.

For more granular control, you can import and use plugins individually:

```js
import animatePlugin from 'tailwindcss-pluggables/animate';
import hocusPlugin from 'tailwindcss-pluggables/hocus';
// import other plugins as needed

const tailwindConfig = {
  plugins: [
    animatePlugin,
    hocusPlugin,
    // use additional plugins as needed
  ],
};

export default tailwindConfig;
```

## Configuration

The plugin system is type-safe and thoroughly documented with inline JSDoc comments, ensuring configuration consistency and ease of use.

Most plugins are enabled by default, while others offer configurable options:

```js
pluggables({
  drag: false, // Disable specific plugin
  hocus: true,
});
```

## Contributing & Development

We welcome contributions to this project. Please review the [contributing guidelines](/.github/contributing.md) before submitting any changes.

This project utilizes [Bun.js](https://bun.sh/) as its primary package manager. While other package managers are supported, Bun is recommended for development purposes.
