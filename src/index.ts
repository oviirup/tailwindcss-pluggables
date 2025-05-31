import { PluginsConfig } from 'tailwindcss/types/config';
import animatePlugin from './animate';
import dragPlugin from './drag';
import hocusPlugin, { HocusPluginOptions } from './hocus';
import insetCenterPlugin from './inset-center';

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
  drag = true,
  hocus = true,
  insetCenter = true,
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
  use(dragPlugin, drag);
  use(hocusPlugin, hocus);
  use(insetCenterPlugin, insetCenter);

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
};
