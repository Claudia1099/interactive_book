import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3p10',
  templateUrl: './l3p10.component.html',
  styles: [],
})
export class L3p10Component implements OnInit {
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

  ngOnInit(): void {}
}
