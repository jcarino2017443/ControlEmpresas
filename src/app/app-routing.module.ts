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
const routes: Routes = [

{path: 'login', component:LoginComponent},
{path: 'registro', component:RegistroComponent},
{path: 'panel', component:PanelComponent},
{path: 'empleados', component: EmpleadosComponent},
{path: 'reportes', component: ReportesComponent},
{path: 'estadisticas', component: EstadisticasComponent},
{path: 'productos', component: ProductosComponent},
{path: 'home', component:HomeComponent},
{path: '**', component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
