import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Usuario } from '../modelos/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public ruta:any;
  public identidad:any;
  public localStorage:any = localStorage.getItem('identidad')
  
  constructor(private _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   Login(usuario:any, getToken:any):Observable<any>{
    if(getToken != null){
      usuario.getToken = getToken;
    }
     let params = JSON.stringify(usuario);
     let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.post(this.ruta + 'login', params,{headers:headersVariable});

   }
   registro(usuario:Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.ruta + 'agregarUsuario', params, {headers: headersVariable});
   }

   IniciarApp():Observable<any>{
     var parametro
    let params = JSON.stringify(parametro);

    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.ruta + 'Iniciar', parametro,{headers:headersVariable});
   }

   obtenerIdentidad(){
     var identidad2 = JSON.parse(this.localStorage) ;
     if(identidad2 != 'undefined'){
       this.identidad = identidad2
     }else{
       this.identidad = null
     }
     return this.identidad
   }
   
}
