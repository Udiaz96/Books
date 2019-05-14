import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cambio } from './cambio';

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  private cambioUrl = 'http://localhost:3000/api/cambio';
  constructor(private http: HttpClient) { }
    cambioComic(cambio: Cambio){
      console.log(cambio);
      return this.http.post<Cambio>(this.cambioUrl, cambio);
    }
}
