import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService {

  constructor(public _router:Router, public _usuarioService: UsuariosService) {

   }

   canActivate(){
    let identidad = this._usuarioService.obtenerIdentidad()
    if(identidad && (identidad.rol === 'Rol_Admin' || identidad.rol === 'Rol_Empresario' )){
      return true
    }else{
      this._router.navigate(['/login']);
      return false
    }
   }
}
