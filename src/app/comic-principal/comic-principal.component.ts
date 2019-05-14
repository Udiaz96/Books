import { Component, OnInit } from '@angular/core';
import { CambioService } from '../cambio.service';
import { Cambio } from '../cambio';

@Component({
  selector: 'app-comic-principal',
  templateUrl: './comic-principal.component.html',
  styleUrls: ['./comic-principal.component.css'],
  providers:[CambioService]
})
export class ComicPrincipalComponent implements OnInit {
  cambio: Cambio[];

  constructor(private cambioService: CambioService) { }

  ngOnInit() {
  }

  onCambio(cambio: Cambio){
    this.cambioService.cambioComic(cambio).subscribe(data => {
      console.log(data);
      this.cambio.push(data);
    });
  }

}
