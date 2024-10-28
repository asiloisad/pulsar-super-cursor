# super-cursor

A superset of commands to improve multi-cursor workflow. A package allows you to create multiple cursors anywhere in the text-editor (inc. mini) using only your keyboard. This package is intended for keyboard-only navigation.

![demo](https://github.com/bacadra/pulsar-super-cursor/blob/master/assets/demo.gif?raw=true)

A package features:

- create new cursor by command `super-cursor:toggle` (default `Ctrl-Alt-Enter`),
- switch between active cursor by commands `super-cursor:previous` (default `Ctrl-Alt-PageUp`) and `super-cursor:next` (default `Ctrl-Alt-PageDown`),
- highlight main cursor if there are more than two cursors,
- commands of single cursor, e.g. `super-cursor:move-up` (default `Ctrl-Alt-Up`),
- a predefined keyboard shortcuts for simple movement,
- added `power` mode allow you make all text operations, but only active cursor used,
- `consolidateSelections` upgraded to match super-cursor idea,
- text-editor class list is extended by `super-cursor` if power mode is active.

## Installation

To install `super-cursor` search for [super-cursor](https://web.pulsar-edit.dev/packages/super-cursor) in the Install pane of the Pulsar settings or run `ppm install super-cursor`. Alternatively, you can run `ppm install bacadra/pulsar-super-cursor` to install a package directly from the Github repository.

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!
