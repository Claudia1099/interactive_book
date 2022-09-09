import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-libro4',
  templateUrl: './libro4.component.html',
  styleUrls: ['./libro4.component.css'],
})
export class Libro4Component implements OnInit {
  constructor(private auth: AuthService) {}
  email!: Promise<string>;
  libro4!: Observable<any>;

  ngOnInit(): void {
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('No hay correo registrado');
      });
      this.email?.then((resp: any) => {
        this.libro4 = this.auth.obtenerLibro(resp, 'book4');
      });
    });
  }
}
