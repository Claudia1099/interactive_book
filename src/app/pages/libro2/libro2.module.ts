import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro2Component } from './libro2.component';
import { Libro2RoutingModule } from './libro2-routing.module';



@NgModule({
  declarations: [
    Libro2Component
  ],
  imports: [
    CommonModule,
    Libro2RoutingModule
  ]
})
export class Libro2Module { }
