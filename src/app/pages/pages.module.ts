import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.route';
import {LoginComponent} from './login/login.component';
import {PrimengLibModule} from './shared/primeng-lib/primeng-lib.module';
import {ClientModule} from './client/client.module';
import {LivraisonColiComponent} from './livraison-coli/livraison-coli.component';
import {ReceptionColiComponent} from './reception-coli/reception-coli.component';
import {EnvoiModule} from './envoi/envoi.module';
import {SharedModule} from './shared/shared.module';
import {TableauDeBordComponent} from './tableau-de-bord/tableau-de-bord.component';
import {PartenaireModule} from './partenaire/partenaire.module';

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        PrimengLibModule,
        ClientModule,
        EnvoiModule,
        PartenaireModule,
        SharedModule
    ],
    exports: [RouterModule],
    declarations: [
        AccueilComponent,
        LoginComponent,
        LivraisonColiComponent,
        ReceptionColiComponent,
        TableauDeBordComponent
    ]
})
export class PagesModule {}
