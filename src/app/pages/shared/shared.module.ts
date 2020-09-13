import {NgModule} from '@angular/core';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {PrimengLibModule} from './primeng-lib/primeng-lib.module';
import {ScannerDocumentComponent} from './component/scanner-document/scanner-document.component';
import {PersonneDetailComponent} from './component/personne-detail/personne-detail.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [PrimengLibModule, ZXingScannerModule, CommonModule],
    exports: [
        ButtonGroupComponent,
        ScannerDocumentComponent,
        PersonneDetailComponent
    ],
    declarations: [ButtonGroupComponent, ScannerDocumentComponent, PersonneDetailComponent]
})
export class SharedModule {
}
