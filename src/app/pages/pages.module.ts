import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.route';
import {LoginComponent} from './login/login.component';
import {PartenaireComponent} from './partenaire/partenaire.component';
import {PrimengLibModule} from "./shared/primeng-lib/primeng-lib.module";
import {ClientModule} from "./client/client.module";
import {LivraisonColiComponent} from "./livraison-coli/livraison-coli.component";
import {ReceptionColiComponent} from "./reception-coli/reception-coli.component";
import {EnvoiModule} from "./envoi/envoi.module";

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        PrimengLibModule,
        ClientModule,
        EnvoiModule
    ],
    exports: [RouterModule],
    declarations: [
        AccueilComponent,
        LoginComponent,
        PartenaireComponent,
        LivraisonColiComponent,
        ReceptionColiComponent
    ]
})
export class PagesModule {}
