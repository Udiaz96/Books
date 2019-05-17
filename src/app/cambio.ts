import { NumberValueAccessor } from '@angular/forms/src/directives';

export class CambioArreglo {
  idUsuarios: number;

  my_idComic: number;
  my_title: string;
  my_author: string;
  my_number: string;
  my_editorial: string;

  wanted_idComic: number;
  wanted_title: string;
  wanted_author: string;
  wanted_number: string;
  wanted_editorial: string;
}

export class Cambio {
  idUsuarios: number;
  my_idComic: number;
  wanted_idComic: number;
}
