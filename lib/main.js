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
      'super-cursor:power':
        (e) => { this.update(e) ; this.power() },
      'super-cursor:toggle':
        (e) => { this.update(e) ; this.toggle() },
      'super-cursor:previous':
        (e) => { this.update(e) ; this.previous() },
      'super-cursor:next':
        (e) => { this.update(e) ; this.next() },
      'super-cursor:reset':
        (e) => { this.update(e) ; this.reset() },
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

    // check if patch is needed
    if (Number.isInteger(editor.cursorIndex)) {
      return
    }

    // patch editor
    editor.cursorIndex = 0 ; editor.cursorPower = false

    editor.getSuperCursor = () => {
      return this.editor.cursors[this.editor.cursors.length-1-this.editor.cursorIndex]
    }

    editor.getCursors = () => {
      editor.createLastSelectionIfNeeded()
      if (editor.cursorPower) {
        return [editor.cursors[editor.cursors.length-1-editor.cursorIndex]]
      } else {
        return editor.cursors.slice()
      }
    }

    editor.getLastCursor = () => {
      editor.createLastSelectionIfNeeded()
      return editor.cursors[Math.max(0, editor.cursors.length-1-editor.cursorIndex)]
    }

    editor.getSuperSelection = () => {
      return this.editor.selections[this.editor.selections.length-1-this.editor.cursorIndex]
    }

    editor.getSelections = () => {
      editor.createLastSelectionIfNeeded()
      if (editor.cursorPower) {
        return [editor.selections[editor.cursors.length-1-editor.cursorIndex]]
      } else {
        return editor.selections.slice()
      }
    }

    editor.getLastSelection = () => {
      editor.createLastSelectionIfNeeded()
      return editor.selections[Math.max(0, editor.cursors.length-1-editor.cursorIndex)]
    }

    editor.disposables.add(
      editor.onDidAddCursor(() => { editor.cursorIndex = 0 }),
      editor.onDidRemoveCursor(() => { editor.cursorIndex = 0 }),
    )
  },

  deactivate() {
    this.disposables.dispose()
  },

  power() {
    this.editor.cursorPower = !this.editor.cursorPower
  },

  previous() {
    this.editor.cursorIndex = Math.max(0, Math.min(this.editor.cursors.length-1, this.editor.cursorIndex+1))
    this.highlight()
  },

  next() {
    this.editor.cursorIndex = Math.max(0, Math.min(this.editor.cursors.length-1, this.editor.cursorIndex-1))
    this.highlight()
  },

  reset() {
    this.editor.cursorIndex = 0
    this.editor.cursorPower = false
  },

  highlight() {
    if (this.cursorDecoration) { this.cursorDecoration.destroy() }
    let marker = this.editor.getSuperCursor().getMarker()
    let decoration = this.editor.decorateMarker(marker, { type:'cursor', class:'super-cursor-highlight' })
    this.cursorDecoration = decoration
    setTimeout(() => { decoration.destroy() }, 2000)
  },

  toggle() {
    if (this.cursorDecoration) {
      this.cursorDecoration.destroy()
    }
    if (cursor = this.editor.getSuperCursor()) {
      let selection = this.editor.getSuperSelection()
      let buffPos = cursor.getBufferPosition()
      for (let isel of this.editor.selections) {
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
    if (cursor = this.editor.getSuperCursor()) { cursor.moveUp() }
  },

  moveDown() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveDown() }
  },

  moveLeft() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveLeft() }
  },

  moveRight() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveRight() }
  },

  moveToTop() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToTop() }
  },

  moveToBottom() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBottom() }
  },

  moveToBeginningOfScreenLine() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfScreenLine() }
  },

  moveToBeginningOfLine() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfLine() }
  },

  moveToFirstCharacterOfLine() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToFirstCharacterOfLine() }
  },

  moveToEndOfScreenLine() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToEndOfScreenLine() }
  },

  moveToEndOfLine() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToEndOfLine() }
  },

  moveToBeginningOfWord() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfWord() }
  },

  moveToEndOfWord() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToEndOfWord() }
  },

  moveToBeginningOfNextWord() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfNextWord() }
  },

  moveToPreviousWordBoundary() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToPreviousWordBoundary() }
  },

  moveToNextWordBoundary() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToNextWordBoundary() }
  },

  moveToPreviousSubwordBoundary() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToPreviousSubwordBoundary() }
  },

  moveToNextSubwordBoundary() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToNextSubwordBoundary() }
  },

  skipLeadingWhitespace() {
    if (cursor = this.editor.getSuperCursor()) { cursor.skipLeadingWhitespace() }
  },

  moveToBeginningOfNextParagraph() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfNextParagraph() }
  },

  moveToBeginningOfPreviousParagraph() {
    if (cursor = this.editor.getSuperCursor()) { cursor.moveToBeginningOfPreviousParagraph() }
  },

  selectRight() {
    if (selection = this.editor.getSuperSelection()) { selection.selectRight() }
  },

  selectLeft() {
    if (selection = this.editor.getSuperSelection()) { selection.selectLeft() }
  },

  selectUp() {
    if (selection = this.editor.getSuperSelection()) { selection.selectUp() }
  },

  selectDown() {
    if (selection = this.editor.getSuperSelection()) { selection.selectDown() }
  },

  selectToTop() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToTop() }
  },

  selectToBottom() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBottom() }
  },

  selectToBeginningOfLine() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBeginningOfLine() }
  },

  selectToFirstCharacterOfLine() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToFirstCharacterOfLine() }
  },

  selectToEndOfLine() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToEndOfLine() }
  },

  selectToEndOfBufferLine() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToEndOfBufferLine() }
  },

  selectToBeginningOfWord() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBeginningOfWord() }
  },

  selectToEndOfWord() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToEndOfWord() }
  },

  selectToBeginningOfNextWord() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBeginningOfNextWord() }
  },

  selectToPreviousWordBoundary() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToPreviousWordBoundary() }
  },

  selectToNextWordBoundary() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToNextWordBoundary() }
  },

  selectToPreviousSubwordBoundary() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToPreviousSubwordBoundary() }
  },

  selectToNextSubwordBoundary() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToNextSubwordBoundary() }
  },

  selectToBeginningOfNextParagraph() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBeginningOfNextParagraph() }
  },

  selectToBeginningOfPreviousParagraph() {
    if (selection = this.editor.getSuperSelection()) { selection.selectToBeginningOfPreviousParagraph() }
  },

  selectWord() {
    if (selection = this.editor.getSuperSelection()) { selection.selectWord() }
  },

  expandOverWord() {
    if (selection = this.editor.getSuperSelection()) { selection.expandOverWord() }
  },

  expandOverLine() {
    if (selection = this.editor.getSuperSelection()) { selection.expandOverLine() }
  },

  outdentSelectedRows() {
    if (selection = this.editor.getSuperSelection()) { selection.outdentSelectedRows() }
  },

  toggleLineComments() {
    if (selection = this.editor.getSuperSelection()) { selection.toggleLineComments() }
  },

  indentSelectedRows() {
    if (selection = this.editor.getSuperSelection()) { selection.indentSelectedRows() }
  },
}
