import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro2Component } from './libro2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Libro2Component,
    children: [{ path: 'libro2', component: Libro2Component }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Libro2RoutingModule {}
