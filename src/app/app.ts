import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';
import { Footer } from './footer/footer';
import { Discovery } from './discovery/discovery';
import { ResidueLimits } from './residue-limits/residue-limits';
import { AgroPat } from './agro-pat/agro-pat';
import { TechnicalRoutes } from './technical-routes/technical-routes';
import { ChemiTracker } from './chemi-tracker/chemi-tracker';
import { QuickPatent } from './quick-patent/quick-patent';
import { PharmaVetPat } from './pharma-vet-pat/pharma-vet-pat';
import { ProductDirectory } from './product-directory/product-directory';
import { AgroPharm } from './agro-pharm/agro-pharm';
import { PestisideDatabase } from './pestiside-database/pestiside-database';
import { WhatWeDo } from './what-we-do/what-we-do';
import { Demo } from './demo/demo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, Header, AboutUs,
    Services, Footer, Discovery, ResidueLimits,
    AgroPat, TechnicalRoutes, ChemiTracker,
    QuickPatent, PharmaVetPat, ProductDirectory,
    AgroPharm, PestisideDatabase, WhatWeDo,Demo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CCD-Project');

}
