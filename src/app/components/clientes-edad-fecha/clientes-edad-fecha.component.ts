import { Component, OnInit } from '@angular/core';
import { ClientesEdadFechaService } from '../../services/clientes-edad-fecha.service';

@Component({
  selector: 'app-clientes-edad-fecha',
  templateUrl: './clientes-edad-fecha.component.html',
  styles: [
  ]
})
export class ClientesEdadFechaComponent{
  title = 'clientes-edad-fecha';
  public clientes:Array<any> = []

  constructor(
    private clientesEdadFechaService:ClientesEdadFechaService
  ){
    this.clientesEdadFechaService.getClientes().subscribe((resp:any)=>{      
      this.clientes = resp
    })
  }
}
