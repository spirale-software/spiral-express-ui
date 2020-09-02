import {NgModule} from '@angular/core';
import {EnvoiComponent} from './envoi.component';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {EnvoiUpdateComponent} from './envoi-update.component';

@NgModule({
    imports: [PrimengLibModule],
    exports: [],
    declarations: [
        EnvoiComponent,
        EnvoiUpdateComponent
    ]
})
export class EnvoiModule {}
