import { Cliente } from './../models/Cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  create (cliente: Cliente){
    return this.http.post(this.url, cliente);
  }

  getAll (){
    return this.http.get(this.url)
  }

  getOne (id:number){
    //return this.http.get(this.url + '/'+ id);
    return this.http.get(`${this.url}/${id}`);
  }

  update (cliente: Cliente){
    return this.http.put(`${this.url}/${cliente.page}`, cliente);
  }

  delete (id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
