import {NgModule} from '@angular/core';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {PrimengLibModule} from './primeng-lib/primeng-lib.module';
import {ScannerDocumentComponent} from './component/scanner-document/scanner-document.component';
import {PersonneDetailComponent} from './component/personne-detail/personne-detail.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from "./component/breadcrumb/breadcrumb.component";

@NgModule({
    imports: [PrimengLibModule, ZXingScannerModule, CommonModule],
    exports: [
        ButtonGroupComponent,
        ScannerDocumentComponent,
        PersonneDetailComponent,
        BreadcrumbComponent
    ],
    declarations: [ButtonGroupComponent, ScannerDocumentComponent, PersonneDetailComponent, BreadcrumbComponent]
})
export class SharedModule {
}
