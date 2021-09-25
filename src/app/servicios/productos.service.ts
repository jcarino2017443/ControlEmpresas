import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Producto } from '../modelos/productos.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 public ruta:any;
 public token:any;
  constructor(public _http:HttpClient) {
    this.ruta = GLOBAL.url;
   }

  agregarProductp(producto:Producto):Observable<any>{
    let params = JSON.stringify(producto)
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.post(this.ruta + 'agregarProducto', params, {headers:headerVariable});

  }
  
  editarProducto(producto:Producto):Observable<any>{
    let params = JSON.stringify(producto)
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.put(this.ruta + 'editarProdutos/'+producto._id, params,{headers: headerVariable} )
  
  }

  eliminarProducto(id:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.delete(this.ruta + 'eliminarProducto/' + id, {headers: headerVariable});
  }
  buscarProductoId(id:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'productoId/' + id, {headers: headerVariable})
  }

  mostrarProudctos():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'obtenerProductos', {headers: headerVariable});
  } 

  mostrarEstadisticas():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'resultados', {headers:headerVariable})

  }

  simulacionComprar(id:any, cantidad:any):Observable<any>{
    let parametro:any
    let params = JSON.stringify(parametro)
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.put(this.ruta + 'comprarProductos/' + id +'/' + cantidad, params, {headers: headerVariable})

  }

  masVendidos():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'masComprados', {headers: headerVariable})
  }



  //--------------------------------- FILTROS--------------------------
  filtroName(name:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'obtenerNombre/' + name, {headers: headerVariable});
  }
  filtroProveedor(proveedor:any):Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'obtenerProveedor/' + proveedor, {headers:headerVariable} );
  }

  StockAscendente():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'ascendete', {headers:headerVariable});
  }
  StockDescente():Observable<any>{
    let headerVariable = new HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.obtenerToken() )
    return this._http.get(this.ruta + 'descente', {headers:headerVariable});

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
