import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicesComponent } from './quices.component';

const routes: Routes = [
  {
    path: 'book1',
    component: QuicesComponent,
    data: { title: 'Book 1' },
  },
  {
    path: 'book2',
    component: QuicesComponent,
    data: { title: 'Book 2' },
  },
  {
    path: 'book3',
    component: QuicesComponent,
    data: { title: 'Book 3' },
  },
  {
    path: 'bookA1',
    component: QuicesComponent,
    data: { title: 'Book A1' },
  },
  {
    path: 'book4',
    component: QuicesComponent,
    data: { title: 'Book 4' },
  },
  {
    path: 'book5',
    component: QuicesComponent,
    data: { title: 'Book 5' },
  },
  {
    path: 'book6',
    component: QuicesComponent,
    data: { title: 'Book 6' },
  },
  {
    path: 'bookA2',
    component: QuicesComponent,
    data: { title: 'Book A2' },
  },
  {
    path: 'book7',
    component: QuicesComponent,
    data: { title: 'Book 7' },
  },
  {
    path: 'book8',
    component: QuicesComponent,
    data: { title: 'Book 8' },
  },
  {
    path: 'book9',
    component: QuicesComponent,
    data: { title: 'Book 9' },
  },
  {
    path: 'bookB1',
    component: QuicesComponent,
    data: { title: 'Book B1' },
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuicesRoutingModule {}
