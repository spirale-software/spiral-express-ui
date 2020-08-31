import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.route';
import {ClientComponent} from './client/client.component';
import {EnvoiComponent} from './envoi/envoi.component';
import {LoginComponent} from './login/login.component';
import {PartenaireComponent} from './partenaire/partenaire.component';
import {PrimengLibModule} from "./shared/primeng-lib/primeng-lib.module";
import {MenubarModule} from "primeng";
import {ClientModule} from "./client/client.module";

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        PrimengLibModule,
        ClientModule
    ],
    exports: [RouterModule],
    declarations: [
        AccueilComponent,
        EnvoiComponent,
        LoginComponent,
        PartenaireComponent
    ]
})
export class PagesModule {}
