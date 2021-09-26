import { Component, OnInit, DoCheck } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[UsuariosService]
})
export class NavbarComponent implements OnInit, DoCheck {
  public identidad:any
  constructor(public _usuarioService:UsuariosService, public _router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear();
    this._router.navigate(['/login'])
    setInterval(()=>{window.location.reload()},1000)

  }

  ngDoCheck(){
    this.identidad = this._usuarioService.obtenerIdentidad()
  }

}
