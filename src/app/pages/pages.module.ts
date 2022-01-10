import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../components/componentes.module';
import { LibrosComponent } from './libros/libros.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    LibrosComponent,
    ListadoLibrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesModule
  ],
  exports:[
    HomeComponent,
    PagesComponent
  ]
})
export class PagesModule { }
