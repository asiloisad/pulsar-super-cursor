# super-cursor

Keyboard-driven multi-cursor creation and navigation commands.

![demo](https://github.com/asiloisad/pulsar-super-cursor/blob/master/assets/demo.gif?raw=true)

## Features

- **Cursor creation**: Toggle new cursors anywhere.
- **Cursor navigation**: Switch between cursors.
- **Active cursor highlight**: Visual indicator when multiple cursors exist.
- **Single cursor movement**: Individual cursor movement and selection commands.
- **Power mode**: Temporarily isolate active cursor for all operations.
- **Cursor consolidation**: Merge all cursors to the active cursor position.
- **Overtype compatibility**: Works with [overtype-mode](https://github.com/asiloisad/pulsar-overtype-mode).

## Installation

To install `super-cursor` search for [super-cursor](https://web.pulsar-edit.dev/packages/super-cursor) in the Install pane of the Pulsar settings or run `ppm install super-cursor`. Alternatively, you can run `ppm install asiloisad/pulsar-super-cursor` to install a package directly from the GitHub repository.

## Commands

Commands available in `atom-text-editor`:

- `super-cursor:power-global`: <kbd>Ctrl+Alt+Insert</kbd> toggle power mode for all editors,
- `super-cursor:power-editor`: <kbd>Ctrl+Shift+Alt+Insert</kbd> toggle power mode for the active editor,
- `super-cursor:toggle`: toggle cursor instance,
- `super-cursor:previous`: <kbd>Ctrl+Alt+PageUp</kbd> activate next cursor,
- `super-cursor:next`: <kbd>Ctrl+Alt+PageDown</kbd> activate previous cursor,
- `super-cursor:reset`,
- `super-cursor:remove`,
- `super-cursor:move-up`: <kbd>Ctrl+Alt+Up</kbd>,
- `super-cursor:move-down`: <kbd>Ctrl+Alt+Down</kbd>,
- `super-cursor:move-left`: <kbd>Ctrl+Alt+Left</kbd>,
- `super-cursor:move-right`: <kbd>Ctrl+Alt+Right</kbd>,
- `super-cursor:move-to-top`,
- `super-cursor:move-to-bottom`,
- `super-cursor:move-to-beginning-of-screen-line`,
- `super-cursor:move-to-beginning-of-line`,
- `super-cursor:move-to-first-character-of-line`,
- `super-cursor:move-to-end-of-screen-line`,
- `super-cursor:move-to-end-of-line`,
- `super-cursor:move-to-beginning-of-word`,
- `super-cursor:move-to-end-of-word`,
- `super-cursor:move-to-beginning-of-next-word`,
- `super-cursor:move-to-previous-word-boundary`,
- `super-cursor:move-to-next-word-boundary`,
- `super-cursor:move-to-previous-subword-boundary`,
- `super-cursor:move-to-next-subword-boundary`,
- `super-cursor:skip-leading-whitespace`,
- `super-cursor:move-to-beginning-of-next-paragraph`,
- `super-cursor:move-to-beginning-of-previous-paragraph`,
- `super-cursor:select-right`,
- `super-cursor:select-left`,
- `super-cursor:select-up`,
- `super-cursor:select-down`,
- `super-cursor:select-to-top`,
- `super-cursor:select-to-bottom`,
- `super-cursor:select-to-beginning-of-line`,
- `super-cursor:select-to-first-character-of-line`,
- `super-cursor:select-to-end-of-line`,
- `super-cursor:select-to-end-of-buffer-line`,
- `super-cursor:select-to-beginning-of-word`,
- `super-cursor:select-to-end-of-word`,
- `super-cursor:select-to-beginning-of-next-word`,
- `super-cursor:select-to-previous-word-boundary`,
- `super-cursor:select-to-next-word-boundary`,
- `super-cursor:select-to-previous-subword-boundary`,
- `super-cursor:select-to-nextsubword-boundary`,
- `super-cursor:select-to-beginning-of-next-paragraph`,
- `super-cursor:select-to-beginning-of-previous-paragraph`,
- `super-cursor:select-word`,
- `super-cursor:expand-over-word`,
- `super-cursor:expand-over-line`,
- `super-cursor:outdent-selected-rows`,
- `super-cursor:toggle-line-comments`,
- `super-cursor:indent-selected-rows`.

## Power mode

Power mode isolates all editor operations to the active cursor only. When enabled, built-in commands (typing, deletion, indentation, etc.) as well as `super-cursor` move and select commands affect only the active cursor, leaving all other cursors untouched.

There are two scopes:

- **Global** (`super-cursor:power-global` <kbd>Ctrl+Alt+Insert</kbd>): enables power mode for all open editors and any editor opened afterward. The <kbd>⚡</kbd> status bar icon reflects this state and clicking it toggles global power mode.
- **Editor** (`super-cursor:power-editor` <kbd>Ctrl+Shift+Alt+Insert</kbd>): toggles power mode for the active editor only, independently of the global state.

Use cases:

- Adjust one cursor's position without disturbing the others before a coordinated edit.
- Delete or select text on a single cursor while keeping remaining cursors in place.

## Customization

The style can be adjusted according to user preferences in the `styles.less` file:

- e.g. change active cursor highlight color:

```less
atom-text-editor .cursors .cursor.super-cursor-highlight {
  border-left-color: @text-color-warning;
}
```

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
