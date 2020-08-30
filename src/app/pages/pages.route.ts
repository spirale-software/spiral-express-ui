import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ClientComponent} from './client/client.component';
import {EnvoiComponent} from './envoi/envoi.component';
import {PartenaireComponent} from './partenaire/partenaire.component';

export const PAGES_ROUTES: Routes = [
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'clients',
        component: ClientComponent
    },
    {
        path: 'gestion-des-envois',
        component: EnvoiComponent
    },
    {
        path: 'partenaires',
        component: PartenaireComponent
    }
];
