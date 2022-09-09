import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l3p10',
  templateUrl: './l3p10.component.html',
  styles: [],
})
export class L3p10Component implements OnInit {
  audio!: HTMLMediaElement;
  idAudio: string = '';

  constructor(private audioServices: AudioService) {}
  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }

  ngOnInit(): void {}
}
