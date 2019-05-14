import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autenticar } from './model/autenticar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAutentica = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) { }

  public authUser(user: Autenticar)
  {
    const token = this.http.post<Autenticar>(this.urlAutentica,user);

    console.log(token);
    return token;
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getTokenSession()
  {
    return localStorage.getItem('ACCESS_TOKEN');
  }

}
