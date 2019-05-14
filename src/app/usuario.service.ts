import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSaveUrl = 'http://localhost:3000/api/agregarUsuario';
  private userListUrl = 'http://localhost:3000/api/listaUsuarios';
  //private userDeleteUrl = 'http://localhost:3000/api/eliminarUsuario/';

  constructor(private http:HttpClient) { }

  saveUser(user:User){
    console.log(user);
    return this.http.post<User>(this.userSaveUrl, user);
  }

  listUsers(){
    return this.http.get<User[]>(this.userListUrl);
  }

  updateUser(user :User){
    console.log("Estoy en update del servicio");
    return this.http.put<User>('http://localhost:3000/api/actuaUsu/'+user.idUsuarios, user);
  }

  deleteUser(user: User){
    return this.http.delete('http://localhost:3000/api/eliminarUsuario/'+user.idUsuarios);
  }
}
