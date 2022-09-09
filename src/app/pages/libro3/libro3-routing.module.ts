import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Libro3Component } from './libro3.component';



const routes : Routes = [

  {path: '', component: Libro3Component,
children: [
  { path: 'libro3', component: Libro3Component}
]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class Libro3RoutingModule { }
