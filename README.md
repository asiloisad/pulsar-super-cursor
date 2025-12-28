# super-cursor

Keyboard-driven multi-cursor creation and navigation commands.

![demo](https://github.com/asiloisad/pulsar-super-cursor/blob/master/assets/demo.gif?raw=true)

## Features

- **Cursor creation**: Toggle new cursors anywhere with `super-cursor:toggle` (`Ctrl+Alt+Enter`).
- **Cursor navigation**: Switch between cursors with `super-cursor:previous` (`Ctrl+Alt+PageUp`) and `super-cursor:next` (`Ctrl+Alt+PageDown`).
- **Active cursor highlight**: Visual indicator when multiple cursors exist.
- **Single cursor movement**: Individual cursor movement and selection commands (e.g., `super-cursor:move-up` with `Ctrl+Alt+Up`).
- **Power mode**: Temporarily isolate active cursor for all operations (`Ctrl+Alt+Insert`).
- **Cursor consolidation**: Merge all cursors to the active cursor position.
- **Overtype compatibility**: Works with [overtype-mode](https://github.com/asiloisad/pulsar-overtype-mode).

## Installation

To install `super-cursor` search for [super-cursor](https://web.pulsar-edit.dev/packages/super-cursor) in the Install pane of the Pulsar settings or run `ppm install super-cursor`. Alternatively, you can run `ppm install asiloisad/pulsar-super-cursor` to install a package directly from the GitHub repository.

## Customization

The style can be adjusted according to user preferences in the `styles.less` file:

- e.g. change active cursor highlight color:

```less
atom-text-editor .cursors .cursor.super-cursor-highlight {
  border-left-color: @text-color-warning;
}
```

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
