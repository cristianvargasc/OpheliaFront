import { Component, OnInit } from '@angular/core';
import { ProductosMinService } from '../../services/productos-min.service';

@Component({
  selector: 'app-productos-min',
  templateUrl: './productos-min.component.html'  
})
export class ProductosMinComponent{
  title = 'productos-min';
  public productos:Array<any> = []

  constructor(
    private productosMinService:ProductosMinService
  ){
    this.productosMinService.getProductos().subscribe((resp:any)=>{      
      this.productos = resp
    })
  }
}
