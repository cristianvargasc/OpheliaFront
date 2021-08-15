import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesEdadFechaService {
  url = environment.backUrl + 'ClientesEdadFecha'
  constructor(
    private http: HttpClient
  ) { }
  getClientes(){
    let header = new HttpHeaders()
       .set('Type-content', 'aplication/json')
       return this.http.get(this.url, {
         headers: header
       });
  }
}
