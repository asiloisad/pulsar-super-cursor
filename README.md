# super-cursor

A superset of commands to improve multi-cursor workflow. A package allows you to create multiple cursors anywhere in the text-editor (inc. mini) using only your keyboard. This package is intended for keyboard-only navigation.

![demo](https://github.com/asiloisad/pulsar-super-cursor/blob/master/assets/demo.gif?raw=true)

## Installation

To install `super-cursor` search for [super-cursor](https://web.pulsar-edit.dev/packages/super-cursor) in the Install pane of the Pulsar settings or run `ppm install super-cursor`. Alternatively, you can run `ppm install asiloisad/pulsar-super-cursor` to install a package directly from the Github repository.

## Features

- Create new cursor by command `super-cursor:toggle` (default `Ctrl-Alt-Enter`).
- Switch active cursor by commands `super-cursor:previous` (default `Ctrl-Alt-PageUp`) and `super-cursor:next` (default `Ctrl-Alt-PageDown`).
- Highlight active cursor if there are more than two cursors.
- Single cursor movement, selection and other commands, e.g. `super-cursor:move-up` (default `Ctrl-Alt-Up`).
- A predefined keyboard shortcuts for single cursor movement.
- Power mode (default `Ctrl-Alt-Insert`) allow you make all cursor operations, but only active cursor used.
- Cursor consolidation going to place last cursor at position of active cursor.
- Package is compatible with `overtype-mode`.
- If power mode is active, then class list of text-editor is extended by `super-cursor`.

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!
