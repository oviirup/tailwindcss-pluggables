# Tailwindcss Pluggables [![](https://img.shields.io/npm/v/tailwindcss-pluggables)](https://www.npmjs.com/package/tailwindcss-pluggables)

A comprehensive collection of Tailwind CSS v4 utilities that enhance your development workflow with powerful animations, interaction states, and drag controls. Built specifically for Tailwind CSS v4's new architecture.

It plugin uses the new [css-first architecture](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities), leveraging the latest capabilities in the framework. This means utilities are provided as native CSS via `@import`, instead of being registered through the older JavaScript plugin API.

## Features

- 🎨 **Animate**: Rich animation utilities for enter/exit transitions, fades, slides, zooms, and more
- 🛠️ Fully compatible with [shadcn](https://ui.shadcn.com), and includes custom animations like `accordion-up`, `accordion-down`
- 🖱️ **Drag**: Control element draggability with semantic utility classes
- 👆 **Hocus**: Combined hover and focus state variants for better UX patterns

**Upcoming Features**

- [ ] Custom utilities for `radix-ui` compatible `data-`, `aria-`, and `group-` attributes
- [ ] Typography plugin for `prose`
- [ ] Utility for styling the scrollbar

## Installation & Usage

Install the package using your preferred package manager:

```bash
npm install tailwindcss-pluggables
```

To include all utilities in your project, add the following to your main CSS file:

```css
@import 'tailwindcss';
@import 'tailwindcss-pluggables';
```

### Import Individual Modules

For better bundle size control, you can import only the utilities you need:

```css
@import 'tailwindcss';

/* Import only what you need */
@import 'tailwindcss-pluggables/animate';
@import 'tailwindcss-pluggables/drag';
@import 'tailwindcss-pluggables/hocus';
```

## Plugins

### Animate

Animation utilities inspired by [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate), optimized for Tailwind CSS v4.

**Enter/Exit Animations:**

```html
<div class="animate-in fade-in slide-in-from-top duration-300">Content entering from top</div>

<div class="animate-out fade-out slide-out-to-bottom duration-300">Content exiting to bottom</div>
```

**Available Animation Types:**

- `fade-in` / `fade-out` - Opacity transitions
- `zoom-in` / `zoom-out` - Scale animations
- `slide-in-from-{direction}` / `slide-out-to-{direction}` - Slide animations (top, bottom, left, right)
- `spin-in` / `spin-out` - Rotation animations

**Animation Controls:**

- `duration-*` - Control animation duration
- `delay-*` - Add animation delays
- `ease-*` - Customize easing functions
- `repeat-*` - Set iteration count
- `direction-*` - Control animation direction
- `fill-mode-*` - Set fill mode behavior
- `running` / `paused` - Control animation play state

**Special Animations:**

- `animate-accordion-down` / `animate-accordion-up` - Accordion transitions
- `animate-caret-blink` - Text caret blinking animation

### Drag

Control element draggability with semantic utility classes.

```html
<!-- Prevent dragging -->
<img src="logo.png" class="drag-none" alt="Logo" />

<!-- Enable element dragging -->
<div class="drag-element">Draggable content</div>

<!-- Default browser drag behavior -->
<div class="drag-auto">Auto drag behavior</div>
```

**Available Classes:**

- `drag-none` - Prevents dragging
- `drag-element` - Enables element dragging
- `drag-auto` - Uses browser default behavior

### Hocus

Combined hover and focus state variants for improved accessibility and user experience.

```html
<!-- Combined hover and focus styles -->
<button class="hocus:bg-blue-600 hocus:text-white">Button with hocus state</button>

<!-- Hover + focus-visible variant -->
<button class="hocus-visible:ring-2 hocus-visible:ring-blue-500">Accessible button</button>

<!-- Hover + active variant -->
<button class="hocus-active:scale-95">Interactive button</button>
```

**Available Variants:**

- `hocus:` - Combines `:hover` and `:focus`
- `hocus-visible:` - Combines `:hover` and `:focus-visible` (recommended for accessibility)
- `hocus-active:` - Combines `:hover` and `:active`

**With Group and Peer:**

```html
<div class="group">
  <button class="group-hocus:bg-blue-500">Button</button>
</div>

<div class="peer">
  <input class="peer-hocus:border-blue-500" />
</div>
```

## Contributing

We welcome contributions! Please review our [contributing guidelines](/.github/contributing.md) before submitting pull requests.

### Development Setup

This project uses [Bun.js](https://bun.sh/) as the primary package manager for development:

```bash
# Clone the repository
git clone https://github.com/oviirup/tailwindcss-pluggables.git

# Install dependencies
bun install
```

While Bun is recommended for development, the package works with all major package managers in production.

## License

MIT © [Avirup Ghosh (oviirup)](https://github.com/oviirup)
