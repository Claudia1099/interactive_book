import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
const routers: Routes =[
  {
    path: "home", component: PagesComponent, children:[
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "listado", component: ListadoLibrosComponent}
      
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routers)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
