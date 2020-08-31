import {Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {ClientUpdateComponent} from './client-update.component';

export const CLIENT_ROUTES: Routes = [
    {path: 'clients', component: ClientComponent},
    {path: 'clients/:id/modifier', component: ClientUpdateComponent},
    {path: 'clients/creer', component: ClientUpdateComponent}
];
