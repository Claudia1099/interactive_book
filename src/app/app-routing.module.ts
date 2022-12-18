import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { ComponentesModule } from './components/componentes.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'libro1',
    loadChildren: () =>
      import('./pages/libro1/libro1.module').then((m) => m.Libro1Module),
  },
  {
    path: 'libro2',
    loadChildren: () =>
      import('./pages/libro2/libro2.module').then((m) => m.Libro2Module),
  },
  {
    path: 'libro3',
    loadChildren: () =>
      import('./pages/libro3/libro3.module').then((m) => m.Libro3Module),
  },
  {
    path: 'libroA1',
    loadChildren: () =>
      import('./pages/libro-a1/libro-a1.module').then((m) => m.LibroA1Module),
  },
  {
    path: 'libro4',
    loadChildren: () =>
      import('./pages/libro4/libro4.module').then((m) => m.Libro4Module),
  },
  {
    path: 'quices',
    loadChildren: () =>
      import('./pages/quices/quices.module').then((m) => m.QuicesModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
    PagesRoutingModule,
    ComponentesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
