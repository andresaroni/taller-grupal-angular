import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaDatos } from "./components/serviciosTuristicos/tabla-datos/tabla-datos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaDatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
