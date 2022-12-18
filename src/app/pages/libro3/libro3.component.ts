import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-libro3',
  templateUrl: './libro3.component.html',
  styleUrls: ['./libro3.component.css'],
})
export class Libro3Component implements OnInit {
  constructor(private auth: AuthService) {}
  email!: Promise<string>;
  libro3!: Observable<any>;

  ngOnInit(): void {
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('No hay correo registrado');
      });
      this.email?.then((resp: any) => {
        this.libro3 = this.auth.obtenerLibro(resp, 'book3');
      });
    });
  }
}
