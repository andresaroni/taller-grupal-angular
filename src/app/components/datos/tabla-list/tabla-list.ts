import { Component } from '@angular/core';
import { datos } from '../../../models/datos';
import { ServDatosJson } from '../../../services/serv-datos-json';

@Component({
  selector: 'app-tabla-list',
  imports: [],
  templateUrl: './tabla-list.html',
  styleUrl: './tabla-list.css',
})
export class TablaList {
  datos:datos[]=[];
dataSource: any;

  constructor(private miservicio:ServDatosJson ){
  }

  ngOnInit():void{
    this.loaddatos();
  }

  loaddatos():void{
    this.miservicio.getDatos().subscribe(
      (data:datos[])=>{
        this.datos = data;
        console.log("datos" + this.datos[0].nombre)
      }
    );
  }



}


