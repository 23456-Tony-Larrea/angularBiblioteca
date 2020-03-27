import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { GestionUsuariosComponent } from './gestion-usuarios.component';
import { AgregarBibliotecarioComponent } from './agregar-bibliotecario/agregar-bibliotecario.component';


@NgModule({
  declarations: [GestionUsuariosComponent, AgregarBibliotecarioComponent],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule
  ]
})
export class GestionUsuariosModule { }
