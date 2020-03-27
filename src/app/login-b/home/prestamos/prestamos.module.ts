import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamosComponent } from './prestamos.component';
import { AgregarPrestamoComponent } from './agregar-prestamo/agregar-prestamo.component';


@NgModule({
  declarations: [PrestamosComponent, AgregarPrestamoComponent],
  imports: [
    CommonModule,
    PrestamosRoutingModule
  ]
})
export class PrestamosModule { }
