import { Component, OnInit } from '@angular/core';
import { ComicServiceService } from '../comic-service.service';
import { AuthService } from '../auth.service';
import { ComicInsertar } from '../model/comicInsertar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-comics',
  templateUrl: './lista-comics.component.html',
  styleUrls: ['./lista-comics.component.css']
})
export class ListaComicsComponent implements OnInit {

  comics: ComicInsertar[];

  constructor(private comicService: ComicServiceService, private authService: AuthService) { }

  listarComics() {
    this.comicService.listarComics(Number(this.authService.getTokenSession())).subscribe(data => {
      console.log(data);
      this.comics = data;
    });
  }
  ngOnInit() {
    this.listarComics();
  }

  onUpdate(comic: ComicInsertar) {

    console.log(comic);
    this.comicService.actualizarComic(comic).subscribe(data => {
      console.log(data);

      Swal.fire({
        type: "success",
        title: "Actualización correcta",
        text: "Se ha actualizado el comic"
      })

    });
  }

  onDelete(comic: ComicInsertar) {


    Swal.fire({
      title:'¿Eliminar Comic?',
      text: "Esta acción no se puede revertir",
      type:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) =>{
      if(result.value){
        console.log("Borrar" + comic.idComics);
        this.comicService.eliminarComic(comic).subscribe(data => {
          console.log(data);
          this.listarComics();

            Swal.fire({
              type: "success",
              title: "Eliminado correctamente",
              text: "Se ha eliminado al usuario del sistema"
            }).then(function(){
              location.reload();
            })
      })
    }


  })

}


}
