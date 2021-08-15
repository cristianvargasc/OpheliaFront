import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-totales',
  templateUrl: './productos-totales.component.html',
  styles: [
  ]
})
export class ProductosTotalesComponent{
  title = 'productos-totales';
  public productos:Array<any> = []

  constructor(
    private productosService:ProductosService
  ){
    this.productosService.getProductos().subscribe((resp:any)=>{      
      this.productos = resp
    })
  }
}