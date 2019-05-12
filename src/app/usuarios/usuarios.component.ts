import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers : [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  users: User[];
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
  }

  saveUser(user:User){
    this.usuarioService.saveUser(user).subscribe(data =>{
      this.users.push(data);
    });
  }

}
