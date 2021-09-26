import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/modelos/empleados.modelo';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {
  public empleadosList:any;
  public ModelEmpleados:any
  public empleadoModel:any;
  public buscadorModel:any;
  constructor(public _empleadoService: EmpleadosService) { 
    this.ModelEmpleados = new Empleados("","","","");
    this.empleadoModel = new Empleados("","","","");
    this.buscadorModel = new Empleados("","","","");
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  crearEmpleados(){
    this._empleadoService.crearEmpleado(this.ModelEmpleados).subscribe(reponse=>{
      if((this.ModelEmpleados.nombre = "") || (this.ModelEmpleados.departamento = "") || (this.ModelEmpleados.puesto ="")){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debe llenar todos los campos',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this.ModelEmpleados.nombre = "";
        this.ModelEmpleados.departamento = "";
        this.ModelEmpleados.puesto ="";
        this.obtenerEmpleados()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Logiado',
          showConfirmButton: false,
          timer: 1500
        })  
      }
      
    },err=>{
      console.log(<any>err)
    })
  }
  editarEmpleados(){
    this._empleadoService.editarEmpleado(this.empleadoModel).subscribe(response=>{
      this.obtenerEmpleados()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Editado',
        showConfirmButton: false,
        timer: 1500
      })
    },err=>{
      console.log(<any>err)
    })
  }

  eliminarEmpleados(data:any){
    this._empleadoService.eliminarEmpleado(data).subscribe(response=>{
      this.obtenerEmpleados()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  obtenerEmpleadoIs(id:any){
    this._empleadoService.obtenerEmpleadoID(id).subscribe(reponse=>{
    this.empleadoModel = reponse.empleadosEncontrado;
    })
  }

  obtenerEmpleados(){
    this._empleadoService.obtenerEmpleados().subscribe(reponse=>{
      console.log(reponse.empleadosEncontrados)
      this.empleadosList = reponse.empleadosEncontrados;
      this.buscadorModel._id ="";
      this.buscadorModel.nombre ="";
      this.buscadorModel.departamento ="";
      this.buscadorModel.puesto ="";
    })
  }

  buscadorId(id:any){
    this._empleadoService.obtenerID(id).subscribe(response=>{
      this.empleadosList = response.idEncontrado;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empleado encontrado',
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

  buscadorName(name:any){
    this._empleadoService.obtenerNombre(name).subscribe(response=>{
      this.empleadosList = response.nombreEncontrado;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empleado encontrado',
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
  buscadorDepartamento(depa:any){
    this._empleadoService.obtenerDepartamento(depa).subscribe(response=>{
      this.empleadosList = response.depaEncontrado;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Departamento encontrado',
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

  buscadorPuesto(puesto:any){
    this._empleadoService.obtenerPuesto(puesto).subscribe(response=>{
    this.empleadosList = response.puestoEncontrado;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Puesto encontrado',
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

  
}
