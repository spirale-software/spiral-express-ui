import {NgModule} from '@angular/core';
import {PartenaireComponent} from './partenaire.component';
import {PartenaireUpdateComponent} from './partenaire-update.component';
import {SharedModule} from '../shared/shared.module';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';

@NgModule({
    imports: [SharedModule, PrimengLibModule],
    exports: [],
    declarations: [PartenaireComponent, PartenaireUpdateComponent]
})
export class PartenaireModule {

}
