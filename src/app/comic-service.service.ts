import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComicInsertar } from './model/comicInsertar';
import { IdToken } from './model/id';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  urlAutentica = 'http://localhost:3000/apiComic/comic';
  uslListaComis = 'http://localhost:3000/apiComic/comic-list';

  constructor(private http: HttpClient) { }

  public agregarComic(comic: ComicInsertar)
  {
    console.log("ACS" + comic);
    return this.http.post<ComicInsertar>(this.urlAutentica, comic);
  }

  public listarComics(id: Number)
  {
    console.log("ID " + id);
    return this.http.post<ComicInsertar[]>(this.uslListaComis, {"id":id});
  }


}
