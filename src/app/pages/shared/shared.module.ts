import {NgModule} from '@angular/core';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {PrimengLibModule} from './primeng-lib/primeng-lib.module';
import {ScannerDocumentComponent} from './component/scanner-document/scanner-document.component';

@NgModule({
    imports: [PrimengLibModule],
    exports: [
        ButtonGroupComponent,
        ScannerDocumentComponent
    ],
    declarations: [ButtonGroupComponent, ScannerDocumentComponent]
})
export class SharedModule {
}
