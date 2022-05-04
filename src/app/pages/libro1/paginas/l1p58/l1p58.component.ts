import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioService } from 'src/app/services/audio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l1p58',
  templateUrl: './l1p58.component.html',
  styles: [],
})
export class L1p58Component implements OnInit {
  constructor(private auth: AuthService, private audioServices: AudioService) {}
  @Input('libro1')
  libro1!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.libro1.subscribe((resp) => {
        this.libro = resp.payload.data();
        // console.log(this.libro);
      });
    }, 3000);
  }

  guardarInfo() {
    this.email.then((resp) => {
      this.auth
        .guardarDatos(resp, 'book1', this.libro)
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
