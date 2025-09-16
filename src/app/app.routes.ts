import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { FAQComponent } from './components/FAQ/FAQ.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarrierComponent } from './components/carrier/carrier.component';
import { SzamvitelComponent } from './components/szamvitel/szamvitel.component';
import { KonyvelesComponent } from './components/konyveles/konyveles.component';
import { KonyvvizsgalatComponent } from './components/konyvvizsgalat/konyvvizsgalat.component';
import { AdotanacsadasComponent } from './components/adotanacsadas/adotanacsadas.component';
import { PenzugyiComponent } from './components/penzugyi/penzugyi.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  //{ path: 'documents', component: DocumentsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'carrier', component: CarrierComponent },
  { path: 'szamvitel', component: SzamvitelComponent },
  { path: 'konyveles', component: KonyvelesComponent },
  { path: 'konyvvizsgalat', component: KonyvvizsgalatComponent },
  { path: 'adotanacsadas', component: AdotanacsadasComponent },
  { path: 'penzugyi', component: PenzugyiComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];
