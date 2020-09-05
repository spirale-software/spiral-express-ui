import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CLIENT_ROUTES} from './client/client.route';
import {LIVRAISON_COLI_ROUTES} from './livraison-coli/livraison-coli.route';
import {RECEPTION_COLI_ROUTES} from './reception-coli/reception-coli.route';
import {ENVOI_ROUTES} from './envoi/envoi.route';
import {TableauDeBordComponent} from './tableau-de-bord/tableau-de-bord.component';
import {PARTENAIRE_ROUTES} from './partenaire/partenaire.route';

export const PAGES_ROUTES: Routes = [
    {
        path: 'accueil',
        redirectTo: '',
        pathMatch: 'full',
        component: AccueilComponent
    },
    {
        path: 'tableau-de-bord',
        component: TableauDeBordComponent
    },
     ...CLIENT_ROUTES,
    ...LIVRAISON_COLI_ROUTES,
    ...RECEPTION_COLI_ROUTES,
    ...ENVOI_ROUTES,
    ...PARTENAIRE_ROUTES
];
