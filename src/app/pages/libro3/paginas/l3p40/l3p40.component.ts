import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l3p40',
  templateUrl: './l3p40.component.html',
  styles: [],
})
export class L3p40Component implements OnInit {
  constructor(private auth: AuthService, private audioServices: AudioService) {}
  @Input('libro3')
  libro3!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.libro3.subscribe((resp) => {
        this.libro = resp.payload.data();
        // console.log(this.libro);
      });
    }, 3000);
  }

  guardarInfo() {
    this.email.then((resp) => {
      this.auth
        .guardarDatos(resp, 'book3', this.libro)
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
