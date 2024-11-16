import { PluginsConfig } from 'tailwindcss/types/config';
import animatePlugin from './plugins/animate';
import defaultsPlugin from './plugins/defaults';
import dirPlugin from './plugins/dir';
import dragPlugin from './plugins/drag';
import hocusPlugin from './plugins/hocus';
import insetCenterPlugin from './plugins/insetCenter';
import notPlugin from './plugins/not';
import visibilityPlugin from './plugins/visibility';
import { PluggableOptions } from './types';

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
function pluggables({
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

  if (animate) pluginArray.push(animatePlugin);
  if (defaults) pluginArray.push(defaultsPlugin);
  if (dir) pluginArray.push(dirPlugin);
  if (drag) pluginArray.push(dragPlugin);
  if (hocus) pluginArray.push(typeof hocus === 'boolean' ? hocusPlugin : hocusPlugin(hocus));
  if (insetCenter) pluginArray.push(insetCenterPlugin);
  if (not) pluginArray.push(notPlugin);
  if (visibility) pluginArray.push(visibilityPlugin);

  return pluginArray;
}

export default pluggables;
