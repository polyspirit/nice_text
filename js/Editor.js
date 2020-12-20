export class Editor {

  constructor() {

    this.editor = document.getElementById('editor')
    this.cursor = document.getElementById('cursor')

    setInterval(() => {
      this.cursor.classList.toggle('active')
    }, 500)

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

    if (/[a-zA-Z0-9-_ ]/.test(key)) {

      if(key === ' ') {
        key = '&nbsp;'
      }

      const letter = document.createElement('span')
      letter.classList.add('ltr')
      letter.innerHTML = key

      this.editor.append(letter)
      setTimeout(() => letter.classList.add('added'), 5)
      this.editor.append(this.cursor)
    }
    
  }

  keyDown(key) {

    switch (key) {
      case 'Backspace':
        const prevLetter = this.cursor.previousSibling
        prevLetter.classList.add('removed')
        setTimeout(() => this.cursor.previousSibling.remove(), 200);
        break

      case 'Space':
        keyPress(' ')
        break
    
      default:
        break
    }

  }

}