import {Sound} from './Sound.js'
import {Modal} from './Modal.js'

const mainContainer = document.getElementById('main-container')

const startModal = new Modal('start', 'START');

const startListner = () => {

  const startSound = new Sound('sound/start.mp3')
  startSound.play()
  mainContainer.removeEventListener('mousedown', startListner, false)
  startModal.destroy()

}
mainContainer.addEventListener('mousedown', startListner, false)