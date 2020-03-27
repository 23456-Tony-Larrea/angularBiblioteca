import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucionesRoutingModule } from './devoluciones-routing.module';
import { AgregarDevolucionComponent } from './agregar-devolucion/agregar-devolucion.component';


@NgModule({
  declarations: [AgregarDevolucionComponent],
  imports: [
    CommonModule,
    DevolucionesRoutingModule
  ]
})
export class DevolucionesModule { }
