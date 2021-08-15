import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosTotalesComponent } from './components/productos-totales/productos-totales.component';
import { ProductosMinComponent } from "./components/productos-min/productos-min.component";
import { ProductosAnioComponent } from "./components/productos-anio/productos-anio.component";
import { ClientesEdadFechaComponent } from './components/clientes-edad-fecha/clientes-edad-fecha.component';
import { ClienteEstimadoComponent } from './components/cliente-estimado/cliente-estimado.component';

const routes: Routes = [
  { path: 'productos-totales', component: ProductosTotalesComponent},
  { path: 'productos-min', component: ProductosMinComponent},
  { path: 'productos-anio', component: ProductosAnioComponent},
  { path: 'clientes-edad-fecha', component: ClientesEdadFechaComponent},
  { path: 'cliente-estimado', component: ClienteEstimadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
