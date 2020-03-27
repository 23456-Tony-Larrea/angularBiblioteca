import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-b',
  templateUrl: './login-b.component.html',
  styleUrls: ['./login-b.component.css']
})
export class LoginBComponent implements OnInit {
  url : string
  listaUsuarios = []
  formLogin : any


  constructor(private http:HttpClient , private router: Router) { }

  ngOnInit() {
    
    this.formLogin = {
      correo :'',
      clave:''
    }
    this.url = 'http://localhost:3000/server'
    
    this.http.get(`${this.url}/leerUsuarios`).subscribe(
      (getdatos:any[]) =>  this.listaUsuarios = getdatos ,
      (error: HttpErrorResponse) => { console.log(error.message)},
      ()=> console.log('peticion Finalizada'))

  }
  validarEmail( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  validarInputs(campo){
    if(campo !== ""){
      return true
    }else{
      return false
    }
  }

  ingresar(){
    var correo = this.formLogin.correo
    var clave = this.formLogin.clave
    if(this.validarEmail(correo) === true  && this.validarInputs(clave) === true){
      var logUsuario = correo
      var logClave =  clave
      console.log(logClave +' y '+ logUsuario)

      console.log(this.listaUsuarios )
      
      var login = this.listaUsuarios.find(data=>
        data.correo === logUsuario && 
        data.clave === logClave)
        if(typeof login === "undefined"){
          alert('usuario y/o contraseña incorrectas')
        }else{
          alert('bienvenido')
          this.formLogin.correo = ""
          this.formLogin.clave =""
          this.navegate();
        }
      
    }else{
      alert('usuario y/o contraseña incorrectas')
    }
  }

  navegate(){
    this.router.navigateByUrl('bibliotecario/homeB')
  }
}
