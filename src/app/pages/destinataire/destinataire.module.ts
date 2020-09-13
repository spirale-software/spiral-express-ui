import {NgModule} from '@angular/core';
import {DestinataireComponent} from './destinataire.component';
import {SharedModule} from '../shared/shared.module';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {CommonModule} from '@angular/common';
import {DestinataireUpdateComponent} from './destinataire-update.component';

@NgModule({
    imports: [PrimengLibModule, SharedModule, CommonModule],
    exports: [],
    declarations: [DestinataireComponent, DestinataireUpdateComponent]
})
export class DestinataireModule {

}
