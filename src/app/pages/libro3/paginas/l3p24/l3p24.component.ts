import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l3p24',
  templateUrl: './l3p24.component.html',
  styles: [],
})
export class L3p24Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }

  ngOnInit(): void {}
}
