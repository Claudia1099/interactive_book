import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  constructor(private auth: AuthService) { }
  libros: Libros | undefined;

  ngOnInit(): void {
    this.auth.user.subscribe((resp: any) => {
      this.auth.librosUsuario(resp.email).subscribe((libros: any) => {
        this.libros = libros.payload.data();
      })
    }, (errors: any) => {
      this.libros = {
        book1: false,
        book2: false,
        book3: false,
        bookA1: false,
        book4: false,
        book5: false,
        book6: false,
        bookA2: false,
        book7: false,
        book8: false,
        book9: false,
        bookB1: false,
      }
    })
  }

}
