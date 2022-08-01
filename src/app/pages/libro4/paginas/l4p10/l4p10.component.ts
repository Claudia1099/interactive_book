import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l4p10',
  templateUrl: './l4p10.component.html',
  styles: [],
})
export class L4p10Component implements OnInit {
  constructor(private auth: AuthService, private audioServices: AudioService) {}
  @Input('libro4')
  libro4!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.libro4.subscribe((resp) => {
        this.libro = resp.payload.data();
        // console.log(this.libro);
      });
    }, 3000);
  }

  guardarInfo() {
    this.email.then((resp) => {
      this.auth
        .guardarDatos(resp, 'book4', this.libro)
        .then(() => {})
        .catch(() => {
          console.log('error');
        });
    });
  }

  reproducirAudio(idAudio: string) {
    this.audioServices.reproducirAudio(idAudio);
  }
}
