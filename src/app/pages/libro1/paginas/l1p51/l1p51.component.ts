import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l1p51',
  templateUrl: './l1p51.component.html',
  styles: [],
})
export class L1p51Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  ngOnInit(): void {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
