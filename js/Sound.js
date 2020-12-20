export class Sound {

  constructor(url) {

    this.url = url;
    this.track = new Audio(url);

  }

  play() {

    const _track = this.track;
    _track.play();

  }

}