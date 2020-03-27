import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLRoutingModule } from './login-l-routing.module';
import { LoginLComponent } from './login-l.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginLComponent],
  imports: [
    CommonModule,
    LoginLRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginLModule { }
