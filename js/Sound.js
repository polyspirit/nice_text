export class Sound {

  constructor(url, volume = 1) {

    this.url = url;
    this.track = new Audio(url)
    this.track.volume = volume

  }

  play() {

    const _track = this.track
    _track.play()

  }

}