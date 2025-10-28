import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agro-pharm',
  imports: [CommonModule],
  templateUrl: './agro-pharm.html',
  styleUrl: './agro-pharm.css',
})
export class AgroPharm {

  agroPharmList=[
    {title:'Trade Data of Active Pharmaceutical Ingredients (API), Formulations (FDFs), and Intermediates.'},
    {title:'Access Buyer, Supplier, Volume, and Pricing Information.'},
  ]
}
