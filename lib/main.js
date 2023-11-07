'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate() {
    this.disposables = new CompositeDisposable()
    this.disposables.add(
      atom.commands.add('atom-text-editor:not([mini])', {
        'single-cursor:toggle':
          () => this.toggle(),
        'single-cursor:previous':
          () => this.previous(),
        'single-cursor:next':
          () => this.next(),
        'single-cursor:highlight':
          () => this.highlight(),
        'single-cursor:move-up':
          () => this.moveUp(),
        'single-cursor:move-down':
          () => this.moveDown(),
        'single-cursor:move-left':
          () => this.moveLeft(),
        'single-cursor:move-right':
          () => this.moveRight(),
        'single-cursor:move-to-top':
          () => this.moveToTop(),
        'single-cursor:move-to-bottom':
          () => this.moveToBottom(),
        'single-cursor:move-to-beginning-of-screen-line':
          () => this.moveToBeginningOfScreenLine(),
        'single-cursor:move-to-beginning-of-line':
          () => this.moveToBeginningOfLine(),
        'single-cursor:move-to-first-character-of-line':
          () => this.moveToFirstCharacterOfLine(),
        'single-cursor:move-to-end-of-screen-line':
          () => this.moveToEndOfScreenLine(),
        'single-cursor:move-to-end-of-line':
          () => this.moveToEndOfLine(),
        'single-cursor:move-to-beginning-of-word':
          () => this.moveToBeginningOfWord(),
        'single-cursor:move-to-end-of-word':
          () => this.moveToEndOfWord(),
        'single-cursor:move-to-beginning-of-next-word':
          () => this.moveToBeginningOfNextWord(),
        'single-cursor:move-to-previous-word-boundary':
          () => this.moveToPreviousWordBoundary(),
        'single-cursor:move-to-next-word-boundary':
          () => this.moveToNextWordBoundary(),
        'single-cursor:move-to-previous-subword-boundary':
          () => this.moveToPreviousSubwordBoundary(),
        'single-cursor:move-to-next-subword-boundary':
          () => this.moveToNextSubwordBoundary(),
        'single-cursor:skip-leading-whitespace':
          () => this.skipLeadingWhitespace(),
        'single-cursor:move-to-beginning-of-next-paragraph':
          () => this.moveToBeginningOfNextParagraph(),
        'single-cursor:move-to-beginning-of-previous-paragraph':
          () => this.moveToBeginningOfPreviousParagraph(),
        'single-cursor:select-right':
          () => this.selectRight(),
        'single-cursor:select-left':
          () => this.selectLeft(),
        'single-cursor:select-up':
          () => this.selectUp(),
        'single-cursor:select-down':
          () => this.selectDown(),
        'single-cursor:select-to-top':
          () => this.selectToTop(),
        'single-cursor:select-to-bottom':
          () => this.selectToBottom(),
        'single-cursor:select-to-beginning-of-line':
          () => this.selectToBeginningOfLine(),
        'single-cursor:select-to-first-character-of-line':
          () => this.selectToFirstCharacterOfLine(),
        'single-cursor:select-to-end-of-line':
          () => this.selectToEndOfLine(),
        'single-cursor:select-to-end-of-buffer-line':
          () => this.selectToEndOfBufferLine(),
        'single-cursor:select-to-beginning-of-word':
          () => this.selectToBeginningOfWord(),
        'single-cursor:select-to-end-of-word':
          () => this.selectToEndOfWord(),
        'single-cursor:select-to-beginning-of-next-word':
          () => this.selectToBeginningOfNextWord(),
        'single-cursor:select-to-previous-word-boundary':
          () => this.selectToPreviousWordBoundary(),
        'single-cursor:select-to-next-word-boundary':
          () => this.selectToNextWordBoundary(),
        'single-cursor:select-to-previous-subword-boundary':
          () => this.selectToPreviousSubwordBoundary(),
        'single-cursor:select-to-nextsubword-boundary':
          () => this.selectToNextSubwordBoundary(),
        'single-cursor:select-to-beginning-of-next-paragraph':
          () => this.selectToBeginningOfNextParagraph(),
        'single-cursor:select-to-beginning-of-previous-paragraph':
          () => this.selectToBeginningOfPreviousParagraph(),
        'single-cursor:select-word':
          () => this.selectWord(),
        'single-cursor:expand-over-word':
          () => this.expandOverWord(),
        'single-cursor:expand-over-line':
          () => this.expandOverLine(),
        'single-cursor:outdent-selected-rows':
          () => this.outdentSelectedRows(),
        'single-cursor:toggle-line-comments':
          () => this.toggleLineComments(),
        'single-cursor:indent-selected-rows':
          () => this.indentSelectedRows(),
      }),
    )
    this.disposables.add(
      atom.workspace.observeTextEditors((editor) => {
        editor.singleOffset = 0
        editor.disposables.add(
          editor.onDidAddCursor   (() => { editor.singleOffset = 0 }),
          editor.onDidRemoveCursor(() => { editor.singleOffset = 0 }),
        )
      }),
      atom.workspace.observeActiveTextEditor((editor) => {
        this.editor = editor
      }),
    )
    this.cursorDecoration = null
  },

  deactivate () {
    this.disposables.dispose()
  },

  previous() {
    this.editor.singleOffset = Math.max(0, Math.min(this.editor.getCursors().length-1, this.editor.singleOffset+1))
    this.highlight()
  },

  next() {
    this.editor.singleOffset = Math.max(0, Math.min(this.editor.getCursors().length-1, this.editor.singleOffset-1))
    this.highlight()
  },

  getCursor() {
    let items = this.editor.getCursors()
    return items[items.length-this.editor.singleOffset-1]
  },

  getSelection() {
    let items = this.editor.getSelections()
    return items[items.length-this.editor.singleOffset-1]
  },

  highlight() {
    if (this.cursorDecoration) { this.cursorDecoration.destroy() }
    let marker = this.getCursor().getMarker()
    let decoration = this.editor.decorateMarker(marker, { type:'cursor', class:'single-cursor-switch' })
    this.cursorDecoration = decoration
    setTimeout(() => { decoration.destroy() }, 2000)
  },

  toggle() {
    if (cursor = this.getCursor()) {
      let selection = this.getSelection()
      let buffPos = cursor.getBufferPosition()
      for (let isel of this.editor.getSelections()) {
        if (isel==selection) {
          continue
        } else if (isel.getBufferRange().containsPoint(buffPos)) {
          isel.destroy()
          return
        }
      }
      let lastRow = this.editor.getLastBufferRow()
      for (let i=0; i<lastRow; i++) {
        let marker = this.editor.selectionsMarkerLayer.markBufferPosition([i,0], { invalidate: 'never' })
        if (marker) {
          this.editor.getLastCursor().setBufferPosition(buffPos)
          this.highlight()
          return
        }
      }
    }
  },

  moveUp() {
    if (cursor = this.getCursor()) { cursor.moveUp() }
  },

  moveDown() {
    if (cursor = this.getCursor()) { cursor.moveDown() }
  },

  moveLeft() {
    if (cursor = this.getCursor()) { cursor.moveLeft() }
  },

  moveRight() {
    if (cursor = this.getCursor()) { cursor.moveRight() }
  },

  moveToTop() {
    if (cursor = this.getCursor()) { cursor.moveToTop() }
  },

  moveToBottom() {
    if (cursor = this.getCursor()) { cursor.moveToBottom() }
  },

  moveToBeginningOfScreenLine() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfScreenLine() }
  },

  moveToBeginningOfLine() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfLine() }
  },

  moveToFirstCharacterOfLine() {
    if (cursor = this.getCursor()) { cursor.moveToFirstCharacterOfLine() }
  },

  moveToEndOfScreenLine() {
    if (cursor = this.getCursor()) { cursor.moveToEndOfScreenLine() }
  },

  moveToEndOfLine() {
    if (cursor = this.getCursor()) { cursor.moveToEndOfLine() }
  },

  moveToBeginningOfWord() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfWord() }
  },

  moveToEndOfWord() {
    if (cursor = this.getCursor()) { cursor.moveToEndOfWord() }
  },

  moveToBeginningOfNextWord() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfNextWord() }
  },

  moveToPreviousWordBoundary() {
    if (cursor = this.getCursor()) { cursor.moveToPreviousWordBoundary() }
  },

  moveToNextWordBoundary() {
    if (cursor = this.getCursor()) { cursor.moveToNextWordBoundary() }
  },

  moveToPreviousSubwordBoundary() {
    if (cursor = this.getCursor()) { cursor.moveToPreviousSubwordBoundary() }
  },

  moveToNextSubwordBoundary() {
    if (cursor = this.getCursor()) { cursor.moveToNextSubwordBoundary() }
  },

  skipLeadingWhitespace() {
    if (cursor = this.getCursor()) { cursor.skipLeadingWhitespace() }
  },

  moveToBeginningOfNextParagraph() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfNextParagraph() }
  },

  moveToBeginningOfPreviousParagraph() {
    if (cursor = this.getCursor()) { cursor.moveToBeginningOfPreviousParagraph() }
  },

  selectRight() {
    if (selection = this.getSelection()) { selection.selectRight() }
  },

  selectLeft() {
    if (selection = this.getSelection()) { selection.selectLeft() }
  },

  selectUp() {
    if (selection = this.getSelection()) { selection.selectUp() }
  },

  selectDown() {
    if (selection = this.getSelection()) { selection.selectDown() }
  },

  selectToTop() {
    if (selection = this.getSelection()) { selection.selectToTop() }
  },

  selectToBottom() {
    if (selection = this.getSelection()) { selection.selectToBottom() }
  },

  selectToBeginningOfLine() {
    if (selection = this.getSelection()) { selection.selectToBeginningOfLine() }
  },

  selectToFirstCharacterOfLine() {
    if (selection = this.getSelection()) { selection.selectToFirstCharacterOfLine() }
  },

  selectToEndOfLine() {
    if (selection = this.getSelection()) { selection.selectToEndOfLine() }
  },

  selectToEndOfBufferLine() {
    if (selection = this.getSelection()) { selection.selectToEndOfBufferLine() }
  },

  selectToBeginningOfWord() {
    if (selection = this.getSelection()) { selection.selectToBeginningOfWord() }
  },

  selectToEndOfWord() {
    if (selection = this.getSelection()) { selection.selectToEndOfWord() }
  },

  selectToBeginningOfNextWord() {
    if (selection = this.getSelection()) { selection.selectToBeginningOfNextWord() }
  },

  selectToPreviousWordBoundary() {
    if (selection = this.getSelection()) { selection.selectToPreviousWordBoundary() }
  },

  selectToNextWordBoundary() {
    if (selection = this.getSelection()) { selection.selectToNextWordBoundary() }
  },

  selectToPreviousSubwordBoundary() {
    if (selection = this.getSelection()) { selection.selectToPreviousSubwordBoundary() }
  },

  selectToNextSubwordBoundary() {
    if (selection = this.getSelection()) { selection.selectToNextSubwordBoundary() }
  },

  selectToBeginningOfNextParagraph() {
    if (selection = this.getSelection()) { selection.selectToBeginningOfNextParagraph() }
  },

  selectToBeginningOfPreviousParagraph() {
    if (selection = this.getSelection()) { selection.selectToBeginningOfPreviousParagraph() }
  },

  selectWord() {
    if (selection = this.getSelection()) { selection.selectWord() }
  },

  expandOverWord() {
    if (selection = this.getSelection()) { selection.expandOverWord() }
  },

  expandOverLine() {
    if (selection = this.getSelection()) { selection.expandOverLine() }
  },

  outdentSelectedRows() {
    if (selection = this.getSelection()) { selection.outdentSelectedRows() }
  },

  toggleLineComments() {
    if (selection = this.getSelection()) { selection.toggleLineComments() }
  },

  indentSelectedRows() {
    if (selection = this.getSelection()) { selection.indentSelectedRows() }
  },
}
