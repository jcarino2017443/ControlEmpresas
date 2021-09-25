import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
  providers: [ProductosService]
})
export class EstadisticasComponent implements OnInit {
  public resultadosArray:any;
  public resultadoList:any;
  public largo:any;
  chartInicial:any = 'pie'
  chartTypes = [
    {nombreTipo: 'pie', texto: 'Cicular'},
    {nombreTipo: 'line', texto: 'lineas'},
    {nombreTipo: 'bar', texto: 'barras'}
  ]

  chartOptions = {
    responsive: true,
  };
  chartLabels:any[]=[];
  chartData:any[] =[];
  chartColors = [{
    backgroundColor: ['red', '#0F0', 'rgba(41, 182, 246,0.75)'],
    borderColor: ['rgb(250,120,100)', 'green', '#0086c3']
  }];
  chartLegend = true;
  chartPlugins = [];
  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.mostrarResultado();
    this.ventasMas();
  }

  mostrarResultado(){
    this._productoService.mostrarEstadisticas().subscribe(reponse=>{
      this.resultadosArray = reponse.resultados;
      for (let index = 0; index < this.resultadosArray.length; index++) {
        this.chartLabels.push(this.resultadosArray[index].nombre)
        this.chartData.push(this.resultadosArray[index].vendido)
        
      }
    })
  }

  ventasMas(){
    this._productoService.masVendidos().subscribe(response=>{
      this.resultadoList = response.hola;
      this.largo = response.hola.length;
    })
  }

}
