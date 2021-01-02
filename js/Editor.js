import {Sound} from './Sound.js'
import {Line} from './Line.js'
import {Cursor} from './Cursor.js'

export class Editor {

  constructor() {

    this.$editor = document.getElementById('editor')
    this.cursor = new Cursor()
    this.currentLine = new Line(this)
    this.clickSound = new Sound('sound/click.mp3')

    document.addEventListener('keydown', e => {
      const key = (e.key) ? e.key : String.fromCharCode(e.keyCode)
      this.keyDown(key)
    })
    
    document.addEventListener('keypress', e => {
      const key = (e.key) ? e.key : String.fromCharCode(e.keyCode)
      this.keyPress(key)
    })

    document.addEventListener('mouseup', e => {

      if (window.getSelection()) {
        const select = window.getSelection()
      }

    })

  }

  keyPress(key) {

    if (/[a-zA-Zа-яА-я0-9-_ ]/.test(key)) {

      this.clickSound.play()

      if(key === ' ') {
        key = '&nbsp;'
      }

      const $letter = document.createElement('span')
      $letter.classList.add('ltr')
      $letter.innerHTML = key

      this.cursor.print($letter)
      setTimeout(() => $letter.classList.add('added'), 5)

    }
    
  }

  keyDown(key) {

    this.clickSound.play()

    switch (key) {
      case 'Backspace':
        this.cursor.removeLetterPrevious()
        break

      case 'Delete':
        this.cursor.removeLetterNext()
        break

      case 'Space':
        keyPress(' ')
        break

      case 'ArrowLeft':
        this.cursor.moveToLeft()
        break

      case 'ArrowRight':
        this.cursor.moveToRight()
        break

      case 'Home':
        this.cursor.moveToStart()
        break

      case 'End':
        this.cursor.moveToEnd()
        break
    
      default:
        break
    }

  }

}