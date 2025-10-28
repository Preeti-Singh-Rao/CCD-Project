import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pharma-vet-pat',
  imports: [CommonModule],
  templateUrl: './pharma-vet-pat.html',
  styleUrl: './pharma-vet-pat.css',
})
export class PharmaVetPat {

  pharmaVetList=[
  {title:'New & Existing Active Pharmaceutical Ingredient'},
  {title:'Computed And Experimental Physiochem'},
  {title:'Key Starting Material / Intermediate Information with CAS No.'},
  {title:'Constraining Patents, e.g. Compound Patent'},
  {title:'Constraining Patents, e.g. Compound Patent'},
  {title:'Territory Coverage: USA, Europe, India, Japan, Brazil'},
  {title:'Synthetic Commercial Routes'},
  ]
}
