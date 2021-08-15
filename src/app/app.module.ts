import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMinComponent } from './components/productos-min/productos-min.component';
import { ProductosAnioComponent } from './components/productos-anio/productos-anio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesEdadFechaComponent } from './components/clientes-edad-fecha/clientes-edad-fecha.component';
import { ProductosTotalesComponent } from './components/productos-totales/productos-totales.component';
import { ClienteEstimadoComponent } from './components/cliente-estimado/cliente-estimado.component';
import { ClientesComponent } from './components/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosMinComponent,
    ProductosAnioComponent,
    ProductosComponent,
    ClientesEdadFechaComponent,
    ProductosTotalesComponent,
    ClienteEstimadoComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
