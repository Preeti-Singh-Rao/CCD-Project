import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Header,Home,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CCD-Project');

}
