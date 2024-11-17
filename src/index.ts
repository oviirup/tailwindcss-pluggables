import { PluginsConfig } from 'tailwindcss/types/config';
import animatePlugin from './plugins/animate';
import defaultsPlugin from './plugins/defaults';
import dirPlugin from './plugins/dir';
import dragPlugin from './plugins/drag';
import hocusPlugin, { HocusPluginOptions } from './plugins/hocus';
import insetCenterPlugin from './plugins/insetCenter';
import notPlugin from './plugins/not';
import visibilityPlugin from './plugins/visibility';

/**
 * Use all available plugins at once
 *
 * @example
 *   const tailwindConfig = {
 *     plugins: [
 *       ...pluggables({
 *         animate: true,
 *         dir: false,
 *         hocus: { DEFAULT: [':hover', ':focus-visible'] },
 *       }),
 *     ],
 *   };
 */
export default function pluggables({
  animate = true,
  defaults = true,
  dir = true,
  drag = true,
  hocus = true,
  insetCenter = true,
  not = true,
  visibility = true,
}: PluggableOptions = {}): PluginsConfig {
  const pluginArray: PluginsConfig = [];

  const use = (plugin: PluginsConfig[0], opts: unknown) => {
    if (!opts) {
      return;
    } else if ('__isOptionsFunction' in plugin) {
      pluginArray.push(plugin(opts === true ? undefined : opts));
    } else {
      pluginArray.push(plugin);
    }
  };

  use(animatePlugin, animate);
  use(defaultsPlugin, defaults);
  use(dirPlugin, dir);
  use(dragPlugin, drag);
  use(hocusPlugin, hocus);
  use(insetCenterPlugin, insetCenter);
  use(notPlugin, not);
  use(visibilityPlugin, visibility);

  return pluginArray;
}

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
   * Utility classes to stylize the scrollbar
   *
   * [Documentation](#)
   */
  scrollbar?: boolean;

  /**
   * Add Show / Hide element
   *
   * [Documentation](#)
   *
   * @default true
   */
  visibility?: boolean;
};
