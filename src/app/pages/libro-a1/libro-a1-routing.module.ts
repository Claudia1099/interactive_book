import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibroA1Component } from './libro-a1.component';



const routes : Routes = [

  {path: '', component: LibroA1Component,
children: [
  { path: 'libroA1', component: LibroA1Component}
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
export class LibroA1RoutingModule { }
