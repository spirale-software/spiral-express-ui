import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-livraison-coli',
    templateUrl: './livraison-coli.component.html'
})
export class LivraisonColiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Livraison coli'});
    }

    ngOnInit(): void {
    }
}
