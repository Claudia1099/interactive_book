import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuicesRoutingModule } from './quices-routing.module';
import { QuicesComponent } from './quices.component';
import { ComponentesModule } from '../../components/componentes.module';

@NgModule({
  declarations: [QuicesComponent],
  imports: [CommonModule, QuicesRoutingModule, ComponentesModule],
})
export class QuicesModule {}
