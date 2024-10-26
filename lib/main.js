'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate() {
    // initialize
    this.target = null
    this.editor = null
    this.cursorDecoration = null

    // commands
    this.disposables = new CompositeDisposable()
    this.disposables.add(atom.commands.add('atom-text-editor', {
      'super-cursor:toggle':
        (e) => { this.update(e) ; this.toggle() },
      'super-cursor:previous':
        (e) => { this.update(e) ; this.previous() },
      'super-cursor:next':
        (e) => { this.update(e) ; this.next() },
      'super-cursor:highlight':
        (e) => { this.update(e) ; this.highlight() },
      'super-cursor:move-up':
        (e) => { this.update(e) ; this.moveUp() },
      'super-cursor:move-down':
        (e) => { this.update(e) ; this.moveDown() },
      'super-cursor:move-left':
        (e) => { this.update(e) ; this.moveLeft() },
      'super-cursor:move-right':
        (e) => { this.update(e) ; this.moveRight() },
      'super-cursor:move-to-top':
        (e) => { this.update(e) ; this.moveToTop() },
      'super-cursor:move-to-bottom':
        (e) => { this.update(e) ; this.moveToBottom() },
      'super-cursor:move-to-beginning-of-screen-line':
        (e) => { this.update(e) ; this.moveToBeginningOfScreenLine() },
      'super-cursor:move-to-beginning-of-line':
        (e) => { this.update(e) ; this.moveToBeginningOfLine() },
      'super-cursor:move-to-first-character-of-line':
        (e) => { this.update(e) ; this.moveToFirstCharacterOfLine() },
      'super-cursor:move-to-end-of-screen-line':
        (e) => { this.update(e) ; this.moveToEndOfScreenLine() },
      'super-cursor:move-to-end-of-line':
        (e) => { this.update(e) ; this.moveToEndOfLine() },
      'super-cursor:move-to-beginning-of-word':
        (e) => { this.update(e) ; this.moveToBeginningOfWord() },
      'super-cursor:move-to-end-of-word':
        (e) => { this.update(e) ; this.moveToEndOfWord() },
      'super-cursor:move-to-beginning-of-next-word':
        (e) => { this.update(e) ; this.moveToBeginningOfNextWord() },
      'super-cursor:move-to-previous-word-boundary':
        (e) => { this.update(e) ; this.moveToPreviousWordBoundary() },
      'super-cursor:move-to-next-word-boundary':
        (e) => { this.update(e) ; this.moveToNextWordBoundary() },
      'super-cursor:move-to-previous-subword-boundary':
        (e) => { this.update(e) ; this.moveToPreviousSubwordBoundary() },
      'super-cursor:move-to-next-subword-boundary':
        (e) => { this.update(e) ; this.moveToNextSubwordBoundary() },
      'super-cursor:skip-leading-whitespace':
        (e) => { this.update(e) ; this.skipLeadingWhitespace() },
      'super-cursor:move-to-beginning-of-next-paragraph':
        (e) => { this.update(e) ; this.moveToBeginningOfNextParagraph() },
      'super-cursor:move-to-beginning-of-previous-paragraph':
        (e) => { this.update(e) ; this.moveToBeginningOfPreviousParagraph() },
      'super-cursor:select-right':
        (e) => { this.update(e) ; this.selectRight() },
      'super-cursor:select-left':
        (e) => { this.update(e) ; this.selectLeft() },
      'super-cursor:select-up':
        (e) => { this.update(e) ; this.selectUp() },
      'super-cursor:select-down':
        (e) => { this.update(e) ; this.selectDown() },
      'super-cursor:select-to-top':
        (e) => { this.update(e) ; this.selectToTop() },
      'super-cursor:select-to-bottom':
        (e) => { this.update(e) ; this.selectToBottom() },
      'super-cursor:select-to-beginning-of-line':
        (e) => { this.update(e) ; this.selectToBeginningOfLine() },
      'super-cursor:select-to-first-character-of-line':
        (e) => { this.update(e) ; this.selectToFirstCharacterOfLine() },
      'super-cursor:select-to-end-of-line':
        (e) => { this.update(e) ; this.selectToEndOfLine() },
      'super-cursor:select-to-end-of-buffer-line':
        (e) => { this.update(e) ; this.selectToEndOfBufferLine() },
      'super-cursor:select-to-beginning-of-word':
        (e) => { this.update(e) ; this.selectToBeginningOfWord() },
      'super-cursor:select-to-end-of-word':
        (e) => { this.update(e) ; this.selectToEndOfWord() },
      'super-cursor:select-to-beginning-of-next-word':
        (e) => { this.update(e) ; this.selectToBeginningOfNextWord() },
      'super-cursor:select-to-previous-word-boundary':
        (e) => { this.update(e) ; this.selectToPreviousWordBoundary() },
      'super-cursor:select-to-next-word-boundary':
        (e) => { this.update(e) ; this.selectToNextWordBoundary() },
      'super-cursor:select-to-previous-subword-boundary':
        (e) => { this.update(e) ; this.selectToPreviousSubwordBoundary() },
      'super-cursor:select-to-nextsubword-boundary':
        (e) => { this.update(e) ; this.selectToNextSubwordBoundary() },
      'super-cursor:select-to-beginning-of-next-paragraph':
        (e) => { this.update(e) ; this.selectToBeginningOfNextParagraph() },
      'super-cursor:select-to-beginning-of-previous-paragraph':
        (e) => { this.update(e) ; this.selectToBeginningOfPreviousParagraph() },
      'super-cursor:select-word':
        (e) => { this.update(e) ; this.selectWord() },
      'super-cursor:expand-over-word':
        (e) => { this.update(e) ; this.expandOverWord() },
      'super-cursor:expand-over-line':
        (e) => { this.update(e) ; this.expandOverLine() },
      'super-cursor:outdent-selected-rows':
        (e) => { this.update(e) ; this.outdentSelectedRows() },
      'super-cursor:toggle-line-comments':
        (e) => { this.update(e) ; this.toggleLineComments() },
      'super-cursor:indent-selected-rows':
        (e) => { this.update(e) ; this.indentSelectedRows() },
    }))
  },

  deactivate () {
    this.disposables.dispose()
  },

  update(e) {
    // target change if needed
    if (e.target==this.target) {
      return
    }
    this.target = e.target

    // get new editor
    const element = this.target.closest('atom-text-editor')
    if (!element) { return }
    const editor = element.getModel()
    if (!editor) { return }
    this.editor = editor

    // check patch
    if (Number.isInteger(this.editor.superCursorOffset)) {
      return
    }

    // patch editor if needed
    this.editor.superCursorOffset = 0
    this.editor.disposables.add(
      this.editor.onDidAddCursor   (() => { this.editor.superCursorOffset = 0 }),
      this.editor.onDidRemoveCursor(() => { this.editor.superCursorOffset = 0 }),
    )
  },

  previous() {
    this.editor.superCursorOffset = Math.max(0, Math.min(this.editor.getCursors().length-1, this.editor.superCursorOffset+1))
    this.highlight()
  },

  next() {
    this.editor.superCursorOffset = Math.max(0, Math.min(this.editor.getCursors().length-1, this.editor.superCursorOffset-1))
    this.highlight()
  },

  getCursor() {
    let items = this.editor.getCursors()
    return items[items.length-this.editor.superCursorOffset-1]
  },

  getSelection() {
    let items = this.editor.getSelections()
    return items[items.length-this.editor.superCursorOffset-1]
  },

  highlight() {
    if (this.cursorDecoration) { this.cursorDecoration.destroy() }
    let marker = this.getCursor().getMarker()
    let decoration = this.editor.decorateMarker(marker, { type:'cursor', class:'super-cursor-switch' })
    this.cursorDecoration = decoration
    setTimeout(() => { decoration.destroy() }, 2000)
  },

  toggle() {
    if (this.cursorDecoration) {
      this.cursorDecoration.destroy()
    }
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
      for (let i=0; i<=lastRow; i++) {
        for (let j=0; j<=this.editor.lineTextForBufferRow(i).length; j++) {
          let marker = this.editor.selectionsMarkerLayer.markBufferPosition([i,j], { invalidate: 'never' })
          if (marker) {
            this.editor.getLastCursor().setBufferPosition(buffPos)
            this.highlight()
            return
          }
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
