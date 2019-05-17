import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Cambio, CambioArreglo } from "../cambio";
import { CambioService } from "../cambio.service";

@Component({
  selector: "app-cambio",
  templateUrl: "./cambio.component.html",
  styleUrls: ["./cambio.component.css"],
  providers: [CambioService]
})
export class CambioComponent implements OnInit {
  cambiolista: CambioArreglo[];
  @Input() cambios: Cambio[];
  @Output() cambioComicEvent = new EventEmitter();


  constructor(private cambioService: CambioService) {}



  ngOnInit() {
    console.log("OnInit");
    this.listarCambios();
  }

  listarCambios()
  {
    this.cambioService.cambioComicLista().subscribe(data => {
      console.log(data);
      this.cambiolista = data;
    });
  }

  cambioComic(cambio: Cambio) {
    console.log(cambio);

    if (confirm("¿Estas seguro de que quieres cambiar tu comic?")) {
      this.cambioComicEvent.emit(this.cambios);
    }
  }

  onCambiar(cambio: CambioArreglo){

    console.log(cambio);
    console.log(cambio.idUsuarios);

// tslint:disable-next-line: prefer-const
    let cambiarComic = cambio;
    console.log(cambiarComic);
    this.cambioService.cambioComic(cambiarComic).subscribe(data =>
      {
          console.log(data);
          this.listarCambios();
      });
  }

}
