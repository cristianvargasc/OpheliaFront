import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosAnioService {
  url = environment.backUrl + 'ProductosValorTotalAnio'
  constructor(
    private http: HttpClient
  ) { }
  getProductos(){
    let header = new HttpHeaders()
       .set('Type-content', 'aplication/json')
       return this.http.get(this.url, {
         headers: header
       });
  }
}
