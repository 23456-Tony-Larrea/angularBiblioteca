import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginBRoutingModule } from './login-b-routing.module';
import { LoginBComponent } from './login-b.component';


@NgModule({
  declarations: [
    LoginBComponent
  ],
  imports: [
    CommonModule,
    LoginBRoutingModule,
  ]
})
export class LoginBModule { }
