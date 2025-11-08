# Contributing

> Any change matters, whatever the size, just do it.

Thanks for taking interest in making contribution to this tailwind plugins collection. We are happy to have you here.

Before submitting your first pull-request please go through this document. We recommend to check for open [issues](https://github.com/oviirup/tailwindcss-pluggables/issues?q=is:open+is:issue) or [PR](https://github.com/oviirup/tailwindcss-pluggables/pulls?q=is:open+is:pr) to see of someone is already working on similar issue. Also read the community [code of conduct](./code_of_conduct.md) before anything else.

## About this project

This project uses **bun.js** as a package manager. The project follows Tailwind CSS v4's [css-first architecture](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities), where utilities are defined using native CSS directives instead of JavaScript plugins.

The project structure is as follows...

```
styles
├── index.css
├── animate.css
├── drag.css
├── hocus.css
└── ...
```

All plugins are kept in the `styles/` directory as CSS files. Each plugin file uses Tailwind CSS v4 directives like `@utility`, `@theme`, and `@custom-variant` to define utilities and variants. The `styles/index.css` file imports all individual plugin files for easy consumption.

## How Do I Contribute?

There are different ways to contribute, each comes with different levels
of tasks, such as:

- Report a bug.
- Request a feature you think would be great for the plugin.
- Take ownership of the bug you want to fix and let others know about it by commenting on the issue.
- Test and triage reported bugs by others.
- Work on requested/approved features.
- Improve the codebase (lint, naming, comments, test descriptions, etc...)
- Improve the documentation.
- Let the world know about the plugin!

## Development

### Fork & clone to local machine

Fork the repo from GitHub by clicking the fork button at the top-right.

Clone it...

```bash
git clone https://github.com/username/tailwindcss-pluggables.git
```

### Create a new branch

Create a new branch. Please make sure you are not on the **main** branch before making any changes.

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
bun install
```

### Make your desired changes ...

Now you can make changes to the repo or [create a new plugin](#create-a-new-plugin).

## Create a new Plugin

Plugins in this project are CSS files that use Tailwind CSS v4's native directives. Here's how to create a new plugin:

1. **Create a new CSS file** in the `styles/` directory. The name should be in _camelCase_ (e.g., `my-plugin.css`).

2. **Define your utilities** using Tailwind CSS v4 directives:
   - Use `@utility` to create utility classes
   - Use `@theme` to extend the theme configuration
   - Use `@custom-variant` to create custom variants

   Example:

   ```css
   /* styles/my-plugin.css */
   @utility my-utility {
     property: value;
   }

   @utility my-utility-* {
     property: --value([type]);
   }
   ```

3. **Add the import** to `styles/index.css` in alphabetical order:

   ```css
   @import './animate.css';
   @import './drag.css';
   @import './hocus.css';
   @import './my-plugin.css'; /* Add your new plugin here */
   ```

4. **Update `package.json` exports** to include your new plugin:

   ```json
   "exports": {
     ".": "./styles/index.css",
     "./animate": "./styles/animate.css",
     "./drag": "./styles/drag.css",
     "./hocus": "./styles/hocus.css",
     "./my-plugin": "./styles/my-plugin.css"  /* Add your new export */
   }
   ```

### Plugin Examples

- **Simple utilities**: See `styles/drag.css` for basic `@utility` examples
- **Theme configuration**: See `styles/animate.css` for `@theme` and complex utilities
- **Custom variants**: See `styles/hocus.css` for `@custom-variant` examples

For more information about Tailwind CSS v4 directives, refer to the [official documentation](https://tailwindcss.com/docs/adding-custom-styles).

## Code Style

This project uses Prettier for code formatting. Before committing, make sure your code is formatted:

```bash
bun run format
```

The project uses `husky` and `lint-staged` to automatically format files on commit. All CSS files should follow the existing style patterns.
