import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/productos.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService]
})



export class ProductosComponent implements OnInit {
  public productoList:any;
  public productoModel:Producto;
  public productoEditar:Producto;
  public productoFiltro:Producto;

  public catidadComprar:any = 0;

  constructor(public _productoService:ProductosService, public _router:Router) { 
    this.productoModel = new Producto("","","",0,0,0);
    this.productoEditar = new Producto("","","",0,0,0);
    this.productoFiltro = new Producto("","","",0,0,0);

  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  agregarProducto(){
    this._productoService.agregarProductp(this.productoModel).subscribe(reponse=>{
      this.obtenerProductos();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto creado',
        showConfirmButton: false,
        timer: 1500
      })
      this._router.navigate(['/productos'])
    }, err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  editarProducto(){
    this._productoService.editarProducto(this.productoEditar).subscribe(response=>{
      this.obtenerProductos();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Editado',
        showConfirmButton: false,
        timer: 1500
      })
    }, err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.errors,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  eliminarProductos(id:any){
    this._productoService.eliminarProducto(id).subscribe(response=>{
      this.obtenerProductos();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    }, err=>{
      console.log(<any>err)
    })
  }

  obtenerId(id:any){
    this._productoService.buscarProductoId(id).subscribe(response=>{
      this.productoEditar = response.productoEncontrado;
    })
  }

  obtenerProductos(){
    this._productoService.mostrarProudctos().subscribe(response=>{
      this.productoList = response.productoEncontrado;
      this.productoFiltro.nombre = "";
      this.productoFiltro.proveedor = "";
    })
  }
  simularCompra(id:any, cantidad:any){
    this._productoService.simulacionComprar(id,cantidad).subscribe(reposne=>{
      this.obtenerProductos();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Comprado',
        showConfirmButton: false,
        timer: 1500
      })
    },err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  obtenerNombres(){
    this._productoService.filtroName(this.productoFiltro.nombre).subscribe(response=>{
    this.productoList = response.nombreEncontado;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'producto encontrado',
      showConfirmButton: false,
      timer: 1500
    })
    },err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
      
    })
  }

  obtenerProveedor(){
    this._productoService.filtroProveedor(this.productoFiltro.proveedor).subscribe(response=>{
      this.productoList = response.proveedorEncontrado;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'proveedor encontrado',
        showConfirmButton: false,
        timer: 1500
      })
    },err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  Ascendente(){
    this._productoService.StockAscendente().subscribe(response=>{
      this.productoList = response.ascendente;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'success',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  Descendente(){
    this._productoService.StockDescente().subscribe(response=>{
      this.productoList = response.descente;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'success',
        showConfirmButton: false,
        timer: 1500
      })

    })
  }

  
}
