'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate() {
    // initialize
    this.target = null
    this.editor = null

    // commands
    this.disposables = new CompositeDisposable()
    this.disposables.add(atom.commands.add('atom-text-editor', {
      'super-cursor:power':
        (e) => { this.event(e) ; this.power() },
      'super-cursor:toggle':
        (e) => { this.event(e) ; this.toggle() },
      'super-cursor:previous':
        (e) => { this.event(e) ; this.previous() },
      'super-cursor:next':
        (e) => { this.event(e) ; this.next() },
      'super-cursor:reset':
        (e) => { this.event(e) ; this.reset() },
      'super-cursor:move-up':
        (e) => { this.event(e) ; this.moveUp() },
      'super-cursor:move-down':
        (e) => { this.event(e) ; this.moveDown() },
      'super-cursor:move-left':
        (e) => { this.event(e) ; this.moveLeft() },
      'super-cursor:move-right':
        (e) => { this.event(e) ; this.moveRight() },
      'super-cursor:move-to-top':
        (e) => { this.event(e) ; this.moveToTop() },
      'super-cursor:move-to-bottom':
        (e) => { this.event(e) ; this.moveToBottom() },
      'super-cursor:move-to-beginning-of-screen-line':
        (e) => { this.event(e) ; this.moveToBeginningOfScreenLine() },
      'super-cursor:move-to-beginning-of-line':
        (e) => { this.event(e) ; this.moveToBeginningOfLine() },
      'super-cursor:move-to-first-character-of-line':
        (e) => { this.event(e) ; this.moveToFirstCharacterOfLine() },
      'super-cursor:move-to-end-of-screen-line':
        (e) => { this.event(e) ; this.moveToEndOfScreenLine() },
      'super-cursor:move-to-end-of-line':
        (e) => { this.event(e) ; this.moveToEndOfLine() },
      'super-cursor:move-to-beginning-of-word':
        (e) => { this.event(e) ; this.moveToBeginningOfWord() },
      'super-cursor:move-to-end-of-word':
        (e) => { this.event(e) ; this.moveToEndOfWord() },
      'super-cursor:move-to-beginning-of-next-word':
        (e) => { this.event(e) ; this.moveToBeginningOfNextWord() },
      'super-cursor:move-to-previous-word-boundary':
        (e) => { this.event(e) ; this.moveToPreviousWordBoundary() },
      'super-cursor:move-to-next-word-boundary':
        (e) => { this.event(e) ; this.moveToNextWordBoundary() },
      'super-cursor:move-to-previous-subword-boundary':
        (e) => { this.event(e) ; this.moveToPreviousSubwordBoundary() },
      'super-cursor:move-to-next-subword-boundary':
        (e) => { this.event(e) ; this.moveToNextSubwordBoundary() },
      'super-cursor:skip-leading-whitespace':
        (e) => { this.event(e) ; this.skipLeadingWhitespace() },
      'super-cursor:move-to-beginning-of-next-paragraph':
        (e) => { this.event(e) ; this.moveToBeginningOfNextParagraph() },
      'super-cursor:move-to-beginning-of-previous-paragraph':
        (e) => { this.event(e) ; this.moveToBeginningOfPreviousParagraph() },
      'super-cursor:select-right':
        (e) => { this.event(e) ; this.selectRight() },
      'super-cursor:select-left':
        (e) => { this.event(e) ; this.selectLeft() },
      'super-cursor:select-up':
        (e) => { this.event(e) ; this.selectUp() },
      'super-cursor:select-down':
        (e) => { this.event(e) ; this.selectDown() },
      'super-cursor:select-to-top':
        (e) => { this.event(e) ; this.selectToTop() },
      'super-cursor:select-to-bottom':
        (e) => { this.event(e) ; this.selectToBottom() },
      'super-cursor:select-to-beginning-of-line':
        (e) => { this.event(e) ; this.selectToBeginningOfLine() },
      'super-cursor:select-to-first-character-of-line':
        (e) => { this.event(e) ; this.selectToFirstCharacterOfLine() },
      'super-cursor:select-to-end-of-line':
        (e) => { this.event(e) ; this.selectToEndOfLine() },
      'super-cursor:select-to-end-of-buffer-line':
        (e) => { this.event(e) ; this.selectToEndOfBufferLine() },
      'super-cursor:select-to-beginning-of-word':
        (e) => { this.event(e) ; this.selectToBeginningOfWord() },
      'super-cursor:select-to-end-of-word':
        (e) => { this.event(e) ; this.selectToEndOfWord() },
      'super-cursor:select-to-beginning-of-next-word':
        (e) => { this.event(e) ; this.selectToBeginningOfNextWord() },
      'super-cursor:select-to-previous-word-boundary':
        (e) => { this.event(e) ; this.selectToPreviousWordBoundary() },
      'super-cursor:select-to-next-word-boundary':
        (e) => { this.event(e) ; this.selectToNextWordBoundary() },
      'super-cursor:select-to-previous-subword-boundary':
        (e) => { this.event(e) ; this.selectToPreviousSubwordBoundary() },
      'super-cursor:select-to-nextsubword-boundary':
        (e) => { this.event(e) ; this.selectToNextSubwordBoundary() },
      'super-cursor:select-to-beginning-of-next-paragraph':
        (e) => { this.event(e) ; this.selectToBeginningOfNextParagraph() },
      'super-cursor:select-to-beginning-of-previous-paragraph':
        (e) => { this.event(e) ; this.selectToBeginningOfPreviousParagraph() },
      'super-cursor:select-word':
        (e) => { this.event(e) ; this.selectWord() },
      'super-cursor:expand-over-word':
        (e) => { this.event(e) ; this.expandOverWord() },
      'super-cursor:expand-over-line':
        (e) => { this.event(e) ; this.expandOverLine() },
      'super-cursor:outdent-selected-rows':
        (e) => { this.event(e) ; this.outdentSelectedRows() },
      'super-cursor:toggle-line-comments':
        (e) => { this.event(e) ; this.toggleLineComments() },
      'super-cursor:indent-selected-rows':
        (e) => { this.event(e) ; this.indentSelectedRows() },
    }))

    // observe text editors
    this.disposables.add(
      atom.workspace.observeTextEditors((editor) => { this.update(editor) })
    )
  },

  event(e) {
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

    // update editor
    this.update(editor)
  },

  update(editor) {
    this.editor = editor

    // check if patch is needed
    if (Number.isInteger(editor.cursorIndex)) {
      return
    }

    // patch editor
    editor.cursorIndex = 0 ; editor.cursorPower = false ; editor.cursorDecoration = null

    // extra function
    editor.getSuperCursor = () => {
      return editor.cursors[editor.cursors.length-1-editor.cursorIndex]
    }

    // overwrite
    editor.getCursors = () => {
      editor.createLastSelectionIfNeeded()
      if (editor.cursorPower) {
        return [editor.cursors[editor.cursors.length-1-editor.cursorIndex]]
      } else {
        return editor.cursors.slice()
      }
    }

    // overwrite
    editor.getLastCursor = () => {
      editor.createLastSelectionIfNeeded()
      return editor.cursors[Math.max(0, editor.cursors.length-1-editor.cursorIndex)]
    }

    // extra function
    editor.getSuperSelection = () => {
      return editor.selections[editor.selections.length-1-editor.cursorIndex]
    }

    // overwrite
    editor.getSelections = () => {
      editor.createLastSelectionIfNeeded()
      if (editor.cursorPower) {
        return [editor.selections[editor.cursors.length-1-editor.cursorIndex]]
      } else {
        return editor.selections.slice()
      }
    }

    // overwrite
    editor.getLastSelection = () => {
      editor.createLastSelectionIfNeeded()
      return editor.selections[Math.max(0, editor.cursors.length-1-editor.cursorIndex)]
    }

    // save original
    editor._consolidateSelections = editor.consolidateSelections

    // create upgraded one
    editor.consolidateSelections = () => {
      this.power(false)
      const selections = editor.getSelections()
      if (selections.length > 1) {
        let i=0 ; let ireq = editor.cursors.length-1-editor.cursorIndex
        for (let selection of selections) {
          if (i!=ireq) { selection.destroy() }
          i = i+1
        }
        selections[0].autoscroll({ center:false })
        editor.cursorHighlight()
        return true;
      } else {
        return false;
      }
    }

    // custom highlight
    editor.cursorHighlight = () => {
      if (editor.cursorDecoration) { editor.cursorDecoration.destroy() }
      if (editor.cursors.length<=1) { return }
      let marker = editor.getSuperCursor().getMarker()
      let decoration = editor.decorateMarker(marker,
        { type:'cursor', class:'super-cursor-highlight' })
      editor.cursorDecoration = decoration
    }

    // observe count of cursors
    editor.disposables.add(
      editor.onDidAddCursor(() => {
        editor.cursorIndex = 0
        editor.cursorHighlight()
      }),
      editor.onDidRemoveCursor(() => {
        editor.cursorIndex = 0
        editor.cursorHighlight()
      }),
    )
  },

  deactivate() {
    for (let editor in atom.workspace.getTextEditors()) {
      editor.cursorIndex = 0
      editor.cursorPower = false
      editor.consolidateSelections = editor._consolidateSelections
    }
    this.disposables.dispose()
  },

  power(state) {
    if (typeof state==='undefined') {
      state = !this.editor.cursorPower
    }
    if (this.editor.cursorPower = state) {
      this.editor.element.classList.add('super-cursor')
    } else {
      this.editor.element.classList.remove('super-cursor')
    }
  },

  previous() {
    this.editor.cursorIndex = Math.max(0, Math.min(this.editor.cursors.length-1, this.editor.cursorIndex+1))
    this.editor.cursorHighlight()
  },

  next() {
    this.editor.cursorIndex = Math.max(0, Math.min(this.editor.cursors.length-1, this.editor.cursorIndex-1))
    this.editor.cursorHighlight()
  },

  toggle() {
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
          let marker = this.editor.selectionsMarkerLayer.markBufferPosition(
            [i,j], { invalidate:'never' })
          if (marker) {
            this.editor.getLastCursor().setBufferPosition(buffPos)
            this.editor.cursorHighlight()
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
