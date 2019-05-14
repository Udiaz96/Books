import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/user';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-administar-usuarios',
  templateUrl: './administar-usuarios.component.html',
  styleUrls: ['./administar-usuarios.component.css']
})
export class AdministarUsuariosComponent implements OnInit {
  users: User[];
  selectUser : User[];

  @Output() updatedUserEvent = new EventEmitter();
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.listUsers().subscribe(data =>{
      this.users = data;
    });
  }

  onSelectUser( car: any){
    this.selectUser = car;
    console.log(car);
  }

  updateUser(user: User){
    this.usuarioService.updateUser(user).subscribe(data =>{
      this.selectUser = null;
  });
  }

  deleteUser(user:User){
    this.usuarioService.deleteUser(user).subscribe(data=>{
      this.selectUser = null;
    });
  }



}
