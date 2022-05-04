import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l1p18',
  templateUrl: './l1p18.component.html',
})
export class L1p18Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  ngOnInit(): void {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
