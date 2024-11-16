import { HocusPluginOptions } from './plugins/hocus';

export type StyleObject = Record<string, string>;

export type PluggableOptions = {
  /**
   * A tailwind plugin to create beautiful animations
   *
   * This plugin is inspired from [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) with css
   * modules support
   *
   * [Documentation](#)
   *
   * @default true
   */
  animate?: boolean;

  /**
   * Extended theme defaults
   *
   * [Documentation](#)
   *
   * @default true
   */
  defaults?: boolean;

  /**
   * Specify direction per element
   *
   * [Documentation](#)
   *
   * @default true
   */
  dir?: boolean;

  /**
   * Specify element to be draggable or non-draggable
   *
   * [Documentation](#)
   *
   * @default true
   */
  drag?: boolean;

  /**
   * Use multiple pseudo classes at once
   *
   * Tailwind docs [handling element states](https://tailwindcss.com/docs/hover-focus-and-other-states)
   *
   * [Documentation](#)
   *
   * @example
   *   hocus: { "DEFAULT": [":hover", ":focus-visible"] }
   *
   * @default true
   */
  hocus?: boolean | HocusPluginOptions;

  /**
   * Position element at absolute center
   *
   * [Documentation](#)
   *
   * @default true
   */
  insetCenter?: boolean;

  /**
   * Add not variants
   *
   * [Documentation](#)
   *
   * @default true
   */
  not?: boolean;

  /**
   * Add Show / Hide element
   *
   * [Documentation](#)
   *
   * @default true
   */
  visibility?: boolean;
};
