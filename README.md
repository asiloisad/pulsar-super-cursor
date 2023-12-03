# single-cursor

<p align="center">
  <a href="https://github.com/bacadra/pulsar-single-cursor/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/pulsar-single-cursor?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/pulsar-single-cursor/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/pulsar-single-cursor?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/pulsar-single-cursor/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/pulsar-single-cursor?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/pulsar-single-cursor/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/pulsar-single-cursor?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

![demo](https://github.com/bacadra/pulsar-single-cursor/blob/master/assets/demo.gif?raw=true)

A pacakge allows you to create multiple cursors anywhere in the buffer, using only your keyboard. Commands of movement and selection of only last cursor has been added. This package is meant for keyboard only navigation.

A package features:
* add new cursor by command `single-cursor:toggle` (default `Ctrl-Alt-Enter`),
* switch between active cursor by commands `single-cursor:next` (default `Ctrl-Alt-PageUp`) and `single-cursor:previous` (default `Ctrl-Alt-PageDown`),
* highlight active cursor,
* do action of single cursor, e.g. `single-cursor:move-up` (default `Ctrl-Alt-Up`),
* a predefined kemap.

## Installation

To install `single-cursor` search for [single-cursor](https://web.pulsar-edit.dev/packages/single-cursor) in the Install pane of the Pulsar settings or run `ppm install single-cursor`. Alternatively, you can run `ppm install bacadra/pulsar-single-cursor` to install a package directly from the Github repository.

# Contributing [🍺](https://www.buymeacoffee.com/asiloisad)

If you have any ideas on how to improve the package, spot any bugs, or would like to support the development of new features, please feel free to share them via GitHub.

## Notes

A package has been inspired by [multi-cursor-plus](https://github.com/kankaristo/atom-multi-cursor-plus), but decaffeinated, some problems has been resolved and new options added.
