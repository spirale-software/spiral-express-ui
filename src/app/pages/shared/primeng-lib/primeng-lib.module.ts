import {NgModule} from "@angular/core";
import {
    BreadcrumbModule, ButtonModule,
    CardModule, DataViewModule, DialogModule, DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule, PanelModule, ToolbarModule
} from "primeng";

@NgModule({
    imports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule],
    exports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule]
})
export class PrimengLibModule {

}
