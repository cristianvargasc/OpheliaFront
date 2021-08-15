import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteEstimadoService } from 'src/app/services/cliente-estimado.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-estimado',
  templateUrl: './cliente-estimado.component.html',
  styles: [
  ]
})
export class ClienteEstimadoComponent implements OnInit {
  notFound = false;
  title = 'cliente-estimado';
  public cliente:Array<any> = []
  public clientes:Array<any> = []  
  
  constructor(private clienteEstimadoService: ClienteEstimadoService) {    
    this.getClientes();
    this.getCliente("2");
  }

  ngOnInit(): void {  
  }

  getCliente(clienteId: string){
    this.notFound = false;  
    this.clienteEstimadoService.getCliente(clienteId).subscribe((clienteFromTheAPI: any) => {
      this.cliente = clienteFromTheAPI;  
      console.log("Objeto cliente: " + clienteFromTheAPI)
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

  getClientes(){ 
    this.clienteEstimadoService.getClientes().subscribe((clientesFromAPI: any) => {      
      this.clientes = clientesFromAPI;
    });
  }
}
