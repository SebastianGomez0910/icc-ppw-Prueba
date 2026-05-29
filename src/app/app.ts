import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPage } from "./header/headerPage/headerPage";
import { FooterComponent } from "./footer/footerComponent/footerComponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPage, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pruebaUnidadUno');
}
