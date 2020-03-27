import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBComponent } from './login-b/login-b.component';
import { LoginLComponent } from './login-l/login-l.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './login-l/home/home.component';
import { HomeComponentB } from './login-b/home/home.component';
import { HeaderLectorComponent } from './header-lector/header-lector.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBComponent,
    LoginLComponent,
    HeaderComponent,
    HomeComponent,
    HomeComponentB,
    HeaderLectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
