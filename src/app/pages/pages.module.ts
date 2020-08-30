import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.route';
import {ClientComponent} from './client/client.component';
import {EnvoiComponent} from './envoi/envoi.component';
import {LoginComponent} from './login/login.component';
import {PartenaireComponent} from './partenaire/partenaire.component';

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES)
    ],
    exports: [RouterModule],
    declarations: [
        AccueilComponent,
        ClientComponent,
        EnvoiComponent,
        LoginComponent,
        PartenaireComponent
    ]
})
export class PagesModule {}
