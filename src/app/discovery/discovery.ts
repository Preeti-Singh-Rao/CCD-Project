import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discovery',
  imports: [CommonModule],
  templateUrl: './discovery.html',
  styleUrl: './discovery.css',
})
export class Discovery {
 
  discoveryList = [
    { code: 'APD', img: '', title: 'AgroPat Ultimate Discovery Suite' },
    { code: 'APG', img: '', title: 'AgroPat Ultimate Generic Suite' },
    { code: 'TechR', img: '', title: 'Technical Route' },
    { code: 'CT', img: '', title: 'ChemiTracker - A Supplier Guide' },
    { code: 'MRL', img: '', title: 'Global MRL Database' },
    { code: 'QP', img: '', title: 'Quick Patent - Constraining Patent Guide' },
    { code: 'IPD', img: '', title: 'Indian Pesticide Database' },
    { code: 'GAPD', img: '', title: 'AgroPat Ultimate Discovery Global Agro Product Directory' },
    { code: 'AP', img: '', title: 'Active Patent' },
    { code: 'PharmaVetPat', img: '', title: 'PharmaVetPat Ultimate' },
    { code: 'XIM', img: '', title: 'AgroPharm XIM DB Beta' },
    { code: 'SPC', img: '', title: 'Supplementary Protection Certificate' }
  ];

}
