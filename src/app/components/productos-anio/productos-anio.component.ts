import { Component, OnInit } from '@angular/core';
import { ProductosAnioService } from '../../services/productos-anio.service';

@Component({
  selector: 'app-productos-anio',
  templateUrl: './productos-anio.component.html',
  styles: [
  ]
})
export class ProductosAnioComponent{
  title = 'productos-anio';
  public productos:Array<any> = []

  constructor(
    private productosAnioService:ProductosAnioService
  ){
    this.productosAnioService.getProductos().subscribe((resp:any)=>{      
      this.productos = resp
    })
  }
}
