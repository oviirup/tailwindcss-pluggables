import createPlugin from 'tailwindcss/plugin';
import { Config, PluginUtils } from 'tailwindcss/types/config';

function filterDefault(values: Record<string, string>) {
  return Object.fromEntries(Object.entries(values).filter(([key]) => key !== 'DEFAULT'));
}

const animateThemeConfig: Partial<Config> = {
  theme: {
    extend: {
      animationDelay: (tw: PluginUtils) => ({
        ...tw.theme('transitionDelay'),
      }),
      animationDuration: (tw: PluginUtils) => ({
        0: '0ms',
        ...tw.theme('transitionDuration'),
      }),
      animationTimingFunction: (tw: PluginUtils) => ({
        ...tw.theme('transitionTimingFunction'),
      }),
      animationFillMode: {
        none: 'none',
        forwards: 'forwards',
        backwards: 'backwards',
        both: 'both',
      },
      animationDirection: {
        'normal': 'normal',
        'reverse': 'reverse',
        'alternate': 'alternate',
        'alternate-reverse': 'alternate-reverse',
      },
      animationOpacity: (tw: PluginUtils) => ({
        DEFAULT: 0,
        ...tw.theme('opacity'),
      }),
      animationTranslate: (tw: PluginUtils) => ({
        DEFAULT: '100%',
        ...tw.theme('translate'),
      }),
      animationScale: (tw: PluginUtils) => ({
        DEFAULT: 0,
        ...tw.theme('scale'),
      }),
      animationRotate: (tw: PluginUtils) => ({
        DEFAULT: '30deg',
        ...tw.theme('rotate'),
      }),
      animationRepeat: {
        0: '0',
        1: '1',
        infinite: 'infinite',
      },
      animation: (tw: PluginUtils) => ({
        in: `enter ${tw.theme('animationDuration.DEFAULT')}`,
        out: `exit ${tw.theme('animationDuration.DEFAULT')}`,
      }),
      keyframes: {
        enter: {
          from: {
            opacity: 'var(--tw-enter-opacity, 1)',
            transform:
              'translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1), var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate, 0))',
          },
        },
        exit: {
          to: {
            opacity: 'var(--tw-exit-opacity, 1)',
            transform:
              'translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1), var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate, 0))',
          },
        },
      },
    },
  },
};

/**
 * A tailwind plugin to create beautiful animations
 *
 * This plugin is inspired from [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) with css
 * modules support
 *
 * [Documentation](#)
 */
const animatePlugin = createPlugin((tw) => {
  tw.addUtilities({
    '.animate-in': {
      'animationName': 'enter',
      'animationDuration': tw.theme('animationDuration.DEFAULT'),
      '--tw-enter-opacity': 'initial',
      '--tw-enter-scale': 'initial',
      '--tw-enter-rotate': 'initial',
      '--tw-enter-translate-x': 'initial',
      '--tw-enter-translate-y': 'initial',
    },
    '.animate-out': {
      'animationName': 'exit',
      'animationDuration': tw.theme('animationDuration.DEFAULT'),
      '--tw-exit-opacity': 'initial',
      '--tw-exit-scale': 'initial',
      '--tw-exit-rotate': 'initial',
      '--tw-exit-translate-x': 'initial',
      '--tw-exit-translate-y': 'initial',
    },
  });

  tw.matchUtilities(
    {
      'fade-in': (value) => ({ '--tw-enter-opacity': value }),
      'fade-out': (value) => ({ '--tw-exit-opacity': value }),
    },
    { values: tw.theme('animationOpacity') },
  );

  tw.matchUtilities(
    {
      'zoom-in': (value) => ({ '--tw-enter-scale': value }),
      'zoom-out': (value) => ({ '--tw-exit-scale': value }),
    },
    { values: tw.theme('animationScale') },
  );

  tw.matchUtilities(
    {
      'spin-in': (value) => ({ '--tw-enter-rotate': value }),
      'spin-out': (value) => ({ '--tw-exit-rotate': value }),
    },
    { values: tw.theme('animationRotate') },
  );

  tw.matchUtilities(
    {
      'slide-in-from-top': (value) => ({
        '--tw-enter-translate-y': `-${value}`,
      }),
      'slide-in-from-bottom': (value) => ({
        '--tw-enter-translate-y': value,
      }),
      'slide-in-from-left': (value) => ({
        '--tw-enter-translate-x': `-${value}`,
      }),
      'slide-in-from-right': (value) => ({
        '--tw-enter-translate-x': value,
      }),
      'slide-out-to-top': (value) => ({
        '--tw-exit-translate-y': `-${value}`,
      }),
      'slide-out-to-bottom': (value) => ({
        '--tw-exit-translate-y': value,
      }),
      'slide-out-to-left': (value) => ({
        '--tw-exit-translate-x': `-${value}`,
      }),
      'slide-out-to-right': (value) => ({
        '--tw-exit-translate-x': value,
      }),
    },
    { values: tw.theme('animationTranslate') },
  );

  tw.matchUtilities(
    { duration: (value) => ({ animationDuration: value }) },
    { values: filterDefault(tw.theme('animationDuration')) },
  );

  tw.matchUtilities({ delay: (value) => ({ animationDelay: value }) }, { values: tw.theme('animationDelay') });

  tw.matchUtilities(
    { ease: (value) => ({ animationTimingFunction: value }) },
    { values: filterDefault(tw.theme('animationTimingFunction')) },
  );

  tw.addUtilities({
    '.running': { animationPlayState: 'running' },
    '.paused': { animationPlayState: 'paused' },
  });

  tw.matchUtilities(
    { 'fill-mode': (value) => ({ animationFillMode: value }) },
    { values: tw.theme('animationFillMode') },
  );

  tw.matchUtilities(
    { direction: (value) => ({ animationDirection: value }) },
    { values: tw.theme('animationDirection') },
  );

  tw.matchUtilities(
    { repeat: (value) => ({ animationIterationCount: value }) },
    { values: tw.theme('animationRepeat') },
  );
}, animateThemeConfig);

export default animatePlugin;
