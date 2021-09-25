import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Empleados } from '../modelos/empleados.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public ruta:any
  public token:any;
  constructor(private _http:HttpClient) {
    this.ruta = GLOBAL.url;
   }

  crearEmpleado(empleado:Empleados):Observable<any>{
  let params = JSON.stringify(empleado);
  let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
  return this._http.post(this.ruta + 'agregarEmpleado' , params, {headers:headerVariable})
  }
  editarEmpleado(empleado:Empleados):Observable<any>{
    let params = JSON.stringify(empleado);
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.put(this.ruta + 'editarEmpleado/' + empleado._id, params, {headers: headerVariable} )
  }
  eliminarEmpleado(data:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.delete(this.ruta + 'eliminarEmpleado/' + data, {headers: headerVariable} )
  }
  obtenerEmpleadoID(data:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
  return this._http.get(this.ruta + 'empleadoId/' +data, {headers: headerVariable})
  }

  obtenerEmpleados():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'buscarEmpleados', {headers: headerVariable})
  }

  obtenerNombre(nombre:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta +'nombreEmpleado/' + nombre, {headers: headerVariable});
  }
  obtenerID(id:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'idEmpleado/' + id, {headers:headerVariable});
  }
  obtenerDepartamento(depa:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'departamentoEmpleado/' + depa, {headers:headerVariable});
  }
  obtenerPuesto(puesto:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'puestoEmpleado/'+ puesto, {headers:headerVariable} )
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
