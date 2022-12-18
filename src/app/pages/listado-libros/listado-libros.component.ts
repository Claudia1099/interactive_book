import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { AuthService } from '../../services/auth.service';
import LibrosJSON from '../../../assets/json/libros.json';
import { ListadoLibros } from '../../models/libros-json';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css'],
})
export class ListadoLibrosComponent implements OnInit {
  constructor(private auth: AuthService) {}
  libros!: Libros;

  auxLibros: any[] = [];
  listadoLibros: ListadoLibros[] = LibrosJSON;

  ngOnInit(): void {
    this.auth.user.subscribe(
      (resp: any) => {
        this.auth.librosUsuario(resp.email).subscribe((libros: any) => {
          this.libros = libros.payload.data();
          Object.values(this.libros).forEach((resp, index) => {
            if (typeof resp === 'boolean') {
              Object.keys(this.libros).forEach((property, indice) => {
                if (index === indice) {
                  this.auxLibros.push({
                    [property]: resp,
                    property: property,
                  });
                }
              });
            }
          });
          this.auxLibros.sort((a, b) => {
            if (a.property > b.property) {
              return 1;
            }
            if (a.property < b.property) {
              return -1;
            }
            return 0;
          });
          this.listadoLibros.forEach((listado, index) => {
            if (this.auxLibros[index]) {
              listado.libro =
                this.auxLibros[index][this.auxLibros[index].property];
            }
          });
        });
      },
      (errors: any) => {
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
        };
      }
    );
  }
}
