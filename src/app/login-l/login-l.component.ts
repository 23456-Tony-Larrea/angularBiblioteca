import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../clases/usuarios';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-l',
  templateUrl: './login-l.component.html',
  styleUrls: ['./login-l.component.css']
})
export class LoginLComponent implements OnInit {
  divRegistro:boolean
  divLogin:boolean
  visibilidadBtnForm: boolean
  visibilidadBtnLogin: boolean
  usuario: Usuarios
  formLogin : any
  url: string
  visibilidadPCedula: boolean
  visibilidadPCorreo: boolean
  visibilidadP: boolean
  listaUsuarios = []
  
  
  constructor( private http: HttpClient, private router :Router) {}



  ngOnInit() {
    this.divLogin = false;
    this.divRegistro = true;
    this.visibilidadBtnLogin = false
    this.visibilidadBtnForm = true
    this.visibilidadPCedula = false
    this.visibilidadPCorreo = false
    this.visibilidadP = false
    this.url = 'http://localhost:3000/server'

    this.usuario = {
    cedula:'',
    primerNombre : '',
    segundoNombre : '',
    primerApellido : '',
    segundoApellido : '',
    correo :'',
    clave:'',
    telefonoCelular:''
    }
    this.formLogin = {
      correo :'',
      clave:''
    }
    this.http.get(`${this.url}/leerUsuarios`).subscribe(
      (getdatos:any[]) =>  this.listaUsuarios = getdatos ,
      (error: HttpErrorResponse) => { console.log(error.message)},
      ()=> console.log('peticion Finalizada'))

  }

  mostrarRegistro(){
    this.divRegistro = false
    this.divLogin = true
    this.visibilidadBtnForm = false
    this.visibilidadBtnLogin = true
  }
  
  mostrarLogin(){
    this.divLogin = false
    this.divRegistro = true
    this.visibilidadBtnForm = true
    this.visibilidadBtnLogin = false
  }

  

  limpiarCampos(){
    this.usuario.cedula="";
    this.usuario.primerNombre="";
    this.usuario.segundoNombre="";
    this.usuario.primerApellido="";
    this.usuario.segundoApellido="";                                        
    this.usuario.correo="";
    this.usuario.clave="";
    this.usuario.telefonoCelular ="" 
  }

  validarCedula(cedula: string) {
    if (cedula.length === 10) {
  
      // Obtenemos el digito de la region que sonlos dos primeros digitos
      const digitoRegion = cedula.substring(0, 2);
  
      // Pregunto si la region existe ecuador se divide en 24 regiones
      if (digitoRegion >= String(1) && digitoRegion <= String(24)) {
  
        // Extraigo el ultimo digito
        const ultimoDigito = Number(cedula.substring(9, 10));
  
        // Agrupo todos los pares y los sumo
        const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
  
        // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numeroUno: any = cedula.substring(0, 1);
        numeroUno = (numeroUno * 2);
        if (numeroUno > 9) {
          numeroUno = (numeroUno - 9);
        }
  
        let numeroTres: any = cedula.substring(2, 3);
        numeroTres = (numeroTres * 2);
        if (numeroTres > 9) {
          numeroTres = (numeroTres - 9);
        }
  
        let numeroCinco: any = cedula.substring(4, 5);
        numeroCinco = (numeroCinco * 2);
        if (numeroCinco > 9) {
          numeroCinco = (numeroCinco - 9);
        }
  
        let numeroSiete: any = cedula.substring(6, 7);
        numeroSiete = (numeroSiete * 2);
        if (numeroSiete > 9) {
          numeroSiete = (numeroSiete - 9);
        }
  
        let numeroNueve: any = cedula.substring(8, 9);
        numeroNueve = (numeroNueve * 2);
        if (numeroNueve > 9) {
          numeroNueve = (numeroNueve - 9);
        }
  
        const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
  
        // Suma total
        const sumaTotal = (pares + impares);
  
        // extraemos el primero digito
        const primerDigitoSuma = String(sumaTotal).substring(0, 1);
  
        // Obtenemos la decena inmediata
        const decena = (Number(primerDigitoSuma) + 1) * 10;
  
        // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digitoValidador = decena - sumaTotal;
  
        // Si el digito validador es = a 10 toma el valor de 0
        if (digitoValidador === 10) {
          digitoValidador = 0;
        }
  
        // Validamos que el digito validador sea igual al de la cedula
        if (digitoValidador === ultimoDigito) {
          return true;
        } else {
          return false;
        }
  
      } else {
        // imprimimos en consola si la region no pertenece
        return false;
      }
    } else {
      // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      return false;
    }
  
  }
  
  validarEmail( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  ValidarCampos(){
    var correo = this.usuario.correo
    var cedula = this.usuario.cedula
    if( this.validarCedula(cedula) === true ){
      this.visibilidadPCedula = false
      if(this.usuario.primerNombre === ""){
        console.log('pn')
      }else{
        if(this.usuario.segundoNombre === ""){
          console.log('sn')
        }else{
          if(this.usuario.primerApellido === ""){
            console.log('pa')
          }else{
            if(this.usuario.segundoApellido === ""){
              console.log('sa')
            }else{ 
            if(this.validarEmail(correo) === true){
              this.visibilidadPCorreo = false
              if(this.usuario.clave === ""){
                console.log('clave')
              }else{
                if (this.usuario.telefonoCelular === "") {
                  console.log('tlefnoe')
                } else {
                    return true
                }
              }
            }else{
              this.visibilidadPCorreo =true
            }
            }
          }
        }
      }
    }else{
      this.visibilidadPCedula = true
    }    
  }


  registrar(){
    if (this.ValidarCampos() === true) {
      var usuario = new Usuarios(this.usuario.cedula,this.usuario.primerNombre,this.usuario.segundoNombre,this.usuario.primerApellido,this.usuario.segundoApellido,
        this.usuario.correo,this.usuario.clave,this.usuario.telefonoCelular)
        console.log(usuario)
        console.log(this.listaUsuarios )
        this.limpiarCampos();
        
        var verificarCedula = this.listaUsuarios.find(
          data => data.cedula === usuario.cedula
        )

        var verificarCorreo = this.listaUsuarios.find(
          data => data.correo === usuario.correo
        )

        if (typeof verificarCedula === "undefined") {
          if (typeof verificarCorreo === "undefined") {
            this.http.post(`${this.url}/ingresar-datos`,{
              "campos":[usuario
              ],
              "tablas":"usuarios"
            }).subscribe(data =>{
              console.log('pots',data),
              error =>{
                console.log('error',error)
              }
            })
          } else {
            alert('La dirección de correo ya esta registrada')
          }
        } else {
          alert('El número de cedula ingresada ya esta registrada')
        }
        
    this.divLogin = false;
    this.visibilidadBtnForm = true
    this.visibilidadBtnLogin = false
    this.divRegistro = true;
    } else {
      console.log('vuelva a intentar')
      alert('Ingrese los Datos Solicitados')
    }
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
          this.router.navigateByUrl('/home')
          this.formLogin.correo = ""
          this.formLogin.clave =""

          this.navegation();
        }
      
    }else{
      alert('usuario y/o contraseña incorrectas')
    }
  }




  navegation(){
    this.router.navigateByUrl('/home')
  }
}