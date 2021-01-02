export class Cursor {

  constructor() {

    this.$cursor = document.getElementById('cursor')

    setInterval(() => {
      this.$cursor.classList.toggle('active')
    }, 500)

  }

  print($letter) {
    this.insertBefore(this.$cursor, $letter)
  }

  removeLetterPrevious() {
    this.removeLetter(this.$cursor.previousSibling)
  }

  removeLetterNext() {
    this.removeLetter(this.$cursor.nextSibling)
  }

  removeLetter($letter) {

    if($letter) {
      $letter.classList.add('removed')
      setTimeout(() => $letter.remove(), 200);
    }

  }

  moveToLeft() {

    if(this.$cursor.previousSibling){
      this.insertBefore(this.$cursor.previousSibling, this.$cursor)
    }

  }
  
  moveToRight() {
    
    if(this.$cursor.nextSibling){
      this.insertAfter(this.$cursor.nextSibling, this.$cursor)
    }

  }

  moveToStart() {
    this.$cursor.parentNode.prepend(this.$cursor)
  }

  moveToEnd() {
    this.$cursor.parentNode.append(this.$cursor)
  }

  insertBefore($referenceNode, $insertNode) {
    $referenceNode.parentNode.insertBefore($insertNode, $referenceNode)
  }

  insertAfter($referenceNode, $insertNode) {
    $referenceNode.parentNode.insertBefore($insertNode, $referenceNode.nextSibling)
  }

}