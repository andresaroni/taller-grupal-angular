import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaList } from "./components/datos/tabla-list/tabla-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
