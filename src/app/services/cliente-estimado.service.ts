import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteEstimadoService {
  url = environment.backUrl + 'Clientes'
  urlEstimado = environment.backUrl + 'ClienteEstimado/'
  constructor(private http: HttpClient) { }

  getCliente(clienteId: string): Observable<Cliente>{
    const urlCliente = this.urlEstimado + clienteId;   

    let header = new HttpHeaders()
       .set('Type-content', 'aplication/json')
       return this.http.get<Cliente>(urlCliente, {
         headers: header
       });
  }

  getClientes(){
    let header = new HttpHeaders()
       .set('Type-content', 'aplication/json')
       return this.http.get(this.url, {
         headers: header
       });
  }

}
