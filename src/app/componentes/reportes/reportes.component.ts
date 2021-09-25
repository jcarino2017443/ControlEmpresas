import { Component, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { EmpleadosService } from 'src/app/servicios/empleados.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
   providers: [EmpleadosService]
})
export class ReportesComponent implements OnInit {
  public empleadoList:any;

  constructor(public _empleadoService: EmpleadosService) { 
    
  }

  ngOnInit(): void {
    this.mostrarEmpleados()
  }
  

  mostrarEmpleados(){
    this._empleadoService.obtenerEmpleados().subscribe(reponse=>{
      this.empleadoList = reponse.empleadosEncontrados;
    })
  }
  downloadPDF(){
    const DATA:any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(DATA, options).then((canvas)=>{
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_ControlEmpresas.pdf`);
    });
    
  }
  

}
