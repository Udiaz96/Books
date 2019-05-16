import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComicInsertar } from './model/comicInsertar';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  urlAutentica = 'http://localhost:3000/apiComic/comic';
  urlActualizar = 'http://localhost:3000/apiComic/comic-update';
  uslListaComis = 'http://localhost:3000/apiComic/comic-list';
  urlDeleteComic = 'http://localhost:3000/apiComic/comic-delete';

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

  public actualizarComic(comic: ComicInsertar)
  {
    console.log(comic);
    return this.http.post<any>(this.urlActualizar, comic);
  }

  public eliminarComic(comic: ComicInsertar)
  {
    console.log(comic.idComics);
    return this.http.post<any>(this.urlDeleteComic,comic);
  }
}
