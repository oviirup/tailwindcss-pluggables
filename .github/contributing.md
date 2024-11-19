# Contributing

> Any change matters, whatever the size, just do it.

Thanks for taking interest in making contribution to this tailwind plugins collection. We are happy to have you here.

Before submitting your first pull-request please go through this document. We recommend to check for open [issues](https://github.com/oviirup/tailwindcss-pluggables/issues?q=is:open+is:issue) or [PR](https://github.com/oviirup/tailwindcss-pluggables/pulls?q=is:open+is:pr) to see of someone is already working on similar issue. Also read the community [code of conduct](./code_of_conduct.md) before anything else.

## About this project

This project uses **bun.js** as a package manager. The project structure is as follows...

```
src
├── plugins
│   ├── index.ts
│   ├── animate.ts
│   ├── defaults.ts
│   └── ...
├── index.ts
└── utils.ts
```

All plugins are kept in `src/plugins` directory, and exported individually as barrel exports from `src/plugins/index.ts` file.

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

The project comes with auto code generation. you can do it automatically or manually.

### Automatic code generation

Just run the generate command in terminal.

```bash
bun run generate plugin
```

Give it a proper name (in camelCase) and a description

```bash
>>> Modify "tailwindcss-pluggables" using custom generators

? Name of the plugin to create ... animate
? Describe the plugin in one line ... Plugin to create beautiful animations
```

It will automatically create `src/plugin/animate.ts` file and add an export from the `src/plugins/index.ts`

You can then modify it as you like.

### Manual process

1. Create a new new file in `src/plugins`. The name of the file should be _camelCase_.
2. Export the plugin as barrel export from `src/plugins/index.ts` file.\
   Make sure the exports are in alphabetical order. ESlint order-imports handles that automatically.

After making the plugin file make the necessary changes int `src/index.ts` file `pluggables()` function and `PluggableOptions` type.

## Testing

As of November 2024 this project does not contains any tests, But we encourage contributors to add breaking tests.
