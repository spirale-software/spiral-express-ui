import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {PartenaireComponent} from './partenaire/partenaire.component';
import {CLIENT_ROUTES} from "./client/client.route";
import {LIVRAISON_COLI_ROUTES} from "./livraison-coli/livraison-coli.route";
import {RECEPTION_COLI_ROUTES} from "./reception-coli/reception-coli.route";
import {ENVOI_ROUTES} from "./envoi/envoi.route";

export const PAGES_ROUTES: Routes = [
    {
        path: 'accueil',
        component: AccueilComponent
    },
     ...CLIENT_ROUTES,
    ...LIVRAISON_COLI_ROUTES,
    ...RECEPTION_COLI_ROUTES,
    ...ENVOI_ROUTES,
    {
        path: 'partenaires',
        component: PartenaireComponent
    }
];
