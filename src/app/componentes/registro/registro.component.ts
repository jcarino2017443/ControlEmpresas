import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers:[UsuariosService]
})
export class RegistroComponent implements OnInit {
  public usuarioModel:Usuario;
  public id:any;

  constructor(private _usuarioService: UsuariosService, private _router: Router) {
      this.usuarioModel = new Usuario("","","","","","","")
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
      this._usuarioService.registro(this.usuarioModel).subscribe(response=>{
       console.log(response.usuarioGuardado)
       this.id = response.usuarioGuardado._id
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Registrado',
          showConfirmButton: false,
          timer: 1500
        })
        
      }, err=>{
        console.log(<any>err)
      })
  }

}
