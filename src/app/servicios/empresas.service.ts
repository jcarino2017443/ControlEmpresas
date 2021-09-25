import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Empresa } from '../modelos/empresa.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
public ruta:any;
public token:any;
  constructor(private _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerEmpresas():Observable<any>{
     let headersVariable = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.obtenerToken())
     return this._http.get(this.ruta + 'buscarEmpresas', {headers: headersVariable});
   }
   agregarEmpresas(empresa: Empresa):Observable<any>{
    let params = JSON.stringify(empresa)
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.obtenerToken())
    return this._http.post(this.ruta +  'crearEmpresas', params, {headers: headersVariable})

   }
   editarEmpresa(empresa:Empresa):Observable<any>{
    let params = JSON.stringify(empresa)
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.obtenerToken())
    return this._http.put(this.ruta + 'editarEmpresas/' + empresa._id, params, {headers:headersVariable});
   }
   eliminarEmpresa(id:any){
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.obtenerToken())
    return this._http.delete(this.ruta + 'eliminarEmpresa/' + id, {headers:headersVariable});
   }
   obtenerEmpresaID(data:any):Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.obtenerToken())
    return this._http.get(this.ruta + 'idEmpresa/' + data, {headers: headersVariable});
   }

   obtenerToken(){
     var token2 = localStorage.getItem('token')
     if(token2 != 'undefined'){
       this.token = token2;
     }else{
      this.token = null;
     }

     return this.token;
   }
}
