import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { datos } from '../models/datos';

@Injectable({
  providedIn: 'root',
})
export class ServDatosJson {

  private datosUrl ="http://localhost:4200"

  constructor(private httpclient:HttpClient){
  }

  getDatos():Observable<datos[]>{
    return this.httpclient.get<datos[]>(this.datosUrl);
  }

  getMoviesById(id:number):Observable<datos>{
    return this.httpclient.get<datos>(`${this.datosUrl}/${id}`);

  }

  getActiveMovies():Observable<datos[]>{
    return this.httpclient.get<datos[]>(this.datosUrl)
    .pipe(map(datos=>datos.filter(m=>m.active===true))
    );
  }


}
