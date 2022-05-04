import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l1p53',
  templateUrl: './l1p53.component.html',
  styles: [],
})
export class L1p53Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  ngOnInit(): void {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
