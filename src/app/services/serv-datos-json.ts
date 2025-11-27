import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root',
})
export class ServDatosJson {

  private datosUrl = "/datos/data.json"

  constructor(private httpclient: HttpClient) {
  }

  getDatos(): Observable<Datos[]> {
    return this.httpclient.get<Datos[]>(this.datosUrl);
  }

  buscarDatos(param: string): Observable<Datos[]> {
    return this.httpclient.get<Datos[]>(this.datosUrl)
      .pipe(map(datos => datos.filter(d => d.nombre.toLowerCase().includes(param.toLowerCase()))));
  }

}
