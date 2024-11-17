import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator('plugin', {
    description: 'A Turborepo generator - creates a new tailwind plugin',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the plugin to create ...',
        validate: (input: string) => {
          const camelCaseRegex = /^[a-z][a-zA-Z0-9]*$/;
          if (!camelCaseRegex.test(input)) return 'plugin name must be in camel case';
          if (!input.trim()) return 'file name is required';
          return true;
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the plugin in one line ...',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/src/plugins/{{ camelCase name }}.ts',
        templateFile: 'plugin.hbs',
      },
      {
        type: 'append',
        path: `{{ turbo.paths.root }}/src/plugins/index.ts`,
        pattern: /export .*;(?<insertion>)/,
        template: "export { default as {{name}}Plugin } from './{{name}}';",
      },
    ],
  });
}
