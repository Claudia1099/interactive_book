import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Libro1Component } from './libro1.component';

const routes : Routes = [

  {path: '', component: Libro1Component,
children: [
  { path: 'libro1', component: Libro1Component}
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
export class Libro1RoutingModule { }
