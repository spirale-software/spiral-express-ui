import {NgModule} from "@angular/core";
import {
    BreadcrumbModule, ButtonModule,
    CardModule, DataViewModule, DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule
} from "primeng";

@NgModule({
    imports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule, DropdownModule, ButtonModule],
    exports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule, DropdownModule, ButtonModule]
})
export class PrimengLibModule {

}
