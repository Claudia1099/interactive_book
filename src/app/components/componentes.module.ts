import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FootersComponent } from './footers/footers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SelectorQuicesComponent } from './selector-quices/selector-quices.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FootersComponent,
    NavbarComponent,
    SelectorQuicesComponent,
    CuestionarioComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FootersComponent,
    NavbarComponent,
    SelectorQuicesComponent,
    CuestionarioComponent,
  ],
})
export class ComponentesModule {}
