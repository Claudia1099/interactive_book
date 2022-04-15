import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l1p1',
  templateUrl: './l1p1.component.html',
})
export class L1p1Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  ngOnInit(): void {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
