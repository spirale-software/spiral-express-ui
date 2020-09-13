import {Component} from "@angular/core";

@Component({
    selector: 'app-scanner-document',
    templateUrl: './scanner-document.component.html'
})
export class ScannerDocumentComponent {
    isScannerAllowed = false;

    constructor() {

    }

    onScannerClicked(): void {
        this.isScannerAllowed = true;
    }

    onScanOK(reference): void {
        console.log('onScanOK: ', reference);
    }
}
