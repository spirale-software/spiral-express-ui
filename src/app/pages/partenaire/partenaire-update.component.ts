import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-partenaire-update',
    templateUrl: './partenaire-update.component.html'
})
export class PartenaireUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.breadcrumbItems.push({label: 'créer nouveau client'});
    }

    ngOnInit(): void {

    }


}
