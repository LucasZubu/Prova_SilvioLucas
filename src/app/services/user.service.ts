import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  getAll() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getOne(id: number): Observable<User> {
    // return this.http.get(this.url + '/' + id);
    return this.http.get<User>(`${this.url}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
