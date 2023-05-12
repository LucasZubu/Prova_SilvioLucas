import { Resp } from './../models/resp.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient,private alertController: AlertController) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


  getAll() : Observable<User[]> {
    return this.http.get<Resp>(this.url).pipe(
      map(retorno => retorno.data),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number):Observable<User>{
    // return this.http.get(this.url + '/' + id);
     return this.http.get<Resp>(`${this.url}/${id}`).pipe(
       map(retorno => retorno.data),
       catchError(erro => this.exibirErro(erro))
       );
  }

  update(user: User):Observable<User>{
    return this.http.put<User>(`${this.url}/${user.id}`, user).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErro(erro: any):Observable<any>{
    const titulo = `Erro na conexão!`;
    const msg = `verifique sua conexão \n ou \n Informe esse erro ao suporte ${erro.status}`;
    this.presentAlert(titulo, msg);
    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
