import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers : [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  users: User[];
  constructor(private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit() {
  }

  saveUser(user: User){
    console.log(user);
    this.usuarioService.saveUser(user).subscribe(data =>{
      console.log(data);
      this.router.navigateByUrl('');
      this.users.push(data);
    });
  }

}
