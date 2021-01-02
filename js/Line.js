import {Cursor} from './Cursor.js'

export class Line {

  constructor(editor) {

    this.editor = editor
    this.$line = this.createLine()

  }

  createLine() {

    const $line = document.createElement('div')
    $line.classList.add('line')
    this.editor.$editor.append($line)
    $line.append(this.editor.cursor.$cursor)
    
    return $line

  }

}