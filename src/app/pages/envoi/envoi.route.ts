import {Routes} from '@angular/router';
import {EnvoiComponent} from './envoi.component';
import {EnvoiUpdateComponent} from './envoi-update.component';

export const ENVOI_ROUTES: Routes = [
    {path: 'envois', component: EnvoiComponent},
    {path: 'envois/:id/modifier', component: EnvoiUpdateComponent},
    {path: 'envois/creer', component: EnvoiUpdateComponent}
];
