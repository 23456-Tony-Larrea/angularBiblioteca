import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { AgregarEditorialComponent } from './agregar-editorial/agregar-editorial.component';
import { AgregarEjemplaresComponent } from './agregar-ejemplares/agregar-ejemplares.component';
import { AgregarTextoComponent } from './agregar-texto/agregar-texto.component';
import { AgregarTipoTextoComponent } from './agregar-tipo-texto/agregar-tipo-texto.component';


@NgModule({
  declarations: [InventarioComponent, AgregarAutorComponent, AgregarEditorialComponent, AgregarEjemplaresComponent, AgregarTextoComponent, AgregarTipoTextoComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
