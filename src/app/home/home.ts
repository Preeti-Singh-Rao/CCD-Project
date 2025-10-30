import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
discoveryList = [
    { code: 'APD', img: 'assets/Images/apd.png', title: 'AgroPat Ultimate Discovery Suite' },
    { code: 'APG', img: 'assets/Images/APG.png', title: 'AgroPat Ultimate Generic Suite' },
    { code: 'TechR', img: 'assets/Images/TechR.png', title: 'Technical Route' },
    { code: 'CT', img: 'assets/Images/CT.png', title: 'ChemiTracker - A Supplier Guide' },
    { code: 'MRL', img: 'assets/Images/MRL.png', title: 'Global MRL Database' },
    { code: 'QP', img: 'assets/Images/QP.png', title: 'Quick Patent - Constraining Patent Guide' },
    { code: 'IPD', img: 'assets/Images/IPD.png', title: 'Indian Pesticide Database' },
    { code: 'GAPD', img: 'assets/Images/GAPD.png', title: 'AgroPat Ultimate Discovery Global Agro Product Directory' },
    { code: 'AP', img: 'assets/Images/AP.png', title: 'Active Patent' },
    { code: 'PharmaVetPat', img: 'assets/Images/PharmaVatPat.jpg', title: 'PharmaVetPat Ultimate' },
    { code: 'XIM', img: 'assets/Images/XIM.png', title: 'AgroPharm XIM DB Beta' },
    { code: 'SPC', img: 'assets/Images/SPC.jpeg', title: 'Supplementary Protection Certificate' }
  ];

  agroList=[
    {title:'Computed And Experimental Physiochem'},
    {title:'New & Existing Active Agrochemical Ingredient'},
    {title:'Constraining Patents, e.g. Compound Patent'},
    {title:'Key Starting Material / Intermediate Information with CAS Number'},
    {title:'Synthetic Commercial Routes'},
    {title:'Innovator / Developer / Registration Information'}
  ];

  routesList=[
    {title:'Innovator and commercial Synthetic Routes'},
    {title:'Intermediate can be searched by their CAS RN., Inchi, Inchikey and IUPAC name etc.'},
    {title:'Agrochemical, Pharmaceutical, Specialty Chemical, Battery Chemicals, Dyes, and LED Chemicals Synthetic Routes'},
    {title:'Intermediate Synthetic Routes with Their Application Report'},
    {title:'Patent and Non-Patent References'},
   
  ];
  patentList=[
    {title:'Identification Grey area in Agrochem space'},
    {title:'Identification of Constraining Agrochemical Combination patent'},
    {title:'Products launching dates (Generic Constraining dates) for various market with SPCs Expiries.'},
    {title:'Competitor Watch for tracking innovation in industry'},
    {title:'Identification of critical patent including compound, Formulation, Combination and Process Patents for product launching.'},
  ];
  pharmaVetList=[
  {title:'New & Existing Active Pharmaceutical Ingredient'},
  {title:'Computed And Experimental Physiochem'},
  {title:'Key Starting Material / Intermediate Information with CAS No.'},
  {title:'Constraining Patents, e.g. Compound Patent'},
  {title:'Constraining Patents, e.g. Compound Patent'},
  {title:'Territory Coverage: USA, Europe, India, Japan, Brazil'},
  {title:'Synthetic Commercial Routes'},
  ];
   agroPharmList=[
    {title:'Trade Data of Active Pharmaceutical Ingredients (API), Formulations (FDFs), and Intermediates.'},
    {title:'Access Buyer, Supplier, Volume, and Pricing Information.'},
  ];

  demoImages=[
    {demoImg:'assets/Images/demo1.png'},
    {demoImg:'assets/Images/demo2.png'},
    {demoImg:'assets/Images/demo3.png'},
    {demoImg:'assets/Images/demo4.png'},
  ]
}
