import { Component, OnInit } from '@angular/core';
import { ComicServiceService } from '../comic-service.service';
import { AuthService } from '../auth.service';
import { ComicInsertar } from '../model/comicInsertar';

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
    });
  }

  onDelete(comic: ComicInsertar) {
    console.log("Borrar" + comic.idComics);
    this.comicService.eliminarComic(comic).subscribe(data => {
      console.log(data);
      this.listarComics();
    });
  }


}
