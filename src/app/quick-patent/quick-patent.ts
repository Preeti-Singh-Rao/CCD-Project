import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-patent',
  imports: [CommonModule],
  templateUrl: './quick-patent.html',
  styleUrl: './quick-patent.css',
})
export class QuickPatent {

  patentList=[
    {title:'Identification Grey area in Agrochem space'},
    {title:'Identification of Constraining Agrochemical Combination patent'},
    {title:'Products launching dates (Generic Constraining dates) for various market with SPCs Expiries.'},
    {title:'Competitor Watch for tracking innovation in industry'},
    {title:'Identification of critical patent including compound, Formulation, Combination and Process Patents for product launching.'},
  ]
}
