import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Cambio } from "../cambio";
import { CambioService } from "../cambio.service";

@Component({
  selector: "app-cambio",
  templateUrl: "./cambio.component.html",
  styleUrls: ["./cambio.component.css"],
  providers: [CambioService]
})
export class CambioComponent implements OnInit {
 // cambios: Cambio[];
  @Input() cambios: Cambio[];
  @Output() cambioComicEvent = new EventEmitter();
  constructor(private cambioService: CambioService) {}

  ngOnInit() {}
  cambioComic(cambio: Cambio) {
    console.log(cambio);

    if (confirm("¿Estas seguro de que quieres cambiar tu comic?")) {
      this.cambioComicEvent.emit(this.cambios);
    }
  }

}
