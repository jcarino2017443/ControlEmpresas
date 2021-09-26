import { Component, OnInit} from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa.modelo';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [EmpresasService]
})
export class PanelComponent implements OnInit {
  public empresaList:any;
  public empresaModel:any;
  public ModelEmpresa:any

  constructor(public _empresaService: EmpresasService) { 
    this.empresaModel = new Empresa("","","");
    this.ModelEmpresa= new Empresa("","","");
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }
  
  registrarEmpresa(){
    this._empresaService.agregarEmpresas(this.ModelEmpresa).subscribe(response=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empresa Registrada',
        showConfirmButton: false,
        timer: 1500
      })
      this.obtenerEmpresas();
    }, err=>{
      console.log(<any>err)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.err.error,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  editarEmpresa(){
    this._empresaService.editarEmpresa(this.empresaModel).subscribe(reponse=>{
      this.obtenerEmpresas();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empresa Editada',
        showConfirmButton: false,
        timer: 1500
      })
    },err=>{
      console.log(<any>err)
    })
  }
  eliminarEmpresa(id:any){
    this._empresaService.eliminarEmpresa(id).subscribe(response=>{
      console.log(response)
      this.obtenerEmpresas();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empresa Eliminada',
        showConfirmButton: false,
        timer: 1500
      })
    },err=>{
      console.log(<any>err)
    })
  }

  obtenerEmpresas(){
    this._empresaService.obtenerEmpresas().subscribe(response=>{
      console.log(response.empresasEncontradas)
      this.empresaList = response.empresasEncontradas;
    }, err=>{
      console.log(<any>err)
    })
  }
  obtenerEmpresaId(data:any){
    this._empresaService.obtenerEmpresaID(data).subscribe(response=>{
      console.log(response.empresasEncontrada);
      this.empresaModel = response.empresasEncontrada
    },err=>{
      console.log(<any> err)
    })
  }
}
