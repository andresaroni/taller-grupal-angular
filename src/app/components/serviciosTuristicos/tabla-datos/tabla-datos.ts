import { Component } from '@angular/core';
import { Datos } from '../../../models/datos';
import { ServDatosJson } from '../../../services/serv-datos-json';

@Component({
  selector: 'app-tabla-datos',
  imports: [],
  templateUrl: './tabla-datos.html',
  styleUrl: './tabla-datos.css',
})
export class TablaDatos {

  datos: Datos[] = [];

  constructor(private miservicio: ServDatosJson) {
this.cargarDatos();
  }


  cargarDatos() {
    this.miservicio.getDatos().subscribe(
      (data: Datos[]) => {
        this.datos = data;
        console.log("Pelicula " + this.datos[0].nombre);
      }
    );
  }

  buscar(input: HTMLInputElement) {

    let param = input.value;
    this.miservicio.buscarDatos(param).subscribe(
      (data: Datos[]) => {
        this.datos = data;
      }
    );

  }
}
