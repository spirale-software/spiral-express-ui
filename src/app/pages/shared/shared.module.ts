import {NgModule} from "@angular/core";
import {ButtonGroupComponent} from "./button-group/button-group.component";
import {PrimengLibModule} from "./primeng-lib/primeng-lib.module";

@NgModule({
    imports: [PrimengLibModule],
    exports: [
        ButtonGroupComponent
    ],
    declarations: [ButtonGroupComponent]
})
export class SharedModule {
}
