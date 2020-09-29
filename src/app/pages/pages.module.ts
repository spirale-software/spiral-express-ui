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
import {RapportDeQuaiComponent} from './rapport-de-quai/rapport-de-quai.component';
import {RapportDeLivraisonComponent} from './rapport-de-livraison/rapport-de-livraison.component';
import {DestinataireModule} from './destinataire/destinataire.module';
import {RapportDeQuaiUpdateComponent} from "./rapport-de-quai/rapport-de-quai-update.component";
import {RapportDeQuaiModule} from "./rapport-de-quai/rapport-de-quai.module";

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        PrimengLibModule,
        ClientModule,
        EnvoiModule,
        PartenaireModule,
        SharedModule,
        DestinataireModule,
        RapportDeQuaiModule
    ],
    exports: [RouterModule, AccueilComponent],
    declarations: [
        AccueilComponent,
        LoginComponent,
        LivraisonColiComponent,
        ReceptionColiComponent,
        TableauDeBordComponent,
        RapportDeLivraisonComponent
    ]
})
export class PagesModule {}
