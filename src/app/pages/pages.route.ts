import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ClientComponent} from './client/client.component';
import {EnvoiComponent} from './envoi/envoi.component';
import {PartenaireComponent} from './partenaire/partenaire.component';
import {CLIENT_ROUTES} from "./client/client.route";

export const PAGES_ROUTES: Routes = [
    {
        path: 'accueil',
        component: AccueilComponent
    },
        ...CLIENT_ROUTES,
    {
        path: 'gestion-des-envois',
        component: EnvoiComponent
    },
    {
        path: 'partenaires',
        component: PartenaireComponent
    }
];
