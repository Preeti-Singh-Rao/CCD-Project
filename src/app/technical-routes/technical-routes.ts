import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-routes',
  imports: [CommonModule],
  templateUrl: './technical-routes.html',
  styleUrl: './technical-routes.css',
})
export class TechnicalRoutes {

  routesList=[
    {title:'Innovator and commercial Synthetic Routes'},
    {title:'Intermediate can be searched by their CAS RN., Inchi, Inchikey and IUPAC name etc.'},
    {title:'Agrochemical, Pharmaceutical, Specialty Chemical, Battery Chemicals, Dyes, and LED Chemicals Synthetic Routes'},
    {title:'Intermediate Synthetic Routes with Their Application Report'},
    {title:'Patent and Non-Patent References'},
   
  ]
  

}
