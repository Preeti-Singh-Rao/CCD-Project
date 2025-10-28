import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agro-pat',
  imports: [CommonModule],
  templateUrl: './agro-pat.html',
  styleUrl: './agro-pat.css',
})
export class AgroPat {

  agroList=[
    {title:'Computed And Experimental Physiochem'},
    {title:'New & Existing Active Agrochemical Ingredient'},
    {title:'Constraining Patents, e.g. Compound Patent'},
    {title:'Key Starting Material / Intermediate Information with CAS Number'},
    {title:'Synthetic Commercial Routes'},
    {title:'Innovator / Developer / Registration Information'}
  ]

    imagePath:string="images/Agrochemical database.jpg"

}
