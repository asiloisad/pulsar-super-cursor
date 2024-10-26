# super-cursor

A superset of commands to improve multi-cursor workflow. A package allows you to create multiple cursors anywhere in the text-editor (inc. mini) using only your keyboard. Commands for moving and selecting the last cursor have been added. This package is intended for keyboard-only navigation.

![demo](https://github.com/bacadra/pulsar-super-cursor/blob/master/assets/demo.gif?raw=true)

A package features:

- add new cursor by command `super-cursor:toggle` (default `Ctrl-Alt-Enter`),
- switch between active cursor by commands `super-cursor:next` (default `Ctrl-Alt-PageUp`) and `super-cursor:previous` (default `Ctrl-Alt-PageDown`),
- highlight recently activeted (or added) cursor,
- commands of single cursor, e.g. `super-cursor:move-up` (default `Ctrl-Alt-Up`),
- a predefined keyboard shortcuts.

## Installation

To install `super-cursor` search for [super-cursor](https://web.pulsar-edit.dev/packages/super-cursor) in the Install pane of the Pulsar settings or run `ppm install super-cursor`. Alternatively, you can run `ppm install bacadra/pulsar-super-cursor` to install a package directly from the Github repository.

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!

## Notes

A package has been inspired by [multi-cursor-plus](https://github.com/kankaristo/atom-multi-cursor-plus), but decaffeinated, few fixes applied and new commands added.
