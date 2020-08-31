import {NgModule} from "@angular/core";
import {
    BreadcrumbModule, ButtonModule,
    CardModule, DataViewModule, DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule, ToolbarModule
} from "primeng";

@NgModule({
    imports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule],
    exports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule]
})
export class PrimengLibModule {

}
