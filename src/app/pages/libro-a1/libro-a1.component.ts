import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-libro-a1',
  templateUrl: './libro-a1.component.html'
})
export class LibroA1Component implements OnInit {

  constructor(private auth: AuthService) { }
  email!: Promise<string>;
  libroA1!: Observable<any>;

  ngOnInit(): void {
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('No hay correo registrado');
      })
    this.email?.then((resp: any) => {
      this.libroA1 = this.auth.obtenerLibro(resp, 'bookA1');
    })
  })
  }

}
