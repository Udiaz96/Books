import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/user';
import { UsuarioService } from '../usuario.service';
import Swal from 'sweetalert2';
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
    user.idRol = 2;
    this.usuarioService.updateUser(user).subscribe(data =>{
      this.selectUser = null;
      Swal.fire({
        type: "success",
        title: "Actualización correcta",
        text: "Se ha actualizado el usuario"
      })
  });
  }

  deleteUser(user:User){
    Swal.fire({
      title:'¿Eliminar usuario?',
      text: "Esta acción no se puede revertir",
      type:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) =>{
      if(result.value){
          this.usuarioService.deleteUser(user).subscribe(data=>{
            this.selectUser = null; });
            Swal.fire({
              type: "success",
              title: "Eliminado correctamente",
              text: "Se ha eliminado al usuario del sistema"
            }).then(function(){
              location.reload();
            })
      }
    })
  }



}
