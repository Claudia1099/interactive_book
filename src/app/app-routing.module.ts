import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { ComponentesModule } from './components/componentes.module';

const routes: Routes = [
  { path: "",  pathMatch: "full", redirectTo: "/home" },
  {path: 'libro1', loadChildren : () => import('./pages/libro1/libro1.module').then(m => m.Libro1Module)},
  {path: 'libroA1', loadChildren: () => import('./pages/libro-a1/libro-a1.module').then(m => m.LibroA1Module)},
  {path: 'libro3', loadChildren: () => import('./pages/libro3/libro3.module').then(m => m.Libro3Module)},
  {path: "**", pathMatch :"full", redirectTo: "/home"},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    ComponentesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
