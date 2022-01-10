import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FootersComponent } from './footers/footers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FootersComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FootersComponent,
    NavbarComponent
  ]
})
export class ComponentesModule { }
