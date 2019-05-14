import { Component, OnInit } from '@angular/core';
import { ComicInsertar } from '../model/comicInsertar';
import { ComicServiceService } from '../comic-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

    comics: ComicInsertar[]

  constructor(private comicService: ComicServiceService, private authService: AuthService) { }

  ngOnInit() {
  }

  saveComic(comic: ComicInsertar) {

    console.log(comic);
    comic.idUsuario = Number(this.authService.getTokenSession());
    this.comicService.agregarComic(comic).subscribe(data => {

    this.comics.push(data);

    console.log(data);
    /*this.selectedCar = data;
    this.formVisible = false;*/
    });
  }

}
