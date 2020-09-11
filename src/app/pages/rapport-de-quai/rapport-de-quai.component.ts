import {Component} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-rapport-de-quai',
    templateUrl: './rapport-de-quai.component.html'
})
export class RapportDeQuaiComponent {

    breadcrumbItems: MenuItem[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Rapport de quai'});
    }


}

