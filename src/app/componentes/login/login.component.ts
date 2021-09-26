import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit, DoCheck {
  public usuarioModel:Usuario;
  public identidad:any;
  public token:any
  constructor(public _usuarioService: UsuariosService, public _router:Router) {
    this.usuarioModel = new Usuario("","","","","","","");
    
   }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this._usuarioService.obtenerIdentidad();
  }

  obtenerToken(){
    this._usuarioService.Login(this.usuarioModel, 'true').subscribe(response=>{
      this.token = response.token;
      localStorage.setItem('token', this.token)
    },error=>{
      console.log(<any>error)
    })
  }

  login(){
    this._usuarioService.Login(this.usuarioModel, 'false').subscribe(response=>{
      this.identidad = response.correoEncontrado;
      localStorage.setItem('identidad', JSON.stringify(this.identidad));
      this.obtenerToken();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      this._router.navigate(['/home'])
      setInterval(()=>{window.location.reload()},2000)
      
    }, error=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(<any>error)
    })
  }

  inicioApp(){
    this._usuarioService.IniciarApp().subscribe(response=>{
      console.log(response.correoEncontrado);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })

    },err=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: err.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
