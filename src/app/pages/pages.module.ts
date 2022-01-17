import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../components/componentes.module';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ListadoLibrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    PagesComponent
  ]
})
export class PagesModule { }
