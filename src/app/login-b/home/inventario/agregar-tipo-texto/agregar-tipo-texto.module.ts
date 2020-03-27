import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarTipoTextoRoutingModule } from './agregar-tipo-texto-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    AgregarTipoTextoRoutingModule
  ]
})
export class AgregarTipoTextoModule { }
