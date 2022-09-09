import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audio!: HTMLMediaElement;
  idAudio: string = '';

  constructor() {}
  reproducirAudio(idAudio: string) {
    if (this.idAudio.length > 0) {
      if (this.idAudio === idAudio) {
        this.audio.pause();
        this.idAudio = '';
        return;
      }
      this.audio.pause();
      this.idAudio = '';
    }
    this.idAudio = idAudio;
    this.audio = <HTMLMediaElement>document.getElementById(idAudio);
    this.audio.play();
  }
}
