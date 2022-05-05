import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l2p4',
  templateUrl: './l2p4.component.html',
  styles: [],
})
export class L2p4Component implements OnInit {
  constructor(private auth: AuthService) {}
  @Input('libro2')
  libro2!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.libro2.subscribe((resp) => {
        this.libro = resp.payload.data();
        // console.log(this.libro);
      });
    }, 3000);
  }

  guardarInfo() {
    this.email.then((resp) => {
      this.auth
        .guardarDatos(resp, 'book2', this.libro)
        .then(() => {})
        .catch(() => {
          console.log('error');
        });
    });
  }
}
