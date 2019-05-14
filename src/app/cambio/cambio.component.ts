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
    this.cambioService.cambioComicLista().subscribe(data => {
      this.cambiolista = data;
    });
  }
  cambioComic(cambio: Cambio) {
    console.log(cambio);

    if (confirm("¿Estas seguro de que quieres cambiar tu comic?")) {
      this.cambioComicEvent.emit(this.cambios);
    }
  }

}
