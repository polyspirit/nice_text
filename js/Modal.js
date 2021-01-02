export class Modal {

  constructor(cssClass, title, content = null) {

    this.cssClass = cssClass
    this.title = title
    this.content = content
    this.$mainContainer = document.getElementById("main-container")
    this.speed = 1000;

    this.build()

  }

  build() {

    let html = `<div class="modal-overlay"></div>
                  <div class="modal-content">
                  <div class="modal-title">${this.title}</div>`
    html += (this.content) ? `<div class="modal-text">${this.content}</div>` : ``

    this.$window = document.createElement('div')
    this.$window.className = 'modal modal-'+this.cssClass
    this.$window.innerHTML = html

    this.$mainContainer.append(this.$window);

    setTimeout(() => {
      this.show()
    }, 10)

    this.$window.addEventListener('mousedown', () => {
      this.hide()
    })

  }

  show() {
    this.$window.classList.add('active')
  }

  hide() {

    this.$window.classList.remove('active')

  }

  destroy() {

    this.hide()

    setTimeout(() => {
      this.$window.remove()
    }, this.speed)

  }

}