import {NgModule} from '@angular/core';
import {EnvoiComponent} from './envoi.component';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {EnvoiUpdateComponent} from './envoi-update.component';
import {SharedModule} from '../shared/shared.module';
import {EnvoiDetailComponent} from './envoi-detail.component';

@NgModule({
    imports: [PrimengLibModule, SharedModule],
    exports: [],
    declarations: [
        EnvoiComponent,
        EnvoiUpdateComponent,
        EnvoiDetailComponent
    ]
})
export class EnvoiModule {}
