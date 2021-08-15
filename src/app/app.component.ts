import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productos-totales';
  public productos:Array<any> = []

  constructor(
    private productosService:ProductosService
  ){
    /*this.productosService.getProductos().subscribe((resp:any)=>{      
      this.productos = resp
    })*/
  }
}
