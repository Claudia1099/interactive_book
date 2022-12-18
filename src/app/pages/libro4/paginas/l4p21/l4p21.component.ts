import { Component, Input, OnInit } from '@angular/core';

import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-l4p21',
  templateUrl: './l4p21.component.html',
  styles: [],
})
export class L4p21Component implements OnInit {
  constructor(private audioServices: AudioService) {}

  ngOnInit(): void {}

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
