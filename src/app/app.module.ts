import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelComponent } from './componentes/panel/panel.component';

import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { ProductosComponent } from './componentes/productos/productos.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    PanelComponent,
    EmpleadosComponent,
    ReportesComponent,
    EstadisticasComponent,
    ProductosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
