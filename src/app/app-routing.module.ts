import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import {ProductosComponent} from './componentes/productos/productos.component'
import { HomeComponent } from './componentes/home/home.component';

import { RestriccionService } from './servicios/restriccion.service';

const routes: Routes = [

{path: 'login', component:LoginComponent},
{path: 'registro', component:RegistroComponent, canActivate: [RestriccionService]},
{path: 'panel', component:PanelComponent,canActivate: [RestriccionService]},
{path: 'empleados', component: EmpleadosComponent,canActivate: [RestriccionService]},
{path: 'reportes', component: ReportesComponent,canActivate: [RestriccionService]},
{path: 'estadisticas', component: EstadisticasComponent,canActivate: [RestriccionService]},
{path: 'productos', component: ProductosComponent,canActivate: [RestriccionService]},
{path: 'home', component:HomeComponent,canActivate: [RestriccionService]},
{path: '**', component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
