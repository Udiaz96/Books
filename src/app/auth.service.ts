import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autenticar } from './model/autenticar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authUser(user: Autenticar)
  {
    const token = this.http.post<Autenticar>('http://localhost:3000/users/login',user);
    console.log(token);

    return token;
  }
}
