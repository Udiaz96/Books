import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComicInsertar } from './model/comicInsertar';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  urlAutentica = 'http://localhost:3000/apiComic/comic';
  constructor(private http: HttpClient) { }

  public agregarComic(comic: ComicInsertar)
  {
    console.log("ACS" + comic);
    return this.http.post<ComicInsertar>(this.urlAutentica,comic);
  }
}
