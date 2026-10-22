import { Routes } from '@angular/router';

import { GestionVoyageComponent } from './gestion-voyage/gestion-voyage.component';
import { AjoutVoyageComponent } from './ajout-voyage/ajout-voyage.component';
import { EditVoyageComponent } from './edit-voyage/edit-voyage.component';
import { DetailVoyageComponent } from './detail-voyage/detail-voyage.component';

import { GestionDestinationComponent } from './gestion-destination/gestion-destination.component';
import { AjoutDestinationComponent } from './ajout-destination/ajout-destination.component';
import { EditDestinationComponent } from './edit-destination/edit-destination.component';

export const routes: Routes = [
  { path: '', redirectTo: 'voyages', pathMatch: 'full' },

  { path: 'voyages', component: GestionVoyageComponent },
  { path: 'ajout-voyage', component: AjoutVoyageComponent },
  { path: 'edit-voyage/:id', component: EditVoyageComponent },
  { path: 'detail-voyage/:id', component: DetailVoyageComponent },
  { path: 'edit-voyage/:id', component: EditVoyageComponent },

  { path: 'destinations', component: GestionDestinationComponent },
  { path: 'ajout-destination', component: AjoutDestinationComponent },
  { path: 'edit-destination/:id', component: EditDestinationComponent }

];