import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cambio, CambioArreglo } from './cambio';

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  private cambioUrl = 'http://localhost:3000/api/cambio';
  private cambioListaUrl = 'http://localhost:3000/api/cambio';
  constructor(private http: HttpClient) { }
    cambioComic(cambio: Cambio){
      console.log(cambio);
      return this.http.post<Cambio>(this.cambioUrl, cambio);
    }
    cambioComicLista(){
      return this.http.get<CambioArreglo[]>(this.cambioListaUrl);
    }
}
