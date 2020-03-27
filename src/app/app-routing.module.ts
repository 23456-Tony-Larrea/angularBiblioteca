import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLComponent } from './login-l/login-l.component';
import { LoginBComponent } from './login-b/login-b.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './login-l/home/home.component';
import { HomeComponentB } from './login-b/home/home.component';

const routes: Routes = [
  { 
    path:'', redirectTo:'bibliotecario',pathMatch:'full'
  },
  { 
    path:'home',component: HomeComponent
  },
  {
    path:'menu', component: HeaderComponent
  },
  { 
    path:'lector', component: LoginLComponent
  },
  {
    path:'bibliotecario', component: LoginBComponent,
    children:[
      {path:'homeB', component: HomeComponentB}
    ] 
  },
  {
    path:'**', redirectTo:'bibliotecario'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
