import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Libro4Component } from './libro4.component';

const routes: Routes = [
  {
    path: '',
    component: Libro4Component,
    children: [{ path: 'libro4', component: Libro4Component }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Libro4RoutingModule {}
