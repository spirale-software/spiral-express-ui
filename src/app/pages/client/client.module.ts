import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {ClientUpdateComponent} from './client-update.component';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, PrimengLibModule, SharedModule],
    exports: [],
    declarations: [ClientComponent, ClientUpdateComponent]
})
export class ClientModule {

}
