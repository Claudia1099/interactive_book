import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-libro2',
  templateUrl: './libro2.component.html',
  styleUrls: ['./libro2.component.css'],
})
export class Libro2Component implements OnInit {
  constructor(private auth: AuthService) {}
  email!: Promise<string>;
  libro2!: Observable<any>;

  ngOnInit(): void {
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('No hay correo registrado');
      });
      this.email?.then((resp: any) => {
        this.libro2 = this.auth.obtenerLibro(resp, 'book2');
      });
    });
  }
}
