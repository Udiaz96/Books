import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private carSaveUrl = 'http://localhost:3000/api/agregarUsuario';
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post<User>(this.carSaveUrl, user);
  }
}
