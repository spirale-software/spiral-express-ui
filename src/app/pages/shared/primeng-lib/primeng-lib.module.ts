import {NgModule} from "@angular/core";
import {
    BreadcrumbModule, ButtonModule,
    CardModule, DataViewModule, DialogModule, DropdownModule, DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule, PanelModule, ToolbarModule
} from "primeng";

@NgModule({
    imports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule, DynamicDialogModule],
    exports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule, DynamicDialogModule]
})
export class PrimengLibModule {

}
