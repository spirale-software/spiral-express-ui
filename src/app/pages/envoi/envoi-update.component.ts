import {Component} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html'
})
export class EnvoiUpdateComponent {

    breadcrumbItems: MenuItem[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
    }

}

