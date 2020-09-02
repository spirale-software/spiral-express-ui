import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-partenaire',
    templateUrl: './partenaire.component.html'
})
export class PartenaireComponent implements OnInit {

    breadcrumbItems: MenuItem[];
    partenaires: any[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Partenaires'});
        this.partenaires = [
            {nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];
    }

    ngOnInit(): void {
    }
}

