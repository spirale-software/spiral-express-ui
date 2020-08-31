import {NgModule} from "@angular/core";
import {ClientComponent} from "./client.component";
import {ClientUpdateComponent} from "./client-update.component";
import {PrimengLibModule} from "../shared/primeng-lib/primeng-lib.module";

@NgModule({
    imports: [PrimengLibModule],
    exports: [],
    declarations: [ClientComponent, ClientUpdateComponent]
})
export class ClientModule {

}
